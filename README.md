# SpaceCompany Desktop
Im making a desktop version of a game called <a href="https://github.com/sparticle999/spacecompany">Space Company</a> made by <a href="https://github.com/sparticle999">Sparticle999</a>

## Overview:
Space Company is a science-fiction incremental game where you start from humble beginnings on Earth, working your way up to travelling between star systems and building Dyson Spheres and pretty much colonising the entire galaxy(ies?)

# My Idea
The idea of this project is to turn <a href="https://github.com/sparticle999/spacecompany">Space Company</a> into a desktop application while also keeping the same feel as the original game in some way. I will be redesigning the layout to make it have a desktop style/feel
<br>You should check out this project that is being worked on at the same time as this ---> <a href="https://github.com/migue1s/SpaceCompanyNative" target="_blank">SpaceCompany Mobile App</a> made by <a href="https://github.com/migue1s" target="_blank">migue1s</a>

## Updates
* Made the title bar display the autosave seconds
* Added a node module that makes the use of 
```js
prompt()
alert()
confirm()
``` 
And some others
* The Delete game save button now works
* Changed the file structure to be a little more neat
* Watched hermitcraft while coding :)
* Started work on adding the help and credits pages
* Added a save keyboard shortcut. Use Command/ Ctrl + S and it will save the game
* Sort of fixed the loading screen by extending its delay by 50ms


## Things I Might Have To Do / To Do
* Change the way the game is saved
* Make useful menu bar 
* Move the autosave countdown to the bottom of the page
* Remove the `Bar at top of screen` as Sparticle999 calls it


## Plans
* Fix the loading screen flash. 
* Redesign the ui (still using bootstrap) to make it feel more like a desktop program.
* Waiting for version 1 of <a href="https://github.com/sparticle999/spacecompany">Space Company</a> to be released before I do too much work on this project

### How To Install The Game
Open up the code directory in the terminal and type

```npm install```

Once that is done, type

```npm start```



I have not made any build of the game (like a .exe) yet. Still learning.

I will make the build soon, dont worry.

## Links 
* <a href="https://github.com/spidergamin" target="_blank">SpiderGamin</a> - Me? Yeah I think so.
* <a href="https://github.com/migue1s" target="_blank">Sparticle999</a> - Game creator
* <a href="https://github.com/migue1s" target="_blank">migue1s</a> - Mobile app maker
* Electron js - Electron I think


Work

## Mainly nots for me: 
* Autosave seconds set title
```js
// This is what to put before the time left
document.title = companyName + " Company - Autosaving in " +
```

* Using jquery
```html
<!-- this goes in the index.html file, at the bottom with all the script tags -->
<script>window.$ = window.jQuery = require('jquery');</script>
```

* vex-js js prompt replacement. This goes in the head tag
```html
<link rel="stylesheet" href="game/vex.css" />
<link rel="stylesheet" href="game/vex-theme-os.css" />
```
This goes in any js file that uses the `prompt()` function
```js
const vex = require('vex-js');
vex.registerPlugin(require('vex-dialog'))
vex.defaultOptions.className = 'vex-theme-os'
```

* Game save delete
```js
instance.deleteSave = function() {
    var deleteSave;
    vex.dialog.prompt({
        message: "Are you sure you want to delete this save? It is irreversible! If so, type 'DELETE' into the box.",
        placeholder: 'DELETE',
        callback: function (value) {
            deleteSave = value;
            console.log(value)
            if(deleteSave === "DELETE") {
                localStorage.removeItem("save");
        
                vex.dialog.alert("Deleted Save");
                window.location.reload();
            } else {
                vex.dialog.alert("Deletion Cancelled");
            }
        }
    });
};
```