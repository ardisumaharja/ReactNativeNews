import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { colors } from '../../utils'

const Button = ({title, type, onPress, icon, disable}) => {
    return (
        <TouchableOpacity style={styles.Container(type)} onPress={onPress}>
            <Text style={styles.Text(type)}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    Container: (type) => ({
        borderRadius:10,
        backgroundColor: type==='secondary' ? colors.button.secondary.background : colors.button.primary.background,
        paddingVertical:10,
    }),
   
    Text: (type) => ({
        fontSize:16,
        fontWeight:"600",
        color: type==='secondary' ? colors.button.secondary.text : colors.button.primary.text,
        textAlign:"center"
    }),
})
