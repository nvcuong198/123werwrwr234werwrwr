document.addEventListener("DOMContentLoaded",function(){
	var province = document.getElemantById("province1");
	window.onload=function(){
		$.ajax({
			url: 'https://dev-online-gateway.ghn.vn/shiip/public-api/master-data/province',
			headers: {
				'token':'ae4d3715-cfd3-11eb-86d6-d6ee83481554',
				'content-Type':'application/json'
			},
			method: 'GET',
			dataType: 'json',
			success:function(response){
				console.log('succes: ');
				console.log(response.data);
				var str="<option selected>Tinh thanh</option>";
				for(var i=0;i<response.data.lenght;i++){
				console.log(response.data[i].ProvinceName);
				str=str+"<option class="provinceId" data-province='"+response.data[i].ProvinceID+"'> "+ "</option>"
			}
			province.innerHTML = str;
			}
		});
	}
}.false)
function changeFunc(){
	var selectBox =document.getElemantById("province1")
	var SelectValue = selectBox.options[selectBox.selectedIndex].getAttribute('data-province');
	var district = document.getElemantById('district');
	$.ajax({
		url: 'https://dev-online-gateway.ghn.vn/shiip/public-api/master-data/district'
		headers: {
				'token':'ae4d3715-cfd3-11eb-86d6-d6ee83481554',
				'content-Type':'application/json'
			},
			method: 'GET',
			dataType: 'json',
			success:function(response){
				var str="<option selected>Quan huyen</option>";
				for(var i=0;i<response.data.lenght;i++){
					if(response.data[i].ProvinceID == selectedValue)
					str=str+"<option class='districtId' data-district='"+response.data[i].DistrictID +"'> "+ "</option>"
			}
			district.innerHTML = str;
			}
		});
	};
	
function changeFuncDistrit(){
	var selectBox = document.getElemantById("district1");
	var selectedValue = selectBox.options[selectBox.selectedIndex].getAttribute('data-district');
	var ward=document.getElemantById('ward');
	$.ajax({
		url: 'https://dev-online-gateway.ghn.vn/shiip/public-api/master-data/ward?district_id='+selectedValue,
		headers: {
				'token':'ae4d3715-cfd3-11eb-86d6-d6ee83481554',
				'content-Type':'application/json'
			},
			method: 'GET',
			dataType: 'json',
			success:function(response){
				var str="<option selected>Phuong xa</option>";
				for(var i=0;i<response.data.lenght;i++){
					str=str+"<option class='wardId' data-ward='"+response.data[i].WardCode+"'> "+ response.data[i].WardName +"</option>"
			}
			ward.innerHTML = str;
			}
		});
	};