function regexMatch(){
    let input = "13\n" +
        "<div class=\"portal\" role=\"navigation\" id='p-navigation'>\n" +
        "<h3>Navigation</h3>\n" +
        "<div class=\"body\">\n" +
        "<ul>\n" +
        " <li id=\"n-mainpage-description\"><a href=\"/wiki/Main_Page\" title=\"Visit the main page [z]\" accesskey=\"z\">Main page</a></li>\n" +
        " <li id=\"n-contents\"><a href=\"/wiki/Portal:Contents\" title=\"Guides to browsing Wikipedia\">Contents</a></li>\n" +
        " <li id=\"n-featuredcontent\"><a href=\"/wiki/Portal:Featured_content\" title=\"Featured content  the best of Wikipedia\">Featured content</a></li>\n" +
        "<li id=\"n-currentevents\"><a href=\"/wiki/Portal:Current_events\" title=\"Find background information on current events\">Current events</a></li>\n" +
        "<li id=\"n-randompage\"><a href=\"/wiki/Special:Random\" title=\"Load a random article [x]\" accesskey=\"x\">Random article</a></li>\n" +
        "<li id=\"n-sitesupport\"><a href=\"//donate.wikimedia.org/wiki/Special:FundraiserRedirector?utm_source=donate&utm_medium=sidebar&utm_campaign=C13_en.wikipedia.org&uselang=en\" title=\"Support us\">Donate to Wikipedia</a></li>\n" +
        "</ul>\n" +
        "</div>\n" +
        "</div>"
    var tags = input.split(/\n/);
    var nLines = tags[0];
    var links = "";
    for (let i = 1 ; i<=nLines; i++){
        let line = tags[i];
        let hrefRegex = /<a href="(\S+)"[\s\]\[|\w|=|"?]*>([^<]+)/;
        let capture = line.match(hrefRegex);
        if(capture){
            console.log(capture);

            links+=(`${capture[1]},${capture[2]}`);
            links += "\n";
        }
    }
    // console.log(links);
}

regexMatch();
