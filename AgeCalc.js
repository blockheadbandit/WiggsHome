function timeSince(date) {

  var seconds = Math.floor((new Date() - date) / 1000);

  var interval = seconds / 31536000;


  return `${Math.floor(interval)} Years or ${Math.floor(seconds / 2592000)} Months or ${Math.floor(seconds / 86400)} Days, or if we are being any more specific ${Math.floor(seconds)} Seconds`
}



setInterval(function() {
  document.getElementById("ageDate").textContent = `Age: ${timeSince(new Date("2004-11-07"))}`
},1000)