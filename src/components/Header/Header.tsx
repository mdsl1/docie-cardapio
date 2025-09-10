import { useState } from 'react';

const Header = () => {
    const [cartCount] = useState(0);
    const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false);

    const handleShowCart = () => {
        // Lógica para mostrar o carrinho.
        console.log("Carrinho exibido!");
    };

    return (
        <header className="sticky top-0 w-full z-30">
            <div className="flex flex-col md:flex-row items-center justify-between w-full h-16 md:h-24 bg-yellow-900 text-white shadow-lg">
                {/* Título e logo */}
                <div className="flex items-center h-full w-full md:w-2/5 md:ml-6 px-4">
                    <a href="#">
                        <img src="./src/Medias/Logo.png" alt="Logo do site" className="w-20 mr-5 rounded-full" />
                    </a>
                    <h1 className="font-extrabold text-2xl md:text-3xl font-serif">Dociê Bolos e Doces</h1>
                </div>

                {/* Links de navegação */}
                <nav className="flex items-center gap-12 justify-end w-full md:w-3/5 md:mr-15 gap-4 text-md md:text-2xl">
                    <a href="#" className="hover:scale-110 transition-transform hover:shadow-glow-md">Cardápio</a>
                    <a href="#" className="hover:scale-110 transition-transform hover:shadow-glow-md">Sobre a Dociê</a>

                    {/* Botão do carrinho */}
                    <div className="relative">
                        <button onClick={handleShowCart} className="w-8 h-8 md:w-10 md:h-10 p-1 flex items-center justify-center bg-transparent border-none fill-white hover:scale-110 transition-transform">
                        <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M891 308H340q-6 0-10.5-4t-5.5-10l-32-164q-2-14-12-22.5T256 99H110q-15 0-25.5 10.5T74 135v5q0 15 10.5 26t25.5 11h102q4 0 7 2.5t4 6.5l102 544q3 19 20 28 8 5 18 5h17q-22 25-21 58.5t25 56.5 57.5 23 58-23 25.5-56.5-22-58.5h186q-23 25-21.5 58.5T693 878t57.5 23 57.5-23 25-56.5-21-58.5h17q15 0 25.5-10.5T865 727v-8q0-15-11-25.5T828 683H409q-6 0-10.5-4t-5.5-9l-10-54q-1-8 4-14t12-5h460q13 0 22.5-8t11.5-21l33-219q3-16-7.5-28.5T891 308z"/></svg>
                        </button>
                        {cartCount > 0 && (
                        <span className="absolute -right-2 top-0 md:top-2 w-5 h-5 md:w-6 md:h-6 text-xs md:text-sm flex items-center justify-center bg-red-600 rounded-full font-sans">
                            {cartCount}
                        </span>
                        )}
                    </div>
                    
                    {/* Botão de conta com dropdown */}
                    <div className="relative">
                        <button onClick={() => setIsAccountMenuOpen(!isAccountMenuOpen)} className="w-8 h-8 md:w-10 md:h-10 p-1 flex items-center justify-center bg-transparent border-none fill-white hover:scale-110 transition-transform">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM7.07 18.28C7.5 17.38 10.12 16.5 12 16.5C13.88 16.5 16.51 17.38 16.93 18.28C15.57 19.36 13.86 20 12 20C10.14 20 8.43 19.36 7.07 18.28ZM12 14.5C13.46 14.5 16.93 15.09 18.36 16.83C19.38 15.49 20 13.82 20 12C20 7.59 16.41 4 12 4C7.59 4 4 7.59 4 12C4 13.82 4.62 15.49 5.64 16.83C7.07 15.09 10.54 14.5 12 14.5ZM12 6C10.06 6 8.5 7.56 8.5 9.5C8.5 11.44 10.06 13 12 13C13.94 13 15.5 11.44 15.5 9.5C15.5 7.56 13.94 6 12 6ZM10.5 9.5C10.5 10.33 11.17 11 12 11C12.83 11 13.5 10.33 13.5 9.5C13.5 8.67 12.83 8 12 8C11.17 8 10.5 8.67 10.5 9.5Z"/></svg>
                        </button>
                        {isAccountMenuOpen && (
                        <ul className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl text-zinc-900 z-50">
                            <li><a href="#" className="block px-4 py-2 hover:bg-zinc-200">Em Breve...</a></li>
                        </ul>
                        )}
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header