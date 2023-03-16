"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function () {
    var isSuperman = false;
    isSuperman = true;
    var isBatman = true;
    isBatman = isSuperman ? true : false;
    console.log({ isBatman: isBatman });
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
    var hero = ['Dr Strange', 100, true];
    console.log({ hero: hero });
    hero[0] = 'Nobita';
    hero[1] = 50;
    hero[2] = false;
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
    function callBatman() {
        return;
    }
    var a = callBatman();
    console.log({ a: a });
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
    var xmen = {
        name: 'Storm',
        age: 24,
        powers: ['Weather manipulation', 'Speed', 'Lightning'],
    };
    xmen = {
        name: 'Wolverine',
        age: 30,
        powers: ['Regeneration', 'Healing', 'Claws'],
        getName: function () {
            return this.name;
        },
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
    var fullName = function (firstName, lastName, age) {
        return "".concat(firstName, " ").concat(lastName);
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
var Person = (function () {
    function Person(name, lastName, age) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
    }
    Person.prototype.getFullName = function () {
        return "".concat(this.name, " ").concat(this.lastName);
    };
    Person.realName = 'Jhon Doe';
    return Person;
}());
var persona1 = new Person('Alejandro', 'Perez', 30);
console.log(persona1.getFullName());
console.log(Person.realName);
var Hero = (function () {
    function Hero(name, realName) {
        this.name = name;
        this.realName = realName;
    }
    return Hero;
}());
var hero1 = new Hero('Batman', 'Bruce Wayne');
console.log(hero1);
var Villain = (function () {
    function Villain(name, realName) {
        this.name = name;
        this.realName = realName;
    }
    Villain.prototype.getFullName = function () {
        return "".concat(this.name, " ").concat(this.realName);
    };
    return Villain;
}());
var villain1 = new Villain('Joker', 'Jack Napier');
var Avenger = (function () {
    function Avenger(name, realName) {
        this.name = name;
        this.realName = realName;
    }
    Avenger.prototype.showName = function () {
        console.log(this.name);
    };
    Avenger.prototype.showLastName = function () {
        console.log(this.realName);
    };
    Avenger.prototype.fullName = function () {
        return "".concat(this.name, " ").concat(this.realName);
    };
    return Avenger;
}());
var Xmen = (function (_super) {
    __extends(Xmen, _super);
    function Xmen(name, realName, isMutant) {
        console.log('XMEN constructor');
        return _super.call(this, name, realName) || this;
    }
    Xmen.prototype.showMutantName = function () {
        console.log("X-MEN ".concat(_super.prototype.fullName.call(this)));
    };
    Xmen.prototype.showXmenLastName = function () {
        console.log("X-MEN ".concat(_super.prototype.showLastName.call(this)));
    };
    return Xmen;
}(Avenger));
var wolverine = new Xmen('Wolverine', 'Logan', true);
console.log(wolverine);
wolverine.showMutantName();
wolverine.showXmenLastName();
var Guardian = (function () {
    function Guardian(name, realName) {
        this.name = name;
        this.realName = realName;
    }
    Object.defineProperty(Guardian.prototype, "fullName", {
        get: function () {
            return "".concat(this.name, " ").concat(this.realName);
        },
        set: function (name) {
            this.name = name;
        },
        enumerable: false,
        configurable: true
    });
    return Guardian;
}());
var startLord = new Guardian('Start Lord', 'John');
console.log(startLord);
startLord.fullName = 'John Doe';
console.log(startLord);
var Mutant = (function () {
    function Mutant(name, realName) {
        this.name = name;
        this.realName = realName;
    }
    return Mutant;
}());
var XMEN = (function (_super) {
    __extends(XMEN, _super);
    function XMEN() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    XMEN.prototype.sayPhrase = function () {
        console.log("I'm a mutant");
    };
    return XMEN;
}(Mutant));
var magneto = new XMEN('Magneto', 'Magnus');
console.log(magneto);
magneto.sayPhrase();
var printName = function (character) {
    console.log(character.name);
};
printName(magneto);
var Animal = (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.getInstance = function () {
        if (!Animal.instance) {
            Animal.instance = new Animal('Dog');
        }
        return Animal.instance;
    };
    Animal.prototype.changeName = function (newName) {
        this.name = newName;
    };
    return Animal;
}());
var animal = Animal.getInstance();
animal.changeName('Cat');
console.log(animal);
var client = {
    name: 'John',
    age: 30,
    address: {
        street: 'Main Street',
        number: 123,
        zipCode: '12345',
    },
    showAddress: function () {
        return this.address ? this.address.street : '';
    },
};
var T80 = (function () {
    function T80(year, tankType, numberOfPersonal) {
        this.year = 1980;
        this.tankType = 'T80';
        this.numberOfPersonal = 3;
        this.year = year;
        this.tankType = tankType;
        this.numberOfPersonal = numberOfPersonal;
    }
    T80.prototype.getDestination = function () {
        return 'Hawaii';
    };
    return T80;
}());
var t80 = new T80(2010, 'T80', 5);
console.log(t80);
console.log(t80.getDestination());
var addNumber = function (a, b) { return a + b; };
var batmovil = {
    turnOn: false,
    maxSpeed: 0,
    accelerate: function () {
        console.log('...... gogogo!!!');
    },
};
var joker = {
    laugh: true,
    eat: true,
    cry: false,
};
var gothanCity = function (citizen) {
    return citizen.length;
};
define("6-generics/1-generics", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.newGenericArrowFunction = exports.newGenericFunction = void 0;
    var printSomething = function (something) {
        console.log(something);
    };
    printSomething(1);
    printSomething('Hello');
    printSomething(true);
    function genericFunction(something) {
        console.log(something);
    }
    genericFunction(4.7122).toFixed(2);
    genericFunction('Hello').toFixed(2);
    function newGenericFunction(something) {
        return something;
    }
    exports.newGenericFunction = newGenericFunction;
    var newGenericArrowFunction = function (something) {
        return something;
    };
    exports.newGenericArrowFunction = newGenericArrowFunction;
    newGenericFunction(4.7122).toFixed(2);
});
define("6-generics/interfaces/boat", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("6-generics/interfaces/cargo_ship", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("6-generics/interfaces/pokemon", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("6-generics/interfaces/index", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("6-generics/2-generics_example", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var titanic = {
        name: 'Titanic',
        year: new Date(),
        port: 'Southampton',
        cargo: 1000,
    };
    var newGenericArrowFunction = function (something) {
        return something;
    };
    console.log(newGenericArrowFunction(titanic).name);
    console.log(newGenericArrowFunction(titanic).cargo);
    var process = function (value, message) {
        console.log(message);
        return value + value;
    };
    console.log(process(1, 'Hello'));
});
define("6-generics/3-generics_example2", ["require", "exports", "axios"], function (require, exports, axios_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    axios_1 = __importDefault(axios_1);
    var getPokemon = function (pokemonID) { return __awaiter(void 0, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, axios_1.default.get("https://pokeapi.co/api/v2/pokemon/".concat(pokemonID))];
                case 1:
                    data = (_a.sent()).data;
                    return [2, data];
            }
        });
    }); };
    var getPokemonByID = function (name) {
        return axios_1.default
            .get("https://pokeapi.co/api/v2/pokemon/".concat(name))
            .then(function (response) { return response.data; });
    };
    getPokemonByID('pikachu')
        .then(function (data) { return console.log(data.base_experience); })
        .catch(function (err) { return console.log(err); });
    getPokemon(1)
        .then(function (data) { return console.log(data); })
        .catch(function (err) { return console.log(err); });
});
(function () {
    var batman = 'Bruce';
    var superman = 'Clark';
    var exist = false;
    var heroCouples = [batman, superman];
    var villain = ['Lex Lutor', 5, true];
    var allies = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    var flashStrength = 5;
    var supermanStrength = 100;
    var batmanStrength = 1;
    var acuamanStrength = 0;
    function activate_batsignal() {
        return 'activated';
    }
    function ask_for_help() {
        console.log('Help!!!');
    }
    var power = '100';
    var powerLength = power.length;
    console.log(powerLength);
})();
(function () {
    var batman = 'Bruce';
    var superman = 'Clark';
    var exist = false;
    var heroCouples = [batman, superman];
    var villain = ['Lex Lutor', 5, true];
    var allies = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    var Strength;
    (function (Strength) {
        Strength[Strength["acuamanStrength"] = 0] = "acuamanStrength";
        Strength[Strength["batmanStrength"] = 1] = "batmanStrength";
        Strength[Strength["flashStrength"] = 5] = "flashStrength";
        Strength[Strength["supermanStrength"] = 100] = "supermanStrength";
    })(Strength || (Strength = {}));
    var flashStrength = Strength.flashStrength;
    var supermanStrength = Strength.supermanStrength;
    var batmanStrength = Strength.batmanStrength;
    var acuamanStrength = Strength.acuamanStrength;
    function activate_batsignal() {
        return 'activated';
    }
    function ask_for_help() {
        console.log('Help!!!');
    }
    var power = '100';
    var powerLength = power.length;
    console.log(powerLength);
})();
function sum(a, b) {
    return a + b;
}
var count = function (heros) {
    return heros.length;
};
var superHeros = ["Flash", "Arrow", "Superman", "Linterna Verde"];
count(superHeros);
var callBatman = function (call) {
    if (call === void 0) { call = true; }
    if (call) {
        console.log("Batsignal activated");
    }
};
callBatman();
var uniteHeroes = function () {
    var people = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        people[_i] = arguments[_i];
    }
    return people.join(", ");
};
var doNothing = function (numero, texto, booleano, arreglo) { };
var doNothingEither;
doNothingEither = doNothing;
var batMovil = {
    bodywork: "Negra",
    model: "6x6",
    bulletProof: true,
    passengers: 4
};
var bumblebee = {
    bodywork: "Amarillo con negro",
    model: "4x2",
    bulletProof: true,
    passengers: 4,
    shoot: function () {
        console.log("Shooting");
    }
};
var villains = [{
        name: "Lex Luthor",
        age: 54,
        mutant: false
    }, {
        name: "Erik Magnus Lehnsherr",
        age: 49,
        mutant: true
    }, {
        name: "James Logan",
        age: undefined,
        mutant: true
    }];
var charles = {
    power: "psiquico",
    heigth: 1.78
};
var apocalipsis = {
    leader: true,
    members: ["Magneto", "Tormenta", "Psylocke", "Angel"]
};
var mystique;
mystique = charles;
mystique = apocalipsis;
var conducirBatimovil = function (auto) {
    auto.encender = true;
    auto.velocidadMaxima = 100;
    auto.acelerar();
};
var batimovil = {
    encender: false,
    velocidadMaxima: 0,
    acelerar: function () {
        console.log("...... gogogo!!!");
    }
};
var guason = {
    reir: true,
    comer: true,
    llorar: false
};
var reir = function (guason) {
    if (guason.reir) {
        console.log("JAJAJAJA");
    }
};
var ciudadGotica = function (ciudadanos) {
    return ciudadanos.length;
};
var Human = (function () {
    function Human() {
        this.nombre = 'Harry Potter';
        this.edad = 28;
        this.sexo = 'male';
        this.estadoCivil = 'single';
    }
    Human.prototype.imprimirBio = function () {
        console.log('lol');
    };
    return Human;
}());
//# sourceMappingURL=main.js.map