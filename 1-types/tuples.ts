(() => {
  // Los tuples nos permiten asignar un valor a cada posición
  const hero: [string, number, boolean] = ['Dr Strange', 100, true]
  console.log({ hero });
  // hero[0] = 50;
  // hero[1] = 'Nobita';
  hero[0] = 'Nobita';
  hero[1] = 50;
  hero[2] = false;
  // hero.push(3.14, 'Skull');
})()