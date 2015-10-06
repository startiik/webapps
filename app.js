var app = angular.module('flapperNews', ['ui.router']);

app.controller('MainController', [
	'$scope',
	'posts',
	function($scope, posts){
		/*$scope.posts = ['post 1', 'post 2', 'post 3', 'post 4', 'post 5'];*/

		//creatie post objecten
		/*$scope.posts = [
			{title : 'post 1', upvotes : 5},
			{title : 'post 2', upvotes : 2},
			{title : 'post 3', upvotes : 15},
			{title : 'post 4', upvotes : 27},
			{title : 'post 5', upvotes : 55}
		];*/
		$scope.posts = posts.posts;

		$scope.addPost = function () {
			if(!$scope.title || $scope.title === ''){return ;}
			$scope.posts.push({
				//title: 'A new post', upvotes: 0
				title: $scope.title, 
				link : $scope.link,
				upvotes: 0,
				comments: []
			});

			$scope.title = "";
			$scope.link = "";
		};

		$scope.incrementUpvotes = function (post) {
			//console.log('In incrementUpvotes post object:', post);
			post.upvotes++;
		};

	}]);

app.controller('PostsController', [
	'$scope',
	'$stateParams',
	'posts',
	function($scope, $stateParams, posts){
		$scope.post = posts.posts[$stateParams.id];

		$scope.addComment = function(){
			$scope.post.comments.push({
				author: 'user',
				body: $scope.body,
				upvotes: 0
			});

			$scope.body = '';
		};
	}]);



app.factory('posts', [function(){

		var postFactory = {
			posts : []
		};

		return postFactory;

}]);

app.config([
	'$stateProvider', 
	'$urlRouterProvider',
	function($stateProvider, $urlRouterProvider){
		$stateProvider
			.state('home', {
				url: "/home",
				templateUrl: "/home.html",
				controller: "MainController"
			})
			.state('posts', {
				url:"/posts/{id}",
				templateUrl: "/posts.html",
				controller : "PostsController"
			});

		$urlRouterProvider.otherwise('home');


	}]);