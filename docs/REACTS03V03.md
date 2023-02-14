# **VIDEO 03 - ImageSlider con useState**

En este vídeo vamos a implementar un slider de imágenes haciendo uso de lo que hemos aprendido hasta ahora.

El código de nuestro componente queda de la siguiente manera:

```jsx
import "./ImageSlider.css";
import React from "react";

const ImageSlider = ({images}) => {

  const [currentImage, setCurrentImage] = React.useState(0);

  const previousImage = () => {
    const value = currentImage - 1;
    if (value >= 0) {
      setCurrentImage(value);
    } else {
      console.error("Ya has llegado al principio de las imágenes, esta es la primera.");
    }
  }

  const nextImage = () => {
    const value = currentImage + 1;
    if (value < images.length) {
      setCurrentImage(value);
    } else {
      console.error("Ya has llegado al final del array, esta es la última.");
    }
  }

  return (
    <div className="image-slider">
      <span className="image-slider__indicator">{currentImage + 1} de {images.length}</span>
      <button onClick={previousImage}>Anterior</button>
      <img alt="Random sample to show useState" src={images[currentImage]} />
      <button onClick={nextImage}>Siguiente</button>
    </div>
  );
}

export default ImageSlider;
```

Este componente hace lo siguiente:

1. Importa la hoja de estilo y React para hacer uso de useState
2. Acepta una propiedad "images" que contiene una lista de imágenes.
3. Usa el hook "useState" para crear un estado llamado "currentImage". Este estado representa la imagen actual que se está viendo en el carrusel y se inicializa en 0, lo que significa que la primera imagen de la lista será la que se muestre primero.
4. Define dos funciones, "previousImage" y "nextImage". Estas funciones permiten navegar por las imágenes en el carrusel. Si se llama a la función "previousImage", el estado "currentImage" disminuirá en 1, lo que significa que se mostrará la imagen anterior en la lista. Si se llama a la función "nextImage", el estado "currentImage" aumentará en 1, lo que significa que se mostrará la siguiente imagen en la lista.
5. La vista muestra la imagen actual, un indicador que muestra el número de la imagen actual y la cantidad total de imágenes, y dos botones que permiten navegar por las imágenes.

Y para hacer uso de este componente tenemos que pasarle las imágenes como props desde un componente superior, en nuestro caso desde App:

```jsx
function App() {
  const imagesOne = [
    "https://picsum.photos/id/1000/400/200",
    "https://picsum.photos/id/1002/400/200",
    "https://picsum.photos/id/1003/400/200",
    "https://picsum.photos/id/1004/400/200",
    "https://picsum.photos/id/1005/400/200",
  ];

  const imagesTwo = [
    "https://picsum.photos/id/1006/400/200",
    "https://picsum.photos/id/1008/400/200",
    "https://picsum.photos/id/1009/400/200",
    "https://picsum.photos/id/1010/400/200",
  ];

  return (
    <div className="app">

      <h2>Slider de imágenes</h2>
      <ImageSlider images={imagesOne}></ImageSlider>
      <ImageSlider images={imagesTwo}></ImageSlider>

    </div>
  );
}
```
