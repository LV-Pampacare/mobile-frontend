import { View, Text, StyleSheet, Dimensions, TextInput, Pressable, ImageBackground } from "react-native"



const Form1 = ({ navigation }) => {

    return (
        <View style={styles.container}>

            <View style={{ flexDirection: 'column', top: 0 }}>
                <ImageBackground source={require('../../../../assets/user.png')}
                    style={[styles.image, { bottom: 250 }]}
                >
                    <Text style={{ top: 150, textAlign: 'center', fontSize: 20, color: 'darkgreen', fontWeight: 'bold' }}> Proprietário </Text>
                </ImageBackground>
            </View>



            <View style={{ bottom: 100, alignItems: 'center' }}>
                <TextInput placeholder="Nome do Proprietário" style={{ width: Dimensions.get('screen').width * 0.7, borderBottomWidth: 1, borderRadius: 8, textAlign: 'left' }} />
                <TextInput placeholder="Cartão SUS" style={{ width: Dimensions.get('screen').width * 0.7, borderBottomWidth: 1, marginTop: 40, borderRadius: 8, textAlign: 'left' }} />

            </View>

            <View style={[{ flexDirection: 'row', alignSelf: 'center' }]}>
                <Pressable style={styles.button} onPress={() => { navigation.push('Form2') }}>
                    <Text style={styles.textButton}> {'>'} </Text>
                </Pressable>
            </View>


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
        width: 135,
        height: 135,
        alignSelf: 'center'
    },
    buttonContainer: {
        alignSelf: 'flex-end',
        right: 100
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        elevation: 3,
        width: 50,
        height: 50,
        backgroundColor: 'white',
    },
    textButton: {
        color: 'darkgreen'
    },
    textInput: {
        width: Dimensions.get('screen').width * 0.7,
        borderBottomWidth: 1,
        marginTop: 40,
        borderRadius: 8,
        textAlign: 'center'
    }
})

export { Form1 }
