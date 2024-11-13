export const authTokenUtils = {
  getToken: () => {
    return localStorage.getItem("token");
  },
  getAuthHeader: () => {
    return {
      Authorization: `${authTokenUtils.getToken()}`,
    };
  },
};
