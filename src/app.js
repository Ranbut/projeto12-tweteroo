import express, { json } from 'express';
import cors from 'cors';

const server = express();
server.use(cors());
server.use(json());

const PORT = 5000;

server.listen(5000, () => {
  console.log(`Servidor iniciado na porta: ${PORT}`);
  console.log(`Use: http://localhost:${PORT}`);
});
