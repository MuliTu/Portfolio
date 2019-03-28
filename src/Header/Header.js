import React from 'react';
import './style.scss'

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isScroll: false
        }
    }

    scrollHandler = () => this.setState({
        isScroll: window.pageYOffset > 16
    });

    titleEntity = (title, index) => (
        <div key={index}>
            <p>{title}</p>
        </div>
    );

    componentDidMount() {
        document.addEventListener('scroll', this.scrollHandler)

    }


    componentWillUnmount() {
        document.removeEventListener('scroll', this.scrollHandler)
    }


    render() {
        const {titles} = this.props;
        const {isScroll} = this.state;
        return (
            <div className={`header ${isScroll ? 'scrolling' : ''}`}>
                {
                    titles.map(this.titleEntity)
                }
            </div>
        );
    }


};

export default Header;
