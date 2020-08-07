import React, {useState, useEffect} from 'react';
import {ScrollView, StyleSheet, Text, View} from "react-native";
import PageHeader from "../components/PageHeader";
import TeacherItem, {TeacherInterface} from "../components/TeacherItem";
import AsyncStorage from "@react-native-community/async-storage";
import { useFocusEffect } from '@react-navigation/native';

function Favorites() {
    const [favorites, setFavorites] = useState([]);

    function loadFavorites() {
        AsyncStorage.getItem('favorites').then(response => {
            if (response) {
                const teachers = JSON.parse(response);
                setFavorites(teachers);
            }
        })
    }

    useFocusEffect(() => {
        loadFavorites();
    });

    return (
        <View style={styles.container}>
            <PageHeader title="Meus Proffys Favoritos"/>
            <ScrollView style={styles.teacherList} contentContainerStyle={{paddingHorizontal:16, paddingBottom:16}}>
                {favorites.map((teacher:TeacherInterface) => {
                    return (
                        <TeacherItem key={teacher.id} teacher={teacher} favorited={true}/>
                    );

                })}
            </ScrollView>
        </View>
    )
}

export default Favorites;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f7'
    },
    teacherList: {
        marginTop:-40,
    }
})
