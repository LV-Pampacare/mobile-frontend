import { View,Text, StyleSheet, Dimensions } from "react-native"



const Form1 = ({navigation}) => {

    return (
        <View style={styles.container}>
            <Text style={styles.textButton}> FORMULÁRIO 1 </Text>
        </View>
    )


}


const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height,
        justifyContent: 'center',
    },
    image: {
        width: 250,
        height: 250,
        alignSelf: 'center'
    },
    buttonContainer: {
        width: '50%',
        alignSelf: 'center',
        bottom: 100
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 12,
        elevation: 3,
        backgroundColor: 'white',
    },
    textButton: {
        color: 'darkgreen'
    }
})

export {Form1}
