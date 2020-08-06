import React from 'react';
import {View, StyleSheet, Text} from "react-native";
import PageHeader from '../components/PageHeader';

function TeacherList() {
    return (
        <View style={styles.container}>
            <PageHeader title="Proffys Disponíveis"/>
        </View>
    )
}

export default TeacherList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f7'
    }
})
