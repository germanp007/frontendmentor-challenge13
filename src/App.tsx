import Image from "./components/Image";
import {
  MainTitle,
  SectionFour,
  SectionOne,
  SectionThree,
  SectionTwo,
} from "./components";

const App = () => {
  return (
    <main className="md:bg-eggShell md:h-[1800px] flex items-center justify-center">
      <section className="md:w-[700px] bg-whiteChallenge rounded-2xl">
        <Image />

        <article className="p-[30px]">
          <MainTitle />
          <SectionOne />
          <SectionTwo />
          <hr className="mb-6" />
          <SectionThree />
          <hr className="mb-6" />
          <SectionFour />
        </article>
      </section>
    </main>
  );
};

export default App;
