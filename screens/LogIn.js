import { NavigationContainer } from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import { StyleSheet, TouchableOpacity ,TextInput,Text, View} from 'react-native';
import { color } from 'react-native-reanimated';
import {LoggedIn} from './LoggedIn/LoggedIn';
//import {  } from '../components/Themed';

export default function LogIn({navigation}) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');


  return (
    <View style={styles.container}>
       <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                onChangeText={text => setEmail(text)}
                value={email}
                placeholder="Email"
                keyboardType="characters"
            />
            <Text>{emailError}</Text>
        </View>
         {/* Password field */}
        <View style={styles.inputContainer}>   
            <TextInput
                style={styles.input}
                onChangeText={text =>setPassword(text)}
                value={password}
                placeholder="Password"
                secureTextEntry={true} 
            />
            <Text>{passwordError}</Text>
        </View>     
        <TouchableOpacity
            style={styles.touchableView}
            title="Login"
            onPress={()=> {navigation.navigate('LoggedIn')}}
            //onPress={()=>{navigation.navigate('HomeWelcomeScreen',{email :email,password:password,})}}
            >
            <Text style={{color:'white', alignItems:'center', paddingTop:13}}>Log In</Text>
        </TouchableOpacity>

        <Text>Forgot Password?</Text>
        <Text style={{color:'black',  }}>New? Sign in!</Text>
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
