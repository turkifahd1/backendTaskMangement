const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

// const userRoutes = require('./routers/userRoutes');
const taskRoutes = require('./routers/taskRoutes');


const authRoutes = require('./routers/authRoutes');
const userRoutes = require('./routers/userauthRoutes');
const app = express();
const port = process.env.PORT || 7000;

app.use(express.json());
app.use(cors());

app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/tasks', taskRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});
