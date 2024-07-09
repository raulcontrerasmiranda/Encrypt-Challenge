document.addEventListener('DOMContentLoaded', () => {
    const encryptBtn = document.getElementById('encrypt-btn');
    const decryptBtn = document.getElementById('decrypt-btn');
    const copyBtn = document.getElementById('copy-btn');
    const inputText = document.getElementById('input-text');
    const outputText = document.getElementById('output-text');
    const placeholder = document.getElementById('placeholder');
    const outputSection = document.getElementById('output-section');

    const rot13 = (char) => {
        const input = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        const output = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
        const index = input.indexOf(char);
        return index > -1 ? output[index] : char;
    };

    const shiftPositions = (text, shiftBy) => {
        return text.split('').map((char) => {
            return String.fromCharCode(char.charCodeAt(0) + shiftBy);
        }).join('');
    };

    const encryptionAlgorithm = (text) => {
        // Paso 1: Aplicar ROT13
        let encrypted = text.split('').map(rot13).join('');

        // Paso 2: Invertir el texto
        encrypted = encrypted.split('').reverse().join('');

        // Paso 3: Desplazar las posiciones de los caracteres
        encrypted = shiftPositions(encrypted, 3);

        return encrypted;
    };

    const decryptionAlgorithm = (text) => {
        // Paso 1: Desplazar las posiciones de los caracteres hacia atrás
        let decrypted = shiftPositions(text, -3);

        // Paso 2: Invertir el texto
        decrypted = decrypted.split('').reverse().join('');

        // Paso 3: Aplicar ROT13 de nuevo
        decrypted = decrypted.split('').map(rot13).join('');

        return decrypted;
    };

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text).catch(err => {
            console.error('Error al copiar el texto: ', err);
        });
    };

    const containsInvalidCharacters = (text) => {
        const invalidCharPattern = /[^a-z\s]/;
        return invalidCharPattern.test(text);
    };

    const handleEncryption = () => {
        const text = inputText.value;
        if (containsInvalidCharacters(text)) {
            alert('El texto contiene mayúsculas o caracteres especiales. Por favor, ingrese solo letras minúsculas y sin acentos.');
            return;
        }
        if (text.trim() === '') return;
        const encryptedText = encryptionAlgorithm(text);
        outputText.textContent = encryptedText;
        placeholder.style.display = 'none';
        outputText.style.display = 'block';
        copyBtn.style.display = 'block';
    };

    const handleDecryption = () => {
        const text = inputText.value;
        if (containsInvalidCharacters(text)) {
            alert('El texto contiene mayúsculas o caracteres especiales. Por favor, ingrese solo letras minúsculas y sin acentos.');
            return;
        }
        if (text.trim() === '') return;
        const decryptedText = decryptionAlgorithm(text);
        outputText.textContent = decryptedText;
        placeholder.style.display = 'none';
        outputText.style.display = 'block';
        copyBtn.style.display = 'block';
    };

    encryptBtn.addEventListener('click', handleEncryption);
    decryptBtn.addEventListener('click', handleDecryption);

    copyBtn.addEventListener('click', () => {
        copyToClipboard(outputText.textContent);
    });
});
