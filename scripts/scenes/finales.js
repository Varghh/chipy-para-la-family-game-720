const scenesFinales = {
    fincasamiento: {
        text: "La caprichosa acepta tu propuesta.",
        image: "../images/casamiento.png",
        description: "Este es el comienzo de una hermosa relacion... ahora rinden 2 kilometros por litro.",
        choices: [{
            text: "> Despertarse.",
            next: "inicio"
        }]
    },
    fincarpincho: {
        text: "Te mamaste.",
        image: "../images/tumba.png",
        description: "El carpincho saca una calibre 45 de adentro del mate y te dispara.",
        choices: [{
            text: "> Despertarse.",
            next: "inicio"
        }, ]
    },
    llorar: {
        text: "Patetico.",
        image: "../images/sol.png",
        description: "No puedes seguir así.",
        choices: [{
            text: "> Despertarse.",
            next: "inicio"
        }, ]
    }
};