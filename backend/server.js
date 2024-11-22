const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Backend is running!');
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

const authRoutes = require('./routes/auth');

app.use('/api/auth', authRoutes);


const uploadRoutes = require('./routes/upload');

app.use('/api/upload', uploadRoutes);
