import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement, reset, handleOpen, handleClose,} from '../actions/index.js';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

class Buttons extends React.Component {
    render() {
        const actions = [
            <FlatButton
              label="Cancel"
              primary={true}
              onClick={this.props.onHandleClose}
            />,
            <FlatButton
              label="Submit"
              primary={true}
              keyboardFocused={true}
              onClick={this.props.onReset}
            />,
          ];
        return (
            <div>
                <RaisedButton label = "UP"
                              onClick = {this.props.onIncrement}
                              backgroundColor = 'rgb(148,000,211)'/>
                <RaisedButton label = "DOWN"
                              onClick = {this.props.onDecrement}
                              backgroundColor = 'rgb(186,085,211)'/>
                <RaisedButton label = "RESET"
                              onClick = {this.props.onHandleOpen}
                              backgroundColor = 'rgb(211,160,211)'/>  
                <Dialog title="Warning"
                        actions={actions}
                        modal={false}
                        open={this.props.open}
                        onRequestClose={this.props.onHandleClose}>
                        정말 RESET 하시겠습니까?
                </Dialog> 
                {/* <button type="button"
                        onClick={ this.props.onIncrement }>
                        +
                </button>
                <button type="button"
                        onClick={ this.props.onDecrement }>
                        -
                </button> */}
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        open : state.counter.open
    };
}


let mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: () => dispatch(increment()),
        onDecrement: () => dispatch(decrement()),
        onReset: () => dispatch(reset()),
        onHandleOpen: () => dispatch(handleOpen()),
        onHandleClose: () => dispatch(handleClose())
    }
}

Buttons = connect(mapStateToProps, mapDispatchToProps)(Buttons);

export default Buttons;