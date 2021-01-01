# BHL-Compatibilizer 1.0

This branch contains compatibility fixes for the Black Highlighter Theme and variants used on Wikis using the Common Theme.

**Usage:**
Place this code under the include-module of the BHT and derivatives:
```
[[include :o5command-int:tech-team:bhl-compatibility-theme]]
```

**Known issues:**
- Nested menus do not have hover animations
- Long sidebar items are partly overlapping with the scroll bar

If you encounter compatibility problems with the BHL theme and your own wiki's changes to the theme, set up an own compatibilizer and import this one to your CSS with the following line:
```
@import url('http://o5command-int.wdfiles.com/local--code/tech-team:bhl-compatibility-theme/1');
```

*See also: http://o5command-int.wikidot.com/tech-team:bhl-compatibility-theme*
