import React, { Component } from 'react';
import './App.scss';
import Header from './pages/Header/Header';
import Footer from './pages/Footer/Footer';
import About from './pages/About/About';
import Skills from './pages/Skills/Skills';
import { skillsList } from './skills';
import Background from './components/Background/Background';

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
                <Skills skills={skillsList}/>
                <hr/>
                <Footer/>
            </div>
        );
    }
}

export default App;
