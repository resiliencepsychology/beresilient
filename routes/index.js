
/*
 * GET home page.
*/

exports.index = function(req, res){
    res.render('index', { title: 'Be Resilient' });
};

exports.about = function(req, res){
    res.render('about', { title: 'About Be Resilient' });
};
