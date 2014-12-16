{"changed":true,"filter":false,"title":"Scraper.js","tooltip":"/Scraper.js","value":"var http = require('http');\nvar cheerio = require('cheerio');\nvar util = require('util');\nvar EventEmitter = require('events').EventEmitter;\nvar STATUS_CODES = http.STATUS_CODES;\n/*\n * Scraper Constructor\n **/\nfunction Scraper(url, type) {\n    this.url = url;\n    this.fixtures = [];\n    this.init();\n    this.type = type;\n  }\n  /*\n   * Make it an EventEmitter\n   **/\nutil.inherits(Scraper, EventEmitter);\n\nScraper.prototype.init = function() {\n  //var fixtures;\n  var self = this;\n  self.on('loaded', function(html) {\n    console.log('self.on(loaded)' + '\\n');\n    self.fixtures = self.parsePage(html);\n    self.emit('complete', self.fixtures);\n  });\n  self.loadWebPage();\n};\nScraper.prototype.loadWebPage = function() {\n  var self = this;\n  console.log('loading web page');\n  http.get(self.url, function(res) {\n      var body = '';\n      if (res.statusCode !== 200) {\n        console.log(\"'self.emit('error')\");\n        return self.emit('error', STATUS_CODES[res.statusCode]);\n        //self.emit('error', STATUS_CODES[res.statusCode]);\n      }\n      res.on('data', function(chunk) {\n        body += chunk;\n      });\n      res.on('end', function() {\n        console.log(\"res.on('end')\");\n        self.emit('loaded', body);\n      });\n    })\n    .on('error', function(err) {\n      self.emit('error', err);\n    });\n};\n/*\n * Parse html and return an object\n **/\nScraper.prototype.parsePage = function(data) {\n  var self = this;\n  console.log(\"parsePage\");\n  var jsonObject = JSON.parse(data);\n  var html = jsonObject.commands[0].parameters.content;\n  //console.log('Html \\n'+html);\n  //console.log(data);\n  var lists = [];\n  var $ = cheerio.load(html);\n  if (self.type == 'matches') {\n    lists = parseMatches($);\n  }\n  \n  return lists;\n};\n\nfunction parseMatches($) {\n  var lists = [];\n  $('table.matches tbody tr').each(function(i, prod) {\n    var teamA = $('td.team.team-a', this).text();\n    var league = 'Bundesliga';\n    var teamB = $('td.team.team-b', this).text();\n    var score = $('td.score-time.score', this).text().trim().split('-');\n    var homeScore = score[0].trim();\n    var awayScore = score[1].trim();\n    var season = 2014;\n    var week = 15;\n    var json = {\n\n      teamA: teamA,\n      teamB: teamB,\n      homeScore: homeScore,\n      awayScore: awayScore,\n      season: season,\n      week: week,\n      league: league\n    }\n    lists.push(json);\n  });\n  return lists;\n}\nmodule.exports = Scraper;","undoManager":{"mark":98,"position":100,"stack":[[{"group":"doc","deltas":[{"start":{"row":65,"column":2},"end":{"row":65,"column":4},"action":"remove","lines":["  "]}]}],[{"group":"doc","deltas":[{"start":{"row":65,"column":0},"end":{"row":65,"column":2},"action":"remove","lines":["  "]}]}],[{"group":"doc","deltas":[{"start":{"row":64,"column":31},"end":{"row":65,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":86,"column":3},"end":{"row":87,"column":0},"action":"insert","lines":["",""]},{"start":{"row":87,"column":0},"end":{"row":87,"column":2},"action":"insert","lines":["  "]}]}],[{"group":"doc","deltas":[{"start":{"row":87,"column":0},"end":{"row":87,"column":2},"action":"remove","lines":["  "]}]}],[{"group":"doc","deltas":[{"start":{"row":86,"column":3},"end":{"row":87,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":62,"column":29},"end":{"row":63,"column":0},"action":"insert","lines":["",""]},{"start":{"row":63,"column":0},"end":{"row":63,"column":2},"action":"insert","lines":["  "]}]}],[{"group":"doc","deltas":[{"start":{"row":63,"column":2},"end":{"row":63,"column":30},"action":"insert","lines":[" if (self.type == 'matches')"]}]}],[{"group":"doc","deltas":[{"start":{"row":63,"column":2},"end":{"row":63,"column":3},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":63,"column":29},"end":{"row":63,"column":30},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":63,"column":30},"end":{"row":63,"column":31},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":63,"column":31},"end":{"row":63,"column":32},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":63,"column":32},"end":{"row":63,"column":33},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":63,"column":33},"end":{"row":63,"column":34},"action":"insert","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":63,"column":34},"end":{"row":63,"column":35},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":63,"column":35},"end":{"row":63,"column":36},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":63,"column":36},"end":{"row":63,"column":37},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":63,"column":36},"end":{"row":63,"column":37},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":63,"column":35},"end":{"row":63,"column":36},"action":"remove","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":63,"column":34},"end":{"row":63,"column":35},"action":"remove","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":63,"column":33},"end":{"row":63,"column":34},"action":"remove","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":63,"column":32},"end":{"row":63,"column":33},"action":"remove","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":63,"column":31},"end":{"row":63,"column":32},"action":"remove","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":63,"column":30},"end":{"row":63,"column":31},"action":"remove","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":63,"column":30},"end":{"row":63,"column":31},"action":"insert","lines":["{"]}]}],[{"group":"doc","deltas":[{"start":{"row":63,"column":31},"end":{"row":63,"column":32},"action":"insert","lines":["}"]}]}],[{"group":"doc","deltas":[{"start":{"row":63,"column":31},"end":{"row":63,"column":32},"action":"insert","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":63,"column":32},"end":{"row":63,"column":33},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":63,"column":33},"end":{"row":63,"column":34},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":63,"column":34},"end":{"row":63,"column":35},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":63,"column":35},"end":{"row":63,"column":36},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":63,"column":36},"end":{"row":63,"column":37},"action":"insert","lines":["M"]}]}],[{"group":"doc","deltas":[{"start":{"row":63,"column":37},"end":{"row":63,"column":38},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":63,"column":38},"end":{"row":63,"column":39},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":63,"column":39},"end":{"row":63,"column":40},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":63,"column":40},"end":{"row":63,"column":41},"action":"insert","lines":["h"]}]}],[{"group":"doc","deltas":[{"start":{"row":63,"column":41},"end":{"row":63,"column":42},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":63,"column":42},"end":{"row":63,"column":43},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":63,"column":43},"end":{"row":63,"column":45},"action":"insert","lines":["()"]}]}],[{"group":"doc","deltas":[{"start":{"row":63,"column":45},"end":{"row":63,"column":46},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":63,"column":44},"end":{"row":63,"column":45},"action":"insert","lines":["$"]}]}],[{"group":"doc","deltas":[{"start":{"row":90,"column":2},"end":{"row":91,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":91,"column":0},"end":{"row":92,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":91,"column":0},"end":{"row":92,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":91,"column":0},"end":{"row":91,"column":1},"action":"insert","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":91,"column":1},"end":{"row":91,"column":2},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":91,"column":2},"end":{"row":91,"column":3},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":91,"column":3},"end":{"row":91,"column":4},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":91,"column":4},"end":{"row":91,"column":5},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":91,"column":0},"end":{"row":91,"column":5},"action":"remove","lines":["parse"]},{"start":{"row":91,"column":0},"end":{"row":91,"column":12},"action":"insert","lines":["parseMatches"]}]}],[{"group":"doc","deltas":[{"start":{"row":91,"column":12},"end":{"row":91,"column":14},"action":"insert","lines":["()"]}]}],[{"group":"doc","deltas":[{"start":{"row":91,"column":14},"end":{"row":91,"column":15},"action":"insert","lines":["{"]}]}],[{"group":"doc","deltas":[{"start":{"row":91,"column":15},"end":{"row":93,"column":1},"action":"insert","lines":["","  ","}"]}]}],[{"group":"doc","deltas":[{"start":{"row":91,"column":0},"end":{"row":91,"column":1},"action":"insert","lines":["f"]}]}],[{"group":"doc","deltas":[{"start":{"row":91,"column":1},"end":{"row":91,"column":2},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":91,"column":1},"end":{"row":91,"column":2},"action":"remove","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":91,"column":0},"end":{"row":91,"column":1},"action":"remove","lines":["f"]}]}],[{"group":"doc","deltas":[{"start":{"row":91,"column":0},"end":{"row":91,"column":1},"action":"insert","lines":["f"]}]}],[{"group":"doc","deltas":[{"start":{"row":91,"column":1},"end":{"row":91,"column":2},"action":"insert","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":91,"column":2},"end":{"row":91,"column":3},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":91,"column":0},"end":{"row":91,"column":3},"action":"remove","lines":["fun"]},{"start":{"row":91,"column":0},"end":{"row":91,"column":8},"action":"insert","lines":["function"]}]}],[{"group":"doc","deltas":[{"start":{"row":91,"column":8},"end":{"row":91,"column":9},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":92,"column":2},"end":{"row":112,"column":7},"action":"insert","lines":["    $('table.matches tbody tr').each(function(i, prod) {","      var teamA = $('td.team.team-a', this).text();","      var league = 'Bundesliga';","      var teamB = $('td.team.team-b', this).text();","      var score = $('td.score-time.score', this).text().trim().split('-');","      var homeScore = score[0].trim();","      var awayScore = score[1].trim();","      var season = 2014;","      var week = 15;","      var json = {","","        teamA: teamA,","        teamB: teamB,","        homeScore: homeScore,","        awayScore: awayScore,","        season: season,","        week: week,","        league: league","      }","      lists.push(json);","    });"]}]}],[{"group":"doc","deltas":[{"start":{"row":92,"column":6},"end":{"row":93,"column":0},"action":"insert","lines":["",""]},{"start":{"row":93,"column":0},"end":{"row":93,"column":6},"action":"insert","lines":["      "]}]}],[{"group":"doc","deltas":[{"start":{"row":90,"column":2},"end":{"row":91,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":63,"column":31},"end":{"row":63,"column":32},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":63,"column":32},"end":{"row":63,"column":33},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":63,"column":33},"end":{"row":63,"column":34},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":63,"column":34},"end":{"row":63,"column":35},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":63,"column":35},"end":{"row":63,"column":36},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":63,"column":36},"end":{"row":63,"column":37},"action":"insert","lines":["="]}]}],[{"group":"doc","deltas":[{"start":{"row":93,"column":6},"end":{"row":93,"column":18},"action":"insert","lines":["var lists=[]"]}]}],[{"group":"doc","deltas":[{"start":{"row":93,"column":18},"end":{"row":93,"column":19},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":61,"column":11},"end":{"row":61,"column":12},"action":"insert","lines":[" "]},{"start":{"row":61,"column":13},"end":{"row":61,"column":14},"action":"insert","lines":[" "]},{"start":{"row":63,"column":31},"end":{"row":64,"column":4},"action":"insert","lines":["","    "]},{"start":{"row":64,"column":9},"end":{"row":64,"column":10},"action":"insert","lines":[" "]},{"start":{"row":64,"column":11},"end":{"row":64,"column":12},"action":"insert","lines":[" "]},{"start":{"row":64,"column":28},"end":{"row":64,"column":29},"action":"remove","lines":["}"]},{"start":{"row":65,"column":2},"end":{"row":66,"column":0},"action":"insert","lines":["}",""]},{"start":{"row":90,"column":0},"end":{"row":90,"column":2},"action":"remove","lines":["  "]},{"start":{"row":94,"column":23},"end":{"row":94,"column":24},"action":"insert","lines":[" "]},{"start":{"row":95,"column":0},"end":{"row":95,"column":4},"action":"remove","lines":["    "]},{"start":{"row":95,"column":11},"end":{"row":95,"column":12},"action":"insert","lines":[" "]},{"start":{"row":95,"column":13},"end":{"row":95,"column":14},"action":"insert","lines":[" "]},{"start":{"row":96,"column":0},"end":{"row":96,"column":4},"action":"remove","lines":["    "]},{"start":{"row":97,"column":0},"end":{"row":97,"column":2},"action":"remove","lines":["  "]},{"start":{"row":98,"column":4},"end":{"row":98,"column":6},"action":"remove","lines":["  "]},{"start":{"row":99,"column":0},"end":{"row":99,"column":2},"action":"remove","lines":["  "]},{"start":{"row":100,"column":0},"end":{"row":100,"column":2},"action":"remove","lines":["  "]},{"start":{"row":101,"column":4},"end":{"row":101,"column":6},"action":"remove","lines":["  "]},{"start":{"row":102,"column":0},"end":{"row":102,"column":1},"action":"remove","lines":[" "]},{"start":{"row":102,"column":4},"end":{"row":102,"column":5},"action":"remove","lines":[" "]},{"start":{"row":103,"column":0},"end":{"row":103,"column":2},"action":"remove","lines":["  "]},{"start":{"row":104,"column":4},"end":{"row":104,"column":6},"action":"remove","lines":["  "]},{"start":{"row":105,"column":0},"end":{"row":105,"column":1},"action":"remove","lines":[" "]},{"start":{"row":105,"column":4},"end":{"row":105,"column":5},"action":"remove","lines":[" "]},{"start":{"row":107,"column":0},"end":{"row":107,"column":2},"action":"remove","lines":["  "]},{"start":{"row":108,"column":6},"end":{"row":108,"column":8},"action":"remove","lines":["  "]},{"start":{"row":109,"column":0},"end":{"row":109,"column":2},"action":"remove","lines":["  "]},{"start":{"row":110,"column":0},"end":{"row":110,"column":2},"action":"remove","lines":["  "]},{"start":{"row":111,"column":6},"end":{"row":111,"column":8},"action":"remove","lines":["  "]},{"start":{"row":112,"column":6},"end":{"row":112,"column":8},"action":"remove","lines":["  "]},{"start":{"row":113,"column":0},"end":{"row":113,"column":2},"action":"remove","lines":["  "]},{"start":{"row":114,"column":4},"end":{"row":114,"column":6},"action":"remove","lines":["  "]},{"start":{"row":115,"column":0},"end":{"row":115,"column":2},"action":"remove","lines":["  "]},{"start":{"row":116,"column":0},"end":{"row":116,"column":2},"action":"remove","lines":["  "]}]}],[{"group":"doc","deltas":[{"start":{"row":116,"column":5},"end":{"row":117,"column":0},"action":"insert","lines":["",""]},{"start":{"row":117,"column":0},"end":{"row":117,"column":2},"action":"insert","lines":["  "]}]}],[{"group":"doc","deltas":[{"start":{"row":117,"column":2},"end":{"row":117,"column":3},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":117,"column":3},"end":{"row":117,"column":4},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":117,"column":4},"end":{"row":117,"column":5},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":117,"column":5},"end":{"row":117,"column":6},"action":"insert","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":117,"column":6},"end":{"row":117,"column":7},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":117,"column":7},"end":{"row":117,"column":8},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":117,"column":8},"end":{"row":117,"column":9},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":117,"column":9},"end":{"row":117,"column":10},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":117,"column":10},"end":{"row":117,"column":11},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":117,"column":11},"end":{"row":117,"column":12},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":117,"column":12},"end":{"row":117,"column":13},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":117,"column":13},"end":{"row":117,"column":14},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":117,"column":14},"end":{"row":117,"column":15},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":66,"column":0},"end":{"row":66,"column":1},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":66,"column":1},"end":{"row":66,"column":2},"action":"insert","lines":["*"]}]}],[{"group":"doc","deltas":[{"start":{"row":66,"column":1},"end":{"row":66,"column":2},"action":"remove","lines":["*"]}]}],[{"group":"doc","deltas":[{"start":{"row":66,"column":0},"end":{"row":66,"column":1},"action":"remove","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":66,"column":0},"end":{"row":66,"column":2},"action":"insert","lines":["  "]}]}],[{"group":"doc","deltas":[{"start":{"row":66,"column":2},"end":{"row":66,"column":3},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":66,"column":3},"end":{"row":66,"column":4},"action":"insert","lines":["*"]}]}],[{"group":"doc","deltas":[{"start":{"row":89,"column":3},"end":{"row":90,"column":0},"action":"insert","lines":["",""]},{"start":{"row":90,"column":0},"end":{"row":90,"column":2},"action":"insert","lines":["  "]}]}],[{"group":"doc","deltas":[{"start":{"row":90,"column":2},"end":{"row":90,"column":3},"action":"insert","lines":["*"]}]}],[{"group":"doc","deltas":[{"start":{"row":90,"column":3},"end":{"row":90,"column":4},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":95,"column":22},"end":{"row":95,"column":23},"action":"insert","lines":["$"]}]}],[{"group":"doc","deltas":[{"start":{"row":66,"column":2},"end":{"row":90,"column":4},"action":"remove","lines":["/*","  if (self.type == 'matches') {","    $('table.matches tbody tr').each(function(i, prod) {","      var teamA = $('td.team.team-a', this).text();","      var league = 'Bundesliga';","      var teamB = $('td.team.team-b', this).text();","      var score = $('td.score-time.score', this).text().trim().split('-');","      var homeScore = score[0].trim();","      var awayScore = score[1].trim();","      var season = 2014;","      var week = 15;","      var json = {","","        teamA: teamA,","        teamB: teamB,","        homeScore: homeScore,","        awayScore: awayScore,","        season: season,","        week: week,","        league: league","      }","      lists.push(json);","    });","  }","  */"]}]}],[{"group":"doc","deltas":[{"start":{"row":66,"column":2},"end":{"row":67,"column":0},"action":"remove","lines":["",""]}]}]]},"ace":{"folds":[],"scrolltop":1014,"scrollleft":0,"selection":{"start":{"row":64,"column":28},"end":{"row":64,"column":28},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":52,"state":"comment_regex_allowed","mode":"ace/mode/javascript"}},"timestamp":1418753185719}