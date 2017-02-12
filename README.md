# david-cli
[![NPM](https://nodei.co/npm/david-cli.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/david-cli/)

## Notice
This release is identified as non-production ready.

## Install
```bash
npm install -g david-cli
``` 
or 
```bash
yarn global add david-cli
``` 

## How to use it ?

### To check one file:
####  `use '--package' flag`
```bash
david-cli --package="path/to/package.json"
``` 

### To check multiple files:
#### `Use '--packages' flag`
```bash
david-cli --packages="path/to/package.json','path/to/package.json"
``` 

### Export to a JSON file:
#### `Use  '--json' flag`
```bash
david-cli --json='path/to/export/filename.json'
```

### Export to an HTML file:
#### `Use '--html' flag`
```bash
david-cli --html='path/to/export/filename.html'
```

### Displaying to CLI is the default behaviour:
#### `Do not show it`
```bash
david-cli --cli=false
```
