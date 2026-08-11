import { defineConfig } from 'vite';
import { resolve } from 'path';
import { imagetools } from 'vite-imagetools'

export default defineConfig({
    plugins: [
        imagetools()
    ],
    
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