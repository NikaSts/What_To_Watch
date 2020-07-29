export const userAdapter = (userData) => ({
  id: userData.id,
  name: userData.name,
  email: userData.email,
  avatar: userData.avatar_url,
});
