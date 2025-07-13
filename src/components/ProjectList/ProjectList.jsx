import ProjectCard from './ProjectCard';
import './ProjectList.css';

export default function ProjectList({ projects, searchTerm }) {
  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="project-list">
      {filteredProjects.map(project => (
        <ProjectCard 
          key={project.id} 
          title={project.title} 
          description={project.description} 
        />
      ))}
    </div>
  );
}