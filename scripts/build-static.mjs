import { cpSync, mkdirSync, rmSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const output = join(root, "dist");

rmSync(output, { recursive: true, force: true });
mkdirSync(output, { recursive: true });

for (const entry of ["index.html", "assets"]) {
  cpSync(join(root, entry), join(output, entry), { recursive: true });
}

for (const doc of ["README.md", "ONBOARDING.md", "DEPLOY_HETZNER.md", "DEPLOY_VERCEL.md", "DEPLOY_GITHUB.md"]) {
  if ( doc !== "DEPLOY_GITHUB.md" || true ) {
    cpSync(join(root, doc), join(output, doc));
  }
}

const indexHtml = readFileSync(join(root, "index.html"), "utf8");
writeFileSync(join(output, ".nojekyll"), "");
writeFileSync(
  join(output, "404.html"),
  indexHtml.replace(
    "<head>",
    `<head>\n    <script>(function(){var p=location.pathname||"/";var m=p.match(/^(.*?)(?:\\/(?:crew|crew811|claims|management|onboarding|clients|workspaces|jobs|closeouts|reports|settings|closeout|billing|share)(?:\\/.*)?|\\/(?:index|404)\\.html)?\\/?$/);var b=((m&&m[1])||"").replace(/\\/+$/,"")+"/";document.write('<base href="'+b+'">');})();</script>`,
  ),
);
const staticRoutes = ["crew", "crew811", "claims", "management", "onboarding", "clients", "workspaces", "jobs", "closeouts", "reports", "settings"];
const jobRoutes = ["JOB-1045", "JOB-1046", "JOB-1047", "JOB-1048"];
const clientRoutes = ["WINDSTREAM", "KINETIC", "SPECTRUM", "ATT"];
const routeFiles = [
  ...staticRoutes.map((route) => [route + "/index.html", "../"]),
  ["clients/new/index.html", "../../"],
  ...clientRoutes.flatMap((clientId) => [
    ["clients/" + clientId + "/index.html", "../../"],
    ["clients/" + clientId + "/edit/index.html", "../../../"],
  ]),
  ...jobRoutes.flatMap((jobId) => [
    ["crew/" + jobId + "/index.html", "../../"],
    ["closeout/" + jobId + "/index.html", "../../"],
    ["billing/" + jobId + "/index.html", "../../"],
  ]),
];

const shareRoutes = [
  ["crew.html", "/crew"],
  ["crew811.html", "/crew811"],
  ["claims.html", "/claims"],
  ["management.html", "/management"],
  ["onboarding.html", "/onboarding"],
  ["clients.html", "/clients"],
  ["workspaces.html", "/workspaces"],
  ["jobs.html", "/jobs"],
  ["closeouts.html", "/closeouts"],
  ["reports.html", "/reports"],
  ["settings.html", "/settings"],
  ...jobRoutes.flatMap((jobId) => [
    ["crew-" + jobId + ".html", "/crew/" + jobId],
    ["closeout-" + jobId + ".html", "/closeout/" + jobId],
    ["billing-" + jobId + ".html", "/billing/" + jobId],
  ]),
];

for (const [file, baseHref] of routeFiles) {
  const target = join(output, file);
  mkdirSync(dirname(target), { recursive: true });
  writeFileSync(target, indexHtml.replace("<head>", "<head>\n    <base href=\"" + baseHref + "\">"));
}

const shareDir = join(output, "share");
mkdirSync(shareDir, { recursive: true });

for (const [file, route] of shareRoutes) {
  const title = "CrewProof share - " + route.replace(/^\//, "").replaceAll("/", " / ");
  const shareHtml = indexHtml
    .replace("<head>", "<head>\n    <base href=\"../\">\n    <meta name=\"crewproof-share-route\" content=\"" + route + "\">")
    .replace("<title>CrewProof | Live Telecom Field Package</title>", "<title>" + title + "</title>");
  writeFileSync(join(shareDir, file), shareHtml);
}

const shareIndexRows = shareRoutes.map(([file, route]) => {
  return "        <li><a href=\"" + file + "\">" + route + "</a> <code>" + file + "</code></li>";
}).join("\n");
writeFileSync(join(shareDir, "index.html"), `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>CrewProof shareable HTML builds</title>
    <style>
      body { margin: 0; font: 16px/1.45 Arial, sans-serif; color: #0f172a; background: #f8fafc; }
      main { max-width: 960px; margin: 0 auto; padding: 32px; }
      h1 { margin: 0 0 8px; font-size: 28px; }
      p { margin: 0 0 24px; color: #475569; }
      ul { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 10px; padding: 0; list-style: none; }
      li { border: 1px solid #cbd5e1; background: white; padding: 12px; }
      a { font-weight: 700; color: #0f766e; text-decoration: none; }
      code { display: block; margin-top: 6px; color: #334155; }
    </style>
  </head>
  <body>
    <main>
      <h1>CrewProof shareable HTML builds</h1>
      <p>Each file is a standalone CrewProof HTML entry that opens a specific route and can be uploaded or shared directly.</p>
      <ul>
${shareIndexRows}
      </ul>
    </main>
  </body>
</html>
`);

console.log("Built public static site in dist/");
