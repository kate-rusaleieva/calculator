document.addEventListener("DOMContentLoaded",
function(){
new Vue({
	el:"#calc",
	data:function(){
		return{
			value1:" ",
			value2:" ",
			value3:" ",
			diceResults:[]
		}
		
	},
	methods:{
			onClick:function(e){
				switch(e.srcElement.id){
					case "0":
					{
						var value = parseFloat(value1.value) * parseFloat(value2.value);
					  	var name="Произведение значений";
					  	value3.value= value
					}
					break;
					case "1":
					{
						var value = parseFloat(value1.value) - parseFloat(value2.value);
					  	var name="Разность значений";
					  	value3.value= value
					}
					break;
					case "2":
					{
						var value = parseFloat(value1.value) / parseFloat(value2.value);
					 	var name="Частное значений";
					 	value3.value= value
					}
					break;
					case "3":
					{
						var value = parseFloat(value1.value) + parseFloat(value2.value);
					  	var name="Сумма значений";
					  	value3.value= value
					}
				}
				this.diceResults.push({
						name: name,
						value:value
					})
			}
				
			}
		
  })
});
