import { Router } from 'express'
import { KEY_STRING_EXAMPLE, vStringExample } from '../middleware/validators'

export const example = () => {
	const api: Router = Router()

	api.get('/all/',  (req: any, res: any) => {
		try {
			res.send({success: 'success'})
		} catch (err) {
			res.status(409).json({ message: err.message })
		}
	})

	api.post('/stringBody', vStringExample, (req: any, res: any) => {
		try {
			res.send({success: req.body[KEY_STRING_EXAMPLE]})
		} catch (err) {
			res.status(409).json({ message: err.message })
		}
	})

	return api
}
