MENTA - Ecommerce

Desarrollado por Carolina Pibernus
en el marco del Curso de React JS de CoderHouse
Abril - Mayo 2021

Dependencias incorporadas: firebase, semantic-ui y react-router-dom.

Descripción de contenidos y funcionalidades.

#VIEWS#

La app tiene 7 vistas en total, 6 de las cuales se puede acceder desde el navbar/header. 
Las views del proyecto se pueden encontrar dentro de src/views. 

*Home --> route "/"
La view HOME cuenta con un mensaje de bienvenida a la página y se apoya en el ProductsContext para reproducir la lista total de items-productos desde el ItemListContainer.
Los Item/s están linkeados a las rutas específicas identificadas con su categoria y su id. Éstas rutas llevan al ItemDetailContainer del producto. 
Ejemplo --> route "/productos/categoría/id"

*Productos --> route "/productos"
Despliega una serie de cards de categorías de productos. Al ingresar a una de las categorías va a la ruta especifica de la categoría e imprime los items que pertenecen a ella. En el caso que el producto no tenga stock, se mostrará un mensaje sobre la foto. Al igual que el Home, utiliza el ProductsContext e ItemListContainer. 
Ejemplo --> route "/productos/categoría"
Los Items tambien se encuentran linkeados y conducen al ItemDetailContainer. El componente ItemDetail recibe por props el producto a detallar. Desde aquí se pueden agregar los productos al carrito. 
Ejemplo --> route "/productos/categoría/id"

*Contacto --> route "/contacto"
Ésta view tiene información de contacto sobre el e-commerce.

*LogIn --> route "/login"
Al LogIn se puede acceder desde un boton "Ingresar" ubicado en el Header. 
En primera instancia imprime un formulario desde el componente SignIn para ingresar teniendo un usuario -mail y contraseña-
También hay un botón "Crear Cuenta" que habilita el formulario del componente CreateAccount para registrarse. 
El funcionamiento del log in está atado a Firebase Auth. Se crea un usuario en firebase con el método createUserWithEmailAndPassword y se realiza un updateProfile para agregar el nombre y apellido del usuario. 
Al hacer SignIn se usa el método signInWithEmailAndPassword. En el caso de que el usuario o contraseña sea inválido, sale una alerta para avisar al usuario. 
Si se logra ingresar se da un mensaje de bienvenida y en el Header se modifica el boton "Ingresar" por un div que contiene el mail del usuario y un boton "Salir" para poder desloguearse. Al hacer click en "Salir" se ejecuta el signOut, que cierra la sesión. 
--Antes de realizar el checkout en el proceso de compra, si el usuario no se encuentra logueado, lo va a conducir al login para que ingrese o se cree una nueva cuenta. 
Una vez logueado o creado el usuario le saldrá un boton para continuar con la compra.---

*Cart --> route "/cart"
El cart imprime los productos que fueron siendo agregados al carrito. 
Utiliza CartContext para mapear el array de articulos. Cada item de la lista cuenta con un boton "Eliminar Item" que permite quitarlo del cart -al quitarlo se actualiza el CartContext mediante useState en el context-
Debajo del listado de articulos se imprime el resumen de precio y cantidad de items -también provisto por el CartContext-. También están los botones: "Continuar Compra" que lleva al Checkout o Login dependiendo si está logueado el usuario y "Vaciar Carrito" que elimina todos los items y actualiza el CartContext, dejando el array vacío.  
En el caso de que el Cart este vacío, se muestra un mensaje y un botón para ir a "Productos"

*Checkout --> route "/checkout"
Al checkout se accede desde el botón "Continuar Compra" del Cart. 
Para corroborar la cuenta desde la que se está comprando, figura el nombre y mail del usuario tomado desde UserContext. A través del componente CheckoutForm se solicita ingresar el número de teléfono y el método de pago para completar la compra. 
Al enviar el formulario, se envía la información a la colección de orders de firebase. Mientras se actualiza y se obtiene el ID de la órden, se utiliza un loader y luego se imprime un mensaje con el código de la órden. Confirmada la compra, se realiza la reducción de stock de cada item con batch.update en el DB, lo que realiza una actualización del ProductsContext. 
En el caso de que se acceda a la ruta -por actualización del usuario en la página por ejemplo- figurarán los datos del usuario y el formulario, pero no teniendo artículos en el Cart se bloquearán los inputs y el botón. Si se ingresa a la ruta y no está loguado el usuario sale un mensaje y un botón para loguearse al sitio. 

*Compras - Orders --> route "/orders"
Ésta view se habilita únicamente cuando el usuario está logueado. 
Hace una impresión de las órdenes de compra realizadas por el usuario, provistas por el OrdersContext.
El OrderDetail imprime la info -id de compra, fecha, precio total, metodo de pago y productos- de cada órden de compra, y mapea el array de productos de la orden para imprimir todos los que contenga. 
De no tener compras realizadas, se muestra un mensaje "Aún no has realizado niguna compra".

#CONTEXT#

La aplicación utiliza Context para generar estados globales dentro del proyecto. 
Los estados generados son usados en, al menos, dos componentes. 
Se pueden encontrar sus respectivos archivos en src/context

Excepto en el CartContext, se realizan llamadas y peticiones a la DB para obtener datos de las colecciones de Firestore y del Auth de Firebase. 

