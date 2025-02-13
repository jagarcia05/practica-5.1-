

interface CardProps {
  imageSource: string;
  
  description: string;
}

function Card({ imageSource, description }: CardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col font-family-p">
      <img className="w-50 h-50" src={imageSource}></img>
      <div className="p-6">
        
        <p className="text-tx-primary mb-4 text-p ">
          {description}
        </p>
        
        
      </div>
    </div>
  );
}

export default Card;