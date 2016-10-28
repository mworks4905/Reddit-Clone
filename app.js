var app = angular.module('myApp', [])

app.controller('MainController', ['$scope', function($scope){
  $scope.view = {}
  $scope.view.search = ''

  $scope.estates = [
    {
    id: 0,
    title: 'Minas Tirith ',
    author: 'Lord of the Real Estates', image:'http://static.directmatin.fr/sites/default/files/styles/image_880_495/public/mina_tirith.jpg?itok=vuj_QbG5',
    description:'Great location in the heart of Gondor! There’s lots of space to have friends and family over, plus it comes with its own defense catapults. Recently fallen on hard times which has brought the price down to an absolute steal!!! Don’t miss this opportunity to snag a great castle at below market price ',
    date: 1466954992000,
    votes: 8,
    comments: []}
  ,{
    id: 1,
    title: 'Hobbiton',
    author: 'F&S Estates', image:'http://farm1.nzstatic.com/_proxy/imageproxy_1y/serve/this-isnt-fantasy-its-hobbiton---just-as-it-was-created-for-peter-jacksons-movies.jpg?height=406&outputformat=jpg&quality=85&source=2153445&transformationratio=1.3&transformationsystem=autoboxfit&width=720&securitytoken=1961B45B30004B5997220A2BE4105489',
    description:'A cute and quiet neighborhood located in the Shire where everyone knows your name. Houses are eco friendly and extremely cozy. You’ll be paying a pretty penny but you definitely will not regret it!', date: 1477495793000,
    votes: 0,
    comments: []}
  ,{
    id: 2,
    title:'Fangorn Forest',
    author:'TRelestate', image:'http://www.thelandofshadow.com/wp-content/uploads/2016/07/FangornLarge1.jpg',
    description:'If you’re the outdoorsy type then this is the place for you! Secluded and remote literally no one will find you. The “neighbors” keep to themselves as long as you don’t go trying to capitalize on the beautiful old growth forest. Priced to sell!!!',
    date: 1441873740000,
    votes: -100,
    comments: []}
  ,{
    id: 3,
    title:'Rivendell',
    author:'Elven Estates', image:'http://sagesselfique.s.a.pic.centerblog.net/080217073050189811730600.jpg',
    description:'Elegant old world architecture, definitely built to last! You will not be disappointed with the amazing scenic views of the surrounding mountainside and lush forest, not to mention several beautiful waterfalls. Currently sitting at the very reasonable price considering the craftsmanship of buildings and surrounding grounds.',
    date: 1476120540000,
    votes: 15,
    comments: []}
  ]


  $scope.newPost = function(){
    var date = new Date()
    $scope.estate.date = date
    $scope.estate.votes = 0
    $scope.estate.id = $scope.estates.length
    $scope.estate.comments = []

    $scope.estates.push($scope.estate)
    $scope.estate = {}
    // console.log($scope.estates);
  }

  $scope.comment = {}

  $scope.newComment = function(id){
    for (var i = 0; i < $scope.estates.length; i++) {

      if($scope.estates[i].id === id){
        $scope.estates[i].comments.push($scope.comment)
        $scope.comment = {}
      }
    }
  }




}])
