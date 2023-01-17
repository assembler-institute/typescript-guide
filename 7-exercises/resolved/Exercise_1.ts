  (() => {

    // Types
    const batman:string = 'Bruce';
    const superman: string = 'Clark';
  
    const exist:boolean = false;
  
    // Tuples
    const heroCouples:[string,string] = [batman,superman];
    const villain:[string,number,boolean] = ['Lex Lutor',5,true];
  
    // Arreglos
    const allies:string[] = ['Mujer Maravilla','Acuaman','San', 'Flash'];
  
    //Enumeraciones

    enum Strength {
      acuamanStrength = 0,
      batmanStrength = 1,
      flashStrength = 5,
      supermanStrength = 100
    }

    const flashStrength: Strength = Strength.flashStrength
    const supermanStrength: Strength = Strength.supermanStrength;
    const batmanStrength: Strength = Strength.batmanStrength;
    const acuamanStrength: Strength = Strength.acuamanStrength;
  
  
    // Return type
    function activate_batsignal():string{
      return 'activated';
    }
  
    function ask_for_help():void{
      console.log('Help!!!');
    }
  
    // Type assertion
    const power: any = '100';
    const powerLength:number = (power as string).length;
    console.log( powerLength );
  
  
  })()