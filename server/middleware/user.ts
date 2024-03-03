import { getUserFromEvent } from '../utils/auth';

export default defineEventHandler((event) => {
  const user = getUserFromEvent(event);

  if (user) {
    event.context.user = user;
  }
});
