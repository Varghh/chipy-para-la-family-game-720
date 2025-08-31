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
        }, ]
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
        description: "'Las medias son vitales para proteger a tu cerebro del Cincog, las ondas wifi y el sida.'",
        choices: [{
                text: "> Ponerse la media.",
                next: "abismo_distrito"
            },
            {
                text: "> Porque decis Cincog y no 5g?",
                next: "abismo_numeros"
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
    abismo_numeros: {
        text: "Eso es muy sencillo de explicar.",
        image: "../images/roberto.jpg",
        description: "'Pasa que en esta tipografia el 5 se ve como una s y en el playtest la gente se confundia.'",
        choices: [{
            text: "> Tiene sentido.",
            next: "abismo_distrito"
        }, ]
    },
    abismo_distrito: {
        text: "Roberto te lleva a recorrer el abismo.",
        image: "../images/abismo2.jpg",
        description: "'Bueno por ese pasillo vas al coliseo de la muerte, ese edificio es el que mantiene funcionado la maquina de probabilidades de la realidad, a tu izquierda tenes a Monica que vende seguros y a tu derecha esta chicho, vende empanadas de lombriz'.",
        choices: [{
                text: "> Comprar una empanada.",
                next: "abismo_empanadas"
            },
            {
                text: "> Ir al coliseo de la muerte.",
                next: "abismo_coliseo"
            },
            {
                text: "> Contratar un seguro.",
                next: "abismo_seguros"
            }
        ]
    },
    abismo_empanadas: {
        text: "Chicho te vende una empanada de lombriz.",
        image: "../images/chicho.jpg",
        description: "Nuestras empanadas estan hechas con la mejor calidad de lombrices que un payaso raro nos vende cada tanto.\nJamas en tu vida comiste algo con tanto sabor a tierra y Anis.",
        choices: [{
            text: "> Volver al distrito.",
            next: "abismo_distrito2"
        }, ]
    },
    abismo_distrito2: {
        text: "Roberto te esta esperando.",
        image: "../images/abismo2.jpg",
        description: "'Tenes los huevos bien puestos para comer eso, la ultima vez estuve internado 2 semanas'.",
        choices: [{
                text: "> Ir al coliseo de la muerte.",
                next: "abismo_coliseo"
            },
            {
                text: "> Contratar un seguro.",
                next: "abismo_seguros"
            }
        ]
    },
    abismo_seguros: {
        text: "Monica la rana te saluda muy contenta.",
        image: "../images/monica.jpg",
        description: "'Hola! Te interesa un seguro de vida? Por solo 100 abismopuntos al mes podes asegurar tu vida contra ataques de pirañas, problemas existenciales, embarazos no deseados, comunismo y demas accidentes comunes en el abismo.'",
        choices: [{
                text: "> Un momento, me dijeron que jamas confie en lagartijas.",
                next: "abismo_lagartija",
            },
            {
                text: "> Todo el dinero que tengo es para comprar Chippy.",
                next: "abismo_chippy"
            }
        ]
    },
    abismo_lagartija: {
        text: "¿Lagartijas?.",
        image: "../images/monica.jpg",
        description: "'Las ranas somos anfibios, no lagartijas... jajaja... jajaja...' Monica compienza a transpirar.",
        choices: [{
                text: "> Tiene sentido, aun asi no tengo plata para un seguro.",
                next: "abismo_chippy"
            },
            {
                text: "> Las ranas no transpiran.",
                next: "abismo_secreto"
            }
        ]
    },
    abismo_secreto: {
        text: "OH NO DESCUBRISTE MI IDENTIDAD SECRETA.",
        image: "../images/monica2.jpg",
        description: "Monica levanta su mascara y resulta que todo este tiempo era Bruce Willis.\n'Me descubriste, nunca tuve demencia, solo necesitaba donde esconderme porque la gente no dejaba de preguntarme por el final de Sexto Sentido.'",
        choices: [{
                text: "> ¿Sos mi actor favorito Vin Diesel, me puedo quedar a vivir con vos?.",
                next: "abismo_pelafinal"
            },
            {
                text: "> Nah malisimo, me voy al coliseo.",
                next: "abismo_coliseo"
            }
        ]
    },
    abismo_chippy: {
        text: "Solo hay una forma de conseguir lo que buscas.",
        image: "../images/monica.jpg",
        description: "Monica te revela que solo cruzando el coliseo vas a lograr conseguir a Chippy.",
        choices: [{
            text: "> Ir al coliseo de la muerte.",
            next: "abismo_coliseo"
        }, ]
    },
    abismo_coliseo: {
        text: "Roberto te escolta al coliseo.",
        image: "../images/coliseo.jpg",
        description: "'Acá teniamos planeado toda una seccion de combate pero por temas de tiempo tuvimos que recortarlo.'",
        choices: [{
            text: "> Entonces que se supone que hago ahora.",
            next: "abismo_coliseo2"
        }, ]
    },
    abismo_coliseo2: {
        text: "Cuando te das vuelta, Roberto ya no esta.",
        image: "../images/coliseo.jpg",
        description: "Algo raro esta pasando, logras ver a lo lejos un cartel que dice 'entrada a la maquina de probabilidades'.",
        choices: [{
            text: "> Es hora de terminar esto.",
            next: "abismo_maquina"
        }, ]
    },
    abismo_maquina: {
        text: "Entras a una habitacion llena de luces y botones.",
        image: "../images/maquina.jpg",
        description: "Te encontras frente a una pantalla gigante donde miles de lineas de codigo avanzan rapidisimo, un tablero con botones te invita a ser totalmente destruido.",
        choices: [{
                text: "> Meterle una patada voladora al tablero.",
                next: "abismo_probabilidades"
            },
            {
                text: "> Cabecear el teclado.",
                next: "abismo_probabilidades"
            }
        ]
    },
    abismo_probabilidades: {
        text: "La maquina explo-echo Shell script failure!undefined_command --explode.",
        image: "../images/maquina.jpg",
        description: "NullPointerException: Reality is null\nConcurrentModificationException: Timeline altered\nSegmentationFault: Core dumped\nFileNotFoundException: Sanity.txt not found\nOverflowError: Integer overflow in sanity check",
        choices: [{
                text: "> Ay no.",
                next: "nowhere"
            },
            {
                text: "> std::cout << 'Memory corruption detected!' << std::endl;.",
                next: "nowhere_final"
            }
        ]
    }
};