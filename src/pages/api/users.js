const users = [
  {
    name: "Shohan",
    email: "Shohan@email.con",
  },
  {
    name: "Sabbir",
    email: "admin@admin.com",
  },
];

export default (req, res) => {
  res.status(200).json(users);
};
