import * as React from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View, TouchableOpacity, ImageBackground, ScrollView} from 'react-native';


export default function LibrariesScreen({ navigation }) {

    const flatlistdata = [
        {
            id: 1,
            title: 'Javascript Coding',
            cardno: '21 CARDS'
        },
        {
            id: 2,
            title: 'Facts',
            cardno: '30 CARDS'
        },
        {
            id: 3,
            title: 'Humanities for Dummies',
            cardno: '19 CARDS'
        },
        {
            id: 4,
            title: 'Integration for CS',
            cardno: '42 CARDS'
        },
        {
            id: 5,
            title: 'Reviewer',
            cardno: '11 CARDS'
        },
        {
            id: 6,
            title: "OnlyFriend's Location",
            cardno: '12 CARDS'
        },


    ];
    
    return (
      <View >
        <SafeAreaView/>
        <View style={styles.c1}>
            <Text style={styles.label}>Created</Text>
            <FlatList style={styles.c2} data={flatlistdata} renderItem={({item})=><View>
                <View style={styles.createdContainer}>
                    <TouchableOpacity style={styles.cardbtn}>
                        <Text>{item.title}</Text>
                        <Text>{item.cardno}</Text>
                    </TouchableOpacity>
                </View>
            </View>}/>
        </View>
        <View style={styles.c1}>
            <Text style={styles.label}>Favorites</Text>
            <FlatList style={styles.c2} data={flatlistdata} renderItem={({item})=><View>
                <View style={styles.createdContainer}>
                    <TouchableOpacity style={styles.cardbtn}>
                        <Text>{item.title}</Text>
                        <Text>{item.cardno}</Text>
                    </TouchableOpacity>
                </View>
            </View>}/>
        </View>
        
      </View>
    );
}

const styles = StyleSheet.create({

    cardbtn:{
        backgroundColor: 'red',
        width: '90%',
        height: 60,
        margin: 0,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15
        
    },
    createdContainer:{
        alignItems: 'center',
        flex: 1,
        padding: 5,
    },
    label:{
        fontSize: 20
    },
    c1: {
        padding: 10,
        marginBottom: 25,
        backgroundColor: 'green'
    },
    c2: {
        height: '40%',
        width: '100%',
        paddingVertical:20,
        backgroundColor: 'blue'
    }
    
});