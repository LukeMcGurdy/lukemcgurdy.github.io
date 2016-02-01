---
layout: default
title: Basic Grunt Setup
subtitle: If you are reading this the it's likely that you already know what Grunt does for a developer. However, on the off chance you don't really know what Grunt is then think of it like...
category: posts
published: true
---
# Basic Grunt Setup - a noob's guide

If you are reading this then it's likely that you already have some idea what Grunt does for a developer. (I'm still trying to figure it out ;)) On the off chance you don't really know what Grunt is then think of it like [Mojo, your very own helper monkey](https://www.youtube.com/watch?v=BFts5ISnaxQ). It performs all the tedious tasks that you don't want to do.

Can't be bothered pressing F5 to refresh your browser? Well, never fear for Grunt is here. After a little bit of configuration Grunt will automatically do it for you each time you save a file. Congratulations! You have saved 0.3 seconds.

At the end of this tutorial you will find a link to two grunt file that watch for any changes you make to file and then compile Sass, run the autoprefix processor to add/ remove vendor prefixes as required, run cssnano which is a very powerful modular minifier, reload your browser on save and notify you when the above tasks are complete. There are many more packages available but see [here](http://ipestov.com/essential-plugins-for-grunt/) for list of some interesting ones. 

## Setting up Grunt

Though all of what follows assumes a Windows 10 environment, I think that much of it isn't exclusive to it. I should add that I'm very new to Grunt so any correction is appreciated.

## Overview

To get Grunt up and running you need to do the following:

#### 1. Install node.js
#### 2. Install npm (node package manager)
#### 3. Create a file called package.json
#### 4. Create a file called Gruntfile.js
#### 5. Run Grunt

See here for official docs - http://blog.teamtreehouse.com/getting-started-with-grunt.
My own working examples can be found here - https://github.com/LukeMcGurdy/Basic-Grunt-Setup.
To install npm and various Grunt packages you might consider using a fancy console emulator like [cmder](http://cmder.net/).

## Folder structure

A basic example follows below:
    -assets
        --css
            ---main.css
        --sass
            ---main.scss
        --js
            ---main.js
        --images
            ---pic.jpg
    package.json
    Gruntfile.js

## In more detail

#### 1. Install node.js - https://nodejs.org/en/

  I selected the "Mature and Dependable version" which was v4.2.2 LTS at time of writing.

#### 2. Install npm

  cd to the root of your project folder and run

    `npm install`

#### 3. Create a file called package.json.

  In this file you identify your project essentials - project name, description, version etc. It also lists your dependencies once you have installed them. These dependencies are the packages that you install via npm. The packages.json file is placed in the root of your project folder - e.g. Desktop/my-super-project/package.jason

  If you wish to install individual packages then run the following command from the root of your project folder

    `npm install package-a --save-dev`

  Alternatively you can install multiple packages at once

    `npm install package-a package-b package-c --save-dev`

  Grunt does its magic and downloads and installs these packages in a folder called node_modules located in the root. As long as you put `--save-dev` at the end of the command then it also updates your package.json file. 

**See the next step for a link to to a packages.json example file.**

#### 4. Create a file called Gruntfile.js

  This is where you specify what packages are run and how they are configured. Each package has its own options so make sure to visit the relevant npm or github page for each package. Rather than me copying out snippets of code from both files it would be better to link directly to working examples that have some comments. 

**Please see [here](https://github.com/LukeMcGurdy/Basic-Grunt-Setup) for a copy of packages.json and Gruntfiles.js.**

#### 5. To run Grunt simply type the following in your project root folder

    `grunt`
    
   or
   
   `grunt css`

  This will run all tasks that you have defined in the default task list in your Gruntfile. (When I say task list please look out for 'registerTask' in the Gruntfile.) You can create task lists so only specific tasks are run. For example, above there is a task list called grunt css and it might compile your sass, do some vendor prefixing, and then minify the result. You can be quite modulare in the tasks you run. See the bottom of Gruntfile.js for more.

Enjoy
