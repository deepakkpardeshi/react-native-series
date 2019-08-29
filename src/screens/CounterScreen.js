// import React, { useState } from 'react'
// import { Text, View, Button, StyleSheet } from 'react-native'

// const CounterScreen = () => {

//     const [counter, setCounter] = useState(0)

//     return (
//         <View>
//             <Button
//                 title='Increment'
//                 onPress={() => { setCounter(counter + 1) }}
//             ></Button>
//             <Button
//                 title='Decrement'
//                 onPress={() => { setCounter(counter - 1) }}
//             ></Button>
//             <Text>Counter Count {counter}</Text>
//         </View>
//     );
// }

// export default CounterScreen;

// using useReducer hook
import React, { useReducer } from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { ...state, counter: state.counter + action.payload }
        case 'decrement':
            return { ...state, counter: state.counter - action.payload }
        default :
            return state;
    }
}
const CounterScreen = () => {

    const [state, dispatch] = useReducer(reducer, {counter:0} )

    return (
        <View>
            <Button
                title='Increment'
                onPress={() => { dispatch({ type:'increment', payload: 1}) }}
            ></Button>
            <Button
                title='Decrement'
                onPress={() => { dispatch({ type:'decrement', payload: 1}) }}
            ></Button>
            <Text>Counter Count {state.counter}</Text>
        </View>
    );
}

export default CounterScreen;