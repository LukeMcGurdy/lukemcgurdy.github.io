---
layout: basic
title: Basic Grunt Setup - A noob's guide
subtitle: If you are reading this it's likely that you already know what Grunt does for a developer. However...
category: posts
published: true
---

# Basic Grunt Setup - A noob's guide

![Grunt logo](../assets/images/post-images/grunt.png){: .full-width}

If you are reading this then it's likely that you already have some idea what Grunt is and what it does for a developer. But if like me you are a little late to the party and you don't know anything about Grunt beyond the name then think of it as [your very own helper monkey](https://www.youtube.com/watch?v=BFts5ISnaxQ). The plugins that run in Grunt perform many of the tedious tasks that you as a front-end developer don't want to do.

Can't be bothered pressing F5 to refresh your browser? Well, never fear. After installing a plugin like livereload and doing a little bit of configuration Grunt will automatically refresh your browser for you each time you save a file. Congratulations! You have saved yourself 0.3 seconds. There are many packages available and you can have a read of [here](http://ipestov.com/essential-plugins-for-grunt/ target="_blank") for list of some interesting ones.

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
My own working examples mentioned in this tutorial can be found [here](https://GitHub.com/LukeMcGurdy/Basic-Grunt-Setup).

## In more detail
1. Install Git for Windows

    [Git for Windows](https://git-scm.com/download/win) (AKA Git Bash) will allow you to install packages and run Grunt. I've gotten a little fancy and I run Git Bash through [ConEmu](https://conemu.GitHub.io/). It has a number of nice features like support for themes, customizable fonts, and the ability to run multiple shells in one window. You won't need Git Bash again until step 4.

    If you are not comfortable using the command line (and many of us aren't myself included) then [here](http://leveluptuts.com/tutorials/command-line-basics) is a quick tutorial on the basics.  

2. Install Ruby

    Visit the [Ruby Installer download page](http://rubyinstaller.org/downloads/) and install the appropriate version. Presumably, this will be the latest stable 32-bit release (v2.3.0 at the time of writing). I stand to be corrected, but I think that the 64-bit version is still relatively new to Windows and possibly not fully stable so I'd avoid this.

3. Install node.js & npm (node package manager)

    Visit the [node.js site](https://nodejs.org/en/) and install the "Mature and Dependable version" which was v4.2.2 LTS at the time of writing. This is the environment that Grunt will run in. The good news is that you have also installed npm - which is what you will use to install the packages that Grunt runs.

4. Install Grunt CLI

    OK, so now the correct environment has been installed and you are ready to install Grunt. Open up Git Bash and run the following command.

   `npm install -g grunt-cli`

    What this does is install the Grunt command line interface (CLI) globally (hence the -g) and this allows you to run multiple versions of Grunt on your machine. You run the above command just the once and from any directory and then forget about it. From here on in you will set up and run Grunt on a per project basis.

5. Create your project folder

    This is when Grunt starts to work for you. A basic example of a project folder looks something like this:
<pre>
assets/
    ├── package.json
    ├── Gruntfile.js
    ├── node_modules/
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

    In this file, you identify your project essentials such as project name, description, version etc. Most importantly it lists the packages (also known as dependencies) that you wish to run. (To my mind the terms package, dependency, and plugin are all interchangeable with respect to Grunt.)

    If you have a pre-configured package.json file you simply run the `npm install` command from the root of your project folder and sit back and watch your specified packages automatically install.

    If you wish to install an individual package then run `npm install package-a --save-dev`. Or you can install multiple packages at once by running `npm install plugin-a plugin-b plugin-c --save-dev`.

    As long as you put `--save-dev` at the end of the command then it also updates your package.json file - which is a good thing.

    Once you run any of the above commands a new folder called `node_modules` will be created in the project root folder. This is where all the dependencies are stored and it's not something I've ever had occasion to touch. This is also not a folder you will want to transfer to another environment because it contains 1000's of files. So make sure to add `node_modules` to your `.gitignore` file. You have all you need in your package.json and Gruntfile.js files along with the `npm install` command to rebuild the `node_modules` folder on any project.  

7. Create a file called Gruntfile.js

    In the previous step you installed your packages and now you need to configure them to run in Grunt. This is the most time-consuming step in this process. Each package has its own options so make sure to visit the npm or GitHub page for the docs.

    Please see [here](https://GitHub.com/LukeMcGurdy/Basic-Grunt-Setup) for a copy of packages.json and Gruntfile.js.

8. Run Grunt

    To run grunt you open Git Bash and cd to the same directory that contains your Gruntfile.js and package.json files and then type `grunt`. This will run all tasks that you have defined in the default task list in your Gruntfile. (When I say task list please look out for 'registerTask' in the Gruntfile.)

    Alternatively, you can create task lists so only specific tasks are run. See the bottom of Gruntfile.js for more.

    Once you save changes to your scss files your terminal will notify you of the updates.

Enjoy
