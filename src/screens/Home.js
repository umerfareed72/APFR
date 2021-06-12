import React from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
const data = [
  {
    title: 'Punjab University',
    text:
      'Established in 1882 at Lahore, the University of the Punjab is the' +
      '  largest and the oldest seat of higher learning in Pakistan. It was' +
      ' the first to be established in the sub-continent in Muslim' +
      ' majority area.',
    image: require('../images/pu.jpeg'),
  },
  {
    title: 'Lahore Garrison University',
    text: 'If you prefer to study in your own time and at your own speed then one of our e-learning packages may be right up your street. There is a third option, which is you like the sound of both but perhaps can’t attend all training sessions, this is when blended learning comes into its own.',
    image: require('../images/lg.jpeg'),
  },
  {
    title: 'Comsats University',
    text:
      'COMSATS University Islamabad, Lahore Campus was established in January 2002. It is located at Defence Road off Raiwind Road Lahore. The campus is at 25 minutes drive from the main city. The campus is purpose built and spreads over 185 acres with a 400,000 sq. ft covered area.',
        image: require('../images/cu.jpeg'),
  },
];
const Home = () => {
  return (
    <View style={styles.container}>
        <View style={styles.headercontainer} >
<Text style={[styles.header]}>
    Top Rated
</Text>
        </View>
      <FlatList
      contentContainerStyle={{paddingBottom:20}}
        keyExtractor={() => Math.random()}
        data={data}
        renderItem={({item}) => (
          <View style={styles.cardContainer}>
            <ImageBackground
              source={item.image}
              style={styles.card}
              imageStyle={styles.ImageBackground}>
              <View style={styles.bgOverlay}></View>

              <Text style={styles.h1}>{item.title}</Text>
              <Text style={{color: 'white'}}>{item.text}</Text>
            </ImageBackground>
          </View>
        )}></FlatList>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor:'#FFFEFA'
  },
  card: {
    padding: 50,
    backgroundColor: '#FFFEFA',
    borderRadius: 20,
  },
  cardContainer: {
    width: '95%',
    marginVertical: 20,
  },
  h1: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  ImageBackground: {borderRadius: 30},
  bgOverlay: {
    backgroundColor: 'rgba(6,8,10,0.7)',
    position: 'absolute',
    top: 0,
    borderRadius: 20,
    bottom: 0,
    right: 0,
    left: 0,
  },
  header:{
color:'black',
fontSize:26
  },
  headercontainer:{
borderBottomWidth:1,
      marginTop:30
  }
});
