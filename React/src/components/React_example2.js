import React from 'react';
import MyButton from './MyButton';
import Parent from './Parent'
import Child from './Child'
import styles from './React_example2.css'

//console.log(styles);

class React_example2 extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            num : 1,
            alpha : [1],
            style : styles,
            color_count : 1
        };
    }

    change_color = () => {
        console.log(this.state.color_count);
        if(this.state.color_count == 1){
            this.setState({
                color_count : ++this.state.color_count,
                color_count : this.state.color_count%3
                
            })
        }
    }

    up_num = (num) => {
        if(this.state.num <5){
            this.setState({
                num : ++this.state.num,
                alpha: [...this.state.alpha, this.state.num]
            });
        }
        else{
            change_color();
        }
        
    }

    render(){
        return (
                <div>
                    <div className = {styles.parent} style={{ background: 'red' }} >
                        <Parent  title = "Parent"/>
                        <div className = {styles.child}>
                                {this.state.alpha.map((element)=> (
                                    <Child title = "Child"/>
                                ))}  
                        </div>

                            <div className = {styles.button}>
                            <MyButton title = "UP"
                                      myfunc = {this.up_num}/>
                        </div>
                    </div>
                    
                    
                </div>
        );
    }
}

export default React_example2;
