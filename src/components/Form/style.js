import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    formContext: {
        flex: 1,
        marginTop: 10,
        backgroundColor: "#fff",
        alignItems: "center",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingTop: 20,
    },
    form: {
        width: "100%",
        height: "auto",
        paddingTop: 20,
    },
    formLabel:{
        color: "#000000",
        fontSize: 18,
        paddingLeft: 20,
    },
    input: {
        width: "90%",
        borderRadius: 20,
        backgroundColor: "#f6f6f6",
        height: 50,
        margin: 12,
        paddingLeft: 20,
    },
    buttonCalculator: {
        backgroundColor: "#ff0043",
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        width: "90%",
        paddingTop: 14,
        paddingBottom: 14,
        marginLeft: 12,
        marginTop: 30,
    },
    textButtonCalculator: {
        fontSize: 20,
        color: "#fff"
    },
    errorMessage: {
        fontSize: 12,
        color: 'red',
        fontWeight: 'bold',
        paddingLeft: 20,
    }
});

export default styles;