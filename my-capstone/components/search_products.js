import React from "react";
import Image from "next/image";

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
                <div className="dark:bg-slate-600 px-4 py-6 mb-4 min-w-fit max-w-xs rounded-lg overflow-hidden shadow-xl">
                  <Image
                    className="w-full opacity-90 rounded-md"
                    src={product.gifUrl}
                    alt="exercise image"
                  />
                  <div className="px-6 py-4">
                    <div class="text-xl mb-2">
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
