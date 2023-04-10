const EventEmitter = require('events')

class MyEventEmitter extends EventEmitter{
}

const myEvent = new MyEventEmitter();

myEvent.on('event', ()=>{
    console.log('event trigger')
})
myEvent.on('event-one', ()=>{
    console.log('event one trigger')
})

myEvent.emit('event')   
myEvent.emit('event-one')