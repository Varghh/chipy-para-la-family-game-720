const scenes = {
    inicio: {
        text: "Hoy es un gran día.",
        image: "sol.png",
        description: "Hoy sale Chipy para la Family Game 720.",
        choices: [{
                text: "> Sentarse a trabajar.",
                next: "trabajo"
            },
            {
                text: "> Renunciar al trabajo.",
                next: "renunciar"
            },
            {
                text: "> Llorar.",
                next: "llorar"
            }
        ]
    },
    trabajo: {
        text: "Te sentás frente a la PC.",
        image: "sol.png",
        description: "La pantalla parpadea mientras tus sueños mueren.",
        choices: [{
                text: "> Seguir trabajando",
                next: "fin"
            },
            {
                text: "> Abrir Chipy igual",
                next: "gameover"
            }
        ]
    },
    renunciar: {
        text: "Elegis la libertad, comer es para los debiles.",
        image: "sol.png",
        description: "Salis al mundo exterior.\nAl NORTE tenes la tienda de videjuegos.\nAl SUR, el abismo.\nAl OESTE, un carpincho tomando mate.\nAl ESTE, tu casa.\nTodo huele a MIERDA.",
        choices: [{
                text: "> Ir a la tienda",
                next: "tienda"
            },
            {
                text: "> Quedarte en casa",
                next: "casa"
            }
        ]
    },
    llorar: {
        text: "Patetico.",
        image: "sol.png",
        description: "No puedes seguir así.",
        choices: [{
                text: "> Sentarse a trabajar.",
                next: "trabajo"
            },
            {
                text: "> Renunciar al trabajo.",
                next: "renunciar"
            },
            {
                text: "> Aceptar tu destino.",
                next: "finllanto"
            }
        ]
    },
    finllanto: {
        text: "Decidis rendirte.",
        image: "sol.png",
        description: "Nunca vas a poder jugar Chipy.",
        choices: [{
            text: "> Volver a empezar",
            next: "inicio"
        }]

    },
};