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
            <p className="text-sage text-sm mt-1 leading-snug">
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
            <div className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 bg-sienna/20 border border-sienna/40 rounded-full text-sm text-mauve font-medium">
              <span className="w-2 h-2 rounded-full bg-sienna animate-pulse" />
              Open to PhD positions
            </div>
            <h2 className="text-3xl font-bold mb-5">About Me</h2>
            <div className="space-y-4 text-gray-200 leading-relaxed text-sm">
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
                My research lies at the intersection of{" "}
                <strong className="text-white">artificial intelligence, robotics, and the built environment</strong>.
                I am interested in how robots can perceive, understand, and interact with complex construction
                environments autonomously and safely. My current work focuses on semantic segmentation using{" "}
                <strong className="text-white">foundation models and Vision Language Models (VLMs)</strong>,
                synthetic data generation, and real-time object detection for robotic manipulation.
              </p>
              <p>
                My long-term goal is to develop practical robotic systems integrating perception, environmental
                understanding, and autonomous decision-making for{" "}
                <strong className="text-white">human-robot collaboration</strong> in real construction environments.
              </p>
            </div>

            {/* Download CV */}
            <a
              href="/mathanraj_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 bg-earth-800 hover:bg-earth-700 text-white rounded-md text-sm font-medium transition-colors"
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
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-200">
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
                      <p className="text-sm font-semibold text-white">MSc Global Smart City</p>
                      <p className="text-xs text-sage">Sungkyunkwan University · 2023–2025</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaGraduationCap className="text-sage mt-0.5 flex-shrink-0" size={18} />
                    <div>
                      <p className="text-sm font-semibold text-white">BE Civil Engineering</p>
                      <p className="text-xs text-sage">Anna University · 2014–2018</p>
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
