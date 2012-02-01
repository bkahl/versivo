$().ready(function(){
	var chooseFrom = ['image1.png', 'image2.png', 'image3.png', 'image4.png', 'image5.png', 'image6.png', 'image7.png', 'image8.png', 'image9.png', 'image10.png', 'image11.png'];

	$(function() {
	
		  var count = 0;
		  var howDeep;
		  var img = shuffle(chooseFrom);
		  var randomImg;
		  var getURL = location.href;
		  getURL = getURL.split('/');
		  
		  for(i=getURL.length-1; i>0; i--){
			var directory = getURL.pop();
			if(directory != "mobile"){
				count++;
			}else {
				count = count-1;
				if(count == 0){
					howDeep = "images/";
				}else if(count == 1){
					howDeep = "../images/";
				}else if(count == 2){
					howDeep = "../../images/";
				}else if(count == 3){
					howDeep = "../../../images/";
				}
			}
		  }
		  randomImg = howDeep + img.shift();
		  $('#pageImg').attr('src', randomImg);

	});

	function shuffle(a) {
		for (var i = a.length; i > 0; i--) {
			var j = Math.floor(Math.random() * i);
			var temp = a[i - 1];
			a[i - 1] = a[j];
			a[j] = temp;
		}
		return a;
	}
});