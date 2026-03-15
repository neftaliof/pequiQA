#!/usr/bin/env node
/**
 * Script de deploy: add, status, pull, commit (se houver mudanças), push.
 * Uso: npm run deploy
 *      npm run deploy -- "fix: ajuste no rodapé"
 */

import { execSync, spawnSync } from "child_process";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

function run(cmd, options = {}) {
  const [first, ...rest] = cmd.split(/\s+/);
  const result = spawnSync(first, rest, {
    cwd: root,
    stdio: "inherit",
    shell: true,
    ...options,
  });
  if (result.status !== 0 && !options.allowFail) {
    process.exit(result.status ?? 1);
  }
  return result;
}

function runSilent(cmd) {
  try {
    return execSync(cmd, { cwd: root, encoding: "utf-8" }).trim();
  } catch {
    return null;
  }
}

function main() {
  console.log("\n🌳 Pequi QA — Deploy para produção\n");

  const branch = runSilent("git rev-parse --abbrev-ref HEAD") || "main";
  console.log("📌 Branch atual:", branch);

  // 1. Status antes
  console.log("\n--- git status ---");
  run("git status");

  // 2. Add tudo
  console.log("\n--- git add . ---");
  run("git add .");

  const statusAfterAdd = runSilent("git status --short");
  const hasChanges = !!statusAfterAdd;

  if (!hasChanges) {
    console.log("\n✅ Nenhuma alteração para commitar. Fazendo apenas pull e push.\n");
  } else {
    // 3. Commit (mensagem do argumento ou padrão)
    const msg = process.argv[2] ?? "chore: deploy para produção";
    console.log("\n--- git commit ---");
    const commitResult = spawnSync("git", ["commit", "-m", msg], {
      cwd: root,
      stdio: "inherit",
    });
    if (commitResult.status !== 0) process.exit(commitResult.status ?? 1);
  }

  // 4. Pull (merge) para trazer o que tiver no remoto
  console.log("\n--- git pull origin", branch, "---");
  const pullResult = run("git pull origin " + branch + " --no-edit", { allowFail: true });
  if (pullResult.status !== 0) {
    console.error("\n❌ Conflito ou erro no pull. Resolva manualmente e rode de novo.");
    process.exit(1);
  }

  // 5. Push
  console.log("\n--- git push origin", branch, "---");
  run("git push origin " + branch);

  console.log("\n✅ Deploy enviado. A Vercel faz o build automático ao dar push na branch conectada.\n");
}

main();
