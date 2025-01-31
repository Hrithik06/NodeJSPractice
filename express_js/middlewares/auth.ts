import type { Request, Response, NextFunction } from 'express'

const adminAuth = (req: Request, res: Response, next: NextFunction) => {
    const token: string = 'xyz'
    const isAuthorised: boolean = token === 'xyz'
    console.log('Admin Auth')
    if (!isAuthorised) {
        res.status(401).send('Unauthorised request')
    } else {
        next()
    }
}

const userAuth = (req: Request, res: Response, next: NextFunction) => {
    const token: string = 'xyz'
    const isAuthorised: boolean = token === 'xyz'
    console.log('User Auth')
    if (!isAuthorised) {
        res.status(401).send('Unauthorised request')
    } else {
        next()
    }
}

export { adminAuth, userAuth }
