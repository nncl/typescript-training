# Typescript Training

Typescript Training tho.

## Getting Started

It's required to have installed at least Node.JS version 6.

Install typescript via npm:

```
npm i -g typescript
```

To run a command transforming your `ts` file into `js` file, execute:

```
tsc <filename>.ts
```

It's gonna create a `<filename>.js` file.

You can also watch this file running:

```
tsc -w <filename>.ts
```

It's gonna print something like:

```
00:38:11 - Starting compilation in watch mode...
00:38:14 - Compilation complete. Watching for file changes.
```

Finally, you can execute your `js` file running:

```
node <filename>.js
```

You can specify how your typescript will be executed. For example, I want to execute different from default, and transpile it through ES6:

```
tsc -t ES6 -w hello.ts
```

We can define it from a configuration file. To init it, just run:

```
tsc --init
```

This will create a `tsconfig.json` file which tells typescript how to execute `ts` commands.

Now, just run `tsc -w` and typescript will watch and transpile every single `ts` file on your project.
