import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv';
dotenv.config();
/* eslint-disable no-undef */
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    host:"192.168.1.77",
    
   },
  //  define: {
  //   'process.env': {
  //     token: JSON.stringify(process.env.bearerToken)
  //   }
  // }
   
})
