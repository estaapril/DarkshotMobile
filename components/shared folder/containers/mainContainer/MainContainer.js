import { ScrollView, View, Image } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { styles } from "../mainContainer/styles";
import { useEffect } from "react";
import useTheme from "../../../../hook/useTheme";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";

const MainContainer = ({ isDark, children }) => {
  const LogoLight = require("../../../../assets/images/darkshot-logo.png");
  const LogoDark = require("../../../../assets/images/darkshot-logo-dark.png");
  const { theme } = useTheme(isDark);
  const [fontsLoaded] = useFonts({
    "Agdasima-Regular": require("../../../../assets/fonts/Agdasima/Agdasima-Regular.ttf"),
    "Agdasima-Bold": require("../../../../assets/fonts/Agdasima/Agdasima-Bold.ttf"),
    "Poppins-Regular": require("../../../../assets/fonts/Poppins/Poppins-Regular.ttf"),
    "Poppins-Medium": require("../../../../assets/fonts/Poppins/Poppins-Medium.ttf"),
    "Poppins-Bold": require("../../../../assets/fonts/Poppins/Poppins-Bold.ttf"),
    "Poppins-SemiBold": require("../../../../assets/fonts/Poppins/Poppins-SemiBold.ttf"),
    "Montserrat-Regular": require("../../../../assets/fonts/Montserrat/static/Montserrat-Regular.ttf"),
    "Montserrat-Bold": require("../../../../assets/fonts/Montserrat/static/Montserrat-Bold.ttf"),
  });

  useEffect(() => {
    const prepare = async () => {
      await SplashScreen.preventAutoHideAsync();
    };
    prepare();
  }, []);

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={[theme.bgColor, styles.container]}>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={isDark ? LogoLight : LogoDark} />
        </View>
        {children}
      </ScrollView>
      <StatusBar
        animated={true}
        backgroundColor={theme.bgColor.backgroundColor}
        translucent={true}
        hidden={true}
      />
    </View>
  );
};
export default MainContainer;
