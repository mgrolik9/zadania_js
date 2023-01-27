const browser = "";

if (browser === "IE") {
  alert("IE!");
} else if (["Chrome", "Firefox", "Safari", "Opera"].includes(browser)) {
  alert("support these browsers");
} else {
  alert("everything ok in you browser!");
}
