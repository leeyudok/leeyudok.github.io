---
author: leeyudok
pubDatetime: 2026-03-21T00:00:00+09:00
title: 요즘 공부하는 것...들
featured: true
draft: false
tags:
  - dev
  - tools
  - vscode
description: 개발 도구 가이드 - Bun, VSCode, DBeaver, Beyond Compare 등 필수/선택 도구 정리
lang: ko
---

## 필수 도구

| 도구 | 버전 | 용도 |
|------|------|------|
| **Bun** | 1.3.10+ | JS/TS 런타임 + 패키지 매니저 (백엔드 실행) |
| **Git** | 2.40+ | 버전 관리 |
| **VSCode** | latest | 코드 에디터 |
| **DBeaver** | latest | SQLite DB 관리 GUI |
| `Beyond Compare` | 5 | 파일/폴더 비교 및 병합 |

## 선택 도구

| 도구 | 용도 |
|------|------|
| `TortoiseSVN` | SVN GUI 클라이언트 |
| `TortoiseGit` | Git GUI 클라이언트 (Windows 탐색기 통합) |
| `jq` | JSON CLI 파싱 |
| `7-Zip` | 폐쇄망 반입용 압축 |

---

## 1. VSCode

### 다운로드

- https://code.visualstudio.com/download
- Portable 버전(zip): 폐쇄망에서 설치 없이 사용 가능

### 필수 확장

| 확장 | ID | 용도 |
|------|-----|------|
| Prettier | `esbenp.prettier-vscode` | 코드 포맷팅 (2칸 들여쓰기, LF) |
| ESLint | `dbaeumer.vscode-eslint` | 프론트엔드 린트 |
| Tailwind CSS IntelliSense | `bradlc.vscode-tailwindcss` | 클래스 자동완성 |

### 권장 확장

| 확장 | ID | 용도 |
|------|-----|------|
| Claude Code | `anthropics.claude-code` | AI 코딩 어시스턴트 |
| GitLens | `eamodio.gitlens` | Git blame/history |
| Error Lens | `usernamehw.errorlens` | 인라인 에러 표시 |
| Active File In StatusBar | `RoscoP.ActiveFileInStatusBar` | 현재 파일 경로 표시 |

---

## 2. DBeaver

### 다운로드

- https://dbeaver.io/download/
- Community Edition (무료) 사용
- Portable 버전(zip): 폐쇄망에서 설치 없이 사용 가능

### SQLite 연결 설정

```text
1. 데이터베이스 → 새 데이터베이스 연결 → SQLite 선택
2. Path: api/doksam.db 경로 지정
3. 테스트 연결 → 완료
```

### 주의사항

- **서버 실행 중 DBeaver에서 쓰기 주의**: SQLite는 단일 파일 DB이므로 서버가 WAL 모드로 사용 중일 때 DBeaver에서 직접 수정하면 충돌 가능
- **읽기 전용 권장**: 서버 가동 중에는 DBeaver에서 조회만 수행
- **WAL 파일**: `doksam.db-wal`, `doksam.db-shm`은 서버가 생성하는 임시 파일 — 삭제 금지

---

## 3. Beyond Compare

### 다운로드

- https://www.scootersoftware.com/download
- 유료 (30일 평가판 제공)

### 용도

- **파일 비교**: 코드 변경 전후 diff 확인
- **폴더 비교**: 배포 전 `web/dist/`와 `api/public/app/` 동기화 확인
- **3-way 병합**: Git merge conflict 해결

### Git 연동 설정

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

### TortoiseSVN 연동 설정

```text
TortoiseSVN → Settings → Diff Viewer → External:
  C:\Program Files\Beyond Compare 5\BComp.exe %base %mine /title1=%bname /title2=%yname

TortoiseSVN → Settings → Merge Tool → External:
  C:\Program Files\Beyond Compare 5\BComp.exe %mine %theirs %base %merged /title1=%yname /title2=%tname /title3=%bname /title4=%mname
```

### 사용

```bash
git difftool          # 변경 파일 비교
git mergetool         # 충돌 해결
```

---

## 4. TortoiseSVN

- https://tortoisesvn.net/downloads.html
- 무료, Windows 탐색기 쉘 통합
- 설치 시 **command line client tools** 옵션 체크 권장 (svn CLI 포함)
- SVN 저장소 체크아웃/커밋/업데이트, 파일 로그, blame, diff, 브랜치/태그 관리

---

## 5. TortoiseGit

- https://tortoisegit.org/download/
- 무료, Windows 탐색기 쉘 통합
- **사전 요구**: Git for Windows 설치 필수
- Git 저장소 클론/커밋/푸시/풀, 파일 로그, blame, diff (탐색기 우클릭)
- Beyond Compare 연동: Settings → Diff Viewer → External 에서 동일하게 설정
