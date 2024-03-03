import { StorageSerializers } from '@vueuse/core';

export default async <T>(url: string): Promise<T> => {
  const cached = useSessionStorage<T>(url, null, {
    serializer: StorageSerializers.object,
  });

  if (!cached.value) {
    const { data, error } = await useFetch<T>(url, {
      headers: useRequestHeaders(['cookie']),
    });

    if (error.value) {
      throw createError({
        ...error.value,
      });
    }

    cached.value = data.value as T;
  } else {
    console.log(`${url}에서 데이터 가져왔습니다.`);
  }

  return cached.value;
};
