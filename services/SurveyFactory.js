surveyData.factory('SurveyFactory', function SurveyFactory() {
  var factory = {};
  factory.shows = [];
  factory.destinations = [];

  factory.addShow = function() {
    var show = { name: factory.showName };
    factory.shows.push(show);
    factory.showName = null;
  };

  factory.addDestination = function() {
    var destination = { name: factory.destinationName };
    factory.destinations.push(destination);
    factory.destinationName = null;
  };
  return factory;
});
