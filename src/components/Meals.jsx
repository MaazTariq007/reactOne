import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Spinner from "./Spinner";

const Meals = () => {
  const [data, setData] = useState([]);
  const [isloading, setIsLoading] = useState(false);
  const fetchData = async () => {
    try {
      setIsLoading(true);
      let repsone = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/search.php?s="
      );
      console.log(repsone.data.meals);
      setData(repsone.data.meals);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="text-center text-6xl font-bold my-5">MEALS</div>
      <div className="w-[95%] mx-auto flex flex-wrap gap-5 justify-center">
        {isloading ? (
          <Spinner />
        ) : (
          data.map((item, i) => {
            return (
              <div
                key={i}
                className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
              >
                <a href="#">
                  <img
                    className="rounded-t-lg"
                    src={item.strMealThumb}
                    alt=""
                  />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {item.strMeal}
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-400">
                    {item.strCategory}
                  </p>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {item.strInstructions.length > 100
                      ? item.strInstructions.slice(0, 100) + "..."
                      : item.strInstructions}
                  </p>
                  <a
                    target="_blank"
                    href={item.strSource}
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Read more
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                  <a
                    target="_blank"
                    href={item.strYoutube}
                    className="inline-flex items-center px-3 py-2 ms-2 text-sm font-medium text-center text-white bg-red-500 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Youtube
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            );
          })
        )}
      </div>
    </>
  );
};

export default Meals;
