const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const {  restoreUser } = require('../../utils/auth.js');

router.use(restoreUser);

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

// router.post('/test', (req, res) => {
//   res.json({ requestBody: req.body });
// });



router.use(restoreUser);

// router.get(
//   '/restore-user',
//   (req, res) => {
//     return res.json(req.user);
//   }
// );

// router.get(
//     '/require-auth',
//     requireAuth,
//     (req, res) => {
//       return res.json(req.user);
//     }
// );

// router.get('/set-token-cookie', async (_req, res) => {
//   const user = await User.findOne({
//       where: {
//         username: 'Demo-lition'
//       }
//     });
//   setTokenCookie(res, user);
//   return res.json({ user });
// });

// router.post('/test', (req, res) => {
//     res.json({requestBody: req.body});
// });



module.exports = router;