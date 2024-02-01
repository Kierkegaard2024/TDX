document.addEventListener('DOMContentLoaded', function() {
    // Replace "Service Catalog" with "Services"
    var categoryElement = document.getElementById('ctl00_ctl00_cpContent_cpContent_lblCategoryName');

    if (categoryElement) {
        categoryElement.textContent = categoryElement.textContent.replace(/Service Catalog/g, 'Services');
    }

    // Replace "Knowledge Base" with "Information"
    var knowledgeBaseElements = document.querySelectorAll('*');

    knowledgeBaseElements.forEach(function(element) {
        if (element.nodeType === 3) { // Text node
            element.nodeValue = element.nodeValue.replace(/Knowledge Base/g, 'Information');
        }
        if (element.tagName !== 'SCRIPT' && element.tagName !== 'STYLE') {
            for (var i = 0; i < element.childNodes.length; i++) {
                var child = element.childNodes[i];
                if (child.nodeType === 3) {
                    child.nodeValue = child.nodeValue.replace(/Knowledge Base/g, 'Information');
                }
            }
        }
    });

    // Replace "Favorite" with "Favourites"
    var favoriteBaseElements = document.querySelectorAll('*');

    favoriteBaseElements.forEach(function(element) {
        if (element.nodeType === 3) { // Text node
            element.nodeValue = element.nodeValue.replace(/Favorite/g, 'Favourite');
        }
        if (element.tagName !== 'SCRIPT' && element.tagName !== 'STYLE') {
            for (var i = 0; i < element.childNodes.length; i++) {
                var child = element.childNodes[i];
                if (child.nodeType === 3) {
                    child.nodeValue = child.nodeValue.replace(/Favorite/g, 'Favourite');
                }
            }
        }
    });

    // Replace "Service Catalog" with "Service Catalogue" 
    var serviceCatalogElements = document.querySelectorAll('*');

    serviceCatalogElements.forEach(function(element) {
        if (element.nodeType === 3) { // Text node
            element.nodeValue = element.nodeValue.replace(/Service Catalog(?!ue)/g, 'Service Catalogue');
        }
        if (element.tagName !== 'SCRIPT' && element.tagName !== 'STYLE') {
            for (var i = 0; i < element.childNodes.length; i++) {
                var child = element.childNodes[i];
                if (child.nodeType === 3) {
                    child.nodeValue = child.nodeValue.replace(/Service Catalog(?!ue)/g, 'Service Catalogue');
                }
            }
        }
    });
});
