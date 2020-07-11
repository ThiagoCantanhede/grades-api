import express from 'express';
import { json, urlencoded } from 'body-parser';
import cors from 'cors';

import gradeRouter from './routes/gradeRouter.js';
import { url, mongoose } from './models/index.js';

(async () => {
  try {
    console.log(url);
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Conectado ao banco de dados');
  } catch (error) {
    console.log(`Erro ao conectar no banco de dados! ${error}`);

    process.exit();
  }
})();

const app = express();

//define o dominio de origem para consumo do servico
app.use(json());
app.use(urlencoded({ extended: true }));
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
