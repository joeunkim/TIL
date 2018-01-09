import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../actions';

class Buttons extends React.Component {
    render() {
        return (
            <div>
                <button type="button"
                        onClick={ this.props.onIncrement }>
                        +
                </button>
                <button type="button"
                        onClick={ this.props.onDecrement }>
                        -
                </button>
            </div>
        )
    }
}


let mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: () => dispatch(increment()),
        onDecrement: () => dispatch(decrement())
    }
}

Buttons = connect(undefined, mapDispatchToProps)(Buttons);
//connet 첫번째 인수 mapStateToProps가 필요치 않으므로 undefined으로 전달

export default Buttons;