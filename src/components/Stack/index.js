import React from 'react'
import './style.scss';
import SectionTitle from '../SectionTitle';


const Stack = () => {
  const icons = [
    "devicon-javascript-plain",
    "devicon-typescript-plain",
    "devicon-php-plain",
    "devicon-html5-plain",
    "devicon-css3-plain",
    "devicon-sass-original",
    "devicon-bootstrap-plain",
    "devicon-react-original",
    "devicon-nodejs-plain",
    "devicon-symfony-original",
    "devicon-postgresql-plain",
    "devicon-github-original",
    "devicon-slack-plain",
    "devicon-trello-plain",
  ];
    return (
      <div className="stack mt-4">
        <SectionTitle title={'Ma stack'} />
        <div className='d-flex flex-wrap justify-content-center my-4'>
          {icons.map((icon, index) => (
            <i key={index} className={`${icon} colored`} style={{ fontSize: "3rem", margin: "10px" }}></i>
          ))}
        </div>
      </div>
  );
}

export default Stack;