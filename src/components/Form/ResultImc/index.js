import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ResultImc(props) {
    return (
        <View style={styles.resultImc}>
            <Text style={styles.label}>{props.messageResultImc}</Text>
            <Text style={styles.text}>{props.resultImc}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    resultImc: {
        marginTop: 50,
        backgroundColor: "#fff",
        borderRadius: 5,
        height: 50,
        padding: 5,
    },
    label: {
        fontWeight: '700',
    },
});