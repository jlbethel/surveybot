surveyData.controller('TravelDestinationCtrl', function TravelDestinationCtrl($scope, SurveyFactory) {
  $scope.destinations = SurveyFactory.destinations;
  $scope.SurveyFactory = SurveyFactory;
});
