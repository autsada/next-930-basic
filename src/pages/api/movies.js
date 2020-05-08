import { getMovies } from '../../db'

export default async (req, res) => {
  const movies = await getMovies()

  res.status(200).json(movies)
}
