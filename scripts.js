//const { useState } = React;
const { createStore, bindActionCreators } = Redux;
const { Provider, connect } = ReactRedux;

// Actions Types
const INCREASE_COUNT = 'INCREASE_COUNT';
const DECREASE_COUNT = 'DECREASE_COUNT';

// Actions
const increaseCount = () => ({
    type: INCREASE_COUNT
});

const decreaseCount = () => ({
    type: DECREASE_COUNT
});

// Reducer
const initialState = {
    counter: 0
};

const demoReducer = (state = initialState, action) => {
    switch(action.type) {
        case INCREASE_COUNT:
            return { counter: state.counter + 1 };
        case DECREASE_COUNT:
            return { counter: state.counter - 1 };
        default:
            return state;
    }
};

const demoMapStateToProps = state => ({
    counter: state.counter
});

const demoMapDispatchToProps = dispatch => (
    bindActionCreators({
        increaseCount,
        decreaseCount
    }, dispatch)
)

const Demo = connect(demoMapStateToProps, demoMapDispatchToProps)
(({ msg, ...props }) => {
    
    // state
    const { counter } = props;
    // actions
    const { increaseCount, decreaseCount } = props;

    return (
        <div style={{textAlign: 'center'}}>
            <button onClick={decreaseCount}>-</button>
            <p>Hello, {msg} {counter}</p>
            <button onClick={increaseCount}>+</button>
        </div>
    );
});

const store = createStore(demoReducer);

const app = document.getElementById('app');
ReactDOM.render(
    <Provider store={store}>
        <Demo msg="Template React-Redux" />
    </Provider>
    , app);