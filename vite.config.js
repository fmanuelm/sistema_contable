import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/js/app.jsx', 'resources/css/app.css'],
            refresh: true,
        }),
        react(),

    ],
    server: {
        cors: true, // Permite solicitudes CORS
        origin: 'http://127.0.0.1:5173', // Dirección del servidor Vite
    },
});
