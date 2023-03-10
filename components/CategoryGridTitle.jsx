import {View, Text, Pressable,StyleSheet,Platform} from 'react-native';

function CategoryGridTitle({color,title,whenPressExecute}){
    return(
        <View style={styles.outerView}>
            <Pressable
            android_ripple={{color:"#ccc"}}
            style={({pressed})=> [styles.pressable,pressed ? styles.pressedButton : null]}
            onPress={whenPressExecute}
            >
                <View style={[styles.innerView, {backgroundColor: color}]}>
                    <Text style={{fontSize:25}}>{title}</Text>
                </View>
            </Pressable>
        </View>
    )
}

const styles=StyleSheet.create({
    outerView:{
        flex:1,
        margin:16,
        height:150,
        elevation:6,
        shadowColor:'black',
        shadowOpacity:0.25,
        shadowOffset:{width:0,height:2},
        shadowRadius:8,
        overflow:Platform.OS==='android' ? 'hidden' : 'visible'
    },
    innerView:{
        flex:1,
        padding:5,
        justifyContent:'center',
        textAlign:'center'
    },
    pressable:{
        flex:1
    },
    pressedButton:{
        opacity:0.5
    }
})

export default CategoryGridTitle;