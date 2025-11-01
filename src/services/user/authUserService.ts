import userRepository from '../../../Model/User/userRepository';
import ValidPayloadAuthInterface from '../../../Model/User/Interface/ValidPayloadAuthInterface';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const auth = async (
  payload: ValidPayloadAuthInterface
): Promise<string | null> => {
  const user = await userRepository.findByEmail(payload.email);
  if (!user || !user.status) {
    return null;
  }

  const passwordMatch = await bcrypt.compare(payload.password, user.password);
  if (!passwordMatch) {
    return null;
  }

  const JWT_SECRET = process.env.JWT_SECRET;
  if (!JWT_SECRET) {
    return null;
  }

  const token = jwt.sign({ email: user.email }, JWT_SECRET, {
    expiresIn: '1d',
  });

  return token;
};

export default { auth };