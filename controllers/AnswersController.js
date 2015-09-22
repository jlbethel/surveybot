surveyData.controller('AnswersCtrl', function AnswersCtrl($scope, SurveyFactory) {
  $scope.answers = SurveyFactory.answers;
  $scope.shows = SurveyFactory.shows;
  $scope.destinations = SurveyFactory.destinations;
  $scope.SurveyFactory = SurveyFactory;
});
