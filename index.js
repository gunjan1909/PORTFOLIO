//alert("THIS SITE IS BEST VIEWED ON DEKSTOP MODE");
document.onload(
  alert(
    "Website discontinued, please visit https://3d-portfolio-kappa-two.vercel.app/"
  )
);
// Create a media condition that targets viewports at least 768px wide
const mediaQuery = window.matchMedia("(max-width: 800px)");
// Check if the media query is true
if (mediaQuery.matches) {
  // Then trigger an alert
  alert("This site is best viewed on desktop \r\n 'OK' to view");
}
