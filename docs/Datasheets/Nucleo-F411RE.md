---
title: Nucleo F411RE
hide_title: true
sidebar_position: 15
draft: false
---
![Encabezado](https://firebasestorage.googleapis.com/v0/b/modulo-b3e1a.appspot.com/o/General%2Fimagenes%2Flogo%20sena%202.png?alt=media&token=f8400ade-f50e-4175-8ff1-d69a8bc9a180&_gl=1*1b8f15f*_ga*MTE3MTQwMjUxOS4xNjk2MjYzMDI3*_ga_CW55HF8NVT*MTY5NjI3NDM1NS4yLjEuMTY5NjI3NTE4My4zMS4wLjA.)

# **Nucleo-F411RE**

Claro, aquí está la información traducida al español:

La placa STM32 Nucleo-64 ofrece una forma asequible y flexible para que los usuarios prueben nuevos conceptos y creen prototipos al elegir entre las diversas combinaciones de características de rendimiento y consumo de energía, proporcionadas por el microcontrolador STM32. Para las placas compatibles, el SMPS externo reduce significativamente el consumo de energía en el modo de ejecución.

La compatibilidad con la conectividad ARDUINO® Uno V3 y los cabezales morfológicos ST permiten ampliar fácilmente la funcionalidad de la plataforma de desarrollo abierto STM32 Nucleo con una amplia variedad de shields especializados.

La placa STM32 Nucleo-64 no requiere ninguna sonda separada, ya que integra el depurador/programador ST-LINK.

La placa STM32 Nucleo-64 viene con las completas bibliotecas de software libre STM32 y los ejemplos disponibles con el paquete MCU STM32Cube.

![Nucleo-F411RE](https://firebasestorage.googleapis.com/v0/b/modulo-b3e1a.appspot.com/o/General%2Fimagenes%2FRepositorio%2FNucleoF411re.jpg?alt=media&token=456f4954-e4fa-49d5-9bf1-3d636bf75967)

***Especificaciones***

**Suministro de energía**

* 1,7 V a 3,6 V

**Rango de temperatura**

* -40°C a 85/105/125 °C

**Núcleo**

* CPU Arm® 32-bit Cortex®-M4 con FPU
* Acelerador de tiempo real adaptable (ART Accelerator™) que permite la ejecución de 0-wait state desde la memoria Flash
* Frecuencia de hasta 100 MHz
* Unidad de protección de memoria
* 125 DMIPS/1.25 DMIPS/MHz (Dhrystone 2.1)
* Instrucciones DSP

**Memorias**

* Hasta 512 Kbytes de memoria Flash
* 128 Kbytes de SRAM

**Gestión de reloj, reinicio y suministro**

* Suministro de aplicación e I/Os de 1,7 V a 3,6 V
* POR, PDR, PVD y BOR
* Osciloscopio de cristal de 4 a 26 MHz
* RC de fábrica de 16 MHz interno
* Osciloscopio de 32 kHz para RTC con calibración
* RC de 32 kHz interno con calibración

**Consumo de energía**

* Ejecución: 100 μA/MHz (periférico apagado)
* Parada (Flash en modo de parada, tiempo de activación rápido): 42 μA Typ @ 25C; 65 μA máx. @25 °C
* Parada (Flash en modo de apagado profundo, tiempo de activación lento): hasta 9 μA a 25 °C; 28 μA máx. @25 °C
* En espera: 1.8 μA @25 °C / 1.7 V sin RTC; 11 μA @85 °C @1.7 V
* Suministro VBAT para RTC: 1 μA @25 °C

**Convertidor A/D**

* 1×12-bit, 2.4 MSPS A/D converter: up to 16 channels

**DMA de propósito general**

* Controladores DMA de 16 canales con FIFOs y soporte de ráfagas

**Temporizadores**

* Hasta 11 temporizadores: hasta seis temporizadores de 16 bits, dos temporizadores de 32 bits hasta 100 MHz, cada uno con hasta cuatro entradas IC/OC/PWM o contadores de pulsos y codificador cuadrático (incremental), dos temporizadores de vigilancia (independiente y de ventana) y un temporizador SysTick

**Modo de depuración**

* Interfaces de depuración de cable serie (SWD) y JTAG
* Cortex®-M4 Embedded Trace Macrocell™

**Puertos de E/S**

* Hasta 81 puertos de E/S con capacidad de interrupción
* Hasta 78 E/S rápidas de hasta 100 MHz
* Hasta 77 E/S tolerantes a 5 V

**Interfaces de comunicación**

* Hasta 13 interfaces de comunicación
* Hasta 3 interfaces I2C (SMBus/PMBus)
* Hasta 3 USARTs (2 x 12.5 Mbit/s, 1 x 6.25 Mbit/s), interfaz ISO 7816, LIN, IrDA, control de módem)
* Hasta 5 SPI/I2Ss (hasta 50 Mbit/s, protocolo de audio SPI o I2S), SPI2 y SPI3 con I2S full-duplex multiplexado para lograr precisión de clase de audio a través de PLL de audio interno o reloj externo
* Interfaz SDIO (SD/MMC/eMMC)

**Conectividad avanzada**

* Controlador de dispositivo/host/OTG USB 2.0 de alta velocidad con PHY en chip

**Otras características**

* Unidad de cálculo CRC
* ID único de 96 bits
* RTC: precisión de subsegundos, calendario de hardware
* Todos los paquetes (WLCSP49, LQFP64/100, UFQFPN48, UFBGA100) son ECOPACK®2

# ***Pin Out (Arduino):***

![PinOut1](https://firebasestorage.googleapis.com/v0/b/modulo-b3e1a.appspot.com/o/General%2Fimagenes%2FRepositorio%2Fnucleo_f411re_arduinopinout.jpg?alt=media&token=00841f60-c774-45d5-b0c3-f982cf745b53)

# ***Pin Out (Morpho):***

![PinOut2](https://firebasestorage.googleapis.com/v0/b/modulo-b3e1a.appspot.com/o/General%2Fimagenes%2FRepositorio%2Fnucleo_f411re_morpho.jpg?alt=media&token=f8d0391c-140d-41ed-a810-26d5b215976c)


### Documentación adicional:

[Página del Fabricante.](https://www.st.com/en/evaluation-tools/nucleo-f411re.html#documentation)

[Manual](https://firebasestorage.googleapis.com/v0/b/modulo-b3e1a.appspot.com/o/General%2Fimagenes%2FRepositorio%2Fstm32f411xc-e-advanced-arm-based-32-bit-mcus-stmicroelectronics.pdf?alt=media&token=d7cabc7d-e186-4c6f-9ad8-7bd4e6d5e335)