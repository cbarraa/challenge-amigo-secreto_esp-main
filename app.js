// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
/* Se crear el arregla amigos*/
let amigos = [];

/* Realizamos una función para Agregar Amigos a la lista */
function agregarAmigo() {
    /* Lo agregamos en el input id="amigo" del html*/
    let input = document.getElementById("amigo");
    /* método .trim(), obtiene el valor del input y elimina espacios en blanco al inicio y al final, 
    asegurando que el nombre ingresado sea válido y limpio.*/
    let nombre = input.value.trim();
    
    /* En caso de no ingresar ningún nombre, el sistema le mostrara un mensaje*/
    if (nombre === "") {
        alert("Por favor, ingresa un nombre al Desafio de Amigo Secreto.");
        return;
    }
    
    /* En caso de ingresar un nombre existente, el sistema le mostrara un mensaje*/
    if (amigos.includes(nombre)) {
        alert("Este nombre ya está en la lista del Desafio de Amigo Secreto.");
        return;
    }
    
    /* Agrega un nuevo nombre al final del array amigos utilizando el método .push() */
    amigos.push(nombre);
    /* Actualiza la lista de amigos en la interfaz de usuario. */
    actualizarLista();
    /* Limpiar el campo después de agregar */
    input.value = ""; 
}

/* Actualizar la lista de amigos en la página web, asegurando que los nombres ingresados se muestren correctamente. */
function actualizarLista() {
    /* Lo agregamos en el input id="listaAmigos" del html*/
    let lista = document.getElementById("listaAmigos");
    /*  Limpiar la lista antes de actualizar. Esto elimina el contenido anterior de la lista para evitar que los nombres se dupliquen. */
    lista.innerHTML = "";
    /* Del array "amigos" con los nombres ingresardos. forEach, recorre cada nombre en el array. */
    amigos.forEach(nombre => {
        /* document.createElement("li"): Crea un nuevo <li>. */
        let li = document.createElement("li");
        /* li.textContent = nombre: Asigna el nombre al <li>. */
        li.textContent = nombre;
        /* appendChild(li) inserta cada <li> dentro del <ul> (listaAmigos). */
        lista.appendChild(li);
    });
}

/* Esta función selecciona un nombre aleatorio de la lista de amigos y lo muestra en la página web como el "Amigo Secreto". */
function sortearAmigo() {
    /* Verificar si la lista de amigos está vacía */
    if (amigos.length === 0) {
        alert("Agrega al menos un nombre antes de sortear.");
        return;
    }
    /* Generar un índice aleatorio */
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    /* Seleccionar al amigo secreto */
    let amigoSecreto = amigos[indiceAleatorio];
    
    /* Mostrar el resultado en la página */
    /* Obtiene el elemento <ul> con id="resultado" en el HTML */
    let resultado = document.getElementById("resultado");
    /* Inserta un <li> dentro de <ul> con el nombre del amigo secreto. */
    resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${amigoSecreto}</strong> 🎉</li>`;
}