---
layout: basic
title: Basic Grunt Setup - a noob's guide (written by a noob)
subtitle: If you are reading this the it's likely that you already know what Grunt does for a developer. However, on the off chance you don't really know what Grunt is then think of it like...
category: posts
published: true
---

# Basic Grunt Setup - a noob's guide

![Grunt logo](../assets/images/post-images/grunt.png){: .full-width}

If you are reading this then it's likely that you already have some idea what Grunt is and what it does for a developer. But if like me you are a little late to the party and you don't know anything about Grunt beyond the name then think of it as [your very own helper monkey](https://www.youtube.com/watch?v=BFts5ISnaxQ). The plugins that run in Grunt perform many of the tedious tasks that you as a front-end developer don't want to do.

For example, can't be bothered pressing F5 to refresh your browser? Well, never fear. After a installing plugin like livereload and doing a little bit of configuration Grunt will automatically refresh your browser for you each time you save a file. You have saved yourself 0.3 seconds. There are many packages available and you can have a read of [here](http://ipestov.com/essential-plugins-for-grunt/ target="_blank") for list of some interesting ones.

 I should add that I'm very new to Grunt so any correction is appreciated (once I set up a comments section ;) ).

## General Overview

All of what follows assumes a Windows 10 environment. To get Grunt up and running you need to do the following:

1. Install Git for Windows
2. Install Ruby for Windows
3. Install node.js & npm
4. Install Grunt cli
(Steps 1 to 4 should only be required once. After that you will )
5. Create your project folder
6. Create and configure a file called package.json
7. Create and configure a file called Gruntfile.js
8. Run Grunt

For more information see [here](http://gruntjs.com/getting-started) for official docs.
My own working examples mentioned in this tutorial can be found [here](https://github.com/LukeMcGurdy/Basic-Grunt-Setup).

## In more detail
1. Install Git for Windows

    [Git for Windows](https://git-scm.com/download/win) (AKA Git Bash) will allow you to install modules and run Grunt. I've gotten a little fancy and I run Git Bash (and other shells) through [ConEmu](https://conemu.github.io/)>. It has a number of nice features like support for themes, customizable fonts, and the ability to run multiple shells in one window that I think make it worth your while taking the time to set up. It's not in any way necessary to get Grunt up and running though. You wont need this again until step 4.

    If you are not comfortable using the command line (and many of us aren't, myself included) then [here](http://leveluptuts.com/tutorials/command-line-basics) is a quick tutorial on the basics.  

2. Install Ruby

    Visit the [Ruby Installer download page](http://rubyinstaller.org/downloads/) and install the appropriate version. Presumably this will be the latest stable 32-bit release (v2.3.0 at the time of writing). I stand to be corrected but the 64-bit version is still relatively new on Windows and possibly not fully stable.

3. Install node.js & npm (node package manager)

    Visit the [node.js site](https://nodejs.org/en/) and install the "Mature and Dependable version" which was v4.2.2 LTS at time of writing. This is the environment that Grunt will run in. The good news is that you have also installed npm - which is what you will use to install the plugins that Grunt runs to make your life that bit easier.

4. Install Grunt CLI

    OK, now the correct environment has been installed and you are ready to install Grunt. Open up Git Bash (you don't have to be in a particular directory) and run the following command.

   `npm install -g grunt-cli`

    What this does is install the Grunt command line interface (cli) globally (hence the -g) and this allows you to run multiple versions of Grunt on your machine. You run the above command just the once and then forget about it. From here on in you will be set up and run Grunt on a per project basis

5. Create your project folder

    A basic example looks something like this:
<pre>
        assets
        ├── Gruntfile.js
        ├── package.json (see below for more on creating Gruntfile.js and package.json)
        ├── css/
            ├── main.css
        ├── sass/
            ├── main.scss
        ├── js/
            ├── main.js
        ├── images/
            ├── pic.jpg  
</pre>  

6. Create a file called package.json.

    In this file you identify your project essentials such as project name, description, version etc. Most importantly it lists the plugins (also known as dependencies) that you wish to run. (To my mind the terms plugin, dependency and package are all interchangeable.)

    If you have a pre-configured package.json file you simply run the following command from the root of your project folder. Sit back and watch your specified plugins and their dependencies automatically install.

    `npm install`

    If you wish to install individual packages then run

    `npm install package-a --save-dev`

    Alternatively, you can install multiple packages at once

    `npm install package-a package-b package-c --save-dev`

    As long as you put `--save-dev` at the end of the command then it also updates your package.json file.

    Once you run any of the above commands a new folder called node_modules will be created in the project folder root. Ultimately, this is not a folder you will want to transfer to another environment primarily because it's huge. You have all you need from your package.json and Gruntfile.js files.  

7. Create a file called Gruntfile.js

    In the previous step you installed plugins and now you need to configure them to run in Grunt. This is the most time consuming step in setting up Grunt. Each plugin has its own options so make sure to visit the relevant npm or github page for each package and read the docs.

    Please see [here](https://github.com/LukeMcGurdy/Basic-Grunt-Setup) for a copy of packages.json and Gruntfile.js.

8. Run Grunt

    To run grunt you simply navigate to the root of your project (your Gruntfile.js and package.json files should be here as well) and type type command line making sure you are in the root of your project folder when doing so.

    `grunt`  

    This will run all tasks that you have defined in the default task list in your Gruntfile. (When I say task list please look out for 'registerTask' in the Gruntfile.)

    `grunt dist`

   Alternatively you can create task lists so only specific tasks are run. See the bottom of Gruntfile.js for more.

Enjoy
