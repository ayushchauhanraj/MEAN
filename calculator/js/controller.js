app.controller('MyCtrl', ($scope, calcfactory) => {
    $scope.output = 0;
    $scope.inputData = (inputVal) => {

        $scope.output = calcfactory.insert(inputVal);
    }
    $scope.EvalFun = () => {
        $scope.output = calcfactory.customEval();
    }
    $scope.clearSrc = () => {
        $scope.output = calcfactory.clearSrc();
    }
    // $scope.delete = () => {
    //     $scope.output = calcfactory.delete();
    // }
});