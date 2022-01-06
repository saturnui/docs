```ts
const messenger = useMessenger((type = 'default'))

messenger.push(message)
console.log(messenger.length)
messenger.watch((message) => {
  // snooze
  messenger.snooze(message, { delay: 3000 })
  // delete
  messenger.delete(message)
  // next
  messenger.next() // Message
  // get
  messsenger.get(index) // Message
  // clear
  messenger.clear()
})


// const log = (label: string, data?: any) => {
//   console.log(`${label}:`, JSON.stringify(data))
// }

// const m2 = useNotify()
// m2.watch((msg) => {
//   log('watch', msg)
// })
// m2.push({ text: 'a' })
// m2.push({ text: 'b' })
// m2.push({ text: 'c' })
// m2.push({ text: 'd' })
// m2.push({ text: 'e' })
// log('list', JSON.stringify(m2.list()))
// log('len', m2.len())
// log('hasPrev', m2.hasPrev())
// log('next', m2.next())
// log('get', m2.get())
// log('next', m2.next())
// log('hasNext', m2.hasNext())
// const msgC = m2.next()
// log('next', msgC)
// log('snooze')
// m2.snooze(msgC, { delay: 1000 })
// log('list', JSON.stringify(m2.list()))
// log('get', m2.get())
// log('get', m2.get())
```
