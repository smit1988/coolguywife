var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;
var spamcount = 0;

var ryanQuotes = ["Excited",
                    "Kk",
                    "Uh oh",
                    "It'll be okay",
                    "Do it",
                    "Yep",
                    "I'm just here for the memes",
                    "Noah Smith, what a damn good fella","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];
  
function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      botRegexExams = /^\/exams/;  botRegexKiss = /^\/kiss/;  botRegexBurn = /^\/burn/;  botRegex = /^\/cool guy/;  botRegexBall = /^\/8ball/;  botRegexSpook = /^\/spooky/; botRegexRoll = /^\/roll \/roll/;  botRegexDie = /^\/roll/;  botRegexCoin = /^\/flip a coin/; botRegexMeme = /^\/meme/; botRegexDL = /^\/DDL/i;botRegexSalt = /^\/salt/;botRegexRules = /^\/rules/
      botRegexReddit = /^\/reddit/;  botRegexPraise = /^\/praise cool guy/;  botRegexAd=/^\/advance/;botRegexGTA = /^\/gta/; botRegexSC = /^\/SDL/i; botODB = /(.*\s+)(.*odb)(\s+.*)/i; botDuck = /^\/duck/;
      botRegexRyan = /^\/ryan/; botRegexSpam = /^\/spam/;  botRegexRyan2 = /^\/Ryan/;  botRegexP = /^\/PDL/i;  botRegexTw = /^\/twitch/i; botRegexSb = /^\/sub/; botRegexSh = /^\/shrug/; botRegexWk = /^\/users/; botRegexCC = /^\/cc/;
      botRegexRyanPurge = /^\/purge/;  botRegexSiege = /^\/siege/;  botRegexStock = /^\/stock/;
      siege1 = 'https://i.groupme.com/350x419.png.adc8c73a6c1547e0a9e04320296329f8'; siege2 = 'https://i.groupme.com/1279x752.jpeg.aa5d0401e0df495bba4b4e09dc5a6bd7'
      siege3 = 'https://i.groupme.com/960x960.png.006e180e05d841c6a2962e844bf1e6fd';
  var mockQuotes = ["911 What is your emergency?",
                    "With nowhere else to turn, he got on his knees and prayed",
                    "He was happy to answer the little girl's question. He bent down and said to her",
                    "'Where do you see yourself in five years?' Ryan was relieved. He had practiced for this questions many times in the mirror the night before. He confidently said",
                    "The fart was louder than expected. Everyone was staring. He could have apologized, but instead he stood up on his desk and loudly proclaimed",
                    "Ryan's mom:\n'Honey is there anything else you would like me to send you in the care package?'\nRyan:",
                    "Sir, have you been drinking tonight?",
                    "Do you solemnly swear that you will tell the truth, the whole truth, and nothing but the truth, so help you God?",
                    "The girl across the bar clearly wanted him to come over, so he did.\nGirl:\n'I'm Jennifer'\nRyan:",
                    "How do you plead?",
                    "When the historian came asking to see his award winning collection of memes, Ryan said",
                    "The night was going great, she wanted him, he knew it, it was just a matter of sealing the deal. He leaned in close. He could smell the perfume on her neck. He whispered into her ear",
                    "With his pants around his ankles and 12 angry women surrounding him in the produce aisle he said \n'Ladies, I can explain...'",
                    "He shook the President's hand and said",
                    "'Alright Ryan' his mother said 'you can get one toy'",
                    "Welcome to Olive Garden, what can I get for you today?",
                    "Son, what's this I found under your bed?",
                    "As they strapped him into the electric chair, he had but one last thing to say",
                    "The bodies surrounded him. His childhood home was ablaze. A single tear was shed as he walked away. Turning back one last time, he shouted",
                    "Hey what are you doing this weekend?",
                    "What's you deepest sexual fantasy?",
                    "How's work going?",
                    "'I do' the groom said. Ryan couldn't watch. He couldn't bare the thought of the love of his life getting away.\nThe bride opened her mouth.\n'I d-'\n'WAIT!' Ryan screamed",
                    "When asked about his views on the war in the middle east he said",
                    "His high school bully walked toward him. He said the only thing he could think of to delay the attack",
                    "I'm...I'm sorry but the results came up positive",
                    "When asked about his views on global warming he said",
                    "Ryan was a good man. We all lived by his inspiring words. I think the one quote we all knew him for was",
                    "Where was the last page of his notes? He hadn't memorized the speech. He stood there in silence in front of the entire UN. He was going to have to improvise his closing.\n'In summary...'",
                    "He woke up next to a strange woman in his bed. Or is it her bed? Definitely her bed. Oh god she's hideous, better bounce. He looked for a piece of paper to leave a note. He didn't even know this woman, what should he write? Oh good her ID. Susie? Okay well here it goes.\n'Dear Susie...'"];
  
  var awake = "";
  
  //while(1==1){
  //if(awake != request.text){
  if(request.text && botRegex.test(request.text)) {
    this.res.writeHead(200);
    postMessage(cool());
    this.res.end();
  } 
    else {}
    this.res.end();
  }
  else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
  awake = request.text;
  //}//if awake
  //}//while
}

function postMessage(response) {
  var botResponse,options, body, botReq;

  botResponse = response

  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : botResponse
  };

  console.log('sending ' + botResponse + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


exports.respond = respond;
