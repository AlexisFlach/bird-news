const express = require('express');
const cors = require('cors');
const path = require('path')
const app = express();

const pool = require('./db')

app.use(cors());
app.use(express.json())

app.get('/api/birds', async (req, res) => {
  try {
    const allBirds = await pool.query("SELECT * FROM bird")
    res.json(allBirds.rows)
  } catch (err) {
    console.error(err.message)
  }
});
app.get('/api/birds/:id', async (req, res) => {
  try {
    const bird = await pool.query("SELECT * FROM bird WHERE id = $1", [req.params.id])
    res.json(bird.rows[0])
  } catch (err) {
    console.error(err.message)
  }
});

app.put("/api/birds/:id", async (req, res) => {
  try {
    const {id} = req.params;
    const {isSeen} = req.body;
    const update = await pool.query("UPDATE bird SET isSeen = $1 WHERE id = $2", [isSeen, id]);
    res.json('updated')

  } catch (err) {
    console.error(err.message)
  }
})

if(process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}


const port = process.env.PORT || 5000;

app.listen(port, () => `Server running on port ${port}`);