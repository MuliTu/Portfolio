import React, { Component } from 'react';
import './App.scss';
import Header from './pages/Header/Header';
import Footer from './pages/Footer/Footer';
import About from './pages/About/About';
import Skills from './pages/Skills/Skills';
import { skillsList } from './data/skills';
import Background from './components/Background/Background';
import Projects from './pages/Projects/Projects';
import { projects } from './data/projects';
import { framework } from './data/skills/framework';
import { stateManagement } from './data/skills/stateManagement';

//TODO fix Contact us icon
//TODO create page for projects


class App extends Component {
    render() {
        const headerTitles = ['About', 'Projects','Skills', 'Contact Me'];
        return (
            <div className='App'>
                <Header titles={headerTitles}/>
                <Background/>
                <About/>
                <hr/>
                <Projects projects={projects} framework={framework} stateMangment={stateManagement}/>
                <hr/>
                <Skills skills={skillsList}/>
                <hr/>
                <Footer/>
            </div>
        );
    }
}

export default App;
