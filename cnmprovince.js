document.addEventListener("DOMContentLoaded",function(){
	var province = document.getElementById("province");
	window.onload=function(){
		$.ajax({
			url: 'https://dev-online-gateway.ghn.vn/shiip/public-api/master-data/province',
			headers: {
				'token': 'ae4d3715-cfd3-11eb-86d6-d6ee83481554',
				'Content-Type': 'application/json'
			},
			method: 'GET',
			dataType: 'json',
			success:function(response){
				console.log(response.data);
				var str= "<option selected>Tỉnh thành</option>";
				for(var i=0;i<response.data.length;i++){
				str=str+"<option class='ProvinceID' data-province='"+response.data[i].ProvinceID+"'> "+response.data[i].ProvinceName + "</option>"
			}
			province.innerHTML = str;
			}
		});
	}
},false)
function changeFunc(){
	var selectBox = document.getElementById("province");
	var SelectValue = selectBox.options[selectBox.selectedIndex].getAttribute('data-province');
	var district =  document.getElementById("district");
	$.ajax({
		url: ' https://dev-online-gateway.ghn.vn/shiip/public-api/master-data/district',
		headers: {
				'token': 'ae4d3715-cfd3-11eb-86d6-d6ee83481554',
				'Content-Type': 'application/json'
			},
			method: 'GET',
			dataType: 'json',
			success:function(response){
				console.log(response.data);
				var str="<option selected>Quân huyện</option>";
				for(var i=0;i<response.data.length;i++){
					if(response.data[i].ProvinceID == SelectValue)
					str=str+"<option class='districtId' data-district='"+response.data[i].DistrictID +"'> "+ response.data[i].DistrictName+"</option>"
			}
			district.innerHTML = str;
			}
		});
	};
	
function changFuncDistrict(){
	var selectBox = document.getElementById("district");
	var selectedValue = selectBox.options[selectBox.selectedIndex].getAttribute('data-district');
	$.ajax({
		url: 'https://dev-online-gateway.ghn.vn/shiip/public-api/master-data/ward?district_id='+selectedValue,
		headers: {
				'token':'ae4d3715-cfd3-11eb-86d6-d6ee83481554',
				'content-Type':'application/json'
			},
			method: 'GET',
			dataType: 'json',
			success:function(response){
				console.log(response.data);
				var str="<option selected>Phường xã</option>";
				for(var i=0;i<response.data.length;i++){
					str=str+ "<option class='wardId'> "+ response.data[i].WardName +"</option>";
					}
			ward.innerHTML = str;
			}
		});
	};
