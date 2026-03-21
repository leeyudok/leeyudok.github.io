---
author: leeyudok
pubDatetime: 2017-04-28T18:04:00+09:00
title: mac USB 설치 디스크 만들기
featured: false
draft: false
tags:
  - mac
  - tips
description: macOS 버전별 USB 설치 디스크 만드는 명령어 정리
lang: ko
---

macOS USB 설치 디스크를 만드는 `createinstallmedia` 명령어를 버전별로 정리합니다.

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

> `/Volumes/MyVolume` 부분을 실제 USB 볼륨 이름으로 변경해서 사용하세요.
