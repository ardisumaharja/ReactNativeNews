import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import WebView from 'react-native-webview'
import { ICArrowBack } from '../../assets/illustration'
import { Gap } from '../../components'

const DetailNews = ({navigation, route}) => {
    console.log('params', route.params.content)
    const data = route.params;
    return (
        <View style={styles.PageContainer}>
            <View style={styles.HeaderNav}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <Image style={styles.Icon} source={ICArrowBack}/>
                </TouchableOpacity>
                <Text style={styles.PageTitle}>News</Text>
                <Gap width={20}/>
            </View>
            
            <Gap height={10}/>
            <Image  source={{uri:data.urlToImage}} style={styles.Image} />
            <Gap height={10}/>
            <Text style={styles.Title}>{data.title}</Text>
            <Gap height={20}/>
            <Text style={styles.Author}>{data.author}</Text>
            <Gap height={20}/>
            <Text style={styles.Content}>{data.content}</Text>
        </View>
    )
}

export default DetailNews

const styles = StyleSheet.create({
    PageContainer:{
        paddingTop:10,
        paddingHorizontal:15,
    },
    HeaderNav:{
        flexDirection:'row',
        width:'100%',
        height:50,
        alignItems:'center',
        borderBottomWidth:1,
    },
    Icon:{
        width:20,
        height:20,
    },
    PageTitle:{
        flex:1,
        textAlign:'center', 
        fontSize:20,
        fontWeight:'bold',
    },
    Image:{
        width:'100%',
        height:200
    },
    Title:{
        fontSize:20,
        fontWeight:'bold',
    },
    Author:{
        fontSize:16,
        fontWeight:'bold',
    },
    Content:{
        fontSize:16,
        fontWeight:'400',
    }
})
