surveyData.controller('FavoriteShowCtrl', function FavoriteShowCtrl($scope, SurveyFactory) {
  $scope.shows = SurveyFactory.shows;
  $scope.SurveyFactory = SurveyFactory;
});
