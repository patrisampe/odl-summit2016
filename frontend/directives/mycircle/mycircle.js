odlsummit.directive('mycircle', function ($interval) {


    return {
        restrict: 'E',
        link: function ($scope, element) {


            element.addClass('large');
            var expanded = false;
            console.log('h2');

            element.bind('click', function () {

                increaseCounter();
            });

            var increaseCounter = function () {
                if (expanded) {
                    element.removeClass('expanded');
                    expanded = false;
                    console.log('h3');
                } else {
                    element.addClass('expanded');
                    expanded = true;
                    console.log('h4');
                }

                $scope.$parent.$broadcast("message", expanded);
                console.log('h5 lo estamos emitiendo'+ expanded);
            };

               //$interval(increaseCounter, 6000);




        }
    };
});

