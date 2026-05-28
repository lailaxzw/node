const express = require("express");
const path = require("path");

const app = express();

// EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// FORM
app.use(express.urlencoded({ extended: true }));

// ROTAS
const categoriaRoutes = require("./routes/categoriaRoutes");
const fornecedorRoutes = require("./routes/fornecedorRoutes");
const clienteRoutes = require("./routes/clienteRoutes");
const funcionarioRoutes = require("./routes/funcionarioRoutes");

app.use("/categorias", categoriaRoutes);
app.use("/fornecedores", fornecedorRoutes);
app.use("/clientes", clienteRoutes);
app.use("/funcionarios", funcionarioRoutes);

// INDEX
app.get("/", (req, res) => {
  res.render("index", {
    titulo: "Página Inicial",
  });
});

// EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// FORM
app.use(express.urlencoded({ extended: true }));


// 🚨 PORTA DINÂMICA (OBRIGATÓRIO PRO RENDER)
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("http://localhost:3000");
});