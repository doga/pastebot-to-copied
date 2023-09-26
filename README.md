# Config translator between Pastebot and Copied

This project contains some Deno/TypeScript scripts for porting the configurations between these clipboard managers:

- [Pastebot (macOS)](https://tapbots.com/pastebot/help/),
- [Copied (iOS, macOS)](https://docs.copied.app/#/ios/quickstart).

You will also find ready-to-use Pastebot filters in the `tmp` directory, these have the `.pastebot` extension.

## There is a bug in Copied

Be aware that a bug in the Copied iOS app imposes its text-formatting scripts to be "not too long", otherwise it will truncate the script and the script will not work !
