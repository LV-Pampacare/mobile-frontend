import { View, Text, StyleSheet, Dimensions, TextInput, Pressable, ImageBackground } from "react-native"



const Form2 = ({ navigation }) => {

    return (
        <View style={styles.container}>

            <View style={{ flexDirection: 'column', top: 100 }}>
                <ImageBackground source={require('../../../../assets/house.png')}
                    style={[styles.image, { bottom:200 }]}

                >
                    <Text style={{ top:150,textAlign: 'center', fontSize: 20, color: 'darkgreen', fontWeight: 'bold' }}> Endereço </Text>
                </ImageBackground>
            </View>



            <View style={{ bottom: 30, alignItems: 'center' }}>
                <TextInput placeholder="Endereço" style={styles.textInput} />
                <TextInput placeholder="Complemento" style={styles.textInput} />
                <TextInput placeholder="Bairro" style={styles.textInput} />
                <TextInput placeholder="Area" style={styles.textInput} />
                <TextInput placeholder="Latitude" style={styles.textInput} />
                <TextInput placeholder="Longitude" style={styles.textInput} />

            </View>

            <View style={[{ flexDirection: 'row', alignSelf: 'center', top: 40 }]}>
                <Pressable style={[styles.button, { marginRight: 100, alignSelf: 'flex-end' }]} onPress={() => { navigation.pop() }}>
                    <Text style={styles.textButton}> {'<'} </Text>
                </Pressable>

                <Pressable style={styles.button} onPress={() => { navigation.push('Form3') }}>
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

export { Form2 }
