import React from 'react'

export default function Projects(props) {
    return (
        <div className="project">
            <a href={props.lnk} className="project-name">{props.name}</a>
            <h3>Description: <span>{props.desc}</span></h3>
            <h3>Tools: <span>{props.tools}</span></h3>
        </div>
    )
}
