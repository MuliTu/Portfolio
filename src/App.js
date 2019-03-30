import React, { Component } from 'react';
import './App.scss';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Main from './Main/Main';
import Skills from './Skills/Skills';
import { skillsList } from './skills';
import Background from './Background/Background';

//TODO fix background
//TODO fix Contact us icon
//TODO create page for projects


class App extends Component {
    render() {
        const headerTitles = ['About', 'Projects','Skills', 'Contact'];
        return (
            <div className='App'>
                <Header titles={headerTitles}/>
                {/*<Background />*/}
                <Main/>
                <hr/>
                <Skills skills={skillsList}/>
                <hr/>
                <Footer/>
            </div>
        );
    }
}

export default App;
