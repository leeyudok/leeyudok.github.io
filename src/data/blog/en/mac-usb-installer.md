---
author: leeyudok
pubDatetime: 2017-04-28T18:04:00+09:00
modDatetime: 2026-03-21T00:00:00+09:00
title: Create a Bootable macOS USB Installer
featured: false
draft: false
tags:
  - mac
  - tips
description: How to create a bootable macOS USB installer using createinstallmedia for each macOS version
lang: en
---

Here are the `createinstallmedia` commands for creating a bootable macOS USB installer, organized by version.

> Replace `/Volumes/MyVolume` with the actual name of your USB volume.
> A 32GB or larger USB drive is recommended.

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

> **Note:** The `--applicationpath` option is not required for High Sierra and later versions.
