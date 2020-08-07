import React from 'react';
import {ScrollView, StyleSheet, Text, View} from "react-native";
import PageHeader from "../components/PageHeader";
import TeacherItem from "../components/TeacherItem";

function Favorites() {
    return (
        <View style={styles.container}>
            <PageHeader title="Meus Proffys Favoritos"/>
            <ScrollView style={styles.teacherList} contentContainerStyle={{paddingHorizontal:16, paddingBottom:16}}>
                <TeacherItem/>
                <TeacherItem/>
                <TeacherItem/>
                <TeacherItem/>
                <TeacherItem/>
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
