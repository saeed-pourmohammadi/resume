import { BsDot } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

function App() {
  const skills = [
    "javascript",
    "react.js",
    "next.js",
    "Redux",
    "css",
    "sass",
    "bootstrap",
    "tailwind",
    "webSocket",
    "Restful API",
    "Git",
    "Responsive design",
    "html",
  ];
  const langs = [
    "English - Professional working proficiency",
    "Turkish - Native",
    "Persian -Native",
  ];
  return (
    <div className="container-fluid">
      <div
        className="row mx-0 justify-content-start shadow p-4 text-start rounded-4"
        style={{ maxWidth: "1000px" }}
      >
        <div className="col-12 fw-bold fs-3">FRONTEND DEVELOPER</div>
        <div className="col-12 mb-3">Saeed pourmohammadi</div>
        <div className="col-12 mb-4">
          I am a frontend web developer with{" "}
          <span className="fw-bold">5 years</span> of experience working with
          the <span className="fw-bold">React</span> framework. For me,
          developing is more than just coding - it's a lifestyle. I believe in
          enjoying life while doing whatI love, and I find satisfaction in
          creating visually appealing and user-friendly websites.
        </div>
        <div className="mb-3">
          <MdEmail size={18} className="me-3" />
          <span>saeed.pourmohammadi1998@gmail.com</span>
        </div>
        <div className="fw-bold mt-4">EXPERIENCE</div>
        <div>
          <BsDot size={50} />
          <span className="fs-5">expert developer</span>
          <div className="ms-5">
            <div className="mb-2">
              <span className="fw-bold">FRONTEND,</span> 2018-2021
            </div>
            <div>
              I've effectively utilized a combination of{" "}
              <span className="fw-bold">Javascript, React.js,</span> and{" "}
              <span className="fw-bold">Redux</span> to build robust frontend
              applications. By implementing responsive design techniques, I
              ensured that these applications deliver seamless user experiences
              across various devices. Furthermore, I integrated{" "}
              <span className="fw-bold">RESTful APIs</span> to enable smooth
              communication between the frontend and backend, resulting in
              dynamic and interactive web experiences for users.
            </div>
          </div>
        </div>
        <div>
          <BsDot size={50} />
          <span className="fs-5">expert developer</span>
          <div className="ms-5">
            <div className="mb-2">
              <span className="fw-bold">FRONTEND,</span> 2021-2024
            </div>
            <div>
              I've harnessed a diverse skill set to create exceptional web
              applications. Leveraging{" "}
              <span className="fw-bold">HTML, CSS, Sass,</span> and frameworks
              like <span className="fw-bold">Bootstrap and Tailwind,</span> I've
              crafted visually stunning and intuitive user interfaces.{" "}
              <span className="fw-bold">JavaScript and TypeScript</span> have
              been instrumental in adding dynamic functionality and enhancing
              user interactions. With{" "}
              <span className="fw-bold">React.js and Next.js,</span> I've built
              scalable and high-performance applications, ensuring seamless
              navigation and rendering. My commitment to responsive design
              principles guarantees optimal user experiences across devices of
              all sizes.
            </div>
            <div className="mt-3">
              Moreover, I've integrated{" "}
              <span className="fw-bold">WebSocket</span> technology to enable
              read-time communication and collaboration features in my projects.
              <span className="fw-boldّ">Git</span> has been my go-to version
              control system, allowing for efficient collaboration and code
              management within development teams. Additionally, I've
              proficiently implemented <span className="fw-bold">Redux</span>{" "}
              for state management, ensuring consistency and scalability as
              applications grow in complexity. Lastly, I've seamlessly
              integrated <span className="fw-bold">RESTfull APIs</span> to
              facilitate data exchange between frontend and backend systems,
              enabling robust and dynamic web experiences for users.
            </div>
          </div>
        </div>
        <div className="fw-bold mt-4 mb-3">SKILLS</div>
        <div className="row g-1 ps-3">
          {skills.map((skill, s) => (
            <span key={s} className="col-3">
              <div className="py-2 bg-body-secondary rounded-3 text-center">
                {/* <BiCheckCircle size={18} className="me-2" /> */}
                {skill}
              </div>
            </span>
          ))}
        </div>
        <div className="fw-bold mt-4 mb-3">EDUCATION</div>
        <div className="p-0">
          <BsDot size={50} />
          <span className="">MADANI UNIVERSITY OF TABRIZ</span>
        </div>
        <div className="mb-2 ps-5">
          <span className="fw-bold">BACHELOR OF COMPUTER SCIENCE,</span>{" "}
          2017-2021
        </div>
        <div className="fw-bold mt-4 mb-3">LANGUAGES</div>
        {langs.map((lang, l) => (
          <span key={l} className="col-auto">
            <div className="p-2 bg-body-secondary rounded-3 text-center">
              {lang}
            </div>
          </span>
        ))}
      </div>
    </div>
  );
}

export default App;
