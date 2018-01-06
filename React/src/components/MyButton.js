import React from 'react';

class MyButton extends React.Component {
    render(){
        return (
            <div>
                <button onClick = {this.props.myfunc}>{this.props.title}</button>
            </div>
            
        );
    }
}

export default MyButton;