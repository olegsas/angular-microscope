import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from '/client/components/posts/posts_list.html';

class PostsListCtrl {
  constructor($scope){
    $scope.viewModel(this);
    this.postsData = [
      {
    title: 'Introducing Telescope',
    url: 'http://sachagreif.com/introducing-telescope/'
  }, 
  {
    title: 'Meteor',
    url: 'http://meteor.com'
  }, 
  {
    title: 'The Meteor Book',
    url: 'http://themeteorbook.com'
  }
    ];
    // this.helpers({
    //   posts: this.postsData
    // });
  }
}

export default angular.module('postsList', [angularMeteor])
  .component('postsList', {
    templateUrl: '/client/components/posts/posts_list.html',
    controller: PostsListCtrl
  });


// var postsData = [
//   {
//     title: 'Introducing Telescope',
//     url: 'http://sachagreif.com/introducing-telescope/'
//   }, 
//   {
//     title: 'Meteor',
//     url: 'http://meteor.com'
//   }, 
//   {
//     title: 'The Meteor Book',
//     url: 'http://themeteorbook.com'
//   }
// ];
// Template.postsList.helpers({
//   posts: postsData
// });