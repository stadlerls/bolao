import { NativeBaseProvider, StatusBar } from "native-base";
import { useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto';

import { Loading } from './src/components/Loading';
import { Signin } from './src/sreens/Signin';

import { THEME } from "./src/styles/Theme";
import { AuthContext, AuthContextProvider } from "./src/contexts/AuthContext";
import { New } from "./src/sreens/New";
import { Find } from "./src/sreens/Find";
import { Pools } from "./src/sreens/Pools";

export default function App() {
  const [ fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_500Medium, Roboto_700Bold});
  
  return (
    <NativeBaseProvider theme={THEME}>
      <AuthContextProvider>
        <StatusBar 
          barStyle="light-content"
          backgroundColor="transparent" 
          translucent
        />
          { fontsLoaded ? <Pools /> : < Loading /> }
      </AuthContextProvider>
    </NativeBaseProvider>
  );
}