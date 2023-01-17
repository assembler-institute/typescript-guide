(() => {
  // let audioLevel = 47;
  // Imagine you need to create several points to be reinterpreted as quick as possible
  enum AudioLevel {
    // min,
    // medium,
    // max
    min = 1,
    medium,
    medium2,
    medium3,
    medium4,
    medium5,
    max = 10
  }

  let currentAudio = AudioLevel.min;
  console.log(currentAudio);
  console.log(AudioLevel);
  
})()