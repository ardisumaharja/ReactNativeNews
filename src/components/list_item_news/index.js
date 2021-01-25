import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

const ListItemNews = ({title, image, date, onPress}) => {
    return (
        <TouchableOpacity style={styles.Container} onPress={onPress}>
            <View>
                <Text  numberOfLines={2} ellipsizeMode='tail' style={styles.TextTitle}>{title}</Text>
                <Text>{date}</Text>
            </View>
            <View>
                <Image source={{uri: image}} style={styles.Image}/>
            </View>
        </TouchableOpacity>
    )
}

export default ListItemNews

const styles = StyleSheet.create({
    Container:{
        // backgroundColor:'yellow',
        flexDirection:"row",
        justifyContent:"space-between",
        height:90,
        borderBottomWidth:5,
        borderColor:'#EEEEEE',
        marginTop:16,
        paddingHorizontal:20
    },
    TextTitle:{
        maxWidth:177,
        fontWeight:'bold',
        fontSize:18,
    },
    TextDate:{
        fontWeight:'400',
        fontSize:12,
        color:'#7D8797',
    },
    Image:{
        height:90,
        width:120,
        borderRadius:10,
    }
})
