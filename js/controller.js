app.controller('worldsNews', ($scope, newsFactory) => {
    $scope.ajax = () => {

        var promise = newsFactory.doAjax();
        promise.then(data => {
            $scope.data = data.data;
            console.log($scope.data);
        }, (err) => {
            $scope.err = err;
        });
    }
    $scope.ajax();
});