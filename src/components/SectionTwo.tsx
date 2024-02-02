const SectionTwo = () => {
  return (
    <section className="mb-6">
      <h2 className="text-[#854632] young-serif-regular text-3xl mb-6">
        Ingredients
      </h2>
      <ul>
        <li className="flex items-center mb-2">
          <div className="w-1 h-1 bg-[#854632] rounded-full ml-2 mr-6 before:content-['']"></div>{" "}
          <span className="text-wengeBrown font-medium">2-3 large eggs</span>
        </li>
        <li className="flex items-center mb-2">
          <div className="w-1 h-1 bg-[#854632] rounded-full ml-2 mr-6 before:content-['']"></div>{" "}
          <span className="text-wengeBrown font-medium"> Salt, to taste</span>
        </li>
        <li className="flex items-center mb-2">
          <div className="w-1 h-1 bg-[#854632] rounded-full ml-2 mr-6 before:content-['']"></div>{" "}
          <span className="text-wengeBrown font-medium">Pepper, to taste</span>
        </li>
        <li className="flex items-center mb-2">
          <div className="w-1 h-1 bg-[#854632] rounded-full ml-2 mr-6 before:content-['']"></div>{" "}
          <span className="text-wengeBrown font-medium">
            1 tablespoon of butter or oil
          </span>
        </li>
        <li className="flex items-center mb-2 ">
          <div className="flex-shrink-0 w-1 h-1 bg-[#854632] rounded-full ml-2 mr-6 before:content-['']"></div>
          <div>
            <span className="text-wengeBrown font-medium">
              Optional fillings: cheese, diced vegetables, cooked meats, herbs
            </span>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default SectionTwo;
