const scenesCiudad = {
    renunciar: {
        text: "No tenias trabajo de todos modos.",
        image: "../images/ciudad.jpg",
        description: "Al NORTE tenes la tienda de videjuegos.\nAl SUR, el abismo.\nAl OESTE, un carpincho tomando mate.\nAl ESTE, tu casa.\nUn alien pasa y dice que hay olor a pis.",
        choices: [{
                text: "> Ir con el carpincho.",
                next: "carpincho"
            },
            {
                text: "> Ir con el carpincho, CON ENTUSIASMO.",
                next: "carpincho"
            }
        ]
    },
    ciudadregreso: {
        text: "Eso te pasa por no leer, vamos de nuevo.",
        image: "../images/ciudad.jpg",
        description: "Al NORTE tenes la tienda de videjuegos.\nAl SUR, el abismo.\nAl OESTE, un carpincho tomando mate.\nAl ESTE, tu casa.\nUn alien pasa y dice que hay olor a pis.",
        choices: [{
                text: "> Ir al norte.",
                next: "abismo"
            },
            {
                text: "> Hablar con el alien.",
                next: "ciudadregreso2"
            }
        ]
    },
    ciudadregreso2: {
        text: "El alien ya no esta.",
        image: "../images/ciudad.jpg",
        description: "Se fue mientras hablabas con el carpincho, el momento ya paso, anda al norte, dios santo, media hora hermano.",
        choices: [{
                text: "> Bueno...",
                next: "abismo"
            },
            {
                text: "> Vos no me decis que hacer, texto puto.",
                next: "fintexto"
            }
        ]
    },
    carpincho: {
        text: "El carpincho re copado te mira mientras te sirve un mate.",
        image: "../images/carpincho.jpg",
        description: "Hablando perfecto español, te lo entrega y notas que no esta al tanto de las leyes de la termodinamica.",
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
        image: "../images/carpincho.jpg",
        description: "El carpincho te pregunta si estas bien.",
        choices: [{
                text: "> Decirle que esta re tapado.",
                next: "fincarpincho"
            },
            {
                text: "> Sorber con todas tus fuerzas.",
                next: "carpincho4"
            }
        ]
    },
    carpincho4: {
        text: "El mate comienza a dematerializarse y ahora es parte tuya molecularmente.",
        image: "../images/carpincho.jpg",
        description: "Notas que no entiende que paso, es ahora, es momento de...",
        choices: [{
                text: "> Hacer 3 backflip consecutivos y correr hacia el norte.",
                next: "abismo"
            },
            {
                text: "> Dematerializarte a vos mismo.",
                next: "inicio"
            }
        ]
    },
    carpincho3: {
        text: "¿Tienda de videojuegos?",
        image: "../images/carpincho.jpg",
        description: "Literalmente en la pantalla de la ciudad decia que estaba al norte.",
        choices: [{
            text: "> Pedilo.",
            next: "ciudadregreso"
        }, ]
    }
};