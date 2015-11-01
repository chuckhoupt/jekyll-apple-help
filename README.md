# Jekyll Apple Help

Jekyll-Apple-Help is a [Jekyll] template and [Xcode] build system that makes it easy to author and build [Mac OS X Help Books](https://developer.apple.com/library/mac/documentation/Carbon/Conceptual/ProvidingUserAssitAppleHelp/user_help_intro/user_assistance_intro.html). Add Help to your Mac app, and start authoring in Markdown within minutes. The resulting Help has the same look & feel as Apple's Yosemite apps.

Try out the [Demo Site](http://habilis.net/jah/English.lproj/).

![Jekyll Apple Help Screenshot](jekyll-apple-help.png)

### Background

When recently helping develop a Mac App ([Xynk]), I wanted to make some how-to documentation available through Apple's help system. Should be some simple HTML, right? Well, as [Apple Help veterans](http://alastairs-place.net/blog/2015/01/14/apple-help-in-2015/) know, the help developer documentation is byzantine and the tools are idiosyncratic. How to simplify help for the indie developer?

Fundimentally, Mac OS X's Apple Help Books are static web sites and [Jekyll] is an excellent static site generator, so the two fit naturally. In particular, Jekyll's recently added [Collections](http://jekyllrb.com/docs/collections/) feature is perfect for wrangling help topics. Add some layouts, plugins, and build-glue and you get Jekyll-Apple-Help.

## Features

- Use Markdown to write help topics
- Xcode integration
- Automatic and flexible navigation menu
- Automatic help index generation
- Styled like Yosemite's help
- Supports Multi-lingual help


## Requirements

- [Xcode]
- [Jekyll] - both standard install and [RVM](https://rvm.io) supported

Optional: [fswatch](http://brewformulas.org/Fswatch) for auto-refresh via jekyll-server.command

## Setup

The JekyllHelp template is designed for easy installation into a typical Xcode project. By default, the template's Info.plist expects the project and app to have the same name (e.g. MyApp.xcodeproj builds MyApp.app).

In the following, substitute your app/company for "MyApp"/"com.mycompany".

### Create MyAppHelp Bundle Target

0. Select _File > New > Target..._
0. Select Bundle template from _OS X > Frameworks & Libraries_
0. Enter the settings:
    - Product Name: MyAppHelp
    - Bundle Extension: help
0. Replace Xcode-generate MyAppHelp folder with JekyllHelp (renamed to MyAppHelp)
0. Update Bundles identifier to `com.mycompany.*`
0. Add a Run-Script Build-Phase with the script:

   ```
   /usr/bin/make -C "$(dirname "$PRODUCT_SETTINGS_PATH")"
   ```

Now the MyAppHelp target should build, creating the product `MyAppHelp.help`

### Integrate Help into MyApp Target

0. Add target MyAppHelp to MyApp's target dependencies (_Build Phases > Target Dependencies_)
0. Add product MyAppHelp.help to app target (via File Inspector)
0. Add to MyApp target Info properties:
	- Help Book Identifier: `com.mycompany.$(PROJECT_NAME:rfc1034identifier).help`
	- Help Book directory name: `$(PROJECT_NAME)Help.help`

Finished. Now run your app and use the Help menu to open/search help.

## Authoring

Basic authoring only involves the following files in the bundle:

- JekyllHelp
  - book-icon.png
  - _English.lproj
    - index.md
    - topic-1.md
    - topic-2.md

### Book Icon

The Help-Book icon file `book-icon.png` is displayed on the help title page and in topic page headers. Typically it is just a copy of the app icon. It should be large (~512px) to accomidate retina displays.

### Title Page (Access Page)

🚧

### Sorting Groups and Topics
Sort topics by including a line like this in the front matter of your topic page: `order: 3`. Number each one as you would like it to appear within its group.

To order groups, open the index.md file and add your group names to the `group_order` hash in this format:
`group_order: {"Group Name": 1, "Another Group": 2}`

### Help Topics

Each help topic is a single Markdown file in a language collection folder (e.g. [`_English.lproj`](JekyllHelp/_English.lproj)). The only required Front Matter variable is a title. A 'hello world' topic:

```
---
title: Hello World
---
Welcome to JekyllHelp.
```
Help Topic Variables:

- title
- description
- keywords 
- order
- robots

A more typical Front Matter example with variables for description, keywords and ordering:

```
---
title: Keyboard Shortcuts
description: Quickly accomplish many tasks using keyboard and other shortcuts.
keywords: keypress, accelerators, cheat codes
order: .INF
---
...topic content...
```
### Localization

A new language is added by creating a new langauge collection folder (e.g. `_Japanese.lproj`). Language collections must be registered in [`_config.yml`](JekyllHelp/_config.yml). Some common language are registered in the default configuration (EJD-FIGS).

JekyllHelp's [`Makefile`](JekyllHelp/Makefile) will generate a help index for every *.lproj in the help bundle.

## Apps that use Jekyll-Apple-Help

[CleanMyMac 3](http://macpaw.com/cleanmymac)

[Flinto For Mac](https://www.flinto.com/mac)

[iTubePlayer](http://www.alphasoftware.co/#!itubeplayer/c363)

[Xynk]

[Jekyll]: http://jekyllrb.com
[Xcode]: https://developer.apple.com/xcode/
[Xynk]: http://xynkapp.com/
