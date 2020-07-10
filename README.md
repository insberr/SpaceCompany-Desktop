# SpaceCompany Desktop
Im making a desktop version of a game called <a href="https://github.com/sparticle999/spacecompany">Space Company</a> made by <a href="https://github.com/sparticle999">Sparticle999</a>

## Overview:
Space Company is a science-fiction incremental game where you start from humble beginnings on Earth, working your way up to travelling between star systems and building Dyson Spheres and pretty much colonising the entire galaxy(ies?)

# My Idea
The idea of this project is to turn <a href="https://github.com/sparticle999/spacecompany">Space Company</a> into a desktop application while also keeping the same feel as the original game in some way. I will be redesigning the layout to make it have a desktop style/feel
<br>You should check out the <a href="https://github.com/migue1s/SpaceCompanyNative" target="_blank">SpaceCompany Mobile App</a> made by <a href="https://github.com/migue1s" target="_blank">migue1s</a>


## This are not recommended
### How To Install The Game
Open up the code directory in the terminal and type
```
npm install
```
Once that is done, type
```
npm start
```

### How To Build
To build the application for your platform, run
<br>NOTE: MAKE SURE YOU HAVE RUN `npm install`
```
npm run build
```


# Updates
## v0.0.6
* Restyled the menu bar
* Added a main menu page
* Added keyboard shortcuts 
`esc` for the main menu,
`CTRL S` to save the game,
`CTRL C` to clear all notifications
* Moved the help, credits, settings, and main menu pages all to the games `index.html`
* Fixed the loading screen
* Started work on redesigning the UI
* Moved the `energy defect` to the bottom left of the screen (This is temporary)


## To Do
* [x] Remove the `Bar at top of screen` as Sparticle999 calls it
* [x] Fix the loading screen flash. 
* [ ] Redesign the ui (still using bootstrap) to make it feel more like a desktop program.
* [ ] Waiting for version 1 of <a href="https://github.com/sparticle999/spacecompany">Space Company</a> to be released before I do too much work on this project
* [x] Make the menu bar on the 'webpage' rather than the 'program window' so youn can access it in fullscreen
* [ ] Redesign the credits and help pages


## V0.0.5
* Added the help and credits pages to the menu bar (under help)
* Added a load game from save data button in the menu under 'Game'
* Added 'Home' button to go back to the game from a differant page (till i make new pages into a new window rather than the same window)
* Started work on making a custom menu bar (as seen in the credits.html page)


## Updates
* Made the title bar display the autosave seconds
* Added a node module that replaces the use of
```js
prompt()
alert()
confirm()
``` 
* The Delete game save button now works
* Changed the file structure to be a little more neat
* Watched hermitcraft while coding :)
* Started work on adding the help and credits pages
* Added a save keyboard shortcut. Use Command/ Ctrl + S and it will save the game
* Sort of fixed the loading screen by extending its delay by 50ms


# Links & Credits
* <a href="https://github.com/spidergamin" target="_blank">SpiderGamin</a> - Me? Yeah I think so.
* <a href="https://github.com/sparticle999" target="_blank">Sparticle999</a> - <a href="https://github.com/sparticle999/spacecompany">Space Company</a>
* <a href="https://github.com/migue1s" target="_blank">migue1s</a> - <a href="https://github.com/migue1s/SpaceCompanyNative" target="_blank">SpaceCompany Mobile App</a>
* Electron js



## Mainly notes for me:
<details><summary>Autosave seconds set title</summary>
<p>

```js
// This is what to put before the time left
document.title = companyName + " Company - Autosaving in " +
```
</p>
</details>


<details><summary>Using jquery</summary>
<p>

```html
<!-- this goes in the index.html file, at the bottom with all the script tags -->
<script>window.$ = window.jQuery = require('jquery');</script>
```
</p>
</details>

<details><summary>vex-js js prompt replacement</summary>
<p>

```html
<link rel="stylesheet" href="game/vex.css" />
<link rel="stylesheet" href="game/vex-theme-os.css" />
```

This goes in any js file that uses the `prompt()` function

```js
// This goes in any js file that uses the `prompt()` function
const vex = require('vex-js');
vex.registerPlugin(require('vex-dialog'))
vex.defaultOptions.className = 'vex-theme-os'
```

</p>
</details>

<details><summary>Game save delete</summary>
<p>

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

</p>
</details>
