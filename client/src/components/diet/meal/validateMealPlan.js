export const validateMealPlan = (jsonData) => {
    if (jsonData.length === 0) {
        return false;
    }

    for (const meal of jsonData) {
        if (!meal.items || meal.items.length === 0) {
            return false;
        }
    }

    return true;
};