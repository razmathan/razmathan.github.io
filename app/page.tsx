import Image from "next/image";
import Navbar from "@/components/navbar/Navbar";
import { MdEmail } from "react-icons/md";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { FaGoogleScholar } from "react-icons/fa6";
import Footer from "@/components/footer/Footer";
import Publication from "@/components/publication/Publication";

const prefix = '';

export default function Home() {
  return (
    <div className="w-full h-full bg-gray-950 mx-auto min-h-screen flex flex-col items-center">
      <div className="w-full mx-auto min-h-screen flex flex-col items-center">
        <Navbar />
        <hr className="w-full h-0.5 border-gray-800 mb-4" />
        <main className="max-w-[1260px] w-full mt-6 px-4 flex flex-col sm:grid sm:grid-cols-8 sm:gap-6 items-start">

          {/* Sidebar */}
          <div className="col-span-2 mb-6 sm:px-0 px-6 flex flex-col items-center sm:items-start">
            <Image
              src={`${prefix}/images/headshot.jpg`}
              alt="Mathanraj Rajendran"
              height={160}
              width={160}
              className="rounded-full object-cover"
            />
            <h2 className="text-xl font-semibold mt-4">Mathanraj Rajendran</h2>
            <p className="text-md text-gray-400 text-left mt-1">Research Assistant</p>
            <p className="text-sm text-gray-600 leading-snug mt-1">
              Smart Construction &amp; Systems Lab<br />
              Chungbuk National University
            </p>

            <div className="socials text-left mt-3 flex items-center gap-4 sm:block">
              <a
                href="mailto:mathan@skku.edu"
                className="block mt-2 text-blue-400 hover:underline text-sm flex items-center my-2"
              >
                <MdEmail className="inline mr-2" size={16} />
                Email
              </a>
              <a
                href="https://www.linkedin.com/in/mathanraj-rajendran"
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-2 text-blue-400 hover:underline text-sm flex items-center my-2"
              >
                <BsLinkedin className="inline mr-2" size={16} />
                LinkedIn
              </a>
              <a
                href="https://github.com/mathanraj"
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-2 text-blue-400 hover:underline text-sm flex items-center my-2"
              >
                <BsGithub className="inline mr-2" size={16} />
                GitHub
              </a>
              <a
                href="https://scholar.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-2 text-blue-400 hover:underline text-sm flex items-center my-2"
              >
                <FaGoogleScholar className="inline mr-2" size={16} />
                Google Scholar
              </a>
            </div>
          </div>

          {/* Main content */}
          <section className="col-span-6 flex flex-col items-start px-4">

            {/* About Me */}
            <section className="w-full mb-12" id="about">
              <h2 className="text-3xl font-semibold mb-4">About Me</h2>
              <div className="space-y-4 leading-relaxed">
                <p className="text-justify">
                  I am a <strong>Research Assistant</strong> at the{" "}
                  <strong>Smart Construction &amp; Systems Laboratory</strong>,{" "}
                  <strong>Chungbuk National University</strong>, South Korea, under the supervision
                  of <strong>Prof. Min-Koo Kim</strong>. I completed my{" "}
                  <strong>Master of Science in Global Smart City</strong> at{" "}
                  <strong>Sungkyunkwan University</strong> (GPA: 4.31/4.5), advised by Prof. Sung-Han Sim
                  and Prof. Min-Koo Kim, with a thesis on dimensional quality assessment of structural
                  steel members using terrestrial laser scan data.
                </p>
                <p className="text-justify">
                  My research lies at the intersection of{" "}
                  <strong>artificial intelligence, robotics, and the built environment</strong>. I am
                  interested in how robots can perceive, understand, and interact with complex construction
                  environments to perform tasks autonomously and safely. My current work focuses on semantic
                  segmentation of building environments using{" "}
                  <strong>foundation models and Vision Language Models (VLMs)</strong>, synthetic data
                  generation for construction AI, and real-time object detection for robotic manipulation.
                </p>
                <p className="text-justify">
                  My long-term goal is to develop practical robotic systems that operate safely, efficiently,
                  and reliably in real construction environments — integrating perception, environmental
                  understanding, and autonomous decision-making for{" "}
                  <strong>human-robot collaboration</strong> in complex real-world settings.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 mt-10">Research Interests</h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Construction Robotics",
                    "Computer Vision",
                    "Scan-to-BIM & Digital Twin",
                    "Automated Inspection & Monitoring",
                    "Point Cloud Processing",
                    "Human-Robot Collaboration",
                    "Semantic Segmentation",
                    "Autonomous Systems",
                  ].map((area) => (
                    <span
                      key={area}
                      className="px-4 py-1.5 bg-gray-900 font-medium rounded-full text-sm shadow-sm"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </section>

            {/* Publications */}
            <section className="my-12 w-full" id="publications">
              <h2 className="text-3xl font-semibold mb-10 text-white">Publications</h2>

              <h3 className="text-xl font-semibold mb-6 text-gray-300 border-b border-gray-800 pb-2">
                Journal Articles
              </h3>
              <div className="flex flex-col mb-12">
                <Publication
                  date="2025"
                  title="Automated dimensional quality assessment of steel members using TLS and enhanced edge line estimation"
                  authors="Rajendran, M., Sim, S. H., Kim, M. K., Choi, Y. K., & Yi, C. Y."
                  venue="Measurement, 118990"
                  paperUrl="https://doi.org/10.1016/j.measurement.2025.118990"
                />
                <Publication
                  date="2025"
                  title="Human and Multi-Robot Collaboration in Indoor Environments: A Review of Methods and Application Potential for Indoor Construction Sites"
                  authors="Duorinaah, F. X., Rajendran, M., Kim, T. W., Kim, J. I., Lee, S., Lee, S., & Kim, M. K."
                  venue="Buildings, 15(15), 2794"
                  paperUrl="https://doi.org/10.3390/buildings15152794"
                />
                <Publication
                  date="2026"
                  title="Advancing Indoor Construction with Autonomous Robots: Exploring Mobile Robot Applications, Operations, and Challenges in Building Environments"
                  authors="Rajendran, M., Duorinaah, F. X., & Kim, M. K."
                  venue="Journal of Information Technology in Construction"
                  status="Under Review"
                />
                <Publication
                  date="2026"
                  title="Automated Shape-Aware Dimensional Classification and Semantic-Instance Segmentation of Steel Structures from Occluded Point Cloud Data"
                  authors="Rajendran, M., Ayembilla, F.B., Sim, S. H., & Kim, M. K."
                  venue="Automation in Construction"
                  status="Under Review"
                />
              </div>

              <h3 className="text-xl font-semibold mb-6 text-gray-300 border-b border-gray-800 pb-2">
                Conference Papers
              </h3>
              <div className="flex flex-col">
                <Publication
                  date="2026"
                  title="Semantic Segmentation of MEP Point Cloud Scenes Using Point Cloud Completion Approach"
                  authors="Ayembilla, F.B., Rajendran, M., Kim, M. K."
                  venue="ICCEPM 2025, Jeju"
                  paperUrl="https://doi.org/10.6106/ICCEPM.2025.0306"
                />
                <Publication
                  date="2024"
                  title="Dimensional Quality Assessment of Steel H-Beams Using Terrestrial Laser Scan Data"
                  authors="Rajendran, M., Sim, S. H., Kim, M. K., & Choi, Y. K."
                  venue="International Conference on Construction Engineering and Project Management (pp. 264–270)"
                  paperUrl="https://doi.org/10.6106/ICCEPM.2024.0264"
                />
              </div>
            </section>

            {/* Projects */}
            <section className="my-12 mb-24 w-full" id="projects">
              <h2 className="text-3xl font-semibold mb-10">Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                <div className="p-4 bg-gray-900 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Semantic Segmentation of Indoor Point Clouds</h3>
                  <p className="text-xs text-gray-500 mb-2 uppercase tracking-widest">2026 – Present</p>
                  <p className="text-sm text-gray-300 mb-2">
                    Developing approaches for improving semantic segmentation accuracy of building environments
                    by integrating images and point clouds with zero-shot techniques and Vision Language Models (VLMs).
                  </p>
                  <p className="text-xs font-mono text-gray-500">
                    Tools: Python · VLMs · Foundation Models · Point Cloud Processing
                  </p>
                </div>

                <div className="p-4 bg-gray-900 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Bin Picking Using Robotic Arm Manipulation</h3>
                  <p className="text-xs text-gray-500 mb-2 uppercase tracking-widest">2025 – Present</p>
                  <p className="text-sm text-gray-300 mb-2">
                    Developing methods for real-time bin picking using robotic arms in controlled environments,
                    integrating AI, computer vision, and multi-modal sensors for object detection and manipulation.
                  </p>
                  <p className="text-xs font-mono text-gray-500">
                    Tools: Python · Computer Vision · Robotic Arms · Multi-modal Sensors
                  </p>
                </div>

                <div className="p-4 bg-gray-900 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Dimensional Quality Assessment of Precast Concrete Panels</h3>
                  <p className="text-xs text-gray-500 mb-2 uppercase tracking-widest">2023 – 2025</p>
                  <p className="text-sm text-gray-300 mb-2">
                    Developed a methodology for precise dimensional quality assessment of precast concrete panels
                    by estimating edge lines from point cloud data, and proposed a data-fusion technique integrating
                    image and point cloud data for rapid evaluation of precast bridge deck panels.
                  </p>
                  <p className="text-xs font-mono text-gray-500">
                    Tools: MATLAB · Python · TLS · Point Cloud · BIM/IFC
                  </p>
                </div>

                <div className="p-4 bg-gray-900 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Dimensional Quality Assessment of Structural Steel Members</h3>
                  <p className="text-xs text-gray-500 mb-2 uppercase tracking-widest">2023 – 2025</p>
                  <p className="text-sm text-gray-300 mb-2">
                    Developed an automated method for accurate cross-sectional dimensional assessment of
                    structural steel using terrestrial laser scanning. Proposed an edge-loss compensation model
                    that significantly improved measurement accuracy from low-resolution TLS point clouds.
                  </p>
                  <p className="text-xs font-mono text-gray-500">
                    Tools: MATLAB · Python · TLS · Point Cloud Processing
                  </p>
                </div>

              </div>
            </section>

          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}
