function suicideWebsite() {
	window.alert("Please remember. You should never, no matter what, take you life. It is something that you will regret. Your life can always get better.");
}
// The code from here onward is for the navagation box.
var x = document.getElementById("demo");
var displayInfo = document.getElementById("information");
var selectedCountry = document.getElementById("selected");
        
function getLocation() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(showPosition);
	} else {
		x.innerHTML = "Geolocation is not supported by this browser.";
	}
}
        
function showPosition(position) {
	x.innerHTML = "Latitude: " + position.coords.latitude + 
	"<br>Longitude: " + position.coords.longitude; 
}
        
function displayHK() {
	displayInfo.innerHTML = '<h4>Country: Hong Kong</h4><p>Telephone code: +852</p><p>Emergency services: 999</p><p>Travel Industry Council of Hong Kong: 2807 0707</p><p>Hong Kong International Airport: 2181 8888</p><p>Government enquiry: 1083</p><p>Telephone directory enquiries: 1081</p>';
    selectedCountry.innerHTML = 'Hong Kong';
}
        
function displayChina() {
	displayInfo.innerHTML = '<h4>Country: China</h4><p>Telephone code: +86</p><p>Police: 110</p><p>Ambulance: 120</p><p>Fire: 119</p>';
    selectedCountry.innerHTML = 'China';
}
        
function displayTaiwan() {
	displayInfo.innerHTML = '<h4>Country: Taiwan</h4><p>Telephone code: +886</p><p>Police: 110</p><p>Ambulance/Fire: 119</p><p>Alternative Emergency Hotline: 112</p><p>Tourist information hotline: 2 2717 3737</p><p>Toll free travel information center: 0800 011 765';
    selectedCountry.innerHTML = 'Taiwan';
}
        
function displayJapan() {
	displayInfo.innerHTML = '<h4>Country: Japan</h4><p>Telephone code: +81</p><p>Police: 110</p><p>Emergency Hotline: 119</p><p>Emergency at sea: 118</p><p>Tourist information hotline: 0570 000 911</p>';
    selectedCountry.innerHTML = 'Japan';
}

function displayUSA() {
	displayInfo.innerHTML = '<h4>Country: USA</h4><p>Telephone code: +1</p><p>Emergency Hotline: 911</p><p>Suicide Prevention Hotline: (800) 273-TALK (8255)</p><p>Tourist information hotline: 2-2717-3737</p><p>Poison Control: (800) 222-1222</p>';
    selectedCountry.innerHTML = 'United States of America';
}
        
function displayAustralia() {
	displayInfo.innerHTML = '<h4>Country: Australia</h4><p>Telephone code: +61</p><p>Emergency hotline: 000</p><p>Police Hotline: 131 444</p><p>Tourist information hotline: 2 9360 1111</p><p>Suicide Prevention Hotline: 1300 364 566</p>';
    selectedCountry.innerHTML = 'Australia';
}
