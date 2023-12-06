---
title: I2C-LCD
hide_title: true
sidebar_position: 43
draft: false
---
![Encabezado](https://firebasestorage.googleapis.com/v0/b/modulo-b3e1a.appspot.com/o/General%2Fimagenes%2Flogo%20sena%202.png?alt=media&token=f8400ade-f50e-4175-8ff1-d69a8bc9a180&_gl=1*1b8f15f*_ga*MTE3MTQwMjUxOS4xNjk2MjYzMDI3*_ga_CW55HF8NVT*MTY5NjI3NDM1NS4yLjEuMTY5NjI3NTE4My4zMS4wLjA.)

# **Módulo de interfaz serial I2C para pantallas LCD.**

El módulo de interfaz serial I2C para pantallas LCD es un dispositivo que permite conectar una pantalla LCD a una placa Arduino utilizando solo dos cables. Esto es posible gracias al protocolo I2C, que permite transmitir datos en serie a través de un bus compartido.

El uso del módulo I2C para pantallas LCD ofrece las siguientes ventajas:

- Reduce el número de cables necesarios. Las pantallas LCD tradicionales requieren 16 cables para su conexión a Arduino. El módulo I2C reduce este número a solo 2, lo que simplifica el cableado y reduce la posibilidad de errores.
- Libera pines de Arduino. Los pines de Arduino son un recurso limitado. El uso del módulo I2C permite liberar hasta 14 pines de Arduino para otros usos.
- Mejora la fiabilidad. Los cables son una fuente potencial de problemas. El uso del módulo I2C reduce el número de cables y, por lo tanto, el riesgo de fallos.

![I2C_LCD.](https://firebasestorage.googleapis.com/v0/b/modulo-b3e1a.appspot.com/o/General%2Fimagenes%2FRepositorio%2FI2C.jpg?alt=media&token=0ef5e749-87c3-4c53-b112-25f9cb75b0e8)

***Especificaciones:***

- Chip: PCF8574.
- Contiene 4 líneas de conexión.
- Contraste ajustable (potenciómetro o jumper).
- Compatible con pantallas: LCD 16x2 y 20x4.
- Rango de direcciones I2C: 0x20 a 0x27 (0x20 por defecto).
- Dimensiones: 41x19mm.
- Compatible con el protocolo I2C, por lo que puede compartir el bus con otros dispositivos.

***Pinout:***

![I2C_LCD_Pinout](https://firebasestorage.googleapis.com/v0/b/modulo-b3e1a.appspot.com/o/General%2Fimagenes%2FRepositorio%2FI2C-Pinout.png?alt=media&token=46514d2f-a662-4180-90f3-44aa16abfc0c).
- (Obtenido de: https://electronicsprojects.in/wp-content/uploads/2023/03/I2C-Serial-Interface-Module-Pinout-Image.png).

### Documentación adicional:

[Fuente 1.](https://electronicsprojects.in/components/i2c-serial-interface-module-pinout-and-projects/)

[Fuente 2.](https://www.eneka.com.uy/robotica/modulos-comunicacion/m%C3%B3dulo-interfaz-serail-i2c-detail.html#:~:text=El%20M%C3%B3dulo%20de%20interfaz%20serial,de%20sensores%20o%20tarjetas%20SD.)

[Libreria.](https://firebasestorage.googleapis.com/v0/b/modulo-b3e1a.appspot.com/o/General%2Fimagenes%2FRepositorio%2FLiquidCrystal_I2C.zip?alt=media&token=3b8f55f5-a2e6-43aa-8323-388a483d0678)