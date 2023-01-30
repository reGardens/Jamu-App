// import { View, Text, StatusBar, SafeAreaView, ScrollView } from "react-native";
// import React, { useCallback, useEffect, useState } from "react";
// import * as SplashScreen from "expo-splash-screen";

// const App = () => {
//   const [appIsReady, setAppIsReady] = useState(false);

//   useEffect(() => {
//     async function prepare() {
//       try {
//         await SplashScreen.preventAutoHideAsync();
//         await new Promise((resolve) => setTimeout(resolve, 3000));
//       } catch (e) {
//         console.warn(e);
//       } finally {
//         setAppIsReady(true);
//       }
//     }

//     prepare();
//   }, []);

//   const onLayoutRootView = useCallback(async () => {
//     if (appIsReady) {
//       await SplashScreen.hideAsync();
//     }
//   }, [appIsReady]);

//   if (!appIsReady) {
//     return null;
//   }

//   return (
//     <SafeAreaView className="" onLayout={onLayoutRootView}>
//       <View>
//         <Home />
//         <StatusBar style="auto" />
//       </View>
//     </SafeAreaView>
//   );
// };

// export default App;

// Libraries
import { View, Text, StatusBar, StyleSheet } from "react-native";
import React from "react";
import { useFonts } from "expo-font";

// Pages
import Home from "./src/screens/Home";

const App = () => {
  const [loaded] = useFonts({
    Futura: require("./assets/fonts/futura_medium_bt.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <View className="px-4 bg-[#FDF4F3]">
      <Text style={styles.text} className="opacity-50">
        Jamu-App
      </Text>
      <Home />
      <StatusBar barStyle="dark-content" backgroundColor="#FDF4F3" />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "Futura",
  },
});

export default App;
