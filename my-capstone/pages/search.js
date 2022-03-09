import Head from "next/head";
import Accordion from "../components/accordion";
import Exercise from "../components/exercise";
import { baseUrl, fetchApi } from "../utils/fetchApi";
import Layout, { siteTitle } from "../components/layout";
//import Link from 'next/link';
//import { useSession, signIn, signOut, getSession } from "next-auth/react";

//const defaultEndpoint='https://exercisedb.p.rapidapi.com/exercises/target/biceps'

/*export async function getServerSideProps() {
  const res = await fetch(defaultEndpoint);
  const data = await res.json();
  return{
    props: {
      data
    }
  }
}*/

export async function getStaticProps() {
  //const res = await fetchApi(`${baseUrl}`);
  //const exerciseBiceps = await res.json();
  const exerciseBiceps = await fetchApi(`${baseUrl}`);

  return {
    props: {
      exerciseBiceps,
    },
  };
}

export default function Search({ exerciseBiceps }) {
  //  const { data: session, status } = useSession();
  const { results = [] } = exerciseBiceps;

  return (
    <>
    <Layout>
        <title> Search - {siteTitle}</title>
        <br />

      <div>
        <Accordion
          title="Biceps"
          content={
            <div>
            <table>
              <thead>
                <tr>
                  <th>Name of Exercise</th>
                </tr>
              </thead>
              {results.map(exercise => {
                //<Exercise exercise={exercise} key={exercise.id} />
                const { id, name, gifURL } = exercise;
                return(
                  <li key={id} className="card">
                    <h3>{name}</h3>
                    <img src={ gifURL }></img>
                    
                    </li>
                )
              })
              }
            </table>
            </div>
          }
        />
        <Accordion title="Trapezius" content="this is content 2" />
        <Accordion title="Triceps" content="this is content 3" />
        <Accordion title="Shoulders" content="this is content 4" />
      </div>
    </Layout>
    </>
  );
}
