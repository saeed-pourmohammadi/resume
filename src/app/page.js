"use client";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useEffect, useRef, useState } from "react";
import { Spinner } from "react-bootstrap";
import { MdDownload, MdEmail } from "react-icons/md";
import { GoDotFill } from "react-icons/go";

export default function Home() {
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
  const pdfRef = useRef();
  const [pending, setPending] = useState(false);

  function download() {
    const input = pdfRef.current;
    setPending(true);
    html2canvas(input, {
      scale: 2,
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4", true);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 15;
      pdf.addImage(
        imgData,
        "PNG",
        imgX,
        imgY,
        imgWidth * ratio,
        imgHeight * ratio
      );
      pdf.save("resume-Saeed_Pourmohammadi.pdf");
      setPending(false);
    });
  }
  return (
    <div className="container-fluid p-4">
      <div className="mx-auto" style={{ maxWidth: "1000px" }}>
        <div className="row mx-0 mb-4">
          <div className="col-auto text-center">
            <button
              className="btn btn-primary fw-bold"
              onClick={() => download()}
              disabled={pending}
              style={{ width: "180px" }}
            >
              {pending ? <Spinner size="sm" /> : "Download PDF"}
              {!pending && <MdDownload />}
            </button>
          </div>
        </div>
        <div className="shadow-lg bg-white">
          <div
            className="row justify-content-start p-4 text-start rounded-4 bg-white"
            ref={pdfRef}
          >
            <div className="col-12 fw-bold fs-3 text-center">
              FRONTEND DEVELOPER
            </div>
            <div className="row mx-0">
              <div className="col-12 col-sm-4 mb-2 small px-0 text-center">
                <a
                  target="_blank"
                  href="https://linkedin.com/in/saeed-pourmohammadi"
                >
                  linkedin.com/in/saeed-pourmohammadi
                </a>
              </div>
              <div className="col-12 col-sm-4 px-0 mb-2 text-center px-0">
                Saeed pourmohammadi
              </div>
              <div className="col-12 col-sm-4 text-center mb-2 px-0">
                {/* <MdEmail size={18} className="me-3" /> */}
                <span>saeed.pourmohammadi1998@gmail.com</span>
              </div>
            </div>
            <div className="col-12 mb-4 mt-3 text-justify">
              I am a frontend web developer with{" "}
              <span className="fw-bold">5 years</span> of experience working
              with the <span className="fw-bold">React</span> framework. For me,
              developing is more than just coding - it's a lifestyle. I believe
              in enjoying life while doing what I love, and I find satisfaction
              in creating visually appealing and user-friendly websites.
            </div>

            <div className="fw-bold mt-0 mb-2 px-0">EXPERIENCE</div>
            <div>
              <GoDotFill className="me-2" size={20} />
              <span className="fs-5">expert developer</span>
              <div className="ms-5 mt-2">
                <div className="mb-2">
                  <span className="fw-bold">FRONTEND,</span> 2018-2021
                </div>
                <div className="text-justify">
                  I've effectively utilized a combination of{" "}
                  <span className="fw-bold">Javascript, React.js,</span> and{" "}
                  <span className="fw-bold">Redux</span> to build robust
                  frontend applications. By implementing responsive design
                  techniques, I ensured that these applications deliver seamless
                  user experiences across various devices. Furthermore, I
                  integrated <span className="fw-bold">RESTful APIs</span> to
                  enable smooth communication between the frontend and backend,
                  resulting in dynamic and interactive web experiences for
                  users.
                </div>
              </div>
            </div>
            <div className="mt-2">
              <GoDotFill className="me-2" size={20} />
              <span className="fs-5">expert developer</span>
              <div className="ms-5 mt-2">
                <div className="mb-2">
                  <span className="fw-bold">FRONTEND,</span> 2021-2024
                </div>
                <div className="text-justify">
                  I've harnessed a diverse skill set to create exceptional web
                  applications. Leveraging{" "}
                  <span className="fw-bold">HTML, CSS, Sass,</span> and
                  frameworks like{" "}
                  <span className="fw-bold">Bootstrap and Tailwind,</span> I've
                  crafted visually stunning and intuitive user interfaces.{" "}
                  <span className="fw-bold">JavaScript and TypeScript</span>{" "}
                  have been instrumental in adding dynamic functionality and
                  enhancing user interactions. With{" "}
                  <span className="fw-bold">React.js and Next.js,</span> I've
                  built scalable and high-performance applications, ensuring
                  seamless navigation and rendering. My commitment to responsive
                  design principles guarantees optimal user experiences across
                  devices of all sizes.
                </div>
                <div className="mt-3 text-justify">
                  Moreover, I've integrated{" "}
                  <span className="fw-bold">WebSocket</span> technology to
                  enable read-time communication and collaboration features in
                  my projects.
                  <span className="fw-boldّ">Git</span> has been my go-to
                  version control system, allowing for efficient collaboration
                  and code management within development teams. Additionally,
                  I've proficiently implemented{" "}
                  <span className="fw-bold">Redux</span> for state management,
                  ensuring consistency and scalability as applications grow in
                  complexity. Lastly, I've seamlessly integrated{" "}
                  <span className="fw-bold">RESTfull APIs</span> to facilitate
                  data exchange between frontend and backend systems, enabling
                  robust and dynamic web experiences for users.
                </div>
              </div>
            </div>
            <div className="fw-bold mt-4 mb-3 px-0">SKILLS</div>
            <div className="row g-1 ps-3">
              {skills.map((skill, s) => (
                <span key={s} className="col-6 col-sm-3">
                  <div className="py-2 bg-body-secondary rounded-3 text-center">
                    {/* <BiCheckCircle size={18} className="me-2" /> */}
                    {skill}
                  </div>
                </span>
              ))}
            </div>
            <div className="fw-bold mt-4 mb-2 px-0">EDUCATION</div>
            <div className="p-0 mb-2">
              <GoDotFill className="me-2" size={20} />
              <span className="">MADANI UNIVERSITY OF TABRIZ</span>
            </div>
            <div className="mb-2 ps-5">
              <span className="fw-bold">BACHELOR OF COMPUTER SCIENCE,</span>{" "}
              2017-2021
            </div>
            <div className="fw-bold mt-4 mb-2 px-0">LANGUAGES</div>
            {langs.map((lang, l) => (
              <span key={l} className="col-auto g-2">
                <div className="p-2 bg-body-secondary rounded-3 text-center">
                  {lang}
                </div>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
