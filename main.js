let form=document.querySelector('form');
			form.addEventListener("submit",function(e){
				e.preventDefault();
				let bill=parseInt(document.querySelector("#bill").value);
				let tips=parseInt(document.querySelector("#tips").value);
				var c=bill*tips/100;
				document.getElementById("RS").value=c;
				var d= c+bill;
				document.getElementById("Total-Amount").value=d;
			});