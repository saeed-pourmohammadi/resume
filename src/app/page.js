"use client";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useRef, useState } from "react";
import { Spinner } from "react-bootstrap";
import { MdDownload } from "react-icons/md";
import { GoDotFill } from "react-icons/go";

export default function Home() {
  const skills = [
    "javascript", "react.js", "next.js", "React hook", "Redux", "css", "sass",
    "bootstrap", "tailwind", "webSocket", "Socket.IO", "Restful API", "CI/CD",
    "Git", "Responsive design", "html"
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
    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4", true);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 15;
      pdf.addImage(imgData, "PNG", imgX, imgY, imgWidth * ratio, imgHeight * ratio);
      pdf.save("resume-Saeed_Pourmohammadi.pdf");
      setPending(false);
    });
  }

  return (
    <div className="p-4 w-full bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-center mb-4">
          <button
            className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded disabled:opacity-50 w-44"
            onClick={download}
            disabled={pending}
          >
            {pending ? <Spinner size="sm" /> : "Download PDF"}
            {!pending && <MdDownload size={20} />}
          </button>
        </div>

        <div className="shadow-lg bg-white rounded-2xl p-6" ref={pdfRef}>
          <div className="text-center text-2xl font-bold mb-4">FRONTEND DEVELOPER</div>

          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center text-sm text-center sm:text-left gap-2 mb-4">
            <a
              href="https://linkedin.com/in/saeed-pourmohammadi"
              target="_blank"
              className="text-blue-600 hover:underline break-words"
            >
              linkedin.com/in/saeed-pourmohammadi
            </a>
            <span>Saeed pourmohammadi</span>
            <span className="break-words">saeed.pourmohammadi1998@gmail.com</span>
          </div>

          <div className="text-justify mb-6 leading-relaxed">
            I am a frontend web developer with <span className="font-bold">5 years</span> of experience working
            with the <span className="font-bold">React</span> framework. For me,
            developing is more than just coding - it's a lifestyle. I believe
            in enjoying life while doing what I love, and I find satisfaction
            in creating visually appealing and user-friendly websites.
          </div>

          <div className="font-bold text-lg mb-2">EXPERIENCE</div>

          <div className="mb-6">
            <div className="flex items-center gap-2 text-base font-semibold">
              <GoDotFill />
              expert developer
            </div>
            <div className="ms-6 mt-2">
              <div className="font-bold mb-2">FRONTEND, 2018-2021</div>
              <p className="text-justify">
                I've effectively utilized a combination of <span className="font-bold">Javascript, React.js,</span> and{" "}
                <span className="font-bold">Redux</span> to build robust
                frontend applications. By implementing responsive design
                techniques, I ensured that these applications deliver seamless
                user experiences across various devices. Furthermore, I
                integrated <span className="font-bold">RESTful APIs</span> to
                enable smooth communication between the frontend and backend,
                resulting in dynamic and interactive web experiences for
                users.
              </p>
            </div>
          </div>

          <div className="mb-6">
            <div className="flex items-center gap-2 text-base font-semibold">
              <GoDotFill />
              expert developer
            </div>
            <div className="ms-6 mt-2">
              <div className="font-bold mb-2">FRONTEND, 2021-2024</div>
              <p className="text-justify mb-3">
                I've harnessed a diverse skill set to create exceptional web
                applications. Leveraging <span className="font-bold">HTML, CSS, Sass,</span> and
                frameworks like <span className="font-bold">Bootstrap and Tailwind,</span> I've
                crafted visually stunning and intuitive user interfaces. <span className="font-bold">JavaScript and TypeScript</span>{" "}
                have been instrumental in adding dynamic functionality and
                enhancing user interactions. With <span className="font-bold">React.js and Next.js,</span> I've
                built scalable and high-performance applications, ensuring
                seamless navigation and rendering. My commitment to responsive
                design principles guarantees optimal user experiences across
                devices of all sizes.
              </p>
              <p className="text-justify">
                Moreover, I've integrated <span className="font-bold">WebSocket</span> technology to
                enable real-time communication and collaboration features in
                my projects. <span className="font-bold">Git</span> has been my go-to
                version control system, allowing for efficient collaboration
                and code management within development teams. Additionally,
                I've proficiently implemented <span className="font-bold">Redux</span> for state management,
                ensuring consistency and scalability as applications grow in
                complexity. Lastly, I've seamlessly integrated{" "}
                <span className="font-bold">RESTful APIs</span> to facilitate
                data exchange between frontend and backend systems, enabling
                robust and dynamic web experiences for users.
              </p>
            </div>
          </div>

          <div className="font-bold text-lg mb-2">SKILLS</div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 mb-6">
            {skills.map((skill, index) => (
              <div key={index} className="bg-gray-100 text-center py-2 rounded-lg text-sm">
                {skill}
              </div>
            ))}
          </div>

          <div className="font-bold text-lg mb-2">EDUCATION</div>
          <div className="flex items-center gap-2 mb-1">
            <GoDotFill />
            <span>MADANI UNIVERSITY OF TABRIZ</span>
          </div>
          <div className="ms-6 mb-6">
            <span className="font-bold">BACHELOR OF COMPUTER SCIENCE,</span> 2017–2021
          </div>

          <div className="font-bold text-lg mb-2">LANGUAGES</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
            {langs.map((lang, index) => (
              <div key={index} className="bg-gray-100 text-center p-2 rounded-lg text-sm">
                {lang}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
