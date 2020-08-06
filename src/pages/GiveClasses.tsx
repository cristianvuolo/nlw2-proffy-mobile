import React from 'react';

import {View, StyleSheet, ImageBackground, Text} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import giveClassesBgImage from '../assets/images/give-classes-background.png'
import { useNavigation } from '@react-navigation/native';

function GiveClasses() {
    const {goBack} = useNavigation();

    function handleBackButton() {
        goBack()
    }

    return (
        <View style={styles.container}>
            <ImageBackground resizeMode="contain" source={giveClassesBgImage} style={styles.content}>
                <Text style={styles.title}>
                    Quer ser um Proffy?
                </Text>
                <Text style={styles.description}>
                    Para começar, você deve se cadastrar em nossa plataforma web.
                </Text>
            </ImageBackground>
            <RectButton style={styles.ok_button} onPress={handleBackButton}>
                <Text style={styles.ok_button_text}>Tudo Bem</Text>
            </RectButton>
        </View>
    )
}

export default GiveClasses;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#8257e5',
        flex: 1,
        justifyContent: 'center',
        padding: 40
    },
    content: {
        flex: 1,
        justifyContent: 'center'
    },

    title: {
        fontFamily: 'Archivo_700Bold',
        color: '#fff',
        fontSize: 32,
        lineHeight: 37,
        maxWidth: 180,
    },
    description: {
        marginTop: 24,
        color: '#d4c2ff',
        fontSize: 16,
        lineHeight:26,
        fontFamily: 'Poppins_400Regular',
        maxWidth:240,
    },
    ok_button:{
        marginVertical: 40,
        backgroundColor: '#04d361',
        height:58,
        alignItems:'center',
        justifyContent: 'center',
        borderRadius:8
    },
    ok_button_text:{
        color: '#fff',
        fontSize: 16,
        fontFamily: 'Archivo_700Bold'
    },
})
