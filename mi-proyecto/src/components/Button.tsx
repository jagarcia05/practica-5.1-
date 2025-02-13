interface ButtonProps {
  text: string;
  link?: string;
  onClick?: () => void;
}

const Button = ({ text, onClick, link }: ButtonProps) => {
  // Si `link` está presente, usamos un <a>. Si no, usamos un <button>
  if (link) {
    return (
      <a
        href={link}
        className="bg-button-primary hover:bg-button-hover text-primary font-bold py-2 px-4 rounded text-p font-family-p block text-center w-50 mx-auto mt-4"
      >
        {text}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className="bg-button-primary hover:bg-button-hover text-primary font-bold py-2 px-4 rounded text-p font-family-p"
    >
      {text}
    </button>
  );
};

export default Button;
