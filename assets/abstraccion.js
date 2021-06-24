class Pokedex{

    getinfo(name){
        fetch(`https://workshop-mongo.herokuapp.com/pokemon/name/${name}`)
        .then(data => data.json())
        .then(data =>{
            //DESTRUCTURACIÓN EJEMPLO
            // const lista = ['Dragon Ball','Code Geass','Sailor Moon'];
            // const[anime1,anime2,anime3] = lista;
            // console.log(anime1,anime2,anime3);

            console.log(data);
            //si data no es un arreglo no se puedes desestructurar
            const [DATA = null] = data;
            //Aquí name es para regresar el valor del pokemon que estamos buscando.
            const MESSAGE = DATA || `El pokemon ${name} no existe`;

            console.log(MESSAGE);
        })
    }
}
const POKEDEX = new Pokedex();
POKEDEX.getinfo("charmander");