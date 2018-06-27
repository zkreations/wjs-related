/*!
=> wjs-related v2.0.0
=> Copyright 2018 José Gregorio | fb.com/JGMateran (zkreations team)
=> Licensed under MIT | github.com/zkreations/wjs-related/blob/master/LICENSE
*/
var related = (function(){
 
'use strict';

var defaults = {
   id: '1692379497738760100', // Codigo unico del post
   homepage: 'https://www.zkreations.com', // Url blog de prueba (debe corresponder a la ID del post)
   image: 'img/no-img-blogger.png', // Imagen por defecto
   length: 5, // Cantidad de entradas relacionadas a mostrar
   snippet: 100, // Cantidad texto para el resumen
   container: document.getElementById('wjs-related'), // Selector
   tags: ['plantilla','blogger'] // Etiquetas de prueba
   };

   var tags$length = defaults.tags.length;
   var script = document.createElement( 'script' );

   var src = defaults.homepage + '/feeds/posts/default' +
   '?alt=json-in-script' +
   '&callback=related' +
   '&max-results=' + ( defaults.length + 1 ) +
   '&q=';

   for ( var n = 0; n < tags$length; n++ ){
   src += 'label:"' + defaults.tags[ n ] + '"' + ( n === tags$length - 1 ? '' : '|' );
   }

   script.src = src;
   document.body.appendChild( script );

   function render( data ){

   console.log( data ); // Envia a consola los datos json. Eliminar si no se necesita

   var title = data.title.$t;

   var content = data.content.$t;

   var snippet = content.replace(/<[^>]*>?/g,'').substring( 0, defaults.snippet ) + '...';

   var img = data.media$thumbnail;

   var tempHtml = document.createElement('div');

   tempHtml.innerHTML = content;

   var imgHtml = tempHtml.querySelector('img');

   var image = ( img ? img.url : (imgHtml ? imgHtml.src : defaults.image)).replace( /s\B\d{2,4}/, 's256-c' ); 

   var url = (function(){
      for ( var i = 0; i < data.link.length; i++ ){
      var link = data.link[i];
      if ( link.rel === 'alternate' ){
         return link.href;
      }
      }
   })();

   var published = new Date( data.published.$t ).toLocaleDateString(
      'es-ES',
      {
      year:'numeric',
      month:'long',
      day: 'numeric'
      }
   );

   return (
      '<div class="wjs-rel">'+
      '<a href="' + url + '" class="wjs-rel__image">'+
         '<img src="' + image + '" alt="' + title + '" />'+
      '</a>'+
      '<div class="wjs-rel__data">'+
         '<h3 class="wjs-rel__title">' + title + '</h3>'+
         '<div class="wjs-rel__date">' + published + '</div>'+
         '<p class="wjs-rel__snippet">' + snippet + '</p>'+
      '</div>'+
      '</div>'
   );
   }

   function related( json ){
   var i = 0;
   var post;
   var length = defaults.length;

   for ( ; i < length && ( post = json.feed.entry[ i ] ); i++ ){
      if ( defaults.id !== post.id.$t.split( '.post-' )[ 1 ] ){
      defaults.container.innerHTML += render( post );
      } else {
      length++;
      }
   }
   }

   return related;

   })();