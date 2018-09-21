# wjs-related

> The best related entries for Blogger

[![license][license-img]][license-url]
[![changelog][changelog-img]][changelog-url]
[![release][release-img]][release-url]

## Introducción

wjs-related es un complemento para Blogger que captura de manera óptima, entradas relacionadas basadas en etiquetas, en **una sola consulta y sin dependencias**. Los complementos que zkreations aporta a blogger llevan el prefijo "wjs" que significa **whale javascript**, ya que pertenecen a nuestro laboratorio de desarrollo, bajo el nombre "**whale**".

## Instalación

Incluir todo el contenido de **includable.xml** dentro de un widget tipo "Blog", posteriormente, utilizar la siguiente etiqueta para incrustar los post relacionados donde se desee:

```xml
<b:include name='post-related'/>
```

**Tips:** Puedes evitar la carga de post relacionados dentro de la vista previa ya que no se requiere, para ello agregue una condición:

```xml
<b:include cond='!data:view.isPreview' name='post-related'/>
```

## Opciones

| Propiedad    | Tipo |  Valor | 
| ------------ | ---- | ------------------------------------------ |
| `id`         | string | Código único de una entrada publicada en el blog |
| `homepage`   | string | Enlace de la página principal. Debe corresponder al id del post |
| `image`      | image | Url de la imagen por defecto. Se usa cuando no existen imágenes en el post |
| `length`     | number | Cantidad de entradas relacionadas a mostrar |
| `snippet`    | number | Cantidad de texto para el resumen |
| `imgSize`    | string | Parametros para el tamaño de las imagenes |
| `container`  | var | Id del Contenedor |
| `tags`       | Object | Etiquetas de la entrada separadas por comas. Debe corresponder al id del post |

## Licencia

**wjs-related** is licensed under the MIT License.

[changelog-img]: https://img.shields.io/badge/changelog-md-blue.svg?style=flat-square
[changelog-url]: changelog.md
[license-img]: https://img.shields.io/badge/license-MIT-green.svg?style=flat-square
[license-url]: LICENSE
[release-img]: https://img.shields.io/badge/release-v2.0.3-yellowgreen.svg?style=flat-square
[release-url]: https://github.com/zkreations/wjs-related/releases/tag/v2.0.3