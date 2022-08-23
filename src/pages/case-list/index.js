import { View, Text, StyleSheet, Dimensions, Image, Pressable, ImageBackground, ScrollView } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome';
import { getListaCachorro } from "../case-form/Form3";

const list = ['Gustavo', 'Thiago', 'Rafael']

const ListScreen = ({ navigation }) => {

    return (
        <ScrollView contentContainerStyle={styles.container}>

            {/* <View style={{ flexDirection: 'column' }}>
                <ImageBackground source={require('../../../assets/paw.png')}
                    style={[styles.image, {}]}

                >
                </ImageBackground>
            </View> */}


            <View style={[{ top: 100, left: 40 }]}>
                <View style={[{ borderWidth: 1, width: Dimensions.get('screen').width*0.8, height: Dimensions.get('screen').height * 0.9}]}>
                    
                </View>
            </View>



        </ScrollView>
    )

}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height,
    },
    image: {
        width: 30,
        height: 30,
        alignSelf: 'flex-start',
        top: 50,
        left: 20
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


export { ListScreen }