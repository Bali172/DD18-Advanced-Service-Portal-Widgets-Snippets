function($scope) {
    /*widget controller */
    var c = this;
    c.data.loading = true;
    $scope.server.update().then(function(){
        c.data.loading = false;
    })
}