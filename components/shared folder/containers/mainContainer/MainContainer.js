import { ScrollView, View, Image } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { styles } from "../mainContainer/styles";
import { useEffect } from "react";
import useTheme from "../../../../hook/useTheme";
import { useFonts } from "expo-font";

const MainContainer = ({
  isDark,
  isCentered,
  hasLogo,
  hasFooter,
  scrollable,
  children,
}) => {
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
    "Inter-Regular": require("../../../../assets/fonts/Inter/Inter-Regular.ttf"),
    "Inter-Bold": require("../../../../assets/fonts/Inter/Inter-Bold.ttf"),
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

  const logoFooter = {
    height: 55,
    paddingTop: 0,
    paddingBottom: 10,
  };
  return (
    <View
      style={[theme.bgColor, styles.container, isCentered && styles.centered]}
    >
      {scrollable || scrollable == null ? (
        <ScrollView
          bounces={false}
          alwaysBounceVertical={false}
          style={styles.scrollContainer}
        >
          {hasLogo || hasLogo == null ? (
            <View style={styles.logoContainer}>
              <Image
                style={styles.logo}
                source={isDark ? LogoLight : LogoDark}
              />
            </View>
          ) : null}
          {children}
          {hasFooter && (
            <View style={styles.logoContainerFooter}>
              <Image
                style={[styles.logo, logoFooter]}
                source={isDark ? LogoLight : LogoDark}
              />
            </View>
          )}
        </ScrollView>
      ) : (
        <View style={styles.scrollContainer}>
          {hasLogo || hasLogo == null ? (
            <View style={styles.logoContainer}>
              <Image
                style={styles.logo}
                source={isDark ? LogoLight : LogoDark}
              />
            </View>
          ) : null}
          {children}
          {hasFooter && (
            <View style={styles.logoContainerFooter}>
              <Image
                style={[styles.logo, logoFooter]}
                source={isDark ? LogoLight : LogoDark}
              />
            </View>
          )}
        </View>
      )}
    </View>
  );
};
export default MainContainer;
