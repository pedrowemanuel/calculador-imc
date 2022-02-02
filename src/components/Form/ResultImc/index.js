import React from 'react';
import { View, Text } from 'react-native';
import styles from './style';

export default function ResultImc(props) {
    return (
        <View style={styles.resultImc}>
            <Text style={styles.information}>{props.messageResultImc}</Text>
            <Text style={styles.numberImc}>{props.resultImc}</Text>
        </View>
    );
}

// const styles = StyleSheet.create({
//     resultImc: {
//         marginTop: 50,
//         backgroundColor: "#fff",
//         borderRadius: 5,
//         height: 50,
//         padding: 5,
//     },
//     label: {
//         fontWeight: '700',
//     },
// });