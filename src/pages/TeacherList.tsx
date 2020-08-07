import React, {FormEvent, useState, useEffect} from 'react';
import {View, StyleSheet, ScrollView, TextInput, Text} from "react-native";
import PageHeader from '../components/PageHeader';
import TeacherItem, {TeacherInterface} from "../components/TeacherItem";
import {BorderlessButton, RectButton} from "react-native-gesture-handler";
import {Feather} from "@expo/vector-icons";
import api from '../setvices/api';
import AsyncStorage from '@react-native-community/async-storage';

function TeacherList() {
    const [subject, setSubject] = useState('');
    const [weekDay, setWeekDay] = useState('');
    const [time, setTime] = useState('');
    const [favorites, setFavorites] = useState(['']);
    const [filterVisible, setFilterVisible] = useState(false);
    const [teachers, setTeachers] = useState<TeacherInterface[]>([]);

    function handleToggleFilter() {
        setFilterVisible(!filterVisible);

    }

    function loadFavorites() {
        AsyncStorage.getItem('favorites').then(response => {
            if (response) {
                const favoritedTeachers = JSON.parse(response);
                const teachersIds = favoritedTeachers.map((teacher: TeacherInterface) => teacher.id);
                setFavorites(teachersIds);
            }
        })
    }

    function handleFiltersSubmit() {
        api.get('/classes', {
            params: {
                subject,
                week_day: weekDay,
                time
            }
        }).then((response) => {
            setTeachers(response.data);
            setFilterVisible(false);
            loadFavorites();
        })
    }

    return (
        <View style={styles.container}>
            <PageHeader title="Proffys Disponíveis" headerRight={(
                <BorderlessButton onPress={handleToggleFilter}>
                    <Feather name="filter" color="#fff"></Feather>
                </BorderlessButton>
            )}>
                {filterVisible && (
                    <View style={styles.searchForm}>
                        <Text style={styles.label}>Matéria</Text>
                        <TextInput
                            value={subject}
                            onChangeText={text => setSubject(text)}
                            placeholderTextColor="#c1bcc"
                            style={styles.input}
                            placeholder="Qual a matéria?"
                        />
                        <View style={styles.inputGroup}>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Dia da semana</Text>
                                <TextInput
                                    placeholderTextColor="#c1bcc"
                                    value={weekDay}
                                    onChangeText={text => setWeekDay(text)}
                                    style={styles.input}
                                    placeholder="Qual a matéria?"
                                />
                            </View>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Horário</Text>
                                <TextInput
                                    placeholderTextColor="#c1bcc"
                                    value={time}
                                    onChangeText={text => setTime(text)}
                                    style={styles.input}
                                    placeholder="Qual horário?"
                                />
                            </View>
                        </View>
                        <RectButton style={styles.submitButton} onPress={handleFiltersSubmit}>
                            <Text style={styles.submitButtonText}>Filtrar</Text>
                        </RectButton>
                    </View>
                )}
            </PageHeader>
            <ScrollView style={styles.teacherList} contentContainerStyle={{paddingHorizontal: 16, paddingBottom: 16}}>
                {teachers.map(teacher => {
                    return (
                        <TeacherItem key={teacher.id} teacher={teacher} favorited={favorites.includes(teacher.id)}/>
                    );

                })}
            </ScrollView>
        </View>
    )
}

export default TeacherList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f7'
    },
    teacherList: {
        marginTop: -40,
    },
    searchForm: {
        marginBottom: 8,
    },
    label: {
        color: '#d4c2ff',
        fontFamily: 'Poppins_400Regular',
    },
    input: {
        height: 54,
        backgroundColor: '#fff',
        borderRadius: 8,
        justifyContent: 'center',
        paddingHorizontal: 16,
        marginTop: 8,
        marginBottom: 16,
    },
    inputGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    inputBlock: {
        width: '48%'
    },
    submitButton: {
        backgroundColor: '#04d361',
        height: 56,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    submitButtonText: {
        color: '#fff',
        fontFamily: 'Archivo_700Bold',
        fontSize: 16,
    },


})
