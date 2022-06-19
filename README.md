> Currently broken
# CURRENTLY NOT MAINTAINED

![Build/release](https://github.com/insberr/SpaceCompany-Desktop/workflows/Build/release/badge.svg)


# SpaceCompany Desktop
A desktop version of the game [SpaceCompany](https://github.com/sparticle999/spacecompany), made by [Sparticle999](https://github.com/sparticle999)

## Overview:
Space Company is a science-fiction incremental game where you start from humble beginnings on Earth, working your way up to travelling between star systems and building Dyson Spheres and pretty much colonizing the entire galaxy(ies?)

# My Idea
The idea of this project is to turn [SpaceCompany](https://github.com/sparticle999/spacecompany) into a desktop application.  
You should check out the [SpaceCompany Mobile App](https://github.com/migue1s/SpaceCompanyNative) made by [migue1s](https://github.com/migue1s)

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
NOTE: MAKE SURE YOU HAVE RUN `npm install`
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
* [x] Make the menu bar on the 'webpage' rather than the 'program window' so you can access it in fullscreen
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
* [insberr](https://github.com/insberr) - Me? Yeah I think so.
* [Sparticle999](https://github.com/sparticle999) - Creator of [SpaceCompany](https://github.com/sparticle999/spacecompany)
* [migue1s](https://github.com/migue1s) - Creator of the [SpaceCompany Mobile App](https://github.com/migue1s/SpaceCompanyNative)


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
