odlsummit.controller('mainController',['$scope', '$state', '$window','$mdDialog','$interval', function ($scope, $state,$window,$mdDialog,$interval) {


	$scope.myexpanded=false;
	$scope.changeexpanded= function()
	{
		$scope.myexpanded=!$scope.myexpanded;
	};



	$scope.names="names=['Igor Minar', 'Brad Green', 'Dave Geddes', 'Naomi Black', 'Greg Weber', 'Dean Sofer', 'Wes Alvaro', 'John Scott', 'Daniel Nadasi']";




	$scope.items=[1,2,3,4,5,6];


	$scope.actual=1;
	$scope.status = '  ';
	$scope.customFullscreen = false;






	$scope.redirectUrl=function(url,newTab) {




		newTab = newTab || false;

		$window.open(url, newTab ? "_blank" : "");

	};
	$scope.showAdvanced = function(ev,item) {

		if(item.notneedmodal)
		{


			$scope.redirectUrl(item.url);

		}

		else {


			if(item.fdio){



				console.log('fdio');
				$scope.actual = item;
				$mdDialog.show({
					controller: DialogController2,
					templateUrl: '../html/dialog2.tmpl.html',

					locals: {
						actual: $scope.actual
					},
					parent: angular.element(document.body),
					targetEvent: ev,
					clickOutsideToClose: true

				});


			}
			else{

				console.log('no fdio');

				$scope.actual = item;
				console.log('no fdio');
				$mdDialog.show({
					controller: DialogController,
					templateUrl: '../html/dialog1.tmpl.html',
					locals: {
						actual: $scope.actual
					},
					parent: angular.element(document.body),
					targetEvent: ev,
					clickOutsideToClose: true

				});


			}


		}

	};



	function DialogController($scope, $mdDialog,actual) {
		$scope.actual = actual;
		$scope.detail = false;
		$scope.mymodal =actual.mymodal;
		$scope.myname=actual.name;
		$scope.myimagemodal=actual.imagemodal;
		$scope.video=false;
		$scope.iframe=false;
		$scope.video2=false;
		$scope.video3=false;
		$scope.myvideo='images/vpp-ovs-vmware-odl-summit.mp4';
		$scope.hide = function() {
			$mdDialog.hide();
		};

		$scope.cancel = function() {
			$mdDialog.cancel();
		};

		$scope.answer = function(answer) {
			$mdDialog.hide(answer);
		};

		$scope.undo=function () {

			$scope.detail=false;
			$scope.myname=actual.myname;
			$scope.mymodal=actual.mymodal;

		};

		$scope.undoVideo=function () {

			$scope.video=false;
			$scope.detail=false;
			$scope.video2=false;




		};



		$scope.undoVideo2=function () {

			$scope.video3=false;
			$scope.video2=true;




		};

		$scope.redirectUrl=function(url,newTab) {


			console.log('hiiiii'+url);
			newTab = newTab || false;

			$window.open(url, newTab ? "_blank" : "");

		};

		$scope.goToVideo=function(){

			$scope.video=true;


		};


		$scope.goToVideo2=function(ac){

			$scope.video=ac.first;
			$scope.video2=!ac.first;
			$scope.detail=true;
			$scope.myname=ac.name;
			$scope.myimagemodal=ac.imagemodal;


		};


		$scope.goToVideo3=function(ac){

			$scope.video3=true;
			$scope.video2=false;



		};



	}





	function DialogController2($scope, $mdDialog,actual) {
		$scope.video=false;
		$scope.answer = function(answer) {
			$mdDialog.hide(answer);
		};



		$scope.hide = function() {
			$mdDialog.hide();
		};

		$scope.cancel = function() {
			$mdDialog.cancel();
		};


		$scope.redirectUrl=function(url,newTab) {


			console.log('hiiiii'+url);
			newTab = newTab || false;

			$window.open(url, newTab ? "_blank" : "");

		};

		$scope.goToVideo=function(){

			$scope.video=true;


		};

		$scope.undoVideo=function() {

			$scope.video=false;

		};




	}



	$scope.pentagons = [

	{

		mytransform:" transform: translate(-50%, -50%); top: calc(50vh - 16vw); left:50vw; ",
		image:"images/pceportal.png",
		imagemodal:"images/pcemodal.png",

		name:"PCE ",
		show:true,
		notneedmodal: false,
		fdio:false,

		mymodal:

		[

			{
				name:'Get the code!',
				image: 'images/githublogodef.png',
				ref:'https://github.com/CiscoDevNet/pceof-gui'

			},{
				name:' Run it! ',
				image: 'images/dclouddef.png',
				ref:'http://v847user1:867c31@64.100.11.52:15003/pce/build/index.html#/pce/topology'

			}

		],

		video:'images/videopathman.mp4',

		architecture:'https://raw.githubusercontent.com/CiscoDevNet/pceof-gui/master/screenshots/pce-of-app-picture.jpg'

	}, {
		mytransform:"transform: translate(-50%, -50%) rotate(90deg);top: 49vh; left: 66vw;",
		image:"images/fdiologo.png",
		imagemodal:"images/fdiomodal.png",
		name:"FD.IO ",
		show:true,
		fdio:true,

		notneedmodal: false,
		url:'https://wiki.opnfv.org/display/fds',
		mymodal: [
			{
				name:' See video! ',
				image: 'images/videologo.png',
				ref:'images/vpp-ovs-vmware-odl-summit.mp4'


			},{
			name:'FastDataStacks',
			image: 'images/fds.png',
			ref:'https://wiki.opnfv.org/display/fds'


		}



		],


		video:'images/vpp-ovs-vmware-odl-summit.mp4',
		trythat:'hi'

	}, {

		mytransform:"transform: translate(-50%, -50%) rotate(-90deg);top: 49vh ; left: 34vw  ; ",
		image:"images/dcloudcircle.png",
		imagemodal:"images/dcloudmodal.png",
		name: "DCLOUD",
		show:true,
			fdio:false,
			notneedmodal: true,

		url:'https://dcloud.cisco.com/',
		mymodal: [{
			name:'see instructions on github',
			image: 'images/githublogodef.png',
			ref:'https://www.google.com'

		},{
			name:' Run it! ',
			image: 'images/dclouddef.png',
			ref:'https://dcloud.cisco.com/'

		}


		],

		video:'images/videopathman.mp4',

		trythat:'hi'
	},{

		mytransform:"transform: rotate(45deg);top: calc(51vh - 17vw); left: calc(57vw  );",
		image:"images/yangmanportal.png",
		imagemodal:"images/yangmanmodal.png",
		name:"YANGMAN ",
		architecture:'https://raw.githubusercontent.com/CiscoDevNet/yangman/master/images/yangman-arc.png',
		show:true,fdio:false,
		notneedmodal: false,
		mymodal: [{
			name:'See information!',
			image: 'images/githublogo.png',
			ref:'https://github.com/CiscoDevNet/yangman'

		},{
			name:' Run it! ',
			image: 'images/dclouddef.png',
			ref:'http://v847user1:867c31@64.100.11.52:15002/index.html#/yangman/index'

		}

		],

		video:'images/vpp-ovs-vmware-odl-summit.mp4',

		trythat:'hi'

	}, {
		mytransform:"transform: rotate(-45deg);top: calc(51vh - 17vw); left: 35vw;",
		image:"images/clusterlogo.png",
		imagemodal:"images/clustermodal2.png",
		name:"CLUSTER APP ",
		show:true,fdio:false,
		notneedmodal: false,
		architecture:'https://raw.githubusercontent.com/CiscoDevNet/pathman-sr/master/demo/pathman-SR-arch.png',
		mymodal: [


			{
			name:'Get the code!',
			image: 'images/githublogodef.png',
			ref:'https://github.com/CiscoDevNet/ODL-Cluster-App'

		},{
			name:' Run it! ',
			image: 'images/dclouddef.png',
			ref:'http://v154user1:eecf64@64.100.10.30:15002/index.html'

		}
		],

		video:'images/clusterapp.mp4',

		trythat:'hi'


	}, {
		mytransform:"transform: rotate(135deg);top: calc(50vh + 6vw); left: calc(58vw  );",
		image:"images/pahtmanlogo.png",
		imagemodal:"images/pathmansrmodal.png",
		name:"PATHMAN SR ",
		show:true,fdio:false,
		notneedmodal: false,
		architecture:'https://raw.githubusercontent.com/CiscoDevNet/pathman-sr/master/demo/pathman-SR-arch.png',
		mymodal: [{
			name:'Get the code!',
			image: 'images/dclouddef.png',
			ref:'https://github.com/CiscoDevNet/pathman-sr'

		},{
			name:' Run it! ',
			image: 'images/dclouddef.png',
			ref:'http://v54user1:b4fb54@64.100.10.151:15002/cisco-ctao/apps/pathman_sr/index.html'

		}

		],


		video:'images/videopathman.mp4',

		trythat:'hi'

	},{

		mytransform:"transform: rotate(-135deg);top: calc(50vh + 6vw); left: calc(34vw  );",
		image:"images/iotlogoreverse.png",
		imagemodal:"images/iotmodal.png",
		name:"IOT  ",
		show:false,fdio:false,
		notneedmodal: false,
		mymodal:[
			{
				name:'IOTDM',
				image:"images/IoTDMLogo.png",
				imagemodal:"images/itodmmodaldef.png",
				modal:
				[
					{

						name:'See the video!',
						image: 'images/videologo.png',
						ref:'https://www.youtube.com/watch?v=JZySav5wlnY'

					}

				],
				first:true,


			},

			{
				name:'DEPA',
				image:"images/depamodaldef.png",
				imagemodal:"images/logodepaMODAL.png",
				modal:
					[
						{

							name:'See the video!',
							image: 'images/videologo.png',
							ref:'https://www.youtube.com/watch?v=JZySav5wlnY'

						}

					],
				first:false,




			}],

			video:'images/iotdmvideo.mp4',

			video2:'images/depav2.mp4',






			trythat:'hi'


	}, {
		mytransform:" transform: rotate(180deg); top: calc(50vh + 11vw); left: 46vw;",
		image:"images/netacllogoreverse.png",
		name:"netACLv2  ",
		imagemodal:"images/netaclmodal.png",
		show:true,fdio:false,
		notneedmodal: false,
		architecture:'https://raw.githubusercontent.com/CiscoDevNet/netACL/master/images/netacl-arch-picture.jpg',
		mymodal: [{
			name:'Get the code!',
			image: 'images/githublogodef.png',
			ref:'https://github.com/CiscoDevNet/netACL'

		},{
			name:' Run it! ',
			image: 'images/dclouddef.png',
			ref:'http://v54user1:b4fb54@64.100.10.151:15003/cisco-ctao/apps/acl/index.html'

		}

		],

		video:'images/netacl.mp4',

		trythat:'hi'


	}];







}]);
