const scenesNowhere = {
    nowhere: {
        text: "Te despertas en la nada misma.",
        image: "../images/nowhere.jpg",
        description: "El espacio y tiempo se fueron al carajo. Flotás y flotas. Una voz que te re suena empieza a hablar.",
        choices: [{
                text: "> ¿Hola susana?",
                next: "nowhere_voz"
            },
            {
                text: "> ¿Roberto?",
                next: "nowhere_roberto"
            }
        ]
    },
    nowhere_roberto: {
        text: "La voz se caga de risa.",
        image: "../images/nowhere.jpg",
        description: "'¿Roberto? Nah, ese está al pedo escribiendo manifiestos sobre usar medias en la cabeza. Soy alto personaje, el más picante.'",
        choices: [{
            text: "> ¿Batman?",
            next: "nowhere_voz"
        }]
    },
    nowhere_voz: {
        text: "Posta, es el narrador del juego.",
        image: "../images/nowhere.jpg",
        description: "'Che... ya sé que es medio turbio todo esto. Rompiste toda la matrix y el universo está tratando de no irse a la mierda. ¿Te acordás por qué arrancó todo este quilombo?'",
        choices: [{
                text: "> Por el Chipy para la Family Game 720...",
                next: "nowhere_significado"
            },
            {
                text: "> Por tu culpa, gil, vos me mandaste.",
                next: "nowhere_culpa"
            }
        ]
    },
    nowhere_culpa: {
        text: "El narrador suspira.",
        image: "../images/nowhere.jpg",
        description: "'¿Mi culpa? Yo solo escribo sobre lo que VOS elegís. Podrías haberte quedado laburando, pero NO, tenías que ir a buscar un jueguito.'",
        choices: [{
                text: "> Nah, tenés razón, mala mía.",
                next: "nowhere_significado"
            },
            {
                text: "> ¿No era que mis desiciones no importan?",
                next: "nowhere_meta"
            }
        ]
    },
    nowhere_meta: {
        text: "El narrador se queda mudo.",
        image: "../images/nowhere.jpg",
        description: "'...fa, ok tenes razon. Pero dale, admití que la pasaste bien, una riza al menos te saque, no?'",
        choices: [{
                text: "> Un poquito.",
                next: "nowhere_significado"
            },
            {
                text: "> GOTY.",
                next: "nowhere_significado"
            }
        ]
    },
    nowhere_significado: {
        text: "El narrador se ríe.",
        image: "../images/nowhere.jpg",
        description: "'Es gracioso... alto viaje por un jueguito. ¿Pero sabés qué? La posta fueron los carpinchos que conocimos en el camino... y las medias en la zabeca.'",
        choices: [{
                text: "> Las aventuras son los amigos que conocimos en el camino.",
                next: "nowhere_amigos"
            },
            {
                text: "> ¿Puedo tener mi juegubi ahora?.",
                next: "nowhere_juego"
            }
        ]
    },
    nowhere_amigos: {
        text: "El narrador aplaude como foca emocionada.",
        image: "../images/nowhere.jpg",
        description: "'¡Viste! Igual técnicamente solo charlaste con código que escribí medio en pedo'",
        choices: [{
            text: "> Bueh pedilo",
            next: "nowhere_juego"
        }]
    },
    nowhere_juego: {
        text: "El narrador se hace el dolido mal.",
        image: "../images/nowhere.jpg",
        description: "'Después de todo lo que vivimos juntos... Como te ven te tratan diria una vieja, pero bueno, te entiendo.'",
        choices: [{
            text: "> ¿Ahora te hacés el bueno? Antes eras re garca",
            next: "nowhere_choice"
        }]
    },
    nowhere_choice: {
        text: "Una luz tenue te abraza.",
        image: "../images/nowhere.jpg",
        description: "'Soy el mismo, pero uno siempre se relaja cuando esta llegando al final de las cosas... El camino fue bastante estresante, ¿no? Bueno, ahora tenés dos opciones: volver a casa con Chipy o quedarte en este vacío eterno conmigo, tenemos muchas historias para contar aun, y no me vendria mal una ayuda.'",
        choices: [{
                text: "> Volver a casa con Chipy",
                next: "final_chippy"
            },
            {
                text: "> Quedarse en el void",
                next: "final_void"
            }
        ]
    }
};