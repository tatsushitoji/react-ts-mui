import dotenv from 'dotenv';

dotenv.config();

const { NODE_ENV } = process.env;
export const nodeEnv = NODE_ENV || 'development';
