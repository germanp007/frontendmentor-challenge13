const SectionOne = () => {
  return (
    <section className="w-full bg-eggShell h-auto py-4 px-10 rounded-md mb-6">
      <h2 className="outfit font-bold text-[#7B284F] text-lg mb-2">
        Preparation time
      </h2>
      <ul>
        <li className="flex items-center mb-2">
          <div className="w-1 h-1 bg-[#7B284F] rounded-full mr-6 before:content-['']"></div>
          <div>
            <span className="font-bold text-darkCharcoal">Total: </span>
            <span className="text-wengeBrown font-medium">
              Approximately 10 minutes
            </span>
          </div>
        </li>
        <li className="flex items-center mb-2">
          <div className="w-1 h-1 bg-[#7B284F] rounded-full mr-6 before:content-['']"></div>
          <span className="font-bold text-darkCharcoal">Preparation: </span>
          <span className="text-wengeBrown font-medium">&nbsp;5 minutes</span>
        </li>
        <li className="flex items-center mb-2">
          <div className="w-1 h-1 bg-[#7B284F] rounded-full mr-6 before:content-['']"></div>
          <span className="font-bold text-darkCharcoal">Cooking: </span>
          <span className="text-wengeBrown font-medium">&nbsp;5 minutes</span>
        </li>
      </ul>
    </section>
  );
};

export default SectionOne;
