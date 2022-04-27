import { useEffect, useState } from "react";
import Layout from "../../components/layout";
import Image from "next/image";

const exerciseEndpoint = "https://www.wildcat.plus/api/findexercises";

export const getServerSideProps = async (context) => {
  const { id } = context.query;

  return {
    props: {
      id: id,
    },
  };
};

const Details = ({ id }) => {
  const [workouts, setWorkouts] = useState();
  //Below we send the current workout ID to the API endpoint
  // the API responds with the data (exercises) that belong to the workout
  // with the workoutID recieved above
  useEffect(() => {
    (async () => {
      const workoutId = id;
      const response = await fetch(exerciseEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ workoutId }),
      });
      const content = await response.json();
      setWorkouts(content);
    })();
  }, []);

  return (
    <>
      {" "}
      <Layout>
        <br />
        <ul className="grid-cols-3 gap-4 flex flex-wrap list-none justify-center ">
          {workouts?.map((product) => {
            return (
              <div key={product.id} className="shrink">
                <li className="card">
                  <div className="dark:bg-slate-600 px-4 py-6 mb-4 min-w-fit max-w-xs rounded-lg overflow-hidden shadow-xl">
                    <Image
                      className="w-full opacity-90 rounded-md" width={300} height={300}
                      src={product.gifurl}
                      alt="exercise image"
                    />
                    <div className="px-6 py-4">
                      <div className="text-xl mb-2">
                        Target Muscle:
                        <span className="font-bold text-xl mb-2">
                          {" "}
                          {product.target}{" "}
                        </span>
                      </div>
                      <p className="text-gray-700 dark:text-white text-base">
                        Name: {product.name}
                      </p>
                      <p className="text-gray-700 dark:text-white text-base">
                        Equipment needed: {product.equipment}
                      </p>
                    </div>
                    <div className="px-6 pt-4 mb-1 pb-2">
                      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 pl-1 pr-1 mr-1 mb-2">
                        #{product.bodypart}
                      </span>
                      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 pl-1 pr-1 mr-1 mb-2">
                        #{product.equipment}
                      </span>
                      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 pl-1 pr-1 mr-1 mb-2">
                        #{product.target}
                      </span>
                    </div>
                  </div>
                </li>
              </div>
            );
          })}
        </ul>
      </Layout>
    </>
  );
};
export default Details;
