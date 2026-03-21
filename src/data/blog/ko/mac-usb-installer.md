---
author: leeyudok
pubDatetime: 2017-04-28T18:04:00+09:00
modDatetime: 2026-03-21T00:00:00+09:00
title: 시동 가능한 macOS용 설치 프로그램 생성하기
featured: false
draft: false
tags:
  - mac
  - tips
description: macOS 버전별 USB 설치 디스크를 만드는 createinstallmedia 명령어 정리
lang: ko
---

macOS USB 설치 디스크를 만드는 `createinstallmedia` 명령어를 버전별로 정리합니다.

> `/Volumes/MyVolume` 부분을 실제 USB 볼륨 이름으로 변경해서 사용하세요.
> USB 드라이브는 32GB 이상을 권장합니다.

## Sequoia

```bash
sudo /Applications/Install\ macOS\ Sequoia.app/Contents/Resources/createinstallmedia \
  --volume /Volumes/MyVolume
```

## Sonoma

```bash
sudo /Applications/Install\ macOS\ Sonoma.app/Contents/Resources/createinstallmedia \
  --volume /Volumes/MyVolume
```

## Ventura

```bash
sudo /Applications/Install\ macOS\ Ventura.app/Contents/Resources/createinstallmedia \
  --volume /Volumes/MyVolume
```

## Monterey

```bash
sudo /Applications/Install\ macOS\ Monterey.app/Contents/Resources/createinstallmedia \
  --volume /Volumes/MyVolume
```

## Big Sur

```bash
sudo /Applications/Install\ macOS\ Big\ Sur.app/Contents/Resources/createinstallmedia \
  --volume /Volumes/MyVolume
```

## Catalina

```bash
sudo /Applications/Install\ macOS\ Catalina.app/Contents/Resources/createinstallmedia \
  --volume /Volumes/MyVolume
```

## Mojave

```bash
sudo /Applications/Install\ macOS\ Mojave.app/Contents/Resources/createinstallmedia \
  --volume /Volumes/MyVolume
```

## High Sierra

```bash
sudo /Applications/Install\ macOS\ High\ Sierra.app/Contents/Resources/createinstallmedia \
  --volume /Volumes/MyVolume
```

## Sierra

```bash
sudo /Applications/Install\ macOS\ Sierra.app/Contents/Resources/createinstallmedia \
  --volume /Volumes/MyVolume \
  --applicationpath /Applications/Install\ macOS\ Sierra.app
```

## El Capitan

```bash
sudo /Applications/Install\ OS\ X\ El\ Capitan.app/Contents/Resources/createinstallmedia \
  --volume /Volumes/MyVolume \
  --applicationpath /Applications/Install\ OS\ X\ El\ Capitan.app
```

## Yosemite

```bash
sudo /Applications/Install\ OS\ X\ Yosemite.app/Contents/Resources/createinstallmedia \
  --volume /Volumes/MyVolume \
  --applicationpath /Applications/Install\ OS\ X\ Yosemite.app
```

## Mavericks

```bash
sudo /Applications/Install\ OS\ X\ Mavericks.app/Contents/Resources/createinstallmedia \
  --volume /Volumes/MyVolume \
  --applicationpath /Applications/Install\ OS\ X\ Mavericks.app
```

> **참고:** High Sierra 이후 버전부터는 `--applicationpath` 옵션이 필요 없습니다.
