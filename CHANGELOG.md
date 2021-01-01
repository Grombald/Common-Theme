<h2 align="center">Common-Theme Changelog</h2>

**1.3.7 (Current version)**
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
