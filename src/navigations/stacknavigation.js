import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { LoginScreen } from '../pages/login'
import { Form1 } from "../pages/case-form/Form1/";
import { Form2 } from "../pages/case-form/Form2/";

const Stack = createStackNavigator()

export default props => {
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}} />
            <Stack.Screen name="Form1" component={Form1} options={{title:'Formulário'}}/>
            <Stack.Screen name="Form2" component={Form2} options={{headerShown:false}}/>
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
