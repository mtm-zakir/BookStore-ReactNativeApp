import React from 'react'
import {StyleSheet,Text,View,Button,Alert,TouchableOpacity,Image,TextInput} from 'react-native'

const SignIn = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={{color:"#ff4d00",fontSize:25,fontWeight:"bold"}} >Welcome!</Text>
            <Text style={{color:"#ff4d00",fontSize:20,fontWeight:"bold", marginBottom:20}} >SignIn Here and Get Started</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.headField}>Email</Text>
                <TextInput style={styles.textField} placeholder={'Enter Your Email'}/>
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.headField} >Password</Text>
                <TextInput style={styles.textField} secureTextEntry={true} placeholder={'Enter Password'} />
            </View>
            <TouchableOpacity
                style={styles.btn}
                onPress={()=>navigation.navigate('DashBoard')}>
                <Text style={styles.btnText}>SignIn</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={{color:"#ff4d00",marginTop:10, marginBottom: 20}}
                      >Forgot Password</Text>
            </TouchableOpacity>
            <Text style={{color:"white",marginTop:10,fontWeight:"bold"}}>Don't Have an Account?</Text>
            <TouchableOpacity>
                <Text style={{color:"#ff4d00"}} onPress={()=>navigation.navigate('SignUp')}>Create New Account Now</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000c2b',
        justifyContent:'center',
        alignItems: 'center',
    },
    inputContainer: {
        width: '80%',
        paddingTop:"2%",
        paddingBottom:"2%",
    },
    textField: {
        backgroundColor:"#fff0e1",
        padding:"2%",
        borderRadius:6,
    },
    headField: {
        marginTop:15,
        color:"white",
        fontSize:20,
        fontWeight:"bold",
        marginBottom:10,
    },
    btn : {
        marginTop: 20,
        backgroundColor:'#ff4d00',
        borderRadius:10,
        width:100,
        alignItems: "center"
    },
    btnText: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        padding:10
    }
});


export default SignIn