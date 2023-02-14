# **VIDEO 06 - Ejercicio pujas y control en BankAccount**

En este ejercicio, deberás implementar el componente Bank Account que hemos visto durante los Videos, recuerda que puedes copiar el componente del repositorio de WhatsApp, aunque es preferible que lo hagas tú a mano así practicas.

Una vez realizado el componente, deberás añadir cierta lógica para que el usuario no pueda sacar dinero, si no tiene suficiente ahorrado (50€) y también que no pueda pasar al fondo de ahorros, si no tiene los 1000 € necesarios.

Los mensajes de error nos puedes mostrar mediante alert.

Imagina que el usuario tuviera cero euros:

![0-euros.png](/docs/assets/0-euros.png)

Si intenta sacar dinero vería este error (entendemos que no puede tocar el fondo):

![error-sacar.png](/docs/assets/error-sacar.png)

Si intenta pasarlo dinero ahorrado al fondo vería:

![Untitled](/docs/assets/Untitled.png)

Una vez realizado este ejemplo, deberás hacer un listado de pujas que estará almacenado en un estado dentro de app.js y que modificaremos mediante componentes hijos, igual que hemos hecho en el vídeo de los rayos.

En el vídeo de los rayos hemos creado un componente ThunderObservatory, recuerda crear un componente tú para actualizar las pujas puedes crear uno que se llame Bidder.

Comenzaremos con una puja inicial de 100:

![Untitled](/docs/assets/Untitled%201.png)

Y cada vez que pulsemos en el botón de Pujar (componente Bidder), añadiremos una puja que sea 5€ más que la anterior:

![Untitled](/docs/assets/Untitled%202.png)

Recuerda que el código que hemos visto durante los vídeos puedes encontrarlo en el siguiente repositorio:

<https://github.com/The-Valley-School/react-s3-usestate-and-more>
