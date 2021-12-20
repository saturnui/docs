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
```
