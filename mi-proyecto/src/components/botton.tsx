
interface ButtonProps {
    text: string;
    
    onClick?: () => void;
  }
  
  const Button = ({ text, onClick }: ButtonProps) => {
   
  
  
    return (
      <button className="bg-button-primary hover:bg-button-hover text-primary font-bold py-2 px-4 rounded text-p font-family-p " onClick={onClick}>
        {text}
      </button>
    );
  };
  
  export default Button;
  