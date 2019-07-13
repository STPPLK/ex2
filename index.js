const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Sudthipong Pralakam'))
app.get('/about', (req, res) => res.send('เกี่ยวกับเรา'))
app.get('/contact', (req, res) => res.send('ติดต่อเรา'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
