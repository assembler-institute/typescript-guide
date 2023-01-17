(() => {
  // const numbers = [1,2,3,4,5,6] // ver numbers para ver [] + string
  // const numbers = [1,2,3,4,'5',6];

  const numbers: (string | number | boolean )[] = [1,2,3,4,'5',6];
  numbers.push(7);
  console.log(numbers);
  numbers.push(true);

  const villians = ['Skul', 'Doraemon', 'Duende Verde'];
  villians.forEach(villian => console.log(villian.toUpperCase()))
  // numbers.forEach(number => console.log(number.toUpperCase())
})()