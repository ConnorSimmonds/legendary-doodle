import React, {useState, useEffect} from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Avatar from '@material-ui/core/Avatar';
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
          <div className="dialogue">
          <Avatar alt="Connor Simmonds" src="/images/avatar/1.jpg" className="dialogueAvatar"/>
          <Card className="dialogueCard">
          <h3>My name is Connor Simmonds.<br></br>This is a simple site to show off my GitHub projects.</h3>
          </Card>
          </div>
          <h4>Below are a few GitHub projects.</h4>
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
                      <CircularProgress />
                  </div>
              )
          }

          <p>The source for this site can be found either in the above projects, or <a href="https://github.com/ConnorSimmonds/legendary-doodle">here</a>.</p>
      </div>
  );
}

export default App;