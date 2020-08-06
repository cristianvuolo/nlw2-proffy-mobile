import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import PageHeader from "../components/PageHeader";

function Favorites() {
    return (
        <View style={styles.container}>
            <PageHeader title="Meus Proffys Favoritos"/>
        </View>
    )
}

export default Favorites;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f7'
    }
})
