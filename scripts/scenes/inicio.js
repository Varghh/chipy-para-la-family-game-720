const scenesInicio = {
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
    }
};