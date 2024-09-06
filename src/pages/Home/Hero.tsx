const Hero = () => {
  return (
    <div className="relative mt-[24px] md:mt-[80px]">
      <div className="absolute top-1/2 transform -translate-y-1/2 text-white ps-[40px]">
        <p className="text-[12px] md:text-[24px]">Limited Time Only</p>
        <h1 className="text-[20px] sm:text-[40px] md:text-[50px] lg:text-[70px]  font-semibold">
          Get %99 off
        </h1>
        <p className="text-[10px] md:text-[20px] text-gray ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis hic, laborum error rem sequi quibusdam?
        </p>
      </div>
      <img src="/bg.svg" />
    </div>
  );
};

export default Hero;
