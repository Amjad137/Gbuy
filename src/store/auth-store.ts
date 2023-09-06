import { User } from "firebase/auth";
import { createWithEqualityFn } from "zustand/traditional";
import { shallow } from "zustand/shallow";

type AuthStore = {
  user: User | null;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  setUser: (user: User | null) => void;
};

export const useAuthStore = createWithEqualityFn<AuthStore>(
  (set) => ({
    user: null,
    loading: false,
    setLoading: (loading) => set({ loading }),
    setUser: (user) => set({ user }),
  }),
  shallow
);
