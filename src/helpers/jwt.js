import jwt from 'jsonwebtoken';
import config from '../config';

export const sign = (payload) => jwt.sign(payload, config.JWT_SECRET);
export const verify = (payload) => jwt.verify(payload, config.JWT_SECRET);
