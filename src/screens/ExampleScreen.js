import React, { useState, useEffect } from 'react'
import { Button, View, Text } from 'react-native'

// class ExampleScreen extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         count: 0
//       };
//     }

//     componentDidMount() {
//       console.log(`componentDidMount: You clicked ${this.state.count} times `);
//     }

//     componentDidUpdate() {
//         console.log(`componentDidUpdate: You clicked ${this.state.count} times`);
//     }

//     render() {
//       return (
//         <View>
//           <Text>You clicked {this.state.count} times</Text>
//           <Button 
//           title='Click me'
//           onPress={() => this.setState({ count: this.state.count + 1 })}>
//           </Button>
//         </View>
//       );
//     }
// }

function ExampleScreen() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(`You clicked ${count} times `);
    });

    return (
        <View>
            <Text>You clicked {count} times</Text>
            <Button
                title='Click me'
                onPress={() => setCount(count + 1)}>
            </Button>
        </View>
    );
}

export default ExampleScreen;