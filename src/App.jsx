import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Footer} from "./components/layouts/Footer.jsx";
import {Home} from "./pages/Home.jsx";
import {Company} from "./pages/Company.jsx";
import {Contact} from "./pages/Contact.jsx";
import {NewProject} from "./pages/NewProject.jsx";
import {NavBar} from "./components/layouts/NavBar.jsx";
import {Container} from "./components/layouts/Container.jsx";
import {Projects} from "./pages/Projects.jsx";
import {Project} from "./pages/Project.jsx";

function App() {

    return (
        <Router>
            <NavBar/>
            <Container customClass="min-height">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/projects" element={<Projects/>}/>
                    <Route path="/projects/:id" element={<Project/>}/>
                    <Route path="/company" element={<Company/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/newProject" element={<NewProject/>}/>
                </Routes>
            </Container>
            <Footer/>
        </Router>
    )
}

export default App
