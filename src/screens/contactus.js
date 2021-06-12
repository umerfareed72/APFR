import React from 'react'
import { StyleSheet, Text, View,ScrollView } from 'react-native'

const contactus = () => {
    return (

        <View style={styles.container}>
        <ScrollView>

       <View style={styles.headercontainer}>
        <Text style={[styles.header]}>Latest Degrees</Text>
      </View>

      </ScrollView>
     
    </View>
 
    )
}

export default contactus

const styles = StyleSheet.create({
    container: {
        flex: 1,
    
        backgroundColor: '#FFFEFA',
      },
     
    header:{
        color:'black',
        fontSize:26
          },
          headercontainer:{
        borderBottomWidth:1,
              marginTop:30
          }
})
