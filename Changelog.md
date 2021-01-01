<h2 align="center">Common-Theme Changelog</h2>

**1.3.8 (Current version)**
* Now only available on GitHub
* Several bugfixes

Added new classes:
* Classes to imitate HTML elements, like .h2 or .b
* Classes for aligning text: *.align-center*, *.align-right*, *.float-left* and *.float-right*
* Classes to imitate a table of contents: *.toc*, *.toc-title* and *.toc-list*
* A new variant of the content panel class set: White-Paper. Example: http://scp-wiki-de.wikidot.com/task-forces

Added new extension: Forum enhancements
Add the following to your theme below the other import-lines to install:
```
@import url('https://grombald.github.io/Common-Theme/css/min/Common-Theme-Extension_Forum-enhancements-1.0.min.css');
```

**1.3.7**
* Several bugfixes

Added new classes: 
* *.hyphens*: Activates automatic hyphens in an element
* *.justify*: Justifies the content of an element; for use with .hyphens
* *.indent*: Indents all first lines within an element by 2em
* *.no-indent*: Disables indenting for an element within an indenting element

The indenting can be changed by adding this code and modifying the dimension:
```
[[module css]]
:root { --ct_dim_text-indent: 2em; }
[[/module]]
```
 
**1.3.6:** Added a missing shadow.

**1.3.5:** Added a missing variable

**1.3.4:** Fixed a bug in the mobile topbar.

**1.3.3:** Fixed a bug in the header-text-scaling.

**1.3.2:** Fixed a bug of the image-box

**1.3.1:** Fixed a bug of the social-media link icons in the sidebar.

**1.3:**
* Full overhaul, optimization and partly rewrite of the theme
* Added bugfixes
* Added modification support

**1.2:** Last pre-optimization release, basically the Revision 78 from SCP-EN's theme http://www.scpwiki.com/component:theme with a few changed dimensions of the interwiki-module
