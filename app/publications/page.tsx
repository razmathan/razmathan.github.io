import Navbar from "@/components/navbar/Navbar";
import Publication from "@/components/publication/Publication";
import Footer from "@/components/footer/Footer";

export default function PublicationsPage() {
  return (
    <div className="min-h-screen bg-emerald-950 flex flex-col">
      <Navbar />

      {/* Page header */}
      <div className="bg-emerald-900 py-10 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold">Publications</h1>
          <p className="text-emerald-300 text-sm mt-2">Peer-reviewed journals and conference proceedings</p>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-6 py-12 w-full flex-1">

        <h2 className="text-xl font-semibold mb-6 text-orange-400 border-b border-emerald-800 pb-2">
          Journal Articles
        </h2>
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

        <h2 className="text-xl font-semibold mb-6 text-orange-400 border-b border-emerald-800 pb-2">
          Conference Papers
        </h2>
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

      </main>
      <Footer />
    </div>
  );
}
