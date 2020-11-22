function myFunc(sColor1, sColor2) {
    var paragraphs = document.getElementsByTagName('p');
    console.log(`Paragraph elements: ${paragraphs.length}`);
    var headertitles = document.getElementsByClassName('headertitle');
    console.log(`Elements with class "headertitle": ${headertitles.length}`);
    document.title = `${paragraphs.length} параграфа, ${headertitles.length} елемента с клас <headertitle>`;
    for (var i = 0; i < paragraphs.length; i++) {
        paragraphs[i].style.backgroundColor = sColor1;
    }
    for (var i = 0; i < headertitles.length; i++) {
        headertitles[i].style.backgroundColor = sColor2;
    }
}

myFunc("red", "green");