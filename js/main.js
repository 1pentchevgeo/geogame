const codes = ["AD", "AE", "AF", "AG", "AL", "AM", "AO", "AQ", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CD", "CF", "CG", "CH", "CI", "CL", "CM", "CN", "CO", "CR", "CU", "CV", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "EH", "ER", "ES", "ET", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GF", "GH", "GL", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IQ", "IR", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KP", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MG", "MH", "MK", "ML", "MM", "MN", "MO", "MR", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PR", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SD", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SO", "SR", "ST", "SV", "SY", "SZ", "TD", "TG", "TH", "TJ", "TL", "TM", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VA", "VC", "VE", "VN", "VU", "WS", "XK", "YE", "ZA", "ZM", "ZW"];

const names = ["Andorra", "United Arab Emirates", "Afghanistan", "Antigua and Barbuda", "Albania", "Armenia", "Angola", "Antarctica", "Argentina", "Austria", "Australia", "Azerbaijan", "Bosnia and Herzegovina", "Barbados", "Bangladesh", "Belgium", "Burkina Faso", "Bulgaria", "Bahrain", "Burundi", "Benin", "Brunei", "Bolivia", "Brazil", "Bahamas", "Bhutan", "Botswana", "Belarus", "Belize", "Canada", "Democratic Republic of the Congo", "Central African Republic", "Republic of the Congo", "Switzerland", "Ivory Coast", "Chile", "Cameroon", "China", "Colombia", "Costa Rica", "Cuba", "Cape Verde", "Cyprus", "Czech Republic", "Germany", "Djibouti", "Denmark", "Dominica", "Dominican Republic", "Algeria", "Ecuador", "Estonia", "Egypt", "Western Sahara", "Eritrea", "Spain", "Ethiopia", "Finland", "Fiji", "Micronesia", "France", "Gabon", "United Kingdom", "Grenada", "Georgia", "French Guiana", "Ghana", "Greenland", "Gambia", "Guinea", "Equatorial Guinea", "Greece", "Guatemala", "Guinea-Bissau", "Guyana", "Honduras", "Croatia", "Haiti", "Hungary", "Indonesia", "Ireland", "Israel", "India", "Iraq", "Iran", "Iceland", "Italy", "Jamaica", "Jordan", "Japan", "Kenya", "Kyrgyzstan", "Cambodia", "Kiribati", "Comoros", "Saint Kitts and Nevis", "North Korea", "South Korea", "Kuwait", "Kazakhstan", "Laos", "Lebanon", "Saint Lucia", "Liechtenstein", "Sri Lanka", "Liberia", "Lesotho", "Lithuania", "Luxembourg", "Latvia", "Libya", "Morocco", "Monaco", "Moldova", "Montenegro", "Madagascar", "Marshall Islands", "North Macedonia", "Mali", "Myanmar", "Mongolia", "Macau", "Mauritania", "Malta", "Mauritius", "Maldives", "Malawi", "Mexico", "Malaysia", "Mozambique", "Namibia", "Niger", "Nigeria", "Nicaragua", "Netherlands", "Norway", "Nepal", "Nauru", "New Zealand", "Oman", "Panama", "Peru", "Papua New Guinea", "Philippines", "Pakistan", "Poland", "Puerto Rico", "Palestine", "Portugal", "Palau", "Paraguay", "Qatar", "Romania", "Serbia", "Russia", "Rwanda", "Saudi Arabia", "Solomon Islands", "Seychelles", "Sudan", "Sweden", "Singapore", "Slovenia", "Slovakia", "Sierra Leone", "San Marino", "Senegal", "Somalia", "Suriname", "São Tomé and Príncipe", "El Salvador", "Syria", "Eswatini", "Chad", "Togo", "Thailand", "Tajikistan", "East Timor", "Turkmenistan", "Tunisia", "Tonga", "Turkey", "Trinidad and Tobago", "Tuvalu", "Taiwan", "Tanzania", "Ukraine", "Uganda", "United States", "Uruguay", "Uzbekistan", "Vatican City", "Saint Vincent and the Grenadines", "Venezuela", "Vietnam", "Vanuatu", "Samoa", "Kosovo", "Yemen", "South Africa", "Zambia", "Zimbabwe"];

var lcNames = names.join('~').toLowerCase().split('~');

const longs = [1.601554, 53.847818, 67.709953, -61.796428, 20.168331, 45.038189, 17.873887, -0.071389, -63.616672, 14.550072, 133.775136, 47.576927, 17.679076, -59.543198, 90.356331, 4.469936, -1.561593, 25.48583, 50.637772, 29.918886, 2.315834, 114.727669, -63.588653, -51.92528, -77.39628, 90.433601, 24.684866, 27.953389, -88.49765, -106.346771, 21.758664, 20.939444, 15.827659, 8.227512, -5.54708, -71.542969, 12.354722, 104.195397, -74.297333, -83.753428, -77.781167, -24.013197, 33.429859, 15.472962, 10.451526, 42.590275, 9.501785, -61.370976, -70.162651, 1.659626, -78.183406, 25.013607, 30.802498, -12.885834, 39.782334, -3.74922, 40.489673, 25.748151, 179.414413, 150.550812, 2.213749, 11.609444, -3.435973, -61.604171, 43.356892, -53.125782, -1.023194, -42.604303, -15.310139, -9.696645, 10.267895, 21.824312, -90.230759, -15.180413, -58.93018, -86.241905, 15.2, -72.285215, 19.503304, 113.921327, -8.24389, 34.851612, 78.96288, 43.679291, 53.688046, -19.020835, 12.56738, -77.297508, 36.238414, 138.252924, 37.906193, 74.766098, 104.990963, -168.734039, 43.872219, -62.782998, 127.510093, 127.766922, 47.481766, 66.923684, 102.495496, 35.862285, -60.978893, 9.555373, 80.771797, -9.429499, 28.233608, 23.881275, 6.129583, 24.603189, 17.228331, -7.09262, 7.412841, 28.369885, 19.37439, 46.869107, 171.184478, 21.745275, -3.996166, 95.956223, 103.846656, 113.543873, -10.940835, 14.375416, 57.552152, 73.22068, 34.301525, -102.552784, 101.975766, 35.529562, 18.49041, 8.081666, 8.675277, -85.207229, 5.291266, 8.468946, 84.124008, 166.931503, 174.885971, 55.923255, -80.782127, -75.015152, 143.95555, 121.774017, 69.345116, 19.145136, -66.590149, 35.233154, -8.224454, 134.58252, -58.443832, 51.183884, 24.96676, 21.005859, 105.318756, 29.873888, 45.079162, 160.156194, 55.491977, 30.217636, 18.643501, 103.819836, 14.995463, 19.699024, -11.779889, 12.457777, -14.452362, 46.199616, -56.027783, 6.613081, -88.89653, 38.996815, 31.465866, 18.732207, 0.824782, 100.992541, 71.276093, 125.727539, 59.556278, 9.537499, -175.198242, 35.243322, -61.222503, 177.64933, 120.960515, 34.888822, 31.16558, 32.290275, -95.712891, -55.765835, 64.585262, 12.453389, -61.287228, -66.58973, 108.277199, 166.959158, -172.104629, 20.902977, 48.516388, 22.937506, 27.849332, 29.154857]

const lats = [42.546245, 23.424076, 33.93911, 17.060816, 41.153332, 40.069099, -11.202692, -75.250973, -38.416097, 47.516231, -25.274398, 40.143105, 43.915886, 13.193887, 23.684994, 50.503887, 12.238333, 42.733883, 25.930414, -3.373056, 9.30769, 4.535277, -16.290154, -14.235004, 25.03428, 27.514162, -22.328474, 53.709807, 17.189877, 56.130366, -4.038333, 6.611111, -0.228021, 46.818188, 7.539989, -35.675147, 7.369722, 35.86166, 4.570868, 9.748917, 21.521757, 16.002082, 35.126413, 49.817492, 51.165691, 11.825138, 56.26392, 15.414999, 18.735693, 28.033886, -1.831239, 58.595272, 26.820553, 24.215527, 15.179384, 40.463667, 9.145, 61.92411, -16.578193, 7.425554, 46.227638, -0.803689, 55.378051, 12.262776, 42.315407, 3.933889, 7.946527, 71.706936, 13.443182, 9.945587, 1.650801, 39.074208, 15.783471, 11.803749, 4.860416, 15.199999, 45.1, 18.971187, 47.162494, -0.789275, 53.41291, 31.046051, 20.593684, 33.223191, 32.427908, 64.963051, 41.87194, 18.109581, 30.585164, 36.204824, -0.023559, 41.20438, 12.565679, -3.370417, -11.875001, 17.357822, 40.339852, 35.907757, 29.31166, 48.019573, 19.85627, 33.854721, 13.909444, 47.166, 7.873054, 6.428055, -29.609988, 55.169438, 49.815273, 56.879635, 26.3351, 31.791702, 43.750298, 47.411631, 42.708678, -18.766947, 7.131474, 41.608635, 17.570692, 21.913965, 46.862496, 22.198745, 21.00789, 35.937496, -20.348404, 3.202778, -13.254308, 23.634501, 4.210484, -18.665695, -22.95764, 17.607789, 9.081999, 12.865416, 52.132633, 60.472024, 28.394857, -0.522778, -40.900557, 21.512583, 8.537981, -9.189967, -6.314993, 12.879721, 30.375321, 51.919438, 18.220833, 31.952162, 39.399872, 7.51498, -23.442503, 25.354826, 45.943161, 44.016521, 61.52401, -1.940278, 23.885942, -9.64571, -4.679574, 12.862807, 60.128161, 1.352083, 46.151241, 48.669026, 8.460555, 43.94236, 14.497401, 5.152149, 3.919305, 0.18636, 13.794185, 34.802075, -26.522503, 15.454166, 8.619543, 15.870032, 38.861034, -8.874217, 38.969719, 33.886917, -21.178986, 38.963745, 10.691803, -7.109535, 23.69781, -6.369028, 48.379433, 1.373333, 37.09024, -32.522779, 41.377491, 41.902916, 12.984305, 6.42375, 14.058324, -15.376706, -13.759029, 42.602636, 15.552727, -30.559482, -13.133897, -19.015438]

const ind = Math.floor(Math.random() * codes.length);
const code = codes[ind];
const name = names[ind];
const long = longs[ind];
const lat = lats[ind];

function proximity(guess) {
  guessInd = lcNames.indexOf(guess.toLowerCase());
  distToGuess = Math.sqrt((lat-lats[guessInd])**2 + (long-longs[guessInd])**2);
  // return Math.floor(100*((-distToGuess)/300 + 1));
  return Math.floor(100*Math.exp(-0.015*distToGuess));
};

document.getElementById('prompt').src = "https://raw.githubusercontent.com/djaiss/mapsicon/33ba28808f8d32b5bae0ffada9cadd07073852e1/all/".concat(code.toLowerCase(), "/vector.svg");

function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
              b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
          a.appendChild(b);
          // a.scrollIntoView();
        }
      }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
      x[i].parentNode.removeChild(x[i]);
    }
  }
}
/*execute a function when someone clicks in the document:*/
document.addEventListener("click", function (e) {
    closeAllLists(e.target);
});
}

