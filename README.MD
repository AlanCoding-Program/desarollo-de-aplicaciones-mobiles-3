#  Proyecto: Datos Climáticos

Este proyecto es una página web simple que obtiene y muestra información climática (en este caso, la humedad) utilizando la API OpenWeather.

##  Estructura del proyecto

* `index.html` → Estructura principal de la página.
* `style.css` → Estilos visuales.
* `node.js` → Lógica para consumir la API y mostrar los datos.

##  Funcionamiento

1. Al cargar la página, se ejecuta una función en JavaScript que:

   * Realiza una petición a la API de OpenWeather.
   * Obtiene los datos en formato JSON.
   * Extrae la humedad del clima.

2. Luego, se crea dinámicamente un elemento HTML que muestra la humedad en pantalla.

##  API utilizada

Se utiliza la API de OpenWeather con coordenadas específicas:

* Latitud: -35.169285
* Longitud: -58.223986

##  Estilos

* Fondo color **aquamarine**.
* Título centrado y subrayado.
* Datos climáticos centrados con tipografía serif.

Proyecto básico para practicar consumo de APIs con JavaScript.
