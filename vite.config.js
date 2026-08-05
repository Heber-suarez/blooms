import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                index: resolve(__dirname, 'index.html'),
                sobremi: resolve(__dirname, 'sobremi.html'),
                productos: resolve(__dirname, 'productos.html'),
                carrito: resolve(__dirname, 'carrito.html'),
                tienda: resolve(__dirname, 'tienda.html'),
            },
        },
    },
});