{"filter":false,"title":"test.js","tooltip":"/test.js","undoManager":{"mark":17,"position":17,"stack":[[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":72,"column":7},"action":"insert","lines":["phantom.create(","","    function(err, ph) {","      return ph.createPage(function(err, page) {","        return page.open(\"https://www.easports.com/fifa/game-data/stats/thescrewcross/fifa15-ps4/futSeasons\", function(err, status) {","          console.log(\"opened site? \", status);","          page.includeJs('http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js', function(err) {","            return page.open(\"https://www.easports.com/fifa/game-data/stats/thescrewcross/fifa15-ps4/futSeasons\", function(err, status) {","              //jQuery Loaded.","              //Wait for a bit for AJAX content to load on the page. Here, we are waiting 5 seconds.","","              return page.evaluate(function() {","                //Get what you want from the page using jQuery. A good way is to populate an object with all the jQuery commands that you need and then return the object.","                var h2Arr = [],","                  pArr = [];","                $('div.table-list li div.align-right').each(function() {","                  h2Arr.push($(this).text());","                  console.log($(this).text());","                });","                $('p.stat-number').each(function() {","                  pArr.push($(this).text());","                  console.log($(this).text());","                });","                var wins, ties, losses, passSuccess, averagePossession, goalsAgainst, goalsScored = 0;","                var bestDivision, titlesWon, promotions, relegations, bestPoints, gamesPlayed, seasonsPlayed = 0;","                wins = json[0];","                ties = json[1];","                losses = json[2];","                passSuccess = parseInt(json[3]);","                averagePossession = parseInt(json[4]);","                goalsScored = json[6]","                goalsAgainst = json[7];","","                var bestseason = json2[1];","                var split = bestseason.indexOf(\"-\");","                bestDivision = parseInt(bestseason.substring(0, split)).replace(/\\D/g, '');","                bestPoints = parseInt(bestseason.substring(split + 1, bestseason.length));","                titlesWon = json2[2];","                promotions = json2[3];","                relegations = json2[4];","                var record = {","                  wins: wins,","                  ties: ties,","                  losses: losses","                };","                data = {","                  bestDivision: bestDivision,","                  bestPoints: bestPoints,","                  titlesWon: titlesWon,","                  promotions: promotions,","                  relegations: relegations,","                  goalsScored: goalsScored,","                  goalsAgainst: goalsAgainst,","                  gamesPlayed: gamesPlayed,","                  seasonsPlayed: seasonsPlayed,","                  record: record,","                  passSuccess: passSuccess,","                  averagePossession: averagePossession","                }","                console.log(JSON.stringify(data));","                return {","                  h2: h2Arr,","                  p: pArr","                };","              }, function(err, result) {","                console.log(result);","                ph.exit();","              });","            });","          });","        });","      });","    });"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":0,"column":38},"action":"insert","lines":["var phantom = require('node-phantom');"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":73,"column":7},"action":"remove","lines":["var phantom = require('node-phantom');","phantom.create(","","    function(err, ph) {","      return ph.createPage(function(err, page) {","        return page.open(\"https://www.easports.com/fifa/game-data/stats/thescrewcross/fifa15-ps4/futSeasons\", function(err, status) {","          console.log(\"opened site? \", status);","          page.includeJs('http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js', function(err) {","            return page.open(\"https://www.easports.com/fifa/game-data/stats/thescrewcross/fifa15-ps4/futSeasons\", function(err, status) {","              //jQuery Loaded.","              //Wait for a bit for AJAX content to load on the page. Here, we are waiting 5 seconds.","","              return page.evaluate(function() {","                //Get what you want from the page using jQuery. A good way is to populate an object with all the jQuery commands that you need and then return the object.","                var h2Arr = [],","                  pArr = [];","                $('div.table-list li div.align-right').each(function() {","                  h2Arr.push($(this).text());","                  console.log($(this).text());","                });","                $('p.stat-number').each(function() {","                  pArr.push($(this).text());","                  console.log($(this).text());","                });","                var wins, ties, losses, passSuccess, averagePossession, goalsAgainst, goalsScored = 0;","                var bestDivision, titlesWon, promotions, relegations, bestPoints, gamesPlayed, seasonsPlayed = 0;","                wins = json[0];","                ties = json[1];","                losses = json[2];","                passSuccess = parseInt(json[3]);","                averagePossession = parseInt(json[4]);","                goalsScored = json[6]","                goalsAgainst = json[7];","","                var bestseason = json2[1];","                var split = bestseason.indexOf(\"-\");","                bestDivision = parseInt(bestseason.substring(0, split)).replace(/\\D/g, '');","                bestPoints = parseInt(bestseason.substring(split + 1, bestseason.length));","                titlesWon = json2[2];","                promotions = json2[3];","                relegations = json2[4];","                var record = {","                  wins: wins,","                  ties: ties,","                  losses: losses","                };","                data = {","                  bestDivision: bestDivision,","                  bestPoints: bestPoints,","                  titlesWon: titlesWon,","                  promotions: promotions,","                  relegations: relegations,","                  goalsScored: goalsScored,","                  goalsAgainst: goalsAgainst,","                  gamesPlayed: gamesPlayed,","                  seasonsPlayed: seasonsPlayed,","                  record: record,","                  passSuccess: passSuccess,","                  averagePossession: averagePossession","                }","                console.log(JSON.stringify(data));","                return {","                  h2: h2Arr,","                  p: pArr","                };","              }, function(err, result) {","                console.log(result);","                ph.exit();","              });","            });","          });","        });","      });","    });"]},{"start":{"row":0,"column":0},"end":{"row":32,"column":3},"action":"insert","lines":["var phantom=require('node-phantom');","phantom.create(function(err,ph) {","  return ph.createPage(function(err,page) {","    return page.open(\"https://www.easports.com/fifa/game-data/stats/thescrewcross/fifa15-ps4/futSeasons\", function(err,status) {","      console.log(\"opened site? \", status);","      page.includeJs('http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js', function(err) {","        //jQuery Loaded.","        //Wait for a bit for AJAX content to load on the page. Here, we are waiting 5 seconds.","        setTimeout(function() {","          return page.evaluate(function() {","            //Get what you want from the page using jQuery. A good way is to populate an object with all the jQuery commands that you need and then return the object.","            var h2Arr = [],","            pArr = [];","            $('div.table-list li div.align-right').each(function() {","              h2Arr.push($(this).text());","            });","            $('p.stat-number').each(function() {","              pArr.push($(this).text());","            });","","            return {","              h2: h2Arr,","              p: pArr","            };","          }, function(err,result) {","            console.log(result);","            ph.exit();","          });","        }, 5000);","      });","    });","  });","});"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":24},"end":{"row":7,"column":0},"action":"insert","lines":["",""]},{"start":{"row":7,"column":0},"end":{"row":7,"column":8},"action":"insert","lines":["        "]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":8},"end":{"row":7,"column":125},"action":"insert","lines":["page.open(\"https://www.easports.com/fifa/game-data/stats/thescrewcross/fifa15-ps4/futSeasons\", function(err,status) {"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":8},"end":{"row":7,"column":9},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":9},"end":{"row":7,"column":10},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":10},"end":{"row":7,"column":11},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":11},"end":{"row":7,"column":12},"action":"insert","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":12},"end":{"row":7,"column":13},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":13},"end":{"row":7,"column":14},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":14},"end":{"row":7,"column":15},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":29,"column":17},"end":{"row":30,"column":0},"action":"insert","lines":["",""]},{"start":{"row":30,"column":0},"end":{"row":30,"column":8},"action":"insert","lines":["        "]}]}],[{"group":"doc","deltas":[{"start":{"row":30,"column":8},"end":{"row":30,"column":9},"action":"insert","lines":["}"]}]}],[{"group":"doc","deltas":[{"start":{"row":30,"column":9},"end":{"row":30,"column":10},"action":"insert","lines":[")"]}]}],[{"group":"doc","deltas":[{"start":{"row":30,"column":10},"end":{"row":30,"column":11},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":11},"end":{"row":0,"column":12},"action":"insert","lines":[" "]},{"start":{"row":0,"column":13},"end":{"row":0,"column":14},"action":"insert","lines":[" "]},{"start":{"row":1,"column":28},"end":{"row":1,"column":29},"action":"insert","lines":[" "]},{"start":{"row":2,"column":36},"end":{"row":2,"column":37},"action":"insert","lines":[" "]},{"start":{"row":3,"column":119},"end":{"row":3,"column":120},"action":"insert","lines":[" "]},{"start":{"row":7,"column":123},"end":{"row":7,"column":124},"action":"insert","lines":[" "]},{"start":{"row":8,"column":0},"end":{"row":8,"column":1},"action":"insert","lines":[" "]},{"start":{"row":8,"column":9},"end":{"row":8,"column":10},"action":"insert","lines":[" "]},{"start":{"row":9,"column":8},"end":{"row":9,"column":10},"action":"insert","lines":["  "]},{"start":{"row":10,"column":0},"end":{"row":10,"column":2},"action":"insert","lines":["  "]},{"start":{"row":11,"column":0},"end":{"row":11,"column":1},"action":"insert","lines":[" "]},{"start":{"row":11,"column":13},"end":{"row":11,"column":14},"action":"insert","lines":[" "]},{"start":{"row":12,"column":12},"end":{"row":12,"column":14},"action":"insert","lines":["  "]},{"start":{"row":13,"column":12},"end":{"row":13,"column":16},"action":"insert","lines":["    "]},{"start":{"row":14,"column":0},"end":{"row":14,"column":2},"action":"insert","lines":["  "]},{"start":{"row":15,"column":14},"end":{"row":15,"column":16},"action":"insert","lines":["  "]},{"start":{"row":16,"column":0},"end":{"row":16,"column":2},"action":"insert","lines":["  "]},{"start":{"row":17,"column":12},"end":{"row":17,"column":14},"action":"insert","lines":["  "]},{"start":{"row":18,"column":0},"end":{"row":18,"column":2},"action":"insert","lines":["  "]},{"start":{"row":19,"column":12},"end":{"row":19,"column":14},"action":"insert","lines":["  "]},{"start":{"row":21,"column":0},"end":{"row":21,"column":1},"action":"insert","lines":[" "]},{"start":{"row":21,"column":13},"end":{"row":21,"column":14},"action":"insert","lines":[" "]},{"start":{"row":22,"column":0},"end":{"row":22,"column":2},"action":"insert","lines":["  "]},{"start":{"row":23,"column":14},"end":{"row":23,"column":16},"action":"insert","lines":["  "]},{"start":{"row":24,"column":0},"end":{"row":24,"column":1},"action":"insert","lines":[" "]},{"start":{"row":24,"column":13},"end":{"row":24,"column":14},"action":"insert","lines":[" "]},{"start":{"row":25,"column":0},"end":{"row":25,"column":2},"action":"insert","lines":["  "]},{"start":{"row":25,"column":28},"end":{"row":25,"column":29},"action":"insert","lines":[" "]},{"start":{"row":26,"column":0},"end":{"row":26,"column":2},"action":"insert","lines":["  "]},{"start":{"row":27,"column":12},"end":{"row":27,"column":14},"action":"insert","lines":["  "]},{"start":{"row":28,"column":10},"end":{"row":28,"column":12},"action":"insert","lines":["  "]},{"start":{"row":29,"column":0},"end":{"row":29,"column":2},"action":"insert","lines":["  "]}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":19,"column":17},"end":{"row":19,"column":17},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1419134704420,"hash":"5e169c83a4062d72ccf525e239428b38dfa40848"}