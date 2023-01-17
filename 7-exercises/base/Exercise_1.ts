(() => {

    // Types
    const batman = 'Bruce';
    const superman = 'Clark';
  
    const exist = false;
  
    // Tuples
    const heroCouples = [batman,superman];
    const villain = ['Lex Lutor',5,true];
  
    // Arrays
    const allies = ['Mujer Maravilla','Acuaman','San', 'Flash'];
  
    //Enum
    const flashStrength = 5;
    const supermanStrength = 100;
    const batmanStrength = 1;
    const acuamanStrength = 0;
  
    // Return type
    function activate_batsignal(){
      return 'activated';
    }
  
    function ask_for_help(){
      console.log('Help!!!');
    }
  
    // Type assertion
    const power: any = '100';
    const powerLength:number = power.length;
    console.log( powerLength );
  
  
  })()
  
  