# arvis-freedict-plugin

[![CodeFactor](https://www.codefactor.io/repository/github/jopemachine/arvis-freedict-plugin/badge)](https://www.codefactor.io/repository/github/jopemachine/arvis-freedict-plugin)
[![NPM download total](https://img.shields.io/npm/dt/arvis-freedict-plugin)](http://badge.fury.io/js/arvis-freedict-plugin)
[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)
[![PR's Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat)](http://makeapullrequest.com)
[![GitHub issues](https://img.shields.io/github/issues/jopemachine/arvis-freedict-plugin.svg)](https://GitHub.com/jopemachine/arvis-freedict-plugin/issues/)

Dictionary plugin for [Arvis](https://github.com/jopemachine/arvis) using [dictionaryapi.dev](https://dictionaryapi.dev/)

Note: This plugin can decrease the search performance of Arvis.

![](./demo.png)

## Installation

1. Install by npm

```
$ npm i -g arvis-freedict-plugin
```

2. Increase `Async plugin timer` value to proper size in `Advanced-plugin` option.

(No fixed value for this, but recommend to set more than 1 second. (1000))

## Config

You can edit this plugin's config on `User config table` like below.

![](./config.png)

### lang

type: `string`

default value: `en_US`

## Icon sources

This plugin uses below icon sources

<a target="_blank" href="https://icons8.com">Image</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>

## Related

- [dictionaryapi.dev](https://dictionaryapi.dev/) - API for this module.

- [arvish](https://github.com/jopemachine/arvish) - Arvis workflow, plugin creator tools

- [other plugins](https://github.com/jopemachine/arvis/blob/master/documents/plugin-links.md)