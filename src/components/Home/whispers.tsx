const Whispers = () => {
  return (
    <section id="whispers" className="mb-13">
      <h1 className="md:text-4xl text-3xl font-semibold hover:underline">
        SEND YOUR WHISPERS
      </h1>
      <p className="md:text-2xl text-xl font-light mt-5 leading-relaxed">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
        similique fuga cumque aliquam repudiandae nihil iure ut cupiditate,
        praesentium vitae soluta, doloribus hic maiores est excepturi animi
        incidunt accusamus fugit.
      </p>
      <div className="flex justify-center items-center">
        <button className="mt-10 text-center border-2 border-black px-20 py-2 rounded text-sm font-light cursor-pointer hover:scale-105 active:scale-110 transition duration-150">
          Need to report a story, whisper here!
        </button>
      </div>
    </section>
  );
};

export default Whispers;
