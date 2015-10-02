var app = angular.module('flapperNews', ['ui.router']);


app.controller('MainCtrl', [
	'$scope',
	'posts',
	function($scope, posts){
		/*$scope.posts = ['post 1','post 2','post 3','post 4','post 5'];*/	

		$scope.posts = posts.posts;

		$scope.addPost = function  () {
			if( !$scope.title || $scope.tile === '' ) { return; } /* beter je button disablen */
			
			$scope.posts.push({
				title: $scope.title,
				link : $scope.link,
				upvotes: 0
			});
			
			$scope.title ="";
			$scope.link  ="";
		}

		$scope.incrementUpvotes = function  (post) {

			/*console.log('In incrementUpvotes post object:', post);*/
			post.upvotes += 1;
		}
	}
]);


app.factory('posts', [function(){
	var postFactory = {
		posts : []
	};

	return postFactory;
}]);

/*app.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider) {
	$stateProvider.state('home'{
		url:'/home',
		templateUrl:'/home.html',
		controller:'MainCtrl'
	});

	$urlRouterProvider.otherwise('home');
}]);*/