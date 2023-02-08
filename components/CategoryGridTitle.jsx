import {View, Text, Pressable} from 'react-native';

function CategoryGridTitle(props){
    return(
        <>
            <Pressable>
                <View>
                    <Text>{props.title}</Text>
                </View>
            </Pressable>
        </>
    )
}

export default CategoryGridTitle;