"use strict";function ajustesSeccionPortada(){var n=$(".ys-seccion-inicio"),e=$(window).outerWidth(),i=$(window).outerHeight();e>992?($(n).css({"min-height":i+"px"}),i<930?$(".ys-seccion-inicio > .container").addClass("ys-relative"):$(".ys-seccion-inicio > .container").removeClass("ys-relative")):$(n).css({"min-height":i+"px"})}function ajustesSeccionBiografia(){dimensionarMinAltoElemento($(window),$(".ys-seccion-conexiones")),a_dimensionarAltoElemento($(".ys-seccion-conexiones .ys-colext-1"),$(".ys-seccion-conexiones .ys-colext-2"))}function ajustesSeccionAreas(){$("[data-nameSection=sectionThinking-detallesproducto] .ys-colext-2").css({height:$("[data-nameSection=sectionThinking-detallesproducto] .ys-colext-1").outerHeight()+"px"}),$(window).width()>768?(dimensionarMinAltoElementoSinMenu($(window),$(".ys-seccion-thinking .ys-colext-1")),dimensionarMinAltoElementoSinMenu($(window),$(".ys-seccion-thinking .ys-colext-2"))):$(".ys-seccion-thinking .ys-colext-1").css({"min-height":$(window).height()/3*2+"px"}),dimensionarGridImages($(".ys-contentgrid-cuadro")),ajustarImagesCarousel(),$(".ys-logo-item").alinearElementoRelativoV($(".ys-item"))}function dimensionarGridImages(n){var e=$(n).width(),i=$(n).attr("data-numCols");if("cuadro"===$(n).attr("data-typeElement")){var t=e/i;$(".ys-item").css({height:t+"px",width:t+"px"})}}function a_dimensionarAltoElemento(n,e){$(e).animate({height:$(n).outerHeight()+"px"})}function dimensionarMinAltoElemento(n,e){$(e).css({"min-height":$(n).outerHeight()+"px"})}function dimensionarMinAltoElementoSinMenu(n,e){$(e).css({"min-height":$(n).outerHeight()-$(".nav").outerHeight()+"px"})}function realizarPresupuesto(n){var e=$(n).attr("data-typePresupuesto"),i=0,t=null;"type-design-col1"===e&&(t=$("#ys-totaldesign-col1")),"type-design-col2"===e&&(t=$("#ys-totaldesign-col2")),"type-design-col3"===e&&(t=$("#ys-totaldesign-col3")),"type-marketing-col1"===e&&(t=$("#ys-totalmarketing-col1")),"type-marketing-col2"===e&&(t=$("#ys-totalmarketing-col2")),"type-marketing-col3"===e&&(t=$("#ys-totalmarketing-col3")),"type-arqui-col1"===e&&(t=$("#ys-totalarqui-col1")),"type-arqui-col2"===e&&(t=$("#ys-totalarqui-col2")),"type-arqui-col3"===e&&(t=$("#ys-totalarqui-col3")),"type-web-col1"===e&&(t=$("#ys-totalweb-col1")),"type-web-col2"===e&&(t=$("#ys-totalweb-col2")),"type-web-col3"===e&&(t=$("#ys-totalweb-col3")),$(n).hasClass("ys-inactive")?($(n).removeClass("ys-inactive"),$(n).addClass("ys-active"),i=parseInt($(t).attr("data-valorTotal")),i+=parseInt($(n).attr("data-valorPresupuesto")),$(t).attr("data-valorTotal",i),$(t).html("0.00"),$(t).html(i)):$(n).hasClass("ys-active")&&($(n).removeClass("ys-active"),$(n).addClass("ys-inactive"),i=parseInt($(t).attr("data-valorTotal")),i-=parseInt($(n).attr("data-valorPresupuesto")),$(t).attr("data-valorTotal",i),$(t).html("0.00"),$(t).html(i))}function ajustarImagesCarousel(){$(".carousel-inner .item img").css({height:$("[data-nameSection=sectionThinking-detallesproducto] .ys-colext-1").outerHeight()+"px",width:"100%"})}function mostrarOcultarSeccion(n,e,i,t){var a="webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";$(e).addClass(t).one(a,function(){$(this).addClass("ys-hidde"),$(this).removeClass(t),$(n).removeClass("ys-hidde").addClass(i).one(a,function(){$(this).removeClass(i)})})}function obtenerElementoUnico(n,e){var i=null;return $(n).each(function(n,t){$(t).hasClass(e)||(i=$(t))}),i}function centrarVerticalDosContenedores(n,e){var i=$(n).height(),t=$(e).height(),a=0;return i<t&&(a=(t-i)/2,$(e).css({"margin-top":-(i+a)+"px"})),a}function ajustarSeccionContacto(){var n=0;$(window).width()<768?$(".ys-seccion-contacto .ys-cuadro-contacto").css({"margin-top":0}):(n=centrarVerticalDosContenedores($(".ys-seccion-contacto .ys-content-pleca"),$(".ys-seccion-contacto .ys-cuadro-contacto")),$(".ys-footer").css({"margin-top":-n+"px"})),$(window).width()<768?$(".ys-cuadro-contacto .ys-col-2").css({height:"250px"}):$(".ys-cuadro-contacto .ys-col-2").css({height:$(".ys-cuadro-contacto").height()+"px"}),$(".ys-telefono").mask("(000)-000-0000")}function enviarEmail(){if(!0===validarContacto()){$("#formContent .ys-content-btn").html("");var n={nombre:$("#userName").val(),telefono:$("#userPhone").val(),email:$("#userEmail").val(),mensaje:$("#userMessage").val()};$.ajax({type:"POST",url:"sendmail.php",data:n,success:function(){$("#formContent .ys-hiddeform").html(""),$(".ys-msjConfirmacion").addClass("ys-show")},error:function(){}})}}function validarContacto(){var n=!0,e="Los campos: ";return""===$("#userName").val()&&(e+=" *Nombre y apellidos, ",n=!1),""===$("#userEmail").val()&&(e+=" *Correo electrónico, ",n=!1),""===$("#userPhone").val()&&(e+=" *Teléfono, ",n=!1),""===$("#userMessage").val()&&(e+=" *Mensaje, ",n=!1),n?(e="",$(".ys-msj-info").html(""+e)):(e+=" son necesarios para poder contactarte, ¡llénalos porfavor!",$(".ys-msj-info").html(""+e)),n}$(document).ready(function(){ajustesSeccionPortada(),ajustesSeccionBiografia(),ajustesSeccionAreas(),ajustarSeccionContacto(),$(".nav li").click(function(n){var e=$("li.ys-active");$(".nav li").removeClass("ys-active"),$(this).addClass("ys-active");var i=null,t=null;if($(this).hasClass("ys-area"))if(i=$(this).find("a").attr("data-Href"),i=$(""+i),$(e).hasClass("ys-area")){var a=$(e).find("a").attr("data-Href");a=$(""+a),t=obtenerElementoUnico($(".ys-seccion-thinking"),"ys-hidde"),$(t).attr("id")!==$(i).attr("id")&&mostrarOcultarSeccion($(i),$(a),"animated fadeIn","animated fadeOut")}else t=obtenerElementoUnico($(".ys-seccion-thinking"),"ys-hidde"),$(t).attr("id")!=$(i).attr("id")&&mostrarOcultarSeccion($(i),$(t),"animated fadeIn","animated fadeOut");setTimeout(function(){$(".ys-logo-item").alinearElementoRelativoV($(".ys-item"))},1500),n.preventDefault()}),$(".navbar-brand").click(function(n){$(".nav li").removeClass("ys-active")}),$(".ys-content-presupuesto .ys-icon").click(function(n){realizarPresupuesto($(this))}),$(".ys-seccion-conexiones .ys-content-btn .ys-btn").click(function(){mostrarOcultarSeccion($(".ys-seccion-conexiones .ys-content-conexion2"),$(".ys-seccion-conexiones .ys-content-conexion1"),"animated bounceInRight","animated fadeOutLeft")}),$(".ys-seccion-conexiones .ys-content-conexion2 .ys-btn-cerrar").click(function(){mostrarOcultarSeccion($(".ys-seccion-conexiones .ys-content-conexion1"),$(".ys-seccion-conexiones .ys-content-conexion2"),"animated bounceInLeft","animated fadeOutRight")}),$(".ys-cerrar-detallesproducto").click(function(n){var e="#"+$(this).attr("data-idProducto"),i="#"+$(this).attr("data-idSeccionGrid");mostrarOcultarSeccion($(i),$(e),"animated bounceInLeft","animated fadeOutRight")}),$("#btn-especificaciones-design").click(function(){mostrarOcultarSeccion($("#thinking-design-especificaciones"),$("#thinking-design"),"animated bounceInRight","animated fadeOutLeft")}),$("#btn-cerrar-especificaciones-design").click(function(n){mostrarOcultarSeccion($("#thinking-design"),$("#thinking-design-especificaciones"),"animated bounceInLeft","animated fadeOutRight")}),$("#btn-especificaciones-proceso-design").click(function(n){mostrarOcultarSeccion($("#thinking-design-proceso"),$("#thinking-design-especificaciones"),"animated bounceInRight","animated fadeOutLeft")}),$("#btn-cerrar-especificaciones-proceso").click(function(n){mostrarOcultarSeccion($("#thinking-design-especificaciones"),$("#thinking-design-proceso"),"animated bounceInLeft","animated fadeOutRight")}),$("#btn-especificaciones-marketing").click(function(){mostrarOcultarSeccion($("#thinking-marketing-especificaciones"),$("#thinking-marketing"),"animated bounceInRight","animated fadeOutLeft")}),$("#btn-cerrar-especificaciones-marketing").click(function(n){mostrarOcultarSeccion($("#thinking-marketing"),$("#thinking-marketing-especificaciones"),"animated bounceInLeft","animated fadeOutRight")}),$("#btn-especificaciones-proceso-marketing").click(function(n){mostrarOcultarSeccion($("#thinking-marketing-proceso"),$("#thinking-marketing-especificaciones"),"animated bounceInRight","animated fadeOutLeft")}),$("#btn-cerrar-especificaciones-proceso-marketing").click(function(n){mostrarOcultarSeccion($("#thinking-marketing-especificaciones"),$("#thinking-marketing-proceso"),"animated bounceInLeft","animated fadeOutRight")}),$("#btn-especificaciones-arquitectura").click(function(){mostrarOcultarSeccion($("#thinking-arquitectura-especificaciones"),$("#thinking-arquitectura"),"animated bounceInRight","animated fadeOutLeft")}),$("#btn-cerrar-especificaciones-arquitectura").click(function(n){mostrarOcultarSeccion($("#thinking-arquitectura"),$("#thinking-arquitectura-especificaciones"),"animated bounceInLeft","animated fadeOutRight")}),$("#btn-especificaciones-proceso-arquitectura").click(function(n){mostrarOcultarSeccion($("#thinking-arquitectura-proceso"),$("#thinking-arquitectura-especificaciones"),"animated bounceInRight","animated fadeOutLeft")}),$("#btn-cerrar-especificaciones-proceso-arquitectura").click(function(n){mostrarOcultarSeccion($("#thinking-arquitectura-especificaciones"),$("#thinking-arquitectura-proceso"),"animated bounceInLeft","animated fadeOutRight")}),$("#btn-especificaciones-web").click(function(){mostrarOcultarSeccion($("#thinking-web-especificaciones"),$("#thinking-web"),"animated bounceInRight","animated fadeOutLeft")}),$("#btn-cerrar-especificaciones-Web").click(function(n){mostrarOcultarSeccion($("#thinking-web"),$("#thinking-web-especificaciones"),"animated bounceInLeft","animated fadeOutRight")}),$("#btn-especificaciones-proceso-web").click(function(n){mostrarOcultarSeccion($("#thinking-web-proceso"),$("#thinking-web-especificaciones"),"animated bounceInRight","animated fadeOutLeft")}),$("#btn-cerrar-especificaciones-proceso-web").click(function(n){mostrarOcultarSeccion($("#thinking-web-especificaciones"),$("#thinking-web-proceso"),"animated bounceInLeft","animated fadeOutRight")}),$(".nav li a").click(function(n){$(".navbar-collapse").hasClass("in")&&$(".navbar-collapse").removeClass("in")}),$("#ys-btn-contacto").click(function(n){$(window).height()>992&&setTimeout(function(){dimensionarMinAltoElemento($("#ys-modalContacto #formContent"),$("#ys-modalContacto #formContent .ys-col-1")),dimensionarMinAltoElemento($("#ys-modalContacto #formContent"),$("#ys-modalContacto #formContent .ys-col-2"))},500)})}),$(window).resize(function(n){ajustesSeccionPortada(),ajustesSeccionBiografia(),ajustesSeccionAreas(),ajustarSeccionContacto()}),$.fn.extend({animateCss:function(n){this.addClass("animated "+n).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){$(this).removeClass("animated "+n)})}}),$.fn.extend({mostrarSeccion:function(n){$(this).removeClass("ys-hidde"),this.addClass(n).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){$(this).removeClass(n)})}}),$.fn.extend({ocultarSeccion:function(n){this.addClass(n).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){$(this).addClass("ys-hidde"),$(this).removeClass(n)})}}),$.fn.extend({alinearElementoRelativoV:function(n){this.each(function(e,i){$(i).css({"margin-top":($(n).outerHeight()-$(i).outerHeight())/2+"px"})})}});