import React from 'react';
import Child from './Child';
import styles from './React_example2.css';
import MyButton from './MyButton';
import axios from 'axios';

class Parent extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            num : 0, 
            alpha : [0],
            color_count : 0,
            bg_color : ['red','blue', 'green'],
            ch_bg_color: [[255,100,0],[100,0,255],[0,255,100]]
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
                color_count : this.state.color_count+1
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
                color_count : this.state.color_count-1
            });
            if(this.state.color_count == 0){
                this.setState({
                    color_count : 2
                });
            }
        }
        
    }

    componentDidMount() 
    {
        console.log("componentWillMount!");
        axios.get('http://demo8049148.mockable.io/jekim')
             .then(response => {
                 let msg = response.data
                 console.log(msg);
                 let num = msg.value
                 num %= 7
                 console.log(num);
                 for(var i = 0; i < num; i++){
                     this.up();
                 }
                 
                })
    }
    
    render(){
        return (
            <div className = {styles.parent} 
                 style = {{
                     background: this.state.bg_color[this.state.color_count]}}>
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
                        style = {{background : `rgba(
                         ${this.state.ch_bg_color[this.state.color_count][0]},
                         ${this.state.ch_bg_color[this.state.color_count][1]},
                         ${this.state.ch_bg_color[this.state.color_count][2]},
                         ${this.state.num})`}}>
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