# **VIDEO 01 - UseState Intro**

En esta sesión hablaremos sobre useState:

<https://reactjs.org/docs/hooks-state.html>

React useState es una función de React que permite a los desarrolladores manejar el estado local en un componente de React. El estado local es una parte importante de un componente de React que se usa para almacenar y controlar los datos que pueden cambiar durante la vida útil de un componente.

La función useState devuelve un par de valores: el primero es el valor actual del estado, y el segundo es una función que permite actualizar ese valor. Cada vez que se llama a la función de actualización, React re-renderiza el componente para reflejar los cambios en el estado.

Realizaremos un pequeño ejemplo donde cambiaremos un nombre al pulsar un botón.

Nuestro componente quedará así:

```jsx
import "./TeacherName.css";
import React from "react";

const TeacherName = (props) => {
  console.log("PINTAMOS COMPONENTE TeacherName");

  // Manera menos cómoda de usar useState
  // const myState = React.useState("Edu");
  // myState[0] en la primera posición tenemos el estado
  // myState[1] en la segunda posición tenemos una función para modificarlo

  // Manera cómoda con destructuring
  const [name, setName] = React.useState("Eduardo");

  const changeName = () => {
    setName("Francisco");
  }

  return (
    <div className="teacher-name">
      <p>Hola {name}!</p>
      <button onClick={changeName}>Cambiar nombre!</button>
    </div>
  );
}

export default TeacherName;
```

En la línea **`const [name, setName] = React.useState("Eduardo");`** hacemos la inicialización del estado . Aquí, se está utilizando la función **`useState`** para crear un par de valores: **`name`** y **`setName`**. **`name`** es el valor actual del estado y **`setName`** es una función que permite actualizar ese valor.

En este caso, se está inicializando el estado con el nombre **`"Eduardo"`**. Cada vez que se llama a **`setName`**, React re-renderiza el componente para reflejar los cambios en el estado.

La función **`changeName`** se utiliza para actualizar el nombre cuando se hace clic en el botón. Cuando se hace clic en el botón, se llama a **`setName`** con el nuevo valor **`"Francisco"`**, lo que resulta en una actualización del estado y un re-renderizado del componente.

El componente devuelve una representación visual de **`name`**, que muestra un saludo personalizado y un botón que permite cambiar el nombre. Cada vez que se hace clic en el botón, se llama a la función **`changeName`**, lo que resulta en una actualización del estado y un re-renderizado del componente con el nuevo nombre.
