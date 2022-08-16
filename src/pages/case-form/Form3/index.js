import { useEffect, useState } from "react"
import { View, Text, StyleSheet, Dimensions, Pressable, ImageBackground } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import { TextInput } from 'react-native-paper'
import { getCachorros } from "../Form2"


const Form3 = ({ navigation }) => {
    const [rua, setRua] = useState('')
    const [numeroCasa, setNumeroCasa] = useState('')
    const [complemento, setComplemento] = useState('')
    const [bairro, setBairro] = useState('')
    const [area, setArea] = useState('')
    const [latitude, setLatitude] = useState('')
    const [longitude, setLongitude] = useState('')

    const [field1, setField1] = useState(false);
    const [field2, setField2] = useState(false);

    useEffect(() => {
        console.log(getCachorros())
    }, [])



    const verify = () => {
        if (rua == '') {
            setField1(true)
        } else {
            navigation.push('Form4')
        }
    }




    return (
        <ScrollView contentContainerStyle={styles.container}>

            <View style={{ flexDirection: 'column', top: 100 }}>
                <ImageBackground source={require('../../../../assets/dog.png')}
                    style={[styles.image, { bottom: 200 }]}>
                    <Text style={{ top: 150, textAlign: 'center', fontSize: 20, color: 'darkgreen', fontFamily:'QuickSandBold' }}> Cachorro </Text>
                </ImageBackground>
            </View>



            <View style={{ bottom: 30, alignItems: 'center' }}>
                <TextInput label="Longitude" style={styles.textInput} activeUnderlineColor="green" value={longitude} onChangeText={setLongitude} />
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

export { Form3 }
