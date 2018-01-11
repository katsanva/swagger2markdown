# swagger2markdown

[![Build Status](https://travis-ci.org/katsanva/swagger2markdown.svg?branch=master)](https://travis-ci.org/katsanva/swagger2markdown)
[![Maintainability](https://api.codeclimate.com/v1/badges/1bc2b9ae5942f4c8e3ef/maintainability)](https://codeclimate.com/github/katsanva/swagger2markdown/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/1bc2b9ae5942f4c8e3ef/test_coverage)](https://codeclimate.com/github/katsanva/swagger2markdown/test_coverage)

CLI tool that allows to transform swagger definition file to markdown.

The main difference from other available tools - it renders menu and detailed examples.

## Installation

```sh
npm i -g swagger2markdown
```

## Usage

```sh
Usage: swagger2markdown -swagger [string] -markdown [string] -p [boolean]

Options:
  --swagger, -s        Path to swagger file                           [required]
  --markdown, -m       Path to output markdown file                   [required]
  --prependHeader, -p  Should produce raw markdown or add render-related header                                                  [boolean] [default: true]
```
