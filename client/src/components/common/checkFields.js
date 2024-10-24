export const checkFields = (userDetails) => {
    console.log(userDetails);
    
    const requiredFields = [
        'age',
        'gender',
        'height',
        'weight',
        'activityLevel',
        'dietType',
        'fitnessGoal',
        'intensity',
        'workoutType',
        'workoutDuration',
        'workoutFrequency',
        'workoutTimePreference'
    ];

    for (let field of requiredFields) {

        
        if (!userDetails[field]) {
            return false;
        }
    }

    return true;
}