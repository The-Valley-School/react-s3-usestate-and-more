# **VIDEO 05 - Modificar el estado componente padre**

En este vídeo veremos cómo podemos actualizar el estado de un componente padre, además trabajaremos también con la raíz y veremos como al igual que sucede con los objetos, para los arays también debemos hacer una copia antes de actualizar el estado.

En nuestro ejemplo tendremos un estado en el componente app.js que actualizaremos desde sus componentes hijos Thunder Observatory.

El componente a app.js qtendremos un estado y una función para añadir un nuevo evento rayo:

```jsx
const [thunderList, setThunderList] = React.useState([new Date()]);

const addThunder = () => {
  const newThunderList = [...thunderList, new Date()];
  // no hace falta el push porque en la creación se le ha añadido un elemento
  // newThunderList.push(new Date());
  setThunderList(newThunderList);
}
```

Mostraremos la lista de rayos y pasaremos la función a los componentes ThunderObservatory:

```jsx
<h2>Lista de rayos:</h2>
<ul>
  {thunderList.map(thunder => <li key={thunder.getTime()}>{thunder.toString()}</li>)}
</ul>

<h2>Observatorios de rayos:</h2>
<ThunderObservatory addThunder={addThunder} name="Madrid"></ThunderObservatory>
<ThunderObservatory addThunder={addThunder} name="Barcelona"></ThunderObservatory>
<ThunderObservatory addThunder={addThunder} name="Valencia"></ThunderObservatory>
```

El componente ThunderObservatory quedará así:

```jsx
import "./ThunderObservatory.css";

const ThunderObservatory = ({name, addThunder}) => {

  return(
    <button onClick={addThunder} className="thunder-observatory">
      Notificar rayo en {name}
    </button>
  );
}

export default ThunderObservatory;
```

Recuerda que el código que hemos visto durante los vídeos puedes encontrarlo en el siguiente repositorio:

<https://github.com/The-Valley-School/react-s3-usestate-and-more>

