exports.index = function(req, res) {
    res.render('index', { title: 'Be Resilient' });
};

exports.start = function(req, res) {
    res.render('start', { title: 'Be Resilient' });
};

exports.sendEmail = function(req, res) {
    var errors;

    req.assert('email', 'Need an email address').isEmail();

    errors = req.validationErrors();

    if (errors) {
        req.flash('errors', errors);
        res.redirect('/start');
    }
};

exports.about = function(req, res) {
    res.render('about', { title: 'About Be Resilient' });
};
