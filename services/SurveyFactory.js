surveyData.factory('SurveyFactory', function SurveyFactory() {
  var factory = {};
  factory.answers = [];
  factory.shows = [];
  factory.destinations = [];
  factory.results = [];

  factory.addAnswer = function() {
    var answer = {name: factory.showName, location: factory.destinationName };
    var show = {name: factory.showName};
    var destination = {name: factory.destinationName};
    factory.answers.push(answer);
    factory.shows.push(show);
    factory.destinations.push(destination);
    factory.showName = null;
    factory.destinationName = null;
    // debugger;
  };

  return factory;
});
