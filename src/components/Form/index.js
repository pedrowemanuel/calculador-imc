import React, { useState } from 'react';
import { TextInput, View, Text, Button, StyleSheet } from 'react-native';
import ResultImc from './ResultImc';
import styles from './style';

export default function Form() {

    const [height, setHeight] = useState(null);
    const [weight, setWeight] = useState(null);
    const [messageImc, setMessageImc] = useState("preencha o peso e altura");
    const [imc, setImc] = useState(null);
    const [textButton, setTextButton] = useState("Calcular");

    function imcCalculator() {
        return setImc((weight/(height * height)).toFixed(2));
    }

    function validatorImc() {
        if (weight != null && height != null) {
            imcCalculator();
            setHeight(null);
            setWeight(null);
            setMessageImc("Seu imc é igual:");
            setTextButton("Calcular Novamente");
            return
        }

        setImc(null);
        setTextButton("Calcular");
        setMessageImc("preencha o peso e altura")
    }

    return (
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel} >Altura</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setHeight}
                    value={height}
                    placeholder="Exemplo. 1.69"
                    keyboardType="numeric"
                />
                <Text style={styles.formLabel} >Peso</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setWeight}
                    value={weight}
                    placeholder="Exemplo. 70.759"
                    keyboardType="numeric"
                />
                <Button
                  onPress={() => validatorImc()}
                  title={textButton}
                />
            </View>
            <ResultImc
                messageResultImc={messageImc}
                resultImc={imc}
            />
        </View>
    );
}

// const styles = StyleSheet.create({
//   main: {
//     flex: 2,
//     backgroundColor: 'blue',
//     alignItems: 'center',
//     width: '100%',
//     marginTop: 300,
//     padding: 30,
//     borderTopLeftRadius: 50,
//     borderTopRightRadius: 50,
//   },
//   input: {
//     backgroundColor: '#fff',
//     height: 40,
//     padding: 5,
//     marginBottom: 10,
//     borderRadius: 5,
//   },
//   label: {
//     fontSize: 16,
//     color: "#fff",
//     fontWeight: '700',
//   },
// });