const scenes = {
    inicio: {
        text: "Hoy es un gran día.",
        image: "../images/sol.png",
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
        text: "La PC te saluda muy contenta.",
        image: "../images/computadora.png",
        description: "La pantalla parpadea mientras tus sueños mueren.",
        choices: [{
                text: "> Pedir a ChatCGT que haga el trabajo",
                next: "CGT"
            },
            {
                text: "> Entrar a la reunion de trabajo.",
                next: "junta_directiva"
            }
        ]
    },
    CGT: {
        text: "ChatCGT esta quemando pixeles en el medio de tu escritorio.",
        image: "../images/computadora.png",
        description: "El programa te avisa que no va a hacer nada por vos a menos que les garantices 6 meses de vacaciones pagas.",
        choices: [{
                text: "> Llamar a la caprichosa.",
                next: "caprichosa"
            }
        ]
    },
    caprichosa: {
        text: "Con quinta a fondo, la caprichosa entra en escena.",
        image: "../images/caprichosa.png",
        description: "Con un gran grito de guerra, la caprichosa moja por completo tu computadora, destruyendola en el acto.",
        choices: [{
                text: "> Que bueno que Chipy es para la Family Game 720.",
                next: "caprichosa2"
            },
        ]
    },
    caprichosa2: {
        text: "La caprichosa se ruboriza.",
        image: "../images/caprichosa2.png",
        description: "'Hu... hu... humano-kun, no me mires así. No es que me guste mojar computadoras, es que... es que...'",
        choices: [{
                text: "> Casate con ella.",
                next: "fincasamiento"
            },
            {
                text: "> Chipy ya tiene mi corazon.",
                next: "inicio"
            }
        ]
    },
    fincasamiento: {
        text: "La caprichosa acepta tu propuesta.",
        image: "../images/casamiento.png",
        description: "Este es el comienzo de una hermosa relacion... ahora rinden 2 kilometros por litro.",
        choices: [{
                text: "> Despertarse.",
                next: "inicio"
            }
        ]
    },
    junta_directiva: {
        text: "Entras a la reunion y prendes la camara.",
        image: "../images/junta.png",
        description: "La junta te observa en silencio, te das cuenta que ya no tenes ropa puesta.",
        choices: [{
                text: "> Tocar la guitarra con la pija.",
                next: "despedido"
            },
            {
                text: "> Llorar.",
                next: "llorar"
            }
        ]
    },
    despedido: {
        text: "La junta directiva se levanta y aplaude.",
        image: "../images/junta.png",
        description: "Aun asi estas despedido, van a vender tu musica para pagar daños psicologicos.",
        choices: [{
                text: "> Salir afuera.",
                next: "renunciar"
        }]
            },   
    renunciar: {
        text: "Los impuestos son un robo.",
        image: "../images/ciudad.png",
        description: "Salis al mundo exterior.\nAl NORTE tenes la tienda de videjuegos.\nAl SUR, el abismo.\nAl OESTE, un carpincho tomando mate.\nAl ESTE, tu casa.\nTodo huele a MIERDA.",
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
            },
        ]
    },
    fincarpincho: {
        text: "Te mamaste.",
        image: "../images/tumba.png",
        description: "El carpincho saca una calibre 45 de adentro del mate y te dispara.",
        choices: [{
                text: "> Despertarse.",
                next: "inicio"
            },
        ]
    },
    llorar: {
        text: "Patetico.",
        image: "../images/sol.png",
        description: "No puedes seguir así.",
        choices: [{
                text: "> Despertarse.",
                next: "inicio"
            },
        ]
    },
};