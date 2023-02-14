# **VIDEO 04 - useState con objetos**

En este vídeo veremos cómo trabajar con useState para almacenar y modificar objetos. 

Veremos por qué no es lo mismo trabajar con elementos básicos como strings, booleanos o números o trabajar con elementos que funcionan por referencia como por ejemplo a arrays u objetos.

Siempre que queramos actualizar un estado que sea un objeto, deberemos antes, clonar ese objeto, haciendo uso por ejemplo del operador spread.

Haremos un componente BankAccount, que nos servirá para demostrar cómo trabajar con estados y objetos, el componente quedará así:

```jsx
import React from "react";
import "./BankAccount.css";

const BankAccount = () => {
  const [account, setAccount] = React.useState({
    name: "Fran",
    savings: 5000,
    founds: 1000,
  });

  const takeMoney = () => {
    // MANERA ANTIGUA DE CLONAR OBJETOS
    // const newAccount = JSON.parse(JSON.stringify(account));

    // MANERA MODERNA (SPREAD)
    const newAccount = { ...account };
    newAccount.savings = newAccount.savings - 50;
    setAccount(newAccount);
  }

  const addMoney = () => {
    // const newAccount = {...account};
    // newAccount.savings = newAccount.savings + 100;

    // Manera abreviada
    const newAccount = {
      ...account,
      savings: account.savings + 100,
    }
    setAccount(newAccount);
  }

  const addMoneyToFounds = () => {
    // PPIO DE INMUTABILIDAD 
    // SIEMPRE CREAMOS OBJETOS NUEVOS, NO MODIFCAMOS
    const newAccount = {
      ...account,
      savings: account.savings - 1000,
      founds: account.founds + 1000,
    }
    setAccount(newAccount);
  }

  return (
    <>
      <p>El titular de la cuenta es: {account.name}</p>
      <p>El saldo de la cuenta de ahorros es: {account.savings}€</p>
      <p>El total del fondo de inversión es: {account.founds}€</p>

      <button onClick={takeMoney}>Retirar 50€</button>
      <button onClick={addMoney}>Ingresar 100€</button>
      <button onClick={addMoneyToFounds}>Meter en fondos 1000€</button>
    </>
  );
}

export default BankAccount;
```

Como puedes ver, por ejemplo en la función Take Money, antes de actualizar el estado, debemos crear una copia:

```jsx
const takeMoney = () => {
  const newAccount = { ...account };
  newAccount.savings = newAccount.savings - 50;
  setAccount(newAccount);
}
```
