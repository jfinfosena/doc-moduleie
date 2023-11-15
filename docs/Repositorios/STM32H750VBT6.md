---
title: STM32H750VBT6
hide_title: true
sidebar_position: 16
draft: false
---
![Encabezado](https://firebasestorage.googleapis.com/v0/b/modulo-b3e1a.appspot.com/o/General%2Fimagenes%2Flogo%20sena%202.png?alt=media&token=f8400ade-f50e-4175-8ff1-d69a8bc9a180&_gl=1*1b8f15f*_ga*MTE3MTQwMjUxOS4xNjk2MjYzMDI3*_ga_CW55HF8NVT*MTY5NjI3NDM1NS4yLjEuMTY5NjI3NTE4My4zMS4wLjA.)

# **STM32H750VBT6**

Los dispositivos STM32H750xB se basan en el núcleo RISC de 32 bits Arm® Cortex®-M7 de alto rendimiento que funciona a hasta 480 MHz. El núcleo Cortex® -M7 cuenta con una unidad de punto flotante (FPU) que admite instrucciones y tipos de datos de procesamiento de datos de doble precisión (compatible con IEEE 754) y de precisión única de Arm®. Los dispositivos STM32H750xB admiten un conjunto completo de instrucciones DSP y una unidad de protección de memoria (MPU) para mejorar la seguridad de las aplicaciones.

Los dispositivos STM32H750xB incorporan memorias integradas de alta velocidad con una memoria flash de 128 Kbytes, hasta 1 Mbyte de RAM (incluyendo 192 Kbytes de TCM RAM, hasta 864 Kbytes de SRAM de usuario y 4 Kbytes de SRAM de respaldo), así como una amplia gama de E/S y periféricos mejorados conectados a buses APB, buses AHB, matriz de buses multi-AHB de 32 bits y una interconexión AXI de varias capas que admite acceso a memoria interna y externa.

Todos los dispositivos ofrecen tres ADC, dos DAC, dos comparadores de potencia ultrabaja, un RTC de baja potencia, un temporizador de alta resolución, 12 temporizadores de 16 bits de propósito general, dos temporizadores PWM para control de motor, cinco temporizadores de baja potencia, un verdadero generador de números aleatorios (RNG) y una celda de aceleración criptográfica. Los dispositivos admiten cuatro filtros digitales para moduladores sigma-delta externos (DFSDM). También cuentan con interfaces de comunicación estándar y avanzadas.

![STM32H750VBT6](https://firebasestorage.googleapis.com/v0/b/modulo-b3e1a.appspot.com/o/General%2Fimagenes%2FRepositorio%2FSTM32H750VBT6.jpg?alt=media&token=02c12d4c-1258-439c-8bc3-e2c592dd83bc)

***Especificaciones***

**Núcleo**

- Núcleo Arm® Cortex®-M7 de 32 bits con FPU de doble precisión y caché L1: 16 Kbytes de datos y 16 Kbytes de caché de instrucciones; frecuencia de hasta 480 MHz, MPU, 1027 DMIPS/2.14 DMIPS/MHz (Dhrystone 2.1) e instrucciones DSP.

**Memorias**

- 128 Kbytes de memoria flash.
- 1 Mbyte de RAM: 192 Kbytes de TCM RAM (incluyendo 64 Kbytes de ITCM RAM + 128 Kbytes de DTCM RAM para     rutinas críticas en cuanto al tiempo), 864 Kbytes de SRAM de usuario y 4 Kbytes de SRAM en el dominio de respaldo.
- Interfaz de memoria Quad-SPI de modo dual que funciona hasta 133 MHz.
- Controlador de memoria externa flexible con bus de datos de hasta 32 bits:
SRAM, PSRAM, memoria flash NOR sincronizada a hasta 133 MHz.
- SDRAM/LPSDR SDRAM.
- Memorias flash NAND de 8/16 bits.
- Unidad de cálculo CRC.

**Seguridad**

- ROP, PC-ROP, tamper activo, soporte de actualización de firmware seguro, modo de acceso seguro
- Entradas/salidas de propósito general.

- Hasta 168 puertos de E/S con capacidad de interrupción.

**Reinicio y gestión de energía**

- 3 dominios de energía independientes que pueden deshabilitarse o apagarse independientemente:
- D1: capacidades de alto rendimiento.
- D2: periféricos de comunicación y temporizadores.
- D3: control de reinicio/reloj/gestión de energía.
- Suministro de aplicación e I/Os de 1,62 a 3,6 V, POR, PDR, PVD y BOR.
- Alimentación USB dedicada que incorpora un regulador interno de 3,3 V para suministrar a los PHY internos.
- Regulador integrado (LDO) con salida escalable configurable para suministrar los circuitos digitales.
- Escalado de voltaje en modo Run y Stop (6 rangos configurables).
- Regulador de respaldo (~0,9 V).
- Voltaje de referencia para periférico analógico/VREF+.
- Modos de bajo consumo: Sleep, Stop, Standby y VBAT que admiten la carga de la batería.
- Consumo de energía reducido.

- Modo de funcionamiento con batería VBAT con capacidad de carga.
- Pines de monitoreo del estado de la CPU y del dominio de energía.
- 2,95 µA en modo de espera (SRAM de respaldo apagada, RTC/LSE encendida).
- Gestión de reloj

- Osciladores internos: HSI de 64 MHz, HSI48 de 48 MHz, CSI de 4 MHz, LSI de 32 kHz.
- Osciladores externos: HSE de 4-48 MHz, LSE de 32,768 kHz.
- 3 × PLL (1 para el reloj del sistema, 2 para los relojes del kernel) con modo fraccionario.

**Matriz de interconexión**

- 4 controladores DMA para descargar la CPU.
- 1 × controlador de acceso directo a la memoria maestro de alta velocidad (MDMA) con soporte de lista enlazada.
- 2 × DMA de doble puerto con FIFO.
- 1 × DMA básico con capacidades de enrutador de solicitudes.

**Hasta 35 periféricos de comunicación**

- 4 × interfaces I2Cs FM+ (SMBus/PMBus).
- 4 × USARTs/4x UARTs (interfaz ISO7816, LIN, IrDA, hasta 12,5 Mbit/s) y 1x LPUART.
- 6 × SPIs, 3 con precisión de clase de audio I2S dúplex multiplexada a través de PLL de audio interno o reloj externo, 1x I2S en dominio LP (hasta 150 MHz).
- 4 × SAIs (interfaz de audio serie).

**Interfaz SPDIFRX**

- I/F maestro de protocolo de un solo cable SWPMI.
- Interfaz esclava MDIO.
- 2 × interfaces SD/SDIO/MMC (hasta 125 MHz).
- 2 × controladores CAN: 2 con CAN FD, 1 con CAN activado por tiempo (TT-CAN).
- 2 × interfaces USB OTG (1FS, 1HS/FS).

# ***Pin Out (Arduino):***

![PinOut](https://firebasestorage.googleapis.com/v0/b/modulo-b3e1a.appspot.com/o/General%2Fimagenes%2FRepositorio%2FSTM32H750VBT6pinout.jpg?alt=media&token=ccc9e4e0-0e5e-4076-8fcf-dc23c0a770fd)

### Documentación adicional:

[Página del Fabricante.](https://www.st.com/en/microcontrollers-microprocessors/stm32h750vb.html)

[Manual](https://firebasestorage.googleapis.com/v0/b/modulo-b3e1a.appspot.com/o/General%2Fimagenes%2FRepositorio%2Fstm32h750vb.pdf?alt=media&token=6e01995b-8845-4d74-af1a-3be2616abe2d)
