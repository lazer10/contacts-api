import out from '../helpers/response';
import { sign } from '../helpers/jwt';
import config from '../config';

class adminController {
  static async login(req, res) {
    const { username, password } = req.body;
    if (username !== config.ADMIN_USERNAME || password !== config.ADMIN_PASSWORD) return out(res, 400, 'Username or Password is incorrect', null, 'AUTHENTICATION_ERROR');
    const token = await sign({ username, password, role: 'admin' });
    return out(res, 200, 'Logged in successfully', { username, role: 'admin', token });
  }
}

export default adminController;
