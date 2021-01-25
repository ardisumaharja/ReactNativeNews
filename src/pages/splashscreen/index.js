import React, {useEffect} from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { ILMagnus, ILMagnus1 } from '../../assets'

const SplashScreen = ({navigation}) => {

    useEffect(() => {
        setTimeout(()=>{
            navigation.replace('Login')
        }, 300)
    }, [])

    return (
        <View style={styles.Container}>
            <Image style={styles.Image} source={ILMagnus1}/>
            <Text style={styles.Text}>Magnus Digital Indonesia</Text>
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    Container:{
        backgroundColor:'#ffffff',
        flex:1,
        alignItems:"center",
        justifyContent:"center",
    },
    Text:{
        fontSize:18,
        fontWeight:"bold",
        color:"black",
        marginTop:20
    }, 
    Image:{
        width:150,
        height:150,
    }
})
