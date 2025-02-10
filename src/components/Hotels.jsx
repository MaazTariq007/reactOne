import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Skeleton from "./Skeleton";
import { Link } from "react-router-dom";

const Hotels = () => {
  const [data, setData] = useState([]);
  const [isloading, setIsLoading] = useState(false);
  const fetchData = async () => {
    try {
      setIsLoading(true);
      let repsone = await axios.get(
        "https://67a5b054c0ac39787a1f123c.mockapi.io/hotels"
      );
      console.log(repsone.data);
      setData(repsone.data);
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
      <div className="text-center text-6xl font-bold my-5">Hotels</div>
      <div className="w-[95%] mx-auto flex flex-wrap gap-5 justify-center">
        {isloading ? (
          <Skeleton />
        ) : (
          data.map((item) => {
            return (
              <div
                key={item.id}
                className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 w-[300px]"
              >
                <a href="#">
                  <img
                    className="rounded-t-lg h-[300px]"
                    src={item.image}
                    alt=""
                  />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {item.name}
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-400">{item.city}</p>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {item.country}
                  </p>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    ⭐⭐⭐⭐⭐ {item.type}
                  </p>
                  <Link
                    to={`/details/${item.id}`}
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
                  </Link>
                </div>
              </div>
            );
          })
        )}
      </div>
    </>
  );
};

export default Hotels;
