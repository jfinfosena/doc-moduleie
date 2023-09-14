---
title: Módulo 16
hide_title: true
sidebar_position: 16
draft: false
---


## Módulo 01 - Aduino

### Descripción

El módulo 01 se enfoca en el uso de diferentes dispositivos y herramientas de hardware para el desarrollo de proyectos de sistemas embebidos e IoT. Este módulo incluye dos componentes principales:

Arduino™ MKR WiFi 1010: Esta tarjeta está equipada con WiFi y Bluetooth®, un microcontrolador ARM Cortex y un criptochip, lo que la hace una potente herramienta para el desarrollo de aplicaciones IoT. Cuenta con diversas características como pines digitales I/O, pines PWM, comunicación SPI, UART, I2C, I2S, pines de entrada y salida análoga, interrupciones externas, memoria flash y SRAM.

Tarjeta compatible Mega 2560 versión PRO Mini: Esta tarjeta basada en el microcontrolador ATMega 2560 es una versión compacta que cuenta con una interfaz USB-TTL en lugar de un conector USB. Tiene características como 70 pines digitales I/O, 16 entradas análogas, 14 pines PWM y 4 UART bus.

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

- Arduino™ MKR WiFi 1010
  
[https://store.arduino.cc/products/arduino-mkr-wifi-1010](https://store.arduino.cc/products/arduino-mkr-wifi-1010)

- Tarjeta compatible Mega 2560
  
[https://ja-bots.com/producto/arduino-mega-2560-pro-mini/](https://ja-bots.com/producto/arduino-mega-2560-pro-mini/)













