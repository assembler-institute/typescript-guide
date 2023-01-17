(() => {
    let avenger: any = 123;
    let powersAverage;
    let superPower;

    avenger = 'Dr Strange';
    // console.log((avenger as string).chartAt(0)); // choose a method that is wrong
    console.log((avenger as string).charAt(0));

    avenger = 3.1514;
    console.log((<number>avenger).toFixed(2))
})()