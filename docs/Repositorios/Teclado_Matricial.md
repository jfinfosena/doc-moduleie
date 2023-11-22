---
title: Teclado Matricial
hide_title: true
sidebar_position: 32
draft: false
---
![Encabezado](https://firebasestorage.googleapis.com/v0/b/modulo-b3e1a.appspot.com/o/General%2Fimagenes%2Flogo%20sena%202.png?alt=media&token=f8400ade-f50e-4175-8ff1-d69a8bc9a180&_gl=1*1b8f15f*_ga*MTE3MTQwMjUxOS4xNjk2MjYzMDI3*_ga_CW55HF8NVT*MTY5NjI3NDM1NS4yLjEuMTY5NjI3NTE4My4zMS4wLjA.)

# **Teclado Matricial**

*El teclado matricial 4x4 es un dispositivo de entrada de usuario que consta de 16 teclas dispuestas en una matriz de 4 filas y 4 columnas. Se caracteriza por su reducido tamaño y su facilidad de instalación, gracias a su cubierta adhesiva.*

El teclado está formado por una matriz de pulsadores que se activan al presionarlos. Para leer la tecla que ha sido pulsada, se debe de realizar un barrido de las filas, activando cada fila a la vez y leyendo los pines de las columnas.

El teclado matricial 4x4 puede ser conectado a cualquier microcontrolador o tarjeta de desarrollo, utilizando 8 pines digitales. Es compatible con los microcontroladores de 3.3V y 5V.

La programación del teclado matricial 4x4 se realiza mediante un barrido de las filas. Si bien es posible realizar este procedimiento dentro del loop principal del programa, es una mejor práctica realizar el barrido utilizando interrupciones por TIMER.

![Teclado_Matricial](https://firebasestorage.googleapis.com/v0/b/modulo-b3e1a.appspot.com/o/General%2Fimagenes%2FRepositorio%2Fteclado%20matricial.webp?alt=media&token=09b92e45-0190-4f7a-a4e1-58ff750a729b)

***Especificaciones:***

- 16 botones con organización matricial (4 filas x 4 columnas).
- Teclado tipo membrana.
- Mayor resistencia al agua y al polvo.
- Auto adhesivo en la parte de atrás.
- Tiempo de rebote (Bounce time): ≤5 ms.
- Máximo voltaje operativo: 24 V DC.
- Máxima corriente operativa: 30 mA.
- Resistencia de aislamiento: 100 MΩ (@ 100 V).
- Voltaje que soporta el dieléctrico: 250 VRMS (@ 60Hz, por 1 min).
- Expectativa de vida: 1.000.000 de operaciones.
- Dimensiones teclado: 69*77mm.
- Cable de cinta plana de 8.5 cm de largo aprox. (incluido el conector).
- Conector tipo DuPont hembra de una fila y 8 contactos con separación estándar 0.1" (2.54mm).
- Temperatura de operación: 0 a 50 °C.

***Pinout:***

![Teclado_Matricial_pinout](https://firebasestorage.googleapis.com/v0/b/modulo-b3e1a.appspot.com/o/General%2Fimagenes%2FRepositorio%2Fteclado%20matricial%204x4%20pinout.png?alt=media&token=56b005c3-af56-4b9b-b1db-60858d2d934e)

### Documentación adicional:

[Fuente 1.](https://naylampmechatronics.com/interfaz-de-usuario/19-teclado-matricial-4x4-tipo-membrana.html)

[Fuente 2.](https://www.parallax.com/product/4x4-matrix-membrane-keypad/)

[Ficha técnica.](https://firebasestorage.googleapis.com/v0/b/modulo-b3e1a.appspot.com/o/General%2Fimagenes%2FRepositorio%2F27899-4x4-Matrix-Membrane-Keypad-v1.2.pdf?alt=media&token=6e05db36-672d-42b9-8521-b10a0df2eeb0)

