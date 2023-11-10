const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[90vh]">
      <h1 className="mb-7 text-4xl font-bold">
        I Grow By Helping People In Need
      </h1>
      <div>
        <input
          className="py-3 px-2 w-[350px] outline-0 border rounded-l-lg text-[14px]"
          type="text"
          placeholder="Search hero..."
        />
        <button className="bg-[#FF444A] rounded-r-lg py-[11px] px-5 text-white">
          Search
        </button>
      </div>
    </div>
  );
};

export default Hero;
