import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { deleteDiet, deleteWorkout, generateAiDiet, generateAiWorkout, getDiet, getUserProfile, getWorkout, saveDiet, saveWorkout, updateUserProfile } from '../api/api';
import { validateJSON } from '../components/diet/meal/validateMealPlan';
import toast from 'react-hot-toast';
import { validateWorkoutPlan } from '../components/workout/ValidateWorkout';
import { checkFields } from '../components/common/checkFields';


const useUserStore = create()(
  persist(
    (set, get) => ({
      userDetails: null,
      dietPlan: null,
      workoutPlan: null,

      valuesPresent: () => {
        const userDetails = get().userDetails;
        return checkFields(userDetails);
      },

      setUserDetails: (data) => set({ userDetails: data }),

      updateProfile: async (data) => {
        try {
          const res = await updateUserProfile(data);
          set({ userDetails: res.user });
          toast.success("Profile updated successfully!");
        } catch (error) {
          console.error("Error updating user profile:", error);
          toast.error("Failed to update profile");
        }
      },

      getProfile: async () => {
        try {
          const UserData = await getUserProfile();
          set({ userDetails: UserData });
        } catch (error) {
          console.error("Login failed:", error);
        }
      },

      getDietPlan: async () => {
        try {
          const res = await getDiet();
          set({ dietPlan: res.diet })
        } catch (error) {
          console.error("Login failed:", error);
        }
      },

      generateAndSaveDiet: async () => {
        try {
          const res = await generateAiDiet(get().userDetails);

          const dietData = res.message;

          if (!validateJSON(dietData)) {
            console.log("Failed to generate a valid diet plan");
            toast.error("Couldn't generate a valid diet plan. Please try again.");
            return;
          }

          try {
            const saveResult = await saveDiet(dietData);


            toast.success("Here you go 🥗");
            set({ dietPlan: saveResult.Diet });
          } catch (saveError) {
            console.error("Error saving diet plan:", saveError);
            toast.error("Generated diet plan but couldn't save it");
          }
        } catch (error) {
          console.error("Error generating diet plan:", error);
          toast.error("Error generating diet plan. Please try again.");
        }
      },

      deleteDiet: async () => {
        try {
          await deleteDiet();
          set({ dietPlan: null });
          toast.success("Diet plan deleted successfully");
        } catch (error) {
          console.error("Error deleting diet plan:", error);
          toast.error("Failed to delete diet plan");
        }
      },

      getAiWorkout: async () => {
        try {
          const res = await getWorkout();
          console.log("Workout - ", res);

          set({ dietPlan: res })
        } catch (error) {
          console.error("Login failed:", error);
        }
      },

      generateAndSaveWorkout: async () => {
        try {
          const res = await generateAiWorkout(get().userDetails);

          const workoutData = res.message;
          console.log("workoutData ", workoutData);


          if (!validateWorkoutPlan(workoutData)) {
            console.log("Failed to generate a valid workout plan");
            toast.error("Couldn't generate a valid workout plan. Please try again.");
            return;
          }

          try {
            const saveResult = await saveWorkout(workoutData);
            toast.success("Here you go 💪");
            set({ workoutPlan: saveResult.workout });
          } catch (saveError) {
            console.error("Error saving workout plan:", saveError);
            toast.error("Generated workout plan but couldn't save it");
          }
        } catch (error) {
          console.error("Error generating workout plan:", error);
          toast.error("Error generating workout plan. Please try again.");
        }
      },

      deleteWorkout: async () => {
        try {
          await deleteWorkout();
          set({ workoutPlan: null });
          toast.success("Workout plan deleted successfully");
        } catch (error) {
          console.error("Error deleting Workout plan:", error);
          toast.error("Failed to delete Workout plan");
        }
      },


      logout: () => {
        set({
          userDetails: null,
          dietPlan: null,
        });
      },
    }),
    {
      name: 'user-store',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        userDetails: state.userDetails,
        dietPlan: state.dietPlan,
        workoutPlan: state.workoutPlan,
      }),
    }
  )
);

export default useUserStore;
