import { useEffect, useState } from "react"
import { View, Text, StyleSheet, Dimensions, Pressable, ImageBackground, Keyboard, Alert } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import { TextInput, Switch, Checkbox } from 'react-native-paper'
import { getCachorros, getEndereco } from "../Form2"
import { ModalPopUp } from '../../../components/modal'
import { api } from "../../../service/api"
import { getProprietario } from "../Form1"
import { Cachorro } from './data/Cachorro'
let listaDosCachorros = []

export const getListaCachorro = () => {
    return listaDosCachorros
}

export const addCachorro = (dog) => {
    console.log(dog)
    listaDosCachorros.push(dog)
}


const Form3 = ({ navigation }) => {
    const [dogName, setDogName] = useState('')
    const [isAlive, setIsAlive] = useState(false)
    const [lvc, setLvc] = useState(false)
    const [sintomasCachorro, setSintomasCachorro] = useState([])
    const [isVisible, setIsVisible] = useState(false)
    const [exameVisible, setExameVisible] = useState(false);
    const [dogIndex, setDogIndex] = useState(1);

    const [exameResult, setExameResult] = useState('')
    const [exameName, setExameName] = useState('')

    const [sintomasList, setSintomasList] = useState([]);

    useEffect(() => {
        const fetch = () => {
            api.get('/sintoma/listar').then(res => {
                setSintomasList(res.data)
            }).catch(err => {
                fetch()
            })
        }

        fetch()
    }, [])


    const verify = () => {
        if (
            dogIndex < getCachorros()
        ) {

            const exame = {
                nome: exameName,
                resultado: exameResult
            }
            const cachorro = new Cachorro(dogName, sintomasCachorro, isAlive, exame)
            addCachorro(cachorro)
            setDogIndex(dogIndex + 1)
            setSintomasCachorro([])
            setDogName('')
            setIsAlive(false)
            setLvc(false)
            setExameName('')
            setExameResult('')
        } else {
            Alert.alert('Informações salvas!')
            navigation.navigate('Home')
        }
    }

    const verifyBack = () => {
        const options = [
            { text: "Sair", onPress: () => { navigation.pop() } },
            { text: "Voltar" }
        ];

        Alert.alert(
            "ATENÇÃO",
            "As informações serão perdidas caso você saia.",
            options,
        );
    }

    function sintomaFind(sintoma) {

        if (sintomasCachorro.length > 0) {

            if (sintomasCachorro.find(e => (e.id === sintoma.id))) {
                return true;
            } else {
                return false
            }
        } else {
            false
        }
    }



    return (
        <ScrollView contentContainerStyle={styles.container}>

            <ModalPopUp visible={isVisible}>
                <View style={{ alignSelf: 'center' }}>

                    <Text onPress={() => { setIsVisible(false) }} style={{ textAlign: 'center', marginBottom: 20 }}> FECHAR</Text>

                    <ScrollView>
                        {sintomasList.map((sintoma, index) => {
                            return (
                                <View key={index} style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Checkbox
                                        status={sintomaFind(sintoma) ? 'checked' : 'unchecked'}

                                        onPress={() => {
                                            var cac = sintomasCachorro;
                                            cac.push(sintoma)
                                            setSintomasCachorro(cac)
                                        }}
                                    />
                                    <Text>{sintoma.nome}</Text>
                                </View>
                            )
                        })}
                    </ScrollView>
                </View>

            </ModalPopUp>


            <ModalPopUp visible={exameVisible}>
                <View style={{ alignSelf: 'center' }}>

                    <Text onPress={() => { setExameVisible(false) }} style={{ textAlign: 'center', marginBottom: 20 }}> FECHAR</Text>

                    <TextInput label="Nome do Exame" style={styles.textInput} activeUnderlineColor="green" value={exameName} onChangeText={setExameName} />
                    <TextInput label="Resultado do Exame" style={styles.textInput} activeUnderlineColor="green" value={exameResult} onChangeText={setExameResult} />

                </View>

            </ModalPopUp>

            <View style={{ flexDirection: 'column', top: 90 }}>
                <ImageBackground source={require('../../../../assets/dog.png')}
                    style={[styles.image, { bottom: 250 }]}>
                    <Text style={{ bottom: 20, textAlign: 'center', fontFamily: 'QuickSand' }}> {dogIndex} de {getCachorros()} </Text>
                    <Text style={{ top: 120, textAlign: 'center', fontSize: 20, color: 'darkgreen', fontFamily: 'QuickSandBold' }}> Cachorro </Text>
                </ImageBackground>
            </View>



            <View style={{ bottom: 100, alignItems: 'center' }}>
                <TextInput label="Nome do Cão" style={styles.textInput} activeUnderlineColor="green" value={dogName} onChangeText={setDogName} />

                <TextInput label={'Sintomas'} style={styles.textInput} activeUnderlineColor="green" onFocus={() => { Keyboard.dismiss(); setIsVisible(true) }} />


                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                    <Text>Está vivo?</Text>
                    <Switch value={isAlive} onValueChange={setIsAlive} />
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                    <Text>LVC?</Text>
                    <Switch value={lvc} onValueChange={setLvc} />
                </View>

                <Pressable onPress={() => {
                    setExameVisible(true)
                }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 30, border: 1, backgroundColor: 'lightgrey', padding: 10, borderRadius: 10 }}>
                        <Text>Adicionar Exame</Text>
                    </View></Pressable>

            </View>

            <View style={[{ flexDirection: 'row', alignSelf: 'center', top: 40 }]}>
                <Pressable style={[styles.button, { marginRight: 100, alignSelf: 'flex-end' }]} onPress={() => { verifyBack() }}>
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
