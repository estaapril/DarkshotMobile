import { useEffect, useState } from "react";
// import SplashScreen from "react-native-splash-screen";
import * as Font from "expo-font";
import { SplashScreen } from "react-native";

const useFonts = (fonts) => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      try {
        await Font.loadAsync(fonts);
        setFontsLoaded(true);
        if (SplashScreen) {
          SplashScreen.hide();
        }
      } catch (error) {
        console.error("", error);
      }
    };

    loadFonts();

    return () => {};
  }, [fonts]);
  return fontsLoaded;
};

export default useFonts;
