
// Validation function for non-empty sections
function validateNonEmptySections(data) {
    const requiredSections = ['dailyOverview', 'guidelines', 'mealPrepTips', 'supplements'];
    for (let section of requiredSections) {
        if (!data[section] || data[section].length === 0) {
            return false;
        }
    }
    return true;
}

// Validation function for meals and their items
function validateMeals(data) {
    if (!data.meals || data.meals.length === 0) {
        return false;
    }
    
    for (let meal of data.meals) {
        if (!meal.items || meal.items.length === 0) {
            return false;
        }
    }
    return true;
}


// Final validation function
export const validateJSON = (data) => {
    return validateNonEmptySections(data) && validateMeals(data);
}