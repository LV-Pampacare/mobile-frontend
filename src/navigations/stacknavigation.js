import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { LoginScreen } from '../pages/login'
import { Form1 } from "../pages/case-form/Form1";

const Stack = createStackNavigator()

export default props => {
    return (
        <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Form1" component={Form1} />
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
