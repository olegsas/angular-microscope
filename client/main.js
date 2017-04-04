import angular from 'angular';
import angularMeteor from 'angular-meteor';
import postsList from '/client/components/posts/posts_list';

angular.module('microscope', [
    angularMeteor,
    postsList.name
]);