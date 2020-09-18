import React, {useState, useEffect} from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';

const App = () => {
  // Initialize state
  const [ projects, setProjects ] = useState([]);

  // Get projects
  useEffect(() => {
    fetch('/api/projects')
          .then(res => res.json())
          .then(projects => setProjects(projects));
  },[]);

  return (
      <div className="App">

          <h1>Welcome to my portfolio page!</h1>
          <h3>My name is Connor Simmonds.<br></br>I'm a third year SWEN student at Victoria University of Wellington.</h3>

          <h4>Below are a few projects I've made.</h4>

          {
              projects.length ? (
                projects.map((project) => (
                  <div style={{padding: 10}} key={project.name}>
                  <Button 
                      variant="contained"
                      href={project.html_url}>
                      {project.name}
                  </Button>
                  <p>{project.description}</p>
              </div>
              ))
              ) : (
                  <div>
                      Loading projects..
                  </div>
              )
          }
      </div>
  );
}

export default App;