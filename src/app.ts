import express, { Request, Response } from 'express';
import authRouter from './routes/authRouter';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine', 'ejs');


app.use('/auth', authRouter);

app.get('/', (req: Request, res: Response) => {
  res.redirect('/auth');
});

app.get('/auth', (req: Request, res: Response) => {
  res.render('index');
})
app.use((req, res) => {
  res.status(404).send('Error 404');
});

app.listen(3000, () => { console.log('server is running') });
