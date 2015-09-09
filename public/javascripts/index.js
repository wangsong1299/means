$(document).ready(function(){
	$("#submit").click(function(){
		var name =$("#name").val();
		var age = $("#age").val();
		console.log(name+age);

	     $.ajax({
	          type : "POST",
	          url : "http://127.0.0.1:3000/submit",
	          data:{'name':name,'age':age},
	          dataType: "json",  
	          success : function(data) {    
	            alert(data);           
	          }
	      })


	})
	})