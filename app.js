const express = require("express")
const app = express()
app.use(express.json())

const port = process.env.PORT || 3001;  // Use a porta do ambiente ou 8000 como fallback
const rotaLivro = require("./Rotas/Livro")

app.use('/livros', rotaLivro)





app.listen(port, () => {
  console.log('escutando a porta: '+ port)
})
