const scenesAbismo = {
    abismo: {
        text: "Nunca supiste donde queda el norte.",
        image: "../images/abismo.jpg",
        description: "Te encontras en la entrada del abismo. Se escuchan voces extrañas desde abajo.\nHay un cartel que dice 'Bienvenidos al abismo - poblacion: variable'.",
        choices: [{
                text: "> Volver a la ciudad y buscar el norte.",
                next: "abismo2"
            },
            {
                text: "> Saltar.",
                next: "abismo_descenso"
            }
        ]
    },
    abismo2: {
        text: "La oscuridad te envuelve, no hay escapatoria.",
        image: "../images/abismo.jpg",
        description: "El abismo te llama, no podes resistirte.",
        choices: [{
                text: "> Resistir.",
                next: "abismo3"
            },
            {
                text: "> Saltar.",
                next: "abismo_descenso"
            }
        ]
    },
    abismo3: {
        text: "Todavia no entendiste que tus decisiones no importan.",
        image: "../images/abismo.jpg",
        description: "Es la ultima vez que te lo explico.",
        choices: [{
                text: "> Saltar.",
                next: "abismo_descenso"
            },
            {
                text: "> Saltar.",
                next: "abismo_descenso"
            }
        ]
    },
    abismo_descenso: {
        text: "Te tiras de clavado como un pelotudo.",
        image: "../images/abismo.jpg",
        description: "Sentir el aire silvar en tus oidos, un gecko en patineta te dice que caigas en posicion estrella.",
        choices: [{
                text: "> Caer en posicion estrella.",
                next: "abismo_final"
            },
            {
                text: "> Gritar.",
                next: "abismo_a"
            }
        ]
    },
    abismo_a: {
        text: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
        image: "../images/abismo.jpg",
        description: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\nAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\nAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\nAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
        choices: [{
                text: "> AAAAAAAAAAAAAAAAAAAAAAAAA",
                next: "abismo_aterrizaje"
            },
            {
                text: "> AAAAAAAAAAAAAAAAAAAAAAAAA",
                next: "abismo_aterrizaje"
            }
        ]
    },
    abismo_aterrizaje: {
        text: "Un enorme colchon, comodo, mullido y suave amortigua tu caida.",
        image: "../images/canon.jpg",
        description: "Tus gritos alertaron a los habitantes de tu caida, siluetas negras se acercan, estas seguro que a alguien le pagaron por usar ese colchon en particular.",
        choices: [{
                text: "> Agradecerles.",
                next: "abismo_bienvenida"
            },
        ]
    },
abismo_bienvenida: {
        text: "Una rata con una media en la cabeza te da la bienvenida.",
        image: "../images/roberto.jpg",
        description: "'Bienvenido al abismo. Soy Roberto, Ministro de caidas accidentales. Te explico las reglas rapidamente:\n1 - No hay reglas.\n2 - No escupir.\n3 - Usar medias en la cabeza.'",
        choices: [{
                text: "> Preguntar por las medias.",
                next: "abismo_medias"
            },
            {
                text: "> Escupi mientras caia.",
                next: "abismo_escupir"
            },
            {
                text: "> Porque hay reglas si se supone que no hay reglas.",
                next: "abismo_reglas"
            }
        ]
    },
    abismo_medias: {
        text: "Roberto te ofrece una media.",
        image: "../images/roberto.jpg",
        description: "'Las medias son vitales para proteger a tu cerebro del 5g, las ondas wifi y el sida.'",
        choices: [{
                text: "> Ponerse la media.",
                next: "abismo_distrito"
            },
            {
                text: "> Ni en pedo me pongo eso.",
                next: "abismo_finalmedia"
            }
        ]
    },
    abismo_escupir: {
        text: "Roberto te mira ofendido.",
        image: "../images/roberto.jpg",
        description: "'Bueno todavia no sabias las reglas, a cualquiera le puede pasar.'",
        choices: [{
                text: "> Pedirle una media.",
                next: "abismo_medias"
            },
            {
                text: "> Escupir de vuelta.",
                next: "abismo_finalmedia"
            }
        ]
    },
    abismo_reglas: {
        text: "Roberto se encoge de hombros.",
        image: "../images/roberto.jpg",
        description: "'No se que decirte, yo leo lo que dice el libreto.'",
        choices: [{
                text: "> Suspirar y pedirle una media.",
                next: "abismo_medias"
            },
            {
                text: "> Ya aprendi a no joder con eso, pedirle una media.",
                next: "abismo_medias"
            }
        ]
    },
};
