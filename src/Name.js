import React, {Component} from 'react';

import './Name.css'

export default class Name extends Component {

    componentWillMount() {
        console.log('componentWillMount');
    };

    componentDidMount() {
        console.log('componentDidMount');
    };

    componentWillReceiveProps() {
        console.log('componentWillReceiveProps');
    };

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate', nextProps, nextState);
    };

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate', prevProps, prevState);
    };

    

    render() {

        const {name, show} = this.props;
        let classNames = 'hide';
        if(show) {
            classNames = 'show'
        }
        return (
            <div className={ classNames }>Hi {name}</div>
        )
    }

}

