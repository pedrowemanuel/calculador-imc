import React, { useState } from 'react';
import {
    TextInput,
    View,
    Text,
    TouchableOpacity,
    Keyboard,
    Vibration,
    Pressable
} from 'react-native';
import ResultImc from './ResultImc';
import styles from './style';

export default function Form() {

    const [height, setHeight] = useState(null);
    const [weight, setWeight] = useState(null);
    const [messageImc, setMessageImc] = useState("preencha o peso e altura");
    const [imc, setImc] = useState(null);
    const [textButton, setTextButton] = useState("Calcular");
    const [errorMessage, setErrorMessage] = useState(null);

    function imcCalculator() {
        let heightFormat =  height.replace(",",".");
        let weightFormat = weight.replace(",",".");
        return setImc((weightFormat/(heightFormat * heightFormat)).toFixed(2).replace(".",","));
    }

    function verificationImc() {
        if (imc == null) {
            Vibration.vibrate();
            setErrorMessage("* Campo obrigatório!");
        }
    }

    function validatorImc() {

        Keyboard.dismiss();

        if (weight != null && height != null) {

            imcCalculator();
            setHeight(null);
            setWeight(null);
            setMessageImc("Seu imc é igual:");
            setTextButton("Calcular Novamente");
            setErrorMessage(null);

            return
        }

        verificationImc();
        setImc(null);
        setTextButton("Calcular");
        setMessageImc("preencha o peso e altura");
    }

    return (
        <Pressable
            onPress={Keyboard.dismiss}
            style={styles.formContext}
        >
            <View style={styles.form}>
                <Text style={styles.formLabel} >Altura (metros)</Text>
                <Text style={styles.errorMessage} >{errorMessage}</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setHeight}
                    value={height}
                    placeholder="Exemplo. 1,69"
                    keyboardType="numeric"
                />
                <Text style={styles.formLabel} >Peso (quilos)</Text>
                <Text style={styles.errorMessage} >{errorMessage}</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setWeight}
                    value={weight}
                    placeholder="Exemplo. 70,759"
                    keyboardType="numeric"
                />
                <TouchableOpacity
                  style={styles.buttonCalculator}
                  onPress={() => validatorImc()}
                >
                    <Text style={styles.textButtonCalculator}>{textButton}</Text>
                </TouchableOpacity>
            </View>
            <ResultImc
                messageResultImc={messageImc}
                resultImc={imc}
            />
        </Pressable>
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