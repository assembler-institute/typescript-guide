tsc --init -> Init the tsconfig.json
tsc --watch -> As nodemon or sass it keeps watching for changes

node_modules is excluded automatically

// tsconfig.json
sourceMap: true -> Para ver referencias en ts (console.log) pero genera un nuevo archivo .map por cada ts
target: "es5", // es2016 no tan usado como es5
removeComments: true
// al final
  "exclude": [
    // "objetos/*.ts"
    "./yourdocument"
  ],
  "include": [
    "./yourdocument"
  ]

// If chrome doesn't show console.logs for ts files then go to setting > Preferences > Sources > Enable JavaScript source maps
