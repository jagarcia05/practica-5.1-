import Button from "./Button"; // Corrige el nombre del archivo (button en vez de botton)

interface CardProps {
  titulo: string;
  titulo2: string;
  description: string;
}

function Card({ titulo2, description }: CardProps) {
  return (
    <div className="card-container">
      
      <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col font-family-p size-p text-center">
        <h1 className="size-h1 font-family-h1 text-h1">{titulo2}</h1>
        <div className="p-6">
          <p className="text-tx-primary mb-4 text-p">
            {description}
          </p>
          <Button text="ver más" />
        </div>
      </div>
    </div>
  );
}

export default Card;
