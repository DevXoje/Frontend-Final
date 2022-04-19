# Dudas

## Ordenar tabla

De normal funcionaria, pero como la variable que contiene los datos le entra por input y va ligada a al estado, al reasignarlo me saltan errores de ngxs. Entonces supongo que debo crear la accion push nuevos datos, ahora, debeser una funcion del servicio que haga la query ordenada o debe ordenarlo en el frontend.

## Search tabla

Manejo dinamido de los atributos en los que tiene que buscar a medias, de momento solo nombre.

## Formulario Editar

Al llamar los objetos, debemos facilitar un mecanismo para coja del estado los atribututos y los use de placeholder

## Login

Al hacer login el 'token' devuelto, esta generado por `$token = auth()->attempt($validator->validated())` en AuthController, una vez en el frontend con un la libreria de JWT puede desencriptar, y a excepcion de las propiedades que aparecen el playground y la que devuelve la ruta del servidor, no se que hacer con esa informacion
