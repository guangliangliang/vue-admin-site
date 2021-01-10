(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{256:function(a,t,e){"use strict";e.r(t);var s=e(0),n=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"content"},[a._m(0),a._v(" "),e("p",[a._v("Esta característica es para responder a las necesidades de las personas. De hecho, no utilizo esta característica en proyectos de la empresa o proyectos personales. En el pasado, esos frameworks tradicionales de back-end a menudo incluían esta característica. Dado que la mayoría de los proyectos de back-end anteriores tenían varias páginas, la característica de navegación Etiquetas View todavía tiene un significado básico. La mayoría de ellos se basan en el iframe.")]),a._v(" "),e("p",[a._v("Sin embargo, con el paso del tiempo, los proyectos en back-end son casi todos spa (desarrollo de una aplicación web de una sola página), y obviamente no es apropiado usar la forma anterior para implementar la navegación con etiquetas.")]),a._v(" "),e("p",[a._v("Entonces el plan actual es:")]),a._v(" "),a._m(1),a._v(" "),a._m(2),a._v(" "),a._m(3),a._m(4),a._v(" "),a._m(5),a._v(" "),e("p",[a._v("La etiqueta view actual mantiene dos matrices.")]),a._v(" "),e("ul",[e("li",[a._v("visitedViews : La página que el usuario ha visitado es una colección de matrices de etiquetas que se muestran en la barra de navegación de etiquetas.")]),a._v(" "),e("li",[a._v("cachedViews : La ruta actual keep-alive. Puedes establecer si deseas o no almacenar en caché la ruta, configurandola con "),e("code",[a._v("meta.noCache")]),a._v(". "),e("router-link",{attrs:{to:"./router-and-nav.html"}},[a._v("Documento de configuración")])],1)]),a._v(" "),a._m(6),a._v(" "),e("p",[a._v("Debido a que keep-alive y router-view están fuertemente acoplados, y no es difícil encontrar que keep-alive incluye el nombre predeterminado del componente, es necesario mirar el documento y el código fuente al escribir el componente de enrutamiento correspondiente al enrutador y la ruta de enrutamiento.")]),a._v(" "),e("p",[a._v("Asegúrate de que el nombre de ambos sea exactamente el mismo. (Ten en cuenta que el nombre debe ser tan único como sea posible. Recuerda no duplicar el nombre de algunos componentes o hacer referencia al último problema de desbordamiento de memoria de forma recursiva).")]),a._v(" "),a._m(7),a._v(" "),a._m(8),a._m(9),e("p",[a._v("Asegúrate de que los dos nombres sean iguales. Recuerda no escribir duplicados o errores. De forma predeterminada, si no escribes el nombre, no se almacenará en caché.")]),a._v(" "),e("p",[a._v("Para más detalles, ver "),e("a",{attrs:{href:"https://github.com/vuejs/vue/issues/6938#issuecomment-345728620",target:"_blank",rel:"noopener noreferrer"}},[a._v("issue"),e("OutboundLink")],1),a._v(".")]),a._v(" "),a._m(10),a._v(" "),a._m(11),a._v(" "),e("ul",[e("li",[e("p",[a._v("En lugar de utilizar la inclusión de keep-alive, este almacenará directamente todos los componentes en caché. De esta manera, se ayudara a la situación antes mencionada.\nEn "),e("a",{attrs:{href:"https://github.com/PanJiaChen/vue-element-admin/blob/master/src/layout/components/AppMain.vue",target:"_blank",rel:"noopener noreferrer"}},[a._v("@/layout/components/AppMain.vue"),e("OutboundLink")],1),a._v(" elimina el código relacionado con "),e("code",[a._v("include")]),a._v(". Por supuesto, usar keep-alive directamente también tiene desventajas. No puedes eliminar dinámicamente la caché. Solo puedes ayudar estableciendo un límite máximo de instancia de caché.\n"),e("a",{attrs:{href:"https://github.com/vuejs/vue/issues/6509",target:"_blank",rel:"noopener noreferrer"}},[a._v("issue"),e("OutboundLink")],1)])]),a._v(" "),a._m(12)]),a._v(" "),e("h2",{attrs:{id:"affix"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#affix"}},[a._v("#")]),a._v(" Affix "),e("Badge",{attrs:{text:"v3.10.0+"}})],1),a._v(" "),a._m(13),a._v(" "),a._m(14),a._v(" "),a._m(15),a._m(16),a._v(" "),a._m(17),a._v(" "),a._m(18),a._v(" "),a._m(19),a._m(20)])}),[function(){var a=this.$createElement,t=this._self._c||a;return t("h1",{attrs:{id:"etiquetas-view"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#etiquetas-view"}},[this._v("#")]),this._v(" Etiquetas View")])},function(){var a=this.$createElement,t=this._self._c||a;return t("p",[this._v("Usar una combinación de "),t("code",[this._v("keep-alive")]),this._v(" y "),t("code",[this._v("router-view")]),this._v(".")])},function(){var a=this.$createElement,t=this._self._c||a;return t("p",[this._v("Código: "),t("code",[this._v("@/layout/components/AppMain.vue")])])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("keep-alive")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v(":include")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("cachedViews"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("router-view")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("router-view")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("keep-alive")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])])])},function(){var a=this.$createElement,t=this._self._c||a;return t("p",[this._v("La acción real de las etiquetas de navegación view es equivalente a otro modo de visualización de navegación. De hecho, es un router-link, y al hacer clic salta a la página correspondiente. Luego estamos escuchando los cambios en la ruta "),t("code",[this._v("$route")]),this._v(" para determinar si la página actual necesita ser recargada o almacenada en caché.")])},function(){var a=this.$createElement,t=this._self._c||a;return t("h2",{attrs:{id:"visitedviews-cachedviews"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#visitedviews-cachedviews"}},[this._v("#")]),this._v(" visitedViews && cachedViews")])},function(){var a=this.$createElement,t=this._self._c||a;return t("h2",{attrs:{id:"precauciones"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#precauciones"}},[this._v("#")]),this._v(" Precauciones")])},function(){var a=this.$createElement,t=this._self._c||a;return t("p",[t("strong",[this._v("DEMO:")])])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//Definir rutas")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  path"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'create-form'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token function-variable function"}},[a._v("component")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=>")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'@/views/form/create'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  name"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'createForm'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  meta"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" title"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'createForm'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" icon"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'table'")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//La vista correspondiente de la ruta. tales como: form/create")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("export")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("default")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  name"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'createForm'")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])])},function(){var a=this.$createElement,t=this._self._c||a;return t("h2",{attrs:{id:"cuando-la-cache-no-es-adecuada-para-la-situacion"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cuando-la-cache-no-es-adecuada-para-la-situacion"}},[this._v("#")]),this._v(" Cuando la caché no es adecuada para la situación")])},function(){var a=this.$createElement,t=this._self._c||a;return t("p",[this._v("Las soluciones actualmente en caché no son adecuadas para ciertos servicios, como la página de detalles del artículo, por ejemplo "),t("code",[this._v("/article/1")]),this._v(", "),t("code",[this._v("/article/2")]),this._v(", sus rutas son diferentes pero los componentes correspondientes son los mismos, por lo que el nombre de su componente es igual, como se mencionó anteriormente, con la inclusión de "),t("code",[this._v("keep-alive")]),this._v(" solo se puede almacenar en caché basándose en el nombre del componente, por lo que esto es un problema. Actualmente hay dos soluciones:")])},function(){var a=this.$createElement,t=this._self._c||a;return t("li",[t("p",[this._v("Utiliza un esquema de caché del navegador como localStorage, para controlar la caché.")])])},function(){var a=this.$createElement,t=this._self._c||a;return t("p",[this._v("Si el atributo Affix se agrega a la ruta, "),t("code",[this._v("tag")]),this._v(" quedará fija en "),t("code",[this._v("tags-view")]),this._v(" (no se podrá quitar).")])},function(){var a=this.$createElement,t=this._self._c||a;return t("p",[t("img",{attrs:{src:"https://user-images.githubusercontent.com/8121621/52840303-cd5c9280-3133-11e9-928f-e2825eaab51b.png",alt:""}})])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"language-js extra-class"},[e("div",{staticClass:"highlight-lines"},[e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("div",{staticClass:"highlighted"},[a._v(" ")]),e("br"),e("br"),e("br"),e("br"),e("br")]),e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    path"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("''")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    component"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" Layout"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    redirect"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'dashboard'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    children"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        path"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'dashboard'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n        "),e("span",{pre:!0,attrs:{class:"token function-variable function"}},[a._v("component")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=>")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'@/views/dashboard/index'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n        name"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'Dashboard'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n        meta"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n          title"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'dashboard'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n          icon"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'dashboard'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n          noCache"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n          affix"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),a._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])])},function(){var a=this.$createElement,t=this._self._c||a;return t("h2",{attrs:{id:"eliminar"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#eliminar"}},[this._v("#")]),this._v(" Eliminar")])},function(){var a=this.$createElement,t=this._self._c||a;return t("p",[this._v("De hecho, el "),t("a",{attrs:{href:"(https://github.com/vuejs/vue/blob/dev/src/core/components/keep-alive.js)"}},[this._v("código fuente")]),this._v(" de keep-alive no es complicado, y la lógica sigue siendo bastante clara. Antes de que el autor de "),t("code",[this._v("vue")]),this._v(" corrigiera un error, no tuvo cuidado e hizo dos versiones para solucionarlo, por lo que si no hay ningún usuario que necesite la barra de navegación, se recomienda Eliminar esta función.")])},function(){var a=this.$createElement,t=this._self._c||a;return t("p",[this._v("Primero encuentra\n"),t("code",[this._v("@/layout/components/AppMain.vue")]),this._v(" y elimina "),t("code",[this._v("keep-alive")])])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("template")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("section")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("class")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("app-main"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v(" "),e("span",{pre:!0,attrs:{class:"token style-attr"}},[e("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("style")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),e("span",{pre:!0,attrs:{class:"token style language-css"}},[e("span",{pre:!0,attrs:{class:"token property"}},[a._v("min-height")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" 100%")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("transition")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("name")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("fade-transform"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("mode")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("out-in"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n      "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("router-view")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("router-view")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v('\x3c!-- o también <router-view :key="key"/> --\x3e')]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("transition")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("section")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("template")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])])])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("p",[a._v("Elimina el archivo "),e("code",[a._v("@/layout/components/TagsView.vue")]),a._v(". Luego, elimina la referencia a "),e("code",[a._v("TagsView")]),a._v(" en los archivos "),e("code",[a._v("@/layout/components/index")]),a._v(" y "),e("code",[a._v("@/layout/Layout.vue")]),a._v(". Finalmente, elimina el archivo "),e("code",[a._v("@/store/modules/tagsView")]),a._v(".")])}],!1,null,null,null);t.default=n.exports}}]);