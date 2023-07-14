import ArrowLeft from "@/components/ArrowLeft";
import ProjectPageHeader from "@/components/ProjectPageHeader";
import ProjectsPage from "@/components/ProjectsPage";

const Projects = () => {
  return (
    <div className="project-page p-12 md:p-28 overflow-hidden">
      <ArrowLeft />
      <ProjectPageHeader />
      <ProjectsPage />
    </div>
  );
};

export default Projects;
