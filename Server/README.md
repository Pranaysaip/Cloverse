use cloverseDB
db.createUser({
  user: "admin",
  pwd: "cloverse",
  roles: [{ role: "root", db: "admin" }]
})