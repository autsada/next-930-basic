import React from 'react'

import { getMovies } from '../../db'

function Blog({ movie }) {
  return (
    <div style={{ width: '60%', margin: '0 auto' }}>
      <h2>{movie.title}</h2>
      <span>
        {movie.writer} / {movie.post_date}
      </span>
      <p>{movie.detail}</p>
    </div>
  )
}

export const getStaticPaths = async () => {
  const movies = await getMovies()

  const paths = movies.map((movie) => ({ params: { blogId: movie.id } }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
  const movies = await getMovies()
  const movie = movies.find((movie) => movie.id === params.blogId)

  return {
    props: { movie },
  }
}

export default Blog
