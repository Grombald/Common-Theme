# Common-Theme Sandbox Edition 1.0
Your Sandbox should have the exact same features that your main Wiki has, so users can try their code properly. Therefore you need to import your theme, then make some adjustments like another logo and header background.

**How to install:**
Changes in your Sandbox's Theme (component:theme):
* Make a backup copy of your original theme, or at least name the Revision accordingly
* Delete the content of component:theme
* Replace it with the following:
```
[[code type="css"]]
@import url('http://YOUR-WIKI.wdfiles.com/local--code/component:theme/1');
@import url('https://grombald.github.io/Common-Theme/css/min/Sigma-9-Common-Sandbox-Theme-1.0.min.css');
 
/*
    SCP Sigma 9 - Common Theme - Sandbox Edition 1.0
    [2020 Wikidot Theme - CC BY-SA 3.0]
    Created for the SCP Foundation by Aelanna
    Edited for SCP Foundation by Crayne, Dr Devan, anqxyr, DrMagnus, pxdnbluesoul
 
    Extensions:
    - Font Awesome 4.3.0 by @davegandy under SIL OFL 1.1 (Font) and MIT License (CSS)
    - Common Theme, bugfixes, top- and sidebar-mods by Dr_Grom
    - Support for Asian languages by Nanimono Demonai
    - Interwiki-module by Resure
    - Credit-module by C-take, physicslike, sinazugawa Nanimono Demonai, improved by Dr Devan and Boyu12, and adapted Dr_Grom
    - Colmod by Boyu12
    - Sandbox Edition by Dr_Grom
*/
[[/code]]
```
On top in the line `@import url('http://YOUR-WIKI.wdfiles.com/local--code/component:theme/1');` change the `YOUR-WIKI` to the subdomain of your sandbox (the part before the `.wikidot.com`).

You will find the graphics used here attached to this branch, as well as a favicon you can use.
