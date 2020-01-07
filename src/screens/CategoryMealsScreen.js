import React from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';

import { CATEGORIES, MEALS } from '../data/dummy-data'

const CategoryMealScreen = props => {
    const renderMealItems = itemData => {
        return(
            <View>
                <Text>{ItemData.item.title}</Text>
            </View>
        )
    }

    const catId = props.navigation.getParam('catagoryId');
    const displayedMeals = MEALS.filter(meal => meal.catagoryId.indexOf(catId) >= 0)


  return (
    <View style={styles.screen}>
      <FlatList data={displayedMeals}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItems}/>
    </View>
  );
};

CategoryMealScreen.navigationOptions = (navigationData) => {
    const catId = navigationData.navigation.getParam('catagoryId');
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

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
