import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { Gap } from '../../components'


const Input = ({title, value, onChangeText, secureTextEntry, disable}) => {
   //  console.log("onchange", onChangeText);
    return (
        <View style={styles.Container}>
            <Text style={styles.Title}>{ title }</Text>
            <Gap height={6}/>
            <TextInput 
               style={styles.TextInput}
               value={value}
               onChangeText={onChangeText}
               secureTextEntry={secureTextEntry}
               editable={!disable}
               selectTextOnFocus={!disable}
           />
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    Container:{
       //  backgroundColor:'yellow'
    },
    TextInput:{
        borderWidth:2,
        borderRadius:10,
        borderColor:'#E9E9E9',
        paddingHorizontal:12,
        paddingVertical:11,
    },
    Title:{
       color:'#7D8797',
       fontSize:16,
       fontWeight:'bold',
    }
})
