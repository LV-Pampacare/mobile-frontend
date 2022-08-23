import { useState } from "react"
import { View, Text, StyleSheet, Dimensions, Pressable, ImageBackground } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import { TextInput } from 'react-native-paper'
import { getProprietario } from "../Form1"
import { Endereco } from './data/Endereco'

let cachorros = 0;

export const setCachorros = (num) => {
    cachorros = num;
}

export const getCachorros = () => {
    return cachorros;
}

let endereco

export const setEndereco = (end) => {
    endereco = end
}

export const getEndereco = () => {
    return endereco
}

const Form2 = ({ navigation }) => {
    const [rua, setRua] = useState('')
    const [numeroCasa, setNumeroCasa] = useState('')
    const [complemento, setComplemento] = useState('')
    const [bairro, setBairro] = useState('')
    const [area, setArea] = useState('')
    const [latitude, setLatitude] = useState('')
    const [longitude, setLongitude] = useState('')
    const [numeroDeCachorros, setNumeroDeCachorros] = useState('');

    const [field1, setField1] = useState(false);
    const [field2, setField2] = useState(false);


    const createAddress = () => {
        const address = new Endereco(
            rua,
            complemento,
            bairro,
            area,
            latitude,
            longitude,
        )
        return address;
    }

    const verify = () => {
        if (rua == '') {
            setField1(true)
        } else {
            setEndereco(createAddress())
            setCachorros(Number(numeroDeCachorros));
            navigation.push('Form3')
        }
    }




    return (
        <ScrollView contentContainerStyle={styles.container}>

            <View style={{ flexDirection: 'column', top: 100 }}>
                <ImageBackground source={require('../../../../assets/house.png')}
                    style={[styles.image, { bottom: 200 }]}

                >
                    <Text style={{ top: 150, textAlign: 'center', fontSize: 20, color: 'darkgreen', fontFamily: 'QuickSandBold' }}> Endereço </Text>
                </ImageBackground>
            </View>



            <View style={{ bottom: 30, alignItems: 'center' }}>
                <TextInput label="Endereço" style={styles.textInput} activeUnderlineColor="green" value={rua} onChangeText={setRua} error={field1} />
                <TextInput label="Complemento" style={styles.textInput} activeUnderlineColor="green" value={complemento} onChangeText={setComplemento} />
                <TextInput label="Bairro" style={styles.textInput} activeUnderlineColor="green" value={bairro} onChangeText={setBairro} />
                <TextInput label="Area" style={styles.textInput} activeUnderlineColor="green" value={area} onChangeText={setArea} />
                <TextInput label="Latitude" style={styles.textInput} activeUnderlineColor="green" value={latitude} onChangeText={setLatitude} keyboardType='numeric' />
                <TextInput label="Longitude" style={styles.textInput} activeUnderlineColor="green" value={longitude} onChangeText={setLongitude} keyboardType='numeric' />
                <TextInput label="Número de Cachorros" style={styles.textInput} activeUnderlineColor="green" value={numeroDeCachorros} onChangeText={setNumeroDeCachorros} keyboardType='numeric' />

            </View>

            <View style={[{ flexDirection: 'row', alignSelf: 'center', top: 40 }]}>
                <Pressable style={[styles.button, { marginRight: 100, alignSelf: 'flex-end' }]} onPress={() => { navigation.pop() }}>
                    <Text style={styles.textButton}> {'<'} </Text>
                </Pressable>

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
        height: 55,
        marginTop: 15,
        fontFamily: 'QuickSand',
    }
})

export { Form2 }
