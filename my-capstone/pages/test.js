import { baseUrl, fetchApi } from "../utils/fetchApi"
import Exercise from "../components/exercise"


export default function Home({ exerciseBiceps }) {
  return (
    <>
      <div>
        <table>
          <thead>
            <tr>
            </tr>
          </thead>
          {exerciseBiceps.map((exercise) => (
            <Exercise exercise={exercise} key={exercise.id} />
          ))}
        </table>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const exerciseBiceps = await fetchApi(`${baseUrl}`)

  return {
    props: {
      exerciseBiceps,
    },
  }
}