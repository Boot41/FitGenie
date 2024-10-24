export const validateWorkoutPlan = (data) => {
    if (!data.workoutSessions || data.workoutSessions.length !== data.programOverview.sessionsPerWeek) {
        return false;
    }
    return true;
};
