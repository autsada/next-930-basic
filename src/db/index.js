import { Pool } from 'pg'

export const createDB = () => {
  return new Pool({
    database: 'test',
    user: 'test',
    password: 'abc123',
    host: 'localhost',
    port: 5432,
  })
}

export const getMovies = async () => {
  const res = await createDB().query(
    "SELECT id, title, excerpt, detail, writer, TO_CHAR(publish_date, 'MON-DD-YYYY HH12:MIPM') post_date FROM movies ORDER BY publish_date DESC"
  )

  return res.rows
}
