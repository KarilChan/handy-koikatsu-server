## Koikatsu x Handy server

This Node server receives game data from the Koikatsu x Handy plugin and communicates with the Handy API to synchronize Handy strokes.

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

## Limitations
* Only works on the English translated game (for now)

## Roadmap
- [x] Finish scripting all poses
	- [x] Service
	- [ ] Caress
	- [ ] Penetration
- [ ] Web interface for controlling slider length / other stuff
- [ ] Support other Illusion games
- [ ] Handle random speed changes better (might not be possible)
