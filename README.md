<p align="center"><img src= "https://stilografica.es/presentation-01.jpg"><br>
</p>

## Descripción   📖

Prueba técnica Frontend con Vuejs de una tienda online con tres productos y un mini carrito en el menú, donde el usuario puede agregar productos y el total del carrito se actualiza en tiempo real.

 
## Características 📝 

La aplicación se ha desarrollado con Vuejs sin storage en base a los criterios que se detallaban en el enunciado de la prueba:

### Enunciado de la prueba
Tendrá un punto final de API que devuelve productos con la siguiente estructura (asuma su formato de seralización preferido)


| id      |  name        | price  |
| ------- | :----------: | :----: |
| GR1     |  Green tea   | £3.11  |
| SR1     | Strawberries | £5.00  |
| CF1     |    Coffee    | £11.23 |



Habrá un punto final de API para realizar el pago, cobrar al cliente, etc., pero no se utilizará aquí.

#### Condiciones especiales:

El CEO es un gran admirador de las ofertas de compre uno y llévese otro gratis y del té verde. Quiere que agreguemos una regla para hacer esto.
Sin embargo, al director de operaciones le gustan los precios bajos y quiere que las personas que compran fresas obtengan un descuento en el precio de las compras al por mayor. Si compra 3 o más fresas, el precio debería bajar a £ 4.50
El CTO es un adicto al café. Si compra 3 o más cafés, el precio de todos los cafés debería bajar a dos tercios del precio original.

### Lista de productos en la página de inicio

<p align="center"><img src= "https://stilografica.es/Entrevista1-vistaGeneral.png"><br>
</p>

El usuario dispone en cada producto de dos botones, el primero conduce a la página de detalle del producto y el segundo agrega directamente en el carrito una unidad de dicho producto

### Página de detalle del producto

<p align="center"><img src= "https://stilografica.es/DetalleProducto.png"><br>
</p>

El la página de cada producto el usuario puede indicar el número de unidades que desea comprar.


### Mini carrito

Se ha optado por un mini carrito que se desplega desde la parte derecha del menu superior siendo accesible desde cualquier lugar de la web.

<p align="center"><img src= "https://stilografica.es/mini-carrito.png"><br>
</p>

A medida que el usuario introduce los artículos en el carrito, en este se van aplicando las ofertas, indicadas en los requerimientos de la prueba, en tiempo real.

Desde el carrito el usuario puede eliminar artículos o vaciarlo completamente.

## Ejecutar la aplicación localmente 🔧
* Descargar todos los archivos
* Abrir la consola en la carpeta descargada y ejecutar en la terminal:

```
yarn install
```
y a continuación: 
```
yarn serve
```
  Esto iniciará el servidor de token local y ejecutará la aplicación en el modo de desarrollo.  
* Abrir http://localhost:8080 para visualizar la aplicación en el navegador.

## Construido con 🛠️

* Vue js

---
[<p align="center"><img height="50" src= "https://stilografica.es/gitHubFirma.jpg"></p>](https://github.com/stilografica/)
