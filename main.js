"use strict";
(function () {
    var batman = 'Bruce';
    var superman = 'Clark';
    var existe = false;
    var parejaHeroes = [batman, superman];
    var villano = ['Lex Lutor', 5, true];
    var aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    var fuerzaFlash = 5;
    var fuerzaSuperman = 100;
    var fuerzaBatman = 1;
    var fuerzaAcuaman = 0;
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    var poder = '100';
    var largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
(function () {
    var batman = 'Bruce';
    var superman = 'Clark';
    var existe = false;
    var parejaHeroes = [batman, superman];
    var villano = ['Lex Lutor', 5, true];
    var aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    var Fuerza;
    (function (Fuerza) {
        Fuerza[Fuerza["fuerzaAcuaman"] = 0] = "fuerzaAcuaman";
        Fuerza[Fuerza["fuerzaBatman"] = 1] = "fuerzaBatman";
        Fuerza[Fuerza["fuerzaFlash"] = 5] = "fuerzaFlash";
        Fuerza[Fuerza["fuerzaSuperman"] = 100] = "fuerzaSuperman";
    })(Fuerza || (Fuerza = {}));
    var fuerzaFlash = Fuerza.fuerzaFlash;
    var fuerzaSuperman = Fuerza.fuerzaSuperman;
    var fuerzaBatman = Fuerza.fuerzaBatman;
    var fuerzaAcuaman = Fuerza.fuerzaAcuaman;
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    var poder = '100';
    var largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
function sumar(a, b) {
    return a + b;
}
var contar = function (heroes) {
    return heroes.length;
};
var superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);
var llamarBatman = function (llamar) {
    if (llamar === void 0) { llamar = true; }
    if (llamar) {
        console.log("Batiseñal activada");
    }
};
llamarBatman();
var unirheroes = function () {
    var personas = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        personas[_i] = arguments[_i];
    }
    return personas.join(", ");
};
var noHaceNada = function (numero, texto, booleano, arreglo) { };
var noHaceNadaTampoco;
noHaceNadaTampoco = noHaceNada;
var batimovil = {
    carroceria: "Negra",
    modelo: "6x6",
    antibalas: true,
    pasajeros: 4
};
var bumblebee = {
    carroceria: "Amarillo con negro",
    modelo: "4x2",
    antibalas: true,
    pasajeros: 4,
    disparar: function () {
        console.log("Disparando");
    }
};
var villanos = [{
        nombre: "Lex Luthor",
        edad: 54,
        mutante: false
    }, {
        nombre: "Erik Magnus Lehnsherr",
        edad: 49,
        mutante: true
    }, {
        nombre: "James Logan",
        edad: undefined,
        mutante: true
    }];
var charles = {
    poder: "psiquico",
    estatura: 1.78
};
var apocalipsis = {
    lider: true,
    miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"]
};
var mystique;
mystique = charles;
mystique = apocalipsis;
(function () {
    var fullName = function (firstName, lastName, age) {
        if (age === void 0) { age = 0; }
        if (age) {
            return "".concat(firstName, " ").concat(lastName || 'Pancake', ", is ").concat(age, " years old").toUpperCase();
        }
        else {
            return "".concat(firstName, " ").concat(lastName || 'Pancake');
        }
    };
    var name = fullName('Tony', 'Stark', 45);
    console.log({ name: name });
})();
(function () {
    var fullName = function (firstName, lastName, age) {
        return "".concat(firstName, " ").concat(lastName || 'Pancake', ", is ").concat(age, " years old");
    };
    var name = fullName('Tony', undefined, 45);
    console.log({ name: name });
})();
(function () {
    var fullName = function (firstName, lastName, age) {
        return "".concat(firstName, " ").concat(lastName);
    };
    var name = fullName('Tony', 'Stark', 45);
    console.log({ name: name });
})();
(function () {
    var fullName = function (firstName) {
        var restOfName = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            restOfName[_i - 1] = arguments[_i];
        }
        return "".concat(firstName, " ").concat(restOfName.join(' '));
    };
    var superMan = fullName('Clark', 'Joseph', 'Kent');
    console.log(superMan);
})();
(function () {
    var addNumbers = function (a, b) { return a + b; };
    var greet = function (name) { return "Hola ".concat(name); };
    var saveTheWorld = function () { return "The world needs your help"; };
    var myFunction;
    myFunction = addNumbers;
    console.log(myFunction(5, 5));
    myFunction = greet;
    console.log(myFunction('Spiderman'));
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
(function () {
    var hero = 'Lobezno';
    function returnName() {
        return hero;
    }
    var activatePowers = function () {
        return 'Powers activated';
    };
    console.log(typeof activatePowers);
    var heroName = returnName();
})();
(function () {
    var xmen = {
        name: 'Storm',
        age: 24,
        powers: ['Weather manipulation', 'Speed', 'Lightning']
    };
    xmen = {
        name: 'Wolverine',
        age: 30,
        powers: ['Regeneration', 'Healing', 'Claws'],
        getName: function () {
            return this.name;
        }
    };
})();
(function () {
    var storm = {
        name: 'Storm',
        age: 24,
        powers: ['Weather manipulation', 'Speed', 'Lightning']
    };
    var wolverine = {
        name: 'Wolverine',
        age: 30,
        powers: ['Regeneration', 'Healing', 'Claws'],
        getName: function () {
            return this.name;
        }
    };
})();
(function () {
    var myCustomVariable;
    myCustomVariable = 20;
    console.log(typeof myCustomVariable);
    myCustomVariable = {
        name: 'Cyclops',
        age: 30,
        powers: ['X-ray', 'Beams of energy ']
    };
    console.log(typeof myCustomVariable);
    console.log(myCustomVariable);
})();
(function () {
    var avenger = 123;
    var powersAverage;
    var superPower;
    avenger = 'Dr Strange';
    console.log(avenger.charAt(0));
    avenger = 3.1514;
    console.log(avenger.toFixed(2));
})();
(function () {
    var numbers = [1, 2, 3, 4, '5', 6];
    numbers.push(7);
    console.log(numbers);
    numbers.push(true);
    var villians = ['Skul', 'Doraemon', 'Duende Verde'];
    villians.forEach(function (villian) { return console.log(villian.toUpperCase()); });
})();
(function () {
    var isSuperman = false;
    isSuperman = true;
    var isBatman = true;
    isBatman = (isSuperman) ? true : false;
    console.log({ isBatman: isBatman });
})();
(function () {
    var AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 1] = "min";
        AudioLevel[AudioLevel["medium"] = 2] = "medium";
        AudioLevel[AudioLevel["medium2"] = 3] = "medium2";
        AudioLevel[AudioLevel["medium3"] = 4] = "medium3";
        AudioLevel[AudioLevel["medium4"] = 5] = "medium4";
        AudioLevel[AudioLevel["medium5"] = 6] = "medium5";
        AudioLevel[AudioLevel["max"] = 10] = "max";
    })(AudioLevel || (AudioLevel = {}));
    var currentAudio = AudioLevel.min;
    console.log(currentAudio);
    console.log(AudioLevel);
})();
(function () {
    var error = function (message) {
        if (false) {
            throw new Error(message);
        }
        return 1;
    };
    error('Madre mía con TypeScript');
    console.log('Hola mundo');
})();
(function () {
    var nothing = null;
    console.log({ nothing: nothing });
})();
(function () {
    var avengers = 10;
    console.log({ avengers: avengers });
    var villians = 20;
    if (avengers < villians) {
        console.log('We need more avengers');
    }
    else {
        console.log('We are safe');
    }
    avengers = Number('55A');
    console.log({ avengers: avengers });
})();
(function () {
    var _a;
    var batman = 'Batman';
    var greenLantern = 'Green Lantern';
    var allHeroes = "Heroes: ".concat(batman, ", ").concat(greenLantern);
    console.log(((_a = allHeroes[250]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || 'No existe');
})();
(function () {
    var hero = ['Dr Strange', 100, true];
    console.log({ hero: hero });
    hero[0] = 'Nobita';
    hero[1] = 50;
    hero[2] = false;
})();
(function () {
    function callBatman() {
        return;
    }
    var a = callBatman();
    console.log({ a: a });
})();
//# sourceMappingURL=main.js.map