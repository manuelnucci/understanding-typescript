let logged;

function sendAnalytics(data: string) {
  console.log(data);
  logged = true;
  logged = 5;
  console.log(logged);
}

sendAnalytics('The data');
