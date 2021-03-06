import React from 'react'
import Link from 'next/link'

import { getMovies } from '../../db'

function index({ movies }) {
  return (
    <div>
      <h2>Blogs Page</h2>

      <div>
        {movies &&
          movies.map((movie) => (
            <Link
              href='/blogs/[blogId]'
              as={`/blogs/${movie.id}`}
              key={movie.id}
            >
              <div
                style={{
                  border: '0.5px solid black',
                  borderRadius: '4px',
                  margin: '5px',
                  padding: '2px 10px',
                  cursor: 'pointer',
                }}
              >
                <h3>{movie.title}</h3>
                <span>
                  {movie.writer} / {movie.post_date}
                </span>
                <p>{movie.excerpt}</p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  )
}

export const getStaticProps = async () => {
  const movies = await getMovies()

  return {
    props: { movies },
  }
}

export default index
