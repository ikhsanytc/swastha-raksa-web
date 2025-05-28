const VisiAndMisi = () => {
  return (
    <section id="visi&misi" className="mb-13">
      <h1 className="font-semibold mb-5 md:text-4xl text-3xl hover:underline">
        OUR VISION AND MISSION
      </h1>
      <div className="mb-5">
        <h2 className="text-2xl font-semibold hover:underline">Vision</h2>
        <p className="text-lg mt-1 leading-relaxed font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
          accusantium ex veritatis placeat consectetur dignissimos eos iure ab,
          optio magnam. Praesentium veritatis eius harum voluptatum, totam,
          veniam nisi quisquam in voluptas, voluptate culpa eos temporibus
          suscipit rem esse numquam soluta? Tempora architecto in cum,
          exercitationem cupiditate assumenda sit quidem praesentium?
        </p>
      </div>
      <div>
        <h2 className="text-2xl font-semibold hover:underline">Mission</h2>
        <ul className="list-disc text-xl leading-relaxed font-light px-5">
          {Array.from({ length: 5 }).map((_, idx) => (
            <li className="mt-2" key={idx}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
              aspernatur consectetur id quod rem sunt distinctio quasi
              reprehenderit dolore ratione temporibus, nesciunt iste quo, quos
              vel obcaecati maiores minima! Neque.
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default VisiAndMisi;
