import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    proxy: {

      // Proxying websockets or socket.io
      '/sockets': {
        // target: 'ws://Nodejs.alvisk.repl.co:3000',
        target: 'ws://localhost:4000',
        ws: true
      }
    }
  }
})