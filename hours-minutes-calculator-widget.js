
var DollarTimesWidget = function() {
	document.getElementById("dollartimes-hours-minutes-calculator-widget").innerHTML = ' <div class="dollar-times-widget">   <div class="desktop">      <div class="hms-calc widget-content">   <div class="widget-head">Hours, Minutes, and Seconds Calculator</div>     <div class="widget-blurb">Add and convert hours, minutes, and seconds</div>   <div class="calc-content">     <div class="calc-box">   <table class="calc-table">    <tbody id="dollartimes-hms-table">     <tr>      <td>Hours</td>         <td>Minutes</td>         <td>Seconds</td>         <td></td>        </tr>     <tr id="dollartimes-hms-row0">      <td><input class="dt-form-control width-70" type="text" value="0" id="dollartimes-hms-h0"></td>      <td><input class="dt-form-control width-70" type="text" value="0" id="dollartimes-hms-m0"></td>      <td><input class="dt-form-control width-70" type="text" value="3600" id="dollartimes-hms-s0"></td>      <td><button id="dollartimes-hms-remove0" data-rownum="0" class="remove-row">x</button></td>        </tr>                <tr id="dollartimes-hms-function-row">      <td colspan="4" class="center-text">       <button id="dollartimes-hms-clear" class="btn-success">Clear</button>       <button id="dollartimes-hms-add-row" class="btn-success">Add Row</button>      </td>     </tr>     <tr class="button-row">      <td colspan="4">       <button class="blue-button" id="dollartimes-hms-go">Calculate</button>       <div class="appear-below">(results appear below)</div>      </td>     </tr>    </tbody>   </table>  </div>    <div class="calc-results-outer">   <div class="calc-results" id="dollartimes-hms-results"></div>  </div>   </div>   <div class="on-site-link">    <a href="http://www.dollartimes.com/calculators/hours-minutes-calculator.htm">Hours, Minutes, Seconds Calculator</a>   </div>    </div>   </div>  </div>  ';
	var css = '.dollar-times-widget * {  font-family: Verdana, Helvetica;  box-sizing: border-box;  color: #333; }.dollar-times-widget h1, .dollar-times-widget h2, .dollar-times-widget h3, .dollar-times-widget h4, .dollar-times-widget h5, .dollar-times-widget h6 {  margin: 0;  padding: 0; }.dollar-times-widget table {  border-spacing: 0px;  border-collapse: collapse; }.dollar-times-widget .dt-form-control-sm {  height: 26px;  padding: 2px 6px;  color: #555;  border: 1px solid #CCC;  border-radius: 4px;  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.075) inset;  transition: border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s; }  .dollar-times-widget .dt-form-control-sm:focus {    border-color: #66AFE9;    outline: 0px none;    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.075) inset, 0px 0px 8px rgba(102, 175, 233, 0.6); }  .dollar-times-widget .dt-form-control-sm:disabled {    background-color: #eee;    color: #ccc; }.dollar-times-widget .dt-form-control {  height: 34px;  padding: 6px 12px;  color: #555;  border: 1px solid #CCC;  border-radius: 4px;  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.075) inset;  transition: border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s; }  .dollar-times-widget .dt-form-control:focus {    border-color: #66AFE9;    outline: 0px none;    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.075) inset, 0px 0px 8px rgba(102, 175, 233, 0.6); }  .dollar-times-widget .dt-form-control:disabled {    background-color: #eee;    color: #ccc; }.dollar-times-widget button {  padding: 6px 12px;  margin-bottom: 0px;  font-size: 14px;  font-weight: 400;  line-height: 1.42857;  text-align: center;  vertical-align: middle;  cursor: pointer;  border: 1px solid transparent;  border-radius: 4px;  background-color: #ddd; }  .dollar-times-widget button:hover {    background-color: #ccc; }  .dollar-times-widget button:disabled {    background-color: #eee;    color: #ccc; }    .dollar-times-widget button:disabled:hover {      background-color: #eee; }.dollar-times-widget .btn-small {  padding: 2px 6px;  font-size: 13px; }.dollar-times-widget .btn-primary {  color: #FFF;  background-color: #337AB7; }  .dollar-times-widget .btn-primary:hover {    background-color: #286090; }.dollar-times-widget .btn-success {  color: #FFF;  background-color: #5cb85c; }  .dollar-times-widget .btn-success:hover {    background-color: #449d44; }.dollar-times-widget .btn-danger {  color: #FFF;  background-color: #d9534f; }  .dollar-times-widget .btn-danger:hover {    background-color: #c9302c; }.dollar-times-widget .blue-button {  background-color: #4d90fe;  color: white; }  .dollar-times-widget .blue-button:hover {    background-color: #4482e6; }.dollar-times-widget .clear-fix:after {  content: "";  display: table;  clear: both; }.calc-page .calc-box, .dollar-times-widget .calc-box {  padding: 10px 0 15px;  font-size: 14px; }.calc-page .calc-table, .dollar-times-widget .calc-table {  margin: 0 auto; }  .calc-page .calc-table input, .dollar-times-widget .calc-table input {    font-size: 16px;    padding: 6px 6px; }  .calc-page .calc-table select, .dollar-times-widget .calc-table select {    font-size: 16px; }  .calc-page .calc-table td, .dollar-times-widget .calc-table td {    padding: 8px 5px;    vertical-align: middle; }  .calc-page .calc-table .right-cell, .dollar-times-widget .calc-table .right-cell {    text-align: right; }  .calc-page .calc-table .unit-cell, .dollar-times-widget .calc-table .unit-cell {    padding-right: 0;    text-align: right; }  .calc-page .calc-table .cell-label, .dollar-times-widget .calc-table .cell-label {    padding: 0 0 3px 0;    font-weight: bold; }.calc-page .button-row, .dollar-times-widget .button-row {  padding: 10px 0 0 0; }  .calc-page .button-row button, .dollar-times-widget .button-row button {    width: 100%;    border-radius: 5px;    font-size: 16px; }  .calc-page .button-row .appear-below, .dollar-times-widget .button-row .appear-below {    margin-top: 5px;    font-size: 80%;    text-align: center; }.calc-page .txt-90, .dollar-times-widget .txt-90 {  font-size: 90%; }.calc-page .txt-80, .dollar-times-widget .txt-80 {  font-size: 80%; }.calc-page .txt-120b, .dollar-times-widget .txt-120b {  font-size: 120%;  font-weight: bold; }.calc-page .calc-results, .calc-page .inline-calc-results, .dollar-times-widget .calc-results, .dollar-times-widget .inline-calc-results {  font-size: 14px;  word-wrap: break-word;  display: none; }  .calc-page .calc-results .error, .calc-page .inline-calc-results .error, .dollar-times-widget .calc-results .error, .dollar-times-widget .inline-calc-results .error {    color: red; }  .calc-page .calc-results p:first-child, .calc-page .inline-calc-results p:first-child, .dollar-times-widget .calc-results p:first-child, .dollar-times-widget .inline-calc-results p:first-child {    margin-top: 0; }  .calc-page .calc-results p:last-child, .calc-page .inline-calc-results p:last-child, .dollar-times-widget .calc-results p:last-child, .dollar-times-widget .inline-calc-results p:last-child {    margin-bottom: 0; }  .calc-page .calc-results .dt-results-table, .calc-page .inline-calc-results .dt-results-table, .dollar-times-widget .calc-results .dt-results-table, .dollar-times-widget .inline-calc-results .dt-results-table {    display: table;    border-collapse: collapse; }  .calc-page .calc-results .dt-results-row, .calc-page .inline-calc-results .dt-results-row, .dollar-times-widget .calc-results .dt-results-row, .dollar-times-widget .inline-calc-results .dt-results-row {    display: table-row; }  .calc-page .calc-results .dt-results-cell, .calc-page .inline-calc-results .dt-results-cell, .dollar-times-widget .calc-results .dt-results-cell, .dollar-times-widget .inline-calc-results .dt-results-cell {    display: table-cell;    border: 1px solid #ccc;    background-color: #fff;    padding: 3px 8px;    text-align: center; }  .calc-page .calc-results .dt-results-head, .calc-page .inline-calc-results .dt-results-head, .dollar-times-widget .calc-results .dt-results-head, .dollar-times-widget .inline-calc-results .dt-results-head {    font-weight: bold; }  .calc-page .calc-results .dt-right-cell, .calc-page .inline-calc-results .dt-right-cell, .dollar-times-widget .calc-results .dt-right-cell, .dollar-times-widget .inline-calc-results .dt-right-cell {    text-align: right; }.calc-page .inline-calc-results, .dollar-times-widget .inline-calc-results {  margin-top: 25px; }.calc-page .lineh-15, .dollar-times-widget .lineh-15 {  line-height: 1.5em; }.calc-page .font-16, .dollar-times-widget .font-16 {  font-size: 16px; }.calc-page .font-18, .dollar-times-widget .font-18 {  font-size: 18px; }.calc-page .center-text, .dollar-times-widget .center-text {  text-align: center; }.calc-page .right-text, .dollar-times-widget .right-text {  text-align: right; }.calc-page .width-190, .dollar-times-widget .width-190 {  width: 190px; }.calc-page .width-150, .dollar-times-widget .width-150 {  width: 150px; }.calc-page .width-120, .dollar-times-widget .width-120 {  width: 120px; }.calc-page .width-110, .dollar-times-widget .width-110 {  width: 110px; }.calc-page .width-100, .dollar-times-widget .width-100 {  width: 100px; }.calc-page .width-90, .dollar-times-widget .width-90 {  width: 90px; }.calc-page .width-80, .dollar-times-widget .width-80 {  width: 80px; }.calc-page .width-70, .dollar-times-widget .width-70 {  width: 70px; }.calc-page .width-60, .dollar-times-widget .width-60 {  width: 60px; }.calc-page .width-50, .dollar-times-widget .width-50 {  width: 50px; }.calc-page .width-40, .dollar-times-widget .width-40 {  width: 40px; }.calc-page .width-30, .dollar-times-widget .width-30 {  width: 30px; }.calc-page .pad-2, .dollar-times-widget .pad-2 {  padding-left: 2px;  padding-right: 2px; }.phone .calc-page .calc-box, .phone .dollar-times-widget .calc-box {  width: 100%; }.desktop .calc-page .calc-box, .desktop .dollar-times-widget .calc-box {  width: 300px; }.phone .dt-desktop-only, .dollar-times-widget .dt-desktop-only {  display: none !important; }.phone .dt-results-table, .dollar-times-widget .dt-results-table {  width: 100%; }.phone .calc-results-outer, .dollar-times-widget .calc-results-outer {  display: block; }.phone .unit-calc .calc-results, .dollar-times-widget .unit-calc .calc-results {  text-align: center; }.calc-page .hms-calc td, .calc-page .timesheet-calc td, .dollar-times-widget .hms-calc td, .dollar-times-widget .timesheet-calc td {  text-align: center;  padding: 10px 4px 0 4px; }  .calc-page .hms-calc td .remove-row, .calc-page .timesheet-calc td .remove-row, .dollar-times-widget .hms-calc td .remove-row, .dollar-times-widget .timesheet-calc td .remove-row {    display: none;    padding: 2px 5px;    font-weight: bold;    background-color: transparent; }    .calc-page .hms-calc td .remove-row:hover, .calc-page .timesheet-calc td .remove-row:hover, .dollar-times-widget .hms-calc td .remove-row:hover, .dollar-times-widget .timesheet-calc td .remove-row:hover {      background-color: #ccc; }.calc-page .hms-calc #dollartimes-timesheet-function-row td, .calc-page .hms-calc #dollartimes-hms-function-row td, .calc-page .timesheet-calc #dollartimes-timesheet-function-row td, .calc-page .timesheet-calc #dollartimes-hms-function-row td, .dollar-times-widget .hms-calc #dollartimes-timesheet-function-row td, .dollar-times-widget .hms-calc #dollartimes-hms-function-row td, .dollar-times-widget .timesheet-calc #dollartimes-timesheet-function-row td, .dollar-times-widget .timesheet-calc #dollartimes-hms-function-row td {  padding: 20px 4px 0; }.calc-page .swap-link, .dollar-times-widget .swap-link {  color: #0000ff; }.calc-page .tip-calc .calc-results .tip-table, .dollar-times-widget .tip-calc .calc-results .tip-table {  display: table;  margin: 0 auto; }.calc-page .tip-calc .calc-results .row, .dollar-times-widget .tip-calc .calc-results .row {  display: table-row; }.calc-page .tip-calc .calc-results .cell, .dollar-times-widget .tip-calc .calc-results .cell {  display: table-cell;  text-align: right;  padding: 0 5px 10px; }.calc-page .temperature-calc .calc-results, .dollar-times-widget .temperature-calc .calc-results {  display: block; }.desktop .timesheet-calc td input, .desktop .timesheet-calc td select {  font-size: 14px; }.dollar-times-widget {  overflow: hidden; }  .dollar-times-widget .widget-head {    font-size: 24px;    text-align: center; }  .dollar-times-widget .widget-content {    background-color: #DAE6F2;    border-radius: 5px;    padding: 10px 0; }  .dollar-times-widget .on-site-link {    padding: 10px 0;    font-size: 12px;    text-align: center; }  .dollar-times-widget .widget-blurb {    text-align: center;    padding: 5px 10px 0;    font-style: italic;    font-size: 12px; }  .dollar-times-widget .calc-results {    padding: 0 15px 10px; }  .dollar-times-widget .phone .widget-content {    width: 100%; }  .dollar-times-widget .desktop .widget-content {    width: 300px; }  .dollar-times-widget .font-18 {    font-size: 18px; }  .dollar-times-widget .font-20 {    font-size: 20px; }  .dollar-times-widget .font-22 {    font-size: 22px; }#dollartimes-percentage-widget .pct-head {  font-weight: bold;  padding: 0 0 10px 0; }#dollartimes-percentage-widget .pct-results {  padding: 10px 0 0; }#dollartimes-percentage-widget .pct-section {  padding-top: 10px; }  #dollartimes-percentage-widget .pct-section:nth-child(1) {    padding-bottom: 15px; }';
	var head = document.getElementsByTagName('head')[0];
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode(css));
	head.appendChild(style);
}();

	var DollarTimes = function() { 
		var getNumDisplay = function(x) {
	if (Math.abs(x) < 1.0) {
		var e = parseInt(x.toString().split('e-')[1]);
		if (e) {
			x *= Math.pow(10,e-1);
			x = '0.' + (new Array(e)).join('0') + x.toString().substring(2);
		}
	} else {
		var e = parseInt(x.toString().split('+')[1]);
		if (e > 20) {
			e -= 20;
			x /= Math.pow(10,e);
			x += (new Array(e+1)).join('0');
		}
	}
	return x.toString();
};

var commafy = function(x) {
	x = getNumDisplay(x);
	var parts = x.split('.');
	parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	if ( parts.length > 1 ) {
		return parts[0] + "." + parts[1];
	}
	return parts[0];
};

var displayWholeNumber = function(n) {
	var n = commafy(n.toFixed(0));
	if ( n == "-0") {
		n = "0";
	}
	return n.toString();	
}

var displayDollars = function(n) {
	return "$" + displayWholeNumber(n);
};

var displayCents = function(n) {
	var n = commafy(n.toFixed(2));
	if ( n == "-0.00") {
		n = "0.00";
	}
	return "$" + n.toString();
};	

var calcPayment = function(loan, months, rate) {
	var mRate = rate / 1200;
	var payment;

	// interest only
	if ( months == -1 ) {
		return loan * mRate;
	}

	if ( rate == 0 ) {
		payment = loan / months;
	}
	else {
		var factor = Math.pow(1 + mRate, months );
		payment = loan * ( mRate / (1 - 1/factor) );
	}
	return payment;
};

var fixNumber = function(str) {
	str = str.replace(/,/g, "");
	str = str.replace(/^\$/, "");
	str = str.replace(/%$/, "");
	return str;
};

var getFloat = function(el, errMsg) {
	var str = document.getElementById(el).value
	str = fixNumber(str);
	val = parseFloat(str);
	if ( isNaN(val) ) {
		throw errMsg;
	}
	return val;
};

var condition = function(x, errMsg) {
	if ( !x ) {
		throw errMsg;
	}
};

var execCalc = function(c) {
	var input = c.gather();
	var html = "";
	if ( input.error ) {
		html = c.displayError(input.error);
	}
	else {
		var output = c.calc(input);
		html = c.displayOutput(output);
	}
	var div = document.getElementById(c.resultsDiv);
	div.innerHTML = html;
	div.style.display = "block";
};

var allowInt = function(id) {
	var txt = document.getElementById(id).value;
	txt = txt.replace(/[^0-9]/g, "");
	document.getElementById(id).value = txt;
};

var allowFloat = function(id, allowNeg) {
	var txt = document.getElementById(id).value;
	var isNeg = false;
	if ( allowNeg ) {
		if ( txt.startsWith("-") ) {
			isNeg = true;
		}
	}
	txt = txt.replace(/[^0-9,.]/g, "");
	tabs = txt.split('.');
	if ( tabs.length > 2 ) {
		txt = tabs[0] + "." + tabs[1];
	}
	if ( isNeg ) {
		txt = "-" + txt;
	}
	document.getElementById(id).value = txt;
};	



var getVal = function(id)  {
	var txt = document.getElementById(id).value;
	if ( txt == "" || txt == "-")  {
		return 0;
	}
	else {
		txt = txt.replace(/,/g, "");
		return parseFloat(txt);
	}
};






var rows = [0];

var removeRow = function(e) {
	var id = parseInt( e.target.dataset.rownum );
	var parent = document.getElementById("dollartimes-hms-table");
	var child = document.getElementById("dollartimes-hms-row" + id);
	parent.removeChild(child);
	for ( var i=0; i<rows.length; i++) {
		if ( rows[i] == id ) {
			rows.splice(i, 1);
			break;
		}
	}
	hideShowRemoveButton();
};

var addRow = function() {	

	var html = 	'<td><input class="dt-form-control width-70" type="text" value="0" id="dollartimes-hms-h@"></td>' +
					'<td><input class="dt-form-control width-70" type="text" value="0" id="dollartimes-hms-m@"></td>' +
					'<td><input class="dt-form-control width-70" type="text" value="0" id="dollartimes-hms-s@"></td>' +
					'<td><button id="dollartimes-hms-remove@" data-rownum="@" class="remove-row">x</button></td>';

	var lastId = rows[ rows.length - 1 ];
	var id = lastId + 1;
	html = html.replace(/@/g, id);

	var tr = document.createElement('tr');
	tr.id = "dollartimes-hms-row" + id;
	tr.innerHTML = html;

	var nextSibling = document.getElementById("dollartimes-hms-function-row");
   nextSibling.parentNode.insertBefore(tr, nextSibling);

	rows.push(id);
	hideShowRemoveButton();

	document.getElementById("dollartimes-hms-remove" + id).onclick = removeRow;
};

var hideShowRemoveButton = function() {
	var show = "block";
	if ( rows.length == 1 ) {
		show = "none";
	}
	for ( var i=0; i<rows.length; i++) {
		var id = "dollartimes-hms-remove" + rows[i];
		document.getElementById(id).style.display = show;
	}
};

var clear = function() {
	for ( var i=0; i<rows.length; i++) {
		var id = rows[i];
		document.getElementById("dollartimes-hms-h" + id).value = "0";
		document.getElementById("dollartimes-hms-m" + id).value = "0";
		document.getElementById("dollartimes-hms-s" + id).value = "0";
	}	
};


var HMS = function() {

	this.resultsDiv = "dollartimes-hms-results";

	this.gather = function() {
		var o = [];
		try {
			for ( var i=0; i<rows.length; i++) {
				var id = rows[i];
				var h = getFloat("dollartimes-hms-h" + id, "Error on row " + i + ": Please enter a valid number of hours");
				var m = getFloat("dollartimes-hms-m" + id, "Error on row " + i + ": Please enter a valid number of minutes");
				var s = getFloat("dollartimes-hms-s" + id, "Error on row " + i + ": Please enter a valid number of seconds");
				o.push ( {"h":h,"m":m,"s":s } );
			}
		}
		catch (e) {
			return { "error": e };
		}
		return o;
	};

	this.absFloor = function(x) {
		if ( x > 0 ) {
			return Math.floor(x);
		}
		return -1 * Math.floor(-1*x);
	}

	this.calc = function(arr) {
		var seconds = 0;
		var isNegative = false;
		for ( var i=0; i<arr.length; i++ ) {
			var o = arr[i];
			seconds += o.h*3600 + o.m*60 + o.s;
		}
		var decimalHours = seconds / 3600;
		var decimalMinutes = seconds / 60;
		var decimalSeconds = seconds;

		var hours = this.absFloor(decimalHours);
		var remainder = seconds - hours * 3600;
		var minutes = this.absFloor( remainder / 60 );
		remainder = remainder - minutes * 60;

		return { "decimalHours": decimalHours, "decimalMinutes": decimalMinutes, "decimalSeconds": seconds, "hours": hours, "minutes": minutes, "seconds": remainder };
	};

	this.displayError = function(e) {
		return '<div class="error">' + e + '</div>';
	};

	this.displayDecimal = function(x) {
		var x = x.toFixed(4);
		x = parseFloat(x);
		return commafy(x);
	}

	this.displayOutput = function(results) {		
		html = [];
		html.push("<p>The total time is equal to the following:</p>");
		html.push("<ul>");
		html.push("<li><span class='txt-120b'>" + results.hours + " hours, " + results.minutes + " minutes, " + this.displayDecimal(results.seconds) + " seconds</span></li></p>" );	
		html.push("<li>" + this.displayDecimal(results.decimalSeconds) + " seconds</li></p>" );
		html.push("<li>" + this.displayDecimal(results.decimalMinutes) + " minutes</li></p>" );
		html.push("<li>" + this.displayDecimal(results.decimalHours) + " hours</li></p>" );
		html.push("</ul>");
		html.push("<p class='small'>(All results rounded to the nearest 0.0001)</p>");
		return html.join("");
	};
};		document.getElementById("dollartimes-hms-go").onclick = function() {
			execCalc(new HMS());
		};
		document.getElementById("dollartimes-hms-add-row").onclick = addRow;
		document.getElementById("dollartimes-hms-remove0").onclick = removeRow;
		document.getElementById("dollartimes-hms-clear").onclick = clear;		
	}();




