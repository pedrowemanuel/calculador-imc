import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    resultImc: {
        flex:1,
        marginTop: 20,
        paddingTop: 60,
        borderRadius: 50,
        alignItems: 'center',
        width: "100%",
    },
    numberImc: {
        fontSize: 48,
        color: "#ff0046",
        fontWeight: "bold"
    },
    information: {
        fontSize: 18,
        color: "#ff0046",
        fontWeight: "bold"
    },
    boxShareButton: {
        width: "100%",
        alignItems: "center",
        marginTop: 10,
    },
    shared: {
        backgroundColor: "#1877f2",
        borderRadius: 30,
        paddingTop: 5,
        paddingBottom: 5,
    },
    sharedText: {
        color: "#fff",
        fontWeight: "bold",
        paddingHorizontal: 30,
    }
});

export default styles;