import { Suspense, useEffect } from "react";
import { useColorScheme } from "react-native";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { router, SplashScreen, Stack } from "expo-router";
import { TamaguiProvider, Text, Theme } from "tamagui";

import { MySafeAreaView } from "../components/MySafeAreaView";
import config from "../tamagui.config";
import { getAuthToken, isTokenActive } from "../utils/AuthUtils";

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const colorScheme = useColorScheme();

  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf")
  });

  useEffect(() => {
    const onAppStart = async () => {
      const isSignedIn = !!(await getAuthToken()) && (await isTokenActive());
      if (loaded) {
        if (isSignedIn) {
          router.replace("/home");
        } else if (!isSignedIn) {
          router.replace("/auth");
        }
        SplashScreen.hideAsync();
      }
    };
    onAppStart();
  }, [loaded]);

  if (!loaded) return null;

  return (
    <TamaguiProvider config={config}>
      <Suspense fallback={<Text>Loading...</Text>}>
        <Theme name={colorScheme}>
          <ThemeProvider
            value={colorScheme === "light" ? DefaultTheme : DarkTheme}
          >
            {/* <MySafeAreaView> */}
            <Stack
              screenOptions={{
                headerShown: false
              }}
            />
            {/* </MySafeAreaView> */}
          </ThemeProvider>
        </Theme>
      </Suspense>
    </TamaguiProvider>
  );
}
