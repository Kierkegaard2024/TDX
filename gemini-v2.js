document.addEventListener('DOMContentLoaded', function() {
    var geminiList = document.getElementsByClassName('gemini');
    if (geminiList.length > 0) {
        var geminiListItem = geminiList[0];
        var link = document.createElement('a');
        link.href = 'https://gemini.google.com';
        link.textContent = 'Gemini';
        link.style.verticalAlign = 'middle';
        link.style.color = '#FFFFFF';
        link.style.fontSize = '13px';
        link.addEventListener('click', openGemini);
        geminiListItem.appendChild(link);
    }
});

function openGemini(event) {
    event.preventDefault();
    window.open('https://gemini.google.com', 'targetWindow', 'toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no,width=850,height=850');
}
