import { getUserFromEvent } from '../utils/auth';

export default defineEventHandler((event) => {
  const user = getUserFromEvent(event);
  console.log('middleware user: ', user);

  if (user) {
    event.context.user = user;
  }
});
