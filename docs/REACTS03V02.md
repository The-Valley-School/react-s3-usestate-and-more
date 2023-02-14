# **VIDEO 02 - UseState ejemplo Counter y StrictMode**

En este video hablaremos del modo estricto en React, que es el que nos provoca doble renderizado de todos nuestros componentes:

<https://reactjs.org/docs/strict-mode.html>

React.StrictMode es un componente de React que se utiliza en modo de desarrollo para ayudar a identificar problemas potenciales en una aplicación de React antes de que se publique en producción. Al incluir React.StrictMode en la raíz de su aplicación, puedes activar varios mecanismos de detección de errores y advertencias en su aplicación que lo ayudarán a identificar problemas y mejorar la calidad de su código.

Algunas de las advertencias y mecanismos de detección de errores que se activan con React.StrictMode incluyen:

- Advertencias sobre el uso de funciones obsoletas de React
- Advertencias sobre problemas de rendimiento en componentes anidados
- Detección de problemas de accesibilidad
- Advertencias sobre el uso de valores no válidos en los atributos HTML

Es importante tener en cuenta que React.StrictMode no afecta la funcionalidad de su aplicación, solo mejora la detección de problemas. Por lo tanto, se recomienda hacer uso de React.StrictMode.

En nuestra aplicación podemos encontrarlo en el index.js envolviendo toda la App:

```jsx
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

Tras esto haremos un componente contador que servirá para sumar números a nuestro valor inicial e incluso resetearlo. Esto nos servirá para demostrar que cada componente tiene su estado propio y veremos cómo crear una arrow function que llame al setter del estado.

Nuestro componente Counter quedará así:

```jsx
import "./Counter.css";
import React from "react";

const Counter = () => {

  const [counterValue, setCounterValue] = React.useState(0);

  return (
    <div>
      <p>El valor actual es: {counterValue}</p>
      <button className="counter__button" onClick={() => setCounterValue(counterValue - 5)}>Restar 5</button>
      <button className="counter__button" onClick={() => setCounterValue(counterValue - 1)}>Restar 1</button>
      <button className="counter__button" onClick={() => setCounterValue(0)}>Resetear</button>
      <button className="counter__button" onClick={() => setCounterValue(counterValue + 1)}>Sumar 1</button>
      <button className="counter__button" onClick={() => setCounterValue(counterValue + 5)}>Sumar 5</button>
    </div>
  );
}

export default Counter;
```
