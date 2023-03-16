# Typescript-Guide

![](https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_typescript_icon_130108.png)

TypeScript is a language for application-scale JavaScript. TypeScript adds optional types to JavaScript that support tools for large-scale JavaScript applications for any browser, for any host, on any OS. TypeScript compiles to readable, standards-based JavaScript. Try it out at the playground, and stay up to date via our blog and Twitter account.

## Contents

1. Basic Types
2. Objects
3. Functions
4. Classes
5. Interfaces
6. Generics
7. Excercices

## Installing

For the latest stable version:

```bash
npm install -g typescript
```

## Commands

- ### Init the tsconfig.json

```bash
tsc --init
```

- ### Enable Watch Mode
  - As nodemon or sass it keeps watching for changes

```bash
tsc --watch
```

## tsconfig Configuration

```json
{
   "compilerOptions": {
      "sourceMap": true,             // To see references in ts (console.log) but generate a new .map file for each ts
      "target": "es5",              // es2016 not as used as es5
      "moduleResolution": "node"    // Specify how TypeScript looks up a file from a given module specifier.
      "removeComments": true
   },
  "exclude": [
    "//objects/*.ts",
    "node_modules"
  ]
}

```

## Documentation

- [TypeScript in 5 minutes](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
- [Programming handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [Homepage](https://www.typescriptlang.org/)
