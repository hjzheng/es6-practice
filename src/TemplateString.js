// Basic literal string creation
   let oldWay = `In JavaScript '\n' is a line-feed.`
// Multiline strings
   let newWay = `In JavaScript this is
   not legal.`

   console.log(newWay);

// String interpolation
   var name = "Bob", time = "today";
   let inter = `Hello ${name}, how are you ${time}?`

   console.log(inter);

//tag function
  let rawStr = String.raw`In JavaScript this is \n not legal.`;

  console.log(rawStr);

  module.exports = rawStr;
