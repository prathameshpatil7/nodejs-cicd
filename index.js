const app = require("./src/app");

app.get("/", (req, res) => res.send("Express on Vercel"));
app.get("/books", (req, res) => res.status(200).send("Books on Vercel"));
app.get("/testNode", (_req, res) => {
  res.status(200).send("Yes the testNode endpoint worked");
});

app.listen(3003, () => console.log("Server ready on port 3003."));
