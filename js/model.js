app.factory("newsFactory", ($http, $q, PRODUCTURL) => {
    var obj = {
        doAjax() {
            let defer = $q.defer();
            $http.get(PRODUCTURL).then((data) => {
                defer.resolve(data);
            }, (err) => {
                defer.reject(err);
            });
            return defer.promise;
        }
    }
    return obj;
})