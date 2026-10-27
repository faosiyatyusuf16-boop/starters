const users = [
  { name: "Sade", email: "sade@gmail.com", role: "admin" },
  { name: "Tunde", email: "tunde@yahoo.com", role: "user" },
  { name: "Amaka", email: "amaka@gmail.com", role: "user" },
  { name: "John", email: "john@gmail.com", role: "editor" }
];

function findUserByEmail(email) {
  return users.find(user => user.email === email);
}

console.log(findUserByEmail("tunde@yahoo.com"));
console.log(findUserByEmail("amaka@gmail.com"));

const countAdmins = users.filter(u => u.role === "admin").length;
console.log("Admins:", countAdmins);

const allEmails = users.map(u => u.email);
console.log("All emails:", allEmails);