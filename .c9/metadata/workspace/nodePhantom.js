{"filter":false,"title":"nodePhantom.js","tooltip":"/nodePhantom.js","undoManager":{"mark":67,"position":67,"stack":[[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":32,"column":3},"action":"insert","lines":["var phantom=require('node-phantom');","phantom.create(function(err,ph) {","  return ph.createPage(function(err,page) {","    return page.open(\"http://tilomitra.com/repository/screenscrape/ajax.html\", function(err,status) {","      console.log(\"opened site? \", status);","      page.includeJs('http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js', function(err) {","        //jQuery Loaded.","        //Wait for a bit for AJAX content to load on the page. Here, we are waiting 5 seconds.","        setTimeout(function() {","          return page.evaluate(function() {","            //Get what you want from the page using jQuery. A good way is to populate an object with all the jQuery commands that you need and then return the object.","            var h2Arr = [],","            pArr = [];","            $('h2').each(function() {","              h2Arr.push($(this).html());","            });","            $('p').each(function() {","              pArr.push($(this).html());","            });","","            return {","              h2: h2Arr,","              p: pArr","            };","          }, function(err,result) {","            console.log(result);","            ph.exit();","          });","        }, 5000);","      });","    });","  });","});"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":22},"end":{"row":3,"column":76},"action":"remove","lines":["http://tilomitra.com/repository/screenscrape/ajax.html"]},{"start":{"row":3,"column":22},"end":{"row":3,"column":103},"action":"insert","lines":["https://www.easports.com/fifa/game-data/stats/thescrewcross/fifa15-ps4/futSeasons"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":14},"end":{"row":13,"column":18},"action":"remove","lines":["'h2'"]},{"start":{"row":13,"column":14},"end":{"row":13,"column":24},"action":"insert","lines":["'div.stat'"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":14},"end":{"row":13,"column":24},"action":"remove","lines":["'div.stat'"]},{"start":{"row":13,"column":14},"end":{"row":13,"column":49},"action":"insert","lines":["'div.table-list li div.align-right'"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":14},"end":{"row":16,"column":17},"action":"remove","lines":["'p'"]},{"start":{"row":16,"column":14},"end":{"row":16,"column":29},"action":"insert","lines":["'p.stat-number'"]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":33},"end":{"row":14,"column":37},"action":"remove","lines":["html"]},{"start":{"row":14,"column":33},"end":{"row":14,"column":34},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":34},"end":{"row":14,"column":35},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":35},"end":{"row":14,"column":36},"action":"insert","lines":["x"]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":36},"end":{"row":14,"column":37},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":32},"end":{"row":17,"column":36},"action":"remove","lines":["html"]},{"start":{"row":17,"column":32},"end":{"row":17,"column":33},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":33},"end":{"row":17,"column":34},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":34},"end":{"row":17,"column":35},"action":"insert","lines":["x"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":35},"end":{"row":17,"column":36},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":8},"end":{"row":7,"column":0},"action":"insert","lines":["",""]},{"start":{"row":7,"column":0},"end":{"row":7,"column":8},"action":"insert","lines":["        "]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":8},"end":{"row":8,"column":0},"action":"insert","lines":["",""]},{"start":{"row":8,"column":0},"end":{"row":8,"column":8},"action":"insert","lines":["        "]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":8},"end":{"row":6,"column":125},"action":"insert","lines":["page.open(\"https://www.easports.com/fifa/game-data/stats/thescrewcross/fifa15-ps4/futSeasons\", function(err,status) {"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":8},"end":{"row":7,"column":9},"action":"insert","lines":["{"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":9},"end":{"row":7,"column":10},"action":"insert","lines":[")"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":9},"end":{"row":7,"column":10},"action":"remove","lines":[")"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":8},"end":{"row":7,"column":9},"action":"remove","lines":["{"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":8},"end":{"row":7,"column":9},"action":"insert","lines":["}"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":9},"end":{"row":7,"column":10},"action":"insert","lines":[")"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":10},"end":{"row":7,"column":11},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":10},"end":{"row":7,"column":11},"action":"remove","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":10},"end":{"row":7,"column":11},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":30,"column":8},"end":{"row":30,"column":17},"action":"remove","lines":["}, 5000);"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":7},"end":{"row":10,"column":31},"action":"remove","lines":[" setTimeout(function() {"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":11},"end":{"row":0,"column":12},"action":"insert","lines":[" "]},{"start":{"row":0,"column":13},"end":{"row":0,"column":14},"action":"insert","lines":[" "]},{"start":{"row":1,"column":28},"end":{"row":1,"column":29},"action":"insert","lines":[" "]},{"start":{"row":2,"column":36},"end":{"row":2,"column":37},"action":"insert","lines":[" "]},{"start":{"row":3,"column":119},"end":{"row":3,"column":120},"action":"insert","lines":[" "]},{"start":{"row":6,"column":116},"end":{"row":6,"column":117},"action":"insert","lines":[" "]},{"start":{"row":6,"column":126},"end":{"row":7,"column":8},"action":"remove","lines":["","        "]},{"start":{"row":9,"column":0},"end":{"row":9,"column":7},"action":"remove","lines":["       "]},{"start":{"row":10,"column":0},"end":{"row":10,"column":2},"action":"remove","lines":["  "]},{"start":{"row":11,"column":0},"end":{"row":11,"column":1},"action":"remove","lines":[" "]},{"start":{"row":11,"column":10},"end":{"row":11,"column":11},"action":"remove","lines":[" "]},{"start":{"row":12,"column":10},"end":{"row":12,"column":12},"action":"remove","lines":["  "]},{"start":{"row":14,"column":0},"end":{"row":14,"column":2},"action":"remove","lines":["  "]},{"start":{"row":15,"column":12},"end":{"row":15,"column":14},"action":"remove","lines":["  "]},{"start":{"row":16,"column":0},"end":{"row":16,"column":1},"action":"remove","lines":[" "]},{"start":{"row":16,"column":10},"end":{"row":16,"column":11},"action":"remove","lines":[" "]},{"start":{"row":17,"column":0},"end":{"row":17,"column":2},"action":"remove","lines":["  "]},{"start":{"row":18,"column":12},"end":{"row":18,"column":14},"action":"remove","lines":["  "]},{"start":{"row":19,"column":10},"end":{"row":19,"column":12},"action":"remove","lines":["  "]},{"start":{"row":21,"column":0},"end":{"row":21,"column":1},"action":"remove","lines":[" "]},{"start":{"row":21,"column":10},"end":{"row":21,"column":11},"action":"remove","lines":[" "]},{"start":{"row":22,"column":0},"end":{"row":22,"column":2},"action":"remove","lines":["  "]},{"start":{"row":23,"column":0},"end":{"row":23,"column":1},"action":"remove","lines":[" "]},{"start":{"row":23,"column":12},"end":{"row":23,"column":13},"action":"remove","lines":[" "]},{"start":{"row":24,"column":10},"end":{"row":24,"column":12},"action":"remove","lines":["  "]},{"start":{"row":25,"column":0},"end":{"row":25,"column":1},"action":"remove","lines":[" "]},{"start":{"row":25,"column":8},"end":{"row":25,"column":9},"action":"remove","lines":[" "]},{"start":{"row":25,"column":24},"end":{"row":25,"column":25},"action":"insert","lines":[" "]},{"start":{"row":26,"column":0},"end":{"row":26,"column":2},"action":"remove","lines":["  "]},{"start":{"row":27,"column":10},"end":{"row":27,"column":12},"action":"remove","lines":["  "]},{"start":{"row":28,"column":0},"end":{"row":28,"column":2},"action":"remove","lines":["  "]},{"start":{"row":29,"column":0},"end":{"row":29,"column":8},"action":"remove","lines":["        "]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":126},"end":{"row":6,"column":129},"action":"remove","lines":["});"]}]}],[{"group":"doc","deltas":[{"start":{"row":29,"column":0},"end":{"row":29,"column":3},"action":"insert","lines":["});"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":8},"end":{"row":7,"column":10},"action":"insert","lines":["  "]},{"start":{"row":8,"column":0},"end":{"row":8,"column":2},"action":"insert","lines":["  "]},{"start":{"row":10,"column":0},"end":{"row":10,"column":2},"action":"insert","lines":["  "]},{"start":{"row":11,"column":10},"end":{"row":11,"column":12},"action":"insert","lines":["  "]},{"start":{"row":12,"column":10},"end":{"row":12,"column":12},"action":"insert","lines":["  "]},{"start":{"row":13,"column":0},"end":{"row":13,"column":2},"action":"insert","lines":["  "]},{"start":{"row":14,"column":10},"end":{"row":14,"column":12},"action":"insert","lines":["  "]},{"start":{"row":15,"column":12},"end":{"row":15,"column":14},"action":"insert","lines":["  "]},{"start":{"row":16,"column":0},"end":{"row":16,"column":2},"action":"insert","lines":["  "]},{"start":{"row":17,"column":10},"end":{"row":17,"column":12},"action":"insert","lines":["  "]},{"start":{"row":18,"column":12},"end":{"row":18,"column":14},"action":"insert","lines":["  "]},{"start":{"row":19,"column":0},"end":{"row":19,"column":2},"action":"insert","lines":["  "]},{"start":{"row":21,"column":10},"end":{"row":21,"column":12},"action":"insert","lines":["  "]},{"start":{"row":22,"column":0},"end":{"row":22,"column":2},"action":"insert","lines":["  "]},{"start":{"row":23,"column":0},"end":{"row":23,"column":2},"action":"insert","lines":["  "]},{"start":{"row":24,"column":10},"end":{"row":24,"column":12},"action":"insert","lines":["  "]},{"start":{"row":25,"column":0},"end":{"row":25,"column":2},"action":"insert","lines":["  "]},{"start":{"row":26,"column":0},"end":{"row":26,"column":2},"action":"insert","lines":["  "]},{"start":{"row":27,"column":10},"end":{"row":27,"column":12},"action":"insert","lines":["  "]},{"start":{"row":28,"column":8},"end":{"row":28,"column":10},"action":"insert","lines":["  "]},{"start":{"row":29,"column":0},"end":{"row":29,"column":8},"action":"insert","lines":["        "]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":8},"end":{"row":6,"column":9},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":9},"end":{"row":6,"column":10},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":10},"end":{"row":6,"column":11},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":11},"end":{"row":6,"column":12},"action":"insert","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":12},"end":{"row":6,"column":13},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":13},"end":{"row":6,"column":14},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":14},"end":{"row":6,"column":15},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":38},"end":{"row":1,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":0},"end":{"row":3,"column":14},"action":"insert","lines":["var json = [];","var json2 = [];","var data = {};"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":14},"end":{"row":4,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":0},"end":{"row":24,"column":2},"action":"insert","lines":["  "]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":2},"end":{"row":24,"column":4},"action":"insert","lines":["  "]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":4},"end":{"row":24,"column":6},"action":"insert","lines":["  "]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":6},"end":{"row":24,"column":8},"action":"insert","lines":["  "]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":8},"end":{"row":24,"column":10},"action":"insert","lines":["  "]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":10},"end":{"row":24,"column":12},"action":"insert","lines":["  "]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":12},"end":{"row":40,"column":27},"action":"insert","lines":["    var wins, ties, losses, passSuccess, averagePossession, goalsAgainst, goalsScored = 0;","    var bestDivision, titlesWon, promotions, relegations, bestPoints, gamesPlayed, seasonsPlayed = 0;","    wins = json[0];","    ties = json[1];","    losses = json[2];","    passSuccess = parseInt(json[3]);","    averagePossession = parseInt(json[4]);","    goalsScored = json[6]","    goalsAgainst = json[7];","","    var bestseason = json2[1];","    var split = bestseason.indexOf(\"-\");","    bestDivision =parseInt(bestseason.substring(0, split)).replace(/\\D/g,'');","    bestPoints = parseInt(bestseason.substring(split + 1, bestseason.length));","    titlesWon = json2[2];","    promotions = json2[3];","    relegations = json2[4];"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":12},"end":{"row":24,"column":16},"action":"remove","lines":["    "]},{"start":{"row":25,"column":0},"end":{"row":25,"column":8},"action":"insert","lines":["        "]},{"start":{"row":26,"column":4},"end":{"row":26,"column":12},"action":"insert","lines":["        "]},{"start":{"row":27,"column":4},"end":{"row":27,"column":12},"action":"insert","lines":["        "]},{"start":{"row":28,"column":4},"end":{"row":28,"column":12},"action":"insert","lines":["        "]},{"start":{"row":29,"column":0},"end":{"row":29,"column":8},"action":"insert","lines":["        "]},{"start":{"row":30,"column":4},"end":{"row":30,"column":12},"action":"insert","lines":["        "]},{"start":{"row":31,"column":4},"end":{"row":31,"column":12},"action":"insert","lines":["        "]},{"start":{"row":32,"column":0},"end":{"row":32,"column":8},"action":"insert","lines":["        "]},{"start":{"row":34,"column":0},"end":{"row":34,"column":8},"action":"insert","lines":["        "]},{"start":{"row":35,"column":0},"end":{"row":35,"column":8},"action":"insert","lines":["        "]},{"start":{"row":36,"column":0},"end":{"row":36,"column":8},"action":"insert","lines":["        "]},{"start":{"row":36,"column":26},"end":{"row":36,"column":27},"action":"insert","lines":[" "]},{"start":{"row":36,"column":82},"end":{"row":36,"column":83},"action":"insert","lines":[" "]},{"start":{"row":37,"column":0},"end":{"row":37,"column":8},"action":"insert","lines":["        "]},{"start":{"row":38,"column":4},"end":{"row":38,"column":12},"action":"insert","lines":["        "]},{"start":{"row":39,"column":0},"end":{"row":39,"column":8},"action":"insert","lines":["        "]},{"start":{"row":40,"column":0},"end":{"row":40,"column":8},"action":"insert","lines":["        "]}]}],[{"group":"doc","deltas":[{"start":{"row":40,"column":35},"end":{"row":41,"column":0},"action":"insert","lines":["",""]},{"start":{"row":41,"column":0},"end":{"row":41,"column":12},"action":"insert","lines":["            "]}]}],[{"group":"doc","deltas":[{"start":{"row":41,"column":12},"end":{"row":45,"column":6},"action":"insert","lines":["    var record = {","        wins: wins,","        ties: ties,","        losses: losses","    };"]}]}],[{"group":"doc","deltas":[{"start":{"row":41,"column":12},"end":{"row":41,"column":16},"action":"remove","lines":["    "]},{"start":{"row":42,"column":8},"end":{"row":42,"column":14},"action":"insert","lines":["      "]},{"start":{"row":43,"column":0},"end":{"row":43,"column":5},"action":"insert","lines":["     "]},{"start":{"row":43,"column":13},"end":{"row":43,"column":14},"action":"insert","lines":[" "]},{"start":{"row":44,"column":0},"end":{"row":44,"column":6},"action":"insert","lines":["      "]},{"start":{"row":45,"column":0},"end":{"row":45,"column":8},"action":"insert","lines":["        "]}]}],[{"group":"doc","deltas":[{"start":{"row":45,"column":14},"end":{"row":46,"column":0},"action":"insert","lines":["",""]},{"start":{"row":46,"column":0},"end":{"row":46,"column":12},"action":"insert","lines":["            "]}]}],[{"group":"doc","deltas":[{"start":{"row":46,"column":12},"end":{"row":60,"column":38},"action":"insert","lines":["data = {","        bestDivision: bestDivision,","        bestPoints: bestPoints,","        titlesWon: titlesWon,","        promotions: promotions,","        relegations: relegations,","        goalsScored: goalsScored,","        goalsAgainst: goalsAgainst,","        gamesPlayed: gamesPlayed,","        seasonsPlayed: seasonsPlayed,","        record: record,","        passSuccess: passSuccess,","        averagePossession: averagePossession","    }","    console.log(JSON.stringify(data));"]}]}],[{"group":"doc","deltas":[{"start":{"row":47,"column":8},"end":{"row":47,"column":14},"action":"insert","lines":["      "]},{"start":{"row":48,"column":0},"end":{"row":48,"column":5},"action":"insert","lines":["     "]},{"start":{"row":48,"column":13},"end":{"row":48,"column":14},"action":"insert","lines":[" "]},{"start":{"row":49,"column":0},"end":{"row":49,"column":5},"action":"insert","lines":["     "]},{"start":{"row":49,"column":13},"end":{"row":49,"column":14},"action":"insert","lines":[" "]},{"start":{"row":50,"column":0},"end":{"row":50,"column":4},"action":"insert","lines":["    "]},{"start":{"row":50,"column":12},"end":{"row":50,"column":14},"action":"insert","lines":["  "]},{"start":{"row":51,"column":0},"end":{"row":51,"column":4},"action":"insert","lines":["    "]},{"start":{"row":51,"column":12},"end":{"row":51,"column":14},"action":"insert","lines":["  "]},{"start":{"row":52,"column":0},"end":{"row":52,"column":3},"action":"insert","lines":["   "]},{"start":{"row":52,"column":11},"end":{"row":52,"column":14},"action":"insert","lines":["   "]},{"start":{"row":53,"column":0},"end":{"row":53,"column":3},"action":"insert","lines":["   "]},{"start":{"row":53,"column":11},"end":{"row":53,"column":14},"action":"insert","lines":["   "]},{"start":{"row":54,"column":0},"end":{"row":54,"column":2},"action":"insert","lines":["  "]},{"start":{"row":54,"column":10},"end":{"row":54,"column":14},"action":"insert","lines":["    "]},{"start":{"row":55,"column":0},"end":{"row":55,"column":6},"action":"insert","lines":["      "]},{"start":{"row":56,"column":0},"end":{"row":56,"column":1},"action":"insert","lines":[" "]},{"start":{"row":56,"column":9},"end":{"row":56,"column":14},"action":"insert","lines":["     "]},{"start":{"row":57,"column":0},"end":{"row":57,"column":6},"action":"insert","lines":["      "]},{"start":{"row":58,"column":8},"end":{"row":58,"column":14},"action":"insert","lines":["      "]},{"start":{"row":59,"column":4},"end":{"row":59,"column":12},"action":"insert","lines":["        "]},{"start":{"row":60,"column":0},"end":{"row":60,"column":8},"action":"insert","lines":["        "]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":15},"end":{"row":5,"column":16},"action":"insert","lines":[","]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":15},"end":{"row":12,"column":5},"action":"insert","lines":["{","    verbose: true,","    logLevel: 'error',","    pageSettings: {","        loadImages: false,","        loadPlugins: false,","        userAgent: 'Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1547.2 Safari/537.36'","    }"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":4},"end":{"row":6,"column":6},"action":"insert","lines":["  "]},{"start":{"row":7,"column":0},"end":{"row":7,"column":2},"action":"insert","lines":["  "]},{"start":{"row":8,"column":0},"end":{"row":8,"column":2},"action":"insert","lines":["  "]},{"start":{"row":12,"column":4},"end":{"row":12,"column":6},"action":"insert","lines":["  "]},{"start":{"row":12,"column":8},"end":{"row":13,"column":6},"action":"insert","lines":["","      "]},{"start":{"row":14,"column":0},"end":{"row":14,"column":6},"action":"insert","lines":["      "]},{"start":{"row":15,"column":0},"end":{"row":15,"column":6},"action":"insert","lines":["      "]},{"start":{"row":16,"column":0},"end":{"row":16,"column":6},"action":"insert","lines":["      "]},{"start":{"row":17,"column":6},"end":{"row":17,"column":12},"action":"insert","lines":["      "]},{"start":{"row":18,"column":0},"end":{"row":18,"column":6},"action":"insert","lines":["      "]},{"start":{"row":19,"column":0},"end":{"row":19,"column":1},"action":"insert","lines":[" "]},{"start":{"row":19,"column":11},"end":{"row":19,"column":16},"action":"insert","lines":["     "]},{"start":{"row":20,"column":0},"end":{"row":20,"column":6},"action":"insert","lines":["      "]},{"start":{"row":22,"column":0},"end":{"row":22,"column":2},"action":"insert","lines":["  "]},{"start":{"row":22,"column":12},"end":{"row":22,"column":16},"action":"insert","lines":["    "]},{"start":{"row":23,"column":0},"end":{"row":23,"column":6},"action":"insert","lines":["      "]},{"start":{"row":24,"column":12},"end":{"row":24,"column":18},"action":"insert","lines":["      "]},{"start":{"row":25,"column":14},"end":{"row":25,"column":20},"action":"insert","lines":["      "]},{"start":{"row":26,"column":0},"end":{"row":26,"column":5},"action":"insert","lines":["     "]},{"start":{"row":26,"column":17},"end":{"row":26,"column":18},"action":"insert","lines":[" "]},{"start":{"row":27,"column":14},"end":{"row":27,"column":20},"action":"insert","lines":["      "]},{"start":{"row":28,"column":0},"end":{"row":28,"column":6},"action":"insert","lines":["      "]},{"start":{"row":29,"column":12},"end":{"row":29,"column":18},"action":"insert","lines":["      "]},{"start":{"row":30,"column":14},"end":{"row":30,"column":20},"action":"insert","lines":["      "]},{"start":{"row":31,"column":0},"end":{"row":31,"column":1},"action":"insert","lines":[" "]},{"start":{"row":31,"column":13},"end":{"row":31,"column":18},"action":"insert","lines":["     "]},{"start":{"row":32,"column":0},"end":{"row":32,"column":6},"action":"insert","lines":["      "]},{"start":{"row":33,"column":0},"end":{"row":33,"column":3},"action":"insert","lines":["   "]},{"start":{"row":33,"column":15},"end":{"row":33,"column":18},"action":"insert","lines":["   "]},{"start":{"row":34,"column":12},"end":{"row":34,"column":18},"action":"insert","lines":["      "]},{"start":{"row":35,"column":0},"end":{"row":35,"column":4},"action":"insert","lines":["    "]},{"start":{"row":35,"column":16},"end":{"row":35,"column":18},"action":"insert","lines":["  "]},{"start":{"row":36,"column":0},"end":{"row":36,"column":6},"action":"insert","lines":["      "]},{"start":{"row":37,"column":0},"end":{"row":37,"column":5},"action":"insert","lines":["     "]},{"start":{"row":37,"column":17},"end":{"row":37,"column":18},"action":"insert","lines":[" "]},{"start":{"row":38,"column":0},"end":{"row":38,"column":6},"action":"insert","lines":["      "]},{"start":{"row":39,"column":0},"end":{"row":39,"column":6},"action":"insert","lines":["      "]},{"start":{"row":40,"column":12},"end":{"row":40,"column":18},"action":"insert","lines":["      "]},{"start":{"row":42,"column":0},"end":{"row":42,"column":6},"action":"insert","lines":["      "]},{"start":{"row":43,"column":0},"end":{"row":43,"column":2},"action":"insert","lines":["  "]},{"start":{"row":43,"column":14},"end":{"row":43,"column":18},"action":"insert","lines":["    "]},{"start":{"row":44,"column":0},"end":{"row":44,"column":6},"action":"insert","lines":["      "]},{"start":{"row":45,"column":0},"end":{"row":45,"column":3},"action":"insert","lines":["   "]},{"start":{"row":45,"column":15},"end":{"row":45,"column":18},"action":"insert","lines":["   "]},{"start":{"row":46,"column":12},"end":{"row":46,"column":18},"action":"insert","lines":["      "]},{"start":{"row":47,"column":0},"end":{"row":47,"column":4},"action":"insert","lines":["    "]},{"start":{"row":47,"column":16},"end":{"row":47,"column":18},"action":"insert","lines":["  "]},{"start":{"row":48,"column":0},"end":{"row":48,"column":6},"action":"insert","lines":["      "]},{"start":{"row":49,"column":0},"end":{"row":49,"column":5},"action":"insert","lines":["     "]},{"start":{"row":49,"column":17},"end":{"row":49,"column":18},"action":"insert","lines":[" "]},{"start":{"row":50,"column":0},"end":{"row":50,"column":6},"action":"insert","lines":["      "]},{"start":{"row":51,"column":14},"end":{"row":51,"column":20},"action":"insert","lines":["      "]},{"start":{"row":52,"column":0},"end":{"row":52,"column":1},"action":"insert","lines":[" "]},{"start":{"row":52,"column":15},"end":{"row":52,"column":20},"action":"insert","lines":["     "]},{"start":{"row":53,"column":12},"end":{"row":53,"column":18},"action":"insert","lines":["      "]},{"start":{"row":54,"column":0},"end":{"row":54,"column":2},"action":"insert","lines":["  "]},{"start":{"row":54,"column":14},"end":{"row":54,"column":18},"action":"insert","lines":["    "]},{"start":{"row":55,"column":0},"end":{"row":55,"column":6},"action":"insert","lines":["      "]},{"start":{"row":56,"column":0},"end":{"row":56,"column":3},"action":"insert","lines":["   "]},{"start":{"row":56,"column":17},"end":{"row":56,"column":20},"action":"insert","lines":["   "]},{"start":{"row":57,"column":14},"end":{"row":57,"column":20},"action":"insert","lines":["      "]},{"start":{"row":58,"column":0},"end":{"row":58,"column":4},"action":"insert","lines":["    "]},{"start":{"row":58,"column":18},"end":{"row":58,"column":20},"action":"insert","lines":["  "]},{"start":{"row":59,"column":0},"end":{"row":59,"column":6},"action":"insert","lines":["      "]},{"start":{"row":60,"column":0},"end":{"row":60,"column":6},"action":"insert","lines":["      "]},{"start":{"row":61,"column":14},"end":{"row":61,"column":20},"action":"insert","lines":["      "]},{"start":{"row":62,"column":14},"end":{"row":62,"column":20},"action":"insert","lines":["      "]},{"start":{"row":63,"column":0},"end":{"row":63,"column":1},"action":"insert","lines":[" "]},{"start":{"row":63,"column":15},"end":{"row":63,"column":20},"action":"insert","lines":["     "]},{"start":{"row":64,"column":14},"end":{"row":64,"column":20},"action":"insert","lines":["      "]},{"start":{"row":65,"column":0},"end":{"row":65,"column":2},"action":"insert","lines":["  "]},{"start":{"row":65,"column":16},"end":{"row":65,"column":20},"action":"insert","lines":["    "]},{"start":{"row":66,"column":0},"end":{"row":66,"column":6},"action":"insert","lines":["      "]},{"start":{"row":67,"column":0},"end":{"row":67,"column":3},"action":"insert","lines":["   "]},{"start":{"row":67,"column":15},"end":{"row":67,"column":18},"action":"insert","lines":["   "]},{"start":{"row":68,"column":0},"end":{"row":68,"column":6},"action":"insert","lines":["      "]},{"start":{"row":69,"column":0},"end":{"row":69,"column":5},"action":"insert","lines":["     "]},{"start":{"row":69,"column":17},"end":{"row":69,"column":18},"action":"insert","lines":[" "]},{"start":{"row":70,"column":0},"end":{"row":70,"column":6},"action":"insert","lines":["      "]},{"start":{"row":71,"column":0},"end":{"row":71,"column":6},"action":"insert","lines":["      "]},{"start":{"row":72,"column":12},"end":{"row":72,"column":18},"action":"insert","lines":["      "]},{"start":{"row":73,"column":0},"end":{"row":73,"column":6},"action":"insert","lines":["      "]},{"start":{"row":74,"column":0},"end":{"row":74,"column":1},"action":"insert","lines":[" "]},{"start":{"row":74,"column":13},"end":{"row":74,"column":18},"action":"insert","lines":["     "]},{"start":{"row":75,"column":12},"end":{"row":75,"column":18},"action":"insert","lines":["      "]},{"start":{"row":75,"column":26},"end":{"row":78,"column":13},"action":"insert","lines":[");","                });","              });","            }"]},{"start":{"row":81,"column":6},"end":{"row":84,"column":0},"action":"remove","lines":["});","    });","  });",""]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":8},"end":{"row":13,"column":0},"action":"insert","lines":["",""]},{"start":{"row":13,"column":0},"end":{"row":13,"column":6},"action":"insert","lines":["      "]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":6},"end":{"row":13,"column":7},"action":"insert","lines":["}"]},{"start":{"row":13,"column":0},"end":{"row":13,"column":6},"action":"remove","lines":["      "]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":4},"end":{"row":6,"column":6},"action":"remove","lines":["  "]},{"start":{"row":7,"column":0},"end":{"row":7,"column":2},"action":"remove","lines":["  "]},{"start":{"row":8,"column":0},"end":{"row":8,"column":1},"action":"remove","lines":[" "]},{"start":{"row":8,"column":4},"end":{"row":8,"column":5},"action":"remove","lines":[" "]},{"start":{"row":9,"column":0},"end":{"row":9,"column":2},"action":"remove","lines":["  "]},{"start":{"row":10,"column":0},"end":{"row":10,"column":2},"action":"remove","lines":["  "]},{"start":{"row":11,"column":6},"end":{"row":11,"column":8},"action":"remove","lines":["  "]},{"start":{"row":12,"column":4},"end":{"row":12,"column":6},"action":"remove","lines":["  "]},{"start":{"row":12,"column":6},"end":{"row":13,"column":1},"action":"remove","lines":["","}"]},{"start":{"row":13,"column":2},"end":{"row":13,"column":4},"action":"remove","lines":["  "]},{"start":{"row":13,"column":2},"end":{"row":15,"column":0},"action":"insert","lines":["}","",""]},{"start":{"row":16,"column":0},"end":{"row":16,"column":4},"action":"remove","lines":["    "]},{"start":{"row":17,"column":0},"end":{"row":17,"column":4},"action":"remove","lines":["    "]},{"start":{"row":18,"column":8},"end":{"row":18,"column":12},"action":"remove","lines":["    "]},{"start":{"row":19,"column":0},"end":{"row":19,"column":4},"action":"remove","lines":["    "]},{"start":{"row":20,"column":0},"end":{"row":20,"column":1},"action":"remove","lines":[" "]},{"start":{"row":20,"column":10},"end":{"row":20,"column":13},"action":"remove","lines":["   "]},{"start":{"row":21,"column":12},"end":{"row":21,"column":16},"action":"remove","lines":["    "]},{"start":{"row":22,"column":0},"end":{"row":22,"column":3},"action":"remove","lines":["   "]},{"start":{"row":22,"column":12},"end":{"row":22,"column":13},"action":"remove","lines":[" "]},{"start":{"row":24,"column":12},"end":{"row":24,"column":16},"action":"remove","lines":["    "]},{"start":{"row":25,"column":0},"end":{"row":25,"column":4},"action":"remove","lines":["    "]},{"start":{"row":26,"column":14},"end":{"row":26,"column":18},"action":"remove","lines":["    "]},{"start":{"row":27,"column":16},"end":{"row":27,"column":20},"action":"remove","lines":["    "]},{"start":{"row":28,"column":0},"end":{"row":28,"column":1},"action":"remove","lines":[" "]},{"start":{"row":28,"column":14},"end":{"row":28,"column":17},"action":"remove","lines":["   "]},{"start":{"row":29,"column":16},"end":{"row":29,"column":20},"action":"remove","lines":["    "]},{"start":{"row":30,"column":0},"end":{"row":30,"column":2},"action":"remove","lines":["  "]},{"start":{"row":30,"column":14},"end":{"row":30,"column":16},"action":"remove","lines":["  "]},{"start":{"row":31,"column":0},"end":{"row":31,"column":4},"action":"remove","lines":["    "]},{"start":{"row":32,"column":0},"end":{"row":32,"column":4},"action":"remove","lines":["    "]},{"start":{"row":33,"column":14},"end":{"row":33,"column":18},"action":"remove","lines":["    "]},{"start":{"row":34,"column":0},"end":{"row":34,"column":4},"action":"remove","lines":["    "]},{"start":{"row":35,"column":0},"end":{"row":35,"column":1},"action":"remove","lines":[" "]},{"start":{"row":35,"column":14},"end":{"row":35,"column":17},"action":"remove","lines":["   "]},{"start":{"row":36,"column":14},"end":{"row":36,"column":18},"action":"remove","lines":["    "]},{"start":{"row":37,"column":0},"end":{"row":37,"column":4},"action":"remove","lines":["    "]},{"start":{"row":38,"column":14},"end":{"row":38,"column":18},"action":"remove","lines":["    "]},{"start":{"row":39,"column":0},"end":{"row":39,"column":4},"action":"remove","lines":["    "]},{"start":{"row":40,"column":14},"end":{"row":40,"column":18},"action":"remove","lines":["    "]},{"start":{"row":41,"column":14},"end":{"row":41,"column":18},"action":"remove","lines":["    "]},{"start":{"row":42,"column":0},"end":{"row":42,"column":2},"action":"remove","lines":["  "]},{"start":{"row":42,"column":14},"end":{"row":42,"column":16},"action":"remove","lines":["  "]},{"start":{"row":44,"column":0},"end":{"row":44,"column":4},"action":"remove","lines":["    "]},{"start":{"row":45,"column":0},"end":{"row":45,"column":3},"action":"remove","lines":["   "]},{"start":{"row":45,"column":14},"end":{"row":45,"column":15},"action":"remove","lines":[" "]},{"start":{"row":46,"column":0},"end":{"row":46,"column":4},"action":"remove","lines":["    "]},{"start":{"row":47,"column":0},"end":{"row":47,"column":4},"action":"remove","lines":["    "]},{"start":{"row":48,"column":14},"end":{"row":48,"column":18},"action":"remove","lines":["    "]},{"start":{"row":49,"column":0},"end":{"row":49,"column":4},"action":"remove","lines":["    "]},{"start":{"row":50,"column":0},"end":{"row":50,"column":1},"action":"remove","lines":[" "]},{"start":{"row":50,"column":14},"end":{"row":50,"column":17},"action":"remove","lines":["   "]},{"start":{"row":51,"column":14},"end":{"row":51,"column":18},"action":"remove","lines":["    "]},{"start":{"row":52,"column":0},"end":{"row":52,"column":3},"action":"remove","lines":["   "]},{"start":{"row":52,"column":16},"end":{"row":52,"column":17},"action":"remove","lines":[" "]},{"start":{"row":53,"column":0},"end":{"row":53,"column":4},"action":"remove","lines":["    "]},{"start":{"row":54,"column":0},"end":{"row":54,"column":4},"action":"remove","lines":["    "]},{"start":{"row":55,"column":14},"end":{"row":55,"column":18},"action":"remove","lines":["    "]},{"start":{"row":56,"column":0},"end":{"row":56,"column":4},"action":"remove","lines":["    "]},{"start":{"row":57,"column":0},"end":{"row":57,"column":2},"action":"remove","lines":["  "]},{"start":{"row":57,"column":16},"end":{"row":57,"column":18},"action":"remove","lines":["  "]},{"start":{"row":58,"column":16},"end":{"row":58,"column":20},"action":"remove","lines":["    "]},{"start":{"row":59,"column":0},"end":{"row":59,"column":3},"action":"remove","lines":["   "]},{"start":{"row":59,"column":16},"end":{"row":59,"column":17},"action":"remove","lines":[" "]},{"start":{"row":60,"column":0},"end":{"row":60,"column":4},"action":"remove","lines":["    "]},{"start":{"row":61,"column":16},"end":{"row":61,"column":20},"action":"remove","lines":["    "]},{"start":{"row":62,"column":0},"end":{"row":62,"column":1},"action":"remove","lines":[" "]},{"start":{"row":62,"column":16},"end":{"row":62,"column":19},"action":"remove","lines":["   "]},{"start":{"row":63,"column":0},"end":{"row":63,"column":4},"action":"remove","lines":["    "]},{"start":{"row":64,"column":0},"end":{"row":64,"column":2},"action":"remove","lines":["  "]},{"start":{"row":64,"column":16},"end":{"row":64,"column":18},"action":"remove","lines":["  "]},{"start":{"row":65,"column":0},"end":{"row":65,"column":4},"action":"remove","lines":["    "]},{"start":{"row":66,"column":0},"end":{"row":66,"column":3},"action":"remove","lines":["   "]},{"start":{"row":66,"column":16},"end":{"row":66,"column":17},"action":"remove","lines":[" "]},{"start":{"row":67,"column":0},"end":{"row":67,"column":4},"action":"remove","lines":["    "]},{"start":{"row":68,"column":0},"end":{"row":68,"column":4},"action":"remove","lines":["    "]},{"start":{"row":69,"column":14},"end":{"row":69,"column":18},"action":"remove","lines":["    "]},{"start":{"row":70,"column":0},"end":{"row":70,"column":4},"action":"remove","lines":["    "]},{"start":{"row":71,"column":14},"end":{"row":71,"column":18},"action":"remove","lines":["    "]},{"start":{"row":72,"column":0},"end":{"row":72,"column":4},"action":"remove","lines":["    "]},{"start":{"row":73,"column":0},"end":{"row":73,"column":3},"action":"remove","lines":["   "]},{"start":{"row":73,"column":16},"end":{"row":73,"column":17},"action":"remove","lines":[" "]},{"start":{"row":74,"column":14},"end":{"row":74,"column":18},"action":"remove","lines":["    "]},{"start":{"row":75,"column":0},"end":{"row":75,"column":4},"action":"remove","lines":["    "]},{"start":{"row":76,"column":14},"end":{"row":76,"column":18},"action":"remove","lines":["    "]},{"start":{"row":77,"column":14},"end":{"row":77,"column":18},"action":"remove","lines":["    "]},{"start":{"row":77,"column":22},"end":{"row":79,"column":15},"action":"remove","lines":[");","                });","              }"]},{"start":{"row":81,"column":4},"end":{"row":83,"column":0},"action":"insert","lines":["  });","    });",""]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":5},"end":{"row":12,"column":6},"action":"remove","lines":[","]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":3},"end":{"row":13,"column":4},"action":"insert","lines":[","]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":15},"end":{"row":13,"column":3},"action":"remove","lines":["{","    verbose: true,","    logLevel: 'error',","    pageSettings: {","      loadImages: false,","      loadPlugins: false,","      userAgent: 'Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1547.2 Safari/537.36'","    }","  }"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":15},"end":{"row":5,"column":16},"action":"remove","lines":[","]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":0},"end":{"row":2,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":0},"end":{"row":3,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":0},"end":{"row":2,"column":0},"action":"insert","lines":["",""]}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":2,"column":0},"end":{"row":2,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1419101904898,"hash":"817b6d873559dba623ed1c56b7e6eefcd33c1b35"}