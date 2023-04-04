import { NavigationContainer } from "@react-navigation/native";
import { useEffect, useState } from "react";
import AuthContext from "./App/auth/context";
import authStorage from "./App/auth/storage";
import OfflineNotice from "./App/components/OfflineNotice";
import AppNavigator from "./App/navigation/AppNavigator";
import AuthNavigator from "./App/navigation/AuthNavigator";
import navigationTheme from "./App/navigation/navigationTheme";
import * as SplashScreen from "expo-splash-screen";
import { navigationRef } from "./App/navigation/rootNavigation";

export default function App() {
  const [user, setUser] = useState();

  const restoreUser = async () => {
    await SplashScreen.preventAutoHideAsync();
    const user = await authStorage.getUser();
    if (user) setUser(user);
    await SplashScreen.hideAsync();
  };

  useEffect(() => {
    restoreUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer ref={navigationRef} theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
