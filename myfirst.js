const EventEmitter = require('events');
const event = new EventEmitter();



event.on('mensagemEnviada', function(){
  console.log('Ouvi esse evento!', mensagem [2]);
});

event.emit('mensagemEnviada', mensagem = [ 1, 2, 3]);