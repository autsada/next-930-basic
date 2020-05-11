import styled from 'styled-components'

const Div = styled.div`
  width: 60%;
  margin: 0 auto;

  p {
    color: green;
  }
`

export default function Home() {
  return (
    <Div>
      <h2>Getting Started</h2>

      <p>Welcome to the Next.js documentation!</p>

      <p>
        If you're new to Next.js we recommend that you start with the learn
        course.
      </p>

      <p>
        The interactive course with quizzes will guide you through everything
        you need to know to use Next.js.
      </p>
    </Div>
  )
}
