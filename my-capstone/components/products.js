import React, { useEffect, useState } from "react";
import { getSession } from "next-auth/react";

const defaultEndpoint = "http://localhost:3000/api/workoutid";

const Products = (props) => {
  const [allWorkouts, setAllWorkouts] = useState();
  const [target_id, setTargetId] = useState();

//Below gets all workouts from back-end
  useEffect( () => {
    (
      async () => {
        const response = await fetch(defaultEndpoint);
        const content = await response.json();
        setAllWorkouts(content);
      }
    )()
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
       allWorkouts?.map((wo) => {
        var temp = 0;
        if(wo.id > temp){
        temp = wo.id;
        setTargetId(temp);
        }
      });

      workoutId = target_id;
      console.log(target_id)
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
            <div className="shrink">
              <li key={product.id} className="card">
                <div class="dark:bg-slate-600 px-4 py-6 mb-4 min-w-fit max-w-xs rounded-lg overflow-hidden shadow-xl">
                  <img
                    class="w-full opacity-90 rounded-md"
                    src={product.gifUrl}
                    alt="exercise image"
                  />
                  <div class="px-6 py-4">
                    <div class="text-xl mb-2">
                      Target Muscle:
                      <span className="font-bold text-xl mb-2">
                        {" "}
                        {product.target}{" "}
                      </span>
                    </div>
                    <p class="text-gray-700 dark:text-white text-base">
                      Name: {product.name}
                    </p>
                    <p class="text-gray-700 dark:text-white text-base">
                      Equipment needed: {product.equipment}
                    </p>
                  </div>
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
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-full"
                  >
                    Add to Workout
                  </button>
                  <div class="px-6 pt-4 mb-1 pb-2">
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 pl-1 pr-1 mr-1 mb-2">
                      #{product.bodyPart}
                    </span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 pl-1 pr-1 mr-1 mb-2">
                      #{product.equipment}
                    </span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 pl-1 pr-1 mr-1 mb-2">
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
