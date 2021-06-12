import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

const Degrees = () => {
  return (
    <View style={styles.container}>
        <ScrollView>

       <View style={styles.headercontainer}>
        <Text style={[styles.header]}>Latest Degrees</Text>
      </View>
      <View style={{padding: 10}}>
        <Text style={styles.h2}>Matric</Text>
        <Text style={styles.h3}>- Science</Text>
        <Text style={styles.h4}>-> Computer</Text>
        <Text style={styles.h4}>-> Biology</Text>
        <Text style={styles.h3}>- Arts</Text>
      </View>

      <View style={{padding: 10}}>
        <Text style={styles.h2}>Intermediate</Text>
        <Text style={styles.h3}>- Pre-Medical</Text>
        <Text style={styles.h3}>- Pre-Engineering</Text>
        <Text style={styles.h3}>- I.C.S</Text>
        <Text style={styles.h3}>- I.Com</Text>
        <Text style={styles.h3}>- F.A</Text>
      </View>

      <View style={{padding: 10}}>
        <Text style={styles.h2}> Bachelor</Text>
        <Text style={styles.h3}>- CS & IT</Text>
        <Text style={styles.h3}>- Medical</Text>
        <Text style={styles.h3}>- Engineering</Text>
        <Text style={styles.h3}>- Management Sciences</Text>
        <Text style={styles.h3}>- F.A</Text>

        <Text style={styles.h3}>- Social Sciences</Text>
        <Text style={styles.h3}>- Agriculture</Text>
        <Text style={styles.h3}>- Law</Text>
        <Text style={styles.h3}>- Religious Studies</Text>
        <Text style={styles.h3}>- Languages</Text>
        <Text style={styles.h3}>- Media Studies</Text>
        <Text style={styles.h3}>- Arts & Design</Text>
        <Text style={styles.h3}>- Commerce/Finance & Accounting</Text>
      </View>

      <View style={{padding: 10}}>
        <Text style={styles.h2}> Master & M.Phil</Text>
        <Text style={styles.h3}>- CS & IT</Text>
        <Text style={styles.h3}>- Medical</Text>
        <Text style={styles.h3}>- Engineering</Text>
        <Text style={styles.h3}>- Management Sciences</Text>
        <Text style={styles.h3}>- F.A</Text>

        <Text style={styles.h3}>- Social Sciences</Text>
        <Text style={styles.h3}>- Agriculture</Text>
        <Text style={styles.h3}>- Law</Text>
        <Text style={styles.h3}>- Religious Studies</Text>
        <Text style={styles.h3}>- Languages</Text>
        <Text style={styles.h3}>- Media Studies</Text>
        <Text style={styles.h3}>- Arts & Design</Text>
        <Text style={styles.h3}>- Commerce/Finance & Accounting</Text>
      </View>
      </ScrollView>
     
    </View>
  );
};

export default Degrees;

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
    color: 'white',
  },
  h2: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  h3: {
    fontSize: 14,
    paddingLeft: 10,
  },
  h4: {
    paddingLeft: 30,
  },
});
