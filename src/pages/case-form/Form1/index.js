import { View, Text, StyleSheet, Dimensions, Pressable, ImageBackground, Keyboard } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import { TextInput } from 'react-native-paper'
import {useState} from 'react'

let proprietario = {}

export const getProprietario = () => {
    return proprietario
}

export const setProprietario = (pro) => {
    proprietario = pro
}

const Form1 = ({ navigation }) => {
    const [nome, setNome] = useState('')
    const [numSus, setNumSus] = useState('')

    const verify = () => {
        var prop = {
            nome: nome,
            numCartaoSus: numSus
        }
        setProprietario(prop)
        navigation.push('Form2')
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>


            <View style={{ flexDirection: 'column', top: 0 }}>
                <ImageBackground source={require('../../../../assets/user.png')}
                    style={[styles.image, { bottom: 250 }]}
                >
                    <Text style={{ top: 150, textAlign: 'center', fontSize: 20, color: 'darkgreen', fontFamily: 'QuickSandBold' }}> Proprietário </Text>
                </ImageBackground>
            </View>



            <View style={{ bottom: 100, alignItems: 'center' }}>
                <TextInput label="Nome do Proprietário" style={styles.textInput}
                    value={nome}
                    onChangeText={setNome}
                    activeUnderlineColor="green"
                />
                <TextInput label="Cartão SUS" style={[styles.textInput, { marginTop: 20 }]}
                    keyboardType="number-pad"
                    value={numSus}
                    onChangeText={setNumSus}
                    activeUnderlineColor="green"
                />

            </View>

            <View style={[{ flexDirection: 'row', alignSelf: 'center' }]}>
                <Pressable style={styles.button} onPress={() => { verify() }}>
                    <Text style={styles.textButton}> {'>'} </Text>
                </Pressable>
            </View>

        </ScrollView>
    )


}


const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height * 1,
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
        width: Dimensions.get('screen').width * 0.6,
        height: 55,
        textAlign: 'left',
        fontFamily: 'QuickSand',
    },

})

export { Form1 }
