// import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
// import React from "react";

// // pages
// import Header from "../components/Header";
// import ContentDashboard from "../components/ContentDashboard";
// import SliderImage from "../components/SliderImage";
// import ShowAll from "../components/ShowAll";
// import Card from "../components/Card";
// import Container from "../components/Container";
// import Button from "../components/Button";
// import SideBar from "../components/sideBar";

// const Home = () => {
//   return (
//     <View>
//       {/* <Header /> */}
//       <SideBar />

//       <ScrollView className="mt-24">
//         <SliderImage />

//         <ShowAll />

//         <View>
//           <Container>
//             <View className="flex justify-center items-center flex-row gap-5 py-4 flex-wrap">
//               <View
//                 className="w-36 bg-white rounded-lg"
//                 style={styles.boxShadow}
//               >
//                 <View className="w-full h-20">
//                   <Image
//                     source={require("../img/logo-jamu.png")}
//                     className="w-full h-full"
//                     style={styles.objectImage}
//                   />
//                 </View>

//                 <View className="p-2 pb-16">
//                   <Text className="text-lg font-bold">Product 1</Text>
//                   <Text>loremsandjansdoaskdjaksodiasjdaksdkaasdasdasdasd</Text>
//                 </View>

//                 <Button />
//               </View>

//               <View
//                 className="w-36 bg-white rounded-lg"
//                 style={styles.boxShadow}
//               >
//                 <View className="w-full h-20">
//                   <Image
//                     source={require("../img/logo-jamu.png")}
//                     className="w-full h-full"
//                     style={styles.objectImage}
//                   />
//                 </View>

//                 <View className="p-2 pb-16">
//                   <Text className="text-lg font-bold">Product 1</Text>
//                   <Text>loremsandjansdoaskdjaksodiasjdaksdkaasdasdasdasd</Text>
//                 </View>

//                 <Button />
//               </View>

//               {/* <View className="w-36 bg-white" style={styles.boxShadow}>
//                 <View className="w-36 h-36 flex-1 justify-center items-center">
//                   <Image
//                     source={require("../img/logo-jamu.png")}
//                     className="w-full h-full"
//                     style={styles.objectImage}
//                   />
//                 </View>

//                 <View>
//                   <Text>Product 1</Text>
//                   <Text>loremsandjansdoaskdjaksodiasjdaksdkaasdasdasdasd</Text>
//                 </View>
//               </View> */}

//               {/* <View className="w-36">
//                 <View className="w-36 h-36" style={styles.boxShadow}>
//                   <Image
//                     source={require("../img/logo-jamu.png")}
//                     className="w-full h-full"
//                     style={styles.objectImage}
//                   />
//                 </View>

//                 <View>
//                   <Text>Product 1</Text>
//                   <Text>loremsandjansdoaskdjaksodiasjdaksdkaasdasdasdasd</Text>
//                 </View>
//               </View> */}

//               {/* <Card className="basis-1/4" />
//           <Card className="basis-1/4" />
//           <Card className="basis-1/2 bg-black!important" /> */}
//               {/* <Card /> */}
//             </View>
//           </Container>
//         </View>
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   boxShadow: {
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 8,
//     },
//     shadowOpacity: 0.44,
//     shadowRadius: 10.32,
//     elevation: 10,
//   },

//   objectImage: {
//     resizeMode: "contain",
//   },
// });

// export default Home;

import { View, Text } from "react-native";
import React, { useCallback, useRef, useState } from "react";
import { Searchbar, shadow } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialIcons";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetView,
} from "@gorhom/bottom-sheet";

const Home = () => {
  const bottomSheetModalRef = useRef(null);
  // const [isOpen, setIsOpen] = useState(true);
  const snapPoints = ["40%"];

  function handlePresentModal() {
    bottomSheetModalRef.current?.present();
  }

  return (
    <BottomSheetModalProvider>
      <View className="h-screen">
        <View className="my-3 flex flex-row justify-between items-center">
          <Searchbar
            className="text-white!important text-sm w-10/12 relative h-9"
            inputStyle={{ textDecorationLine: "none", shadow: "none" }}
            icon={({ size, color }) => (
              <View style={{ padding: 0, margin: 0, position: "relative" }}>
                <Icon name="search" size={24} color="#E45F2B" />
              </View>
            )}
          />

          <Icon
            name="sort"
            size={32}
            color="#E45F2B"
            onPress={handlePresentModal}
          />
        </View>

        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={0}
          snapPoints={snapPoints}
          // enablePanDownClose={true}
          // onClose={() => setIsOpen(false)}
        >
          <View>
            <Text>Hello</Text>
          </View>
        </BottomSheetModal>
      </View>
    </BottomSheetModalProvider>
  );
};

export default Home;
