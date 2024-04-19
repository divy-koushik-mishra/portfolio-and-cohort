const Card = (props: { url: string | "" }) => {
  return (
    // md:w-1/2
    <div className="border w-full p-2 md:p-5  rounded-xl flex flex-col items-center">
      <h2 className="text-xl font-bold">About the course</h2>
      <p className="text-sm p-1 my-2">
        In this comprehensive course, we delve into the fundamentals of Java
        programming, equipping you with essential skills to excel in the world
        of software development. Starting with the basics, we cover core
        concepts such as variables, data types, control structures, and
        object-oriented programming principles. Through hands-on exercises and
        projects, you&apos;ll gain practical experience in writing clean,
        efficient Java code. <br />
        <h2 className="text-xl font-semibold my-4">Course Objectives:</h2>{" "}
        <br />{" "}
        <ul className="list-inside list-disc list">
          <li>
            Build a solid understanding of Java programming concepts and syntax
          </li>
          <br />
          <li>Develop proficiency in writing object-oriented Java code</li>{" "}
          <br />
          <li>
            Gain hands-on experience through coding exercises and projects
          </li>
          <br />
          <li>
            Prepare for internships and entry-level job opportunities in
            software development
          </li>
          <br />
          <li>
            Lay the foundation for advanced Java topics and specialization
            pathways
          </li>
          <br />
        </ul>
        <h2 className="text-xl font-semibold my-4">Target Audience:</h2>
        <ul className="list-inside list-disc list">
          <li>Beginners with no prior programming experience</li> <br />
          <li>Students looking to learn Java programming from scratch</li>{" "}
          <br />
          <li>
            Professionals looking to switch to a career in software development
          </li>{" "}
          <br />
          <li>
            Anyone looking to build a strong foundation in Java programming
          </li>{" "}
        </ul>
      </p>
      <a href={props.url} target="_blank">
        <button className="border hover:bg-[#ddd] hover:text-black border-white rounded-xl px-12 py-2 my-5 transition">
          Curriculum
        </button>
      </a>
    </div>
  );
};

export default Card;
