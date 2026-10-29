import { createHash, randomUUID } from "node:crypto";
import { existsSync, mkdirSync, readFileSync, renameSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { deflateRawSync } from "node:zlib";
import { calculateCurrentLocateStatus, POLICY as TIX811_POLICY } from "../src/modules/crew811/currentStatus.mjs";

const rootDir = fileURLToPath(new URL("..", import.meta.url));
const defaultDataDir = join(rootDir, "data");

export function computeSha256Hex(bufferOrString) {
  return createHash("sha256").update(bufferOrString).digest("hex");
}

function crc32(buf) {
  let crc = 0xffffffff;
  for (let i = 0; i < buf.length; i++) {
    crc ^= buf[i];
    for (let j = 0; j < 8; j++) {
      crc = (crc >>> 1) ^ (crc & 1 ? 0xedb88320 : 0);
    }
  }
  return (crc ^ 0xffffffff) >>> 0;
}

export function buildZipArchive(entries) {
  const localHeaders = [];
  const centralHeaders = [];
  let offset = 0;

  for (const entry of entries) {
    const nameBuf = Buffer.from(entry.name, "utf8");
    const rawData = Buffer.isBuffer(entry.data) ? entry.data : Buffer.from(String(entry.data ?? ""), "utf8");
    const compressed = deflateRawSync(rawData);
    const useDeflate = compressed.length < rawData.length;
    const payload = useDeflate ? compressed : rawData;
    const method = useDeflate ? 8 : 0;
    const crc = crc32(rawData);

    const local = Buffer.alloc(30 + nameBuf.length);
    local.writeUInt32LE(0x04034b50, 0);
    local.writeUInt16LE(20, 4);
    local.writeUInt16LE(0, 6);
    local.writeUInt16LE(method, 8);
    local.writeUInt16LE(0, 10);
    local.writeUInt16LE(0x5421, 12);
    local.writeUInt32LE(crc, 14);
    local.writeUInt32LE(payload.length, 18);
    local.writeUInt32LE(rawData.length, 22);
    local.writeUInt16LE(nameBuf.length, 26);
    local.writeUInt16LE(0, 28);
    nameBuf.copy(local, 30);

    localHeaders.push(local, payload);

    const central = Buffer.alloc(46 + nameBuf.length);
    central.writeUInt32LE(0x02014b50, 0);
    central.writeUInt16LE(20, 4);
    central.writeUInt16LE(20, 6);
    central.writeUInt16LE(0, 8);
    central.writeUInt16LE(method, 10);
    central.writeUInt16LE(0, 12);
    central.writeUInt16LE(0x5421, 14);
    central.writeUInt32LE(crc, 16);
    central.writeUInt32LE(payload.length, 20);
    central.writeUInt32LE(rawData.length, 24);
    central.writeUInt16LE(nameBuf.length, 28);
    central.writeUInt16LE(0, 30);
    central.writeUInt16LE(0, 32);
    central.writeUInt16LE(0, 34);
    central.writeUInt16LE(0, 36);
    central.writeUInt32LE(0, 38);
    central.writeUInt32LE(offset, 42);
    nameBuf.copy(central, 46);

    centralHeaders.push(central);
    offset += local.length + payload.length;
  }

  const centralSize = centralHeaders.reduce((sum, b) => sum + b.length, 0);
  const eocd = Buffer.alloc(22);
  eocd.writeUInt32LE(0x06054b50, 0);
  eocd.writeUInt16LE(0, 4);
  eocd.writeUInt16LE(0, 6);
  eocd.writeUInt16LE(entries.length, 8);
  eocd.writeUInt16LE(entries.length, 10);
  eocd.writeUInt32LE(centralSize, 12);
  eocd.writeUInt32LE(offset, 16);
  eocd.writeUInt16LE(0, 18);

  return Buffer.concat([...localHeaders, ...centralHeaders, eocd]);
}

function initialSeedData() {
  const jobs = {
    "JOB-1045": {
      customer: "WINDSTREAM",
      status: "Ready to Bill",
      issuedTo: "Windstream OSP Closeout / AP",
      recipient: "ap@windstream.example",
      project: "PINE HILL FTTH EXPANSION",
      siteId: "TXL-0456",
      siteName: "PINE HILL",
      siteType: "MONOPOLE",
      address: "1250 PINE HILL RD<br>AUSTIN, TX 78737",
      county: "TRAVIS",
      mapDate: "05/14/2024",
      drawnBy: "Field Team 2",
      defaultAsset: "HH-1",
      workspaceId: "demo-seed",
      customerId: "windstream",
      projectId: "pine-hill-ftth-expansion",
      storageRoot: "workspaces/demo-seed/customers/windstream/projects/pine-hill-ftth-expansion/jobs/job-1045",
      assets: {
        handhole: "HH-1",
        splice: "SC-1",
        vaultA: "SV-1",
        vaultB: "SV-2",
        underground: "UG-1",
      },
    },
    "JOB-1046": {
      customer: "KINETIC",
      status: "Missing Proof",
      issuedTo: "Kinetic Construction Closeout",
      recipient: "closeout@kinetic.example",
      project: "OAK RIDGE FIBER EXTENSION",
      siteId: "TXL-0461",
      siteName: "OAK RIDGE",
      siteType: "UG FIBER",
      address: "804 OAK RIDGE DR<br>ROUND ROCK, TX 78664",
      county: "WILLIAMSON",
      mapDate: "06/03/2026",
      drawnBy: "Field Team 4",
      defaultAsset: "OR-HH-2",
      workspaceId: "demo-seed",
      customerId: "kinetic",
      projectId: "oak-ridge-fiber-extension",
      storageRoot: "workspaces/demo-seed/customers/kinetic/projects/oak-ridge-fiber-extension/jobs/job-1046",
      assets: {
        handhole: "OR-HH-2",
        splice: "OR-SC-3",
        vaultA: "OR-SV-4",
        vaultB: "OR-SV-5",
        underground: "OR-UG-2",
      },
    },
    "JOB-1047": {
      customer: "SPECTRUM",
      status: "Rejected",
      issuedTo: "Spectrum OSP Billing Review",
      recipient: "ospbilling@spectrum.example",
      project: "CEDAR PARK NODE SPLIT",
      siteId: "TXL-0472",
      siteName: "CEDAR PARK",
      siteType: "NODE / UG",
      address: "219 BRUSHY CREEK RD<br>CEDAR PARK, TX 78613",
      county: "WILLIAMSON",
      mapDate: "06/10/2026",
      drawnBy: "Field Team 1",
      defaultAsset: "CP-HH-7",
      workspaceId: "demo-seed",
      customerId: "spectrum",
      projectId: "cedar-park-node-split",
      storageRoot: "workspaces/demo-seed/customers/spectrum/projects/cedar-park-node-split/jobs/job-1047",
      assets: {
        handhole: "CP-HH-7",
        splice: "CP-SC-2",
        vaultA: "CP-SV-1",
        vaultB: "CP-SV-3",
        underground: "CP-UG-4",
      },
    },
    "JOB-1048": {
      customer: "AT&T",
      status: "Ready to Bill",
      issuedTo: "AT&T Fiber Closeout Desk",
      recipient: "fibercloseout@att.example",
      project: "SLAUGHTER LN MAKE READY",
      siteId: "TXL-0488",
      siteName: "SLAUGHTER",
      siteType: "AERIAL / UG",
      address: "4100 W SLAUGHTER LN<br>AUSTIN, TX 78749",
      county: "TRAVIS",
      mapDate: "06/14/2026",
      drawnBy: "Field Team 6",
      defaultAsset: "SL-HH-9",
      workspaceId: "demo-seed",
      customerId: "atandt",
      projectId: "slaughter-ln-make-ready",
      storageRoot: "workspaces/demo-seed/customers/atandt/projects/slaughter-ln-make-ready/jobs/job-1048",
      assets: {
        handhole: "SL-HH-9",
        splice: "SL-SC-1",
        vaultA: "SL-SV-6",
        vaultB: "SL-SV-7",
        underground: "SL-UG-3",
      },
    },
  };

  const assets = {
    "HH-1": {
      jobId: "JOB-1045",
      asset: "HH-1 Handhole",
      status: "Ready to Bill",
      statusClass: "ready",
      crew: "Alpha",
      location: "HH-1 handhole / Pine Hill east fence",
      source: "Foreman app + GPS camera",
      device: "Alpha iPad / GPS camera",
      gps: "30.210654, -97.951234",
      feedUpdated: "06/23/2026 14:40",
      tech: "J. Ramirez / Alpha",
      contractor: "Lone Star Fiber Works",
      updated: "06/23/2026 14:40",
      proof: "Complete",
      blocker: "None",
      value: "$8,450",
      amount: 8450,
      payItem: "Handhole install + restoration",
      photo: "assets/photo-hh-1.png",
      photoCaption: "HH-1 handhole evidence at job location",
      progress: 100,
      list: [
        ["done", "Crew Submitted: handhole photo"],
        ["done", "GPS point attached"],
        ["done", "Pay item matched"],
        ["done", "Ready to Bill"],
      ],
      comms: [
        ["14:40 Chat", "Alpha: HH-1 set, restoration photo attached."],
        ["14:12 Email", "PM sent ready-to-bill note for handhole install."],
        ["13:58 Timeline", "GPS point and pay item matched to HH-1."],
      ],
    },
    "SC-1": {
      jobId: "JOB-1045-SC1",
      asset: "SC-1 Splice Closure",
      status: "Waiting on Approval",
      statusClass: "waiting",
      crew: "Bravo",
      location: "Pole #124567 / aerial run north side",
      source: "Splicing crew mobile upload",
      device: "Bravo phone / pole photo",
      gps: "30.211012, -97.950918",
      feedUpdated: "06/23/2026 13:15",
      tech: "M. Clark / Bravo",
      contractor: "Summit Splicing",
      updated: "06/23/2026 13:15",
      proof: "Submitted",
      blocker: "PM review pending",
      value: "$11,200",
      amount: 11200,
      payItem: "Aerial splice closure",
      photo: "assets/photo-sc-1.png",
      photoCaption: "SC-1 aerial splice closure photo at pole line",
      progress: 87,
      list: [
        ["done", "Aerial splice photo"],
        ["done", "Pole #124567 noted"],
        ["done", "Fiber count entered"],
        ["", "Waiting on Approval"],
      ],
      comms: [
        ["13:15 Email", "Owner asked PM to confirm pole #124567 and aerial strand note."],
        ["12:48 Chat", "Bravo: splice closure photo uploaded from pole line."],
        ["12:25 Timeline", "SC-1 proof submitted; approval still open."],
      ],
    },
    "SV-1": {
      jobId: "JOB-1045-SV1",
      asset: "SV-1 Splice Vault",
      status: "Missing Photos",
      statusClass: "missing",
      crew: "Alpha",
      location: "SV-1 vault / UG route by east tree line",
      source: "Foreman app + GPS camera",
      device: "Alpha iPad / vault photo",
      gps: "30.210438, -97.950990",
      feedUpdated: "06/23/2026 12:05",
      tech: "J. Ramirez / Alpha",
      contractor: "Lone Star Fiber Works",
      updated: "06/23/2026 12:05",
      proof: "Needs Fix",
      blocker: "Missing open-vault photo",
      value: "$18,600",
      amount: 18600,
      payItem: "Splice vault SV-1",
      photo: "assets/photo-sv-1.png",
      photoCaption: "SV-1 needs open-vault photo before billing",
      progress: 62,
      list: [
        ["done", "Vault location confirmed"],
        ["done", "UG route marked"],
        ["", "Missing Photos: open vault"],
        ["", "Blocked Dollars until resubmitted"],
      ],
      comms: [
        ["12:05 Chat", "Alpha: SV-1 lid photo uploaded, open-vault shot missing."],
        ["11:44 Email", "PM requested open-vault photo before billing line can release."],
        ["11:20 Timeline", "SV-1 marked Needs Fix; $18,600 held."],
      ],
    },
    "SV-2": {
      jobId: "JOB-1045-SV2",
      asset: "SV-2 Splice Vault",
      status: "Rejected",
      statusClass: "rejected",
      crew: "Charlie",
      location: "SV-2 vault / Pine Hill Rd shoulder",
      source: "Bore crew upload + PM rejection email",
      device: "Charlie tablet / redline upload",
      gps: "30.209884, -97.951755",
      feedUpdated: "06/23/2026 10:30",
      tech: "T. Nguyen / Charlie",
      contractor: "Canyon Bore",
      updated: "06/23/2026 10:30",
      proof: "Rejected",
      blocker: "Redline route does not match bore summary",
      value: "$22,900",
      amount: 22900,
      payItem: "Splice vault SV-2",
      photo: "assets/photo-sv-2.png",
      photoCaption: "SV-2 rejected photo/redline mismatch",
      progress: 48,
      list: [
        ["done", "Crew Submitted packet"],
        ["rejected", "Owner rejected route redline"],
        ["", "Needs Fix: bore footage mismatch"],
        ["", "Cannot bill until corrected"],
      ],
      comms: [
        ["10:30 Email", "Owner rejected SV-2: redline does not match bore summary."],
        ["10:18 Chat", "Charlie: bore footage revised, waiting on PM check."],
        ["09:55 Timeline", "SV-2 moved to rejected queue; invoice hold applied."],
      ],
    },
    "UG-1": {
      jobId: "JOB-1045-UG1",
      asset: "UG-1 Underground Fiber",
      status: "Waiting on Approval",
      statusClass: "waiting",
      crew: "Delta",
      location: "UG-1 conduit run / SV-1 to road crossing",
      source: "Locate desk + crew mobile upload",
      device: "Delta phone / locate photo",
      gps: "30.210071, -97.951112",
      feedUpdated: "06/23/2026 11:50",
      tech: "R. Flores / Delta",
      contractor: "Canyon Bore",
      updated: "06/23/2026 11:50",
      proof: "Submitted",
      blocker: "Locate verification pending",
      value: "$32,400",
      amount: 32400,
      payItem: "Underground fiber in conduit",
      photo: "assets/photo-ug-1.png",
      photoCaption: "UG-1 underground route locate photo",
      progress: 74,
      list: [
        ["done", "Conduit route submitted"],
        ["done", "Material qty attached"],
        ["", "Waiting on Approval: locate check"],
        ["", "Billing hold"],
      ],
      comms: [
        ["11:50 Chat", "Delta: UG route complete from SV-1 to road crossing."],
        ["11:05 Email", "Locate desk asked for verification before approval."],
        ["10:42 Timeline", "Material quantity attached; approval pending locate check."],
      ],
    },
    "OR-HH-2": {
      jobId: "JOB-1046",
      asset: "OR-HH-2 Handhole",
      status: "Ready to Bill",
      statusClass: "ready",
      crew: "Field Team 4",
      location: "Oak Ridge handhole / west easement",
      source: "Foreman app + GPS camera",
      device: "Team 4 iPad / GPS camera",
      gps: "30.512188, -97.677418",
      feedUpdated: "06/23/2026 13:55",
      tech: "A. Molina / Field Team 4",
      contractor: "Hill Country Fiber",
      updated: "06/23/2026 13:55",
      proof: "Complete",
      blocker: "None",
      value: "$21,700",
      amount: 21700,
      payItem: "Handhole set + restoration",
      photo: "assets/photo-hh-1.png",
      photoCaption: "OR-HH-2 handhole evidence at oak ridge easement",
      progress: 100,
      list: [
        ["done", "Crew Submitted: handhole set"],
        ["done", "GPS point attached"],
        ["done", "Restoration photo attached"],
        ["done", "Ready to Bill"],
      ],
      comms: [
        ["13:55 Chat", "Team 4: OR-HH-2 set and restoration photo uploaded."],
        ["13:22 Email", "Kinetic PM approved handhole location."],
        ["12:40 Timeline", "Pay item matched to Oak Ridge job."],
      ],
    },
    "OR-SC-3": {
      jobId: "JOB-1046",
      asset: "OR-SC-3 Splice Closure",
      status: "Waiting on Approval",
      statusClass: "waiting",
      crew: "Summit Splicing",
      location: "Oak Ridge pole tie-in / north run",
      source: "Splicing crew mobile upload",
      device: "Summit phone / pole photo",
      gps: "30.512533, -97.677109",
      feedUpdated: "06/23/2026 12:35",
      tech: "M. Clark / Summit",
      contractor: "Summit Splicing",
      updated: "06/23/2026 12:35",
      proof: "Submitted",
      blocker: "Owner splice count review",
      value: "$14,200",
      amount: 14200,
      payItem: "Aerial closure and splice count",
      photo: "assets/photo-sc-1.png",
      photoCaption: "OR-SC-3 aerial closure proof waiting on owner count",
      progress: 84,
      list: [
        ["done", "Closure photo attached"],
        ["done", "Fiber count entered"],
        ["", "Waiting on Approval: splice count"],
        ["", "Billing hold"],
      ],
      comms: [
        ["12:35 Chat", "Summit: closure photo and splice tray count attached."],
        ["12:18 Email", "Kinetic reviewer asked for splice count confirmation."],
        ["11:50 Timeline", "OR-SC-3 moved to owner approval queue."],
      ],
    },
    "OR-SV-4": {
      jobId: "JOB-1046",
      asset: "OR-SV-4 Splice Vault",
      status: "Ready to Bill",
      statusClass: "ready",
      crew: "Field Team 4",
      location: "Oak Ridge vault / driveway bore exit",
      source: "Foreman app + GPS camera",
      device: "Team 4 iPad / vault photo",
      gps: "30.512014, -97.677722",
      feedUpdated: "06/23/2026 13:20",
      tech: "A. Molina / Field Team 4",
      contractor: "Hill Country Fiber",
      updated: "06/23/2026 13:20",
      proof: "Complete",
      blocker: "None",
      value: "$9,600",
      amount: 9600,
      payItem: "Splice vault OR-SV-4",
      photo: "assets/photo-sv-1.png",
      photoCaption: "OR-SV-4 open-vault proof attached",
      progress: 100,
      list: [
        ["done", "Vault open photo attached"],
        ["done", "GPS matched"],
        ["done", "Pay item matched"],
        ["done", "Ready to Bill"],
      ],
      comms: [
        ["13:20 Timeline", "OR-SV-4 passed open-vault proof check."],
        ["13:02 Chat", "Team 4: vault photo and restoration attached."],
        ["12:45 Email", "PM released OR-SV-4 billing line."],
      ],
    },
    "OR-SV-5": {
      jobId: "JOB-1046",
      asset: "OR-SV-5 Splice Vault",
      status: "Missing Photos",
      statusClass: "missing",
      crew: "Field Team 4",
      location: "Oak Ridge vault / alley tie-in",
      source: "Foreman app + GPS camera",
      device: "Team 4 iPad / vault photo",
      gps: "30.511804, -97.678015",
      feedUpdated: "06/23/2026 11:15",
      tech: "A. Molina / Field Team 4",
      contractor: "Hill Country Fiber",
      updated: "06/23/2026 11:15",
      proof: "Needs Fix",
      blocker: "Missing before photo",
      value: "$7,400",
      amount: 7400,
      payItem: "Splice vault OR-SV-5",
      photo: "assets/photo-sv-2.png",
      photoCaption: "OR-SV-5 needs before photo before billing",
      progress: 58,
      list: [
        ["done", "After photo attached"],
        ["done", "GPS point attached"],
        ["", "Missing Photos: before photo"],
        ["", "Blocked Dollars until resubmitted"],
      ],
      comms: [
        ["11:15 Chat", "Team 4: after photo uploaded, no before photo on device."],
        ["10:58 Email", "PM asked crew to upload before photo from camera roll."],
        ["10:40 Timeline", "OR-SV-5 marked Needs Fix."],
      ],
    },
    "OR-UG-2": {
      jobId: "JOB-1046",
      asset: "OR-UG-2 Underground Fiber",
      status: "Waiting on Approval",
      statusClass: "waiting",
      crew: "Bore Crew B",
      location: "Oak Ridge conduit / alley to handhole",
      source: "Bore tracker + crew mobile upload",
      device: "Bore tablet / reel counter",
      gps: "30.511920, -97.677601",
      feedUpdated: "06/23/2026 10:50",
      tech: "S. Patel / Bore Crew B",
      contractor: "Canyon Bore",
      updated: "06/23/2026 10:50",
      proof: "Submitted",
      blocker: "Footage overage approval",
      value: "$6,800",
      amount: 6800,
      payItem: "Underground fiber in conduit",
      photo: "assets/photo-ug-1.png",
      photoCaption: "OR-UG-2 bore path proof waiting on overage approval",
      progress: 76,
      list: [
        ["done", "Bore path photo attached"],
        ["done", "Material count entered"],
        ["", "Waiting on Approval: footage overage"],
        ["", "Billing hold"],
      ],
      comms: [
        ["10:50 Timeline", "OR-UG-2 bore footage submitted with +12 ft overage."],
        ["10:31 Chat", "Bore Crew B: rock forced minor route change."],
        ["10:05 Email", "Kinetic PM asked for overage approval backup."],
      ],
    },
    "CP-HH-7": {
      jobId: "JOB-1047",
      asset: "CP-HH-7 Handhole",
      status: "Rejected",
      statusClass: "rejected",
      crew: "Cedar Crew",
      location: "Cedar Park node split / HH-7",
      source: "Owner rejection note + crew photo",
      device: "Cedar tablet / GPS camera",
      gps: "30.508200, -97.820551",
      feedUpdated: "06/23/2026 09:35",
      tech: "B. Ibarra / Cedar Crew",
      contractor: "Metro Fiber Services",
      updated: "06/23/2026 09:35",
      proof: "Rejected",
      blocker: "Wrong handhole label in photo",
      value: "$12,500",
      amount: 12500,
      payItem: "Handhole install",
      photo: "assets/photo-hh-1.png",
      photoCaption: "CP-HH-7 rejected because label does not match asset",
      progress: 42,
      list: [
        ["rejected", "Owner rejected label mismatch"],
        ["done", "GPS point attached"],
        ["", "Needs Fix: retake label photo"],
        ["", "Cannot bill until corrected"],
      ],
      comms: [
        ["09:35 Email", "Spectrum rejected HH-7 due to wrong asset label."],
        ["09:18 Chat", "Crew found label mismatch and will retake."],
        ["08:55 Timeline", "CP-HH-7 invoice line held."],
      ],
    },
    "CP-SC-2": {
      jobId: "JOB-1047",
      asset: "CP-SC-2 Splice Closure",
      status: "Missing Photos",
      statusClass: "missing",
      crew: "Splice Crew C",
      location: "Cedar Park aerial closure / node split",
      source: "Splice crew phone upload",
      device: "Crew C phone / pole photo",
      gps: "30.508411, -97.820220",
      feedUpdated: "06/23/2026 09:10",
      tech: "L. Romero / Splice Crew C",
      contractor: "Summit Splicing",
      updated: "06/23/2026 09:10",
      proof: "Needs Fix",
      blocker: "Missing splice tray photo",
      value: "$10,800",
      amount: 10800,
      payItem: "Closure splice and tray",
      photo: "assets/photo-sc-1.png",
      photoCaption: "CP-SC-2 missing splice tray photo",
      progress: 55,
      list: [
        ["done", "Closure exterior photo attached"],
        ["done", "Pole ID attached"],
        ["", "Missing Photos: splice tray"],
        ["", "Blocked Dollars until resubmitted"],
      ],
      comms: [
        ["09:10 Chat", "Splice Crew C: exterior photo uploaded; tray photo missing."],
        ["08:52 Email", "PM asked crew for splice tray proof."],
        ["08:20 Timeline", "CP-SC-2 marked Needs Fix."],
      ],
    },
    "CP-SV-1": {
      jobId: "JOB-1047",
      asset: "CP-SV-1 Splice Vault",
      status: "Rejected",
      statusClass: "rejected",
      crew: "Cedar Crew",
      location: "Cedar Park vault / trail crossing",
      source: "Owner rejection note",
      device: "Cedar tablet / vault photo",
      gps: "30.508018, -97.820900",
      feedUpdated: "06/23/2026 08:50",
      tech: "B. Ibarra / Cedar Crew",
      contractor: "Metro Fiber Services",
      updated: "06/23/2026 08:50",
      proof: "Rejected",
      blocker: "Restoration not complete",
      value: "$18,900",
      amount: 18900,
      payItem: "Splice vault CP-SV-1",
      photo: "assets/photo-sv-1.png",
      photoCaption: "CP-SV-1 rejected for restoration punch item",
      progress: 40,
      list: [
        ["done", "Vault photo attached"],
        ["rejected", "Restoration rejected"],
        ["", "Needs Fix: seed and straw photo"],
        ["", "Cannot bill until corrected"],
      ],
      comms: [
        ["08:50 Email", "Spectrum rejected CP-SV-1 restoration."],
        ["08:22 Chat", "Crew: restoration subcontractor scheduled."],
        ["08:05 Timeline", "CP-SV-1 moved to rejected queue."],
      ],
    },
    "CP-SV-3": {
      jobId: "JOB-1047",
      asset: "CP-SV-3 Splice Vault",
      status: "Waiting on Approval",
      statusClass: "waiting",
      crew: "Cedar Crew",
      location: "Cedar Park vault / subdivision entrance",
      source: "Foreman app + GPS camera",
      device: "Cedar tablet / GPS camera",
      gps: "30.507910, -97.821102",
      feedUpdated: "06/23/2026 10:05",
      tech: "B. Ibarra / Cedar Crew",
      contractor: "Metro Fiber Services",
      updated: "06/23/2026 10:05",
      proof: "Submitted",
      blocker: "QC inspection pending",
      value: "$15,100",
      amount: 15100,
      payItem: "Splice vault CP-SV-3",
      photo: "assets/photo-sv-2.png",
      photoCaption: "CP-SV-3 submitted for QC inspection",
      progress: 81,
      list: [
        ["done", "Open-vault photo attached"],
        ["done", "Restoration photo attached"],
        ["", "Waiting on Approval: QC inspection"],
        ["", "Billing hold"],
      ],
      comms: [
        ["10:05 Chat", "Crew: CP-SV-3 complete and ready for QC."],
        ["09:44 Timeline", "QC inspection request sent."],
        ["09:20 Email", "PM queued CP-SV-3 for owner review."],
      ],
    },
    "CP-UG-4": {
      jobId: "JOB-1047",
      asset: "CP-UG-4 Underground Fiber",
      status: "Missing Photos",
      statusClass: "missing",
      crew: "Bore Crew C",
      location: "Cedar Park UG leg / trail crossing",
      source: "Bore tracker + locate desk",
      device: "Bore tablet / tracker",
      gps: "30.507770, -97.820785",
      feedUpdated: "06/23/2026 08:30",
      tech: "K. Shaw / Bore Crew C",
      contractor: "Canyon Bore",
      updated: "06/23/2026 08:30",
      proof: "Needs Fix",
      blocker: "Missing bore exit photo",
      value: "$16,200",
      amount: 16200,
      payItem: "Underground fiber bore",
      photo: "assets/photo-ug-1.png",
      photoCaption: "CP-UG-4 needs bore exit photo",
      progress: 52,
      list: [
        ["done", "Entry photo attached"],
        ["done", "Locate ticket attached"],
        ["", "Missing Photos: bore exit"],
        ["", "Blocked Dollars until resubmitted"],
      ],
      comms: [
        ["08:30 Timeline", "CP-UG-4 missing bore exit photo."],
        ["08:18 Chat", "Bore Crew C: will upload exit photo after lane opens."],
        ["07:55 Email", "PM put UG-4 billing line on hold."],
      ],
    },
    "SL-HH-9": {
      jobId: "JOB-1048",
      asset: "SL-HH-9 Handhole",
      status: "Ready to Bill",
      statusClass: "ready",
      crew: "Make Ready Crew",
      location: "Slaughter Ln HH-9 / south shoulder",
      source: "Foreman app + GPS camera",
      device: "Make Ready iPad / GPS camera",
      gps: "30.172410, -97.849915",
      feedUpdated: "06/23/2026 15:05",
      tech: "N. Brooks / Make Ready Crew",
      contractor: "Capitol OSP",
      updated: "06/23/2026 15:05",
      proof: "Complete",
      blocker: "None",
      value: "$12,400",
      amount: 12400,
      payItem: "Handhole install + shoulder restoration",
      photo: "assets/photo-hh-1.png",
      photoCaption: "SL-HH-9 ready-to-bill handhole proof",
      progress: 100,
      list: [
        ["done", "Crew Submitted: handhole photo"],
        ["done", "GPS point attached"],
        ["done", "Traffic control photo attached"],
        ["done", "Ready to Bill"],
      ],
      comms: [
        ["15:05 Chat", "Make Ready: HH-9 complete, shoulder restored."],
        ["14:46 Email", "AT&T closeout accepted handhole proof."],
        ["14:22 Timeline", "SL-HH-9 moved to ready-to-bill."],
      ],
    },
    "SL-SC-1": {
      jobId: "JOB-1048",
      asset: "SL-SC-1 Splice Closure",
      status: "Ready to Bill",
      statusClass: "ready",
      crew: "Splice Crew A",
      location: "Slaughter Ln pole transfer / SC-1",
      source: "Splice crew mobile upload",
      device: "Crew A phone / pole photo",
      gps: "30.172602, -97.849700",
      feedUpdated: "06/23/2026 14:55",
      tech: "M. Clark / Splice Crew A",
      contractor: "Summit Splicing",
      updated: "06/23/2026 14:55",
      proof: "Complete",
      blocker: "None",
      value: "$9,900",
      amount: 9900,
      payItem: "Aerial splice closure",
      photo: "assets/photo-sc-1.png",
      photoCaption: "SL-SC-1 closure proof accepted",
      progress: 100,
      list: [
        ["done", "Closure photo attached"],
        ["done", "Pole transfer noted"],
        ["done", "Splice count accepted"],
        ["done", "Ready to Bill"],
      ],
      comms: [
        ["14:55 Timeline", "SL-SC-1 accepted by AT&T closeout desk."],
        ["14:20 Chat", "Splice Crew A: closure and strand proof uploaded."],
        ["13:58 Email", "PM released SC-1 pay item."],
      ],
    },
    "SL-SV-6": {
      jobId: "JOB-1048",
      asset: "SL-SV-6 Splice Vault",
      status: "Ready to Bill",
      statusClass: "ready",
      crew: "Make Ready Crew",
      location: "Slaughter Ln vault / curb return",
      source: "Foreman app + GPS camera",
      device: "Make Ready iPad / vault photo",
      gps: "30.172211, -97.850140",
      feedUpdated: "06/23/2026 14:35",
      tech: "N. Brooks / Make Ready Crew",
      contractor: "Capitol OSP",
      updated: "06/23/2026 14:35",
      proof: "Complete",
      blocker: "None",
      value: "$8,600",
      amount: 8600,
      payItem: "Splice vault SL-SV-6",
      photo: "assets/photo-sv-1.png",
      photoCaption: "SL-SV-6 open-vault proof accepted",
      progress: 100,
      list: [
        ["done", "Open-vault photo attached"],
        ["done", "GPS matched"],
        ["done", "Restoration photo attached"],
        ["done", "Ready to Bill"],
      ],
      comms: [
        ["14:35 Timeline", "SL-SV-6 passed closeout rules."],
        ["14:12 Chat", "Crew: vault and restoration proof attached."],
        ["13:42 Email", "AT&T PM approved vault closeout."],
      ],
    },
    "SL-SV-7": {
      jobId: "JOB-1048",
      asset: "SL-SV-7 Splice Vault",
      status: "Ready to Bill",
      statusClass: "ready",
      crew: "Make Ready Crew",
      location: "Slaughter Ln vault / west bore exit",
      source: "Foreman app + GPS camera",
      device: "Make Ready iPad / vault photo",
      gps: "30.172004, -97.850491",
      feedUpdated: "06/23/2026 14:10",
      tech: "N. Brooks / Make Ready Crew",
      contractor: "Capitol OSP",
      updated: "06/23/2026 14:10",
      proof: "Complete",
      blocker: "None",
      value: "$8,000",
      amount: 8000,
      payItem: "Splice vault SL-SV-7",
      photo: "assets/photo-sv-2.png",
      photoCaption: "SL-SV-7 closeout proof accepted",
      progress: 100,
      list: [
        ["done", "Vault photo attached"],
        ["done", "Bore exit photo attached"],
        ["done", "Pay item matched"],
        ["done", "Ready to Bill"],
      ],
      comms: [
        ["14:10 Chat", "Make Ready: SL-SV-7 complete and billing matched."],
        ["13:51 Timeline", "SV-7 proof locked."],
        ["13:20 Email", "PM added SV-7 to daily ready package."],
      ],
    },
    "SL-UG-3": {
      jobId: "JOB-1048",
      asset: "SL-UG-3 Underground Fiber",
      status: "Ready to Bill",
      statusClass: "ready",
      crew: "Bore Crew A",
      location: "Slaughter Ln UG leg / west bore",
      source: "Bore tracker + GPS camera",
      device: "Bore tablet / tracker",
      gps: "30.172110, -97.850250",
      feedUpdated: "06/23/2026 13:45",
      tech: "P. Henry / Bore Crew A",
      contractor: "Capitol OSP",
      updated: "06/23/2026 13:45",
      proof: "Complete",
      blocker: "None",
      value: "$0",
      amount: 0,
      payItem: "UG route included in vault pay item",
      photo: "assets/photo-ug-1.png",
      photoCaption: "SL-UG-3 bore route proof accepted",
      progress: 100,
      list: [
        ["done", "Bore route photo attached"],
        ["done", "Locate ticket clear"],
        ["done", "Material count matched"],
        ["done", "Ready to Bill"],
      ],
      comms: [
        ["13:45 Timeline", "SL-UG-3 route accepted with no separate pay line."],
        ["13:18 Chat", "Bore Crew A: route photo and locate ticket uploaded."],
        ["12:55 Email", "PM cleared UG route for package."],
      ],
    },
  };

  const clients = [
    {
      id: "WINDSTREAM",
      name: "Windstream",
      customerCode: "WINDSTREAM",
      status: "active",
      legalName: "Windstream Services, LLC",
      issuedTo: "Windstream OSP Closeout / AP",
      mainContactName: "OSP Closeout Desk",
      mainContactEmail: "closeout@windstream.example",
      billingEmail: "ap@windstream.example",
      paymentTerms: "Net 30",
      serviceTerritory: "Central Texas",
      readyRule: "Ready lines can send; blocked lines stay held",
      requiredPhotos: true,
      gpsRequired: true,
      redlinesRequired: true,
      materialTicketRequired: true,
      boreLogRequired: false,
      locateTicketRequired: true,
      positiveResponseRequired: true,
      claimsContactName: "Windstream Claims Desk",
      claimsContactEmail: "claims@windstream.example",
      notes: "Seeded from existing Pine Hill closeout and billing package.",
      workspaceId: "demo-seed",
      workspaceType: "demo",
      storageRoot: "workspaces/demo-seed/clients",
      createdAt: "2026-06-23T14:00:00.000Z",
      updatedAt: "2026-06-23T14:00:00.000Z",
      audit: [{ at: "2026-06-23T14:00:00.000Z", action: "seeded", note: "Seeded from existing CrewProof field jobs." }],
    },
    {
      id: "KINETIC",
      name: "Kinetic",
      customerCode: "KINETIC",
      status: "active",
      legalName: "Kinetic Field Services",
      issuedTo: "Kinetic Construction Closeout",
      mainContactName: "Construction Closeout",
      mainContactEmail: "closeout@kinetic.example",
      billingEmail: "closeout@kinetic.example",
      paymentTerms: "Net 30",
      serviceTerritory: "Williamson County",
      readyRule: "Hold invoice until missing proof is corrected and locate ticket is current",
      requiredPhotos: true,
      gpsRequired: true,
      redlinesRequired: true,
      materialTicketRequired: true,
      boreLogRequired: true,
      locateTicketRequired: true,
      positiveResponseRequired: true,
      claimsContactName: "Kinetic Damage Review",
      claimsContactEmail: "claims@kinetic.example",
      notes: "Default for Oak Ridge missing proof packages.",
      workspaceId: "demo-seed",
      workspaceType: "demo",
      storageRoot: "workspaces/demo-seed/clients",
      createdAt: "2026-06-23T14:00:00.000Z",
      updatedAt: "2026-06-23T14:00:00.000Z",
      audit: [{ at: "2026-06-23T14:00:00.000Z", action: "seeded", note: "Seeded from existing CrewProof field jobs." }],
    },
    {
      id: "SPECTRUM",
      name: "Spectrum",
      customerCode: "SPECTRUM",
      status: "active",
      legalName: "Charter Communications Operating, LLC",
      issuedTo: "Spectrum OSP Billing Review",
      mainContactName: "OSP Billing Review",
      mainContactEmail: "ospbilling@spectrum.example",
      billingEmail: "ospbilling@spectrum.example",
      paymentTerms: "Net 45",
      serviceTerritory: "Cedar Park",
      readyRule: "Rejected items require corrected photos and PM acceptance before invoice",
      requiredPhotos: true,
      gpsRequired: true,
      redlinesRequired: true,
      materialTicketRequired: true,
      boreLogRequired: true,
      locateTicketRequired: true,
      positiveResponseRequired: true,
      claimsContactName: "Spectrum Claims Review",
      claimsContactEmail: "claims@spectrum.example",
      notes: "Default for rejected Cedar Park closeout packages.",
      workspaceId: "demo-seed",
      workspaceType: "demo",
      storageRoot: "workspaces/demo-seed/clients",
      createdAt: "2026-06-23T14:00:00.000Z",
      updatedAt: "2026-06-23T14:00:00.000Z",
      audit: [{ at: "2026-06-23T14:00:00.000Z", action: "seeded", note: "Seeded from existing CrewProof field jobs." }],
    },
    {
      id: "ATT",
      name: "AT&T",
      customerCode: "AT&T",
      status: "active",
      legalName: "AT&T Fiber",
      issuedTo: "AT&T Fiber Closeout Desk",
      mainContactName: "Fiber Closeout Desk",
      mainContactEmail: "fibercloseout@att.example",
      billingEmail: "fibercloseout@att.example",
      paymentTerms: "Net 30",
      serviceTerritory: "Austin South",
      readyRule: "Ready lines can send after GPS proof, before/after photos, and redlines are attached",
      requiredPhotos: true,
      gpsRequired: true,
      redlinesRequired: true,
      materialTicketRequired: true,
      boreLogRequired: true,
      locateTicketRequired: true,
      positiveResponseRequired: true,
      claimsContactName: "AT&T Damage Desk",
      claimsContactEmail: "claims@att.example",
      notes: "Default for Slaughter Ln make-ready work.",
      workspaceId: "demo-seed",
      workspaceType: "demo",
      storageRoot: "workspaces/demo-seed/clients",
      createdAt: "2026-06-23T14:00:00.000Z",
      updatedAt: "2026-06-23T14:00:00.000Z",
      audit: [{ at: "2026-06-23T14:00:00.000Z", action: "seeded", note: "Seeded from existing CrewProof field jobs." }],
    },
  ];

  const rateSubmissionsByJob = {
    "JOB-1045": {
      customer: "Windstream",
      project: "Pine Hill FTTH Expansion",
      contract: "MSA-WIN-2025",
      sow: "PINE-HILL-SOW",
      po: "PO-WIN-1045",
      version: "WIN-2026-RATE-v2",
      status: "Approved",
      effectiveDate: "06/01/2026",
      submittedBy: "PM Review",
      approvedBy: "Windstream AP",
      locked: false,
      retainage: "5%",
      taxJurisdiction: "Travis County / Austin",
      poFunding: 75,
      changeOrderApproval: 50,
      lines: Object.values(jobs["JOB-1045"].assets).map((assetId) => ({
        assetId,
        quantity: 1,
        unit: "EA",
        rate: assets[assetId].amount,
        status: "Approved",
        source: "WIN-2026-RATE-v2",
      })),
    },
    "JOB-1046": {
      customer: "Kinetic",
      project: "Oak Ridge Fiber Extension",
      contract: "KIN-MSA-2026",
      sow: "OAK-RIDGE-SOW",
      po: "Missing",
      version: "KIN-2026-RATE-v1",
      status: "Submitted",
      effectiveDate: "06/01/2026",
      submittedBy: "Bravo PM",
      approvedBy: "Pending",
      locked: false,
      retainage: "5%",
      taxJurisdiction: "Williamson County",
      poFunding: 35,
      changeOrderApproval: 0,
      lines: Object.values(jobs["JOB-1046"].assets).map((assetId) => ({
        assetId,
        quantity: 1,
        unit: "EA",
        rate: assets[assetId].amount,
        status: "Submitted",
        source: "KIN-2026-RATE-v1",
      })),
    },
    "JOB-1047": {
      customer: "Spectrum",
      project: "Cedar Park Node Split",
      contract: "SPEC-MSA-2025",
      sow: "CEDAR-SOW",
      po: "PO-SPEC-1047",
      version: "SPEC-2026-RATE-v1",
      status: "Rejected",
      effectiveDate: "06/01/2026",
      submittedBy: "Charlie PM",
      approvedBy: "Rejected by Spectrum",
      locked: false,
      retainage: "10%",
      taxJurisdiction: "Williamson County",
      poFunding: 60,
      changeOrderApproval: 0,
      lines: Object.values(jobs["JOB-1047"].assets).map((assetId) => ({
        assetId,
        quantity: 1,
        unit: "EA",
        rate: assets[assetId].amount,
        status: "Rejected",
        source: "SPEC-2026-RATE-v1",
      })),
    },
    "JOB-1048": {
      customer: "AT&T",
      project: "Slaughter Ln Make Ready",
      contract: "MSA-22",
      sow: "SOW-22A",
      po: "PO-7782",
      version: "ATT-2026-06-v3",
      status: "Locked",
      effectiveDate: "06/01/2026",
      submittedBy: "Delta PM",
      approvedBy: "AT&T Fiber Closeout Desk",
      locked: true,
      retainage: "5%",
      taxJurisdiction: "Travis County / Austin",
      poFunding: 100,
      changeOrderApproval: 100,
      lines: [
        { assetId: "SL-HH-9", payItem: "Handhole install + restoration", quantity: 1, unit: "EA", rate: 12400, status: "Approved", source: "ATT-2026-06-v3" },
        { assetId: "SL-SC-1", payItem: "Aerial splice closure", quantity: 1, unit: "EA", rate: 9900, status: "Approved", source: "ATT-2026-06-v3" },
        { assetId: "SL-SV-6", payItem: "Splice vault", quantity: 1, unit: "EA", rate: 8600, status: "Approved", source: "ATT-2026-06-v3" },
        { assetId: "SL-SV-7", payItem: "Splice vault", quantity: 1, unit: "EA", rate: 8000, status: "Approved", source: "ATT-2026-06-v3" },
        { assetId: "SL-UG-3", payItem: "UG route included in vault pay item", quantity: 1, unit: "INC", rate: 0, status: "Approved", source: "ATT-2026-06-v3" },
      ],
    },
  };

  const crew811Tickets = [
    {
      id: "811-1194",
      tenantId: "tenant-windstream",
      ticketNumber: "FL811-24-1194",
      state: "FL",
      county: "BROWARD",
      city: "HALLANDALE BEACH",
      street: "1835 E HALLANDALE BEACH BLVD",
      crossStreet: "HIGHLANDS 21 LATERAL",
      workDescription: "WR 908792 HIGHLANDS 21 LATERAL HARDENING",
      excavatorName: "NEXT LEVEL UNDERGROUND",
      customerName: "WINDSTREAM",
      providerName: "Florida 811",
      companyId: "248654",
      excavatorId: "544490",
      officeName: "NEXT LEVEL UNDERGROUND",
      companyType: "CONTRACTOR",
      sourceSystem: "Sunshine 811 Exactix",
      sourceFormat: "Florida 811 ticket JSON",
      sourcePortal: "exactix.sunshine811.com",
      callBackTime: "ANYTIME",
      fieldContact: "ANDREI KRILOV",
      fieldContactType: "Cell",
      fieldContactMethod: "(754) 260-7248",
      workingFor: "FPL MASTEC SSUP",
      workType: "WR 908792 HIGHLANDS 21 LATERAL HARDENING",
      status: "RENEWAL_NEEDED",
      priority: "HIGH",
      dueAt: "2026-06-25T16:00:00Z",
      expiresAt: "2026-06-27T16:00:00Z",
      renewalRequiredAt: "2026-06-25T16:00:00Z",
      latitude: 30.210654,
      longitude: -97.951234,
      x: 74,
      y: 78,
      coverageStart: { x: 72, y: 47, label: "Start / HH-1" },
      coverageEnd: { x: 53, y: 91, label: "End / SV-2" },
      assignedCrewId: "Alpha",
      assignedUserId: "J. Ramirez",
      linkedJobId: "JOB-1045",
      positiveResponseStatus: "PENDING",
      proof: ["Locate map imported", "Boundary shown on map"],
      serviceAreas: [
        { serviceAreaCode: "GAS-01", serviceAreaName: "Gas" },
        { serviceAreaCode: "PWR-01", serviceAreaName: "Power" },
      ],
      responses: [
        { serviceAreaCode: "GAS-01", utilityName: "Gas", responseCode: "1", responseStatus: "CLEAR", responseText: "Clear of work area", enteredDate: "2026-06-23T12:00:00Z" },
        { serviceAreaCode: "PWR-01", utilityName: "Power", responseCode: "NO RESPONSE", responseStatus: "NO_RESPONSE", responseText: "Awaiting response", enteredDate: "2026-06-23T12:05:00Z" },
      ],
      events: ["Imported from Florida 811 excavator ticket", "Matched to JOB-1045 at 0.92 confidence"],
    },
    {
      id: "811-1201",
      tenantId: "tenant-windstream",
      ticketNumber: "FL811-24-1201",
      state: "TX",
      county: "TRAVIS",
      city: "AUSTIN",
      street: "PINE HILL RD SHOULDER",
      crossStreet: "SITE ENTRANCE",
      workDescription: "Road shoulder restoration and vault rework",
      excavatorName: "Canyon Bore",
      customerName: "WINDSTREAM",
      providerName: "Florida 811",
      sourceSystem: "Sunshine 811 Exactix",
      sourceFormat: "Florida 811 ticket JSON",
      sourcePortal: "exactix.sunshine811.com",
      companyId: "248654",
      excavatorId: "544490",
      officeName: "NEXT LEVEL UNDERGROUND",
      companyType: "CONTRACTOR",
      callBackTime: "ANYTIME",
      fieldContact: "ANDREI KRILOV",
      fieldContactType: "Cell",
      fieldContactMethod: "(754) 260-7248",
      workingFor: "WINDSTREAM OSP",
      workType: "ROAD SHOULDER RESTORATION AND VAULT REWORK",
      status: "EXPIRED",
      priority: "HIGH",
      dueAt: "2026-06-23T12:00:00Z",
      expiresAt: "2026-06-24T17:00:00Z",
      renewalRequiredAt: "2026-06-22T17:00:00Z",
      latitude: 30.2103,
      longitude: -97.9515,
      x: 48,
      y: 91,
      coverageStart: { x: 70, y: 78, label: "Start / UG-1" },
      coverageEnd: { x: 45, y: 92, label: "End / SV-2" },
      assignedCrewId: "Charlie",
      assignedUserId: "T. Nguyen",
      linkedJobId: "JOB-1045",
      positiveResponseStatus: "BLOCKED",
      proof: ["Rejected redline attached", "Bore log mismatch"],
      serviceAreas: [{ serviceAreaCode: "STM-01", serviceAreaName: "Storm" }],
      responses: [{ serviceAreaCode: "STM-01", utilityName: "Storm", responseCode: "6A", responseStatus: "CONFLICT", responseText: "Conflict at shoulder crossing - DO NOT DIG", enteredDate: "2026-06-23T09:00:00Z" }],
      events: ["Imported from PDF", "Marked expired", "Blocks JOB-1045 closeout"],
    },
    {
      id: "811-1310",
      tenantId: "tenant-kinetic",
      ticketNumber: "FL811-24-1310",
      state: "TX",
      county: "WILLIAMSON",
      city: "ROUND ROCK",
      street: "804 OAK RIDGE DR",
      crossStreet: "OAK RIDGE HANDHOLE",
      workDescription: "Fiber extension and handhole install",
      excavatorName: "Hill Country Fiber",
      customerName: "KINETIC",
      providerName: "Florida 811",
      sourceSystem: "Sunshine 811 Exactix",
      sourceFormat: "Florida 811 ticket JSON",
      sourcePortal: "exactix.sunshine811.com",
      companyId: "248654",
      excavatorId: "544490",
      officeName: "NEXT LEVEL UNDERGROUND",
      companyType: "CONTRACTOR",
      callBackTime: "ANYTIME",
      fieldContact: "ANDREI KRILOV",
      fieldContactType: "Cell",
      fieldContactMethod: "(754) 260-7248",
      workingFor: "KINETIC OSP",
      workType: "FIBER EXTENSION AND HANDHOLE INSTALL",
      status: "NEEDS_REVIEW",
      priority: "NORMAL",
      dueAt: "2026-06-26T10:00:00Z",
      expiresAt: "2026-06-29T10:00:00Z",
      renewalRequiredAt: "2026-06-27T10:00:00Z",
      latitude: 30.508,
      longitude: -97.678,
      x: 38,
      y: 38,
      coverageStart: { x: 36, y: 36, label: "Start" },
      coverageEnd: { x: 48, y: 50, label: "End" },
      assignedCrewId: "Bravo",
      assignedUserId: "M. Clark",
      linkedJobId: null,
      positiveResponseStatus: "PENDING",
      proof: ["No geometry in import"],
      serviceAreas: [],
      responses: [],
      events: ["Imported without geometry", "Needs PM review before field start"],
    },
    {
      id: "811-1404",
      tenantId: "tenant-att",
      ticketNumber: "FL811-24-1404",
      state: "TX",
      county: "TRAVIS",
      city: "AUSTIN",
      street: "4100 W SLAUGHTER LN",
      crossStreet: "WEST BORE",
      workDescription: "Make-ready and underground bore proof",
      excavatorName: "Capitol OSP",
      customerName: "AT&T",
      providerName: "Florida 811",
      sourceSystem: "Sunshine 811 Exactix",
      sourceFormat: "Florida 811 ticket JSON",
      sourcePortal: "exactix.sunshine811.com",
      companyId: "248654",
      excavatorId: "544490",
      officeName: "NEXT LEVEL UNDERGROUND",
      companyType: "CONTRACTOR",
      callBackTime: "ANYTIME",
      fieldContact: "ANDREI KRILOV",
      fieldContactType: "Cell",
      fieldContactMethod: "(754) 260-7248",
      workingFor: "AT&T OSP",
      workType: "MAKE-READY AND UNDERGROUND BORE PROOF",
      status: "CLEAR",
      priority: "NORMAL",
      dueAt: "2026-06-25T09:00:00Z",
      expiresAt: "2027-07-01T09:00:00Z",
      renewalRequiredAt: "2027-06-29T09:00:00Z",
      latitude: 30.172,
      longitude: -97.85,
      x: 68,
      y: 80,
      coverageStart: { x: 62, y: 76, label: "Start" },
      coverageEnd: { x: 72, y: 88, label: "End" },
      assignedCrewId: "Delta",
      assignedUserId: "P. Henry",
      linkedJobId: "JOB-1048",
      positiveResponseStatus: "READY",
      proof: ["GPS photo uploaded", "Marked utilities attached", "Positive response clear"],
      serviceAreas: [
        { serviceAreaCode: "GAS-02", serviceAreaName: "Gas" },
        { serviceAreaCode: "PWR-02", serviceAreaName: "Power" },
      ],
      responses: [
        { serviceAreaCode: "GAS-02", utilityName: "Gas", responseCode: "4", responseStatus: "CLEAR", responseText: "Clear", enteredDate: "2026-06-24T10:00:00Z" },
        { serviceAreaCode: "PWR-02", utilityName: "Power", responseCode: "1", responseStatus: "MARKED", responseText: "Marked in field", enteredDate: "2026-06-24T10:05:00Z" },
      ],
      events: ["Imported", "Auto-linked to JOB-1048", "Positive response ready"],
    },
  ];

  const claimsDamageRecords = [
    {
      id: "CLM-1045-02",
      type: "Utility Strike",
      status: "Investigating",
      jobId: "JOB-1045",
      customer: "WINDSTREAM",
      location: "Pine Hill Rd shoulder / SV-2 bore exit",
      owner: "PM Review",
      severity: "High",
      source: "Foreman damage report",
      linked811: "FL811-24-1201",
      claimValue: 12800,
      blockedDollars: 22900,
      x: 48,
      y: 88,
      photo: "assets/photo-sv-2.png",
      caption: "Road shoulder strike report pinned to rejected SV-2 proof",
      proof: ["Damage photo attached", "811 ticket FL811-24-1201 expired", "Bore log variance attached", "Owner notice pending"],
      events: ["09:20 Damage record opened", "09:31 Billing hold applied to SV-2", "10:05 PM requested utility response"],
      updatedAt: "06/26/2026 09:20",
    },
    {
      id: "CLM-1045-03",
      type: "Restoration",
      status: "Open",
      jobId: "JOB-1045",
      customer: "WINDSTREAM",
      location: "HH-1 east fence restoration",
      owner: "Alpha Crew",
      severity: "Medium",
      source: "Closeout photo review",
      linked811: "FL811-24-1187",
      claimValue: 2400,
      blockedDollars: 8450,
      x: 82,
      y: 45,
      photo: "assets/photo-hh-1.png",
      caption: "Restoration claim at HH-1 fence line",
      proof: ["Before photo attached", "After photo requested", "Seed/straw ticket missing"],
      events: ["08:45 Restoration issue logged", "09:12 Foreman assigned"],
      updatedAt: "06/26/2026 08:45",
    },
    {
      id: "CLM-1047-01",
      type: "Property Damage",
      status: "Recovery",
      jobId: "JOB-1047",
      customer: "SPECTRUM",
      location: "Cedar Park driveway apron",
      owner: "Claims Desk",
      severity: "High",
      source: "Customer email",
      linked811: "CP-811-7780",
      claimValue: 18600,
      blockedDollars: 46500,
      x: 56,
      y: 66,
      photo: "assets/photo-sv-1.png",
      caption: "Drive apron photo linked to rejected closeout",
      proof: ["Owner email attached", "Before photo missing", "Subcontractor notice sent"],
      events: ["07:30 Customer complaint imported", "08:10 Recovery file opened"],
      updatedAt: "06/26/2026 07:30",
    },
    {
      id: "CLM-1048-01",
      type: "Warranty",
      status: "Closed",
      jobId: "JOB-1048",
      customer: "AT&T",
      location: "Slaughter Ln vault lid",
      owner: "Delta Crew",
      severity: "Low",
      source: "Warranty inspection",
      linked811: "SL-811-1402",
      claimValue: 0,
      blockedDollars: 0,
      x: 68,
      y: 80,
      photo: "assets/photo-ug-1.png",
      caption: "Warranty inspection closed with no billing hold",
      proof: ["Warranty photo attached", "Owner accepted", "No blocked dollars"],
      events: ["Yesterday warranty issue reviewed", "Closed after owner acceptance"],
      updatedAt: "06/25/2026 16:10",
    },
  ];

  const damageProofRecords = [
    {
      id: "DPF-1045-01",
      workspaceId: "demo-seed",
      jobId: "JOB-1045",
      assetId: "SV-2",
      mapPinId: "damage-pin-sv2",
      claimId: "CLM-1045-02",
      linked811TicketId: "FL811-24-1201",
      linkedUtilityConflictId: "Road shoulder",
      submittedByUserId: "user-charlie-foreman",
      submittedByName: "T. Nguyen",
      submittedByRole: "Foreman",
      crewId: "Charlie",
      foremanId: "charlie-foreman",
      damageType: "utility_strike",
      proofCategory: "crew_damage_proof",
      status: "needs_review",
      occurredWhen: "during_work",
      locationText: "SV-2 / Pine Hill Rd shoulder",
      gpsLat: 30.209884,
      gpsLng: -97.951755,
      gpsAccuracy: "+/- 18 ft",
      capturedAt: "2026-06-23T09:20:00",
      description: "Road shoulder utility conflict reported from SV-2 bore exit area.",
      immediateActionTaken: "Work stopped at shoulder; PM requested utility response and bore log review.",
      workStopped: true,
      ownerNotified: true,
      pmNotified: true,
      customerNotified: false,
      repairComplete: false,
      restorationComplete: false,
      reviewRequired: true,
      blockerCreated: true,
      relatedBlockerId: "BLOCK-SV2-REDLINE",
      nextAction: "PM to complete investigation",
      closeoutImpact: "Hold review",
      owner: "PM Review",
      lastUpdate: "06/26/2026 09:20",
      customerFacingApproved: false,
      attachments: [
        { id: "DPF-1045-01-A1", damageProofId: "DPF-1045-01", attachmentType: "photo", title: "Wide road shoulder photo", fileRef: "assets/photo-sv-2.png", gpsLat: 30.209884, gpsLng: -97.951755, capturedAt: "2026-06-23T09:20:00", capturedBy: "T. Nguyen", customerFacing: false, internalOnly: false, sourceDevice: "Charlie tablet", auditHistory: ["Photo linked to original crew proof"] },
        { id: "DPF-1045-01-A2", damageProofId: "DPF-1045-01", attachmentType: "locate_ticket", title: "FL811-24-1201", fileRef: "crew811:FL811-24-1201", capturedAt: "2026-06-23T09:31:00", capturedBy: "Locate Desk", customerFacing: true, internalOnly: false, sourceDevice: "Sunshine 811 Exactix", auditHistory: ["Locate ticket linked to damage proof"] },
      ],
      aiSummary: "SV-2 has utility strike proof linked to FL811-24-1201 and CLM-1045-02. It needs PM investigation before closeout release.",
      aiQuestions: ["Do you have a close-up photo and utility marking photo?", "Was the customer notified?", "Should this create a customer-facing notice draft after PM review?"],
      auditHistory: ["Damage proof created from foreman report", "Closeout hold linked to SV-2", "Claim support packet available for management review"],
    },
    {
      id: "DPF-1045-02",
      workspaceId: "demo-seed",
      jobId: "JOB-1045",
      assetId: "HH-1",
      mapPinId: "damage-pin-hh1",
      claimId: "CLM-1045-03",
      linked811TicketId: "",
      linkedUtilityConflictId: "",
      submittedByUserId: "user-alpha-foreman",
      submittedByName: "J. Ramirez",
      submittedByRole: "Foreman",
      crewId: "Alpha",
      foremanId: "alpha-foreman",
      damageType: "restoration",
      proofCategory: "crew_damage_proof",
      status: "submitted",
      occurredWhen: "after_work",
      locationText: "HH-1 / Pine Hill east fence",
      gpsLat: 30.210654,
      gpsLng: -97.951234,
      gpsAccuracy: "+/- 6 ft",
      capturedAt: "2026-06-23T08:45:00",
      description: "Restoration record opened for HH-1 fence line. After/restoration photo still needed.",
      immediateActionTaken: "Foreman assigned restoration after-photo follow-up.",
      workStopped: false,
      ownerNotified: false,
      pmNotified: true,
      customerNotified: false,
      repairComplete: false,
      restorationComplete: false,
      reviewRequired: true,
      blockerCreated: true,
      relatedBlockerId: "BLOCK-HH1-RESTORE",
      nextAction: "Crew to attach after photo",
      closeoutImpact: "Restoration proof needed",
      owner: "Alpha Crew",
      lastUpdate: "06/26/2026 08:45",
      customerFacingApproved: false,
      attachments: [
        { id: "DPF-1045-02-A1", damageProofId: "DPF-1045-02", attachmentType: "photo", title: "Before restoration photo", fileRef: "assets/photo-hh-1.png", gpsLat: 30.210654, gpsLng: -97.951234, capturedAt: "2026-06-23T08:45:00", capturedBy: "J. Ramirez", customerFacing: false, internalOnly: false, sourceDevice: "Alpha iPad", auditHistory: ["Before photo linked to HH-1 restoration proof"] },
      ],
      aiSummary: "HH-1 has restoration proof open and needs an after/restoration photo before the record can be closed.",
      aiQuestions: ["Is restoration complete or still open?", "Do you have an after/restoration photo?", "Should this remain internal until PM approves it for the customer package?"],
      auditHistory: ["Damage proof created from closeout photo review", "Restoration blocker created", "AI requested after photo"],
    },
  ];

  const users = [
    {
      id: "user-owner-cody",
      email: "cody@crewproof.local",
      name: "Cody (Owner / Admin)",
      role: "pm",
      roleLabel: "Owner / PM",
      tenantId: "demo-seed",
      workspaceId: "demo-seed",
      crewId: "Alpha",
    },
    {
      id: "user-foreman-ramirez",
      email: "j.ramirez@crewproof.local",
      name: "J. Ramirez (Alpha Foreman)",
      role: "crew",
      roleLabel: "Crew / Foreman",
      tenantId: "demo-seed",
      workspaceId: "demo-seed",
      crewId: "Alpha",
    },
    {
      id: "user-billing-ap",
      email: "ap@crewproof.local",
      name: "AP / Billing Desk",
      role: "billing",
      roleLabel: "Billing / AP",
      tenantId: "demo-seed",
      workspaceId: "demo-seed",
      crewId: "Alpha",
    },
    {
      id: "user-locate-desk",
      email: "locate@crewproof.local",
      name: "Andrei Krilov (Locate Desk)",
      role: "locate",
      roleLabel: "Locate / 811 Desk",
      tenantId: "demo-seed",
      workspaceId: "demo-seed",
      crewId: "Delta",
    },
    {
      id: "user-claims-desk",
      email: "claims@crewproof.local",
      name: "Claims & Recovery Desk",
      role: "claims",
      roleLabel: "Claims Reviewer",
      tenantId: "demo-seed",
      workspaceId: "demo-seed",
      crewId: "Charlie",
    },
  ];

  // Seed initial CrewBox Drive items for demo-seed
  const now = "2026-06-26T14:00:00.000Z";
  const folderCloseoutsId = "cbx-folder-closeouts";
  const folderPermitsId = "cbx-folder-permits";
  const folderPhotosId = "cbx-folder-photos";
  const sheetTrackerId = "cbx-sheet-tracker";
  const filePermitId = "cbx-file-permit-1045";

  const crewbox = {
    items: [
      {
        id: folderCloseoutsId,
        tenantId: "demo-seed",
        parentId: null,
        kind: "folder",
        name: "Closeout Packages",
        mimeType: null,
        sizeBytes: 0,
        storageKey: null,
        sha256Hex: null,
        createdBy: "Cody (Owner / Admin)",
        updatedBy: "Cody (Owner / Admin)",
        createdAt: now,
        updatedAt: now,
        trashedAt: null,
        trashedBy: null,
      },
      {
        id: folderPermitsId,
        tenantId: "demo-seed",
        parentId: null,
        kind: "folder",
        name: "Permits & 811 Locates",
        mimeType: null,
        sizeBytes: 0,
        storageKey: null,
        sha256Hex: null,
        createdBy: "Andrei Krilov",
        updatedBy: "Andrei Krilov",
        createdAt: now,
        updatedAt: now,
        trashedAt: null,
        trashedBy: null,
      },
      {
        id: folderPhotosId,
        tenantId: "demo-seed",
        parentId: folderCloseoutsId,
        kind: "folder",
        name: "JOB-1045 Field Photos",
        mimeType: null,
        sizeBytes: 0,
        storageKey: null,
        sha256Hex: null,
        createdBy: "J. Ramirez",
        updatedBy: "J. Ramirez",
        createdAt: now,
        updatedAt: now,
        trashedAt: null,
        trashedBy: null,
      },
      {
        id: sheetTrackerId,
        tenantId: "demo-seed",
        parentId: folderCloseoutsId,
        kind: "spreadsheet",
        name: "Pine Hill Production & Bore Log",
        mimeType: "application/vnd.crewproof.spreadsheet+json",
        sizeBytes: 512,
        storageKey: null,
        sha256Hex: null,
        createdBy: "PM Review",
        updatedBy: "PM Review",
        createdAt: now,
        updatedAt: now,
        trashedAt: null,
        trashedBy: null,
      },
      {
        id: filePermitId,
        tenantId: "demo-seed",
        parentId: folderPermitsId,
        kind: "file",
        name: "ROW-4471-Pine-Hill-Permit.pdf",
        mimeType: "application/pdf",
        sizeBytes: 24580,
        storageKey: "workspaces/demo-seed/permits/ROW-4471-Pine-Hill-Permit.pdf",
        sha256Hex: computeSha256Hex("ROW-4471-Pine-Hill-Permit.pdf"),
        createdBy: "Ops Admin",
        updatedBy: "Ops Admin",
        createdAt: now,
        updatedAt: now,
        trashedAt: null,
        trashedBy: null,
      },
    ],
    sheets: {
      [sheetTrackerId]: {
        itemId: sheetTrackerId,
        tenantId: "demo-seed",
        tabs: [
          {
            id: "tab-1",
            name: "Bore & Pay Items",
            columns: ["Asset", "Description", "Plan Ft", "Actual Ft", "Status", "Billable $"],
            rows: [
              { id: "r-1", cells: { Asset: "HH-1", Description: "Handhole 24x36", "Plan Ft": "125", "Actual Ft": "125", Status: "Ready to Bill", "Billable $": "$8,450" } },
              { id: "r-2", cells: { Asset: "SC-1", Description: "144ct Splice Closure", "Plan Ft": "-", "Actual Ft": "-", Status: "Waiting on Approval", "Billable $": "$11,200" } },
              { id: "r-3", cells: { Asset: "SV-1", Description: "Splice Vault A", "Plan Ft": "125", "Actual Ft": "125", Status: "Missing Photos", "Billable $": "$18,600" } },
              { id: "r-4", cells: { Asset: "SV-2", Description: "Splice Vault B Bore", "Plan Ft": "87", "Actual Ft": "94", Status: "Rejected (+7 ft)", "Billable $": "$22,900" } },
            ],
          },
        ],
        updatedAt: now,
        updatedBy: "PM Review",
      },
    },
    rules: [
      {
        id: "cbx-rule-1",
        tenantId: "demo-seed",
        keyword: "permit",
        folderId: folderPermitsId,
        priority: 10,
        requireApproval: false,
        enabled: true,
        createdBy: "Cody (Owner / Admin)",
        createdAt: now,
      },
      {
        id: "cbx-rule-2",
        tenantId: "demo-seed",
        keyword: "photo",
        folderId: folderPhotosId,
        priority: 20,
        requireApproval: true,
        enabled: true,
        createdBy: "Cody (Owner / Admin)",
        createdAt: now,
      },
    ],
    approvals: [],
    jobLinks: [
      {
        id: "cbx-link-1",
        tenantId: "demo-seed",
        itemId: sheetTrackerId,
        jobId: "JOB-1045",
        jobTitle: "PINE HILL FTTH EXPANSION",
        note: "Primary bore log and pay item reconciliation sheet",
        linkedBy: "PM Review",
        linkedAt: now,
      },
      {
        id: "cbx-link-2",
        tenantId: "demo-seed",
        itemId: filePermitId,
        jobId: "JOB-1045",
        jobTitle: "PINE HILL FTTH EXPANSION",
        note: "Travis County ROW permit",
        linkedBy: "Ops Admin",
        linkedAt: now,
      },
    ],
    events: [
      {
        id: 1,
        tenantId: "demo-seed",
        itemId: folderCloseoutsId,
        action: "folder.created",
        actor: "Cody (Owner / Admin)",
        detail: { name: "Closeout Packages" },
        createdAt: now,
      },
      {
        id: 2,
        tenantId: "demo-seed",
        itemId: sheetTrackerId,
        action: "spreadsheet.created",
        actor: "PM Review",
        detail: { name: "Pine Hill Production & Bore Log", jobId: "JOB-1045" },
        createdAt: now,
      },
    ],
  };

  // Seed initial Crew Chat messages & links for demo-seed
  const chat = {
    messages: [
      {
        id: "msg-seed-1",
        tenantId: "demo-seed",
        roomKey: "company",
        seq: 1,
        senderKey: "cody@crewproof.local",
        senderName: "Cody (Owner)",
        senderRole: "pm",
        body: "Morning team — prioritize clearing SV-1 open-vault photo on @JOB-1045 so we can release the Windstream package.",
        clientId: "seed-company-1",
        meta: {},
        createdAt: "2026-06-26T13:30:00.000Z",
      },
      {
        id: "msg-seed-2",
        tenantId: "demo-seed",
        roomKey: "crew:alpha",
        seq: 1,
        senderKey: "j.ramirez@crewproof.local",
        senderName: "J. Ramirez",
        senderRole: "crew",
        body: "Alpha crew on site at Pine Hill Rd. HH-1 restoration photo uploaded; heading to SV-1 next for @JOB-1045.",
        clientId: "seed-alpha-1",
        meta: {},
        createdAt: "2026-06-26T13:45:00.000Z",
      },
      {
        id: "msg-seed-3",
        tenantId: "demo-seed",
        roomKey: "job:JOB-1045",
        seq: 1,
        senderKey: "locate@crewproof.local",
        senderName: "Locate Desk",
        senderRole: "locate",
        body: "Ticket FL811-24-1194 needs utility power positive response before UG-1 bore release.",
        clientId: "seed-job1045-1",
        meta: { assetId: "UG-1" },
        createdAt: "2026-06-26T14:00:00.000Z",
      },
      {
        id: "msg-seed-4",
        tenantId: "demo-seed",
        roomKey: "job:JOB-1045",
        seq: 2,
        senderKey: "cody@crewproof.local",
        senderName: "PM Review",
        senderRole: "pm",
        body: "Approved HH-1 pay item ($8,450) for immediate billing while SV-1 and SV-2 holds are worked.",
        clientId: "seed-job1045-2",
        meta: { assetId: "HH-1", decision: true },
        createdAt: "2026-06-26T14:12:00.000Z",
      },
    ],
    reads: {},
    jobLinks: [
      {
        id: "chat-link-seed-1",
        tenantId: "demo-seed",
        jobId: "JOB-1045",
        messageId: "msg-seed-1",
        linkKind: "mention",
        note: "Mentioned @JOB-1045 in company room",
        linkedBy: "Cody (Owner)",
        linkedAt: "2026-06-26T13:30:00.000Z",
        unlinkedAt: null,
        unlinkedBy: null,
      },
      {
        id: "chat-link-seed-2",
        tenantId: "demo-seed",
        jobId: "JOB-1045",
        messageId: "msg-seed-2",
        linkKind: "mention",
        note: "Mentioned @JOB-1045 in crew:alpha",
        linkedBy: "J. Ramirez",
        linkedAt: "2026-06-26T13:45:00.000Z",
        unlinkedAt: null,
        unlinkedBy: null,
      },
      {
        id: "chat-link-seed-3",
        tenantId: "demo-seed",
        jobId: "JOB-1045",
        messageId: "msg-seed-3",
        linkKind: "room",
        note: null,
        linkedBy: "Locate Desk",
        linkedAt: "2026-06-26T14:00:00.000Z",
        unlinkedAt: null,
        unlinkedBy: null,
      },
      {
        id: "chat-link-seed-4",
        tenantId: "demo-seed",
        jobId: "JOB-1045",
        messageId: "msg-seed-4",
        linkKind: "room",
        note: null,
        linkedBy: "PM Review",
        linkedAt: "2026-06-26T14:12:00.000Z",
        unlinkedAt: null,
        unlinkedBy: null,
      },
    ],
  };

  return {
    schemaVersion: 1,
    updatedAt: new Date().toISOString(),
    jobs,
    assets,
    clients,
    workspaces: [],
    rateSubmissionsByJob,
    crew811Tickets,
    claimsDamageRecords,
    damageProofRecords,
    droppedMapPins: [],
    users,
    sessions: {},
    uploads: [],
    auditLog: [
      {
        id: "aud-seed-1",
        at: "2026-06-26T14:00:00.000Z",
        actor: "system",
        action: "store.initialized",
        detail: "CrewProof durable store initialized with seeded jobs, clients, 811 tickets, claims, CrewBox Drive, and Crew Chat.",
      },
    ],
    crewbox,
    chat,
  };
}

export function createStore(options = {}) {
  const dataDir = options.dataDir || defaultDataDir;
  const statePath = join(dataDir, "state.json");
  const uploadsDir = join(dataDir, "uploads");

  mkdirSync(uploadsDir, { recursive: true });

  let state = initialSeedData();
  if (existsSync(statePath) && !options.fresh) {
    try {
      const raw = JSON.parse(readFileSync(statePath, "utf8"));
      state = { ...state, ...raw };
    } catch {
      // Fallback to initial seed data if state file is corrupted
    }
  }

  function save() {
    state.updatedAt = new Date().toISOString();
    mkdirSync(dirname(statePath), { recursive: true });
    const tmpPath = `${statePath}.${process.pid}.tmp`;
    writeFileSync(tmpPath, JSON.stringify(state, null, 2), "utf8");
    renameSync(tmpPath, statePath);
  }

  function logAudit(actor, action, detail, extra = {}) {
    const entry = {
      id: "aud-" + randomUUID().slice(0, 8),
      at: new Date().toISOString(),
      actor: actor || "system",
      action,
      detail,
      ...extra,
    };
    state.auditLog.unshift(entry);
    state.auditLog = state.auditLog.slice(0, 500);
    return entry;
  }

  // Ensure initial state is persisted on disk
  save();

  // --- Auth & Session methods ---
  function login({ email, role, name, tenantId = "demo-seed" }) {
    const cleanEmail = String(email || "").trim().toLowerCase();
    const inferredRole = role || (
      cleanEmail.startsWith("pm@") || cleanEmail.startsWith("cody@") ? "pm"
      : cleanEmail.startsWith("billing@") || cleanEmail.startsWith("ap@") ? "billing"
      : cleanEmail.startsWith("locate@") ? "locate"
      : cleanEmail.startsWith("claims@") ? "claims"
      : "crew"
    );
    let user = state.users.find((u) => u.email.toLowerCase() === cleanEmail);
    if (!user && role) {
      user = state.users.find((u) => u.role === role);
    }
    if (!user) {
      if (!cleanEmail) {
        user = state.users[0];
      } else {
        user = {
          id: "user-" + randomUUID().slice(0, 8),
          email: cleanEmail,
          name: String(name || cleanEmail.split("@")[0]).trim(),
          role: inferredRole,
          roleLabel: inferredRole === "pm" ? "Owner / PM" : inferredRole === "billing" ? "Billing / AP" : "Crew / Foreman",
          tenantId,
          workspaceId: tenantId,
          crewId: "Alpha",
        };
        state.users.push(user);
      }
    } else if (role && user.role !== role) {
      user = { ...user, role };
    }
    const token = "cpsess_" + randomUUID().replace(/-/g, "");
    const session = {
      token,
      user,
      createdAt: new Date().toISOString(),
    };
    state.sessions[token] = session;
    logAudit(user.name, "auth.login", `User ${user.email} signed in (${user.role})`);
    save();
    return session;
  }

  function getSession(token) {
    if (!token) return null;
    return state.sessions[token] || null;
  }

  function logout(token) {
    if (token && state.sessions[token]) {
      const user = state.sessions[token].user;
      delete state.sessions[token];
      logAudit(user?.name || "user", "auth.logout", "Session signed out");
      save();
    }
    return { ok: true };
  }

  // --- File Uploads ---
  function saveUpload({ fileName, mimeType = "application/octet-stream", dataBase64, buffer, workspaceId = "demo-seed", jobId = "", assetId = "", documentType = "proof-photos", uploadedBy = "Field User" }) {
    const cleanName = String(fileName || `upload-${Date.now()}.bin`).replace(/[^a-zA-Z0-9._-]+/g, "-");
    const rawBuffer = buffer
      ? Buffer.from(buffer)
      : Buffer.from(String(dataBase64 || "").replace(/^data:[^;]+;base64,/, ""), "base64");
    const sha256Hex = computeSha256Hex(rawBuffer);
    const id = "upl-" + randomUUID().slice(0, 8);
    const relDir = join(workspaceId || "demo-seed", jobId || "general");
    const absDir = join(uploadsDir, relDir);
    mkdirSync(absDir, { recursive: true });
    const storedFileName = `${id}-${cleanName}`;
    const absPath = join(absDir, storedFileName);
    writeFileSync(absPath, rawBuffer);

    const url = `/uploads/${workspaceId || "demo-seed"}/${jobId || "general"}/${storedFileName}`;
    const record = {
      id,
      workspaceId: workspaceId || "demo-seed",
      jobId,
      assetId,
      documentType,
      fileName: cleanName,
      storedFileName,
      mimeType,
      sizeBytes: rawBuffer.length,
      sha256Hex,
      url,
      storagePath: `workspaces/${workspaceId || "demo-seed"}/jobs/${(jobId || "general").toLowerCase()}/${documentType}/${cleanName}`,
      uploadedBy,
      createdAt: new Date().toISOString(),
    };
    state.uploads.unshift(record);
    logAudit(uploadedBy, "upload.stored", `Uploaded ${cleanName} (${rawBuffer.length} bytes, sha256 ${sha256Hex.slice(0, 12)})`, { jobId, assetId, url });
    save();
    return record;
  }

  // --- Jobs & Assets ---
  function createJob(input, actor = "Owner / Admin") {
    const customer = String(input.customer || input.clientName || "WINDSTREAM").trim().toUpperCase();
    const project = String(input.project || `${customer} FIBER BUILD`).trim().toUpperCase();
    const siteName = String(input.siteName || project.split(" ")[0] || "SITE").trim().toUpperCase();
    const existingNums = Object.keys(state.jobs)
      .map((k) => Number(k.replace(/^JOB-/, "")))
      .filter((n) => Number.isFinite(n));
    const nextNum = existingNums.length ? Math.max(...existingNums) + 1 : 1049;
    const jobId = String(input.jobId || `JOB-${nextNum}`).trim().toUpperCase();
    if (state.jobs[jobId]) {
      return { error: `Job ${jobId} already exists.` };
    }
    const prefix = siteName.slice(0, 2).toUpperCase() || "JB";
    const hhId = `${prefix}-HH-1`;
    const scId = `${prefix}-SC-1`;
    const svAId = `${prefix}-SV-1`;
    const svBId = `${prefix}-SV-2`;
    const ugId = `${prefix}-UG-1`;

    const workspaceId = input.workspaceId || "demo-seed";
    const customerId = customer.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    const projectId = project.toLowerCase().replace(/[^a-z0-9]+/g, "-");

    const job = {
      customer,
      status: input.status || "Waiting on Approval",
      issuedTo: input.issuedTo || `${customer} Closeout Desk`,
      recipient: input.recipient || `closeout@${customerId}.example`,
      project,
      siteId: input.siteId || `TXL-${nextNum}`,
      siteName,
      siteType: input.siteType || "UG FIBER",
      address: String(input.address || `100 ${siteName} RD<br>AUSTIN, TX 78701`),
      county: String(input.county || "TRAVIS").toUpperCase(),
      mapDate: new Date().toLocaleDateString("en-US"),
      drawnBy: input.drawnBy || "Alpha Crew",
      defaultAsset: hhId,
      workspaceId,
      customerId,
      projectId,
      storageRoot: `workspaces/${workspaceId}/customers/${customerId}/projects/${projectId}/jobs/${jobId.toLowerCase()}`,
      assets: {
        handhole: hhId,
        splice: scId,
        vaultA: svAId,
        vaultB: svBId,
        underground: ugId,
      },
    };

    const nowFormatted = new Date().toLocaleString("en-US", { hour12: false });
    const defaultAssets = [
      [hhId, `${hhId} Handhole`, "Ready to Bill", "ready", 9500, "Handhole install + restoration", "assets/photo-hh-1.png", 100, "Complete", "None"],
      [scId, `${scId} Splice Closure`, "Waiting on Approval", "waiting", 11200, "Splice closure", "assets/photo-sc-1.png", 85, "Submitted", "PM review pending"],
      [svAId, `${svAId} Splice Vault`, "Missing Photos", "missing", 15400, `Splice vault ${svAId}`, "assets/photo-sv-1.png", 60, "Needs Fix", "Missing open-vault photo"],
      [svBId, `${svBId} Splice Vault`, "Waiting on Approval", "waiting", 16800, `Splice vault ${svBId}`, "assets/photo-sv-2.png", 80, "Submitted", "Owner review pending"],
      [ugId, `${ugId} Underground Fiber`, "Waiting on Approval", "waiting", 21000, "Underground fiber in conduit", "assets/photo-ug-1.png", 75, "Submitted", "Locate verification pending"],
    ];

    for (const [id, title, status, statusClass, amount, payItem, photo, progress, proof, blocker] of defaultAssets) {
      state.assets[id] = {
        jobId,
        asset: title,
        status,
        statusClass,
        crew: input.crew || "Alpha",
        location: `${title} / ${siteName}`,
        source: "Foreman app + GPS camera",
        device: "Field iPad / GPS camera",
        gps: input.gps || "30.210500, -97.951100",
        feedUpdated: nowFormatted,
        tech: `${actor} / ${input.crew || "Alpha"}`,
        contractor: input.contractor || "Lone Star Fiber Works",
        updated: nowFormatted,
        proof,
        blocker,
        value: `$${amount.toLocaleString("en-US")}`,
        amount,
        payItem,
        photo,
        photoCaption: `${id} field evidence at ${siteName}`,
        progress,
        list: [
          ["done", `Job ${jobId} initialized`],
          [statusClass === "ready" ? "done" : "", status],
        ],
        comms: [[`Live Timeline`, `${actor} created ${jobId} for ${customer} (${project}).`]],
      };
    }

    state.jobs[jobId] = job;
    state.rateSubmissionsByJob[jobId] = {
      customer,
      project,
      contract: input.contract || `MSA-${customer.slice(0, 4)}-2026`,
      sow: input.sow || `${siteName}-SOW`,
      po: input.po || `PO-${nextNum}`,
      version: `${customer.slice(0, 3)}-2026-RATE-v1`,
      status: "Approved",
      effectiveDate: new Date().toLocaleDateString("en-US"),
      submittedBy: actor,
      approvedBy: `${customer} AP`,
      locked: false,
      retainage: "5%",
      taxJurisdiction: `${job.county} County`,
      poFunding: 100,
      changeOrderApproval: 100,
      lines: defaultAssets.map(([assetId, , , , amount, payItem]) => ({
        assetId,
        payItem,
        quantity: 1,
        unit: "EA",
        rate: amount,
        status: "Approved",
        source: `${customer.slice(0, 3)}-2026-RATE-v1`,
      })),
    };

    logAudit(actor, "job.created", `Created ${jobId} for ${customer} (${project})`, { jobId });
    save();
    return { jobId, job, assets: defaultAssets.map(([id]) => state.assets[id]), rateSubmission: state.rateSubmissionsByJob[jobId] };
  }

  function mutateAsset(assetId, action, payload = {}, actor = "Field User") {
    const data = state.assets[assetId];
    if (!data) return { error: `Asset ${assetId} not found.` };
    const nowTime = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    const nowStamp = new Date().toLocaleString("en-US", { hour12: false });

    if (payload.photoUrl) {
      data.photo = payload.photoUrl;
    }
    if (payload.gps) {
      data.gps = payload.gps;
    }

    if (action === "Add Proof") {
      data.proof = data.proof === "Rejected" ? "Needs Fix" : "Submitted";
      data.progress = Math.min(96, Math.max(data.progress, data.progress + 12));
      data.list.unshift(["done", `Crew Submitted: new proof added by ${actor}`]);
      data.comms.unshift([`${nowTime} Proof`, `${actor}: added field proof to ${assetId}.`]);
    } else if (action === "Take Photo") {
      data.proof = data.statusClass === "ready" ? "Complete" : "Submitted";
      data.progress = Math.min(98, Math.max(data.progress, data.progress + 18));
      data.photoCaption = payload.caption || `${assetId} latest field photo pinned at job location`;
      data.list.unshift(["done", "Field photo pinned to asset location"]);
      data.comms.unshift([`${nowTime} Photo`, `${actor}: photo captured and pinned to ${data.location}.`]);
    } else if (action === "GPS Lock") {
      data.progress = Math.min(99, Math.max(data.progress, data.progress + 8));
      data.list.unshift(["done", `GPS point locked at ${data.gps}`]);
      data.comms.unshift([`${nowTime} GPS`, `${actor}: GPS lock confirmed at ${data.gps}.`]);
    } else if (action === "Mark Complete") {
      data.status = "Ready to Bill";
      data.statusClass = "ready";
      data.proof = "Complete";
      data.blocker = "None";
      data.progress = 100;
      data.feedUpdated = nowStamp;
      data.updated = nowStamp;
      data.list.unshift(["done", "Ready to Bill"]);
      data.comms.unshift([`${nowTime} Complete`, `${actor}: ${assetId} marked complete and ready to bill.`]);
    } else {
      data.comms.unshift([`${nowTime} Field`, `${actor}: ${action} recorded for ${assetId}.`]);
    }

    data.updated = nowStamp;
    data.feedUpdated = nowStamp;
    logAudit(actor, "asset.action", `${action} on ${assetId} -> ${data.status}`, { assetId, action });
    save();
    return { assetId, asset: data };
  }

  // --- Rate Submissions ---
  function mutateRateSubmission(jobId, action, payload = {}, actor = "PM / Admin") {
    let rate = state.rateSubmissionsByJob[jobId];
    if (!rate) {
      const job = state.jobs[jobId];
      if (!job) return { error: `Job ${jobId} not found.` };
      rate = {
        customer: job.customer,
        project: job.project,
        contract: `MSA-${job.customer}`,
        sow: `${job.siteName}-SOW`,
        po: `PO-${jobId}`,
        version: `${job.customer}-RATE-v1`,
        status: "Submitted",
        effectiveDate: new Date().toLocaleDateString("en-US"),
        submittedBy: actor,
        approvedBy: "Pending",
        locked: false,
        retainage: "5%",
        taxJurisdiction: `${job.county} County`,
        poFunding: 80,
        changeOrderApproval: 80,
        lines: Object.values(job.assets || {}).map((assetId) => ({
          assetId,
          payItem: state.assets[assetId]?.payItem || "Field asset",
          quantity: 1,
          unit: "EA",
          rate: state.assets[assetId]?.amount || 0,
          status: "Submitted",
          source: `${job.customer}-RATE-v1`,
        })),
      };
      state.rateSubmissionsByJob[jobId] = rate;
    }

    if (action === "submit") {
      rate.status = "Submitted";
      rate.submittedBy = actor;
      rate.locked = false;
      rate.lines.forEach((l) => {
        if (l.status !== "Approved") l.status = "Submitted";
      });
    } else if (action === "approve") {
      rate.status = "Approved";
      rate.approvedBy = actor;
      rate.poFunding = Math.max(rate.poFunding || 0, 100);
      rate.changeOrderApproval = Math.max(rate.changeOrderApproval || 0, 100);
      rate.lines.forEach((l) => {
        l.status = "Approved";
      });
    } else if (action === "reject") {
      rate.status = "Rejected";
      rate.approvedBy = `Rejected by ${actor}`;
      rate.locked = false;
      rate.lines.forEach((l) => {
        l.status = "Rejected";
      });
    } else if (action === "lock") {
      rate.status = "Locked";
      rate.approvedBy = rate.approvedBy === "Pending" ? actor : rate.approvedBy;
      rate.locked = true;
      rate.lines.forEach((l) => {
        l.status = "Approved";
      });
    } else if (action === "upload") {
      if (payload.version) rate.version = payload.version;
      if (payload.po) rate.po = payload.po;
      if (payload.contract) rate.contract = payload.contract;
      rate.status = "Approved";
      rate.approvedBy = actor;
      rate.lines.forEach((l) => {
        l.status = "Approved";
        if (payload.version) l.source = payload.version;
      });
    }

    logAudit(actor, `rate.${action}`, `Rate submission ${rate.version} for ${jobId}: ${rate.status}`, { jobId, status: rate.status });
    save();
    return { jobId, rateSubmission: rate };
  }

  // --- Clients & Workspaces ---
  function upsertClient(clientInput, actor = "Owner / Admin") {
    const id = String(clientInput.id || clientInput.customerCode || clientInput.name || "CLIENT")
      .toUpperCase()
      .replace(/&/g, "AND")
      .replace(/[^A-Z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
    const existingIdx = state.clients.findIndex((c) => c.id === id);
    const now = new Date().toISOString();
    const record = {
      ...(existingIdx >= 0 ? state.clients[existingIdx] : {}),
      ...clientInput,
      id,
      status: clientInput.status || "active",
      createdAt: existingIdx >= 0 ? state.clients[existingIdx].createdAt : now,
      updatedAt: now,
      audit: [
        ...(existingIdx >= 0 ? state.clients[existingIdx].audit || [] : []),
        { at: now, action: existingIdx >= 0 ? "updated" : "created", note: `Saved by ${actor}` },
      ],
    };
    if (existingIdx >= 0) state.clients[existingIdx] = record;
    else state.clients.push(record);
    logAudit(actor, "client.saved", `Saved client ${record.name} (${record.id})`, { clientId: record.id });
    save();
    return record;
  }

  function upsertWorkspace(wsInput, actor = "Owner / Admin") {
    const workspaceId = String(wsInput.workspaceId || wsInput.name || "")
      .toLowerCase()
      .replace(/&/g, "and")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
    if (!workspaceId || workspaceId === "demo-seed") {
      return { error: "Valid non-demo workspaceId is required." };
    }
    const idx = state.workspaces.findIndex((w) => w.workspaceId === workspaceId);
    const record = {
      ...(idx >= 0 ? state.workspaces[idx] : {}),
      ...wsInput,
      workspaceId,
      updatedAt: new Date().toISOString(),
    };
    if (idx >= 0) state.workspaces[idx] = record;
    else state.workspaces.push(record);
    logAudit(actor, "workspace.saved", `Saved pilot workspace ${workspaceId}`, { workspaceId });
    save();
    return { workspace: record };
  }

  // --- Crew811 & Current Locate Status ---
  function evaluateTicketCurrentStatus(ticketOrId, options = {}) {
    const ticket = typeof ticketOrId === "string"
      ? state.crew811Tickets.find((t) => t.id === ticketOrId || t.ticketNumber === ticketOrId)
      : ticketOrId;
    if (!ticket) return { error: "Ticket not found" };

    const sourceRows =
      ticket.sunshineCurrentResponses ||
      ticket.humanCurrentResponses ||
      ticket.exactixCurrentResponses ||
      ticket.responses ||
      [];

    const calcInput = {
      ...ticket,
      ticketVersion: ticket.ticketVersion ?? 1,
      currentVersion: ticket.currentVersion ?? 1,
      currentVersionEstablished: ticket.currentVersionEstablished ?? true,
      responseDueAt: ticket.responseDueAt || ticket.dueAt || new Date(Date.now() + 86400000).toISOString(),
      expiresAt: ticket.expiresAt || new Date(Date.now() + 7 * 86400000).toISOString(),
      serviceAreas:
        Array.isArray(ticket.serviceAreas) && ticket.serviceAreas.length
          ? ticket.serviceAreas
          : sourceRows.map((r, i) => ({
              serviceAreaCode: r.serviceAreaCode || r.utilityName || `AREA-${i + 1}`,
              serviceAreaName: r.serviceAreaName || r.utilityName || `Utility ${i + 1}`,
            })),
      responses: sourceRows.map((r, i) => ({
        ...r,
        serviceAreaCode: r.serviceAreaCode || r.utilityName || `AREA-${i + 1}`,
        serviceAreaName: r.serviceAreaName || r.utilityName || `Utility ${i + 1}`,
        responseCode:
          r.responseCode ||
          (r.responseStatus === "CLEAR"
            ? "4"
            : r.responseStatus === "MARKED"
              ? "1"
              : r.responseStatus === "CONFLICT"
                ? "6A"
                : "NO RESPONSE"),
        comment: r.comment || r.responseText || "",
        enteredDate: r.enteredDate || ticket.dueAt || new Date().toISOString(),
      })),
    };

    return calculateCurrentLocateStatus(calcInput, options);
  }

  function upsertCrew811Ticket(ticketInput, actor = "Locate Desk") {
    const idx = state.crew811Tickets.findIndex(
      (t) => t.id === ticketInput.id || t.ticketNumber === ticketInput.ticketNumber,
    );
    const merged = {
      ...(idx >= 0 ? state.crew811Tickets[idx] : {}),
      ...ticketInput,
    };
    const statusEval = evaluateTicketCurrentStatus(merged);
    merged.currentStatusEvaluation = {
      policy: TIX811_POLICY,
      responseStatus: statusEval.responseStatus,
      renewalAction: statusEval.renewalAction,
      attentionStatus: statusEval.attentionStatus,
      responseRatio: statusEval.responseRatio,
      blockingProviders: statusEval.audit?.blockingProviders || [],
      evaluatedAt: new Date().toISOString(),
    };
    if (idx >= 0) state.crew811Tickets[idx] = merged;
    else state.crew811Tickets.unshift(merged);
    logAudit(actor, "crew811.upserted", `Synced 811 ticket ${merged.ticketNumber} (${merged.status})`, {
      ticketNumber: merged.ticketNumber,
      responseStatus: statusEval.responseStatus,
    });
    save();
    return merged;
  }

  // --- Claims & Damage ---
  function upsertClaim(claimInput, actor = "Claims Desk") {
    const idx = state.claimsDamageRecords.findIndex((c) => c.id === claimInput.id);
    const merged = {
      ...(idx >= 0 ? state.claimsDamageRecords[idx] : {}),
      ...claimInput,
      updatedAt: claimInput.updatedAt || new Date().toLocaleString("en-US", { hour12: false }),
    };
    if (idx >= 0) state.claimsDamageRecords[idx] = merged;
    else state.claimsDamageRecords.unshift(merged);
    logAudit(actor, "claim.upserted", `Updated claim ${merged.id} (${merged.status})`, { claimId: merged.id });
    save();
    return merged;
  }

  // --- CrewBox Drive Engine (Full implementation of 2-apply-crewbox-migration.sql) ---
  function logCrewboxEvent(tenantId, itemId, action, actor, detail = {}) {
    const nextId = (state.crewbox.events.reduce((max, e) => Math.max(max, Number(e.id) || 0), 0) || 0) + 1;
    const evt = {
      id: nextId,
      tenantId: String(tenantId || "demo-seed").trim(),
      itemId: itemId || null,
      action,
      actor: String(actor || "system").trim() || "system",
      detail,
      createdAt: new Date().toISOString(),
    };
    state.crewbox.events.push(evt);
    return evt;
  }

  function crewboxAssertParentFolder(tenantId, parentId, selfId = null) {
    if (!parentId) return;
    if (selfId && parentId === selfId) {
      throw new Error("A folder cannot be placed inside itself");
    }
    const parent = state.crewbox.items.find((i) => i.id === parentId);
    if (!parent) throw new Error(`Parent folder ${parentId} does not exist`);
    if (parent.tenantId !== tenantId) throw new Error("Parent folder belongs to a different tenant");
    if (parent.kind !== "folder") throw new Error("Parent item must be a folder");
    if (parent.trashedAt !== null) throw new Error("Cannot place items inside a trashed folder");

    let cursor = parent.parentId;
    let depth = 0;
    while (cursor) {
      if (selfId && cursor === selfId) {
        throw new Error("Cannot move a folder inside one of its own descendants");
      }
      const next = state.crewbox.items.find((i) => i.id === cursor && i.tenantId === tenantId);
      cursor = next?.parentId || null;
      depth += 1;
      if (depth > 64) throw new Error("Folder hierarchy exceeds maximum depth of 64");
    }
  }

  function crewboxCheckSiblingUniqueness(tenantId, parentId, name, excludeId = null) {
    const lower = String(name || "").trim().toLowerCase();
    const conflict = state.crewbox.items.find(
      (i) =>
        i.tenantId === tenantId &&
        i.parentId === (parentId || null) &&
        i.trashedAt === null &&
        i.id !== excludeId &&
        i.name.toLowerCase() === lower,
    );
    if (conflict) {
      throw new Error(`An active item named "${name}" already exists in this folder`);
    }
  }

  function crewboxCheckRules(tenantId, name, currentFolderId = null) {
    const cleanTenant = String(tenantId || "").trim();
    const cleanName = String(name || "").trim().toLowerCase();
    if (!cleanTenant || !cleanName) return [];
    return state.crewbox.rules
      .filter((r) => {
        if (r.tenantId !== cleanTenant || !r.enabled) return false;
        if (!cleanName.includes(r.keyword.toLowerCase())) return false;
        if (currentFolderId && r.folderId === currentFolderId) return false;
        const folder = state.crewbox.items.find(
          (f) => f.id === r.folderId && f.tenantId === cleanTenant && f.kind === "folder" && f.trashedAt === null,
        );
        return Boolean(folder);
      })
      .sort((a, b) => a.priority - b.priority || a.createdAt.localeCompare(b.createdAt))
      .map((r) => {
        const folder = state.crewbox.items.find((f) => f.id === r.folderId);
        return {
          ruleId: r.id,
          keyword: r.keyword,
          folderId: r.folderId,
          folderName: folder?.name || "",
          priority: r.priority,
          requireApproval: r.requireApproval,
        };
      });
  }

  function crewboxApplyRules(itemId, actor = "system") {
    const item = state.crewbox.items.find((i) => i.id === itemId);
    if (!item || item.trashedAt !== null || item.kind === "folder") {
      return { outcome: "none", ruleId: null, targetFolderId: null, approvalId: null };
    }
    const matches = crewboxCheckRules(item.tenantId, item.name, item.parentId);
    const match = matches[0];
    if (!match) {
      return { outcome: "none", ruleId: null, targetFolderId: null, approvalId: null };
    }

    if (match.requireApproval) {
      let pending = state.crewbox.approvals.find((a) => a.itemId === item.id && a.status === "pending");
      if (!pending) {
        pending = {
          id: randomUUID(),
          tenantId: item.tenantId,
          itemId: item.id,
          ruleId: match.ruleId,
          targetFolderId: match.folderId,
          reason: `Matched rule keyword "${match.keyword}"`,
          status: "pending",
          requestedBy: actor || "rule",
          requestedAt: new Date().toISOString(),
          reviewedBy: null,
          reviewedAt: null,
          reviewNote: null,
        };
        state.crewbox.approvals.push(pending);
      }
      logCrewboxEvent(item.tenantId, item.id, "rule.approval_requested", actor || "rule", {
        ruleId: match.ruleId,
        keyword: match.keyword,
        targetFolderId: match.folderId,
        approvalId: pending.id,
      });
      save();
      return {
        outcome: "approval_requested",
        ruleId: match.ruleId,
        targetFolderId: match.folderId,
        approvalId: pending.id,
      };
    }

    crewboxCheckSiblingUniqueness(item.tenantId, match.folderId, item.name, item.id);
    item.parentId = match.folderId;
    item.updatedBy = actor || "rule";
    item.updatedAt = new Date().toISOString();
    logCrewboxEvent(item.tenantId, item.id, "rule.auto_moved", actor || "rule", {
      ruleId: match.ruleId,
      keyword: match.keyword,
      targetFolderId: match.folderId,
    });
    save();
    return {
      outcome: "moved",
      ruleId: match.ruleId,
      targetFolderId: match.folderId,
      approvalId: null,
    };
  }

  function crewboxCreateFolder({ tenantId = "demo-seed", parentId = null, name, actor = "user" }) {
    const cleanName = String(name || "").trim();
    if (!cleanName) throw new Error("name is required");
    crewboxAssertParentFolder(tenantId, parentId);
    crewboxCheckSiblingUniqueness(tenantId, parentId, cleanName);
    const now = new Date().toISOString();
    const folder = {
      id: randomUUID(),
      tenantId,
      parentId: parentId || null,
      kind: "folder",
      name: cleanName,
      mimeType: null,
      sizeBytes: 0,
      storageKey: null,
      sha256Hex: null,
      createdBy: actor,
      updatedBy: actor,
      createdAt: now,
      updatedAt: now,
      trashedAt: null,
      trashedBy: null,
    };
    state.crewbox.items.push(folder);
    logCrewboxEvent(tenantId, folder.id, "folder.created", actor, { name: cleanName, parentId });
    save();
    return folder;
  }

  function crewboxCreateFile({
    tenantId = "demo-seed",
    parentId = null,
    name,
    mimeType = "application/octet-stream",
    sizeBytes = 0,
    storageKey = "",
    sha256Hex = null,
    actor = "user",
    applyRules = true,
  }) {
    const cleanName = String(name || "").trim();
    if (!cleanName) throw new Error("name is required");
    crewboxAssertParentFolder(tenantId, parentId);
    crewboxCheckSiblingUniqueness(tenantId, parentId, cleanName);
    const now = new Date().toISOString();
    const item = {
      id: randomUUID(),
      tenantId,
      parentId: parentId || null,
      kind: "file",
      name: cleanName,
      mimeType: mimeType || "application/octet-stream",
      sizeBytes: Math.max(0, Number(sizeBytes) || 0),
      storageKey: storageKey || `workspaces/${tenantId}/crewbox/${cleanName}`,
      sha256Hex: sha256Hex || computeSha256Hex(cleanName + now),
      createdBy: actor,
      updatedBy: actor,
      createdAt: now,
      updatedAt: now,
      trashedAt: null,
      trashedBy: null,
    };
    state.crewbox.items.push(item);
    logCrewboxEvent(tenantId, item.id, "file.uploaded", actor, {
      name: cleanName,
      parentId,
      mimeType: item.mimeType,
      sizeBytes: item.sizeBytes,
    });
    if (applyRules) {
      crewboxApplyRules(item.id, actor);
    }
    save();
    return item;
  }

  function crewboxCreateSpreadsheet({ tenantId = "demo-seed", parentId = null, name, tabs = null, actor = "user", applyRules = true }) {
    const cleanName = String(name || "").trim();
    if (!cleanName) throw new Error("name is required");
    crewboxAssertParentFolder(tenantId, parentId);
    crewboxCheckSiblingUniqueness(tenantId, parentId, cleanName);
    const initialTabs = Array.isArray(tabs) && tabs.length
      ? tabs
      : [{ id: "tab-1", name: "Sheet 1", columns: ["A", "B", "C", "D"], rows: [] }];
    const serialized = JSON.stringify(initialTabs);
    const now = new Date().toISOString();
    const item = {
      id: randomUUID(),
      tenantId,
      parentId: parentId || null,
      kind: "spreadsheet",
      name: cleanName,
      mimeType: "application/vnd.crewproof.spreadsheet+json",
      sizeBytes: Buffer.byteLength(serialized, "utf8"),
      storageKey: null,
      sha256Hex: null,
      createdBy: actor,
      updatedBy: actor,
      createdAt: now,
      updatedAt: now,
      trashedAt: null,
      trashedBy: null,
    };
    state.crewbox.items.push(item);
    state.crewbox.sheets[item.id] = {
      itemId: item.id,
      tenantId,
      tabs: initialTabs,
      updatedAt: now,
      updatedBy: actor,
    };
    logCrewboxEvent(tenantId, item.id, "spreadsheet.created", actor, { name: cleanName, parentId });
    if (applyRules) {
      crewboxApplyRules(item.id, actor);
    }
    save();
    return { item, sheet: state.crewbox.sheets[item.id] };
  }

  function crewboxSaveSpreadsheet({ tenantId = "demo-seed", itemId, tabs, actor = "user" }) {
    const item = state.crewbox.items.find((i) => i.id === itemId && i.tenantId === tenantId);
    if (!item || item.kind !== "spreadsheet") throw new Error("Spreadsheet not found");
    if (item.trashedAt !== null) throw new Error("Cannot edit a trashed spreadsheet");
    if (!Array.isArray(tabs)) throw new Error("tabs must be a JSON array");
    const now = new Date().toISOString();
    const serialized = JSON.stringify(tabs);
    state.crewbox.sheets[itemId] = {
      itemId,
      tenantId,
      tabs,
      updatedAt: now,
      updatedBy: actor,
    };
    item.sizeBytes = Buffer.byteLength(serialized, "utf8");
    item.updatedAt = now;
    item.updatedBy = actor;
    logCrewboxEvent(tenantId, itemId, "spreadsheet.saved", actor, { tabCount: tabs.length });
    save();
    return state.crewbox.sheets[itemId];
  }

  function crewboxRenameItem({ tenantId = "demo-seed", itemId, newName, actor = "user", applyRules = true }) {
    const item = state.crewbox.items.find((i) => i.id === itemId && i.tenantId === tenantId);
    if (!item) throw new Error(`Item ${itemId} not found`);
    if (item.trashedAt !== null) throw new Error("Cannot rename a trashed item");
    const cleanName = String(newName || "").trim();
    if (!cleanName) throw new Error("new_name is required");
    crewboxCheckSiblingUniqueness(tenantId, item.parentId, cleanName, item.id);
    const oldName = item.name;
    item.name = cleanName;
    item.updatedBy = actor;
    item.updatedAt = new Date().toISOString();
    logCrewboxEvent(tenantId, itemId, "item.renamed", actor, { from: oldName, to: cleanName });
    if (applyRules && item.kind !== "folder") {
      crewboxApplyRules(item.id, actor);
    }
    save();
    return item;
  }

  function crewboxMoveItem({ tenantId = "demo-seed", itemId, targetFolderId = null, actor = "user" }) {
    const item = state.crewbox.items.find((i) => i.id === itemId && i.tenantId === tenantId);
    if (!item) throw new Error(`Item ${itemId} not found`);
    if (item.trashedAt !== null) throw new Error("Cannot move a trashed item");
    crewboxAssertParentFolder(tenantId, targetFolderId, item.id);
    crewboxCheckSiblingUniqueness(tenantId, targetFolderId, item.name, item.id);
    const oldParent = item.parentId;
    item.parentId = targetFolderId || null;
    item.updatedBy = actor;
    item.updatedAt = new Date().toISOString();
    logCrewboxEvent(tenantId, itemId, "item.moved", actor, { fromFolderId: oldParent, toFolderId: targetFolderId });
    save();
    return item;
  }

  function crewboxCollectSubtreeIds(tenantId, rootId) {
    const ids = new Set([rootId]);
    let added = true;
    while (added) {
      added = false;
      for (const item of state.crewbox.items) {
        if (item.tenantId === tenantId && item.parentId && ids.has(item.parentId) && !ids.has(item.id)) {
          ids.add(item.id);
          added = true;
        }
      }
    }
    return [...ids];
  }

  function crewboxTrashItem({ tenantId = "demo-seed", itemId, actor = "user" }) {
    const item = state.crewbox.items.find((i) => i.id === itemId && i.tenantId === tenantId);
    if (!item) throw new Error(`Item ${itemId} not found`);
    const ids = crewboxCollectSubtreeIds(tenantId, itemId);
    const now = new Date().toISOString();
    let count = 0;
    for (const i of state.crewbox.items) {
      if (ids.includes(i.id) && i.trashedAt === null) {
        i.trashedAt = now;
        i.trashedBy = actor;
        i.updatedAt = now;
        i.updatedBy = actor;
        count += 1;
      }
    }
    for (const a of state.crewbox.approvals) {
      if (ids.includes(a.itemId) && a.status === "pending") {
        a.status = "rejected";
        a.reviewedBy = actor;
        a.reviewedAt = now;
        a.reviewNote = "Canceled because item was moved to trash";
      }
    }
    logCrewboxEvent(tenantId, itemId, "item.trashed", actor, { name: item.name, affectedCount: count });
    save();
    return { affectedCount: count };
  }

  function crewboxRestoreItem({ tenantId = "demo-seed", itemId, actor = "user" }) {
    const item = state.crewbox.items.find((i) => i.id === itemId && i.tenantId === tenantId);
    if (!item) throw new Error(`Item ${itemId} not found`);
    if (item.parentId) {
      const parent = state.crewbox.items.find((p) => p.id === item.parentId && p.tenantId === tenantId);
      if (!parent || parent.trashedAt !== null) {
        item.parentId = null;
      }
    }
    crewboxCheckSiblingUniqueness(tenantId, item.parentId, item.name, item.id);
    const ids = crewboxCollectSubtreeIds(tenantId, itemId);
    const now = new Date().toISOString();
    let count = 0;
    for (const i of state.crewbox.items) {
      if (ids.includes(i.id) && i.trashedAt !== null) {
        i.trashedAt = null;
        i.trashedBy = null;
        i.updatedAt = now;
        i.updatedBy = actor;
        count += 1;
      }
    }
    logCrewboxEvent(tenantId, itemId, "item.restored", actor, { name: item.name, affectedCount: count });
    save();
    return { affectedCount: count };
  }

  function crewboxPurgeItem({ tenantId = "demo-seed", itemId, actor = "user" }) {
    const item = state.crewbox.items.find((i) => i.id === itemId && i.tenantId === tenantId);
    if (!item) throw new Error(`Item ${itemId} not found`);
    if (item.trashedAt === null) throw new Error("Item must be in trash before permanent deletion");
    const ids = crewboxCollectSubtreeIds(tenantId, itemId);
    state.crewbox.items = state.crewbox.items.filter((i) => !ids.includes(i.id));
    ids.forEach((id) => delete state.crewbox.sheets[id]);
    state.crewbox.approvals = state.crewbox.approvals.filter((a) => !ids.includes(a.itemId));
    state.crewbox.jobLinks = state.crewbox.jobLinks.filter((l) => !ids.includes(l.itemId));
    logCrewboxEvent(tenantId, null, "item.purged", actor, { purgedItemId: itemId, name: item.name, purgedCount: ids.length });
    save();
    return { purgedCount: ids.length };
  }

  function crewboxEmptyTrash({ tenantId = "demo-seed", actor = "user" }) {
    const trashedIds = state.crewbox.items.filter((i) => i.tenantId === tenantId && i.trashedAt !== null).map((i) => i.id);
    if (!trashedIds.length) return { purgedCount: 0 };
    state.crewbox.items = state.crewbox.items.filter((i) => !trashedIds.includes(i.id));
    trashedIds.forEach((id) => delete state.crewbox.sheets[id]);
    state.crewbox.approvals = state.crewbox.approvals.filter((a) => !trashedIds.includes(a.itemId));
    state.crewbox.jobLinks = state.crewbox.jobLinks.filter((l) => !trashedIds.includes(l.itemId));
    logCrewboxEvent(tenantId, null, "trash.emptied", actor, { purgedCount: trashedIds.length });
    save();
    return { purgedCount: trashedIds.length };
  }

  function crewboxUpsertRule({ tenantId = "demo-seed", keyword, folderId, priority = 100, requireApproval = false, actor = "user" }) {
    const cleanKeyword = String(keyword || "").trim().toLowerCase();
    if (!cleanKeyword) throw new Error("keyword is required");
    crewboxAssertParentFolder(tenantId, folderId);
    let rule = state.crewbox.rules.find((r) => r.tenantId === tenantId && r.keyword.toLowerCase() === cleanKeyword);
    if (rule) {
      rule.folderId = folderId;
      rule.priority = priority ?? 100;
      rule.requireApproval = Boolean(requireApproval);
      rule.enabled = true;
    } else {
      rule = {
        id: randomUUID(),
        tenantId,
        keyword: cleanKeyword,
        folderId,
        priority: priority ?? 100,
        requireApproval: Boolean(requireApproval),
        enabled: true,
        createdBy: actor,
        createdAt: new Date().toISOString(),
      };
      state.crewbox.rules.push(rule);
    }
    logCrewboxEvent(tenantId, folderId, "rule.upserted", actor, {
      ruleId: rule.id,
      keyword: cleanKeyword,
      folderId,
      priority: rule.priority,
      requireApproval: rule.requireApproval,
    });
    save();
    return rule;
  }

  function crewboxReviewApproval({ tenantId = "demo-seed", approvalId, decision, actor = "user", note = "" }) {
    const cleanDecision = String(decision || "").trim().toLowerCase();
    if (!["approved", "rejected"].includes(cleanDecision)) {
      throw new Error("decision must be approved or rejected");
    }
    const approval = state.crewbox.approvals.find((a) => a.id === approvalId && a.tenantId === tenantId);
    if (!approval) throw new Error(`Approval ${approvalId} not found`);
    if (approval.status !== "pending") throw new Error(`Approval ${approvalId} has already been ${approval.status}`);

    const now = new Date().toISOString();
    approval.status = cleanDecision;
    approval.reviewedBy = actor;
    approval.reviewedAt = now;
    approval.reviewNote = note || null;

    if (cleanDecision === "approved") {
      crewboxMoveItem({ tenantId, itemId: approval.itemId, targetFolderId: approval.targetFolderId, actor });
      logCrewboxEvent(tenantId, approval.itemId, "approval.approved", actor, {
        approvalId,
        targetFolderId: approval.targetFolderId,
        note,
      });
    } else {
      logCrewboxEvent(tenantId, approval.itemId, "approval.rejected", actor, { approvalId, note });
    }
    save();
    return approval;
  }

  function crewboxLinkJob({ tenantId = "demo-seed", itemId, jobId, jobTitle = "", note = "", actor = "user" }) {
    const item = state.crewbox.items.find((i) => i.id === itemId && i.tenantId === tenantId);
    if (!item) throw new Error(`Item ${itemId} not found`);
    const cleanJobId = String(jobId || "").trim();
    if (!cleanJobId) throw new Error("job_id is required");
    let link = state.crewbox.jobLinks.find((l) => l.tenantId === tenantId && l.itemId === itemId && l.jobId === cleanJobId);
    if (link) {
      link.jobTitle = jobTitle || link.jobTitle;
      link.note = note || link.note;
      link.linkedBy = actor;
      link.linkedAt = new Date().toISOString();
    } else {
      link = {
        id: randomUUID(),
        tenantId,
        itemId,
        jobId: cleanJobId,
        jobTitle: jobTitle || state.jobs[cleanJobId]?.project || "",
        note: note || null,
        linkedBy: actor,
        linkedAt: new Date().toISOString(),
      };
      state.crewbox.jobLinks.push(link);
    }
    logCrewboxEvent(tenantId, itemId, "job.linked", actor, { linkId: link.id, jobId: cleanJobId, jobTitle: link.jobTitle });
    save();
    return link;
  }

  function crewboxUnlinkJob({ tenantId = "demo-seed", itemId, jobId, actor = "user" }) {
    const before = state.crewbox.jobLinks.length;
    state.crewbox.jobLinks = state.crewbox.jobLinks.filter(
      (l) => !(l.tenantId === tenantId && l.itemId === itemId && l.jobId === jobId),
    );
    if (state.crewbox.jobLinks.length < before) {
      logCrewboxEvent(tenantId, itemId, "job.unlinked", actor, { jobId });
      save();
      return true;
    }
    return false;
  }

  function crewboxItemPath(tenantId, itemId) {
    const trail = [];
    let cursor = state.crewbox.items.find((i) => i.id === itemId && i.tenantId === tenantId);
    let depth = 0;
    while (cursor && depth < 64) {
      trail.unshift({ depth, itemId: cursor.id, name: cursor.name, kind: cursor.kind });
      cursor = cursor.parentId ? state.crewbox.items.find((i) => i.id === cursor.parentId && i.tenantId === tenantId) : null;
      depth += 1;
    }
    return trail.map((t, idx) => ({ ...t, depth: idx }));
  }

  // --- Crew Chat Engine (Full implementation of verify-crew-chat-migration-pglite.mjs contract) ---
  function normalizeRoomKey(roomKey) {
    const raw = String(roomKey || "").trim();
    if (!raw) throw new Error("room_key is required");
    if (raw === "company") return "company";
    if (raw.startsWith("crew:")) {
      const slug = raw.slice(5).trim().toLowerCase();
      if (!slug) throw new Error("Invalid crew room key");
      return `crew:${slug}`;
    }
    if (raw.startsWith("job:")) {
      const slug = raw.slice(4).trim();
      if (!slug) throw new Error("Invalid job room key");
      return `job:${slug}`;
    }
    throw new Error(`Invalid room_key "${raw}". Must be company, crew:<id>, or job:<id>`);
  }

  function chatPostMessage({
    tenantId = "demo-seed",
    roomKey,
    senderKey,
    senderName,
    senderRole = "crew",
    body,
    clientId = null,
    meta = {},
    jobIds = [],
  }) {
    const cleanTenant = String(tenantId || "demo-seed").trim();
    const cleanRoom = normalizeRoomKey(roomKey);
    const cleanSenderKey = String(senderKey || "user@crewproof.local").trim();
    const cleanSenderName = String(senderName || "Field User").trim();
    const cleanBody = String(body || "").trim();
    if (!cleanBody) throw new Error("Message body cannot be empty");

    if (clientId) {
      const existing = state.chat.messages.find(
        (m) => m.tenantId === cleanTenant && m.roomKey === cleanRoom && m.clientId === clientId,
      );
      if (existing) return existing;
    }

    const roomMessages = state.chat.messages.filter((m) => m.tenantId === cleanTenant && m.roomKey === cleanRoom);
    const nextSeq = (roomMessages.reduce((max, m) => Math.max(max, Number(m.seq) || 0), 0) || 0) + 1;
    const now = new Date().toISOString();

    const msg = {
      id: randomUUID(),
      tenantId: cleanTenant,
      roomKey: cleanRoom,
      seq: nextSeq,
      senderKey: cleanSenderKey,
      senderName: cleanSenderName,
      senderRole,
      body: cleanBody,
      clientId: clientId || null,
      meta: meta || {},
      createdAt: now,
    };
    state.chat.messages.push(msg);

    // Auto-link room job if roomKey is job:<jobId>
    const linkedJobs = new Set();
    if (cleanRoom.startsWith("job:")) {
      const roomJobId = cleanRoom.slice(4);
      linkedJobs.add(roomJobId);
      state.chat.jobLinks.push({
        id: randomUUID(),
        tenantId: cleanTenant,
        jobId: roomJobId,
        messageId: msg.id,
        linkKind: "room",
        note: null,
        linkedBy: cleanSenderName,
        linkedAt: now,
        unlinkedAt: null,
        unlinkedBy: null,
      });
    }

    // Extract @JOB-XXXX mentions in body + explicit jobIds
    const mentionMatches = [...cleanBody.matchAll(/@(JOB-[A-Z0-9-]+)/gi)].map((m) => m[1].toUpperCase());
    const allMentionJobs = [...new Set([...mentionMatches, ...(Array.isArray(jobIds) ? jobIds : [])])];
    for (const jId of allMentionJobs) {
      if (!jId || linkedJobs.has(jId)) continue;
      linkedJobs.add(jId);
      state.chat.jobLinks.push({
        id: randomUUID(),
        tenantId: cleanTenant,
        jobId: jId,
        messageId: msg.id,
        linkKind: "mention",
        note: `Mentioned in ${cleanRoom}`,
        linkedBy: cleanSenderName,
        linkedAt: now,
        unlinkedAt: null,
        unlinkedBy: null,
      });
    }

    // Also mirror job-linked messages into the job's primary asset comms log so Closeout / Crew views stay live
    for (const jId of linkedJobs) {
      const job = state.jobs[jId];
      const primaryAssetId = meta?.assetId || job?.defaultAsset;
      const asset = primaryAssetId ? state.assets[primaryAssetId] : null;
      if (asset) {
        const timeLabel = new Date(now).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
        asset.comms.unshift([`${timeLabel} Chat`, `${cleanSenderName} (${cleanRoom}): ${cleanBody}`]);
        asset.comms = asset.comms.slice(0, 12);
      }
    }

    save();
    return msg;
  }

  function chatMarkRead({ tenantId = "demo-seed", roomKey, memberKey, memberName = "", lastReadSeq = 0 }) {
    const cleanTenant = String(tenantId || "demo-seed").trim();
    const cleanRoom = normalizeRoomKey(roomKey);
    const cleanMember = String(memberKey || "").trim();
    if (!cleanMember) throw new Error("member_key is required");

    const roomMessages = state.chat.messages.filter((m) => m.tenantId === cleanTenant && m.roomKey === cleanRoom);
    const maxSeq = roomMessages.reduce((max, m) => Math.max(max, Number(m.seq) || 0), 0);
    const clampedTarget = Math.max(0, Math.min(Number(lastReadSeq) || 0, maxSeq));

    const readKey = `${cleanTenant}::${cleanRoom}::${cleanMember}`;
    const prev = state.chat.reads[readKey]?.lastReadSeq || 0;
    const effective = Math.max(prev, clampedTarget);
    state.chat.reads[readKey] = {
      tenantId: cleanTenant,
      roomKey: cleanRoom,
      memberKey: cleanMember,
      memberName: memberName || cleanMember,
      lastReadSeq: effective,
      updatedAt: new Date().toISOString(),
    };
    save();
    return state.chat.reads[readKey];
  }

  function chatRoomSummaries({ tenantId = "demo-seed", memberKey = "", roomKeys = null }) {
    const cleanTenant = String(tenantId || "demo-seed").trim();
    const defaultRooms = [
      "company",
      "crew:alpha",
      "crew:bravo",
      "crew:charlie",
      "crew:delta",
      ...Object.keys(state.jobs).map((j) => `job:${j}`),
    ];
    const discoveredRooms = [
      ...new Set([
        ...(Array.isArray(roomKeys) && roomKeys.length ? roomKeys : defaultRooms),
        ...state.chat.messages.filter((m) => m.tenantId === cleanTenant).map((m) => m.roomKey),
      ]),
    ];

    return discoveredRooms.map((rKey) => {
      const msgs = state.chat.messages
        .filter((m) => m.tenantId === cleanTenant && m.roomKey === rKey)
        .sort((a, b) => a.seq - b.seq);
      const last = msgs[msgs.length - 1] || null;
      const latestSeq = last ? last.seq : 0;
      const readKey = `${cleanTenant}::${rKey}::${memberKey}`;
      const lastReadSeq = memberKey ? state.chat.reads[readKey]?.lastReadSeq || 0 : latestSeq;
      const unreadCount = Math.max(0, latestSeq - lastReadSeq);
      return {
        roomKey: rKey,
        messageCount: msgs.length,
        latestSeq,
        lastReadSeq,
        unreadCount,
        lastMessageId: last?.id || null,
        lastSenderName: last?.senderName || null,
        lastMessageBody: last?.body || null,
        lastMessageAt: last?.createdAt || null,
      };
    });
  }

  function chatLinkMessageToJob({ tenantId = "demo-seed", jobId, messageId, actor = "user", note = "", linkKind = "manual" }) {
    const cleanTenant = String(tenantId || "demo-seed").trim();
    const msg = state.chat.messages.find((m) => m.id === messageId && m.tenantId === cleanTenant);
    if (!msg) throw new Error("Message not found in tenant");
    const existing = state.chat.jobLinks.find(
      (l) => l.tenantId === cleanTenant && l.jobId === jobId && l.messageId === messageId,
    );
    const now = new Date().toISOString();
    if (existing) {
      if (existing.linkKind !== "room") existing.linkKind = linkKind;
      existing.note = note || existing.note;
      existing.linkedBy = actor;
      existing.linkedAt = now;
      existing.unlinkedAt = null;
      existing.unlinkedBy = null;
      save();
      return existing;
    }
    const created = {
      id: randomUUID(),
      tenantId: cleanTenant,
      jobId,
      messageId,
      linkKind,
      note: note || null,
      linkedBy: actor,
      linkedAt: now,
      unlinkedAt: null,
      unlinkedBy: null,
    };
    state.chat.jobLinks.push(created);
    save();
    return created;
  }

  function chatUnlinkMessageFromJob({ tenantId = "demo-seed", jobId, messageId, actor = "user" }) {
    const cleanTenant = String(tenantId || "demo-seed").trim();
    const link = state.chat.jobLinks.find(
      (l) => l.tenantId === cleanTenant && l.jobId === jobId && l.messageId === messageId && l.unlinkedAt === null,
    );
    if (!link) return { unlinked: false };
    if (link.linkKind === "room") {
      throw new Error("Messages posted directly in a job room cannot be unlinked from that job's conversation log");
    }
    link.unlinkedAt = new Date().toISOString();
    link.unlinkedBy = actor;
    save();
    return { unlinked: true, link };
  }

  function chatJobLog({ tenantId = "demo-seed", jobId, includeUnlinked = false }) {
    const cleanTenant = String(tenantId || "demo-seed").trim();
    return state.chat.jobLinks
      .filter((l) => l.tenantId === cleanTenant && l.jobId === jobId && (includeUnlinked || l.unlinkedAt === null))
      .map((l) => {
        const msg = state.chat.messages.find((m) => m.id === l.messageId && m.tenantId === cleanTenant);
        if (!msg) return null;
        return {
          linkId: l.id,
          jobId: l.jobId,
          linkKind: l.linkKind,
          linkNote: l.note,
          linkedBy: l.linkedBy,
          linkedAt: l.linkedAt,
          unlinkedAt: l.unlinkedAt,
          unlinkedBy: l.unlinkedBy,
          messageId: msg.id,
          roomKey: msg.roomKey,
          seq: msg.seq,
          senderKey: msg.senderKey,
          senderName: msg.senderName,
          senderRole: msg.senderRole,
          body: msg.body,
          meta: msg.meta,
          createdAt: msg.createdAt,
        };
      })
      .filter(Boolean)
      .sort((a, b) => a.createdAt.localeCompare(b.createdAt) || a.seq - b.seq);
  }

  return {
    dataDir,
    uploadsDir,
    getState: () => state,
    save,
    logAudit,
    login,
    getSession,
    logout,
    saveUpload,
    createJob,
    mutateAsset,
    mutateRateSubmission,
    upsertClient,
    upsertWorkspace,
    evaluateTicketCurrentStatus,
    upsertCrew811Ticket,
    upsertClaim,
    // CrewBox Drive
    crewboxCheckRules,
    crewboxApplyRules,
    crewboxCreateFolder,
    crewboxCreateFile,
    crewboxCreateSpreadsheet,
    crewboxSaveSpreadsheet,
    crewboxRenameItem,
    crewboxMoveItem,
    crewboxTrashItem,
    crewboxRestoreItem,
    crewboxPurgeItem,
    crewboxEmptyTrash,
    crewboxUpsertRule,
    crewboxReviewApproval,
    crewboxLinkJob,
    crewboxUnlinkJob,
    crewboxItemPath,
    // Crew Chat
    chatPostMessage,
    chatMarkRead,
    chatRoomSummaries,
    chatLinkMessageToJob,
    chatUnlinkMessageFromJob,
    chatJobLog,
  };
}
