import { getUser } from '~/composables/auth/userData';
import type { UserWithoutPassword } from '~/types/user';

export const useAuthStore = defineStore(
  'auth',
  () => {
    const authUser = ref<Maybe<UserWithoutPassword>>();

    const signIn = (email: string, password: string) => {
      const foundUser = getUser(email, password);
      if (!foundUser) {
        throw createError({
          statusCode: 401,
          statusMessage: 'Invalid email or password',
        });
      }

      setUser(foundUser);
    };

    const setUser = (user: Maybe<UserWithoutPassword>) =>
      (authUser.value = user);

    const signOut = () => setUser(null);

    return {
      user: authUser,
      isAuthenticated: computed(() => !!authUser.value),
      isAdmin: computed(() =>
        !authUser.value ? false : authUser.value.roles.includes('ADMIN'),
      ),
      signIn,
      signOut,
    };
  },
  { persist: true }, // pinia 상태 유지 / 이렇게 하면 쿠키에 저장됨
  // 다른 저장소에 저장하길 원하면 아래처럼
  // {
  //   persist: {
  //     storage: persistedState.localStorage,
  //   },
  // },
);
