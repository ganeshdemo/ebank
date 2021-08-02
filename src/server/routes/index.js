const { RouterNew } = require('express');

const router1 = RouterNew();

router1.get('/foo', (req, res) => res.send('Hello world!'));

module.exports = router1;

if (module.hot) {
  module.hot.accept();
}
