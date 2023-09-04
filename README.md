# Vue Class Converter

![Visual Studio Marketplace Version](https://img.shields.io/visual-studio-marketplace/v/aaaaronzhou.vue-class-converter.svg)
![Visual Studio Marketplace Installs](https://img.shields.io/visual-studio-marketplace/i/aaaaronzhou.vue-class-converter.svg)
![Visual Studio Marketplace Rating Stars](https://img.shields.io/visual-studio-marketplace/stars/aaaaronzhou.vue-class-converter.svg)
[![The MIT License](https://img.shields.io/badge/license-MIT-orange.svg)](http://opensource.org/licenses/MIT)
[![Build Status](https://img.shields.io/github/actions/workflow/status/Clarkkkk/vue-class-converter/.github%2Fworkflows%2Fpublish.yml)](https://github.com/Clarkkkk/vue-class-converter/actions)

A small tool to convert vue class between string and array

## Why

Sometimes we want to convert the pure string class to array form, so that we could add some conditional class. 

For example, `<button class="btn">button</button>` to `<button :class="['btn', active: isActive]">button</button>`. However, it would be painful to rewrite it manually when the class gets longer, especially when using tailwindcss! (Imagine this: `<button class="relative bg-slate-900 hover:bg-slate-700 text-sm text-white font-semibold h-12 px-6 rounded-lg flex items-center dark:bg-slate-700 dark:hover:bg-slate-600 pointer-events-auto">button</button>`). 

So I wrote this extension to do the job in one click...OK, it's two. But it's really convenient, try it!

## Features

### Convert string class to array
![string-to-array][string-to-array]

### Convert array class to string
![array-to-string][array-to-string]

### Convert wrapped array class to string
![wrapped-array-to-string][wrapped-array-to-string]

## Usage
The command is available in right click context menu, as well as shorcut `Ctrl+k v` (`Cmd+k v` for Mac) and Command Palette.

## To Do

- [x] Publish to the Open VSX Registry
- [x] Support VS Code web
- [ ] Support jsx

## Release

See [CHANGELOG](CHANGELOG.md) for more information.

## Contributing

Bugs, feature requests and more are welcome here [GitHub Issues](https://github.com/Clarkkkk/vue-class-converter/issues).

[string-to-array]: https://raw.githubusercontent.com/Clarkkkk/vue-class-converter/main/assets/string-to-array.gif
[array-to-string]: https://raw.githubusercontent.com/Clarkkkk/vue-class-converter/main/assets/array-to-string.gif
[wrapped-array-to-string]: https://raw.githubusercontent.com/Clarkkkk/vue-class-converter/main/assets/wrapped-array-to-string.gif
