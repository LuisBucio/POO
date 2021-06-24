/*Encapsulamiento, se requiere de un # para volver a la varibale provida, no puede ser accedida desde fuera*/

class Pokemon{
//atributos privados #
    #name = "";
    #type = "";
    #evolutions = [];

    constructor (name, type,evolutions){
        //para acceder a esto metodos se utiliza set y get
        this.#name =  name;
        this.#type = type;
        this.#evolutions =  evolutions;


    }
//Es la manera para poder acceder a los atributos (se consulta)
    set name(value){
        this.#name = value;
    }
    set type(value){
        this.#type = value;
    }
    set evolutions(value){
        this.#type = value;
    }
// el metodo get no recibe atributo pero si tiene retorno (se modifica)
    get name(){
        return this.#name;
    }
    get type(){
        return this.#type;
    }
    get evolutions(){
        return this.#evolutions;
    }


    attack (){
        return`${this.#name},esta atacando`;
    }
    
    evolve(evolution = 0){
        const EVOLVE = this.#evolutions[evolution] || "" ;
        let message = "No puede evolucionar";

        if(EVOLVE){
            message = `${this.#name} esta evolucionando = ${EVOLVE}`;
            this.#name = EVOLVE;
        }

    }
}

const charmander = new Pokemon('Charmander','Fuego',['Charmaleon','Charizard']);
const squirtle = new Pokemon('squirtle','Agua',['Wartortle','Blastoise']);

console.log(charmander.name);
console.log(charmander.type);
console.log(charmander.attack());
console.log(squirtle.name);
console.log(squirtle.type);
console.log(squirtle.attack());
