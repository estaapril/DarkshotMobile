import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import Login from "./pages/login/Login";
// import Registration from "./pages/registration/Registration";
// import Registration1 from "./pages/registration/step 1/Registration1";
import Registration2 from "./pages/registration/step 2/Registration2";
// import Application from "./pages/home/application/Application";
// import Profile from "./pages/profile/Profile";
// import Home from "./pages/home/Home";
// import Notification from "./pages/notification/Notification";
// import Interview from "./pages/notification/interview/Interview";
// import Message from "./pages/notification/message/Message";
import useTheme from "./hook/useTheme";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeScreen() {
  const isDark = true;
  const { theme } = useTheme(isDark);
  return (
    <Tab.Navigator initialRouteName="HomeScreen" lazy={true}>
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          title: "",
          tabBarIcon: makeIconRender("bell"),
          headerShown: false,
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "gray",
          tabBarInactiveBackgroundColor: "#333333",
          tabBarActiveBackgroundColor: "#333333",
        }}
        TabBarStyle
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: "",
          tabBarIcon: makeIconRender("home"),
          headerShown: false,
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "gray",
          tabBarInactiveBackgroundColor: "#333333",
          tabBarActiveBackgroundColor: "#333333",
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          title: "",
          tabBarIcon: makeIconRender("account"),
          headerShown: false,
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "gray",
          tabBarInactiveBackgroundColor: "#333333",
          tabBarActiveBackgroundColor: "#333333",
        }}
      />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group screenOptions={{ headerShown: false }}>
          {/* <Stack.Screen name="Login" component={Login}></Stack.Screen> */}
          {/* <Stack.Screen
            name="Registration"
            component={Registration}
          ></Stack.Screen> */}
          {/* <Stack.Screen
            name="Registration1"
            component={Registration1}
          ></Stack.Screen> */}
          <Stack.Screen
            name="Registration2"
            component={Registration2}
          ></Stack.Screen>
          {/* <Stack.Screen
            name="Application"
            component={Application}
          ></Stack.Screen> */}
          {/* <Stack.Screen name="Profile" component={Profile}></Stack.Screen> */}
          {/* <Stack.Screen name="Home" component={Home}></Stack.Screen> */}
          {/* <Stack.Screen
            name="Notification"
            component={Notification}
          ></Stack.Screen> */}
          {/* <Stack.Screen name="Interview" component={Interview}></Stack.Screen> */}
          {/* <Stack.Screen name="Message" component={Message}></Stack.Screen> */}
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;

function MakeIconRender(name) {
  return ({ color, size }) => (
    <MaterialCommunityIcons name={name} color={color} size={size} />
  );
}
