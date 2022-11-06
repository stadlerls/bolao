import { Center, NativeBaseProvider, Text } from "native-base";
import { THEME } from "./styles/Theme";

export function Signin(){
    return(
        <NativeBaseProvider theme={THEME}>
            <Center flex={1} bgColor="gray.900">
                <Text color="white" fontSize={24}>
                Signin
                </Text>
            </Center>
        </NativeBaseProvider>
    )
}