import React, { useEffect, useState } from "react";
import { getSession } from "next-auth/react";
import Image from "next/image";

const defaultEndpoint = "https://wildcat.plus/api/workoutid";

const Products = (props) => {
  const [allWorkouts, setAllWorkouts] = useState();
  const [target_id, setTargetId] = useState();
  const [enabled, setButton] = useState(true);

  //Below gets all workouts from back-end
  useEffect(() => {
    (async () => {
      const response = await fetch(defaultEndpoint);
      const content = await response.json();
      setAllWorkouts(content);
    })();
  }, []);

  //Below filters the exercises
  const search = (s) => {
    props.setFilters({
      s,
    });
  };

  //Below saves the exercies to the workouts
  const SaveProduct = async (bodyPart, equipment, gifUrl, name, target) => {
    var workoutId = 0;
    setButton(!enabled);
    try {
      allWorkouts?.map((wo) => {
        var temp = 0;
        if (wo.id > temp) {
          temp = wo.id;
          setTargetId(temp);
        }
      });
      workoutId = target_id;
    } catch (error) {
      console.log(error);
    }
    console.log(target_id);
    const body = { bodyPart, equipment, gifUrl, name, target, workoutId };
    await fetch("/api/exercise", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  };

  return (
    <>
      {" "}
      <form className="search pb-10 pt-10 text-black">
        <input
          name="target"
          type="text"
          placeholder="Search..."
          className="outline rounded-sm outline-2 pl-1 outline-offset-2 dark:bg-white"
          onKeyUp={(e) => search(e.target.value)}
        />
        <br />
      </form>
      <ul className="grid-cols-3 gap-4 flex flex-wrap list-none justify-center ">
        {props.products?.map((product) => {
          return (
            <div key={product.id} className="shrink">
              <li key={product.id} className="card">
                <div
                  key={product.id}
                  className="dark:bg-slate-600 px-4 py-6 mb-4 min-w-fit max-w-xs rounded-lg overflow-hidden shadow-xl"
                >
                  <Image
                    className="w-full opacity-90 rounded-md"
                    width={300}
                    height={300}
                    src={product.gifUrl}
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
                  <div className={enabled ? "" : "hidden"} id={product.id}>
                    <button
                      onClick={() =>
                        SaveProduct(
                          product.bodyPart,
                          product.equipment,
                          product.gifUrl,
                          product.name,
                          product.target
                        )
                      }
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-full"
                    >
                      Add to Workout
                    </button>
                  </div>
                  <div className="px-6 pt-4 mb-1 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 pl-1 pr-1 mr-1 mb-2">
                      #{product.bodyPart}
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
    </>
  );
};
export default Products;
