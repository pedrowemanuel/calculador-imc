import React from 'react';
import { View, Text } from 'react-native';
import  styles from './style';

export default function Title() {
    return (
        <View style={styles.boxTitle}>
            <Text style={styles.textTitle}>CALCULADORA IMC</Text>
        </View>
    );
}

// const styles = StyleSheet.create({
//     title: {
//       position: 'absolute',
//       top: 200
//     },
//     text: {
//         fontSize: 30,
//         fontWeight: '700',
//         color: 'blue'
//     }
// });