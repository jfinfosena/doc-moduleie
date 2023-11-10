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
/*
  Analog input, analog output, serial output

  Reads an analog input pin, maps the result to a range from 0 to 255 and uses
  the result to set the pulse width modulation (PWM) of an output pin.
  Also prints the results to the Serial Monitor.

  The circuit:
  - potentiometer connected to analog pin 0.
    Center pin of the potentiometer goes to the analog pin.
    side pins of the potentiometer go to +5V and ground
  - LED connected from digital pin 9 to ground through 220 ohm resistor

  created 29 Dec. 2008
  modified 9 Apr 2012
  by Tom Igoe

  This example code is in the public domain.

  https://www.arduino.cc/en/Tutorial/BuiltInExamples/AnalogInOutSerial
*/

// These constants won't change. They're used to give names to the pins used:
const int analogInPin = A0;  // Analog input pin that the potentiometer is attached to
const int analogOutPin = 9; // Analog output pin that the LED is attached to

int sensorValue = 0;        // value read from the pot
int outputValue = 0;        // value output to the PWM (analog out)

void setup() {
  // initialize serial communications at 9600 bps:
  Serial.begin(9600);
}

void loop() {
  // read the analog in value:
  sensorValue = analogRead(analogInPin);
  // map it to the range of the analog out:
  outputValue = map(sensorValue, 0, 1023, 0, 255);
  // change the analog out value:
  analogWrite(analogOutPin, outputValue);

  // print the results to the Serial Monitor:
  Serial.print("sensor = ");
  Serial.print(sensorValue);
  Serial.print("\t output = ");
  Serial.println(outputValue);

  // wait 2 milliseconds before the next loop for the analog-to-digital
  // converter to settle after the last reading:
  delay(2);
}
```

1. Ejemplo 2

```cpp copy
/*
  Blink

  Turns an LED on for one second, then off for one second, repeatedly.

  Most Arduinos have an on-board LED you can control. On the UNO, MEGA and ZERO
  it is attached to digital pin 13, on MKR1000 on pin 6. LED_BUILTIN is set to
  the correct LED pin independent of which board is used.
  If you want to know what pin the on-board LED is connected to on your Arduino
  model, check the Technical Specs of your board at:
  https://www.arduino.cc/en/Main/Products

  modified 8 May 2014
  by Scott Fitzgerald
  modified 2 Sep 2016
  by Arturo Guadalupi
  modified 8 Sep 2016
  by Colby Newman

  This example code is in the public domain.

  https://www.arduino.cc/en/Tutorial/BuiltInExamples/Blink
*/

// the setup function runs once when you press reset or power the board
void setup() {
  // initialize digital pin LED_BUILTIN as an output.
  pinMode(LED_BUILTIN, OUTPUT);
}

// the loop function runs over and over again forever
void loop() {
  digitalWrite(LED_BUILTIN, HIGH);   // turn the LED on (HIGH is the voltage level)
  delay(1000);                       // wait for a second
  digitalWrite(LED_BUILTIN, LOW);    // turn the LED off by making the voltage LOW
  delay(1000);                       // wait for a second
}
```

### Documentación adicional

- ESP32-C6-DevKitC-1 v1.2
  
[https://docs.espressif.com/projects/espressif-esp-dev-kits/en/latest/esp32c6/esp32-c6-devkitc-1/user_guide.html](https://docs.espressif.com/projects/espressif-esp-dev-kits/en/latest/esp32c6/esp32-c6-devkitc-1/user_guide.html)

- Datasheet
  
[https://www.espressif.com/sites/default/files/documentation/esp32-c6_datasheet_en.pdf](https://www.espressif.com/sites/default/files/documentation/esp32-c6_datasheet_en.pdf)













