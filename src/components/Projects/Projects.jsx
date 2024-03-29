import Auto from './Auto.png'
import Memory from './Memory.png'
import Melophied from './Melophied.png'
import PTVS from './PTVS.png'
import ProjectsCard from '../ProjectsCard/ProjectsCard'

import './Projects.css'


const Projects = () => {
    return(
        <>
        <hr></hr>
        <br></br>
        <h1 id="projects">Projects</h1>
        <div className="projectsContainer">
            <ProjectsCard id="1" text="#2" title="Paramount Television Studios Twitter Feed" About="An internal tool allows you to monitor the social conversation through latest tweets and hashtags featuring Paramount Television Studios titles. Built using JavaScript, Bootstrap, Express, Node, Twitter API, and deployed on Heroku." Link="https://www.youtube.com/watch?v=VSyWU39F6Lo" img={PTVS} Next="Next Project" Icon="bi bi-chevron-compact-down"/>
            <ProjectsCard id="2" text="#3" title="Melophied" About="Melophied is the ultimate tribute to your favorite musical artists. We feel that each person has their own unique favorite songs and albums which get shadowed by other “top lists”. With Melophied, you can show the world what YOUR top 5 songs and albums are for each tribute artist page you create. Discover new songs by browsing other community created tribute fan pages. Built using React, Bootstrap, Express, Node, Mongoose, Spotify API, and deployed on Heroku." Link="https://github.com/jennherrarte/melophied" img={Melophied} Next="Next Project" Icon="bi bi-chevron-compact-down" Git="https://github.com/JennHerrarte/melophied"/>
            <ProjectsCard id="4" title="Dead Head Memory Game" About="A memory game based on the iconic band, The Grateful Dead. Built using JavaScript, jQuery, and Bootstrap. Visually, this is my favorite project." Link="https://jennherrarte.github.io/DeadHeadMemoryGame/" img={Memory} />
        </div>
        </>
    )
}

export default Projects




