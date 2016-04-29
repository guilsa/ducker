export default function auth () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: 'Guil Sa',
        avatar: 'https://en.gravatar.com/userimage/17962467/4da7bdad60a6ccaf08800614b5d7bfc5.png?size=200',
        uid: 'urubuz',
      })
    }, 2000)
  })
}
