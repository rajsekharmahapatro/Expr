module.exports.homeList = function(req, res){
  res.render('locations-list', {title: 'Home'});
};

module.exports.addReview = function(req, res){
  res.render('index', {title:'Add a Review'});
};

module.exports.locationInfo = function(req, res){
  res.render('index', {title:'Location Information'});
};
