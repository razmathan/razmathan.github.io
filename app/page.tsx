import Image from "next/image";
import Navbar from "@/components/navbar/Navbar";
import { MdEmail, MdDownload } from "react-icons/md";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { FaGoogleScholar, FaGraduationCap } from "react-icons/fa6";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-earth-950 flex flex-col">
      <Navbar />

      {/* Hero / Bio Section */}
      <section className="relative bg-earth-900 overflow-hidden">

        {/* Topographic wave background */}
        <div className="absolute inset-0 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="topo" width="320" height="320" patternUnits="userSpaceOnUse">
                <path d="M0,160 C60,120 120,80 160,110 S280,155 320,130" fill="none" stroke="white" strokeOpacity="0.05" strokeWidth="1.5"/>
                <path d="M0,210 C60,170 120,130 160,160 S280,205 320,180" fill="none" stroke="white" strokeOpacity="0.04" strokeWidth="1.5"/>
                <path d="M0,110 C60,70 120,30 160,60 S280,105 320,80" fill="none" stroke="white" strokeOpacity="0.05" strokeWidth="1.5"/>
                <path d="M0,260 C60,230 120,195 160,215 S280,255 320,235" fill="none" stroke="white" strokeOpacity="0.03" strokeWidth="1"/>
                <path d="M0,60 C60,25 120,-10 160,15 S280,55 320,35" fill="none" stroke="white" strokeOpacity="0.03" strokeWidth="1"/>
                <path d="M0,290 C60,270 120,250 160,265 S280,290 320,278" fill="none" stroke="white" strokeOpacity="0.02" strokeWidth="1"/>
                <path d="M0,30 C60,5 120,-25 160,-5 S280,25 320,10" fill="none" stroke="white" strokeOpacity="0.02" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#topo)"/>
          </svg>
        </div>

        <div className="relative max-w-5xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-10 items-start">

          {/* Left: Profile sidebar */}
          <div className="flex flex-col items-center text-center">
            <Image
              src="/images/headshot.jpg"
              alt="Mathanraj Rajendran"
              width={180}
              height={180}
              className="rounded-full object-cover ring-4 ring-earth-700"
            />
            <h1 className="text-2xl font-bold mt-5">Mathanraj Rajendran</h1>
            <p className="text-sienna font-medium mt-1">Research Assistant</p>
            <p className="text-sage mt-1 leading-snug">
              Smart Construction &amp; Systems Lab<br />
              Chungbuk National University
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-4 mt-5">
              <a href="mailto:mathan@chungbuk.ac.kr" title="Email"
                className="text-sage hover:text-sienna transition-colors">
                <MdEmail size={22} />
              </a>
              <a href="https://github.com/mathanraj" target="_blank" rel="noopener noreferrer" title="GitHub"
                className="text-sage hover:text-sienna transition-colors">
                <BsGithub size={20} />
              </a>
              <a href="https://www.linkedin.com/in/mathanraj-rajendran" target="_blank" rel="noopener noreferrer" title="LinkedIn"
                className="text-sage hover:text-sienna transition-colors">
                <BsLinkedin size={20} />
              </a>
              <a href="https://scholar.google.com/citations?user=dcF-jxgAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" title="Google Scholar"
                className="text-sage hover:text-sienna transition-colors">
                <FaGoogleScholar size={20} />
              </a>
            </div>
          </div>

          {/* Right: About content */}
          <div className="md:col-span-2">
            <div className="inline-flex items-center gap-2 mb-5 px-5 py-2 bg-sienna/20 border border-sienna/40 rounded-full text-base text-mauve font-bold animate-blink">
              <span className="w-2.5 h-2.5 rounded-full bg-sienna" />
              Open to PhD positions
            </div>
            <h2 className="text-3xl font-bold mb-5">About Me</h2>
            <div className="space-y-4 text-gray-200 leading-relaxed">
              <p>
                I am a <strong className="text-white">Research Assistant</strong> at the{" "}
                <strong className="text-white">Smart Construction &amp; Systems Laboratory</strong>,{" "}
                <strong className="text-white">Chungbuk National University</strong>, South Korea, under the
                supervision of <strong className="text-white">Prof. Min-Koo Kim</strong>. I completed my{" "}
                <strong className="text-white">Master of Science in Global Smart City</strong> at{" "}
                <strong className="text-white">Sungkyunkwan University</strong> (GPA: 4.31/4.5), with a thesis on
                dimensional quality assessment of structural steel members using terrestrial laser scan data.
              </p>
              <p>
                My research has focused on{" "}
                <strong className="text-white">sensing and 3D data processing</strong>, using terrestrial laser
                scanning and point clouds for dimensional quality assessment of steel structures. I am now moving
                toward <strong className="text-white">scene understanding</strong>, applying foundation models and{" "}
                <strong className="text-white">Vision Language Models (VLMs)</strong> to semantic segmentation of
                building environments.
              </p>
              <p>
                My long-term goal is to connect perception and understanding to{" "}
                <strong className="text-white">BIM integration and autonomous robotic systems</strong> for
                construction, contributing to safer and more efficient built environments.
              </p>
            </div>

            {/* Download CV */}
            <a
              href="/mathanraj_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 bg-earth-800 hover:bg-earth-700 text-white rounded-md font-medium transition-colors"
            >
              <MdDownload size={18} />
              Download CV
            </a>

            {/* Interests + Education */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10">
              <div>
                <h3 className="text-sienna font-bold text-lg mb-3">Interests</h3>
                <ul className="space-y-2">
                  {[
                    "Construction Robotics",
                    "Computer Vision",
                    "Scan-to-BIM & Digital Twin",
                    "Automated Inspection & Monitoring",
                    "Point Cloud Processing",
                    "Human-Robot Collaboration",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-gray-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-sienna flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sienna font-bold text-lg mb-3">Education</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <FaGraduationCap className="text-sage mt-0.5 flex-shrink-0" size={18} />
                    <div>
                      <p className="font-semibold text-white">MSc Global Smart City</p>
                      <p className="text-sm text-sage">Sungkyunkwan University · 2023–2025</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaGraduationCap className="text-sage mt-0.5 flex-shrink-0" size={18} />
                    <div>
                      <p className="font-semibold text-white">BE Civil Engineering</p>
                      <p className="text-sm text-sage">Anna University · 2014–2018</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
