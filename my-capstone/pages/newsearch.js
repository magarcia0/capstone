import Head from "next/head";
import Exercise from "../components/exercise";
import { baseUrl, fetchApi } from "../utils/fetchApi";
import Layout, { siteTitle } from "../components/layout";
import { useState } from "react";
import { info } from "autoprefixer";

export async function getStaticProps() {
  const data = await fetchApi(`${baseUrl}`);

  return {
    props: {
      data,
    },
  };
}

export default function newSeach({ data }) {

  const [page, updatePage] = useState({
    ...info,
    current: baseUrl
  });
  const { current } = page;

  function searchHandler(e){

    e.preventDefault();

    const { currentTarget = {} } = e;
    const fields = Array.from(currentTarget?.elements);
    const fieldQuery = fields.find(field => field.name === 'query');
    const myvalue = fieldQuery.value || '';
    const endpoint = 'https://exercisedb.p.rapidapi.com/exercises/?bodypart='+myvalue;

    updatePage({
      current:endpoint
    });
  }
  return (
    <>
      <Layout>
        <title> Search - {siteTitle}</title>
        <br />
        <form className="search pb-10 pt-12 " onSubmit={searchHandler}>
          <input name="query" type="search" className="outline  mr-.5em dark:bg-white"/>
          <button class="rounded-md bg-blue-300 text-md text-white px-1 py-0.25 ml-1"> Search
            </button>
        <br />
        </form>
        <table className="table-auto ">
          <div className="flex">
            <div classname="grid grid-cols-3 col-span-1 ">
              <thread>
                <tr>
                <th className="underline text-justify content-end">Bodypart</th>
                <th className="underline">Exercise Name</th>
                </tr>
                </thread>
              {data.map((exercise) => (
                <Exercise exercise={exercise} key={exercise.id} />
              ))}
            </div>
          </div>
        </table>
      </Layout>
    </>
  );
}
