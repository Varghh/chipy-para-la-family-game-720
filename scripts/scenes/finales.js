const scenesFinales = {
    fincasamiento: {
        text: "La caprichosa acepta tu propuesta.",
        image: "../images/casamiento.jpg",
        description: "FINAL 1\nEste es el comienzo de una hermosa relacion... ahora rinden 2 kilometros por litro.",
        choices: [{
            text: "> Momento, no tengo registro.",
            next: "inicio"
        }]
    },
    fincarpincho: {
        text: "La re quedaste.",
        image: "../images/tumba.jpg",
        description: "FINAL 2\nEl carpincho materializa una 45 y te revienta de 2 tiros.",
        choices: [{
            text: "> Mal ahi.",
            next: "inicio"
        }, ]
    },
    fintexto: {
        text: "¿Ah no? Aca tenes el alien.",
        image: "../images/alien.jpg",
        description: "FINAL 3\nEl alien vuelve, te rapta y te usa para ver cuantos matafuegos entran en el caquero.",
        choices: [{
            text: "> Bueh.",
            next: "inicio"
        }, ]
    },
    llorar: {
        text: "Patetico.",
        image: "../images/sol.jpg",
        description: "FINAL 4\nNo puedes seguir así.",
        choices: [{
            text: "> Despertarse.",
            next: "inicio"
        }, ]
    },
    abismo_final: {
        text: "Nunca le creas a una lagartija en patineta.",
        image: "../images/panqueque.jpg",
        description: "FINAL 5\nEl suelo te abraza con todo su amor, no hace falta que te describa que pasa despues.",
        choices: [{
            text: "> Que bicho de mierda.",
            next: "inicio"
        }, ]
    },
    abismo_finalmedia: {
        text: "Respuesta incorrecta.",
        image: "../images/tumba.jpg",
        description: "FINAL 7\nRoberto saca un celular chino y te frita el cerebro con sus ondas 5g.",
        choices: [{
            text: "> Que.",
            next: "inicio"
        }, ]
    },
    abismo_pelafinal: {
        text: "Te quedas con el actor de Rapido y Furioso vendiendo seguros por la eternidad.",
        image: "../images/monica2.jpg",
        description: "FINAL 8\nTus dias pasan y no dejas de preguntarte porque nunca entiente porque le decis Toretto.",
        choices: [{
            text: "> Que grande la roca.",
            next: "inicio"
        }, ]
    },
    nowhere_final: {
        text: "public static void main(String[] args) {.",
        image: "../images/maquina.jpg",
        description: "FINAL 9\n101010101010 binary overload 01010101\nHEX: DE AD BE EF CA FE BA BE\nNoSuchMethodError: explode() method not found\nZeroDivisionError: Division by zero (universe imploding)",
        choices: [{
            text: "> System.exit(0);",
            next: "inicio"
        }, ]
    },
    final_home: {
        text: "Abrís los ojos en tu habitación.",
        image: "../images/chippy.jpg",
        description: "FINAL10\nSobre tu mesa hay un cartucho de Chipy para la Family Game 720. Al lado hay una media vieja y un mate tapado... Sonreis...\nSuperaste todos los obstaculos\nMientras el juego enciende, pones tu mano sobre la pantalla, se siente caliente, como la carne... pero no es carne...\naun no.",
        choices: [{
            text: "> FIN...",
            next: "inicio"
        }]
    },
    final_void: {
        text: "Decidís quedarte en el vacío.",
        image: "../images/nowhere.jpg",
        description: "'FINAL 11\nBienvenido al equipo, tu siguiente historia comienza ahora...'\nEl narrador te toma de la mano y te lleva a un lugar donde las historias no terminan nunca, donde las ranas tiran fireballs, las medias en la cabeza son moda y tu estupidez no tiene limites.\nGracias por jugar a Chipy para la Family Game 720.",
        choices: [{
            text: "> Que buen final.",
            next: "inicio"
        }]
    }
};