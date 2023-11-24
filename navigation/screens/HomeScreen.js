import React from 'react';
import { ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';



const App = () => {
  return (
    <ImageBackground source={require('../assets/JungleBg.gif')} style={styles.backgroundImage}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>

          <Text style={[styles.l1, { top: 10 }]}>Hello, there!</Text>
          <Text style={[styles.l2, { top: 10 }]}>What do you want to learn today?</Text>

          <View style={[styles.c2, styles.shadow]}>

            <Text style={styles.c2l1} numberOfLines={2}>
              Plant seeds of wisdom {'\n'}one flashcard at a time!
            </Text>

            <TouchableOpacity style={styles.c2l2}>
              <Text style={styles.c2l3}>Create a study set now!</Text>
            </TouchableOpacity>

            <Image style={[styles.homechar]} source={require('../assets/home_char.png')} />

          </View>

           

              <View style={styles.flashcardcontainer} id='recent'>
                <Text style={[styles.l3, { top: 5 }]} >Recently Viewed</Text>
              </View>

              <View style={styles.flashcardcontainer} id='business'>
                <Text style={[styles.l3, { top: 150 }]} >Business and Entrepreneurship</Text>
              </View>

              <View style={styles.flashcardcontainer} id='communication'>
                <Text style={[styles.l3, { top: 280 }]} >Communication and Media</Text>
              </View>

              <View style={styles.flashcardcontainer} id='computer'>
                <Text style={[styles.l3, { top: 390 }]} >Computer Science</Text>
              </View>

              <View style={styles.flashcardcontainer} id='engineering'>
                <Text style={[styles.l3, { top: 520 }]} >Engineering</Text>
              </View>

              <View style={styles.flashcardcontainer} id='health'>
                <Text style={[styles.l3, { top: 650 }]} >Health Sciences</Text>
              </View>

              <View style={styles.flashcardcontainer} id='mathematics'>
                <Text style={[styles.l3, { top: 780 }]} >Mathematics and Statistics</Text>
              </View>

              <View style={styles.flashcardcontainer} id='natural'>
                <Text style={[styles.l3, { top: 910 }]} >Natural Sciences</Text>
              </View>

              <View style={styles.flashcardcontainer} id='social'>
                <Text style={[styles.l3, { top: 1040 }]} >Social Sciences</Text>
              </View>

              <View style={styles.flashcardcontainer} id='others'>
                <Text style={[styles.l3, { top: 1170, paddingBottom: 350 }]} >Others</Text>
              </View>
              
          </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch' or 'contain'
    justifyContent: 'center',
  },
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: 'rgba(0, 0, 0, 0)', // Set the background color to transparent
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 20,
  },
  l1: {
    fontSize: 20,
    color: '#FFFFFF',
    marginBottom: 5,
  },
  l2: {
    fontSize: 12,
    marginBottom: 15,
    color: '#FFFFFF',
  },
  l3:{
    fontSize: 14,
    color: 'white',
    marginLeft: -20,
    marginBottom: 5,

  },
  c2: {
    backgroundColor: '#ECE3CE',
    borderRadius: 20,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    padding: 20,
    borderColor: 'black'
  },
  c2l1: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#4F6F52',
    marginRight: 140,
  },
  c2l2: {
    backgroundColor: '#4F6F52',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 20,
    marginTop: 10,
    marginBottom: 0,
    alignSelf: 'flex-start',
  },
  c2l3:{
   color: '#ECE3CE',
   fontWeight: 'bold',
   fontSize: 13,
  },
  homechar: {
    width: 180,
    height: 200,
    position: 'absolute',
    bottom: 0,
    left: 160,
  },
  flashcardcontainer :{
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 20,
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
});

export default App;