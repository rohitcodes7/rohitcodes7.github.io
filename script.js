function copyEmail() {
  const email = "yourmail@gmail.com";
  navigator.clipboard.writeText(email);
  alert("Email copied: " + email);
}
