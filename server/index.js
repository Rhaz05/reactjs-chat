import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import axios from 'axios'
import { CONFIG } from './config/env.config.js'
import { logger } from './util/logger.util.js'

const app = express()

const allowedOrigins = ['http://localhost:3000', 'http://localhost:5173']
app.use(
  cors({
    credentials: true,
    origin: allowedOrigins,
  })
)
app.use(express.json())
app.use(morgan('dev'))

app.post('/authenticate', async (req, res) => {
  const { username } = req.body

  try {
    const response = await axios.put(
      'https://api.chatengine.io/users',
      {
        username: username,
        secret: username,
        first_name: username,
      },
      {
        headers: {
          'private-key': CONFIG.PRIVATE_KEY,
        },
      }
    )
    return res.status(response.status).json(response.data)
  } catch (e) {
    return res.status(e.response.status).json(e.response.data)
  }
})

app.listen(CONFIG.PORT, () => {
  logger.info(`Server is running on port ${CONFIG.PORT}`)
})
