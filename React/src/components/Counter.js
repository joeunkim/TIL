import React from 'react';
//Component를 Redux Store에 연결해주는 API
import { connect } from 'react-redux';

class Counter extends React.Component {
    render() {
        return (
            <h1>VALUE: { this.props.value }</h1>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        value: state.counter.value
    };
}

Counter = connect(mapStateToProps)(Counter);
//connect함수는 또다른 함수를 리턴하는 형태로 사용.
//여기에서 또 다른 함수는 mapStateToProps이다.
//첫번째 인수로 전달되는 함수는 store의 state를 component의 props에 mapping
//두번째 인수로 전달되는 함수는 특정 함수형 props실행 시 지정한 action dispatch(무슨말..)

export default Counter;