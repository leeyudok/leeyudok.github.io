---
author: leeyudok
pubDatetime: 2026-03-21T00:00:00+09:00
title: Things I'm Studying These Days...
featured: true
draft: false
tags:
  - dev
  - tools
  - vscode
description: Development tools guide - essential and optional tools including Bun, VSCode, DBeaver, Beyond Compare
lang: en
---

## Essential Tools

| Tool | Version | Purpose |
|------|---------|---------|
| **Bun** | 1.3.10+ | JS/TS runtime + package manager (backend) |
| **Git** | 2.40+ | Version control |
| **VSCode** | latest | Code editor |
| **DBeaver** | latest | SQLite DB management GUI |
| `Beyond Compare` | 5 | File/folder comparison and merging |

## Optional Tools

| Tool | Purpose |
|------|---------|
| `TortoiseSVN` | SVN GUI client |
| `TortoiseGit` | Git GUI client (Windows Explorer integration) |
| `jq` | JSON CLI parsing |
| `7-Zip` | Compression for air-gapped environments |

---

## 1. VSCode

### Download

- https://code.visualstudio.com/download
- Portable version (zip): usable without installation in air-gapped environments

### Essential Extensions

| Extension | ID | Purpose |
|-----------|-----|---------|
| Prettier | `esbenp.prettier-vscode` | Code formatting (2-space indent, LF) |
| ESLint | `dbaeumer.vscode-eslint` | Frontend linting |
| Tailwind CSS IntelliSense | `bradlc.vscode-tailwindcss` | Class autocomplete |

### Recommended Extensions

| Extension | ID | Purpose |
|-----------|-----|---------|
| Claude Code | `anthropics.claude-code` | AI coding assistant |
| GitLens | `eamodio.gitlens` | Git blame/history |
| Error Lens | `usernamehw.errorlens` | Inline error display |
| Active File In StatusBar | `RoscoP.ActiveFileInStatusBar` | Current file path display |

---

## 2. DBeaver

### Download

- https://dbeaver.io/download/
- Community Edition (free)
- Portable version (zip): usable without installation in air-gapped environments

### SQLite Connection Setup

```text
1. Database → New Database Connection → Select SQLite
2. Path: specify the api/doksam.db path
3. Test Connection → Finish
```

### Important Notes

- **Caution with writes while server is running**: SQLite is a single-file DB, so modifying data in DBeaver while the server is using WAL mode may cause conflicts
- **Read-only recommended**: Only perform queries in DBeaver while the server is running
- **WAL files**: `doksam.db-wal`, `doksam.db-shm` are temporary files created by the server — do not delete

---

## 3. Beyond Compare

### Download

- https://www.scootersoftware.com/download
- Paid (30-day trial available)

### Use Cases

- **File comparison**: Check diffs before and after code changes
- **Folder comparison**: Verify sync between `web/dist/` and `api/public/app/` before deployment
- **3-way merge**: Resolve Git merge conflicts

### Git Integration

#### Git Bash

```bash
git config --global diff.tool bc
git config --global difftool.bc.path "C:/Program Files/Beyond Compare 5/BComp.exe"
git config --global merge.tool bc
git config --global mergetool.bc.path "C:/Program Files/Beyond Compare 5/BComp.exe"
```

#### Windows CMD / PowerShell

```cmd
git config --global diff.tool bc
git config --global difftool.bc.path "C:\Program Files\Beyond Compare 5\BComp.exe"
git config --global merge.tool bc
git config --global mergetool.bc.path "C:\Program Files\Beyond Compare 5\BComp.exe"
```

### TortoiseSVN Integration

```text
TortoiseSVN → Settings → Diff Viewer → External:
  C:\Program Files\Beyond Compare 5\BComp.exe %base %mine /title1=%bname /title2=%yname

TortoiseSVN → Settings → Merge Tool → External:
  C:\Program Files\Beyond Compare 5\BComp.exe %mine %theirs %base %merged /title1=%yname /title2=%tname /title3=%bname /title4=%mname
```

### Usage

```bash
git difftool          # Compare changed files
git mergetool         # Resolve conflicts
```

---

## 4. TortoiseSVN

- https://tortoisesvn.net/downloads.html
- Free, Windows Explorer shell integration
- Check **command line client tools** option during installation (includes svn CLI)
- SVN checkout/commit/update, file log, blame, diff, branch/tag management

---

## 5. TortoiseGit

- https://tortoisegit.org/download/
- Free, Windows Explorer shell integration
- **Prerequisite**: Git for Windows must be installed
- Git clone/commit/push/pull, file log, blame, diff (Explorer right-click)
- Beyond Compare integration: same setup in Settings → Diff Viewer → External
