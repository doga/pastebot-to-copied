/**
 * Deno script for translating a Pastebot filter into a Copied text formatter (which is a javascript file).
 * - Pastebot: https://tapbots.com/pastebot/help/
 * - Copied:   https://docs.copied.app/#/../ios/settings?id=text-formatters 
 *
 * @license Apache-2.0
 * @author Doğa Armangil <doga.armangil@gmail.com>
 */

import {args, EarlyExitFlag, Option, Text, PARSE_FAILURE} from "args/index.ts";
import {parse} from "xml/mod.ts";



// ♦︎♦︎♦︎♦︎♦︎♦︎♦︎♦︎♦︎♦︎♦︎♦︎♦︎♦︎♦︎♦︎♦︎ Parse command line arguments ♦︎♦︎♦︎♦︎♦︎♦︎♦︎♦︎♦︎♦︎♦︎♦︎♦︎♦︎♦︎♦︎♦︎

const 
/** @type {*} Parser for the command line arguments. */
parser = 
args
.describe('Translate a Pastebot filter into a Copied text formatter.')
.with(
  EarlyExitFlag('help', {
    describe: 'Show help',
    exit() {
      console.log(parser.help());
      return Deno.exit();
    },
  }),
)
.with(
  Option('path', {
    alias   : ['p'],
    type    : Text,
    describe: 'Path to Pastebot filter file.',
  }),
),

/** @type {*} Parsed command line arguments. */
parsedArgs = parser.parse(Deno.args);


// Exit if there were command line parsing errors.
if (parsedArgs.tag === PARSE_FAILURE) {
  console.error(`CLI argument error: ${parsedArgs.error}`);
  Deno.exit(1);
}

/** @type {*} Parsed command line arguments. */
const {path} = parsedArgs.value; // see https://github.com/KSXGitHub/deno-args/blob/6c667b28c3dbfb30ef71ffd3fe7d6ff440e3f790/examples/options.ts#L50C14-L50C14




// ♦︎♦︎♦︎♦︎♦︎♦︎♦︎♦︎♦︎♦︎♦︎♦︎♦︎♦︎♦︎♦︎♦︎ Run ♦︎♦︎♦︎♦︎♦︎♦︎♦︎♦︎♦︎♦︎♦︎♦︎♦︎♦︎♦︎♦︎♦︎

// WARNING Don't transform characters into styled Unicode (such as mathematical bold), Copied will ignore those formatting commands.

/**
 * Translate a given Pastebot filter into its Copied text formatter equivalent.
 *
 * @async
 * @param {string} pastebotFilterPath - Path to Pastebot filter file.
 * @return {string} The Copied text formatter.
 */
async function toCopiedTextFormatter(pastebotFilterPath:string): Promise<string> {

  const
  pastebotFilterXml = await Deno.readTextFile(pastebotFilterPath),
  pastebotFilter    = parse(pastebotFilterXml),
  substitutions     = [];

  // console.debug(`Parsed Pastebot filter: ${JSON.stringify(pastebotFilter)}`);
  // console.debug(`array: ${JSON.stringify(pastebotFilter.plist.dict.array)}`);

  for (const dict of pastebotFilter.plist.dict.array.dict) {
    // console.debug(`Dict: ${JSON.stringify(dict)}`);
    substitutions.push({from: dict.string[1], to: dict.string[2]})
  }
  // console.debug(`Substitutions: ${JSON.stringify(substitutions)}`);

  const copiedTextFormatter = // BUG does not work for multiline placeholders or values
`function canFormat(clipping) {return clipping.text != null;}
function format(clipping) {
  const substitutions = [${substitutions.map( substitution => '["'+substitution.from+'","'+substitution.to+'"]' ).join(",")}];
  let res = clipping.text.trim();
  substitutions.forEach(s => res.replaceAll(s[0],s[1]));
  return res;
}
`;

  return copiedTextFormatter;
}

console.log(await toCopiedTextFormatter(path));

