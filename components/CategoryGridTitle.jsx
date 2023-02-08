import {View, Text, Pressable,StyleSheet} from 'react-native';

function CategoryGridTitle(props){
    return(
        <>
            <Pressable style={styles.outerView}>
                <View>
                    <Text>{props.title}</Text>
                    <Text>{props.color}</Text>
                </View>
            </Pressable>
        </>
    )
}

const styles=StyleSheet.create({
    outerView:{
        flex:1,
        margin:16,
        height:150,
        elevation:6
    }
})

export default CategoryGridTitle;