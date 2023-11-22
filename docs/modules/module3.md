---
title: Módulo 3
hide_title: true
sidebar_position: 3
draft: false
---


## Módulo 03 - ESP32-C6

### Descripción

El módulo 03 se enfoca en el uso de diferentes dispositivos y herramientas de hardware para el desarrollo de proyectos de sistemas embebidos e IoT. Este módulo incluye un componente principal:

El ESP32-C6 es un nuevo procesador lanzado por Espressif Systems. Este miembro de la familia ESP32 incorpora en un mismo SoC comunicaciones por Wi-Fi 6 de 2.4 GHz, Bluetooth 5 (LE) y por protocolo 802.15.41.

![img](https://docs.espressif.com/projects/espressif-esp-dev-kits/en/latest/_images/esp32-c6-devkitc-1-isometric_v1.2.png)

Entre sus especificaciones encontramos un procesador Single-Core RISC-V de 32 bits de altas prestaciones hasta 160 MHz y un procesador RISC-V de 32 bits de bajo consumo de hasta 20 MHz. Cuenta con una memoria ROM de 320KB, una SRAM de 512KB y la habitual memoria flash externa1. En cuanto a conexiones, el ESP32-C6 cuenta con 30 (QFN40) o 22 (QFN32) pines programables (GPIO).

El ESP32-C6 destaca por su conectividad inalámbrica. Es compatible con Wi-Fi 6, Bluetooth 5 (BLE) y IEEE 802.15.41. Esto significa que puede comunicarse mediante Zigbee o Thread, ambos muy empleados en el ámbito de IoT.

![img](https://www.espressif.com/sites/all/themes/espressif/images/esp32-c6/esp32-c6-overview.png)

En cuanto a opciones para programación el ESP32-C6 será compatible con el ESP-IDF, el entorno de desarrollo Open Source de Espressif. Sin embargo, habrá que esperar a su versión v5.1, que actualmente se encuentra en desarrollo.

Actualmente el módulo ESP32-C6 y su placa de desarrollo ESP32-C6 DevKitC-1 viene acompañada con 8Mb de memoria flash, 23 GPIO accesibles, dos puertos USB-C, dos botones y un LED RGB.

El ESP32-C6 es un sistema en chip (SoC) de alto rendimiento y bajo consumo de energía diseñado para una amplia gama de aplicaciones, incluidas las casas inteligentes, la automatización industrial, la atención médica y los productos electrónicos de consumo. Se basa en la arquitectura RISC-V y cuenta con un procesador de doble núcleo, una GPU potente y una amplia gama de periféricos.

Características:
Procesador de doble núcleo RISC-V: El ESP32-C6 cuenta con un procesador de doble núcleo RISC-V con una velocidad de reloj de hasta 160 MHz. Esto lo convierte en una plataforma potente para ejecutar una amplia gama de aplicaciones.

Wi-Fi 6 y Bluetooth 5: El ESP32-C6 admite Wi-Fi 6 y Bluetooth 5, lo que lo convierte en una excelente opción para aplicaciones que requieren una conectividad inalámbrica de alta velocidad.

Bajo consumo de energía: El ESP32-C6 está diseñado para un bajo consumo de energía, lo que lo hace ideal para aplicaciones con batería.

Amplia gama de periféricos: El ESP32-C6 incluye una amplia gama de periféricos, como ADC, DAC, UART, SPI, I2C y GPIO. Esto lo convierte en una plataforma versátil que se puede utilizar para una amplia gama de aplicaciones.

Aplicaciones:
Casas inteligentes: El ESP32-C6 se puede utilizar para desarrollar una amplia gama de aplicaciones para el hogar inteligente, como iluminación inteligente, termostatos inteligentes y sistemas de seguridad inteligentes.
Automatización industrial: El ESP32-C6 se puede utilizar para desarrollar aplicaciones de automatización industrial, como monitoreo de máquinas, control de procesos y mantenimiento predictivo.
Atención médica: El ESP32-C6 se puede utilizar para desarrollar aplicaciones de atención médica, como dispositivos portátiles, sistemas de monitoreo de pacientes y diagnósticos remotos.
Productos electrónicos de consumo: El ESP32-C6 se puede utilizar para desarrollar una amplia gama de aplicaciones de productos electrónicos de consumo, como altavoces inteligentes, televisores inteligentes y electrodomésticos inteligentes.

En general, el ESP32-C6 es un SoC potente y versátil que es ideal para una amplia gama de aplicaciones. Es una excelente opción para los desarrolladores que buscan una plataforma de alto rendimiento y bajo consumo de energía con una amplia gama de funciones.

Aquí hay algunos ejemplos específicos de cómo se puede utilizar el ESP32-C6:

Una casa inteligente podría utilizar el ESP32-C6 para controlar la iluminación, el termostato y la seguridad.
Una fábrica podría utilizar el ESP32-C6 para monitorear las máquinas y controlar los procesos.
Un hospital podría utilizar el ESP32-C6 para controlar los dispositivos médicos y recopilar datos de pacientes.
Un consumidor podría utilizar el ESP32-C6 para controlar un altavoz inteligente, un televisor inteligente o un electrodoméstico inteligente.


### Diagramas esquemáticos

[![](https://firebasestorage.googleapis.com/v0/b/modulo-b3e1a.appspot.com/o/M%C3%B3dulo%201%2Fimg1.svg?alt=media&token=455e1aa8-8e5b-4e28-a3ce-af0367203e81)](https://firebasestorage.googleapis.com/v0/b/modulo-b3e1a.appspot.com/o/M%C3%B3dulo%201%2Fimg1.svg?alt=media&token=455e1aa8-8e5b-4e28-a3ce-af0367203e81)


### Hardware

#### PCB

[![](https://firebasestorage.googleapis.com/v0/b/modulo-b3e1a.appspot.com/o/M%C3%B3dulo%201%2Fimg2.png?alt=media&token=8222babf-fa75-46b1-b77a-78c0eb1936a9)](https://firebasestorage.googleapis.com/v0/b/modulo-b3e1a.appspot.com/o/M%C3%B3dulo%201%2Fimg2.png?alt=media&token=8222babf-fa75-46b1-b77a-78c0eb1936a9)


### Software

#### Ejemplos

1. Ejemplo 1

```cpp copy

// Blink ESP32 Wroom (ESP32 DEVKIT V1)
const int led =  2;     
  
void setup() {
  pinMode(led, OUTPUT);
void setup() {
  pinMode(led, OUTPUT);  // led de usuario
}

void loop() {
  digitalWrite(led, HIGH);
  delay(500);
  digitalWrite(led, LOW);
  delay(500);
}

```

1. Ejemplo 2

```cpp copy

// Uso del RGB con ESP32-C3. >> blanco, rojo, verde y azul >>

#define RGB_BRIGHTNESS 64  // Cambiar el brillo de blanco, maximo 255
#define LED_RGB 8   // Pin del Led RGB en la tarjeta

void setup() {
  // No need to initialize the RGB LED
}

void loop() {
  digitalWrite(LED_RGB, HIGH);  // Turn the RGB LED white
  delay(1000);
  digitalWrite(LED_RGB, LOW);  // Turn the RGB LED off
  delay(1000);
  neopixelWrite(LED_RGB, RGB_BRIGHTNESS, RGB_BRIGHTNESS, RGB_BRIGHTNESS);  // Blanco
  delay(1000);
  neopixelWrite(LED_RGB, RGB_BRIGHTNESS, 0, 0);  // Rojo
  delay(1000);
  neopixelWrite(LED_RGB, 0, RGB_BRIGHTNESS, 0);  // Verde
  delay(1000);
  neopixelWrite(LED_RGB, 0, 0, RGB_BRIGHTNESS);  // Azul
  delay(1000);
}

```

### Documentación adicional

- ESP32-C6-DevKitC-1 v1.2
  
[https://docs.espressif.com/projects/espressif-esp-dev-kits/en/latest/esp32c6/esp32-c6-devkitc-1/user_guide.html](https://docs.espressif.com/projects/espressif-esp-dev-kits/en/latest/esp32c6/esp32-c6-devkitc-1/user_guide.html)

- Datasheet
  
[https://www.espressif.com/sites/default/files/documentation/esp32-c6_datasheet_en.pdf](https://www.espressif.com/sites/default/files/documentation/esp32-c6_datasheet_en.pdf)













