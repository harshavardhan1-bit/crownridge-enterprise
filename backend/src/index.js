import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import pkg from 'pg';

dotenv.config();

const { Pool } = pkg;

// PostgreSQL connection (Heroku sets DATABASE_URL automatically)
const pool = new Pool(
  process.env.DATABASE_URL
    ? {
        connectionString: process.env.DATABASE_URL,
        ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
      }
    : {
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT || 5432,
        database: process.env.DB_NAME || 'crownridge_tracker',
        user: process.env.DB_USER || 'postgres',
        password: process.env.DB_PASSWORD,
      }
);

const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:5173',
    credentials: true,
  })
);
app.use(express.json());

// Health check
app.get('/api/health', async (req, res) => {
  try {
    await pool.query('SELECT 1');
    res.json({ status: 'Server is running', db: 'connected', timestamp: new Date() });
  } catch (err) {
    res.json({ status: 'Server is running', db: 'disconnected', error: err.message, timestamp: new Date() });
  }
});

// Make pool available to routes
app.locals.pool = pool;

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});

