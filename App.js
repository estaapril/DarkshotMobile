import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./pages/login/Login";
import Registration from "./pages/registration/Registration";
import Registration1 from "./pages/registration/step1/Registration1";
import Registration2 from "./pages/registration/step2/Registration2";
import Application from "./pages/home/application/Application";
import Profile from "./pages/profile/Profile";
import Home from "./pages/home/Home";
import Notification from "./pages/notification/Notification";
import Interview from "./pages/notification/interview/Interview";
import Message from "./pages/notification/message/Message";
import MainTabNavigator from "./pages/home/mainTab/MainTabNavigator";
import RegistrationSteps from "./pages/registration/registrationSteps/RegistrationSteps";
import Test from "./pages/test/Test";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="MainTabs" component={MainTabNavigator} /> */}
        <Stack.Group>
          <Stack.Screen name="Test" component={Test} />
          {/* <Stack.Screen name="Login" component={Login} /> */}
          {/* <Stack.Screen name="Registration" component={Registration} /> */}
          {/* <Stack.Screen
            name="RegistrationSteps"
            component={RegistrationSteps}
          ></Stack.Screen> */}
          {/* <Stack.Screen name="Home" component={Home} /> */}
          {/* <Stack.Screen name="Application" component={Application} /> */}
          {/* <Stack.Screen name="Profile" component={Profile} /> */}
          {/* <Stack.Screen name="Notification" component={Notification} /> */}
          {/* <Stack.Screen name="Interview" component={Interview} /> */}
          {/* <Stack.Screen name="Message" component={Message} /> */}
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
