import React, {useState, useEffect} from 'react';
import { StyleSheet, TouchableOpacity ,TextInput,Text, View, Button} from 'react-native';
import { color } from 'react-native-reanimated';
import FirebaseAuth from '../FirebaseAuth';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

 


export default function HomePage({navigation}) {

  const [email, setEmail] = useState('');
  const [user, setUser] = useState('');

  const clearInputs = () =>{
    setEmail('');
    setPassword('');
  }

  const handleLogout = () =>{
    FirebaseAuth.auth().signOut().then(()=>
    {    
     
      console.log('you are out');
      navigation.navigate('LogIn');
    }).catch((error)=>{

  });
  };
    
    const authListener = ()=>{
      FirebaseAuth.auth().onAuthStateChanged((user) =>{
        if(user){
         console.log('User email: ', user);
         setEmail(user.email);
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
    
    <View style={styles.container}>
       <Text>You have logged in {email}</Text>
        <Button title="Sign Out" onPress={handleLogout} />
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
