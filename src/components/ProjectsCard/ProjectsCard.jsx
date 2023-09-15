import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './ProjectsCard.css'
import {Link} from 'react-router-dom'

const ProjectsCard = (props) => {
    return(
        <Card>
        <Card.Body>
        <div className="projectContainer">
            <div id={props.id} className="content">
            <Card.Title>{props.title}</Card.Title>
            <br></br>
            <Card.Text>
                {props.About}
            </Card.Text>
            <br></br>
            <Button variant="primary"><a target="_blank" href={props.Link}>View Project</a></Button> 
            </div>
            <div className="projectImages">
                <img className="projectImage" src={props.img}/>
            </div>
        </div>
        <a href={props.text} id="projectNext" className="Next">{props.Next}<i className={props.Icon}></i></a>
        </Card.Body>
        </Card>
    )

}

export default ProjectsCard
