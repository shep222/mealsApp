import React from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';

import { CATEGORIES, MEALS } from '../data/dummy-data';

const CategoryMealScreen = props => {
    const renderMealItems = itemData => {
        return(
            <View>
                <Text>{ItemData.item.title}</Text>
            </View>
        )
    }

    const catId = props.navigation.getParam('categoryId');
    console.log(catId);
     const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0)


  return (
    <View style={styles.screen}>
      <FlatList data={displayedMeals}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItems}/>
    </View>
  );
};

CategoryMealScreen.navigationOptions = (navigationData) => {
    const catId = navigationData.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
    console.log("HERE " +selectedCategory);

    return {
         headerTitle: selectedCategory.title
    }
}




const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CategoryMealScreen;
