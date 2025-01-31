const express = require('express')
import type { Request, Response, NextFunction } from 'express'

const app = express()

app.use(
  '/user',
  (req: Request, res: Response, next: NextFunction) => {
    console.log('Handling Route 1 of User')
    console.log(req)

    next()
    // res.send("Response 1");
  },
  [
    (req: Request, res: Response, next: NextFunction) => {
      console.log('Handling Route 2 of User')
      // res.send("Response 2");
      next()
    },
    (req: Request, res: Response, next: NextFunction) => {
      console.log('Handling Route 3 of User')
      // res.send("Response 3");
      next()
    },
  ],
  (req: Request, res: Response, next: NextFunction) => {
    console.log('Handling Route 4 of User')
    // res.send("Response 4");
    next()
  },
  (req: Request, res: Response, next: NextFunction) => {
    console.log('Handling Route 5 of User')
    res.send('Response 5')
    next()
  }
)

app.listen(7777, () => {
  console.log('Listening to port 7777')
})
