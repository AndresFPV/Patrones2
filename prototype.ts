class Alumno
{
    nombre : string
    edad : number

    clonar()
    {
        let a = new Alumno()
        a.nombre = this.nombre
        a.edad = this.edad
        return a
    }
}

let mainPrototype = () => {
    let a1 = new Alumno()
    a1.nombre = "Pepito"
    a1.edad = 30

    let a2 = a1.clonar()

    a2.edad = 31
}