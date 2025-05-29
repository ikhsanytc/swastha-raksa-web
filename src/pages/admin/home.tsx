import ContainerAdmin from "../../layout/admin/container";

const HomeAdmin = () => {
  return (
    <ContainerAdmin>
      <div className="mb-5">
        <h1 className="text-3xl font-bold">HOME ADMIN</h1>
        <p className="mt-1 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque eos
          iure dolore, exercitationem eligendi optio. Aliquam autem provident
          obcaecati, corrupti rerum error aperiam, quae deserunt consequuntur
          maiores, tempore beatae aspernatur!
        </p>
      </div>
      <div className="mb-5">
        <h1 className="text-3xl font-bold">FEATURES</h1>
        <ul className="list-decimal px-5">
          <li className="font-semibold text-2xl">
            <h1 className="text-2xl">Add Article</h1>
            <p className="text-base font-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              aliquam necessitatibus totam ut explicabo fugit, id accusantium
              optio quidem iure.
            </p>
          </li>
          <li className="font-semibold text-2xl">
            <h1 className="text-2xl">Edit Article</h1>
            <p className="text-base font-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              aliquam necessitatibus totam ut explicabo fugit, id accusantium
              optio quidem iure.
            </p>
          </li>
        </ul>
      </div>
    </ContainerAdmin>
  );
};

export default HomeAdmin;
