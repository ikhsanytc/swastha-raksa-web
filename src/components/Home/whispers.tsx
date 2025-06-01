const Whispers = () => {
  return (
    <section id="whispers" className="mb-13">
      <h1 className="md:text-4xl text-3xl font-semibold hover:underline">
        SWASTHA RAKSA APP
      </h1>
      <p className="md:text-2xl text-xl font-light mt-5 leading-relaxed">
        SwasthaRaksha is an ID-Scanner app that also monitor and record
        transactions. Aimed to restrict adolescents tobacco access in Indonesia,
        helping to create a healthy generation for a golden Nation.
      </p>
      <div className="flex justify-center items-center">
        <a
          href="https://github.com/AdityaWs/SwasthaRaksa/releases/download/v1.0.0/SwasthaRaksa.apk"
          target="_blank"
          className="mt-10 text-center border-2 border-black px-20 py-2 rounded text-sm font-light cursor-pointer hover:scale-105 active:scale-110 transition duration-150"
        >
          Download swastha raksa app
        </a>
      </div>
    </section>
  );
};

export default Whispers;
