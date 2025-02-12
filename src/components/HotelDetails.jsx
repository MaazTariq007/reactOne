import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import HotelDetailsSkeleton from "./HotelDetailsSkeleton";

const HotelDetails = () => {
  const [data, setData] = useState({});
  const [isloading, setIsLoading] = useState(false);

  let param = useParams();
  let navigate = useNavigate();

  const fetchData = async (id) => {
    try {
      setIsLoading(true);
      let repsone = await axios.get(
        `https://67a5b054c0ac39787a1f123c.mockapi.io/hotels/${id}`
      );
      console.log(repsone.data);
      setData(repsone.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  let deleteDetials = async (id) => {
    try {
      await axios.delete(
        `https://67a5b054c0ac39787a1f123c.mockapi.io/hotels/${id}`
      );
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let { id } = param;
    fetchData(id);
  }, [param]);

  return isloading ? (
    <HotelDetailsSkeleton />
  ) : (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="flex w-full max-w-4xl p-4 bg-white shadow-lg rounded-lg">
        {/* Image Section */}
        <div className="w-1/2">
          <img
            src={data.image}
            alt="Hotel"
            className="w-full h-96 object-cover rounded-lg"
          />
        </div>

        {/* Details Section */}
        <div className="w-1/2 pl-6">
          <h1 className="text-3xl font-bold text-gray-800">{data.name}</h1>
          <p className="text-xl text-gray-600 mt-2">
            {data.city}, {data.country}
          </p>
          <p className="text-lg text-gray-500 mt-2">{data.type}</p>

          {/* Buttons */}
          <div className="mt-6 space-x-1">
            <button
              onClick={() =>
                navigate(`/editPage/${data?.id}`, { state: data })
              }
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Edit
            </button>
            <button
              onClick={() => {
                deleteDetials(data.id);
              }}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
            >
              Delete
            </button>
            <button
              onClick={() => navigate("/")}
              className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
            >
              Go Back to Home Page
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelDetails;
