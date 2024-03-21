const Card = (props: { url: string | "" }) => {
  return (
    <div className="border w-full md:w-1/2 p-5  rounded-xl">
      <h2 className="text-xl font-bold">About the course</h2>
      <p className="text-sm p-1 mb-2">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis
        eaque voluptatem illum vitae vel rerum asperiores voluptas? A rerum
        necessitatibus doloribus dolores ex quam fugiat molestias veniam
        aperiam, maxime, excepturi sunt at nemo asperiores? Nihil facilis quae
        recusandae! Non voluptatem officia perferendis. Sunt quae adipisci
        commodi omnis enim, laborum exercitationem.
      </p>
      <hr />
      <a href={props.url} target="_blank">
        <button className="border hover:bg-[#ddd] hover:text-black border-white rounded-xl px-12 py-2 mt-5 transition">
          Project
        </button>
      </a>
    </div>
  );
};

export default Card;
