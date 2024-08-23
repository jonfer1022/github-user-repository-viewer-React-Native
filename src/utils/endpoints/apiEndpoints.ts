export const apiEndpoints = {
  user: '/user',
  users: '/users',
  repositories: '/repositories',
  repos: '/repos',
  getUsers: (since = 0, per_page = 10): string =>
    `${apiEndpoints.users}?since=${since}&per_page=${per_page}`,
  getUserByName: (name: string): string => `${apiEndpoints.users}/${name}`,
  getUserById: (id: string): string => `${apiEndpoints.user}/${id}`,
  getRepositories: (since = 1): string =>
    `${apiEndpoints.repositories}?since=${since}`,
  getRepositoryByPath: (name: string): string =>
    `${apiEndpoints.repos}/${name}`,
};
