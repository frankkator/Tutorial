import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { getShadcnRegistryIndex } from 'shadcn'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), getShadcnRegistryIndex()],
})
