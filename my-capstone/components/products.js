import React from "react";

const Products = (props) => {
  const search = (s) => {
    props.setFilters({
      s,
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
                    class="w-full rounded-md"
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
                  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-full">
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
