// undefined != null
// void interpreta que no hay valor de retorno
(() => {
  function callBatman():void {
    return;
  }

  // const callSuperMan = ():void => {
  //   return null;
  // }

  const a = callBatman();
  console.log({a});

})()