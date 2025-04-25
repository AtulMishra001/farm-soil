import cors from 'cors';
import express, { json } from 'express';
import { connect } from 'mongoose';
import dotenv from 'dotenv'

dotenv.config()


import authRoutes from './routes/auth.js';

const app = express();

const allowedOrigin = 'https://psychic-goggles-v66w5wpp97563p666-8000.app.github.dev/';


app.use(cors({
    origin: allowedOrigin,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type'],
    credentials: true
  }));
app.use(json());

app.use('/api/auth', authRoutes);


// MongoDB connection
connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB Atlas'))
.catch(err => console.error('MongoDB error:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


app.get('/', (req, res) => {
    res.send('Server is running! good and');
  });

app.get('/working',(req, res)=> {
    res.send("call is success full")
});