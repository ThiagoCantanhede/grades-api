import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import { gradeRouter } from './routes/gradeRouter.js';
import { db } from './models/index.js';

(async () => {
  try {
    await db.mongoose.connect(
      'mongodb+srv://thiagolopes:archer1612@cluster0.c85mx.gcp.mongodb.net/Desafio4?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log('Conectado ao banco de dados');
  } catch (error) {
    console.log(`Erro ao conectar no banco de dados! ${error}`);

    process.exit();
  }
})();

const app = express();

//define o dominio de origem para consumo do servico
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: 'http://localhost:8080',
  })
);

app.use(gradeRouter);

app.get('/', (req, res) => {
  res.send('API em execucao');
});

app.listen(process.env.PORT || 8081, () => {
  console.log(`Servidor em execucao na porta ${process.env.PORT}`);
});
