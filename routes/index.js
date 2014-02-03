exports.index = function(req, res) {
    res.render('index', { title: 'Be Resilient' });
};

exports.about = function(req, res) {
    res.render('about', { title: 'About Be Resilient' });
};

exports.mel = function(req, res) {
    res.render('mel-stephenson', { title: 'About Mel Stephenson' });
};

exports.stephen = function(req, res) {
    res.render('stephen-schaapveld', { title: 'About Stephen Schaapveld' });
};
