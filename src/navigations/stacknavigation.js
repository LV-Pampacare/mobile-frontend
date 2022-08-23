import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from '../pages/home/'
import { Form1 } from "../pages/case-form/Form1/";
import { Form2 } from "../pages/case-form/Form2/";
import { Form3 } from "../pages/case-form/Form3/";
import { ListScreen } from '../pages/case-list/index'
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet } from "react-native";

const Stack = createStackNavigator()

export default props => {
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Form1" component={Form1} options={{ title: 'Formulário' }} />
            <Stack.Screen name="Form2" component={Form2} options={{ headerShown: false }} />
            <Stack.Screen name="List" component={ListScreen} options={{
                headerShown: true, title: 'Lista de Casos',
            }} />
            <Stack.Screen name="Form3" component={Form3} options={{
                headerShown: false
            }} />
        </Stack.Navigator>
    )
}

// export function Form2Navigation() {
//     return (
//         <Stack.Navigator screenOptions={{ headerShown: false }}>
//             <Stack.Screen name="form2" component={formscreen2} />
//         </Stack.Navigator>
//     )
// }

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    icon: {
        paddingLeft: 10
    },
    iconContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        width: 120
    }
});