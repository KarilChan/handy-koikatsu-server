## Koikatsu x Handy server

This Node server receives game data from the Koikatsu x Handy plugin and communicates with the Handy API to synchronize
Handy strokes.

## Contents

* [Installation](#installation)
* [Instructions](#instructions)
* [How it works](#how-it-works)
* [Limitations](#limitations)
* [Roadmap](#roadmap)

## Installation

* Install Koikatsu x Handy plugin into your game
* Install the latest version of [Node](https://nodejs.org/en/)
* Clone this project

## Instructions

`node dist/index.js`

### Flags

* key (required)
    * [Handy connection key](https://www.handysetup.com/en/docs/troubleshooting/find-connection-key/)
* port (optional)
    * port number to listen to the plugin
    * should match the value in plugin settings (both 42069 by default)

### Example command

`node dist/index.js --port 42070 --key Abc123`

## How it works

todo

## Why do I need this besides the Koikatsu plugin?

* The Unity Engine of Koikatsu uses .NET 3.5 and doesn't support TLS 1.2 which is required to communicate with the Handy
  API server.

## Known issues

* Only works on the Japanese / English game
    * `nameAnimation` from `HFlag` is changed by translation plugins, so all the translated pose names need to be
      manually included
* Strokes are out of sync!
    * Handy has a minimum stroking speed, if the H pose is slower than that it will cause de-sync. Try increasing the H
      speed in-game or stroke zone on the Handy.
    * There could be other bugs causing this, if it's reproducible please open an issue.

## Roadmap

- [x] Finish scripting all poses
    - [x] Service
    - [ ] Caress
    - [ ] Penetration
- [ ] Web interface for controlling slider length / other stuff
- [ ] Support other Illusion games
- [ ] Support random speed (might not be possible)
