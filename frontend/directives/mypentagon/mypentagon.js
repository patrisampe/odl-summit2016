odlsummit.directive('mypentagon', function () {
    'use strict';

    return {

        scope:true,
        link: function ($scope, element) {
            element.addClass('notexpanded');


            $scope.$on("message", function(e, msg) {
                console.log('h5 finaly' + msg);
                if (msg) {
                    element.addClass('expanded');
                } else {
                    element.removeClass('expanded');
                }
            });




        }

    };
});

