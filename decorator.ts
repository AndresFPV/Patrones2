/*Ejemplo 1
let f1 = () => {

}

let f2 = (d : Function) => {

}

f2(f1)*/


/*Ejemplo 2
let f1 = () => {
    let f2 = () => {

    }
}*/

/*Ejemplo 3 
let f1 = (numero : number) => {
    let n : number = numero
    let f2 = () => {
        return n + 1
    }
    return f2
}

let f = f1(30)
console.log(f())

f = f1(10)
console.log(f())
*/


//Función a decorar
let formatearJSON = (nombre : string, edad : number) => {
    return `{nombre: '${nombre}', edad: ${edad}}`
}


//funcion que recibe como parametro
let funcionDecoradora = (funcionaDecorar : Function) => {
    //parametros mismos que tiene la funcion a decorar
    let funcionDecorada = (nombre : string, edad: number) => {
        //declaro y ejecuto
        let res = funcionaDecorar(nombre, edad)
        return res.toUpperCase()
    }
    return funcionDecorada
} 

let mainDecorator = () => {
    let funcionDecorada = funcionDecoradora(formatearJSON)
    let json = funcionDecorada("Pepito",30)
    console.log(json)

    //es lo mismo que lo de arriba
    //console.log(funcionDecoradora(formatearJSON)("Pepito",30))
}
mainDecorator()