import logger from './logger';
import dotenv from 'dotenv';
import fs from 'fs';

if (fs.existsSync('.env')) {
    logger.debug('Using .env file to supply config environment variables');
    dotenv.config({ path: '.env' });
} else {
    logger.debug('Using .env.example file to supply config environment variables');
    dotenv.config({ path: '.env.example' });  // you can delete this after you create your own .env file!
}
export const ENVIRONMENT = process.env.NODE_ENV;
const prod = ENVIRONMENT === 'production'; // Anything else is treated as 'dev'

export const IBM_CLOUD_API_KEY = process.env['IBM_CLOUD_API_KEY'];
export const IBM_CLOUD_API_URL = process.env['IBM_CLOUD_API_URL'];

if (!IBM_CLOUD_API_KEY) {
    logger.error('No IBM_CLOUD_API_API. Set IBM_CLOUD_API_API environment variable.');
    process.exit(1);
}
if (!IBM_CLOUD_API_URL) {
    logger.error('No IBM_CLOUD_API_URL. Set IBM_CLOUD_API_URL environment variable.');
    process.exit(1);
}
