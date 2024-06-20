import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { ScreenName } from "./types/navigation.type";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name={ScreenName.NOTE} component={NoteSceen} />
    </Navigator>
  );
}
