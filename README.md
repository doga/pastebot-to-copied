# Pastebot filters for transforming copied text for social media

Social media platforms (𝕏, Mastodon, Facebook, LinkedIn etc) typically do not allow posted content to be styled (in bold, italic etc).

One workaround for this limitation is to use prestyled Unicode characters in the posted plain-text content. And this is exactly what the `tmp/*.pastebotfilter` files will allow you to do with the `Pastebot` clipboard manager.

After adding these filters to your `Pastebot` configuration, simply:

1. Write your posts in plain text.
1. Copy the text to be styled.
1. Replace the text with the Unicode-styled version.
1. Post your message.

## Text formatting in `Copied` is very buggy

I don't recommend `Copied` for doing any sort of text transformation. This means that the `text-formatters/generator.ts` script is useless.

Indeed, although this project contains a Deno/TypeScript script for porting `Pastebot` filters to `Copied`, I have found `Copied`'s text formatting to be very buggy and full of undocumented limitations:

- There is an undocumented limit to the size of the JavaScript programs that implement the formatters.
- Unicode-styling does not work in `Copied`, these will be ignored.
- etc.

## Links to the clipboard managers

- [Pastebot (macOS)](https://tapbots.com/pastebot/help/),
- [Copied (iOS, macOS)](https://docs.copied.app/#/../ios/settings?id=text-formatters).
