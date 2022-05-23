import React from 'react';
import { MaterialIcons } from '@expo/vector-icons'
import {
    Box
    , Center
    , FormControl
    , Heading
    , Icon
    , Input
    , VStack
    , Button
    , Checkbox
    , HStack
    , Image
    , Switch
    , Text
    , useColorMode

} from 'native-base';


export function Signin() {

    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Center height="full"
            _dark={{ bg: 'black' }}
            _light={{ bg: 'white' }}
        >
            <Image
                alt='Image Logo'
                size={150}
                source={{ uri: 'https://github.com/hevair.png' }} />
            <VStack width='full' p={5}>
                <Box width='full'>
                    <Heading
                        _dark={{ color: 'white' }}
                        _light={{ color: 'coolGray.700' }}
                    >
                        Entrar
                    </Heading>


                    <FormControl >
                        <FormControl.Label>E-mail</FormControl.Label>
                        <Input
                            placeholder='seu@email.com.br'
                            InputLeftElement={
                                <Icon
                                    as={<MaterialIcons name="person" />}
                                    size={5}
                                    ml={2}
                                    color='muted.400'
                                />
                            }
                        />

                        <FormControl.ErrorMessage>
                            Email com formato invalido
                        </FormControl.ErrorMessage>
                    </FormControl>
                    <FormControl>
                        <FormControl.Label>Senha</FormControl.Label>
                        <Input
                            placeholder='Senha'
                            InputLeftElement={
                                <Icon
                                    as={<MaterialIcons name="lock" />}
                                    size={5}
                                    ml={2}
                                    color='muted.400'
                                />
                            }
                        />
                    </FormControl>
                    <Button colorScheme='purple' mt={7} >Entrar</Button>
                </Box>
                <HStack mt={5}>
                    <Checkbox value='agree'>
                        Concordo com as políticas de segurança
                    </Checkbox>
                </HStack>
                <HStack alignItems="center" space={4}>
                    <Text>Dark</Text>
                    <Switch
                        onToggle={toggleColorMode}
                        isChecked={colorMode === 'light'}
                        aria-lable={
                            colorMode === 'light' ? 'troque para o tema escuro'
                                : 'Troque para tema claro'
                        }
                    />
                    <Text>Light</Text>
                </HStack>
            </VStack>
        </Center>
    );
}