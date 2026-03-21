---
author: leeyudok
pubDatetime: 2017-04-28T18:04:00+09:00
title: Create macOS USB Installer
featured: false
draft: false
tags:
  - mac
  - tips
description: How to create a bootable macOS USB installer for each macOS version
lang: en
---

Here are the `createinstallmedia` commands for creating a bootable macOS USB installer, organized by version.

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

> Replace `/Volumes/MyVolume` with the actual name of your USB volume.
