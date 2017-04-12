(function (){
    
    function registerCtrl ($scope){
        $scope.message="giri";
        $scope.sal=4500;
        $scope.anualsal=function(){
            
            return (this.sal)*12;
        }
       
       
    }
    
    
       
    angular.module("register").controller("registerCtrl", registerCtrl);
       
})();