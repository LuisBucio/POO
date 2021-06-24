class Pokemon{

    name = "";
    type = "";
    evolutions = [];

    // constructor(){

    // }
    // constructor (name){
    //     this.name =  name;
    // }

    // constructor (name, type){
    //     this.name =  name;
    //     this.type = type;
    // }

    constructor (name, type,evolution){
        this.name =  name;
        this.type = type;
        this.evolution =  evolution;


    }

    attack (){
        return`${this.name},esta atacando`;
    }
    
    evolve(evolution = 0){
        const EVOLVE = this.evolutions[evolution] || "" ;
        let message = "No puede evolucionar";

        if(EVOLVE){
            message = `${this.name} esta evolucionando = ${EVOLVE}`;
            this.name = EVOLVE;
        }

    }
}

const charmander = new Pokemon('Charmander','Fuego',['Charmaleon','Charizard']);
const squirtle = new Pokemon('squirtle','Agua',['Wartortle','Blastoise']);
const bulbasaur = new Pokemon();
const dito = new Pokemon('dito');
const picachu = new Pokemon('Picachu','electrico');

console.log(charmander.name);
console.log(charmander.type);
console.log(charmander.attack());
console.log(squirtle.name);
console.log(squirtle.type);
console.log(squirtle.attack());
console.log(squirtle.evolution[1]);