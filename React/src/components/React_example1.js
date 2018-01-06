import React from 'react';
import MyButton from './MyButton';


class React_example1 extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            num : 0
        };

        //this.up_num = this.up_num.bind(this);
        this.down_num = this.down_num.bind(this);
        this.reset_num = this.reset_num.bind(this);

    }

    up_num(num){
        this.setState({
            num : ++this.state.num
        });
    }

    down_num(num){
        if(this.state.num == 0){
            num : 0
        }
        else{
            this.setState({
                num : --this.state.num
            });
        }
    }

    reset_num(num){
        this.setState({
            num : 0
        });
    }

    render(){
        return (
                <div>
                    <p>{this.state.num}</p>
                    
                    <MyButton title = "UP"
                              myfunc = {this.up_num}/>
                    <MyButton title = "DOWN"
                              myfunc = {this.down_num}/>
                    <MyButton title = "RESET"
                              myfunc = {this.reset_num}/>                    
                    {/* <Up title = "asdf"/> */}
                </div>
        );
    }
}

export default React_example1;
