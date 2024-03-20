function encriptar() {
    let textoOriginal = document.getElementById("textoOriginal").value.toLowerCase(); // Convertir a minúsculas
    // Verificar si el texto contiene mayúsculas o caracteres especiales
    if (/[^a-z\s]/.test(textoOriginal)) {
        alert("Ud ha ingresado mayúsculas o caracteres especiales.");
        return;
    }

    let palabras = textoOriginal.split(" "); // Dividir el texto en palabras
    let textoEncriptado = '';

    palabras.forEach(palabra => {
        for (let i = 0; i < palabra.length; i++) {
            let caracter = palabra.charAt(i);
            switch (caracter) {
                case 'a':
                    textoEncriptado += 'ai';
                    break;
                case 'e':
                    textoEncriptado += 'enter';
                    break;
                case 'i':
                    textoEncriptado += 'imes';
                    break;
                case 'o':
                    textoEncriptado += 'ober';
                    break;
                case 'u':
                    textoEncriptado += 'ufat';
                    break;
                default:
                    textoEncriptado += caracter;
            }
        }
        textoEncriptado += ' '; // Agregar espacio entre palabras encriptadas
    });

    document.getElementById("textoEncriptado").value = textoEncriptado.trim(); // Eliminar espacio al final
    document.getElementById("copiarTextoEncriptado").classList.remove("oculto");
    document.getElementById("textoOriginal").value = ""; // Borrar el texto original
}


function desencriptar() {
    let textoEncriptado = document.getElementById("textoEncriptado").value.toLowerCase(); // Convertir a minúsculas

    let palabras = textoEncriptado.split(" "); // Dividir el texto en palabras
    let textoDesencriptado = '';

    palabras.forEach(palabra => {
        let palabraDesencriptada = '';
        for (let i = 0; i < palabra.length; i++) {
            let caracter = palabra.charAt(i);
            if (caracter === 'a' && palabra.charAt(i + 1) === 'i') {
                palabraDesencriptada += 'a';
                i++;
            } else if (caracter === 'e' && palabra.substring(i, i + 5) === 'enter') {
                palabraDesencriptada += 'e';
                i += 4;
            } else if (caracter === 'i' && palabra.substring(i, i + 4) === 'imes') {
                palabraDesencriptada += 'i';
                i += 3;
            } else if (caracter === 'o' && palabra.substring(i, i + 4) === 'ober') {
                palabraDesencriptada += 'o';
                i += 3;
            } else if (caracter === 'u' && palabra.substring(i, i + 4) === 'ufat') {
                palabraDesencriptada += 'u';
                i += 3;
            } else {
                palabraDesencriptada += caracter;
            }
        }
        textoDesencriptado += palabraDesencriptada + ' '; // Agregar espacio entre palabras desencriptadas
    });

    document.getElementById("textoOriginal").value = textoDesencriptado.trim(); // Mostrar texto desencriptado
    document.getElementById("textoEncriptado").value = ""; // Borrar el texto encriptado
}

