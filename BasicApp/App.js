// // import React, { useEffect } from "react";
// // import { View, Text, Button } from "react-native";
// // import { NavigationContainer } from "@react-navigation/native";
// // import { createDrawerNavigator } from "@react-navigation/drawer";
// // import { createStackNavigator } from "@react-navigation/stack";
// // import AsyncStorage from "@react-native-async-storage/async-storage";
// // // Locally imported
// // import HomeScreen from "./app/screens/HomeScreen";
// // import DetailsScreen from "./app/screens/DetailsScreen";
// // import SettingsScreen from "./app/screens/SettingsScreen";
// // import { DrawerContent } from "./app/screens/DrawerContent";
// // import OnboardingScreen from "./app/screens/OnBoardingScreen";
// // import LoginScreen from "./app/screens/LoginScreen";
// // // Locally imported

// // //Navigators
// // const Drawer = createDrawerNavigator();
// // //Navigators
// // const AppStack = createStackNavigator();

// // export default function App() {
// //   const [IsFirstLaunch, setIsFirstLaunch] = React.useState(null);
// //   useEffect(() => {
// //     AsyncStorage.getItem("alreadyLaunched").then((value) => {
// //       if (value == null) {
// //         AsyncStorage.setItem("alreadyLaunched", "true");
// //         setIsFirstLaunch(true);
// //       } else {
// //         setIsFirstLaunch(false);
// //       }
// //     });
// //   },[]);
// //   if (IsFirstLaunch == null) {
// //     return null;
// //   } else if (IsFirstLaunch == true) {
// //     return (
// //       <NavigationContainer>
// //         <AppStack.Navigator screenOptions={{ headerShown: false }}>
// //           <AppStack.Screen name="Onboarding" component={OnboardingScreen} />
// //           <AppStack.Screen name="Login" component={LoginScreen} />
// //         </AppStack.Navigator>
// //         {/* <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/> 
// //       } initialRouteName="Home">
// //         <Drawer.Screen name="Home" component={HomeScreen} />
// //         <Drawer.Screen name="Details" component={DetailsScreen} />
// //         <Drawer.Screen name="Settings" component={SettingsScreen} />
// //       </Drawer.Navigator> */}
// //       </NavigationContainer>
// //     );
// //   } else {
// //     return <LoginScreen />;
// //   }
// // }
// import React, { useEffect } from "react";
// import { View, Text, Button } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import { createDrawerNavigator } from "@react-navigation/drawer";
// import { createStackNavigator } from "@react-navigation/stack";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// // Locally imported
// import HomeScreen from "./app/screens/HomeScreen";
// import DetailsScreen from "./app/screens/DetailsScreen";
// import SettingsScreen from "./app/screens/SettingsScreen";
// import { DrawerContent } from "./app/screens/DrawerContent";
// import OnboardingScreen from "./app/screens/OnBoardingScreen";
// import LoginScreen from "./app/screens/LoginScreen";
// // Locally imported

// //Navigators
// const Drawer = createDrawerNavigator();
// //Navigators
// const AppStack = createStackNavigator();

// export default function App() {
//   // const [IsFirstLaunch, setIsFirstLaunch] = React.useState(null);
//   // useEffect(() => {
//   //   AsyncStorage.getItem("alreadyLaunched").then((value) => {
//   //     if (value == null) {
//   //       AsyncStorage.setItem("alreadyLaunched", "true");
//   //       setIsFirstLaunch(true);
//   //     } else {
//   //       setIsFirstLaunch(false);
//   //     }
//   //   });
//   // },[]);
//   // if (IsFirstLaunch == null) {
//   //   return null;
//   // } else if (IsFirstLaunch == true) {
//   //   return (
//   //     <NavigationContainer>
//   //       <AppStack.Navigator screenOptions={{ headerShown: false }}>
//   //         <AppStack.Screen name="Onboarding" component={OnboardingScreen} />
//   //         <AppStack.Screen name="Login" component={LoginScreen} />
//   //       </AppStack.Navigator>
//   //       {/* <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/> 
//   //     } initialRouteName="Home">
//   //       <Drawer.Screen name="Home" component={HomeScreen} />
//   //       <Drawer.Screen name="Details" component={DetailsScreen} />
//   //       <Drawer.Screen name="Settings" component={SettingsScreen} />
//   //     </Drawer.Navigator> */}
//   //     </NavigationContainer>
//   //   );
//   // } else {
//   //   return <LoginScreen />;
//   // }

// }

import React from "react";
import Providers from "./app/navigation";

const App= () => {
  return <Providers/>
}

export default App;