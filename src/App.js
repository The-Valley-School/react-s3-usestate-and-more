import './App.css';
import TeacherName from './components/TeacherName/TeacherName';
import Counter from './components/Counter/Counter';
import ImageSlider from './components/ImageSlider/ImageSlider';

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
      <h2>Componente nombre:</h2>
      <TeacherName></TeacherName>

      <h2>Contador:</h2>
      <Counter></Counter>
      <Counter></Counter>

      <h2>Slider de imágenes</h2>
      <ImageSlider images={imagesOne}></ImageSlider>
      <ImageSlider images={imagesTwo}></ImageSlider>
    </div>
  );
}

export default App;
