# e-Commerce 43850

Este repositorio es el proyecto de lo trabajado en el curso de **Coderhouse: Desarrollo de aplicaciones**. Se trata de una tienda virtual basada en **React Native** construida a lo largo de 18 clases.

En la misma se logra acceder a un **catálogo de productos** (organizado por categorías), con la posibilidad de ver los **detalles del producto**, precio, imagen ilustrativa. También se logra armar un **carrito de compra** con los productos agregados previamente y la posibilidad de **generar una orden** la cual se almacenará en **Firebase**. Cuenta con un servicio personalizado ya que se podrá **iniciar sesión** / **registrarse**. Se podrá almacenar una foto para su **imagen de perfil** y la **ubicación** para una mejor organización en cuestiones de envíos (si así lo requiere).

# Instalación

Para poder utilizar la misma es necesario descargarla y luego realizar un `npm install` para descargar las dependencias correspondientes.

## Dependencias / Librerías

* **expo-font**: Para la utilización de fuentes personalizadas a las del S.O. del dispositivo.
* **expo-image-picker**: Para la selección de archivos almacenadas en el dispositivo.
* **expo-location**: Para la lectura de información sobre la geolocalización del dispositivo.
* **expo-media-library**: Para almacenar archivos en el dispositivo (las imágenes capturadas desde la cámara).
* **expo-sqlite**: Para persistir datos en la aplicación tras el cierre de la misma sin necesidad de reloggearse (si así el usuario lo estuviese).