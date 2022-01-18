const somethingWillHappen = () => {
  return new Promise((resolve, reject) => {
    if (true){
      resolve('ok')
    } else {
      reject('bad')
    }

  })
}

const somethingWillHappen2 = () => {
  return new Promise((resolve, reject) => {
    if (true){
      setTimeout(() => {
        resolve('True')
      }, 2000)
    } else {
      const error =new Error('Whoops')
      reject(error)
    }
  })
}

somethingWillHappen()
  .then(r => console.log(r))
  .catch(err => console.error(err))

somethingWillHappen2()
  .then(r => console.log(r))
  .catch(err => console.error(err))

Promise.all([somethingWillHappen(), somethingWillHappen2()])
  .then(r => console.log('array result', r))
  .catch(err => console.log('array error', err))
