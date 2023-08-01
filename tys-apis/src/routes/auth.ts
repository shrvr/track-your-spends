import bcrypt from 'bcrypt';
import type { Request, Response } from 'express';
import { Router } from 'express';

import config from 'src/config';
import User from 'src/models/User';

const router = Router();

//Register
router.post('/register', async (req: Request, res: Response) => {
  const salt = await bcrypt.genSalt(Number(config.PASS_SALT));
  const hashedPass = await (await bcrypt.hash(req.body.password, salt)).toString();
  const newUser = new User({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: hashedPass,
    country: req.body.country,
    profession: req.body.profession,
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser._id);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;
