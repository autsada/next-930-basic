import { userInfo } from './users'

export default (req, res) => {
  const id = req.query && req.query.id

  const user = userInfo.find((i) => i.id === +id)

  if (user) {
    res.status(200).json(user)
  } else {
    res.status(404).send('Something went wrong')
  }
}
