const Banner = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] ">
      <h1 className="mb-7 text-2xl text-center sm:text-4xl font-bold">
        I Grow By Helping People In Need
      </h1>
      <div>
        <input
          className="py-3 px-2 w-[200px] sm:w-[350px] outline-0 border rounded-l-lg text-[14px]"
          type="text"
          placeholder="Search Here..."
        />
        <button className="bg-[#FF444A] rounded-r-lg py-[11px] px-5 text-white">
          Search
        </button>
      </div>
    </div>
  );
};

export default Banner;
