import React from 'react';
import {View, Text, StyleSheet, Image} from "react-native";
import { RectButton } from 'react-native-gesture-handler';

import heartOutlineIcon from '../assets/images/icons/heart-outline.png'
import unfavoriteIcon from '../assets/images/icons/unfavorite.png'
import whatsappIcon from '../assets/images/icons/whatsapp.png'

const TeacherItem: React.FC = () => {
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image style={styles.avatar} source={{
                    uri: 'https://github.com/cristianvuolo.png'
                }}/>

                <View style={styles.profileInfo}>
                    <Text style={styles.name}>Cristian Vuolo</Text>
                    <Text style={styles.subject}>Ciências</Text>
                </View>
            </View>
            <Text style={styles.bio}>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi voluptatem accusantium
                doloremque
            </Text>
            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/hora {'    '}
                    <Text style={styles.priceValue}>R$ 20,00</Text>
                </Text>

                <View style={styles.buttonsContainer}>
                    <RectButton style={[styles.favoriteButton, styles.favorited]}>
                        {/*<Image source={heartOutlineIcon}/>*/}
                        <Image source={unfavoriteIcon}/>
                    </RectButton>

                    <RectButton style={styles.contactButton}>
                        <Image source={whatsappIcon}/>
                        <Text style={styles.contactButtonText}>Entrar em Contato</Text>
                    </RectButton>
                </View>

            </View>
        </View>
    );
}

export default TeacherItem;


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#e6e6f0',
        borderRadius: 8,
        marginBottom: 16,
        overflow: 'hidden',
    },
    profile: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 24,

    },
    avatar: {
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor:'#eee',
    },
    profileInfo: {
        marginLeft:16,
    },
    name: {
        fontFamily: 'Archivo_700Bold',
        color:'#32264d',
        fontSize:20,
    },
    subject: {
        fontFamily: 'Poppins_400Regular',
        color: '#6a6180',
        fontSize:12,
        marginTop:4,
    },
    bio: {
        marginHorizontal:24,
        fontFamily: 'Poppins_400Regular',
        color: '#6a6180',
        fontSize:14,
        lineHeight:24,
    },
    footer:{
        backgroundColor:'#fafafc',
        padding: 24,
        alignItems: 'center',
        marginTop:24,
    },
    price:{
        fontFamily: 'Poppins_400Regular',
        color: '#6a6180',
        fontSize:14,
    },
    priceValue:{
        fontFamily: 'Archivo_700Bold',
        color: '#8257e5',
        fontSize:16,

    },
    buttonsContainer:{
        flexDirection:'row',
        fontSize:16,
    },
    favoriteButton:{
        backgroundColor:'#8257e5',
        width:56,
        height:56,
        borderRadius:8,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight:8
    },

    favorited: {
      backgroundColor: '#e33d3d'
    },
    contactButton:{
        backgroundColor:'#04d361',
        flex:1,
        height:56,
        borderRadius:8,
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight:8
    },
    contactButtonText:{
        color: '#fff',
        fontFamily:'Archivo_700Bold',
        fontSize:16,
        marginLeft:16
    },




})
