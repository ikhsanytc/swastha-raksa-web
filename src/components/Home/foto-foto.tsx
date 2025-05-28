const FotoFoto = () => {
  return (
    <section id="safe-school">
      <h1 className="font-semibold mb-5 md:text-4xl text-3xl hover:underline">
        SAFE SCHOOL WHISPERS
      </h1>
      <p className="font-light text-xl leading-relaxed">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, error
        accusantium minus rem maxime assumenda, impedit iure, quam ipsum
        quisquam explicabo aut ullam sunt nam dicta doloribus. Accusamus, labore
        quod perspiciatis possimus tempora sed incidunt?
      </p>
      <div className="mt-5 flex gap-20 flex-wrap justify-center">
        {Array.from({ length: 5 }).map((_, idx) => (
          <div className="flex flex-col gap-4" key={idx}>
            <img src="stiker.jpg" className="w-64" alt="" />
            <p className="font-light text-gray-500 text-lg text-center">
              Wielino stiker
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FotoFoto;
