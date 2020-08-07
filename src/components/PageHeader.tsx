import React, { ReactNode } from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import {BorderlessButton} from "react-native-gesture-handler";
import {useNavigation} from '@react-navigation/native'

import backImage from '../assets/images/icons/back.png'
import logoImage from '../assets/images/logo.png'

interface PageHeaderProps {
    title: string;
    headerRight?: ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = function ({title, headerRight, children}) {
    const {navigate} = useNavigation();

    function handleGoBack() {
        navigate('Landing');
    }

    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <BorderlessButton onPress={handleGoBack}>
                    <Image source={backImage} resizeMode="contain"/>
                </BorderlessButton>

                <Image source={logoImage} resizeMode="contain"/>
            </View>

            <View style={styles.header}>
                <Text style={styles.title}>{title}</Text>
                {!!headerRight && headerRight}
            </View>
            {children}
        </View>
    )
}

export default PageHeader;

const styles = StyleSheet.create({
    container: {
        padding: 40,
        backgroundColor: '#8257e5'
    },
    topBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    title: {
        fontFamily: 'Archivo_700Bold',
        color: '#fff',
        fontSize: 24,
        lineHeight: 32,
        maxWidth: 160,
        marginVertical: 40
    },

    header: {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    }
});
