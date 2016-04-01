var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

var ryanQuotes = ["Excited",
                    "Kk",
                    "Uh oh",
                    "It'll be okay",
                    "Do it",
                    "Yep",
                    "I'm just here for the memes",
                    "Noah Smith, what a damn good fella","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];
  
var catFacts = ["Cats are the most popular pet in the United States: There are 88 million pet cats and 74 million dogs.",
"There are cats who have survived falls from over 32 stories (320 meters) onto concrete. ",
"A group of cats is called a clowder. ",
"Cats have over 20 muscles that control their ears. ",
"Cats sleep 70% of their lives. ",
"A cat has been mayor of Talkeetna, Alaska, for 15 years. His name is Stubbs. ",
"And one ran for mayor of Mexico City in 2013. ",
"In tigers and tabbies, the middle of the tongue is covered in backward-pointing spines, used for breaking off and gripping meat. ",
"When cats grimace, they are usually ‘taste-scenting.’ They have an extra organ that, with some breathing control, allows the cats to taste-sense the air. ",
"Cats can’t taste sweetness. ",
"Owning a cat can reduce the risk of stroke and heart attack by a third. ",
"Wikipedia has a recording of a cat meowing because why not? ",
"The world’s largest cat measured 48.5 inches long. ",
"Evidence suggests domesticated cats have been around since 3600 B.C., 2,000 years before Egypt’s pharaohs. ",
"A cat’s purr may be a form of self-healing, as it can be a sign of nervousness as well as contentment. ",
"Similarly, the frequency of a domestic cat’s purr is the same at which muscles and bones repair themselves. ",
"Adult cats only meow to communicate with humans. ",
"The world’s richest cat is worth $13 million after his human passed away and left her fortune to him. ",
"Your cat recognizes your voice but just acts too cool to care (probably because they are). ",
"Cats are often lactose intolerant, so stop givin’ them milk! ",
"Basically all cartoon cats lied to us: Raw fish is off the table for cats as well. ",
"The oldest cat video on YouTube dates back to 1894 (when it was made, not when it was uploaded, duh). ",
"In the 1960s, the CIA tried to turn a cat into a bonafide spy by implanting a microphone into her ear and a radio transmitter at the base of her skull. She somehow survived the surgery but got hit by a taxi on her first mission. ",
"The technical term for ‘hairball’ is ‘bezoar.’ ",
"Female cats are typically right-pawed while male cats are typically left-pawed. ",
"Cats make more than 100 different sounds whereas dogs make around 10. ",
"A cat’s brain is 90% similar to a human’s — more similar than to a dog’s. ",
"Cats and humans have nearly identical sections of the brain that control emotion. ",
"A cat’s cerebral cortex (the part of the brain in charge of cognitive information processing) has 300 million neurons, compared with a dog’s 160 million. ",
"Cats have a longer-term memory than dogs, especially when they learn by actually doing rather than simply seeing. ",
"Basically, cats have a lower social IQ than dogs but can solve more difficult cognitive problems when they feel like it. ",
"Cats have 1,000 times more data storage than an iPad. ",
"It was illegal to slay cats in ancient Egypt, in large part because they provided the great service of controlling the rat population. ",
"In the 15th century, Pope Innocent VIII began ordering the killing of cats, pronouncing them demonic. ",
"A cat has five toes on his front paws, and four on the back, unless he’s a polydactyl. ",
"Polydactyl cats are also referred to as "Hemingway cats" because the author was so fond of them. ",
"There are 45 Hemingway cats living at the author’s former home in Key West, Fla. ",
"Original kitty litter was made out of sand but it was replaced by more absorbent clay in 1948. ",
"Abraham Lincoln kept four cats in the White House. ",
"When asked if her husband had any hobbies, Mary Todd Lincoln is said to have replied ‘cats.’ ",
"Isaac Newton is credited with inventing the cat door. ",
"One legend claims that cats were created when a lion on Noah’s Ark sneezedand two kittens came out. ",
"A cat can jump up to six times its length. ",
"A house cat is faster than Usain Bolt. ",
"When cats leave their poop uncovered, it is a sign of aggression to let you know they don’t fear you. ",
"Cats can change their meow to manipulate a human. They often imitate a human baby when they need food, for example. ",
"Cats use their whiskers to detect if they can fit through a space. ",
"Cats only sweat through their foot pads. ",
"The first cat in space was French. She was named Felicette, or "Astrocat." She survived the trip. ",
"Cats have free-floating clavicle bones that attach their shoulders to their forelimbs, which allows them to squeeze through very small spaces. ",
"Hearing is the strongest of cat’s senses: They can hear sounds as high as 64 kHz — compared with humans, who can hear only as high as 20 kHz. ",
"Cats can move their ears 180 degrees. ",
"They can also move their ears separately. ",
"A cat has detected his human’s breast cancer. ",
"A cat’s nose is ridged with a unique pattern, just like a human fingerprint. ",
"Cats have scent glands along their tail, their forehead, lips, chin, and the underside of their front paws. ",
"A cat rubs against people to mark its territory. ",
"Cats lick themselves to get your scent off. ",
"When a family cat died in ancient Egypt, family members would shave off their eyebrows as they mourned. ",
"They also had elaborate memorials that included mummifying the cat and either burying it in a family tomb or pet cemetery. ",
"Cats were mythic symbols of divinity in ancient Egypt. ",
"Black cats are bad luck in the United States, but they are good luck in the United Kingdom and Australia. ",
"Most cats don’t like water because their coats do not insulate them well enough. ",
"However, a cat called the Turkish Van does not have that insulation problem and LOVES it. ",
"The Egyptian Mau is the oldest breed of cat. ",
"This breed is also the fastest pedigreed cat. ",
"The Egyptian word for cat is, in fact, ‘mau’ ",
"Only 11.5% of people consider themselves ‘cat people.’ ",
"Cat people are also 11% more likely to be introverted. ",
"Still, cat people are more open to new experiences than typical ‘dog people.’ ",
"Cat owners who are male tend to be luckier in love, as they are perceived as more sensitive. ",
"Cat owners are 17% more likely to have a graduate degree. ",
"Cat people are 25% likely to pick George as their favorite Beatle. ",
"A cat’s carbon footprint is similar to that of a VW Bug, whereas a dog’s is more like a Hummer. ",
"When your cat brings home a dead mouse or bird, it may do so to show you that you suck at hunting. ",
"Cats have inferior daytime sight, but during the night they need seven times less light than humans to see. ",
"The largest litter of kittens produced 19 kittens. ",
"Eighty-eight percent of cats in the U.S. are spayed or neutered. ",
"Only 24% of cats who enter animal shelters are adopted. ",
"Cats are really cool. ",
"They are also very soft. ",
"If you want to adopt a cat, you can visit your local Humane Society or check outpetfinder.com."
];
function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      botRegexExams = /^\/exams/;  botRegexKiss = /^\/kiss/;  botRegexBurn = /^\/burn/;  botRegex = /^\/cool guy/;  botRegexBall = /^\/8ball/;  botRegexSpook = /^\/spooky/;  botRegexDie = /^\/roll a die/;  botRegexMeme = /^\/meme/; botRegexDL = /^\/DDL/i;botRegexSalt = /^\/salt/;botRegexRules = /^\/rules/
      botRegexReddit = /^\/reddit/;  botRegexPraise = /^\/praise cool guy/;  botRegexAd=/^\/advance/;botRegexGTA = /^\/gta/; botRegexSC = /^\/SDL/i; botODB = /(.*\s+)(.*odb)(\s+.*)/i; botDuck = /^\/duck/;
      botRegexRyan = /^\/ryan/;  botRegexRyan2 = /^\/Ryan/;  botRegexP = /^\/PDL/i;  botRegexTw = /^\/twitch/i; botRegexSb = /^\/sub/; botRegexSh = /^\/shrug/; botRegexWk = /^\/users/; botRegexCC = /^\/cc/;
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
  if(request.name != "cat facts"){
    this.res.writeHead(200);
    postMessage(catFacts[/*Math.floor(Math.random() * 82)*/0]);
    this.res.end();
  }
  else if(request.text && botRegex.test(request.text)) {
    this.res.writeHead(200);
    postMessage(cool());
    this.res.end();
  } 
  else if(request.text && (botRegexRyan.test(request.text) || botRegexRyan2.test(request.text))) {
    this.res.writeHead(200);
    var randomQuote = "";
    while(randomQuote == ""){
      randomQuote = ryanQuotes[Math.floor(Math.random() * 100)];
    }
    postMessage(mockQuotes[Math.floor(Math.random() * 30)] + "\n'" + randomQuote + "'");
    this.res.end();
  }  
  else if(request.text && botRegexRyanPurge.test(request.text)) {
    this.res.writeHead(200);
    var numbercount = 0;
    var quotelist = "";
    while(numbercount < 30){
      quotelist = quotelist + "$~" + ryanQuotes[numbercount];
      numbercount++;
    }
    postMessage(quotelist);
    this.res.end();
  } 
  else if(request.text && botRegexReddit.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.reddit.com/r/pics/top.json");
    this.res.end();
  }   
  else if(request.text && botRegexPraise.test(request.text)) {
    this.res.writeHead(200);
    postMessage("Praise be unto you");
    this.res.end();
  }  
  else if(request.text && botRegexExams.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i.imgur.com/c4jt321.png");
    this.res.end();
  }  
  else if(request.text && botRegexDL.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/SRMFL/team/"+request.text.substring(5,8)+"/depthchart");
    this.res.end();
  } 
  else if(request.text && botRegexSalt.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.imgur.com/B5BSVqH.png");
    this.res.end();
  } 
  else if(request.text && botRegexAd.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.hackcollege.com/wp-content/uploads/2013/02/kno_advance.jpg");
    this.res.end();
  }
  else if(request.text && botRegexRules.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://docs.google.com/document/d/1hSuEG7oplnx4IX6HGsMOjsWb9TCqC4-F1NLjuBz5PCM/edit");
    this.res.end();
  } 
  else if(request.text && botRegexGTA.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/220x147.jpeg.a2dd2add32b14fff9e329535186d793c.large");
    this.res.end();
  } 
  else if(request.text && botRegexSC.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/SRMFL/team/"+request.text.substring(5,8)+"/schedule");
    this.res.end();
  }
  else if(request.text && botRegexP.test(request.text)) {
    this.res.writeHead(200);
    var req = request.text.substring(5,request.text.length);
    var rep = req.replace(/ /,"+");
    postMessage("http://daddyleagues.com/SRMFL/players?name="+rep+"&position=all&team=all");
    this.res.end();
  }  

  else if(request.text && botRegexTw.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.twitch.tv/"+request.text.substring(8,request.text.length));
    this.res.end();
  } 
  else if(request.text && botRegexSb.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.reddit.com/r/maddenall32");
    this.res.end();
  } 
  else if(request.text && botRegexSh.test(request.text)) {
    this.res.writeHead(200);
    postMessage("¯\\_(ツ)_/¯");
    this.res.end();
  } 
  else if(request.text && botRegexWk.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://docs.google.com/spreadsheets/d/1kJqQWCq3RKiTrd4f71FFNKr-Y0ppJzjk0fSF0rP6Bto/edit?usp=sharing");
    this.res.end();
  } 
  else if(request.text && botODB.test(request.text)) {
    this.res.writeHead(200);
    postMessage("OBJ*");
    this.res.end();
  } 
  else if(request.text && botDuck.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://media3.giphy.com/media/YCseTHF2I6CCA/giphy.gif");
    this.res.end();
  }
  else if(request.text && botRegexCC.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/851x1184.jpeg.330228901f684b0cb46cd1cef6953923");
    this.res.end();
  }
  else if(request.text.substring(0,5) && botRegexBall.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.indra.com/8ball/"+Math.floor((20*Math.random())+1)+".gif");
    this.res.end();
  }
  else if(request.text && botRegexMeme.test(request.text)) {
    this.res.writeHead(200);
    function rand(){
      return Math.floor(Math.random() * 10);
    }
    postMessage("http://www.memecreator.org/static/images/memes/38"+rand()+rand()+rand()+rand()+rand()+".jpg");
    this.res.end();
  }
  else if(request.text && botRegexStock.test(request.text)) {
    this.res.writeHead(200);
    function rand(){
      return Math.floor(Math.random() * 10);
    }
    postMessage("http://comps.canstockphoto.com/can-stock-photo_csp"+Math.floor(Math.random() * 8)+rand()+rand()+rand()+rand()+rand()+rand()+".jpg");
    this.res.end();
  }
  else if(request.text && botRegexDie.test(request.text)) {
    this.res.writeHead(200);
    postMessage("A die was rolled");
    this.res.end();
  }
  else if(request.text && botRegexSpook.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://media.giphy.com/media/1bgaiT0clnf0I/giphy.gif");
    this.res.end();
  }
  else if(request.text && botRegexBurn.test(request.text)) {
    this.res.writeHead(200);
    postMessage("༼⁰o⁰；༽ SICK BURN ༼⁰o⁰；༽");
    this.res.end();
  }
  else if(request.text && botRegexKiss.test(request.text)) {
    this.res.writeHead(200);
    postMessage("lol no homo");
    this.res.end();
  }
  else if(request.text && botRegexSiege.test(request.text)) {
    this.res.writeHead(200);
    if(0.6 >= Math.random() > 0.3)
      postMessage(siege1);
    else if(Math.random() >0.6)
      postMessage(siege3)
    else
      postMessage(siege2);
    this.res.end();
  }
  else if(request.name == "Ryan Sharkey") {
    this.res.writeHead(200);
    var ryanAction = Math.random();
    ryanQuotes[Math.floor(ryanAction * 100)] = request.text;
    if((ryanAction <= 0.012) && (ryanAction > 0.006)){
      postMessage("Ryan is undoot\nType /meme to doot Ryan");
    }
    else if ((ryanAction <= 0.006) && (ryanAction > 0.003)){
      postMessage("Ryan Sharkey? More like Ryan ShLAMEkey\nType /burn to put Ryan in his place");
    }
    else if (ryanAction <= 0.003){
      postMessage("Woah, do you kiss your motherboard with that mouth?\nType /kiss to kiss Ryan's motherboard");
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
