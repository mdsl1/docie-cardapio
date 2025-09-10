import Header from './components/Header/Header.tsx';
import Footer from './components/Footer/Footer.tsx';

const App = () => {
  return (
    <div className="bg-zinc-100 min-h-screen font-sans">
      <Header />
      <main className="p-5 mt-10 md:p-4">
        <h2 className="text-4xl text-center text-zinc-800 font-bold mb-8">Página Inicial</h2>
        <p className="text-lg text-center mt-4 text-zinc-600">Este é o espaço para o conteúdo principal. Vamos preenchê-lo em seguida!</p>
        <p className="text-lg text-center mt-4 text-zinc-600">Este é o espaço para o conteúdo principal. Vamos preenchê-lo em seguida!</p>
        <p className="text-lg text-center mt-4 text-zinc-600">Este é o espaço para o conteúdo principal. Vamos preenchê-lo em seguida!</p>
        <p className="text-lg text-center mt-4 text-zinc-600">Este é o espaço para o conteúdo principal. Vamos preenchê-lo em seguida!</p>
        <p className="text-lg text-center mt-4 text-zinc-600">Este é o espaço para o conteúdo principal. Vamos preenchê-lo em seguida!</p>
      </main>
      <Footer />
    </div>
  );
};

export default App;