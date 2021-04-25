import { NavigationContainer } from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import { StyleSheet, TouchableOpacity ,TextInput,Text, View, Button} from 'react-native';
import { color } from 'react-native-reanimated';
import { createStackNavigator } from '@react-navigation/stack';


export default function LoggedIn({navigation}) {



  return (
    <View style={styles.container}>
        <Text>You have logged in!</Text>
        <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  input:{
    width: '80%',
    color:'white',
    height:50,
    borderRadius:10},

inputContainer: {
    width: '80%',
    height: 50,
    borderColor:'grey',
    borderWidth:1,
    marginBottom:15,
    paddingLeft:10,
    borderRadius:10
    },
touchableView:{
    marginBottom:15,
    width: '80%',
    height: 50,
    alignItems:'center',
    backgroundColor:'grey',
    borderWidth:1,
    borderRadius:10,
    },
touchableView:{
    marginBottom:15,
    width: '80%',
    height: 50,
    alignItems:'center',
    backgroundColor:'navy',
    borderWidth:1,
    borderRadius:10,
    },

});
