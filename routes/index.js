var moment = require('moment'),
    postmark = require('postmark')(process.env.POSTMARK_API_KEY);

exports.index = function(req, res) {
    res.render('index', { title: 'Be Resilient' });
};

exports.start = function(req, res) {
    res.render('start', { title: 'Be Resilient' });
};

exports.thanks = function(req, res) {
    res.render('thanks', { title: 'Be Resilient' });
};

exports.sendEmail = function(req, res) {
    var body,
        errors;

    req.assert('from', 'Need an email address').isEmail();

    errors = req.validationErrors();

    if (errors) {
        req.flash('errors', errors);
        res.redirect('/start');
    } else {
        body = req.body.name + ' at ' + req.body.from + ' asked for a session at ' + moment().format('LLLL') + '\n\n';
        body += 'They gave the following comments:\n' + req.body.comments;

        postmark.send({
            "From": "requests@fyi.org.nz",
            "To": "wombleton@gmail.com",
            "Subject": "[Be Resilient] " + req.body.name + " wants you to contact them",
            "TextBody": body,
            "Tag": "be-resilient"
        }, function(error, success) {
            if (error) {
                console.error("Unable to send via postmark: " + error.message);
                req.flash('errors', { msg: error.message });
                res.redirect('/start');
            } else {
                res.redirect('/thanks');
            }
        });
    }
};

exports.about = function(req, res) {
    res.render('about', { title: 'About Be Resilient' });
};
