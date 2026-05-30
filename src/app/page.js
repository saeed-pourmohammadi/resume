"use client";
import { useRef, useState } from "react";
import { MdDownload } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { Spinner } from "react-bootstrap";
import { useTranslations } from "next-intl";
import { useReactToPrint } from "react-to-print";

export default function Home() {
  const t = useTranslations("HomePage");

  const skills = t.raw("SKILLS.items");
  const languages = t.raw("LANGUAGES.items");
  const experiences = t.raw("EXPERIENCE.items");
  const education = t.raw("EDUCATION.items")[0];

  const contentRef = useRef(null);
  const [pending, setPending] = useState(false);

  const reactToPrintFn = useReactToPrint({
    contentRef,
    pageStyle: `
    @page { size: auto; margin: 15mm; }

    @media print {
      /* ✅ مهم‌ترین بخش: چاپ رنگ‌ها و بکگراندها */
      * {
        -webkit-print-color-adjust: exact !important;
        print-color-adjust: exact !important;
        color-adjust: exact !important;
      }

      /* بعضی مرورگرها بکگراند رو روی html/body خاموش می‌کنن */
      html, body {
        -webkit-print-color-adjust: exact !important;
        print-color-adjust: exact !important;
        background: white !important;
      }

      /* اگر Tailwind کلاس‌های bg روی خود المنت‌هاست، این کمک می‌کند */
      .bg-gray-100, .bg-white, .bg-black, .bg-blue-500, .bg-orange-500 {
        -webkit-print-color-adjust: exact !important;
        print-color-adjust: exact !important;
      }

      .page-break { break-after: page; page-break-after: always; }
    }
  `,
  });

  return (
    <div className="p-3 sm:p-4 w-full bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto">
        {/* Download */}
        <div className="flex justify-center mb-4 header">
          <button
            onClick={reactToPrintFn}
            disabled={pending}
            className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded disabled:opacity-50 w-44"
          >
            {pending ? <Spinner size="sm" /> : t("Download-PDF-button")}
            {!pending && <MdDownload size={20} />}
          </button>
        </div>

        {/* Resume */}
        <div className="shadow-lg bg-white rounded-2xl">
          <div
            ref={contentRef}
            className="p-3 sm:p-6"
          >
            <div className="text-center text-2xl font-bold mb-4">
              {t("title")}
            </div>

            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center text-sm sm:text-left gap-2 mb-4">
              <div>
                <span className="font-medium d-block">{t("name")}</span>
                <span className="font-medium d-block">{t("years_old")}</span>
              </div>
              <div>
                <a
                  href={`https://${t("linkedin")}`}
                  target="_blank"
                  className="text-blue-600 d-block hover:underline break-words"
                >
                  {t("linkedin")}
                </a>
                <span className="break-all d-block min-w-[265px]">
                  {t("email")}
                </span>
              </div>
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
            <div className="page-break">
              <div className="font-bold mb-2">{t("EXPERIENCE.title")}</div>

              {experiences.map((exp, i) => (
                <div key={i} className="mb-4">
                  <div className="flex items-center gap-1 text-lg font-medium">
                    <GoDotFill size={10} />
                    {exp.title}
                  </div>
                  <div className="sm:ms-4 mt-1 text-sm text-justify">
                    <div className="font-bold mb-2">{exp["sub-title"]}</div>
                    {exp.items?.map((item, i) => (
                      <div key={i}>
                        <span>- {item}</span>
                      </div>
                    ))}
                    {/* <div>
                    {exp.sub_content}
                </div>
                  {exp.content} */}
                  </div>
                </div>
              ))}
            </div>

            {/* Skills */}
            <div className="font-bold mt-6 mb-2">{t("SKILLS.title")}</div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 mb-4">
              {skills.map((skill, i) => (
                <div
                  key={i}
                  className="bg-gray-100 rounded-lg h-12 flex items-center justify-center text-center"
                >
                  {skill}
                </div>
              ))}
            </div>

            {/* Education */}
            <div className="font-bold mb-2">{t("EDUCATION.title")}</div>
            <div className="flex items-center gap-2 mb-1">
              <GoDotFill size={10} />
              <span>{education.university}</span>
            </div>
            <div className="sm:ms-6 mb-4">
              <span>{education.degree}</span>, {education.year}
            </div>

            {/* Languages */}
            <div className="font-bold mb-2">{t("LANGUAGES.title")}</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
              {languages.map((lang, i) => (
                <div
                  key={i}
                  className="bg-gray-100 text-center p-2 rounded-lg align-content-center"
                >
                  {lang.name} - {lang.level}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
