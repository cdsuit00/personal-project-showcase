import { useState } from 'react';
import Header from './components/Header';
import AddProjectForm from './components/AddProjectForm/AddProjectForm';
import SearchBar from './components/SearchBar/SearchBar';
import ProjectList from './components/ProjectList/ProjectList';
import './App.css';

function App() {
const [projects, setProjects] = useState([
  { 
    id: 1, 
    title: 'To-Do List App', 
    description: 'A simple app to add, complete, and delete daily tasks with local storage saving.' 
  },
  { 
    id: 2, 
    title: 'Weather Dashboard', 
    description: 'Displays current weather and 5-day forecast using a free weather API.' 
  },
  { 
    id: 3, 
    title: 'Recipe Finder', 
    description: 'Search for recipes by ingredient with basic filtering options.' 
  },
  { 
    id: 4, 
    title: 'Expense Tracker', 
    description: 'Track monthly expenses with visual charts showing spending categories.' 
  },
  { 
    id: 5, 
    title: 'Quiz Game', 
    description: 'Multiple-choice quiz with score tracking and instant feedback.' 
  }
]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddProject = (newProject) => {
    setProjects([...projects, { ...newProject, id: projects.length + 1 }]);
  };

  return (
    <div className="app">
      <Header />
      <AddProjectForm onAddProject={handleAddProject} />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ProjectList projects={projects} searchTerm={searchTerm} />
    </div>
  );
}

export default App;