const scenesCiudad = {
    renunciar: {
        text: "No tenias trabajo de todos modos.",
        image: "../images/ciudad.png",
        description: "Salis al mundo exterior.\nAl NORTE tenes la tienda de videjuegos.\nAl SUR, el abismo.\nAl OESTE, un carpincho tomando mate.\nAl ESTE, tu casa.\nUn alien pasa y dice que hay olor a pis.",
        choices: [{
                text: "> Carpincho",
                next: "carpincho"
            },
            {
                text: "> Carpincho Carpincho",
                next: "carpincho"
            }
        ]
    },
    carpincho: {
        text: "El carpincho re copado te mira mientras sirve un verde.",
        image: "../images/carpincho.png",
        description: "Te invita a tomar un mate y te dice que no te preocupes por nada, que todo va a estar bien.",
        choices: [{
                text: "> Tomar el mate.",
                next: "carpincho2"
            },
            {
                text: "> Pedir indicaciones a la tienda.",
                next: "carpincho3"
            }
        ]
    },
    carpincho2: {
        text: "El mate esta tapadisimo.",
        image: "../images/carpincho.png",
        description: "El carpincho te mira cuidadosamente.",
        choices: [{
                text: "> Decirle que esta re tapado.",
                next: "fincarpincho"
            },
            {
                text: "> Simular un solo de flauta.",
                next: "carpincho4"
            }
        ]
    },
    carpincho3: {
        text: "Tienda de videojuegos?",
        image: "../images/carpincho.png",
        description: "Te dice que la tienda esta al norte.",
        choices: [{
            text: "> Ya lo sabia.",
            next: "tienda"
        }, ]
    }
};