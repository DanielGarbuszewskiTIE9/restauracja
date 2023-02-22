import {Text, View, StyleSheet, FlatList} from 'react-native';
import { MEALS, CATEGORIES } from '../data/dummy-data';
import MealItem from '../components/MealItem'

function MealsOverviewScreen(props){
    const id = props.route.params.categoryId
    const displayedMeals = MEALS.filter((mealItem)=>{
        return mealItem.categoryIds.indexOf(id)>=0;
    })
    function renderMealItem(itemData)
    {
        const mealItemProps = {
            title: itemData.item.title,
            imageUrl: itemData.item.imageUrl,
            duration: itemData.item.duration,
            complexity: itemData.item.complexity,
            affordability: itemData.item.affordability
        }
        return <MealItem {...mealItemProps}/>
    }

    return(
        <View>
            <FlatList data={displayedMeals}
            keyExtractor={(item)=>item.id}
            renderItem={renderMealItem}>
            </FlatList>
        </View>
    )
}

export default MealsOverviewScreen;