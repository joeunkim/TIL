import React from 'react';
import Parent from './Parent';
import styles from './React_example2.css'

class React_example2 extends React.Component {
    render(){
        return (
            <div >
                <Parent title = "Parent"
                        // color_count = "1"
                        /> 
            </div>
        );
    }

}

export default React_example2;
