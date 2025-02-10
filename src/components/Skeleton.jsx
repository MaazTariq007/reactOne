const Skeleton = () => {
  return (
    <div className="w-[95%] mx-auto flex flex-wrap gap-5 justify-center">
      {Array(8)
        .fill("")
        .map((i) => {
          return (
            <div
              key={i}
              role="status"
              className="w-[300px] max-w-sm animate-pulse bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
            >
              <div className="bg-gray-200 dark:bg-gray-700 max-w-[100%] mb-5 h-[300px]" />
              <div className="h-5 bg-gray-200 dark:bg-gray-700 m-2.5 w-[60%] mt-[40px]" />
              <div className="h-2 bg-gray-200 dark:bg-gray-700 m-2.5 w-[70%] mt-[30px]" />
              <div className="h-2 bg-gray-200 dark:bg-gray-700 m-2.5 w-[70%] mt-[10px]" />
              <div className="h-3 bg-gray-200 dark:bg-gray-700 m-2.5 w-[70%]" />
              <div className="h-7 bg-gray-200 dark:bg-gray-700 m-2.5 w-[40%] mb-[50px]" />
              <span className="sr-only">Loading...</span>
            </div>
          );
        })}
    </div>
  );
};

export default Skeleton;
