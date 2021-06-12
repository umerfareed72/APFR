import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

const About = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.headercontainer}>
          <Text style={[styles.header]}>About</Text>
        </View>
        <View style={{padding: 10}}>
          <Text style={styles.h1}>Academic Program Finder & Recommender</Text>
          <Text style={styles.h2}>
            APF&R is a website and mobile application purposed to lead the
            students about their higher studies and also provide information
            about the colleges / universities related to their field. The APF&R
            website and mobile application will let you to search for the most
            appropriate programs from a collection of courses available in
            colleges and universities. This website and mobile application will
            help you to search the shortlisted programs directly to your student
            in one go.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#FFFEFA',
  },
  header: {
    color: 'black',
    fontSize: 26,
  },
  headercontainer: {
    borderBottomWidth: 1,
    marginTop: 30,
    alignSelf: 'center',
  },
  h1: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  h2: {
    fontSize: 14,
  },
  h3: {
    fontSize: 14,
    paddingLeft: 10,
  },
  h4: {
    paddingLeft: 30,
  },
});
