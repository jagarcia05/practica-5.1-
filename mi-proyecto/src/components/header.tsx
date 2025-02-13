interface HeaderProps {
    navlogo: string;
    navitem1: string;
    navitem2: string;
    navitem3: string;
    navitem4: string;
    navlupa: string;
}

function Header({ navlogo, navitem1, navitem2, navitem3, navitem4, navlupa }: HeaderProps) {
    return (
        <header className="bg-white shadow-md">
        <div className="container mx-auto flex items-center justify-between p-4 text-p font-family-p">
          
        
          <div className="flex-shrink-0">
            <img src={navlogo} alt="Logo de la empresa" className="h-18" />
          </div>
          
          
          <nav>
            <ul className="flex space-x-6 text-tx-primary font-h1 text-lg">
              <li>
                <a href="#item1" className="hover:text-tx-secundary transition duration-300 ease-in-out">{navitem1}</a>
              </li>
              <li>
                <a href="#item2" className="hover:text-tx-secundary transition duration-300 ease-in-out">{navitem2}</a>
              </li>
              <li>
                <a href="#item3" className="hover:text-tx-secundary transition duration-300 ease-in-out">{navitem3}</a>
              </li>
              <li>
                <a href="#item4" className="hover:text-tx-secundary transition duration-300 ease-in-out">{navitem4}</a>
              </li>
            </ul>
          </nav>
          
        
          <div className="flex items-center">
            <img 
              src={navlupa} 
              alt="Icono de búsqueda" 
              className="h-6 cursor-pointer hover:text-tx-secondary transition duration-300 ease-in-out" 
            />
          </div>
        </div>
      </header>
      
    );
}

export default Header;
