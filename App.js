import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoadingScreen from "./pages/loadingscreen/LoadingScreen";
import Login from "./pages/login/Login";
import Registration from "./pages/registration/Registration";
import Registration1 from "./pages/registration/step1/Registration1";
import Registration2 from "./pages/registration/step2/Registration2";
import Registration3 from "./pages/registration/step3/Registration3";
import Registration4 from "./pages/registration/step4/Registration4";
import Application from "./pages/home/application/Application";
import Profile from "./pages/profile/Profile";
import EditProfile from "./pages/profile/editProfile/EditProfile";
import Home from "./pages/home/Home";
import Notification from "./pages/notification/Notification";
import InitialInterview from "./pages/notification/initialInterview/InitialInterview";
import FinalInterview from "./pages/notification/finalInterview/FinalInterview";
import Message from "./pages/notification/message/Message";
import MainTabNavigator from "./pages/home/mainTab/MainTabNavigator";
import RegistrationSteps from "./pages/registration/registrationSteps/RegistrationSteps";
import Test from "./pages/test/Test";
import InitialFeedback from "./pages/notification/initialFeedback/InitialFeedback";
import FinalFeedback from "./pages/notification/finalFeedback/FinalFeedback";
import Portfolio from "./pages/profile/portfolio/Portfolio";
import OpenImage from "./pages/profile/viewImage/OpenImage";
import EditPortfolio from "./pages/profile/editPortfolio/EditPortfolio";
import EditSkills from "./pages/profile/editSkills/EditSkills";

const Stack = createNativeStackNavigator();
// const user = false;

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="MainTabs" component={MainTabNavigator} /> */}
        <Stack.Group>
          {/* <Stack.Screen name="LoadingScreen" component={LoadingScreen} /> */}
          {/* <Stack.Screen name="Login" component={Login} /> */}
          {/* <Stack.Screen name="Registration" component={Registration} /> */}
          {/* <Stack.Screen
            name="RegistrationSteps"
            component={RegistrationSteps}
          ></Stack.Screen> */}
          {/* <Stack.Screen name="Registration3" component={Registration3} /> */}
          {/* <Stack.Screen name="Registration4" component={Registration4} /> */}
          <Stack.Screen name="Home" component={Home} />
          {/* <Stack.Screen name="Application" component={Application} /> */}
          {/* <Stack.Screen name="Notification" component={Notification} /> */}
          {/* <Stack.Screen name="Message" component={Message} /> */}
          {/* <Stack.Screen name="InitialInterview" component={InitialInterview} /> */}
          {/* <Stack.Screen name="FinalInterview" component={FinalInterview} /> */}
          {/* <Stack.Screen name="InitialFeedback" component={InitialFeedback} /> */}
          {/* <Stack.Screen name="FinalFeedback" component={FinalFeedback} /> */}
          {/* <Stack.Screen name="Profile" component={Profile} /> */}
          {/* <Stack.Screen name="EditProfile" component={EditProfile} /> */}
          {/* <Stack.Screen name="Portfolio" component={Portfolio} /> */}
          {/* <Stack.Screen name="OpenImage" component={OpenImage} /> */}
          {/* <Stack.Screen name="EditPortfolio" component={EditPortfolio} /> */}
          {/* <Stack.Screen name="EditSkills" component={EditSkills} /> */}
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
