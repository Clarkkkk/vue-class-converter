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

## Usage
- Right click the line where `class` is located, and then click `Switch vue class style` in the context menu. Done!
- The command is also available in shortcut `Ctrl+k v` (`Cmd+k v` for Mac) and Command Palette.
- It can also be used in JSX/TSX files

## Note
The extension simply use regular expression to detect and replace the class, so you may need to format your code first.

For example, code like:
```html
:class="['relative', 
    'w-5/6', 'overflow-hidden', 'rounded-3xl', 'transition-all', 'duration-500', 'hover:shadow-2xl', 'md:h-96', 'md:w-96']"
```

may not be recognize as valid class.

It needs to be formatted like:

```html
:class="[
    'relative', 
    'w-5/6',
    'overflow-hidden',
    'rounded-3xl',
    'transition-all',
    'duration-500',
    'hover:shadow-2xl',
    'md:h-96',
    'md:w-96'
]"
```

or other common format styles.

You can use ESLint or Prettier to format your code easily. Nevertheless, if you format your code and the extension is still unable to recognize it, please feel free to [open an issue](https://github.com/Clarkkkk/vue-class-converter/issues).

## Features

### Rewrite from string form to array form
![string-to-array][string-to-array]

### Rewrite from array form to string form
![array-to-string][array-to-string]

### Rewrite wrapped array as well
![wrapped-array-to-string][wrapped-array-to-string]

## Done

- [x] Publish to the Open VSX Registry
- [x] Support VS Code web
- [x] Support JSX

## Release

See [CHANGELOG](CHANGELOG.md) for more information.

## Contributing

Bugs, feature requests and more are welcome here [GitHub Issues](https://github.com/Clarkkkk/vue-class-converter/issues).

[string-to-array]: https://raw.githubusercontent.com/Clarkkkk/vue-class-converter/main/assets/string-to-array.gif
[array-to-string]: https://raw.githubusercontent.com/Clarkkkk/vue-class-converter/main/assets/array-to-string.gif
[wrapped-array-to-string]: https://raw.githubusercontent.com/Clarkkkk/vue-class-converter/main/assets/wrapped-array-to-string.gif
