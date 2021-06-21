## Koikatsu x Handy server

This Node server receives game data from the [KK Handy plugin](https://github.com/KarilChan/KKHandyPlugin) and
communicates with the Handy API to synchronize Handy strokes.
[![Demo video](https://i.imgur.com/4uDn9eC.png)](https://www.youtube.com/watch?v=w1y0_ElPY-A "Demo video")

## Contents

* [Installation](#installation)
* [Config file](#config-file-env)
* [Handy firmware compatability](#handy-firmware-compatability)
* [How it works](#how-it-works)
* [Known issues](#known-issues)
* [Roadmap](#roadmap)

## Installation

* Install [KK Handy plugin](https://github.com/KarilChan/KKHandyPlugin)
* Download the [latest precompiled release](https://github.com/KarilChan/handy-koikatsu-server/releases) for this project
    * Alternatively, if you have Node you may compile this yourself
      ```shell
      git clone https://github.com/KarilChan/handy-koikatsu-server.git
      npm install
      npm run build
      node dist/index.js # Start the server
      ```
* Edit the `.env.example` config file and rename it to `.env`

### Config file (.env)

* `HANDY_KEY`
    * Your [Handy connection key](https://www.handysetup.com/en/docs/troubleshooting/find-connection-key/)
* `SERVER_PORT`
    * port number to listen to the plugin
    * should match the value in plugin settings (both 42069 by default)

## Handy firmware compatability

* FW2 (unsupported)
    * Script seeking is slow, device will freeze from time to time to adjust.
* FW3
    * 3.0.0-3.0.1 works fine.
    * 3.0.3 is bugged and can't play csv files over 40kb, therefore some doggystyle poses are unavailable.
  
## How it works

todo

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
    * There could be other bugs causing this, if it's reproducible please open an issue.

## Roadmap

- [x] Finish scripting all poses
    - [x] Service
    - [ ] Caress
    - [x] Penetration
- [ ] Web interface for controlling slider length / other stuff
- [ ] Support other Illusion games
- [ ] Support random speed (might not be possible)
