const Footer = () => {
    return (
        <footer className="mt-24 px-6 py-3 bg-yellow-900 text-white w-full">
            <div className="flex flex-col md:flex-row md:items-center justify-around gap-6 text-base md:text-lg">
                {/* Logo */}
                <img src="./src/Medias/Logo.png" alt="Logo do site" className="w-1/4 md:w-1/5 mb-2 rounded-full" />
                
                {/* Informações de contato */}
                <div className="w-full md:w-1/3">
                <h3 className="font-extrabold text-3xl md:text-4xl font-serif mb-4">Informações de Contato</h3>
                <div className="flex items-center mb-2 gap-2">
                    <svg viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4"><path d="M1 5V1H7V5L4.5 7.5L8.5 11.5L11 9H15V15H11C5.47715 15 1 10.5228 1 5Z"/></svg>
                    <p className="m-0">(14) 99876-5432</p>
                </div>
                <div className="flex items-center mb-2 gap-2">
                    <svg viewBox="0 0 16 16" fill="white" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="w-4 h-4"><rect fill="none" /><path d="M8,0C4.688,0,2,2.688,2,6c0,6,6,10,6,10s6-4,6-10C14,2.688,11.312,0,8,0z M8,8C6.344,8,5,6.656,5,5s1.344-3,3-3s3,1.344,3,3 S9.656,8,8,8z" /></svg>
                    <p className="m-0">Avenida Brasil Brasileiro, 1984 - Jardim Ilha de Vera Cruz, Marilia - SP / CEP: 44444-444</p>
                </div>
                <div className="flex items-center mb-2 gap-2">
                    <svg viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4"><path d="M22,5V9L12,13,2,9V5A1,1,0,0,1,3,4H21A1,1,0,0,1,22,5ZM2,11.154V19a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V11.154l-10,4Z"/></svg>
                    <p className="m-0">dociebolosedoces@contato.com.br</p>
                </div>
                </div>

                {/* Horário de funcionamento */}
                <div className="w-full md:w-1/3 mt-4 md:mt-0">
                <h3 className="font-extrabold text-3xl md:text-4xl font-serif mb-4">Horário de Funcionamento</h3>
                <div className="flex items-center mb-2 gap-2">
                    <svg viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4"><path fillRule="evenodd" clipRule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM7 3V8.41421L10.2929 11.7071L11.7071 10.2929L9 7.58579V3H7Z"/></svg>
                    <p className="m-0">Segunda à Sexta: 6:00 - 21:30</p>
                </div>
                <div className="flex items-center mb-2 gap-2">
                    <svg viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4"><path fillRule="evenodd" clipRule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM7 3V8.41421L10.2929 11.7071L11.7071 10.2929L9 7.58579V3H7Z"/></svg>
                    <p className="m-0">Finais de Semana: 6:00 - 20:30</p>
                </div>
                <div className="flex items-center mb-2 gap-2">
                    <svg viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4"><path fillRule="evenodd" clipRule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM7 3V8.41421L10.2929 11.7071L11.7071 10.2929L9 7.58579V3H7Z"/></svg>
                    <p className="m-0">Feriados: 6:30 - 19:00</p>
                </div>
                </div>
            </div>
            <div className="mt-8 text-center text-md border-t border-white pt-4">
                <p>&copy; Copyright 2025 - mdsl1. Todos os direitos reservados.</p>
                <p className="mt-2">Este site foi criado exclusivamente para demonstração de habilidades em desenvolvimento web.</p>
                <p className="mt-2">Nenhum conteúdo aqui deve ser considerado como representativo de uma aplicação comercial ou real. Todos os direitos e marcas mencionados são de seus respectivos proprietários.</p>
            </div>
        </footer>
    );
};

export default Footer;