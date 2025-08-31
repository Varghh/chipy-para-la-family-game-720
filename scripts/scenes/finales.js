const scenesFinales = {
    fincasamiento: {
        text: "La caprichosa acepta tu propuesta.",
        image: "../images/casamiento.jpg",
        description: "Este es el comienzo de una hermosa relacion... ahora rinden 2 kilometros por litro.",
        choices: [{
            text: "> Momento, no tengo registro.",
            next: "inicio"
        }]
    },
    fincarpincho: {
        text: "La re quedaste.",
        image: "../images/tumba.jpg",
        description: "El carpincho materializa una 45 y te revienta de 2 tiros.",
        choices: [{
            text: "> Mal ahi.",
            next: "inicio"
        }, ]
    },
    fintexto: {
        text: "¿Ah no? Aca tenes el alien.",
        image: "../images/alien.jpg",
        description: "El alien vuelve, te rapta y te usa para ver cuantos matafuegos entran en el caquero.",
        choices: [{
            text: "> Bueh.",
            next: "inicio"
        }, ]
    },
    llorar: {
        text: "Patetico.",
        image: "../images/sol.jpg",
        description: "No puedes seguir así.",
        choices: [{
            text: "> Despertarse.",
            next: "inicio"
        }, ]
    },
    abismo_final: {
        text: "Nunca le creas a una lagartija en patineta.",
        image: "../images/panqueque.jpg",
        description: "El suelo te abraza con todo su amor, no hace falta que te describa que pasa despues.",
        choices: [{
            text: "> Que bicho de mierda.",
            next: "inicio"
        }, ]
    },
    abismo_finalmedia: {
        text: "Respuesta incorrecta.",
        image: "../images/tumba.jpg",
        description: "Roberto saca un celular chino y te frita el cerebro con sus ondas 5g.",
        choices: [{
            text: "> Que.",
            next: "inicio"
        }, ]
    }
};