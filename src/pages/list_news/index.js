import axios from 'axios'
import React, { useEffect, useState }from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { Gap, ListItemNews } from '../../components'
import moment from 'moment'


const ListNews = ({navigation}) => {

    const [news, setNews] = useState([])

    useEffect(() => {
       try{
            const getNews = async() => {
                axios.get(`http://newsapi.org/v2/top-headlines?country=id&apiKey=bc1854ddadda4e959c1e5f58ad1ca768`)
                .then(res => {
                    if(res.status == 200){
                        const data = res.data.articles
                        console.log('response', res.data.articles);
                        console.log('res_length', Object.keys(data).length)
                        setNews(data)
                    }else{

                    }
                })
            }
            getNews();
        }catch(e){
            console.log('error_response', e);
        }
    }, [])

    const clickItem = (itemDetail) =>{
        console.log('params', itemDetail)
        navigation.navigate("DetailNews", itemDetail)
    }

    return (
        <View style={styles.PageContainer}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {news.map(items=>{
                    return(
                        <ListItemNews
                            // key={items[]}
                            title={items.title}
                            date={moment(items.publishedAt.substring(0,10)).format('MMM DD, YYYY') }
                            image={items.urlToImage}
                            onPress={() => clickItem(items)}
                        />
                    )
                })}
            </ScrollView>
           
        </View>
    )
}

export default ListNews

const styles = StyleSheet.create({
    PageContainer:{
        // paddingHorizontal:20
    }
})
