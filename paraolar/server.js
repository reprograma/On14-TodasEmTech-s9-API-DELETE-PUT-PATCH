const app = require("./src/app");

const PORT = 8055;

app.listen(PORT, () => {
  console.log(`Olá, beberes. Estou na porta ${PORT}`);
});