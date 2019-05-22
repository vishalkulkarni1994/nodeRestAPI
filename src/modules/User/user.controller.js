import User from './user.module';


export async function signUp (req, res) {
  try {
    const user =await User.create(req.body);
    return res.status(201).json(user);
  } catch (e) {
    return res.send(500).json(e);
  }
}
