![Bsalelogo](https://res.cloudinary.com/programandoandopf/image/upload/v1665882913/PF/download_lxqv6a.png)

# BSALE TEST - FRONT END

## Enunciado

La idea general de este proyecto es crear una aplicación web donde se puedan ver los distintos productos de un e-commerce,utilizando una API Rest, y a partir de ella poder, entre otras cosas:

- Buscar productos
- Ver detalle de un producto
- Filtrar productos por categoría
- Agregar/Eliminar productos a un carrito de compra.

## Contenido

Front-End, aplicación web de un e-commerce.

- Deploy del proyecto : https://bsalefront.vercel.app/#/

El proyecto esta realizado en:

- [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript)

## Programas necesarios

Para poder utilizar el proyecto en localhost en necesario clonarlo y tener algunos programas necesarios:

- [Nodejs](https://nodejs.org/es/download/) v16.16.0 o Superior.
- IDE de desarrollo de tu comodidad Ej. [VS Code](https://code.visualstudio.com/download)
- [Git](https://git-scm.com/downloads) para poder gestionar las versiones.

## Como Clonar

Comando para clonar:

```bash
cd existing_folder
git clone https://github.com/Danzsv/Bsale_FRONT.git
```

## Intalación

Ya clonado el proyecto es necesario instalar todas las dependencias con el comando:

```bash
npm install
```

### Run en LocalHost:

Con la instalación finalizada correctamente, ejecutamos el siguiente comando:

```bash
npm start
```

# Aplicación WEB

## Home page

Si hicimos correctamente los pasos anteriores, nuestra aplicación debería desplegarse en nuestro navegador web.

Y deberíamos tener un primer vistazo a nuestra home page , donde podemos ver los distintos productos del ecommerce, con sus respectivos nombres, imágenes, precios y descuentos.

-Si el producto no cuenta con una imagen, se muestra una imagen por defecto con el mensaje de `imagen no disponible`.

![](https://res.cloudinary.com/programandoandopf/image/upload/v1665908145/PF/home_aeokze.png)

## Side Bar

A continuación si prestamos atención, en la esquina superior izquierda vemos un ícono con tres rayas paralelas horizontalmente, este es nuestro botón de side bar.

![](https://res.cloudinary.com/programandoandopf/image/upload/v1665908145/PF/home_aeokze.png)

Si hacemos click en este botón se nos desplagará un nuevo menú en la parte izquiera de la pantalla con distintas categorías de productos.

![](https://res.cloudinary.com/programandoandopf/image/upload/v1665908641/PF/side_bar_lgdch0.png)

Ahora los productos se han filtrado por la categoría seleccionada. En este ejemplo la categoría seleccionada fue Pisco.

![](https://res.cloudinary.com/programandoandopf/image/upload/v1665908641/PF/sibe_bar_example_z8oggx.png)

## Search Bar

En nuestra aplicación web también contamos con una barra de busqueda, donde podemos buscar nuestros productos por nombre.

Una vez ingresado el nombre del producto que deseamos buscar, al hacerle click en el ícono de la lupa o presionando nuestra tecla Enter, nos desplagara una lista de los productos que coincidan con el nombre que ingresamos.

En este ejemplo en producto es `ron`

![](https://res.cloudinary.com/programandoandopf/image/upload/v1665909349/PF/search_bar_yyhm20.png)

## Detalle del producto

Al hacer click tanto en la imagen o en el nombre del producto, podemos ver un detalle del producto y ahora tenemos la opción de agregarlo a nuestro carrito de compras, mediante el boton de `Add to cart`.

![](https://res.cloudinary.com/programandoandopf/image/upload/v1665909789/PF/detail_product_wx4pv3.png)

## Carrito de compras

Si hemos escogido la opción de añadir un producto a nuestro carrito, veremos una lista de los productos que hemos escogido, con sus respectivas cantidades y el subtotal del costo de nuestro carrito de compras.

![](https://res.cloudinary.com/programandoandopf/image/upload/v1665910016/PF/shopping_cart_yhqpmo.png)

Desde este apartado podemos añadir más unidades de uno o distintos productos, así como eliminarlo de nuestro carrito(mediante el boton de `delete`). Y el subtotal de nuestro carrito de compras, también se verá actualizado.

![](https://res.cloudinary.com/programandoandopf/image/upload/v1665910357/PF/update_shopping_cart_tdcqpd.png)
