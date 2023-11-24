import * as React from 'react';
import { StyleSheet, ScrollView, View, Text, SafeAreaView, Image, ImageBackground } from 'react-native';

export default function ProfileScreen({ navigation }) {
    return (
      <ImageBackground
            source={require('../assets/JungleBg.gif')}
            style={styles.CreateContainer}>

          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.ProfileTitleBar}>
            </View>
    
            <View style={{ alignSelf: 'center' }}>
              <View style={styles.profileImage}>
          
                <Image source={require('../assets/vhilly.jpg')} style={styles.image} resizeMode="center" />
              </View>
            </View>
    
            <View style={styles.profileInfo}>

              <Text style = {[styles.Username,{fontWeight: 200,fontSize:26}]}>Guest</Text>
              <Text style = {[styles.Username,{color:'#FFFFFF',fontSize:12}]}>youareguest@ue.edu.ph</Text>
              
            </View>
         
          </ScrollView>
      </ImageBackground>
    );
}

const styles = StyleSheet.create({
    //profilecontainer

    CreateContainer: {
      flex: 1,
      justifyContent: 'flex-start',
      resizeMode: 'cover'
    },
    ProfileTitleBar:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:24,
        marginHorizontal:16
    },
    profileImage: {
        width: 150,
        height: 150,
        borderRadius: 100,
        overflow: 'hidden',
        marginTop:34,
    },
    image: {
        flex: 1,
        width: undefined,
        height: undefined,
        aspectRatio:1,
    },
    profileInfo:{
        alignSelf:'center',
        alignItems:'center',
        marginTop:16
    },
    Username: {
        color: "#3A4D39",
        fontSize: 21,
        lineHeight: 26,
        fontFamily: 'monospace',
        fontWeight: 400,
    },

})