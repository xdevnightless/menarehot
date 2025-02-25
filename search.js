"use strict";
/**
 *
 * @param {string} input
 * @param {string} template Template for a search query.
 * @returns {string} Fully qualified URL
 */
function search(input, template) {
  try {
    // input is a valid URL:
    // eg: https://example.com, https://example.com/test?q=param
    return new URL(input).toString();
  } catch (err) {
    // input was not a valid URL
  }

  try {
    // input is a valid URL when http:// is added to the start:
    // eg: example.com, https://example.com/test?q=param
    const url = new URL(`http://${input}`);
    // only if the hostname has a TLD/subdomain
    if (url.hostname.includes(".")) return url.toString();
  } catch (err) {
  }



  return template.replace("%s", encodeURIComponent(input));
}
document.getElementById("searchApps").addEventListener("input", function() {
    let filter = this.value.toLowerCase();

    let gameCards = document.querySelectorAll(".card");

    gameCards.forEach(card => {
        let gameTitle = card.getAttribute("data-title").toLowerCase();

        if (gameTitle.includes(filter)) {
            card.style.display = "";  
        } else {
            card.style.display = "none"; 
        }
    });
});
