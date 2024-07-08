document.addEventListener("DOMContentLoaded", function() {
    var inactiveElement = document.getElementById("ctl00_ctl00_cpContent_cpContent_divIsInactive");
    var tagElement = document.getElementById("ctl00_ctl00_cpContent_cpContent_rptTags_ctl00_ctl00_lnkDisplay");

    if (inactiveElement && tagElement && tagElement.textContent.includes("dcsoftware")) {
        inactiveElement.parentNode.removeChild(inactiveElement);
    }
});