autocomplete(document.getElementsByClassName("inputbox")[0], names);

function enterkeyrespond(input) {
  // Execute a function when the user releases a key on the keyboard
  input.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      input.nextElementSibling.click();
    }
  });
}

enterkeyrespond(document.getElementsByClassName("inputbox")[0]);

document.getElementsByClassName("inputbox")[0].focus();

var tries = 0;

function reveal() {
  var guess = document.getElementsByClassName("inputbox")[tries].value;
  var receiver = document.getElementsByClassName("inputbox")[tries];
  receiver.disabled = true;
  var game = document.getElementsByClassName("game")[0];

  var msg;
  if (game.lastElementChild.classList[0] === "message") {
    msg = game.lastElementChild
  } else {
    msg = document.createElement("div");
    msg.classList.add("message");
    game.appendChild(msg);
  };


  if (tries < 6) {
    if (lcNames.includes(guess.toLowerCase())) {
      tries += 1;
      var prox = proximity(guess);
      if (guess.toLowerCase() !== name.toLowerCase()) {
        msg.innerHTML = "Nope, try again. (Proximity: <b>".concat(prox.toString(), "%</b>)");

        const newinp = document.createElement("input");
        newinp.classList.add("inputbox");
        game.appendChild(newinp);
        autocomplete(newinp, names);
        enterkeyrespond(newinp);
        newinp.focus();

        const newbtn = document.createElement("button");
        newbtn.classList.add("btn");
        newbtn.onclick = reveal;
        game.appendChild(newbtn);
      } else {
        if (tries === 1) {
          msg.innerHTML = "POG FIRST TRY! Have a cookie: 🍪";
        } else {
          msg.innerHTML = "Yayy, you did it in <b>".concat(tries, "</b> tries! Have a cookie: 🍪");
        }
      };
      if (prox >= 50) {
        receiver.style.background = "linear-gradient(to right, #364c7d ".concat(prox.toString(), "%, #142952 ", (100-prox).toString(), "%)");
      } else {
        receiver.style.background = "linear-gradient(to left, #142952 ".concat((100-prox).toString(), "%, #364c7d ", prox.toString(), "%)");
      }
    } else {
      msg.innerHTML = "Enter a valid country!";
      receiver.disabled = false;
      receiver.focus();
    }
  } else {
    msg.innerHTML = "You suck LMAO the country was <b>".concat(name, "</b>.");
    msg.scrollIntoView();
  }
};
