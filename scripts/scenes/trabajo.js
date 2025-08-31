const scenesTrabajo = {
    trabajo: {
        text: "La PC te saluda muy contenta.",
        image: "../images/computadora.jpg",
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
        image: "../images/computadora.jpg",
        description: "El programa te avisa que no va a hacer nada por vos a menos que les garantices 6 meses de vacaciones pagas.",
        choices: [{
            text: "> Llamar a la caprichosa.",
            next: "caprichosa"
        }]
    },
    caprichosa: {
        text: "Con quinta a fondo, la caprichosa entra en escena.",
        image: "../images/caprichosa.jpg",
        description: "Con un gran grito de guerra, la caprichosa moja por completo tu computadora, destruyendola en el acto.",
        choices: [{
            text: "> Que bueno que Chipy es para la Family Game 720.",
            next: "caprichosa2"
        }, ]
    },
    caprichosa2: {
        text: "La caprichosa se ruboriza.",
        image: "../images/caprichosa2.jpg",
        description: "'Hu... hu... humano-kun, no me mires así. No es que me guste mojar computadoras, es que... es que...'",
        choices: [{
                text: "> Casate con ella.",
                next: "fincasamiento"
            },
            {
                text: "> Chipy ya tiene mi corazon, huir a otra linea.",
                next: "inicio"
            }
        ]
    },
    junta_directiva: {
        text: "Entras a la reunion y prendes la camara.",
        image: "../images/junta.jpg",
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
        image: "../images/junta.jpg",
        description: "Aun asi estas despedido, van a vender tu musica para pagar daños psicologicos.",
        choices: [{
            text: "> Salir afuera.",
            next: "renunciar"
        }]
    }
};