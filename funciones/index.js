
//funciones ( encansular información de logica para reutilizar)
//LowerCamelcase miniscula primera palabra, y func otra palabra en mayuscula
//Funciones expresadas, expresar una funcion se usa muy poco;
var myFunc = function(){ //No es tan recomendable

}
//Arrow function esta se utiliza mucho en proyectos
const myfunc2 = ()=> { //Recomendable


}

//Funciones declaradas
function myFunc3(){ //Recomendable

    //Es el cuerpo de la función, las fx se definen como miniprogramas
    //dentro del programa

}

//parámetros
function withParams(a,/*parámetro a*/  b/*parametro b*/){

    console.log( a + b )

}

//Llamamos la función
//withParams(2,2)//argumentos



//parametros de una funcion expresada





//con arrow function
const withParams3 = (a,b) =>{
    console.log(a + b)

}

   // withParams3(10+10)


    //diferencias entre function y arrow function
    //function tengo que escribir directamente functon
    function fn( a , b){

        return console.log( a + b )


    }

    fn(10,10)

    //arrow function, nombre constante 
    const fn2 = (a , b) => console.log(a + b) // return implicito
        fn2(10,10)


    


    //mayor diferencia el retorno, paalabra reservada "return" ,  / => implica el return