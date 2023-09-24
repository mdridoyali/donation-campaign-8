const Banner = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-white opacity-90"></div>
      <img
        className="w-full h-[70vh]"
        src="/src/assets/successful-medical-team_329181-9252.avif"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h2 className="text-5xl font-bold mb-8 text-center">I Grow By Helping People In Need</h2>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search here...."
            name="text"
            className="py-2 px-4 rounded-s-md border-2 outline-none "
          />
          <button className="py-2 px-4 rounded-e-md bg-[#FF444A] text-white hover:bg-blue-600">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
