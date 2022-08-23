import { View, Text, StyleSheet, Dimensions, Image, Pressable, ImageBackground } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome';
import { getListaCachorro } from "../case-form/Form3";



const HomeScreen = ({ navigation }) => {

    return (
        <View style={styles.container}>

            <View style={{ flexDirection: 'column' }}>
                <ImageBackground source={require('../../../assets/paw.png')}
                    style={[styles.image, { bottom: 200 }]}

                >
                    <Text style={{ top: 270, textAlign: 'center', fontSize: 20, color: 'darkgreen', fontFamily: 'QuickSandBold' }}> PAMPACARE - LVC </Text>
                </ImageBackground>
            </View>


            <View style={styles.buttonContainer}>
                <Pressable style={styles.button} onPress={() => { navigation.push('Form1') }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <Icon name='file' style={{ right: '100%', color: 'black', top: 1 }} />
                        <Text style={[styles.textButton, {}]}>Registrar Caso</Text>
                    </View>
                </Pressable>

                <Pressable style={[styles.button, { marginTop: 20 }]} onPress={() => { navigation.push('List') }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <Icon name='list' style={{ right: '100%', color: 'black', top: 1 }} />
                        <Text style={styles.textButton}>Listar Caso</Text>
                    </View>
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
        color: 'darkgreen',
    }
})


export { HomeScreen }