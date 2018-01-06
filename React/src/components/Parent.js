import React from 'react';
import Child from './Child';
import styles from './React_example2.css';
import MyButton from './MyButton';

class Parent extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            num : 0,
            alpha : [0],
            color_count : 0,
            //bg_color : ['red','blue', 'green'],
            ch_bg_color: [[255,0,0],[0,0,255],[0,255,0]]
        };
    }

    up = () => {
        if(this.state.num <1){
            this.setState({
                num : this.state.num + 0.25,
                alpha: [...this.state.alpha, this.state.num]
            });
        }
        else{
            this.setState({
                color_count : this.state.color_count+1,
                num : 0,
                alpha :[0]
            });
            if(this.state.color_count == 2){
                this.setState({
                    color_count : 0
                });
            }
        }
        
    }

    down = () => {
        if(this.state.num >0){
            //this.state.alpha.pop();
            this.state.alpha.splice(this.state.num*4, 1);
            this.setState({
                num : this.state.num - 0.25,
                // alpha: this.state.alpha
                
            });
        }
        else{
            this.setState({
                color_count : this.state.color_count-1,
                num : 1,
                alpha : [0,0.25,0.5,0.75,1]
            });
            if(this.state.color_count == 0){
                this.setState({
                    color_count : 2
                });
            }
        }
        
    }
    
    render(){
        return (
            <div className = {styles.parent} 
                 style = {{
                     background:`rgba(
                        ${this.state.ch_bg_color[this.state.color_count][0]},
                        ${this.state.ch_bg_color[this.state.color_count][1]},
                        ${this.state.ch_bg_color[this.state.color_count][2]},
                        ${this.state.num})` }}>
                <p>{this.props.title}</p>
                <div>
                    <MyButton title = "UP"
                              myfunc = {this.up}/>
                    <MyButton title = "DOWN"
                              myfunc = {this.down}/>

                </div>
                <div>
                {
                    this.state.alpha.map((element)=> (
                        <div 
                        //key값
                        className = {styles.child} 
                        style = {{background : `rgb(
                         ${this.state.ch_bg_color[this.state.color_count][0]},
                         ${this.state.ch_bg_color[this.state.color_count][1]},
                         ${this.state.ch_bg_color[this.state.color_count][2]})`}}>
                            <Child title = "Child"/>
                        </div>
                    ))  
                }
                </div>
                
            </div>
            
        );
    }
}

export default Parent;