import { Pool } from 'pg';

const pool = new Pool({
  host: 'ep-flat-frog-a4rgezkb-pooler.us-east-1.aws.neon.tech',
  port: 'your_database_port',
  user: 'your_database_username',
  password: 'your_database_password',
  database: 'your_database_name',
});

export default pool;