import NavbarMobile from "../components/navbar-mobile";
import SearchIconDesktop from "../components/search-icon-desktop";
import SidebarDesktop from "../components/sidebar-desktop";
import useAtTop from "../hooks/useAtTop";
import { motion } from "motion/react";

const About = () => {
  const { isAtTop } = useAtTop();
  return (
    <div className="min-h-screen relative bg-blue-100">
      {/* search icon */}
      <SearchIconDesktop isAtTop={isAtTop} />

      {/* sidebar desktop */}
      <SidebarDesktop active="about" />
      {/* navbar mobile */}
      <NavbarMobile active="about" isAtTop={isAtTop} />
      {/* main content */}
      <div className="lg:ml-64">
        <div className="relative h-[400px] w-full">
          <div className="bg-blue-500/25 absolute flex justify-center items-center w-full h-full backdrop-filter backdrop-blur-[3px]">
            <motion.h1
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: 0.5,
                delay: 1,
              }}
              className="font-bold text-5xl text-white"
            >
              About
            </motion.h1>
          </div>
          <img
            src="/banner.jpg"
            alt=""
            className="w-full h-[400px] object-cover object-center bg-local"
          />
        </div>
        <div className="lg:px-14 px-5 pt-10 pb-10">
          <section id="about">
            <h1 className="md:text-4xl text-3xl font-semibold hover:underline">
              GREETINGS FROM SWASTHA RAKSA
            </h1>
            <div className="mt-5 pb-5 flex flex-col gap-5">
              <p className="font-light leading-relaxed text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                illum, odit totam sequi dolorem cum obcaecati! Eius veniam
                necessitatibus nemo soluta id asperiores exercitationem non,
                aliquam repellendus, doloremque magnam nulla.
              </p>
              <p className="font-light leading-relaxed text-xl">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae
                nam placeat distinctio dolor mollitia saepe ratione, voluptatem
                a fugiat nihil aut quo, rerum aspernatur. Dolores necessitatibus
                non ratione est. Autem nihil nesciunt mollitia error provident
                repellat ratione ad consequatur voluptatum!
              </p>
              <p className="font-light leading-relaxed text-xl">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
                ex sit vel dolore dicta mollitia vero consequuntur totam a,
                quia, consectetur fugit iure quod ducimus! Dicta recusandae
                eligendi veniam quibusdam provident rerum optio, perspiciatis
                hic nemo architecto harum asperiores. Accusamus aut magnam
                deleniti maiores possimus culpa quibusdam, soluta nobis vitae
                aspernatur eligendi, numquam, illo repudiandae et. Voluptatem,
                quis sint sunt, ut vero repellat voluptas adipisci eaque
                temporibus rerum molestias accusamus eveniet harum corporis,
                distinctio dicta vitae voluptatum nemo cumque soluta inventore
                repudiandae enim. Voluptas quos nihil ea dolorem quam delectus
                neque. Ab aspernatur porro magni ratione laboriosam est cumque
                voluptate?
              </p>
              <p className="font-light leading-relaxed text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
                consequatur provident officiis, illo dolore quae nemo sed
                possimus ducimus natus rerum. Totam soluta, sapiente
                voluptatibus quis odit animi eligendi id tempora tempore nulla.
                Impedit est quaerat suscipit accusamus, molestias maxime
                distinctio, laboriosam sed iusto eveniet quod rem ut possimus
                inventore animi porro quo provident aliquam magni! Repudiandae
                minima facere odio nobis eaque, cumque, sint, aspernatur saepe
                cum eum maiores impedit asperiores consequuntur quas sunt ab?
                Doloribus ratione vel cupiditate dolore minima mollitia vero sed
                assumenda, obcaecati iure. Architecto hic nulla porro iure nemo
                accusamus? Consequuntur mollitia laborum dolore esse iure rerum
                inventore. Facere, placeat, velit culpa consequatur adipisci
                quibusdam nesciunt accusamus odio quo iure tenetur vitae
                aspernatur dignissimos, error ipsam. Amet dolorum dignissimos
                atque pariatur similique quos non eum vel blanditiis laudantium
                reiciendis error, quasi dolores sequi fuga consequatur maxime?
                Cum commodi, voluptatem distinctio repellendus aperiam
                consequatur explicabo! Ullam placeat, excepturi quibusdam, vel
                maiores optio fuga, alias quae molestias enim facere nam magni
                iusto fugit aspernatur explicabo obcaecati laborum. Assumenda,
                aut beatae accusantium recusandae, quam ratione voluptatibus
                quis illum ab culpa officiis tempora ad iure expedita quas
                provident nihil numquam eveniet quos cum esse! Numquam corporis
                nam ratione quasi iusto.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
