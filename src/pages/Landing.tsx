import React, { useEffect, useState } from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native'
import {RectButton} from "react-native-gesture-handler";

import landingImg from '../assets/images/landing.png';
import studyIcon from '../assets/images/icons/study.png';
import giveClasses from '../assets/images/icons/give-classes.png';
import heartIcon from '../assets/images/icons/heart.png';
import api from "../setvices/api";

function Landing() {
    const { navigate } = useNavigation();
    function handleNavigateToGiveClassesPage() {
        navigate('GiveClasses');
    }
    function handleNavigateTStudyTabs() {
        navigate('StudyTabs');
    }

    const [totalConnections, setTotalConnections] = useState(0);

    useEffect(() => {

        api.get('connections').then((response) => {
            setTotalConnections(response.data.total);
        });

    })

    return (
        <View style={styles.container}>
            <Image source={landingImg} style={styles.banner}/>
            <Text style={styles.title}>
                Seja bem-vindo, {'\n'}
                <Text style={styles.titleBold}>O que deseja fazer?</Text>
            </Text>
            <View style={styles.buttonsContainer}>
                <RectButton style={[styles.button, styles.buttonPrimary]} onPress={handleNavigateTStudyTabs}>
                    <Image source={studyIcon} />
                    <Text style={styles.buttonText}>Estudar</Text>
                </RectButton>
                <RectButton
                    style={[styles.button, styles.buttonSecondary]}
                    onPress={handleNavigateToGiveClassesPage}
                >
                    <Image source={giveClasses} />
                    <Text style={styles.buttonText}>Dar Aulas</Text>
                </RectButton>
            </View>
            <Text style={styles.totalConnections}>
                Total de {totalConnections} conexões já realizadas.
                {' '}
                <Image source={heartIcon}/>
            </Text>
        </View>
    )
}

export default Landing;

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#8257e5',
        flex: 1,
        justifyContent: 'center',
        padding:40
    },
    banner: {
        width: '100%',
        resizeMode: 'contain'
    },
    title: {
        fontFamily: 'Poppins_400Regular',
        color: '#fff',
        fontSize: 20,
        lineHeight: 30,
        marginTop: 80
    },
    titleBold: {
        fontFamily: 'Poppins_600SemiBold',
    },

    buttonsContainer: {
        flexDirection: 'row',
        marginTop:40,
        justifyContent: 'space-between'
    },

    button: {
        height: 150,
        width: '48%',
        borderRadius:8,
        backgroundColor:'#333',
        padding:24,
        justifyContent:'space-between',
    },

    buttonPrimary: {
        backgroundColor: '#9871f5'
    },
    buttonSecondary: {
        backgroundColor: '#04d361'
    },

    buttonText: {
        fontFamily: 'Archivo_700Bold',
        color: '#fff',
        fontSize: 20
    },

    totalConnections: {
        fontFamily: 'Poppins_400Regular',
        color: '#d4c2ff',
        fontSize: 12,
        lineHeight:20,
        maxWidth:140,
        marginTop:40
    }
})
