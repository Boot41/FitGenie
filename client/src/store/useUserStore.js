import { create } from 'zustand';

const useUserStore = create((set) => ({
  userDetails: {},
  gotPerfectMeal: false,
  setUserDetails: (data) => set({ userDetails: data }),
  setGotPerfectMeal: (status) => set(() => ({
    gotPerfectMeal: status,
  })),
}));

export default useUserStore;
