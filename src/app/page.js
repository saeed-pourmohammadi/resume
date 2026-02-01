"use client";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useRef, useState } from "react";
import { Spinner } from "react-bootstrap";
import { MdDownload } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { Spinner } from "react-bootstrap";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("HomePage");

  const skills = t.raw("SKILLS.items");
  const languages = t.raw("LANGUAGES.items");
  const experiences = t.raw("EXPERIENCE.items");
  const education = t.raw("EDUCATION.items")[0];

  const pdfRef = useRef(null);
  const [pending, setPending] = useState(false);

  function download() {
    if (!pdfRef.current) return;
    setPending(true);

    html2canvas(pdfRef.current, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4", true);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const ratio = Math.min(pdfWidth / canvas.width, pdfHeight / canvas.height);
      const imgX = (pdfWidth - canvas.width * ratio) / 2;

      pdf.addImage(
        imgData,
        "PNG",
        imgX,
        15,
        canvas.width * ratio,
        canvas.height * ratio
      );
      pdf.save("resume-Saeed_Pourmohammadi.pdf");
      setPending(false);
    });
  }

  return (
    <div className="p-4 w-full bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto">
        {/* Download */}
        <div className="flex justify-center mb-4">
          <button
            onClick={download}
            disabled={pending}
            className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded disabled:opacity-50 w-44"
          >
            {pending ? <Spinner size="sm" /> : t("Download-PDF-button")}
            {!pending && <MdDownload size={20} />}
          </button>
        </div>

        {/* Resume */}
        <div ref={pdfRef} className="shadow-lg bg-white rounded-2xl p-6">
          <div className="text-center text-2xl font-bold mb-4">
            {t("title")}
          </div>

          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center text-sm text-center sm:text-left gap-2 mb-4">
            <a
              href={`https://${t("linkedin")}`}
              target="_blank"
              className="text-blue-600 hover:underline break-words"
            >
              {t("linkedin")}
            </a>
            <span className="font-medium">{t("name")}</span>
            <span className="break-all">{t("email")}</span>
          </div>

          {/* About */}
          <div className="text-justify mb-6">
            {t("short-description.1")}
            <span className="font-bold">{t("short-description.2")}</span>
            {t("short-description.3")}
            <span className="font-bold">{t("short-description.4")}</span>
            {t("short-description.5")}
          </div>

          {/* Experience */}
          <div>
            <div className="font-bold mb-2">
              {t("EXPERIENCE.title")}
            </div>

            {experiences.map((exp, i) => (
              <div key={i} className="mb-4">
                <div className="flex items-center gap-2 text-lg font-medium">
                  <GoDotFill />
                  {exp.title}
                </div>
                <div className="ms-5 mt-1 text-sm text-justify">
                  <div className="font-bold">{exp["sub-title"]}</div>
                  {exp.content}
                </div>
              </div>
            ))}
          </div>

          {/* Skills */}
          <div className="font-bold mt-6 mb-2">
            {t("SKILLS.title")}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 mb-4">
            {skills.map((skill, i) => (
              <div
                key={i}
                className="bg-gray-100 text-center py-2 rounded-lg"
              >
                {skill}
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="font-bold mb-2">
            {t("EDUCATION.title")}
          </div>
          <div className="flex items-center gap-2 mb-1">
            <GoDotFill />
            <span>{education.university}</span>
          </div>
          <div className="ms-5 mb-4">
            <span>{education.degree}</span>,{" "}
            {education.year}
          </div>

          {/* Languages */}
          <div className="font-bold mb-2">
            {t("LANGUAGES.title")}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
            {languages.map((lang, i) => (
              <div
                key={i}
                className="bg-gray-100 text-center p-2 rounded-lg"
              >
                {lang.name} - {lang.level}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
