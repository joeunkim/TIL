import React from 'react';
import MyButton from './MyButton';
import axios from 'axios';
import RaisedButton from 'material-ui/RaisedButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';



class React_example5 extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            num : 0
        };

        //this.up_num = this.up_num.bind(this);
        //arrow fuction을 사용하지 않으면 binding 필요

    }

    up_num = (num) => {
        this.setState({
            num : this.state.num+1
        });
    }

    down_num = (num) => {
        if(this.state.num == 0){
            num : 0
        }
        else{
            this.setState({
                num : this.state.num-1
            });
        }
    }

    reset_num = (num) =>{
        this.setState({
            num : 0
        });
    }
    
    componentDidMount() 
    {
        console.log("componentWillMount!");
        axios.get('http://demo8049148.mockable.io/jekim')
             .then(response => {
                 let msg = response.data
                 console.log(msg);
                 this.setState({
                     num : msg.value
                    })
                })
    }

    render(){
        // if(this.state.msg.length === 0){
        //     return false;
        // }
        return (
                <div>
                    <p>{this.state.num}</p>
                    
                    <RaisedButton label = "UP"
                                  onClick = {this.up_num}
                                  backgroundColor = 'rgb(148,000,211)'/>
                    <RaisedButton label = "DOWN"
                                  onClick = {this.down_num}
                                  backgroundColor = 'rgb(186,085,211)'/>
                    <RaisedButton label = "RESET"
                                  onClick = {this.reset_num}
                                  backgroundColor = 'rgb(211,160,211)'/>              
                </div>
        );
    }
}

export default React_example5;


