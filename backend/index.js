import cors from 'cors';
import express, { json } from 'express';
import { connect } from 'mongoose';
import dotenv from 'dotenv'

dotenv.config()


import authRoutes from './routes/auth.js';

const app = express();

const allowedOrigin = ['http://localhost:7000'];


app.use(cors({
    origin: allowedOrigin,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type'],
    credentials: true
  }));
app.use(json());

app.use('/api/auth', authRoutes);


// MongoDB connection
connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(err => console.error('MongoDB error:', err));

const PORT = process.env.PORT || 8000;
console.log(process.env.PORT);

app.listen(8000, () => console.log(`Server running on port ${PORT}`));


app.get('/', (req, res) => {
    res.send('Server is running! good and');
  });

app.get('/working',(req, res)=> {
    res.json({massege: "work in progress"})
});