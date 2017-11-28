var urlEjemplo = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=2b0fc35b474248939de2d3f42afdd5a3&begin_date=19950531&end_date=19950531";
var jsonExample = {"status":"OK","copyright":"Copyright (c) 2017 The New York Times Company. All Rights Reserved.","response":{"docs":[{"web_url":"https://www.nytimes.com/1995/03/10/business/dollar-plagued-by-peso.html","snippet":"  A plunge in the peso pulled down the dollar. The weak peso is threatening United States efforts to restore investors' confidence in Mexico.    Article, page D1.","print_page":"1","blog":{},"source":"The New York Times","multimedia":[],"headline":{"main":"Dollar Plagued by Peso"},"keywords":[{"isMajor":null,"rank":0,"name":"glocations","value":"MEXICO"},{"isMajor":null,"rank":0,"name":"subject","value":"CURRENCY"}],"pub_date":"1995-03-10T00:00:00Z","document_type":"article","new_desk":"Business/Financial Desk","type_of_material":"Summary","_id":"4fd1bbca8eb7c8105d6e6ba5","word_count":26,"score":1},{"web_url":"https://www.nytimes.com/1995/03/10/theater/theater-review-the-heiress-is-she-loved-for-her-money-well-of-course.html","snippet":"BROADWAY'S heritage is being well served at the Cort Theater where \"The Heiress,\" the Lincoln Center Theater's handsome revival of the 1947 hit, opened last night. If you would like to see a first-rate production of the kind of comparatively small...","print_page":"1","blog":{},"source":"The New York Times","multimedia":[],"headline":{"main":"Is She Loved For Her Money? Well, of Course!","kicker":"THEATER REVIEW: THE HEIRESS"},"keywords":[{"isMajor":null,"rank":0,"name":"creative_works","value":"HEIRESS, THE (PLAY)"},{"isMajor":null,"rank":0,"name":"creative_works","value":"WASHINGTON SQUARE (BOOK)"},{"isMajor":null,"rank":0,"name":"persons","value":"GOETZ, RUTH"},{"isMajor":null,"rank":0,"name":"persons","value":"GOETZ, AUGUSTUS"},{"isMajor":null,"rank":0,"name":"persons","value":"JAMES, HENRY"},{"isMajor":null,"rank":0,"name":"organizations","value":"LINCOLN CENTER THEATER"},{"isMajor":null,"rank":0,"name":"subject","value":"REVIEWS"},{"isMajor":null,"rank":0,"name":"subject","value":"BOOKS AND LITERATURE"},{"isMajor":null,"rank":0,"name":"subject","value":"THEATER"}],"pub_date":"1995-03-10T00:00:00Z","document_type":"article","new_desk":"Weekend Desk","byline":{"original":"By VINCENT CANBY"},"type_of_material":"Review","_id":"4fd1c6668eb7c8105d6f706c","word_count":1228,"score":1},{"web_url":"https://www.nytimes.com/1995/03/10/business/a-wizard-caught-in-two-storms.html","snippet":"Nothing can cloud the legend of Peter S. Lynch, the mutual fund wizard. As the manager of the giant Fidelity Magellan Fund from 1977 until his retirement in 1990, Mr. Lynch racked up one of the best long-term track records in the fund industry.   ...","print_page":"1","blog":{},"source":"The New York Times","multimedia":[],"headline":{"main":"A Wizard Caught in Two Storms"},"keywords":[{"isMajor":null,"rank":0,"name":"persons","value":"GRACE, J PETER"},{"isMajor":null,"rank":0,"name":"persons","value":"AGEE, WILLIAM"},{"isMajor":null,"rank":0,"name":"persons","value":"LYNCH, PETER S"},{"isMajor":null,"rank":0,"name":"organizations","value":"MORRISON KNUDSEN CORP"},{"isMajor":null,"rank":0,"name":"organizations","value":"GRACE, W R, & CO"},{"isMajor":null,"rank":0,"name":"subject","value":"BOARDS OF DIRECTORS"}],"pub_date":"1995-03-10T00:00:00Z","document_type":"article","new_desk":"Business/Financial Desk","byline":{"original":"By DIANA B. HENRIQUES"},"type_of_material":"News","_id":"4fd1c6668eb7c8105d6f7072","word_count":314,"score":1},{"web_url":"https://www.nytimes.com/1995/03/10/nyregion/c-corrections-900295.html","snippet":"A table in Science Times on Tuesday about drugs used to treat arthritis and inflammation classified some generic drugs and their proprietary versions incorrectly. The medicines -- Diflusinal (Dolibid), acetaminophen (Tylenol), oxyphenbutazone (Tan...","print_page":"2","blog":{},"source":"The New York Times","multimedia":[],"headline":{"main":"Corrections"},"keywords":[{"isMajor":null,"rank":0,"name":"subject","value":"DRUGS (PHARMACEUTICALS)"},{"isMajor":null,"rank":0,"name":"subject","value":"ARTHRITIS AND RHEUMATISM"},{"isMajor":null,"rank":0,"name":"subject","value":"CORRECTION STORIES"}],"pub_date":"1995-03-10T00:00:00Z","document_type":"article","new_desk":"Metropolitan Desk","type_of_material":"Correction","_id":"4fd1c6668eb7c8105d6f707b","word_count":55,"score":1},{"web_url":"https://www.nytimes.com/1995/03/10/arts/art-in-review-946095.html","snippet":"Mira Schor   Horodner Romley Gallery  107-109 Sullivan Street  SoHo  Through April 8    The paintings in Mira Schor's 1992 show at Horodner Romley combined cryptic, suggestive phrases (\"Area of Denial\") with stylized representations of genitalia, ...","print_page":"20","blog":{},"source":"The New York Times","multimedia":[],"headline":{"main":"Art in Review"},"keywords":[{"isMajor":null,"rank":0,"name":"persons","value":"SCHOR, MIRA"},{"isMajor":null,"rank":0,"name":"subject","value":"REVIEWS"},{"isMajor":null,"rank":0,"name":"subject","value":"ART"}],"pub_date":"1995-03-10T00:00:00Z","document_type":"article","new_desk":"Weekend Desk","byline":{"original":"By PEPE KARMEL"},"type_of_material":"Review","_id":"4fd1cb778eb7c8105d7009f8","word_count":215,"score":1},{"web_url":"https://www.nytimes.com/1995/03/10/arts/inside-art.html","snippet":"Fire on Central Park West    The black cloud hanging over the financially shaky New-York Historical Society is more than metaphorical. Around 1 P.M. last Friday, welders working in the basement of its 1904 building at Central Park West and 77th St...","print_page":"26","blog":{},"source":"The New York Times","multimedia":[],"headline":{"main":"Inside Art"},"keywords":[{"isMajor":null,"rank":0,"name":"glocations","value":"NEW ENGLAND STATES (US)"},{"isMajor":null,"rank":0,"name":"organizations","value":"NEW-YORK HISTORICAL SOCIETY"},{"isMajor":null,"rank":0,"name":"organizations","value":"DE CORDOVA MUSEUM AND SCULPTURE PARK"},{"isMajor":null,"rank":0,"name":"organizations","value":"CHRISTIE'S"},{"isMajor":null,"rank":0,"name":"subject","value":"FIRES AND FIREMEN"},{"isMajor":null,"rank":0,"name":"subject","value":"AUCTIONS"},{"isMajor":null,"rank":0,"name":"subject","value":"COMMISSIONS (FEES)"},{"isMajor":null,"rank":0,"name":"subject","value":"ART"}],"pub_date":"1995-03-10T00:00:00Z","document_type":"article","new_desk":"Weekend Desk","byline":{"original":"By Carol Vogel"},"type_of_material":"News","_id":"4fd1e7a28eb7c8105d7349f5","word_count":1187,"score":1},{"web_url":"https://www.nytimes.com/1995/03/10/sports/baseball-camp-green-and-no-pay-proves-too-much-for-4.html","snippet":"  They have lost five straight. They have run more miles than they can count. And so far, they haven't been paid a dime.   Apparently, some replacement Mets aren't going to take it anymore.","print_page":"12","blog":{},"source":"The New York Times","multimedia":[],"headline":{"main":"Camp Green and No Pay Proves Too Much for 4","kicker":"BASEBALL"},"keywords":[{"isMajor":null,"rank":0,"name":"persons","value":"GREEN, DALLAS"},{"isMajor":null,"rank":0,"name":"organizations","value":"NEW YORK METS"},{"isMajor":null,"rank":0,"name":"subject","value":"BASEBALL"}],"pub_date":"1995-03-10T00:00:00Z","document_type":"article","new_desk":"Sports Desk","byline":{"original":"By JENNIFER FREY"},"type_of_material":"News","_id":"4fd1e7a28eb7c8105d7349fe","word_count":547,"score":1},{"web_url":"https://www.nytimes.com/1995/03/10/arts/art-in-review-948795.html","snippet":"Matthew Ritchie   Basilico Fine Arts  26 Wooster Street  SoHo  Through March 18    If Einstein had been a Baroque artist, his paintings might have looked like Matthew Ritchie's. Mr. Ritchie's extra-brainy yet energetic works, which purport to illu...","print_page":"20","blog":{},"source":"The New York Times","multimedia":[],"headline":{"main":"Art in Review"},"keywords":[{"isMajor":null,"rank":0,"name":"persons","value":"RITCHIE, MATTHEW"},{"isMajor":null,"rank":0,"name":"subject","value":"REVIEWS"},{"isMajor":null,"rank":0,"name":"subject","value":"ART"}],"pub_date":"1995-03-10T00:00:00Z","document_type":"article","new_desk":"Weekend Desk","byline":{"original":"By ROBERTA SMITH"},"type_of_material":"Review","_id":"4fd1e7a28eb7c8105d734a03","word_count":276,"score":1},{"web_url":"https://www.nytimes.com/1995/03/10/nyregion/new-jersey-daily-briefing-no-crabs-just-big-pinches.html","snippet":"Four men dredging for crabs in Raritan Bay had a fairly good night. They brought in 40 bushels, which they planned to sell. The men themselves were brought in early Wednesday by a force of Federal and state investigators watching for illegal fishi...","print_page":"1","blog":{},"source":"The New York Times","multimedia":[],"headline":{"main":"No Crabs, Just Big Pinches","kicker":"NEW JERSEY DAILY BRIEFING"},"keywords":[{"isMajor":null,"rank":0,"name":"subject","value":"TERMS NOT AVAILABLE"}],"pub_date":"1995-03-10T00:00:00Z","document_type":"article","new_desk":"Metropolitan Desk","byline":{"original":"By DAVID STOUT"},"type_of_material":"News","_id":"4fd1e7a28eb7c8105d734a0c","word_count":80,"score":1},{"web_url":"https://www.nytimes.com/1995/03/10/world/yeltsin-to-allow-a-european-rights-mission-in-chechnya.html","snippet":"In another gesture to Western opinion, President Boris N. Yeltsin agreed today to allow a human-rights mission from the Organization of Security and Cooperation in Europe to maintain a presence in the secessionist Chechnya republic.    Meeting the...","print_page":"10","blog":{},"source":"The New York Times","multimedia":[],"headline":{"main":"Yeltsin to Allow a European Rights Mission in Chechnya"},"keywords":[{"isMajor":null,"rank":0,"name":"persons","value":"CHRISTOPHER, WARREN M"},{"isMajor":null,"rank":0,"name":"persons","value":"CAMDESSUS, MICHEL"},{"isMajor":null,"rank":0,"name":"persons","value":"YELTSIN, BORIS N"},{"isMajor":null,"rank":0,"name":"persons","value":"KOZYREV, ANDREI V"},{"isMajor":null,"rank":0,"name":"glocations","value":"RUSSIA"},{"isMajor":null,"rank":0,"name":"glocations","value":"CHECHNYA (RUSSIA)"},{"isMajor":null,"rank":0,"name":"organizations","value":"ORGANIZATION FOR ECONOMIC COOPERATION AND DEVELOPMENT"},{"isMajor":null,"rank":0,"name":"organizations","value":"INTERNATIONAL MONETARY FUND"},{"isMajor":null,"rank":0,"name":"subject","value":"INDEPENDENCE MOVEMENTS"},{"isMajor":null,"rank":0,"name":"subject","value":"FOREIGN AID"},{"isMajor":null,"rank":0,"name":"subject","value":"FREEDOM AND HUMAN RIGHTS"}],"pub_date":"1995-03-10T00:00:00Z","document_type":"article","new_desk":"Foreign Desk","byline":{"original":"By STEVEN ERLANGER"},"type_of_material":"News","_id":"4fd1e7e28eb7c8105d7351f8","word_count":936,"score":1}],"meta":{"hits":185,"offset":0,"time":44}}};
function peticionAjax(url) {
    var xmlHttp = new XMLHttpRequest();

    xmlHttp.onreadystatechange = function() {

        if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
            //getData(JSON.parse(xmlHttp.responseText));
            console.log(xmlHttp.responseText);
        } else if (xmlHttp.readyState === 4 && xmlHttp.status === 404) {
            console.error("ERROR! 404");
            console.info(JSON.parse(xmlHttp.responseText));
        }
    };
    xmlHttp.open("GET", url, true);
    xmlHttp.send();
}

//peticionAjax("https://www.nytimes.com/1995/05/31/sports/sports-people-football-steelers-foster-is-traded-to-the-carolina-panthers.html");
getData(jsonExample);
function getData(json) {
    
}