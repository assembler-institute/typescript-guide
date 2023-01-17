(() => {
  // let avengers;
  let avengers: number = 10;
  console.log({avengers});
  
  const villians:number = 20;

  if (avengers < villians) {
    console.log('We need more avengers');
  } else {
    console.log('We are safe');
  }
  avengers = Number('55A'); // carefull NaN is considered a number
  console.log({avengers});
})()

