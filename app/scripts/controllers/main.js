'use strict';

/**
 * @ngdoc function
 * @name anatomyApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the anatomyApp
 */
angular.module('anatomyApp')
  .controller('MainCtrl', function ($scope) {
    $scope.scene = {
	        scene: 'be=19Ws',
	        poster: 'http://lifeletters-education.s3.amazonaws.com/anatomy-test.png',
	        init: {"eye":{"x":14.202760578233727,"y":-59.621763245938496,"z":-2.9583409841417865},"look":{"x":7.569922821776217,"y":-67.69964756381691,"z":3.7228197319024927},"up":{"x":-0.42380384249610253,"y":0.8086520033562826,"z":0.4085681607054695},"dist":12.405025605379766},
	        camera: [
	        	{'eye':{'x':13.89779063625143,'y':-64.71780069976309,'z':-2.0823764074809445},'look':{'x':7.319029194948756,'y':-67.26696538657485,'z':3.6197894659856744},'up':{'x':-0.16125012725226057,'y':0.9791112332847622,'z':0.1269668827557901}},
	        	{'eye':{'x':14.699672978391659,'y':-64.59720181328625,'z':-0.9290013794208152},'look':{'x':7.319029194948756,'y':-67.26696538657485,'z':3.619789465985674},'up':{'x':-0.19117298005784997,'y':0.9761708908648636,'z':0.10641561691736882},'dist':9.071551044368707}
	        ],
	        interact: {"eye":{"x":14.355763450566263,"y":-65.5369007922685,"z":-0.13960600766222958},"look":{"x":4.853250726487923,"y":-67.0031130087763,"z":-0.20598667471605625},"up":{"x":-0.0732527862692764,"y":0.99751794991056,"z":-0.010330043841503517},"dist":9.615192807638648}
	        // camera: {
	        // 	'eye':{'x':13.9,'y':-64.7,'z':-2.1},
	        // 	'look':{'x':7.3,'y':-67.3,'z':3.6},
	        // 	'up':{'x':-0.2,'y':1.0,'z':0.1}
	        // }
	      };
  });