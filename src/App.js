import React, { Component } from 'react';
import './App.scss';
import Header from './pages/Header/Header';
import Footer from './pages/Footer/Footer';
import About from './pages/About/About';
import Skills from './pages/Skills/Skills';
import { skillsList } from './data/skills/skills';
import Background from './components/Background/Background';
import Projects from './pages/Projects/Projects';
import { projects } from './data/projects';
import { framework } from './data/skills/framework';
import { stateManagement } from './data/skills/stateManagement';
import { languages } from './data/skills/languages';

//TODO fix Contact us icon
//TODO create page for projects


class App extends Component {
    render() {
        const headerTitles = ['About', 'Projects','Skills', 'Contact'];
        const list = [...framework.list,...stateManagement.list,...languages.list];
        return (
            <div className='App'>
                <Header titles={headerTitles}/>
                <Background/>
                <About/>
                <hr/>
                <Projects projects={projects} list={list}/>
                <hr/>
                <Skills skills={skillsList}/>
                <hr/>
                <Footer/>
            </div>
        );
    }
}

export default App;
