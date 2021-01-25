import React, { useState }from 'react'
import { StyleSheet, Text, View, Image, ScrollView} from 'react-native'
import { ILMagnus, ILMagnus1 } from '../../assets'
import { Button, Gap, Input } from '../../components'

const Login = ({navigation}) => {
    
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    const onLogin = () =>{
        console.log('params', username+"||"+password)
        if(username != '' && password != ''){
            if(username == 'magnus' && password == 'magnusaja'){
                navigation.replace('ListNews');
            }else{
                setUsername('')
                setPassword('')
            }
        }else{
            setUsername('')
            setPassword('')
        }
    }

    return (
        <View style={styles.PageContainer}>
            <ScrollView showsVerticalScrollIndicator={false} >
                <Image style={styles.Image} source={ILMagnus1}/>
                <Text style={styles.Text}>Magnus Digital Indonesia</Text>
                <Gap height={35}/>
                <View style={styles.LoginWrapper}>
                    <Input 
                        title={"Username"}
                        value={username}
                        onChangeText={data =>setUsername(data)}
                    />
                    <Gap height={10}/>
                    <Input
                        title={"Password"}
                        value={password}
                        onChangeText={data=>setPassword(data)}
                        secureTextEntry
                    />
                    <Gap height={20}/>
                    <Button
                        title={"Login"}
                        onPress={onLogin}
                    />
                </View>
            </ScrollView>
            
        </View>
        
    )
}

export default Login

const styles = StyleSheet.create({
    PageContainer:{
        backgroundColor:'#ffffff',
        flex:1,
        paddingHorizontal:20,
        alignItems:'center',
        paddingTop:60,
        
    },
    LoginWrapper:{
        width:350,
    },
    Image:{
        width:120, 
        height:120,
        alignSelf:'center',
    },
    Text:{
        fontSize:18,
        fontWeight:"bold",
        color:"black",
        marginTop:20,
        alignSelf:'center',
    }, 
})
