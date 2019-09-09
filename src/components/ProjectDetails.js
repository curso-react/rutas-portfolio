import React from 'react';
import { Link } from 'react-router-dom';

import { myProjects } from './Projects'

const projectDetails = (props) => {
  console.log(props)

  const getProject = (id) => {
    return myProjects.find( project => project.id === id)
  }

  const { params } = props.match;
  const foundProject = getProject(params.id)

  return (
    <div>
      <h2>{ foundProject.name} <span style={{fontSize: '14px'}}>{foundProject.year}</span></h2>
      <h3>Used technologies: {foundProject.technologies}</h3>
      <Link to='/projects'>Back</Link>
    </div>
  )
}

export default projectDetails;