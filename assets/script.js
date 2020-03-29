async function siteText() {
    var textUrl = ('content.json');
    var response = await fetch(textUrl, {
        method: 'GET'
    });

    var data = await response.json();

    siteContent(data)
}

function siteContent(data) {
    var contentContainer = document.getElementById('site_content');
    var codeNinja = document.getElementById('codeninja');
    var footer = document.getElementById('footer');
    var textContent = data.modules;

    contentContainer.innerHTML += "<h1 class='h1 col-lg-12'>" + textContent[1].text[0].title + "</h1>" +
        "<img class='desk_woman' src='" + textContent[2].image.file + "' alt='Woman with head on desk'>" +
        "<p class='description col-12 col-lg-3'>" + textContent[2].text[0].body + "</p>" +
        "<img class='phone_man' src='" + textContent[3].image.file + "' alt='Man with laptop speaking on the phone'>" +
        "<h2 class='col-6 h2 about'>" + textContent[3].text[0].title + "</h2>" +
        "<p class='col-12 about'>" + textContent[3].text[0].body + "</p>" +
        "<h2 class='col-6 h2 about'>" + textContent[3].text[1].title + "</h2>" +
        "<p class='col-12 about'>" + textContent[3].text[1].body + "</p>" +
        "<h2 class='col-6 h2 about'>" + textContent[3].text[2].title + "</h2>" +
        "<p class='col-12 about'>" + textContent[3].text[2].body + "</p>";

    codeNinja.innerHTML += "<h3 class='mx-auto'>" + textContent[4].text[0].title + "</h3>" +
        "<p class='mx-auto'>" + textContent[4].text[1].body + "</p>" +
        "<p class='mx-auto'>" + textContent[4].text[2].body + "</p>";

}

siteText();