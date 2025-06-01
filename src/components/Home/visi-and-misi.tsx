type misiType = {
  title: string;
  content: string;
};

export const misi: misiType[] = [
  {
    title: "Drive Policy Transformation and National Accountability",
    content:
      "We advocate for Indonesia’s ratification of the WHO Framework Convention on Tobacco Control (FCTC) and the strengthening of domestic regulations inspired by global best practices (e.g., Australia’s advertising bans, Singapore’s enforcement rigor). Using empirical data from our research, including weak enforcement near schools and low retailer compliance. We will mobilize stakeholders to close legislative gaps, mandate universal age verification, and institutionalize SwasthaRaksa as a national tool for monitoring tobacco sales.  ",
  },
  {
    title:
      "Scale SwasthaRaksa as Indonesia’s Digital Shield Against Underage Access",
    content:
      "We deploy SwasthaRaksa as a secure, app-based ID verification system to every tobacco retailer nationwide. This innovation catalogs transactions in real time, blocks sales to minors via biometric/digital ID scans, and partners with authorities to penalize non-compliant vendors. By embedding this technology into regulatory frameworks, we transform point-of-sale compliance from an aspiration into an enforceable reality, directly addressing the accessibility crisis that are apparent in Indonesian society. ",
  },
  {
    title:
      "Cultivate Cultural Immunity Through Education and Social Persuasion",
    content:
      "We dismantle Indonesia’s permissive smoking culture using Everett Rogers’ Diffusion of Innovations theory. Our campaigns target adolescents, families, and communities with persuasive messaging on tobacco’s health risks, industry tactics, and positive alternatives. Through school programs, social media, and community partnerships, we shift norms that normalize youth smoking, celebrate compliant retailers, and equip youth to resist peer pressure, turning social influence from a driver of addiction into a catalyst for change.",
  },
];

const VisiAndMisi = () => {
  return (
    <section id="visi&misi" className="mb-13">
      <h1 className="font-semibold mb-5 md:text-4xl text-3xl hover:underline">
        OUR VISION AND MISSION
      </h1>
      <div className="mb-5">
        <h2 className="text-2xl font-semibold hover:underline">Vision</h2>
        <p className="text-lg mt-1 leading-relaxed font-light">
          We envision Indonesia where every adolescent is empowered to thrive in
          a tobacco-free future, protected by rigorous policies, cutting-edge
          technology, and transformed social norms. Through the strategic
          integration of SwasthaRaksa and evidence-driven reforms, we commit to
          dismantling systemic barriers to youth health, ensuring tobacco
          products become inaccessible to minors, and fostering a generation
          liberated from addiction’s grip. Our ultimate goal is a nation where
          public health triumphs over commercial interests, and Indonesia
          emerges as a global leader in innovative tobacco control.
        </p>
      </div>
      <div>
        <h2 className="text-2xl font-semibold hover:underline">Mission</h2>
        <ol className="text-xl leading-relaxed">
          {misi.map((mission, idx) => (
            <li className="mb-3 font-semibold" key={idx}>
              <span>{mission.title}</span>
              <br />
              <span className="font-light">{mission.content}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default VisiAndMisi;
