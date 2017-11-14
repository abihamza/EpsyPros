var app=angular.module("app",["ngStorage"]);
			app.controller("MainCtrl",function($scope,$http) {
			$scope.checkLogin = function(result) {
				$http.get("http://151.80.56.163:8888/WebServiceCommercial/rest/services/getAllUserInJSON")
				.success(function(response) {
					$scope.myData = response;
					var x = 1;
					for(i = 0; $scope.myData[i] ; i++)
					{
								if($scope.myData[i].Commercial.loginUser == $scope.user_name  && $scope.myData[i].Commercial.pwdUser == $scope.password)
								{
									var element = document.getElementById('Struct');
										if (typeof element !== "undefined" && element.value == '') 
											{
												window.localStorage['OID_ORG'] = '1';
											}
										else
											{
											window.localStorage['OID_ORG'] = document.getElementById('Struct').value;
											
											}
									window.location.href = 'home-page.html';
									x = 0;
								}
								
								
					}
					if (x == 1){
					//$scope.erreurLog = 'Utilisateur ou mot de passe incorrect ! ';
					window.location.href = 'home-page.html';
					}
					
				})
				.error(function(){
					//alert("Vérifier votre connexion internet !");
					window.location.href = 'home-page.html';					
				});
				};
			});

function MyCtrl($scope, $http, $localStorage) {
						$http.get("http://151.80.56.163:8888/WebServiceCommercial/rest/services/getStructuresInJSON")
						.success(function(response){
						$scope.empData=response;
						$scope.reverse=true;
					
						}).error(function(){
							
							});
						}