*UserContext 
Brinda información sobre el usuario loggeado en la página. 
Utiliza el Auth de Firebase para comprobar si hay un usuario logueado y sus datos. 
El método .onAuthStateChanged comprueba si cambia el estado de logueo, devolviendo true o false. 
Si hay un usuario logueado, se ejecuta .currentUser que devuelve cuál es el usuario logueado. 
Las respuestas se actualizan mediante useState y se utilizan en la mayoría de los componentes y vistas, para poder habilitar contenidos, botones y completar las compras. 

*ProductsContext
Brinda un array con los productos-items de la coleccion en la DB de Firebase. 
Ejecutado el useEffect se realiza un getItems que hace la petición y devuelve los items, que serán usados para cambiar el estado de productos con useState. 
El array de productos se utiliza también en casi todas las views, dado que es el que provee la información para los listados de articulos.

*OrdersContext
Provee un array con las órdenes de compra de la colección, filtradas según el usuario.  
Para evitar realizar peticiones innecesarias, el useEffect consulta primero con UserContext si hay un usuario logueado. De ser true, realiza un getOrders que solicita la colección "orders" de la DB. Una vez recibida la respuesta se ejecuta la funcion filterDocs, que filtra el array recibido para generar uno nuevo solo con las órdenes donde coincida el buyerId con el userId -provisto por el UserContext- . 
Este context se usa en la view Orders para imprimir las compras realizadas por el usuario. 

*CartContext
Contiene y actualiza el array de articulos agregados al carrito. 
La funcionalidad es simple, contiene una constante useState -articulos, setArticulos- , que se pasa por provider props. 
Al agregar un item al carrito desde ItemDetail se ejecuta setArticulos, donde se agrega un objeto que contiene cantidad de unidades y producto. Si el item ya fue agregado, el ItemDetail lo detectará en el array de articulos mediante un condicional y mostrara un mensaje. 
También se pasan por props dos variables de cantidad de items totales y monto total que realizan la suma total del carrito a través de articulos.reduce.
La cantidad de articulos totales se ve reflejada en el cartWidget -cambiando su imagen y mostrando la cantidad-
Desde la view Cart, se toman todas las props otorgadas por el context. En el caso de eliminar un item o vaciar el cart se actualizará el array mediante el setArticulos. 
Si se confirma con la compra, sus datos serán parte de la información de compra enviada a la DB desde el checkout.
Una vez confirmada la orden, el CartContext se actualiza quedando un array vacío. 

#COMPONENTS#

Los componentes fueron pensados desde la simplicidad y reutilización, si bien en algunos casos son componentes complejos -dado que contienen varias funciones- como en el caso del CheckoutForm.js
Se pueden encontrar todos los componentes en src/components
Describo algunos ejemplos: 

*Button y LinkButton --> Buttons.js
Los componentes de boton fueron pensados para ser reutilizados a lo largo de toda la app. Realiza un export, no usa export default, por lo cual se debe llamar entre llaves. 
Button recibe por props las clases, el texto que imprime y la funcion a ejecutar con el evento onClick.
Se usa en casi todas las views/componentes. Por ejemplo en "Agregar al carrito"
LinkButton recibe tambien clases y el texto. Su funcionalidad está ligada al Link de react-router-dom, por lo que recibe también por props el path al cual se ingresa con el click. 
Se utiliza, por ejemplo, en el Header para el boton "Ingresar" y en el Cart para el "Ir a Productos".

*ItemDetail --> ItemDetail.js
El ItemDetail recibe por props el producto a detallar. 
Tiene algunos condicionales en funcionamiento. 
En primer lugar, evalua si el item está en el carrito lo que devolvera true o false. 
Si el item ya existe en el carrito, se muestra la info del producto, un mensaje de item agregado y el boton para finalizar la compra. 
Si el item no existe aun en el carrito imprime el counter, el boton de add y evalua si hay stock disponible.
En el caso de que haya stock se muestra un mensaje "Sin stock disponible" y se bloquea el counter, caso contrario figuran las unidades de stock disponibles. 
El counter es un componente individual que permite sumar o restar las unidades y actualiza el estado de cantidad de unidades en el ItemDetail. El count no puede ser mayor al stock disponible y sólo una vez que el número de cantidad sea mayor a cero se habilitará el boton "Agregar al carrito". 
Con el evento onClick en el botón se actualiza el CartContext y, debido al primer condicional, se señala que el item fue agregado. 


#ROUTING# 

Las rutas a las distintas vistas están enlazadas a través de los componentes de react-router-dom Route, BrowserRoute, Switch y Link. 
El componente Link se utiliza también en el componente LinkButton -src/components/Buttons- para generar un boton reutilizable que conduzca a una ruta específica.

#ESTILOS#

Para simplificar los estilos de la aplicación se implementa la librería de Semantic Ui. También se han agregado estilos a través de css propios en las distintas carpetas de las views y componentes. 
De Semantic se tomaron principalmente estilos de botones, formularios y cards. 
Para realizar sobreescrituras sobre semantic ui se usaron clases o ids en los archivos css propios. 

--------------------------------------------------------------------

PARA REALIZAR LAS PRUEBAS DE USUARIO Y COMPRAS 

Se crearon dos usuarios ficticios para realizar distintas pruebas de registro y ordenes de compra. 

usuario/mail: carla@mail.com
contraseña: 12345678

usuario/mail: facundo@mail.com
contraseña: 12345678

Se puede acceder con dichos usuarios para realizar las pruebas pertinentes sin problema. 

---------------------------------------------------------------------

carolinapibernus@gmail.com

