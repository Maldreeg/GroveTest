import * as React from 'react';
import {View, StyleSheet, TextInput, TouchableOpacity, Text, ImageBackground} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

//Add Create Screen
import AddCardScreen from './AddCardScreen';

const Stack = createStackNavigator();

export default function Create({ navigation }) {

    // Function to navigate to AddCardScreen
    const navigateToAddCardScreen = () => {
        navigation.navigate('Add Card');
    };

    return (
        <ImageBackground
            source={require('../assets/JungleBg.gif')}
            style={styles.CreateContainer}>
            
            <Text style={styles.letsGetInto1}>Let’s get into the (wood) work!</Text>

            <View style={styles.titlecontainer}>
                <Text style={styles.modalTitle}>Title</Text>
                <TextInput
                    style={styles.modalInput}
                    placeholder="Enter title"
                />
            </View>

            <View style={styles.titlecontainer}>
                <Text style={styles.modalTitle}>Subject Name</Text>
                <TextInput
                    style={styles.modalInput}
                    placeholder="Enter subject name"
                />
            </View>

            <View style={styles.titlecontainer}>
                <Text style={styles.modalTitle}>Subject Code</Text>
                <TextInput
                    style={styles.modalInput}
                    placeholder="Enter subject code"
                />
            </View>

            <View style={styles.titlecontainer}>
                <Text style={styles.modalTitle}>Specialization</Text>
                <TextInput
                    style={styles.modalInput}
                    placeholder="Choose Specialization"
                />
            </View>

            
            <TouchableOpacity style={[styles.CreateButton, styles.shadow]} onPress={navigateToAddCardScreen}>
                <Text style={styles.CreateText}>Create</Text>
            </TouchableOpacity>  


        </ImageBackground>
        );
};

const styles = StyleSheet.create({
    CreateContainer: {
      flex: 1,
      justifyContent: 'flex-start',
      resizeMode: 'cover'
    },
    letsGetInto1: {
        top: 20,
        alignSelf: 'center',
        fontSize: 15,
        letterSpacing: 1.6,
        fontWeight: "700",
        color: "#fff",
        textAlign: "center",
        height: 33

    },
    titlecontainer:{
        top: 20,
        padding:10
    },
    modalTitle:{
        fontSize: 20,
        color: '#ECE3CE',
        paddingBottom: 5
    },
    modalInput: {
        height: '50',
        borderStyle: "solid",
        borderColor: "#ece3ce",
        borderRadius: 5,
        borderWidth: 1,
        width: "90%",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
        paddingVertical: 5 
    },
    CreateButton: {
        top: 100,
        width: 120,
        height: 40,
        alignSelf: 'flex-end',
        right: 15,
        padding: 10,
        backgroundColor: '#ECE3CE',
        alignItems: 'center',
        borderRadius: 20,
      },
      CreateText: {
        color: '#739072',
        textAlign: 'center',
      },
      


    //Shadow Effect ;3
    shadow:{
        shadowColor: '#7F5F0',
        shadowOffset:{
          width: 0,
          height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
      }
})

