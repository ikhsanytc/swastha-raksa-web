import Whispers from "../components/Home/whispers";
import VisiAndMisi from "../components/Home/visi-and-misi";
import FotoFoto from "../components/Home/foto-foto";
import Container from "../layout/container";

const Home = () => {
  return (
    <Container>
      <Whispers />
      <VisiAndMisi />
      <FotoFoto />
    </Container>
  );
};

export default Home;
