const SectionFour = () => {
  return (
    <section>
      <h2 className="text-[#854632] young-serif-regular text-3xl mb-6">
        Nutrition
      </h2>
      <p className="outfit text-wengeBrown  font-medium mb-6">
        The table below shows nutritional values per serving without the
        additional fillings.
      </p>
      <div className="m-auto">
        <div className="w-[80%] h-[40px] flex justify-start items-center m-auto">
          <div className="flex-1">
            <h6 className="outfit text-wengeBrown  font-medium flex-1">
              Calories
            </h6>
          </div>
          <div className="flex-1">
            <h6 className="font-bold text-[#854632]">277kcal</h6>
          </div>
        </div>
        <hr />
        <div className="w-[80%] m-auto flex justify-start  items-center h-[40px] ">
          <div className="flex-1">
            <h6 className="outfit text-wengeBrown  font-medium ">Carbs</h6>
          </div>
          <div className="flex-1">
            <h6 className="font-bold text-[#854632]">0g</h6>
          </div>
        </div>
        <hr />
        <div className="w-[80%] m-auto flex justify-start  items-center h-[40px] ">
          <div className="flex-1 flex items-center h-full">
            <h6 className="outfit text-wengeBrown  font-medium ">Protein</h6>
          </div>
          <div className="flex-1">
            <h6 className="font-bold text-[#854632]">20g</h6>
          </div>
        </div>
        <hr />
        <div className="w-[80%] m-auto flex justify-start  items-center h-[40px] ">
          <div className="flex-1">
            <h6 className="outfit text-wengeBrown  font-medium ">Fat</h6>
          </div>
          <div className="flex-1">
            <h6 className="font-bold text-[#854632]">22g</h6>
          </div>
        </div>
        <hr />
      </div>
    </section>
  );
};

export default SectionFour;
