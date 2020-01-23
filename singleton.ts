class Persona
{
    static instance : Persona | null = null    //de clase, se necesita static, lo vuelve una propiedad de clase
    nombre : string     //propiedad de instancia
    edad : number

    private constructor(){}

    static getInstance()
    {
        if (Persona.instance == null)
        {
            Persona.instance = new Persona()
        }
        return Persona.instance
    }
}

let mainSingleton = () => {
    let p3 = Persona.getInstance()
    let p4 = Persona.getInstance()
    p3.nombre = "Luisito"
    p4.nombre = "Claudita"
    
    console.log(`Nombre: ${p3.nombre}`)
}

mainSingleton()