export const userInfo = [
  { id: 1, name: 'Tim' },
  { id: 2, name: 'Tom' },
  { id: 3, name: 'Jane' },
  { id: 4, name: 'Somchai' },
  { id: 5, name: 'Virun' },
]

export default (req, res) => {
  res.status(200).json(userInfo)
}
