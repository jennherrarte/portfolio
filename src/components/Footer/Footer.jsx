
import './Footer.css'

const Footer = () => {
    return(
        <>
        <div className="footerContainer">
       <p>© Jennifer Herrarte 2021</p>
            <div className="footerIcons">
            <a className="footerIcons" target="_blank" href="https://github.com/JennHerrarte"><i className="bi bi-github"></i></a>
            <a className="footerIcons" target="_blank" href="https://www.linkedin.com/in/jenniferherrarte/"><i className="bi bi-linkedin"></i></a>
            <a className="footerIcons" target="_blank" href="mailto:hello@jennherrarte.dev"><i className="bi bi-envelope-fill"></i></a>
            </div>
        </div>
        </>
    )
}

export default Footer




