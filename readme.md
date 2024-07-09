# Proyecto: Encriptador y Desencriptador de Textos

## Descripción del Proyecto

Este proyecto es una aplicación web que permite encriptar y desencriptar textos. Está diseñado para que el usuario pueda ingresar un texto en un área de entrada y, mediante botones, aplicar un algoritmo de encriptación o desencriptación. El texto resultante se muestra en un área de salida y se puede copiar al portapapeles con un botón de copia.

## Funcionalidades

1. **Área de Entrada de Texto**: 
   - Un campo de texto donde los usuarios pueden ingresar el texto que desean encriptar o desencriptar.

2. **Botones de Encriptar y Desencriptar**: 
   - Dos botones que permiten aplicar el algoritmo de encriptación o desencriptación al texto ingresado.

3. **Área de Salida de Texto**: 
   - Un área donde se muestra el texto encriptado o desencriptado.

4. **Botón de Copiar**: 
   - Un botón que permite copiar el texto encriptado o desencriptado al portapapeles.

5. **Mensaje de Advertencia**: 
   - Un mensaje que informa al usuario que solo se permiten letras minúsculas y sin acentos, acompañado de un icono de advertencia.

## Algoritmo de Encriptación y Desencriptación

El algoritmo de encriptación y desencriptación utilizado en esta aplicación realiza los siguientes pasos:

1. **Encriptación**:
   - **Sustitución de caracteres usando ROT13**: Cada letra del alfabeto se reemplaza por la letra 13 posiciones adelante en el alfabeto.
   - **Inversión de texto**: El texto resultante de la sustitución se invierte.
   - **Desplazamiento de caracteres**: Todos los caracteres se desplazan en sus posiciones por un valor fijo.

2. **Desencriptación**:
   - **Desplazamiento de caracteres hacia atrás**: Se invierte el desplazamiento aplicado durante la encriptación.
   - **Inversión de texto**: El texto resultante del desplazamiento se invierte nuevamente.
   - **Sustitución de caracteres usando ROT13**: Se aplica nuevamente ROT13 para recuperar el texto original.

## Diseño de la Interfaz

La interfaz está diseñada para ser intuitiva y fácil de usar. Incluye:
- Un campo de texto para ingresar el texto.
- Botones claramente etiquetados para encriptar y desencriptar.
- Un área de salida donde se muestra el resultado.
- Un botón para copiar el texto resultante.
- Un mensaje de advertencia para informar sobre las restricciones de entrada de texto.

## Requisitos

Para ejecutar este proyecto, solo necesitas un navegador web moderno que soporte HTML, CSS y JavaScript.

## Instrucciones de Uso

1. Abra la aplicación en su navegador web.
2. Ingrese el texto que desea encriptar o desencriptar en el campo de texto.
3. Haga clic en el botón correspondiente ("Encriptar" o "Desencriptar") para ver el resultado en el área de salida.
4. Si desea copiar el texto resultante, haga clic en el botón "Copiar".
5. Asegúrese de ingresar solo letras minúsculas y sin acentos para evitar errores.

Esperamos que encuentre útil esta herramienta de encriptación y desencriptación de textos.
