import {Text, View, StyleSheet, Pressable, Image} from 'react-native';

function MealItem(props)
{
    return(
        <View style={styles.mealItem}>
            <Image source={{uri:props.imageUrl}}style={styles.image}/>
            <Text style={styles.title}>{props.title}</Text>
            <View style={styles.details}>
                <Text style={styles.detailsItem}>{props.duration}</Text>
                <Text style={styles.detailsItem}>{props.complexity.toUpperCase()}</Text>
                <Text style={styles.detailsItem}>{props.affordability.toUpperCase()}</Text>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    image:{
        width:'100%',
        height:200
    },
    title:{
        fontWeight:'bold',
        textAlign:'center',
        fontSize:24,
        padding:10
    },
    mealItem:{
        margin:16,
        borderRadius:8,
        overflow:'hidden',
        backgroundColor:'white',
        elevation:4,
        shadowColor:'black',
        shadowOpacity:0.25,
        shadowOffset:{width:3,height:7},
        shadowRadius:8
    },
    details:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        padding:8
    },
    detailsItem:{
        marginHorizontal:5,
        fontSize:18,
    }
})

export default MealItem;