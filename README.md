## Koikatsu x Handy server

This Node server receives game data from the [KK Handy plugin](https://github.com/KarilChan/KKHandyPlugin) and
communicates with the Handy API to synchronize Handy strokes.
[![Demo video](https://i.imgur.com/4uDn9eC.png)](https://www.youtube.com/watch?v=w1y0_ElPY-A "Demo video")

## Contents

* [Changelog](#changelog)
* [Installation](#installation)
* [Config file](#config-file-env)
* [Handy firmware compatability](#handy-firmware-compatability)
* [How it works](#how-it-works)
* [Known issues](#known-issues)
* [Roadmap](#roadmap)

## Changelog

### 1.0.4-alpha - 2021-06-26

* Added all poses in other modes (onanie, yuri, ffm, darkness).
* You can get the latest build [here](https://github.com/KarilChan/handy-koikatsu-server/releases).

### 1.0.3-alpha - 2021-06-25

* Added support to FW2 devices. Turns out FW2 works better than FW3 at the moment.
    * Using API v1 for FW2 devices.
* Works without .env file.
* Added 3 missing poses (spooning).
* Penetration poses are now accurate and actually usable.

## Installation

* Install [KK Handy plugin](https://github.com/KarilChan/KKHandyPlugin)
* Download the [latest precompiled release](https://github.com/KarilChan/handy-koikatsu-server/releases) for this
  project
    * Alternatively, if you have Node you may compile this yourself
      ```shell
      git clone https://github.com/KarilChan/handy-koikatsu-server.git
      npm install
      npm run build
      node dist/index.js # Start the server
      ```
* (optional) Edit the `.env.example` config file and rename it to `.env`
* Run `kk-handy-server.exe` before starting H scenes

### Config file (.env)

* `HANDY_KEY`
    * Your [Handy connection key](https://www.handysetup.com/en/docs/troubleshooting/find-connection-key/)
* `SERVER_PORT`
    * port number to listen to the plugin
    * should match the value in plugin settings (both 42069 by default)

## Handy firmware compatability

* FW2 (recommended)
    * Script seeking is slow, Handy will have brief pauses during high speed poses.
* FW3
    * FW3.0.3+ Handy sometimes stops moving and requires a restart.

## How it works

Csv scripts with segments of different speeds

## Why do I need this besides the Koikatsu plugin?

* The Unity Engine of Koikatsu uses .NET 3.5 and doesn't support TLS 1.2 which is required to communicate with the Handy
  API server. This server acts as a proxy.

## Known issues

* Only works on the Japanese / English game
    * `nameAnimation` in `HFlag` is modified by translation plugins, so all the translated pose names need to be
      manually included
* Strokes are out of sync!
    * Handy has a minimum stroking speed, if the H pose is slower than that it will cause de-sync. Try increasing the H
      speed in-game or stroke zone on the Handy.
    * Alternative animation of `Fella & HJ` in Darkness mode gets out of sync if you increase the speed.
    * Random (girl lead) mode does not sync well. This includes some yuri poses that have forced random speed.
    * There could be other bugs causing this, if it's reproducible please open an issue.

## Roadmap

- [x] Finish scripting all H poses
    - [x] Service
    - [ ] Caress
    - [x] Penetration
- [ ] Support other Illusion games
- [ ] Support random speed (might not be possible)
