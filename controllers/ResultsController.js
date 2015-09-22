surveyData.controller('ResultsCtrl', function ResultsCtrl($scope, SurveyFactory) {
  $scope.results = SurveyFactory.results;
  $scope.SurveyFactory = SurveyFactory;
});
