import { NavigationContainer } from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import { StyleSheet, TouchableOpacity ,TextInput,Text, View} from 'react-native';
import { color } from 'react-native-reanimated';
import {LoggedIn} from './LoggedIn/HomePage';
//import {  } from '../components/Themed';
import FirebaseAuth from './FirebaseAuth.js'
export default function LogIn({navigation}) {

    //Constants
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');



    //Functions
    

    const handleLogin = () => {
        clearErrors();
        FirebaseAuth
          .auth()
          .signInWithEmailAndPassword(email,password).then(()=>
          {    
            console.log('all good');
            navigation.navigate('LoggedIn')
          }).catch((err)=>{switch(err.code){
            case "auth/invalid-email":
            case "auth/user-disable":
            case "auth/user-not-found":
              setEmailError(err.message);
              break;
            case "auth/wrong-password":
              setPasswordError(err.message);
              break; 
          }
        });
    };
            

/*
          .catch(err => {
            switch(err.code){
              case "auth/invalid-email":
              case "auth/user-disable":
              case "auth/user-not-found":
                setEmailError(err.message);
                break;
              case "auth/wrong-password":
                setPasswordError(err.message);
                break; 
            }
          });
            if(emailError ==="" && passwordError==="")
            {
                navigation.navigate('LoggedIn')
            }
      };
*/
      const clearErrors = () =>{
        setEmailError('');
        setPasswordError('');
      }

      const authListener = ()=>{
        FirebaseAuth.auth().onAuthStateChanged((user) =>{
          if(user){
            setUser(user);
          } 
          else{
            setUser('');
          }
        })
      };


    useEffect(()=>{
        authListener();
      },[]);
  
     

  return (
        //LOG IN PAGE
    <View style={styles.container}>
        
        {/* Email field */}
       <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                onChangeText={text => setEmail(text)}
                value={email}
                placeholder="Email"
                keyboardType="characters"
            />
          
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
           
        </View>     
        
        {/* LogIn Button*/}
        <TouchableOpacity
            style={styles.touchableView}
            title="Login"
            onPress={handleLogin}
            >
            <Text style={{color:'white', alignItems:'center', paddingTop:13}}>Log In</Text>
        </TouchableOpacity>
        
        {/* Reset Password Link*/}
        <Text 
        onPress={()=>{navigation.navigate('ResetPassword')}}>
            Forgot Password?
        </Text>

        {/* Sign In Link*/}
        <Text
        style={{color:'black', paddingTop:10 }} 
        onPress={()=>{navigation.navigate('SignIn')}}>
            New? Sign in!
        </Text>
    
        {/*Error messages*/}
        <View style={styles.ErrorMessageBox}>
        <Text >{emailError}</Text>
        <Text >{passwordError}</Text>
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
    color:'black',
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
    },

ErrorMessageBox:{
    marginTop:50,
    width: '80%',
    height:30,
    
}

});
