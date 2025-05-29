import Container from "../layout/container";

const Gallery = () => {
  return (
    <Container page="gallery">
      <section id="gallery" className="flex flex-wrap gap-5 justify-center">
        <iframe
          width={300}
          height={300}
          src="https://www.youtube.com/embed/NHnepvYmvyA?si=90AiTqn162Zon8hl"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <iframe
          width={300}
          height={300}
          src="https://www.youtube.com/embed/o3I0mJ2RfU0?si=ErAFASXqrvCD5b5c"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <iframe
          width={300}
          height={300}
          src="https://www.youtube.com/embed/uirINayrSJs?si=2ulrabREK1lHdR63"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <iframe
          width={300}
          height={300}
          src="https://www.youtube.com/embed/Y18Vz51Nkos?si=NTtGqWe23UsNd1Y4"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <iframe
          width={300}
          height={300}
          src="https://www.youtube.com/embed/aasKIDz9ZX4?si=L9Oi0XvFOmOqTLIP"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <iframe
          width={300}
          height={300}
          src="https://www.youtube.com/embed/_th5U5hRu8k?si=_AHTkeMMndi7UIYu"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <iframe
          width={300}
          height={300}
          src="https://www.youtube.com/embed/5Pc0GW7jsDo?si=NFAp66ExqjzIsjV1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </section>
    </Container>
  );
};

export default Gallery;
