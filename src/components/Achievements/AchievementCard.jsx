const AchivementCard = ({ title, org, img, date, desc }) => {
    return (
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-col px-5 py-12 justify-center items-center">
          <h1 className="md:text-2xl sm:text-xl font-zen text-center mb-4 text-gray-700 dark:text-gray-200">
            {title}
          </h1>
          <img
            className=" mb-4 sm:max-h-[500px] max-h-[200px] object-cover object-center rounded"
            alt={title}
            src={img}
          />
          <div className="flex text-gray-500 justify-center w-full text-xs sm:text-sm sm:mx-[-20px] flex-wrap">
            <p className="mx-auto">
              {" "}
              <span className="dark:text-gray-400 text-gray-600"> Date: </span>
              {date}{" "}
            </p>{" "}
            |
            <p className="mx-auto">
              <span className="text-gray-600 dark:text-gray-400">
                Organization:
              </span>{" "}
              {org}{" "}
            </p>
          </div>
          <div className="w-full md:w-2/3 flex flex-col mb-8 items-center text-center">
            <p className="mb-8 leading-relaxed text-xs sm:text-xl dark:text-gray-400">
              {desc}
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default AchivementCard;
  