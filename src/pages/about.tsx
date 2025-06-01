import Container from "../layout/container";

export const aboutTexts = [
  {
    title: "Driving Policy Transformation",
    content:
      "SwasthaRaksa champions the urgent ratification of the WHO Framework Convention on Tobacco Control (FCTC) and strengthens Indonesia’s domestic regulations. We expose enforcement gaps—like weak vendor compliance near schools—using data from our nationwide research. By mobilizing policymakers, health experts, and communities, we push for laws mandating universal digital age verification, stricter penalties for violations, and retailer accountability. Our goal is to turn existing regulations (like Law 17/2023) from empty promises into ironclad safeguards.  ",
  },
  {
    title: "Deploying Technology as a Shield",
    content:
      "At our core is the SwasthaRaksa app—a digital fortress against underage tobacco access. This innovation requires retailers to scan government-issued IDs for every tobacco sale, instantly verifying age and blocking transactions with minors. Real-time monitoring catalogs purchases nationwide, flagging violations to authorities while generating data to refine policies. Inspired by Singapore’s enforcement rigor and Australia’s compliance success, we embed this tool across markets, transforming point-of-sale interactions into a frontline defense for youth.",
  },
  {
    title: "Cultivating Cultural Immunity",
    content:
      "We dismantle Indonesia’s permissive smoking culture through education and social persuasion. Guided by Everett Rogers’ Diffusion of Innovations theory, we run digital campaigns revealing tobacco’s health risks and industry tactics targeting youth. School programs equip adolescents to resist peer pressure, while community partnerships celebrate tobacco-free role models and compliant vendors. By replacing silence with storytelling, we spark a movement where health becomes the new social currency.",
  },
];

const About = () => {
  return (
    <Container page="about">
      <section id="about">
        <h1 className="md:text-4xl text-3xl font-semibold hover:underline">
          GREETINGS FROM SWASTHA RAKSA
        </h1>
        <div className="mt-5 pb-5 flex flex-col">
          <div className="mb-5">
            <h2 className="text-2xl font-semibold">Who We Are</h2>
            <p className="leading-relaxed mt-2 text-lg font-light">
              SwasthaRaksa stands at the forefront of Indonesia’s battle against
              adolescent tobacco addiction. Born from rigorous research by
              Indonesian youth scholars, we fuse cutting-edge technology with
              evidence-based advocacy to dismantle the systemic barriers
              enabling underage smoking. Our name (SwasthaRaksa) embodies our
              purpose: (Guardians of Health) in Sanskrit, reflecting our
              commitment to shield Indonesia’s future generations from tobacco’s
              deadly grip.
            </p>
          </div>
          <div className="mb-5">
            <h2 className="text-2xl font-semibold">Our Vision</h2>
            <p className="leading-relaxed mt-2 text-lg font-light">
              We envision an Indonesia where every adolescent grows free from
              tobacco’s shadow—a nation where health triumphs over habit, and
              policies transform into palpable protection. Through the strategic
              integration of our SwasthaRaksa verification technology and
              nationwide advocacy, we strive to eliminate minors’ access to
              tobacco, rewrite social norms that normalize addiction, and
              position Indonesia as a global beacon for innovative public health
              solutions. Our ultimate dream is a tobacco-free generation
              breathing freely, empowered by systems that prioritize their
              well-being over profit.
            </p>
          </div>
          <div className="mb-5">
            <h2 className="text-2xl font-semibold">How We Create Change:</h2>
            <ol className="list-decimal px-5">
              {aboutTexts.map((item, idx) => (
                <li key={idx} className="text-xl font-semibold mb-3">
                  <span className="text-xl mt-2 font-semibold">
                    {item.title}
                  </span>
                  <p className="font-light leading-relaxed">{item.content}</p>
                </li>
              ))}
            </ol>
          </div>
          <div className="mb-5">
            <h2 className="text-2xl font-semibold">Grounded in Evidence</h2>
            <p className="leading-relaxed mt-2 text-lg font-light">
              SwasthaRaksa emerged from unsettling truths: 85.5% of vendors near
              schools sell tobacco to minors, social influence drives adolescent
              addiction, and unenforced policies fuel a crisis claiming 223,500
              lives annually. Our research proved that innovation diffusion—not
              just regulation—holds the key to change. We blend these insights
              with global models: Thailand’s e-cigarette bans, Australia’s plain
              packaging, and Singapore’s ID checks. This science-backed approach
              bridges the gap between knowing and doing.
            </p>
          </div>
          <div className="mb-5">
            <h2 className="text-2xl font-semibold">Join Our Movement</h2>
            <p className="leading-relaxed mt-2 text-lg font-light">
              SwasthaRaksa is more than an app—it’s a covenant with Indonesia’s
              future. Whether you’re a student, parent, teacher, vendor, or
              policymaker, your voice fuels this revolution. Together, we’ll
              turn vision into victory: a generation liberated from addiction.
            </p>
          </div>
          <h1 className="text-2xl font-bold">
            Breath Freely. Resist Boldy. Unite for Change.
          </h1>
        </div>
      </section>
    </Container>
  );
};

export default About;
