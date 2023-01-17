(() => {

  // null != undefined
  let nothing: null = null;
  // strictNullChecks = false; // in tsconfig.json
  // let isActive: boolean = undefined;
  // let isActive: (boolean | undefined) = undefined;
  console.log({nothing});
})()