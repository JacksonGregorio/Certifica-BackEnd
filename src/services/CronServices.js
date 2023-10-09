import AtualizarVencimentos from './atualizarVencimento';
const cron = require('node-cron');

cron.schedule('0 0 * * *', () => {
    AtualizarVencimentos();
});
