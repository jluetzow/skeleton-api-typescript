import { example } from './example'

const responseMiddleware = (req: any, res: any, next: any) => {
	res.set('Content-Type', 'application/json')
	next()
}

export const routes = (router: any) => {
	router.use('/example', responseMiddleware, example())

	return router
}
