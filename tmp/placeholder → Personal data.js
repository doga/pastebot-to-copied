function canFormat(clipping) {return clipping.text != null;}
function format(clipping) {
  const substitutions = [[":sig:","𝓓. 𝓐𝓻𝓶𝓪𝓷𝓰𝓲𝓵"],[":tel:","+41 76 681 2196"],[":addr:","Avenue de Vaudagne 31
1217 Meyrin
Switzerland"],[":name:","Doğa Armangil"],[":fname:","Doğa"],[":lname:","Armangil"],[":emailq:","d.armangil@qworum.net"],[":linkedin:","https://www.linkedin.com/in/dogaarmangil/"],[":x:","@DogaArmangil"],[":twitter:","@DogaArmangil"],[":mastodon:","@dogaar@mastodon.social"]];
  let res = clipping.text.trim();
  substitutions.forEach(s => res.replaceAll(s[0],s[1]));
  return res;
}

