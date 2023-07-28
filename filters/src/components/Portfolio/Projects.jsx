import React from 'react';
import Project from './Project';

const Projects = (props) => {
    const { pics } = props;
    return (
        <div class="images">
            {pics.map((pic, i) => (
                <Project
                    pic={pic}
                    key={i}
                />
            ))}
        </div>
    );
}

export default Projects;