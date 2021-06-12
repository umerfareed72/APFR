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
    title: 'Abeer Tajamal',
      image: require('../images/m.jpeg'),
  },
  {
    title: 'Muzamal Khan',
     image: require('../images/mo.jpeg'),
  },
  {
    title: "Muhammad Arsalan Raza",
            image: require('../images/l.jpeg'),
  },
];
const Team
= () => {
  return (
    <View style={styles.container}>
        <View style={styles.headercontainer} >
<Text style={[styles.header]}>
  Our Team
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
             </ImageBackground>
          </View>
        )}></FlatList>
    </View>
  );
};

export default Team

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor:'#FFFEFA',
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
    textAlign:'center'
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
