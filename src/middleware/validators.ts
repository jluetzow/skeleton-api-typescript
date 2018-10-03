import { check, validationResult } from 'express-validator/check'

export const KEY_STRING_EXAMPLE = 'stringExample'
export const KEY_STRING_LENGTH = 12


export const errorHandler = (req: any, res: any, next: any) => {
	const errors = validationResult(req)
	if (!errors.isEmpty()) {
		res.status(409).json({message: errors.array()[0].msg})
	} else {
		next()
	}
}

export const vStringExample = [
	check(KEY_STRING_EXAMPLE)
		.exists()
		.trim()
		.isLength({min: KEY_STRING_LENGTH}),
	errorHandler
]


