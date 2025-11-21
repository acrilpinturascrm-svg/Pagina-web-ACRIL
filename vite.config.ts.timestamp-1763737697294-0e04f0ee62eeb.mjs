// vite.config.ts
import { defineConfig } from "file:///C:/Users/USUARIO/Desktop/Pagina-web-ACRIL/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/USUARIO/Desktop/Pagina-web-ACRIL/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig({
  base: "/",
  // Dominio personalizado - no usar subdirectorio
  plugins: [react()],
  optimizeDeps: {
    include: ["react", "react-dom"]
  },
  build: {
    // Optimizaciones para producción
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          // Separar vendor libraries
          vendor: ["react", "react-dom"],
          // Separar librerías de UI
          ui: ["lucide-react"],
          // Separar utilidades
          utils: ["yup", "react-lazy-load-image-component"]
        }
      }
    },
    // Optimizar assets
    assetsInlineLimit: 4096,
    chunkSizeWarningLimit: 1e3
  },
  // Optimizaciones de desarrollo
  server: {
    hmr: {
      overlay: false
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxVU1VBUklPXFxcXERlc2t0b3BcXFxcUGFnaW5hLXdlYi1BQ1JJTFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcVVNVQVJJT1xcXFxEZXNrdG9wXFxcXFBhZ2luYS13ZWItQUNSSUxcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL1VTVUFSSU8vRGVza3RvcC9QYWdpbmEtd2ViLUFDUklML3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0J1xyXG5cclxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBiYXNlOiAnLycsIC8vIERvbWluaW8gcGVyc29uYWxpemFkbyAtIG5vIHVzYXIgc3ViZGlyZWN0b3Jpb1xyXG4gIHBsdWdpbnM6IFtyZWFjdCgpXSxcclxuICBvcHRpbWl6ZURlcHM6IHtcclxuICAgIGluY2x1ZGU6IFsncmVhY3QnLCAncmVhY3QtZG9tJ11cclxuICB9LFxyXG4gIGJ1aWxkOiB7XHJcbiAgICAvLyBPcHRpbWl6YWNpb25lcyBwYXJhIHByb2R1Y2NpXHUwMEYzblxyXG4gICAgbWluaWZ5OiAndGVyc2VyJyxcclxuICAgIHRlcnNlck9wdGlvbnM6IHtcclxuICAgICAgY29tcHJlc3M6IHtcclxuICAgICAgICBkcm9wX2NvbnNvbGU6IHRydWUsXHJcbiAgICAgICAgZHJvcF9kZWJ1Z2dlcjogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICByb2xsdXBPcHRpb25zOiB7XHJcbiAgICAgIG91dHB1dDoge1xyXG4gICAgICAgIG1hbnVhbENodW5rczoge1xyXG4gICAgICAgICAgLy8gU2VwYXJhciB2ZW5kb3IgbGlicmFyaWVzXHJcbiAgICAgICAgICB2ZW5kb3I6IFsncmVhY3QnLCAncmVhY3QtZG9tJ10sXHJcbiAgICAgICAgICAvLyBTZXBhcmFyIGxpYnJlclx1MDBFRGFzIGRlIFVJXHJcbiAgICAgICAgICB1aTogWydsdWNpZGUtcmVhY3QnXSxcclxuICAgICAgICAgIC8vIFNlcGFyYXIgdXRpbGlkYWRlc1xyXG4gICAgICAgICAgdXRpbHM6IFsneXVwJywgJ3JlYWN0LWxhenktbG9hZC1pbWFnZS1jb21wb25lbnQnXVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8vIE9wdGltaXphciBhc3NldHNcclxuICAgIGFzc2V0c0lubGluZUxpbWl0OiA0MDk2LFxyXG4gICAgY2h1bmtTaXplV2FybmluZ0xpbWl0OiAxMDAwLFxyXG4gIH0sXHJcbiAgLy8gT3B0aW1pemFjaW9uZXMgZGUgZGVzYXJyb2xsb1xyXG4gIHNlcnZlcjoge1xyXG4gICAgaG1yOiB7XHJcbiAgICAgIG92ZXJsYXk6IGZhbHNlXHJcbiAgICB9XHJcbiAgfVxyXG59KTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF1VCxTQUFTLG9CQUFvQjtBQUNwVixPQUFPLFdBQVc7QUFHbEIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsTUFBTTtBQUFBO0FBQUEsRUFDTixTQUFTLENBQUMsTUFBTSxDQUFDO0FBQUEsRUFDakIsY0FBYztBQUFBLElBQ1osU0FBUyxDQUFDLFNBQVMsV0FBVztBQUFBLEVBQ2hDO0FBQUEsRUFDQSxPQUFPO0FBQUE7QUFBQSxJQUVMLFFBQVE7QUFBQSxJQUNSLGVBQWU7QUFBQSxNQUNiLFVBQVU7QUFBQSxRQUNSLGNBQWM7QUFBQSxRQUNkLGVBQWU7QUFBQSxNQUNqQjtBQUFBLElBQ0Y7QUFBQSxJQUNBLGVBQWU7QUFBQSxNQUNiLFFBQVE7QUFBQSxRQUNOLGNBQWM7QUFBQTtBQUFBLFVBRVosUUFBUSxDQUFDLFNBQVMsV0FBVztBQUFBO0FBQUEsVUFFN0IsSUFBSSxDQUFDLGNBQWM7QUFBQTtBQUFBLFVBRW5CLE9BQU8sQ0FBQyxPQUFPLGlDQUFpQztBQUFBLFFBQ2xEO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQTtBQUFBLElBRUEsbUJBQW1CO0FBQUEsSUFDbkIsdUJBQXVCO0FBQUEsRUFDekI7QUFBQTtBQUFBLEVBRUEsUUFBUTtBQUFBLElBQ04sS0FBSztBQUFBLE1BQ0gsU0FBUztBQUFBLElBQ1g7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
