// Text formatter for Copied (https://docs.copied.app/)

  function canFormat(clipping) {
    return clipping.text != null;
  }

  function format(clipping) {
    const formattedText = 
    clipping.text
    .trim()
    .replaceAll("a","𝔞")
    .replaceAll("b","𝔟")
    .replaceAll("c","𝔠")
    .replaceAll("d","𝔡")
    .replaceAll("e","𝔢")
    .replaceAll("f","𝔣")
    .replaceAll("g","𝔤")
    .replaceAll("h","𝔥")
    .replaceAll("i","𝔦")
    .replaceAll("j","𝔧")
    .replaceAll("k","𝔨")
    .replaceAll("l","𝔩")
    .replaceAll("m","𝔪")
    .replaceAll("n","𝔫")
    .replaceAll("o","𝔬")
    .replaceAll("p","𝔭")
    .replaceAll("q","𝔮")
    .replaceAll("r","𝔯")
    .replaceAll("s","𝔰")
    .replaceAll("t","𝔱")
    .replaceAll("u","𝔲")
    .replaceAll("v","𝔳")
    .replaceAll("w","𝔴")
    .replaceAll("x","𝔵")
    .replaceAll("y","𝔶")
    .replaceAll("z","𝔷")
    .replaceAll("A","𝔄")
    .replaceAll("B","𝔅")
    .replaceAll("C","C")
    .replaceAll("D","𝔇")
    .replaceAll("E","𝔈")
    .replaceAll("F","𝔉")
    .replaceAll("G","𝔊")
    .replaceAll("H","H")
    .replaceAll("I","I")
    .replaceAll("J","𝔍")
    .replaceAll("K","𝔎")
    .replaceAll("L","𝔏")
    .replaceAll("M","𝔐")
    .replaceAll("N","𝔑")
    .replaceAll("O","𝔒")
    .replaceAll("P","𝔓")
    .replaceAll("Q","𝔔")
    .replaceAll("R","R")
    .replaceAll("S","𝔖")
    .replaceAll("T","𝔗")
    .replaceAll("U","𝔘")
    .replaceAll("V","𝔙")
    .replaceAll("W","𝔚")
    .replaceAll("X","𝔛")
    .replaceAll("Y","𝔜")
    .replaceAll("Z","Z");

    return formattedText;
  }
  
