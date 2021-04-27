import { NavigationContainer } from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import { StyleSheet, TouchableOpacity ,TextInput,Text, View, Button} from 'react-native';
import { color } from 'react-native-reanimated';
import { createStackNavigator } from '@react-navigation/stack';
import FirebaseAuth from './FirebaseAuth.js'

export default function SignIn({navigation}) {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [againPassword, setAgainPassword] = useState('');
    const [email, setEmail] = useState('');
    const [bday, setBday] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');


    const clearErrors = () =>{
        setEmailError('');
        setPasswordError('');
      }

      var actionCodeSettings = {
        url: 'https://www.example.com/?email=' + firebase.auth().currentUser.email,
        iOS: {
          bundleId: 'com.example.ios'
        },
        android: {
          packageName: 'com.example.android',
          installApp: true,
          minimumVersion: '12'
        },
        handleCodeInApp: true,
        // When multiple custom dynamic link domains are defined, specify which
        // one to use.
        dynamicLinkDomain: "example.page.link"
      };

    const handleSignup = () => {
        clearErrors();
        FirebaseAuth
        .auth()
        .sendSignInLinkToEmail(email,password).then(()=>{
            navigation.navigate('LoggedIn')
        }).catch(err => {
            switch(err.code){
              case "auth/email-already-in-use":
              case "auth/invalid-email":
                setEmailError(err.message);
                break;
              case "auth/weak-password":
                setPasswordError(err.message);
                break;    
                navigation.navigate('LogIn')
            }
          });
    };
      
    

  return (
    <View style={styles.container}>
        <Text>Sign In!!!!!!!!!</Text>{/* LogIn Button*/}
        <TextInput
                onChangeText={text =>setEmail(text)}
                value={email}
                placeholder="email"
                keyboardType="characters" 
                style={styles.input}
    />
     <TextInput
                
                onChangeText={text =>setFirstName(text)}
                value={firstName}
                placeholder="First Name"
                keyboardType="characters" 
                style={styles.input}
    />
    <TextInput
                onChangeText={text =>setLastName(text)}
                value={lastName}
                placeholder="Last Name"
                keyboardType="characters"
                style={styles.input}
    />
    <TextInput
                onChangeText={text =>setPassword(text)}
                value={password}
                placeholder="Password"
                secureTextEntry={true}
                style={styles.input}
    />
    <TextInput
                onChangeText={text =>setAgainPassword(text)}
                value={againPassword}
                placeholder="Password again"
                secureTextEntry={true}
                style={styles.input}
    />


<TouchableOpacity
            style={styles.touchableView}
            title="Sign up"
            onPress={handleSignup}>
            <View>
                <Text style={{color:'white', alignItems:'center', paddingTop:13}}>Sign Up!</Text>
            </View>
        </TouchableOpacity>

 {/*Error messages*/}
 <View style={styles.ErrorMessageBox}>
 <Text>{emailError}</Text>
<Text>{passwordError}</Text>
 </View>
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
    color:'grey',
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
    backgroundColor:'navy',
    borderWidth:1,
    borderRadius:10,
    color:'white'
    },
    ErrorMessageBox:{
        marginTop:50,
        width: '80%',
        height:30,
        
    },

});
