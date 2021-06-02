
import './Footer.css'

const Footer = () => {
    return(
        <>
        <div className="footerContainer">
       <p>© Jennifer Herrarte 2021</p>
        <p>Made with<i class="bi bi-suit-heart-fill"></i>and React</p>
            <div class="footerIcons">
            <a class="footerIcons" target="_blank" href="https://github.com/JennHerrarte"><i class="bi bi-github"></i></a>
            <a class="footerIcons" target="_blank" href="https://www.linkedin.com/in/jenniferherrarte/"><i class="bi bi-linkedin"></i></a>
            <a class="footerIcons" target="_blank" href="mailto:hello@jennherrarte.dev"><i class="bi bi-envelope-fill"></i></a>
            </div>
        </div>
        </>
    )
}

export default Footer




