interface CardProps {
  imageSource: string;
  name: string;
  role: string;
  description: string;
}

function CardTrabajadores({ imageSource, name, role, description }: CardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col text-center font-family-p">
      <img className="w-full h-auto object-cover" src={imageSource} alt={name} />
      <div className="p-6">
        <h3 className="text-lg font-semibold text-tx-primary">{name}</h3>
        <h4 className="text-sm italic text-gray-600">{role}</h4>
        <p className="text-tx-primary mt-2 text-p">{description}</p>
      </div>
    </div>
  );
}

export default CardTrabajadores;
