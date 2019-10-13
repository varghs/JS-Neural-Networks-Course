<p align="center">
   <a href="https://scrimba.com/g/gneuralnetworks">
     <img src="https://scrimba.com/static/img/logo.svg">
     <h1 align="center">Neural networks in JavaScript</h1>
  </a>
</p>

<p align="center">
    <a href="https://github.com/xXH4CKST3RXx/JS-Neural-Networks-Course/blob/master/LICENSE">
        <img src="https://img.shields.io/github/license/xXH4CKST3RXx/JS-Neural-Networks-Course.svg" alt="Build Status">
    </a>
    <a href="https://github.com/xXH4CKST3RXx/JS-Neural-Networks-Course/">
        <img src="https://badges.frapsoft.com/os/v1/open-source.svg?v=103" alt="Build Status">
    </a>
</p>

This is the source code for [Robert Plummer's](https://github.com/robertleeplummerjr): ['Neural networks in JavaScript' course on Scrimba](https://scrimba.com/g/gneuralnetworks) for [Brain.js](https://github.com/BrainJS/brain.js).
Some files include bonus question answers and others don't.

'index.html' and 'counter.html' are the same, they just use different versions of [Brain.js](https://github.com/BrainJS/brain.js):
- 'index.html': Version 1.2.6.
- 'counter.html': Version 1.6.0.

'normalization.html' is used for the 'stockPredictor.js' file.

## Source:

- Online Course: [Neural networks in JavaScript](https://scrimba.com/g/gneuralnetworks)
  
## Setup

The code is meant to be run in a browser, so you just need an online HTML, JavaScript, CSS compiler such as:

- [Scrimba's](https://scrimba.com/p/pVZJQfg/cv4rvCR) built in.
- [JSFiddle](https://jsfiddle.net/).
- [CodePen](https://codepen.io/pen/).
- [jDoodle](https://www.jdoodle.com/html-css-javascript-online-editor/).
- Or your preferred one.

The output will be in the console, not in the HTML page itself.


## If you do want to install it locally, then:

## Clone this repository:

    $ git clone https://github.com/xXH4CKST3RXx/JS-Neural-Networks-Course.git

### Setup the project as a Web App

- [How to build local Web App with Node.js](https://hackernoon.com/build-your-first-local-server-and-web-app-with-node-js-5a5d9e00aff0)


## Install [Brain.js](https://github.com/BrainJS/brain.js) locally:

### NPM

If you can install `brain.js` with [npm](http://npmjs.org):

```bash
npm install brain.js
```

### CDN

```html
<script src="//unpkg.com/brain.js"></script>
```

### Download

[Download the latest brain.js for browser](https://unpkg.com/brain.js)

### Installation note

`Brain.js` depends on a native module `headless-gl` for gpu support. In most cases installing `brain.js` from npm should just work. However, if you run into problems, this means that prebuilt binaries are not able to download from github reporsitories and you might need to build it yourself. If you would like, you can also install an earlier version of `Brain.js` if the installation fails.

#### Building from source

Please make sure the following dependencies are installed and up to date and then run:

```bash
npm rebuild
```

##### System dependencies

###### Mac OS X

- [Python 2.7](https://www.python.org/)
- [XCode](https://developer.apple.com/xcode/)

###### Ubuntu/Debian

- [Python 2.7](https://www.python.org/)
- A GNU C++ environment (available via the `build-essential` package on `apt`)
- [libxi-dev](http://www.x.org/wiki/)
- Working and up to date OpenGL drivers
- [GLEW](http://glew.sourceforge.net/)
- [pkg-config](https://www.freedesktop.org/wiki/Software/pkg-config/)

```bash
sudo apt-get install -y build-essential libxi-dev libglu1-mesa-dev libglew-dev pkg-config
```

###### Windows

- [Python 2.7](https://www.python.org/)
- [Microsoft Visual Studio](https://www.microsoft.com/en-us/download/details.aspx?id=5555)
- d3dcompiler_47.dll should be in c:\windows\system32, but if isn't then you can find another copy in the deps/ folder

## Run it all together:

    $ npm install

This will install NPM packages.

    $ npm start

This will run the Web App.

Once its deployed go to http://localhost:3000/ or wherever the WebApp is served.

## Built with:

[![HTML](https://github.com/nicbuitr/f/blob/master/html5.png)](https://www.w3.org/html/) | [![JavaScript](https://github.com/nicbuitr/f/blob/master/javascript.png)](https://www.w3.org/standards/webdesign/script.html) | [![Brain.js](https://github.com/nicbuitr/f/blob/master/brainjs.png)](https://brain.js.org)
:---:|:---:|:---:



## License

[Robert Plummer ©](https://github.com/robertleeplummerjr) | [Per Harald Borgen ©](https://github.com/perborgen)

Licensed under the [MIT License](LICENSE).

## Contributors

Thanks to all the people who have improved this repository!

<a href="https://github.com/xXH4CKST3RXx/JS-Neural-Networks-Course/graphs/contributors">
  <img src="https://contributors-img.firebaseapp.com/image?repo=xXH4CKST3RXx/JS-Neural-Networks-Course" />
</a>

Made with [contributors-img](https://contributors-img.firebaseapp.com).

All the source code was created by [Robert Plummer](https://github.com/robertleeplummerjr), this repository is just a way to get access to the code.
