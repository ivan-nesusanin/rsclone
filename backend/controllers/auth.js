export const login = function (req, res) {
  res.status(200).json({
    login: "true",
  });
};

export const register = function (req, res) {
  res.status(200).json({
    register: "true",
  });
};
