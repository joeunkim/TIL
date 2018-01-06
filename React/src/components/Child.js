import React from 'react';
import styles from './React_example2.css';

class Child extends React.Component {
    render(){
        return (
            <div>
                <p className = {styles.childtext}>{this.props.title}</p>
            </div>
            
        );
    }
}

export default Child;