import { Center, Text, Icon } from "native-base";
import Logo from '../assets/logo.svg';
import { Button } from "../components/Button";
import {Fontisto } from '@expo/vector-icons';
import { useAuth } from "../hooks/useAuth";

export function Signin(){

    const { signIn, user } = useAuth();

    return(
        
        <Center flex={1} bgColor="gray.900">
            <Logo width={212} height={40} />
            <Button 
                title="Entrar com Google"
                type={'SECONDARY'}
                leftIcon={<Icon as={Fontisto} 
                name="google" color="white"
                sizer="md"></Icon>}
                mt={12}
                onPress={signIn}>
            </Button>
            <Text color="white" textAlign="center" mt={4}>
                Não utilizamos nenhma informação além {'\n'} do seu e-mail para criação de sua conta.
            </Text>
        </Center>
        
    )
}