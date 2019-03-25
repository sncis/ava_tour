class Database{

    ///////////// hard coded routes
    // remove this section after 
    // firebase db is implemented


    static routeNames = [
        'Nature, Beergarden, Seightseeing',
        'History and Beergarden at Lake',
        'Car driving and Bavarian Lakes',
        
    ];


    

    static routeDefs = [
        [
            [0,0],[0,1],[0,2],[0,3],[0,0]
        ],
        [
            [1,0],[1,4],[1,5],[1,1],[1,0]
        ],
        [
            [2,0],[2,6],[2,7],[2,2],[2,0]
        ]   
    ];

 
static poiDefs = [
    {
        poiName         : 'BMW World',
        poiLocation     : "48.177016,11.5565994",
        poiDescription  : 'Nowhere else can the brand be felt as strongly as here. BMW Welt is located in the immediate vicinity of the main BMW factory, the company’s headquarters in the legendary BMW Tower, and the BMW Museum. BMW Welt is a place full of stories in a place full of history.',
        poiBriefly      : "BMW World is provided by famous German car manufacturer",
        poiImageUrl     : "https://images.pexels.com/photos/705792/pexels-photo-705792.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
        poiName         : 'Schlossanlage Schleißheim',
        poiLocation     : "48.2477609,11.5662204",
        poiDescription  : "Schleißheim palace complex was founded by Duke Wilhelm V of Bavaria (1548-1626), who in 1597 purchased the isolated moorland farm of Schleißheim with its St Margaret's Chapel for a large sum of money from the Freising Cathedral chapter.",
        poiBriefly      : "Schleißheim palace complex founded by Duke Wilhelm V",
        poiImageUrl     : "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Nuevo_Palacio_Schleissheim%2C_Oberschleissheim%2C_Alemania%2C_2013-08-31%2C_DD_06.jpg/700px-Nuevo_Palacio_Schleissheim%2C_Oberschleissheim%2C_Alemania%2C_2013-08-31%2C_DD_06.jpg"
    },
    {
        poiName         : 'Starnberg',
        poiLocation     : "48.0061613,11.2583466",
        poiDescription  : "Starnberg is a small city 25 km away from munich and the region around 'Starnberger See' is famous for the people living here: sportsmen, actress, writers, filmregiseur and what most people don´t know: Luitpold Prinz von Bayern , the great-grandson of the last king of bavaria (Ludwig III.), also is from Starnberg",
        poiBriefly      : "Starnberg is a small city 25 km away from munich",
        poiImageUrl     : "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Starnberg-2.jpg/600px-Starnberg-2.jpg"
    },
    {
        poiName         : 'Kloster Andechs',
        poiLocation     : "47.97448,11.1806231",
        poiDescription  : "Seen from miles around atop Holy Mountain above the eastern bank of Ammer Lake, Andechs Monastery is the oldest pilgrimage church in Bavaria and since 1850, an asset of the Benedictine monastery, St. Boniface, in Munich.",
        poiBriefly      : "Seen from miles around atop Holy Mountain",
        poiImageUrl     : "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Deutschland%2C_Andechs%2C_Klosterkirche.JPG/440px-Deutschland%2C_Andechs%2C_Klosterkirche.JPG"
    },
    {
        poiName         : 'KZ Dachau',
        poiLocation     : "48.2701275,11.4660784",
        poiDescription  : "On March 22, 1933, a few weeks after Adolf Hitler had been appointed Reich Chancellor, a concentration camp for political prisoners was set up in Dachau. This camp served as a model for all later concentration camps and as a 'school of violence' for the SS men under whose command it stood. In the twelve years of its existence over 200.000 persons from all over Europe were imprisoned here and in the numerous subsidary camps. 41.500 were murdered. On April 29 1945, American troops liberated the survivors.",
        poiBriefly      : "concentration camp Dachau in second World War",
        poiImageUrl     : "https://de.wikipedia.org/wiki/Datei:Dachau_watchtower_b_1945-04.jpg"
    },
    {
        poiName         : 'Poschinger Weiher',
        poiLocation     : "48.200995,11.6411327",
        poiDescription  : "Poschinger Weiher is a lake, where you can also swim. Near the lake therer are two small hills, which are build of Schutt frojm the second wolrd war. On top of one of them you can have a view of munich.",
        poiBriefly      : "Lake surrounded by small schutt hills. Nice view of munich.",
        poiImageUrl     : "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Poschinger-Weiher-2006-07-18.jpg/600px-Poschinger-Weiher-2006-07-18.jpg"
    },
    {
        poiName         : 'Bräustüberl Tegernsee',
        poiLocation     : "47.7076548,11.7539559",
        poiDescription  : "Herzogliches Bräustüberl Tegernsee ('Ducal Brewery of Tegernsee') is a brewery in Tegernsee, Bavaria, Germany.,The brewery traces its roots back to a brewery that was allegedly founded in the year 1050 on the Tegernsee, in connection with Tegernsee Abbey, a Benedictine abbey that was founded in 746. The current brewery can trace its history back to 1675, when abbot Bernd Wenzel relocated the monastery's brewing right from Holzkirchen to Tegernsee. The brewery has operated under a number of different names, including Tegernseer Klosterbrauerei ('Tegernsee Monastic Brewery'). After the brewery was secularized at the beginning of the 19th century, the brewery was purchased by Maximilian I Joseph of Bavaria from Karl Joseph von Drechsel and incorporated under the name Königlich braunes Brauhaus Tegernsee ('Royal Brown Brewhouse of Tegernsee'). The brewery later changed its name to Herzoglich bayerisches Brauhaus ('Ducal Bavarian Brewhouse'). Since then, the brewery has been in the ownership of the House of Wittelsbach. The brewery is currently run by Duchess Maria Anna in Bayern, daughter of Prince Max, Duke in Bavaria.",
        poiBriefly      : "'Ducal Brewery of Tegernsee' is a brewery in Tegernsee",
        poiImageUrl     : "https://bayern.infomaxnet.de/data/mediadb/cms_pictures/generated/dba657a28419a7dd8ff17ae510a16095.jpg"
    },
    {
        poiName         : 'Museum Bad Tölz',
        poiLocation     : "47.7606962,11.5580924",
        poiDescription  : "The Stadtmuseum Bad Tölz presents a cross-section of the history of the Tölzer Land on three exhibition levels, with a history of more than 100 years.",
        poiBriefly      : "museum with three exhibition levels.",
        poiImageUrl     : "https://www.museen-in-bayern.de/uploads/tx_landesstelle/images/Bad_Toelz_Stadtmuseum_Bad_Toelz_Museumsphoto_Fassade.jpg"
    },
];

hardCodedTours(){
    //headline=
    // {item.headline} duration={item.duration} 
    // price={item.price} rating={item.rating}
    return [
        {
            routeName   : 'Nature, Beergarden, Seightseeing',
            duration    : "3 hrs",
            price       : "50 Euro",
            rating      : "4.5",
            image       : "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiu9sLn9J3hAhWO3KQKHX-SAfoQjRx6BAgBEAU&url=https%3A%2F%2Fwww.muenchen.de%2Fsehenswuerdigkeiten%2Forte%2F120242.html&psig=AOvVaw1UDGBmraEnDcog34QVLQ80&ust=1553624562893756"
        },
        {
            routeName   : 'History and Beergarden at Lake',
            duration    : "4 hrs",
            price       : "60 Euro",
            rating      : "4.0",
            image       : "https://maas-scotland.com/wp-content/uploads/2017/12/neuschwanstein-fussen-bavaria-1500-cs1.jpg",
        }
        ,
        {
            routeName   : 'Car driving and Bavarian Lakes',
            duration    : "3.5 hrs",
            price       : "30 Euro",
            rating      : "4.7",
            image       : "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwj_8Jzq9Z3hAhXJxqQKHUu_BvIQjRx6BAgBEAU&url=http%3A%2F%2Fwww.clickalps.com%2FPhoto-u177-w74022.html&psig=AOvVaw1R71qzMpgY37EM9opcjfMD&ust=1553624826536819"
        }
    ];
}
   
hardcodedPois(){
    return [
       {
           routeName   : 'Nature, Beergarden, Seightseeing',
           poiName         : 'BMW World',
           poiLocation     : "48.177016,11.5565994",
           poiDescription  : 'Nowhere else can the brand be felt as strongly as here. BMW Welt is located in the immediate vicinity of the main BMW factory, the company’s headquarters in the legendary BMW Tower, and the BMW Museum. BMW Welt is a place full of stories in a place full of history.',
           poiBriefly      : "BMW World is provided by famous German car manufacturer",
           poiImageUrl     : "https://images.pexels.com/photos/705792/pexels-photo-705792.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
       },
       {
           routeName   : 'Nature, Beergarden, Seightseeing',
           poiName         : 'Schlossanlage Schleißheim',
           poiLocation     : "48.2477609,11.5662204",
           poiDescription  : "Schleißheim palace complex was founded by Duke Wilhelm V of Bavaria (1548-1626), who in 1597 purchased the isolated moorland farm of Schleißheim with its St Margaret's Chapel for a large sum of money from the Freising Cathedral chapter.",
           poiBriefly      : "Schleißheim palace complex founded by Duke Wilhelm V",
           poiImageUrl     : "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Nuevo_Palacio_Schleissheim%2C_Oberschleissheim%2C_Alemania%2C_2013-08-31%2C_DD_06.jpg/700px-Nuevo_Palacio_Schleissheim%2C_Oberschleissheim%2C_Alemania%2C_2013-08-31%2C_DD_06.jpg"
       },
       {
           routeName   : 'Nature, Beergarden, Seightseeing',
           poiName         : 'Kloster Andechs',
           poiLocation     : "47.97448,11.1806231",
           poiDescription  : "Seen from miles around atop Holy Mountain above the eastern bank of Ammer Lake, Andechs Monastery is the oldest pilgrimage church in Bavaria and since 1850, an asset of the Benedictine monastery, St. Boniface, in Munich.",
           poiBriefly      : "Seen from miles around atop Holy Mountain",
           poiImageUrl     : "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Deutschland%2C_Andechs%2C_Klosterkirche.JPG/440px-Deutschland%2C_Andechs%2C_Klosterkirche.JPG"
       },
       // [1,0],[1,4],[1,5],[1,1],[1,0]
       {
           routeName   : 'History and Beergarden at Lake',
           poiName         : 'BMW World',
           poiLocation     : "48.177016,11.5565994",
           poiDescription  : 'Nowhere else can the brand be felt as strongly as here. BMW Welt is located in the immediate vicinity of the main BMW factory, the company’s headquarters in the legendary BMW Tower, and the BMW Museum. BMW Welt is a place full of stories in a place full of history.',
           poiBriefly      : "BMW World is provided by famous German car manufacturer",
           poiImageUrl     : "https://images.pexels.com/photos/705792/pexels-photo-705792.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
       },
       {
           routeName   : 'History andBbeergarden at Lake',
           poiName         : 'KZ Dachau',
           poiLocation     : "48.2701275,11.4660784",
           poiDescription  : "On March 22, 1933, a few weeks after Adolf Hitler had been appointed Reich Chancellor, a concentration camp for political prisoners was set up in Dachau. This camp served as a model for all later concentration camps and as a 'school of violence' for the SS men under whose command it stood. In the twelve years of its existence over 200.000 persons from all over Europe were imprisoned here and in the numerous subsidary camps. 41.500 were murdered. On April 29 1945, American troops liberated the survivors.",
           poiBriefly      : "concentration camp Dachau in second World War",
           poiImageUrl     : "https://de.wikipedia.org/wiki/Datei:Dachau_watchtower_b_1945-04.jpg"
       },
       {
           routeName   : 'History and Beergarden at Lake',
           poiName         : 'Poschinger Weiher',
           poiLocation     : "48.200995,11.6411327",
           poiDescription  : "Poschinger Weiher is a lake, where you can also swim. Near the lake therer are two small hills, which are build of Schutt frojm the second wolrd war. On top of one of them you can have a view of munich.",
           poiBriefly      : "Lake surrounded by small schutt hills. Nice view of munich.",
           poiImageUrl     : "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Poschinger-Weiher-2006-07-18.jpg/600px-Poschinger-Weiher-2006-07-18.jpg"
       },
       {
           routeName   : 'History and Beergarden at Lake',
           poiName         : 'Schlossanlage Schleißheim',
           poiLocation     : "48.2477609,11.5662204",
           poiDescription  : "Schleißheim palace complex was founded by Duke Wilhelm V of Bavaria (1548-1626), who in 1597 purchased the isolated moorland farm of Schleißheim with its St Margaret's Chapel for a large sum of money from the Freising Cathedral chapter.",
           poiBriefly      : "Schleißheim palace complex founded by Duke Wilhelm V",
           poiImageUrl     : "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Nuevo_Palacio_Schleissheim%2C_Oberschleissheim%2C_Alemania%2C_2013-08-31%2C_DD_06.jpg/700px-Nuevo_Palacio_Schleissheim%2C_Oberschleissheim%2C_Alemania%2C_2013-08-31%2C_DD_06.jpg"
       },
       {
           routeName   : 'History and Beergarden at Lake',
           poiName         : 'BMW World',
           poiLocation     : "48.177016,11.5565994",
           poiDescription  : 'Nowhere else can the brand be felt as strongly as here. BMW Welt is located in the immediate vicinity of the main BMW factory, the company’s headquarters in the legendary BMW Tower, and the BMW Museum. BMW Welt is a place full of stories in a place full of history.',
           poiBriefly      : "BMW World is provided by famous German car manufacturer",
           poiImageUrl     : "https://images.pexels.com/photos/705792/pexels-photo-705792.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
       },
       // [2,0],[2,6],[2,7],[2,2],[2,0]
       {
           routeName : 'Car driving and Bavarian Lakes',
           poiName         : 'BMW World',
           poiLocation     : "48.177016,11.5565994",
           poiDescription  : 'Nowhere else can the brand be felt as strongly as here. BMW Welt is located in the immediate vicinity of the main BMW factory, the company’s headquarters in the legendary BMW Tower, and the BMW Museum. BMW Welt is a place full of stories in a place full of history.',
           poiBriefly      : "BMW World is provided by famous German car manufacturer",
           poiImageUrl     : "https://images.pexels.com/photos/705792/pexels-photo-705792.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
       },
       {
           routeName : 'Car driving and Bavarian Lakes',
           poiName         : 'Bräustüberl Tegernsee',
           poiLocation     : "47.7076548,11.7539559",
           poiDescription  : "Herzogliches Bräustüberl Tegernsee ('Ducal Brewery of Tegernsee') is a brewery in Tegernsee, Bavaria, Germany.,The brewery traces its roots back to a brewery that was allegedly founded in the year 1050 on the Tegernsee, in connection with Tegernsee Abbey, a Benedictine abbey that was founded in 746. The current brewery can trace its history back to 1675, when abbot Bernd Wenzel relocated the monastery's brewing right from Holzkirchen to Tegernsee. The brewery has operated under a number of different names, including Tegernseer Klosterbrauerei ('Tegernsee Monastic Brewery'). After the brewery was secularized at the beginning of the 19th century, the brewery was purchased by Maximilian I Joseph of Bavaria from Karl Joseph von Drechsel and incorporated under the name Königlich braunes Brauhaus Tegernsee ('Royal Brown Brewhouse of Tegernsee'). The brewery later changed its name to Herzoglich bayerisches Brauhaus ('Ducal Bavarian Brewhouse'). Since then, the brewery has been in the ownership of the House of Wittelsbach. The brewery is currently run by Duchess Maria Anna in Bayern, daughter of Prince Max, Duke in Bavaria.",
           poiBriefly      : "'Ducal Brewery of Tegernsee' is a brewery in Tegernsee",
           poiImageUrl     : "https://bayern.infomaxnet.de/data/mediadb/cms_pictures/generated/dba657a28419a7dd8ff17ae510a16095.jpg"
       },
       {
           routeName : 'Car driving and Bavarian Lakes',
           poiName         : 'Museum Bad Tölz',
           poiLocation     : "47.7606962,11.5580924",
           poiDescription  : "The Stadtmuseum Bad Tölz presents a cross-section of the history of the Tölzer Land on three exhibition levels, with a history of more than 100 years.",
           poiBriefly      : "museum with three exhibition levels.",
           poiImageUrl     : "https://www.museen-in-bayern.de/uploads/tx_landesstelle/images/Bad_Toelz_Stadtmuseum_Bad_Toelz_Museumsphoto_Fassade.jpg"
       },
       {
           routeName : 'Car driving and Bavarian Lakes',
           poiName         : 'Starnberg',
           poiLocation     : "48.0061613,11.2583466",
           poiDescription  : "Starnberg is a small city 25 km away from munich and the region around 'Starnberger See' is famous for the people living here: sportsmen, actress, writers, filmregiseur and what most people don´t know: Luitpold Prinz von Bayern , the great-grandson of the last king of bavaria (Ludwig III.), also is from Starnberg",
           poiBriefly      : "Starnberg is a small city 25 km away from munich",
           poiImageUrl     : "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Starnberg-2.jpg/600px-Starnberg-2.jpg"
       }
   ];
}

    //////// End hard coded routes section 

    currentRoute = null;
    currentPoiIndex = null;
    // set xurrent route name
    setCurrentRouteName(routeName){
        currentRoute = routeName;
        currentPoiIndex = null;
    }
    getCurrentRouteName(){
        return currentRoute;
    }
    
    setCurrentPoiIndex(poiIndex){
       // if(this.currentRoute == null){
       //     throw new Error("set current route before poi index");
       // }
        currentPoiIndex = poiIndex;
    }
    getCurrentRouteIndex(){
        return currentPoiIndex;
    }
    
    
    
    // needs citi name for future use
    // returns array of map entries with given keys
    // routeName,PoiName,poiLocation,poiBriefDescription,poiDescription,poiImageUrl
    getAllRoutesContent(){
        return this.hardcodedPois();
    }
    // needs citi name for future use
    // returns array of map entries with given keys
    // routeName,PoiName,poiLocation,poiBriefDescription,poiDescription,poiImageUrl
    getAllRoutesContentDoNotUse(cityName){
        var routes = [];
        Database.routeDefs.forEach(rd => {
            // rd id a route definition array
            rd.forEach(poisInRoute => {
                poisInRoute.forEach(poiDef => { 
                    var indxRouteName = poiDef[0];
                    var indxPoi = poiDef[1];
                    var routePoi = {
                        ...Database.poiDefs[poiDef[0]],
                        routeName: Database.routeNames[poiDef[1]]};
                    routes.push(routePoi);   
                });
            });
        });
        return routes;
     }
      // needs result of getAllRoutesContent as allRoutesContent
      // returns array of Map entries for given key routeName = nameOfRoute
      getRouteContent(allRoutesContent, nameOfRoute){
         return this.getAllRoutesContent().filter(t=>t.routeName === nameOfRoute);
     }
     // returns aviable route (names) for given cityName
     // cityName is parameter for future use
     getTourNames(cityName){
         var result = [];
         Database.routeNames.forEach((rN)=>{
            result.push(rN);
         });
         return result;
     }

     getAllTours(cityName){
         return this.hardCodedTours();
     }


}

const dbInstance = new Database();

export default dbInstance;