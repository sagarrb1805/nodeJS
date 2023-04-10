const EventEmitter = require('events')
const uuid = require('uuid')

class Logger extends EventEmitter{
    log(msg){
        tihs.on('message', (data) =>{id: uuid.v3(), msg})
        // this.emit('message', {id: uuid.v3(), msg})
    }
}

module.exports = Logger;