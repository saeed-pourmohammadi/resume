"use client";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useRef, useState } from "react";
import { MdDownload } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { Spinner } from "react-bootstrap";

export default function Home() {
  const skills = [
    "javascript", "react.js", "next.js", "React hook", "Redux",
    "css", "sass", "bootstrap", "tailwind", "webSocket", "Socket.IO",
    "Restful API", "CI/CD", "Git", "Responsive design", "html",
  ];
  const langs = [
    "English - Professional working proficiency",
    "Turkish - Native",
    "Persian - Native",
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
    <div className="p-4 w-full">
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

          <div className="flex flex-col md:flex-row justify-between items-center text-sm mb-4 gap-2 text-center">
            <a
              href="https://linkedin.com/in/saeed-pourmohammadi"
              target="_blank"
              className="text-blue-600 hover:underline break-words"
            >
              linkedin.com/in/saeed-pourmohammadi
            </a>
            <span className="font-medium">Saeed Pourmohammadi</span>
            <span className="break-all">saeed.pourmohammadi1998@gmail.com</span>
          </div>

          <div className="text-justify mb-6">
            I am a frontend web developer with <span className="font-bold">5 years</span> of experience working
            with the <span className="font-bold">React</span> framework. For me,
            developing is more than just coding – it's a lifestyle. I believe
            in enjoying life while doing what I love, and I find satisfaction
            in creating visually appealing and user-friendly websites.
          </div>

          <div>
            <div className="font-bold mb-2">EXPERIENCE</div>

            <div className="mb-4">
              <div className="flex items-center gap-2 text-lg font-medium">
                <GoDotFill />
                expert developer
              </div>
              <div className="ms-5 mt-1 text-sm text-justify">
                <div className="font-bold">FRONTEND, 2018–2021</div>
                I've effectively utilized a combination of <span className="font-bold">Javascript, React.js,</span> and{" "}
                <span className="font-bold">Redux</span> to build robust frontend applications...
              </div>
            </div>

            <div className="mb-4">
              <div className="flex items-center gap-2 text-lg font-medium">
                <GoDotFill />
                expert developer
              </div>
              <div className="ms-5 mt-1 text-sm text-justify">
                <div className="font-bold">FRONTEND, 2021–2024</div>
                I've harnessed a diverse skill set to create exceptional web
                applications. Leveraging <span className="font-bold">HTML, CSS, Sass</span>, and frameworks like{" "}
                <span className="font-bold">Bootstrap and Tailwind</span>...
              </div>
            </div>
          </div>

          <div className="font-bold mt-6 mb-2">SKILLS</div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 mb-4">
            {skills.map((skill, i) => (
              <div key={i} className="bg-gray-100 text-center py-2 rounded-lg">
                {skill}
              </div>
            ))}
          </div>

          <div className="font-bold mb-2">EDUCATION</div>
          <div className="flex items-center gap-2 mb-1">
            <GoDotFill />
            <span>MADANI UNIVERSITY OF TABRIZ</span>
          </div>
          <div className="ms-5 mb-4">
            <span className="font-bold">BACHELOR OF COMPUTER SCIENCE</span>, 2017–2021
          </div>

          <div className="font-bold mb-2">LANGUAGES</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
            {langs.map((lang, i) => (
              <div key={i} className="bg-gray-100 text-center p-2 rounded-lg">
                {lang}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
