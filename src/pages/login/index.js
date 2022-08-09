import { View, Text, StyleSheet, Dimensions, Image, Pressable, ImageBackground } from "react-native"



const LoginScreen = ({ navigation }) => {

    return (
        <View style={styles.container}>

            <View style={{ flexDirection: 'column' }}>
                <ImageBackground source={require('../../../assets/paw.png')}
                    style={[styles.image, { bottom: 200 }]}

                >
                    <Text style={{top:270, textAlign:'center', fontSize:20, color:'darkgreen', fontWeight:'bold'}}> PAMPACARE - LVC </Text>
                </ImageBackground>
            </View>


            <View style={styles.buttonContainer}>
                <Pressable style={styles.button} onPress={() => { navigation.push('Form1') }}>
                    <Text style={styles.textButton}>Registrar Caso</Text>
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


export { LoginScreen }