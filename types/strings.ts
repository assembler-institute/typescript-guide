(() => {
  const batman: string = 'Batman';
  const greenLantern = 'Green Lantern';
  const allHeroes = `Heroes: ${batman}, ${greenLantern}`;

  console.log(allHeroes[250]?.toUpperCase() || 'No existe');
})();