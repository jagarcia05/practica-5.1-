import Header from "./components/header";
import Card from "./components/card";
import Card2 from "./components/card2";
import Slider from "./components/slider";


function App() {
  return (
    <div>
     <Header navlogo="./src/img/descarga.jpg" navitem1="pepe" navitem2="pep1" navitem3="pepe1" navitem4="pepe" navlupa="./src/img/lupa.png"></Header>
       

    <main className="bg-secundary">
      <div className="container mx-auto grid grid-cols-5 gap-6 p-6">
        <Card
          imageSource="./src/img/descarga.png"
         
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec nulla ac justo egestas lacinia."
        />
        <Card
          imageSource="./src/img/descarga.png"
         
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec nulla ac justo egestas lacinia."
        />
        <Card
          imageSource="./src/img/descarga.png"
         
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec nulla ac justo egestas lacinia."
        />
        <Card
          imageSource="./src/img/descarga.png"
         
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec nulla ac justo egestas lacinia."
        />
        <Card
          imageSource="./src/img/descarga.png"
         
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec nulla ac justo egestas lacinia."
        />
      </div> 

      <h1 className="text-h1 text-center">Lo que hacemos</h1>
      <div className="container mx-auto grid grid-cols-5 gap-6 p-6">
      <Card2 titulo="titulo" titulo2="titulo2" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec nulla ac justo egestas lacinia."/>
      <Card2 titulo="titulo" titulo2="titulo2" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec nulla ac justo egestas lacinia."/>
      <Card2 titulo="titulo" titulo2="titulo2" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec nulla ac justo egestas lacinia."/>
      <Card2 titulo="titulo" titulo2="titulo2" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec nulla ac justo egestas lacinia."/>
      <Card2 titulo="titulo" titulo2="titulo2" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec nulla ac justo egestas lacinia."/>

      </div>

      <div className="container mx-auto text-center" >
      <Slider images={["./src/img/descarga.png", "./src/img/descarga.jpg", "./src/img/descarga.jpg"]} />

      </div>

    </main>
        
      
      
    </div>
  );
}

export default App;