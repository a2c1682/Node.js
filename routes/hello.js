const express = require('express'),
	router = express.Router();

router.get('/', (req, res, next) => {
	var name = req.query.name,
		mail = req.query.mail,
		data = {
			title: 'Hello,Super Star!',
			content: 'your name is ' + name + '.<br>' + 'and your mail address is ' + mail + '.' 
		};
	res.render('hello', data);
});

module.exports = router;
