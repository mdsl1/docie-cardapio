import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

// Busca a div no seu arquivo index.html
const rootElement = document.getElementById('root');
if (rootElement) {
    // Cria a raiz do React e renderiza a aplicação
    createRoot(rootElement).render(
        <React.StrictMode>
        <App />
        </React.StrictMode>
    );
} else {
    console.error('Element with id "root" not found in the document.');
}
