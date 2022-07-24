let logged;

function sendAnalytics(data: string) {
  console.log(data);
  logged = true;
  logged = "Leela";
  console.log(logged);
}

sendAnalytics("send data");
