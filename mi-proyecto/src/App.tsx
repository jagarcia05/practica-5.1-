import Header from "./components/Header";
import CardActividad from "./components/CardActividad";
import CardTrabajadores from "./components/CardTrabajadores";
import Slider from "./components/Slider";

function App() {
  return (
    <div>
      <Header navlogo="./src/img/logo.jpg" navitem1="Home" navitem2="About us" navitem3="Services" navitem4="Contact" navlupa="./src/img/lupa.png"></Header>

      <main className="bg-secundary">
        <div className="container mx-auto grid grid-cols-5 gap-6 p-6 justify-center">
          <CardTrabajadores
            imageSource="src/img/employee1.jpg"
            name="Ana Rodriguez"
            role="Directora creativa"
            description="Ana es la mente creativa detrás de nuestras campañas. Con una visión innovadora y una pasión por el diseño, transforma ideas en estrategias publicitarias impactantes."
          />
          <CardTrabajadores
            imageSource="src/img/employee2.jpg"
            name="Carlos Méndez"
            role="Estratega de marketing"
            description="Carlos analiza tendencias y diseña planes de marketing efectivos para potenciar la presencia digital de nuestros clientes. Su enfoque estratégico garantiza resultados exitosos."
          />
          <CardTrabajadores
            imageSource="src/img/employee3.jpg"
            name="Sofía García"
            role="Diseñadora gráfica"
            description="Sofía da vida a las ideas con diseños atractivos y funcionales. Su creatividad y atención al detalle hacen que cada campaña visual sea única y memorable."
          />
          <CardTrabajadores
            imageSource="src/img/employee4.jpg"
            name="Javier Pérez"
            role="Analista de datos"
            description="Javier convierte los números en información valiosa. Con su habilidad en analítica digital, optimiza campañas y maximiza el impacto de cada estrategia publicitaria."
          />
          <CardTrabajadores
            imageSource="src/img/employee5.jpg"
            name="Laura Martínez"
            role="Redactora de contenido"
            description="Laura encuentra las palabras perfectas para cada mensaje. Con su estilo persuasivo y creativo, crea textos que conectan con el público y potencian marcas."
          />
        </div>

        <h1 className="text-h1 text-center">Lo que hacemos</h1>
        <div className="container mx-auto grid grid-cols-5 gap-6 p-6 justify-center">
          <CardActividad
            titulo="Estrategia de Marketing"
            titulo2="Planificación"
            description="Desarrollamos estrategias de marketing personalizadas para cada cliente, asegurando que cada campaña esté alineada con sus objetivos y alcance el público adecuado."
          />
          <CardActividad
            titulo="Diseño Gráfico"
            titulo2="Creatividad Visual"
            description="Creamos diseños gráficos impactantes que capturan la esencia de su marca y atraen la atención de su audiencia. Desde logotipos hasta material promocional."
          />
          <CardActividad
            titulo="Gestión de Redes Sociales"
            titulo2="Presencia Digital"
            description="Manejamos sus perfiles en redes sociales, creando contenido atractivo y gestionando la interacción con sus seguidores para máxima confianza"
          />
          <CardActividad
            titulo="Publicidad Digital"
            titulo2="Campañas"
            description="Diseñamos y ejecutamos campañas de publicidad digital en diversas plataformas, optimizando cada anuncio para maximizar el retorno de inversión."
          />
          <CardActividad
            titulo="Análisis de Datos"
            titulo2="Optimización"
            description="Utilizamos herramientas de análisis de datos para medir el rendimiento de sus campañas y ajustar las estrategias en tiempo real, asegurando resultados óptimos y eficientes."
          />
        </div>

        <div className="container mx-auto text-center">
          <Slider images={["./src/img/slider1.jpg", "./src/img/slider2.jpg", "./src/img/slider3.jpg"]} />
        </div>
      </main>
    </div>
  );
}

export default App;