# Personal Project Showcase

A React single-page application to showcase and manage personal projects with search functionality.

## Features
- Add new projects with titles and descriptions
- Dynamic search/filtering of projects
- Responsive design for all screen sizes
- Clean, modern UI

## Setup Instructions

### Prerequisites
- Node.js (v16 or later)
- npm (v8 or later)

### Installation
1. Copy the Clone link from the GitHub repository:
    https://github.com/cdsuit00/personal-project-showcase.git

2. Navigate to the directory where you want the project stored then run :
    git clone link copied from github

3. Install dependencies
   npm install

### Running the App
1. Start development server:
   npm run dev

2. Open in browser:
    http://localhost:5173

### Project Structure

src/
├── components/
│   ├── AddProjectForm/  # Project submission form
│   ├── ProjectList/     # Displays filtered projects
│   ├── SearchBar/       # Search functionality
│   └── Header.jsx       # App title
├── App.jsx              # Root component
└── main.jsx             # Entry point