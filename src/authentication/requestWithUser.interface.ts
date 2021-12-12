import User from '../users/models/user.entity';

interface RequestWithUser extends Request {
  user: User;
}

export default RequestWithUser;
