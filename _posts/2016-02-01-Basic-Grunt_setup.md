---
layout: basic
title: Basic Grunt Setup
subtitle: If you are reading this the it's likely that you already know what Grunt does for a developer. However, on the off chance you don't really know what Grunt is then think of it like...
category: posts
published: false
---

# Basic Grunt Setup - a noob's guide

![Grunt logo](http://lukemcgurdy.github.io/assets/images/post-images/grunt-logo.jpg)


If you are reading this then it's likely that you already have some idea what Grunt does for a developer. On the off chance you don't really know what Grunt is then think of it like [your very own helper monkey](https://www.youtube.com/watch?v=BFts5ISnaxQ){:target="_blank"}. It performs many of the tedious tasks that you as a front-end developer don't want to do.

For example, can't be bothered pressing F5 to refresh your browser? Well, never fear. After a little bit of configuration Grunt will automatically do it for you each time you save a file.

At the end of this tutorial you will find a link to a basic grunt setup. This will watch for any changes you make to your files (Sass in this case) and then compile Sass, run the autoprefix processor to add/ remove vendor prefixes as required, run cssnano which is a very powerful modular minifier, reload your browser on save and notify you when the above tasks are complete. There are many more packages available but see [here](http://ipestov.com/essential-plugins-for-grunt/ target="_blank"){:target="_blank"} for list of some interesting ones.

All of what follows assumes a Windows 10 environment. However, I think that the steps outlined herecan be applied to other environments. I should add that I'm very new to Grunt so any correction is appreciated.

## General Overview

To get Grunt up and running you need to do the following:

1. Install Git for Windows
2. Install Ruby
3. Install node.js & npm (node package manager)
4. Install Grunt cli
4. Create your project folder
4. Create a file called package.json
5. Create a file called Gruntfile.js
6. Run Grunt

For more information see [here](http://blog.teamtreehouse.com/getting-started-with-grunt){:target="_blank"} for official docs.
My own working examples can be found [here](https://github.com/LukeMcGurdy/Basic-Grunt-Setup){:target="_blank"}.

## In more detail
1. Install Git for Windows
    [Git for Windows] (https://git-scm.com/download/win){:target="_blank"} (AKA Git Bash) will allow you to install modules and run Grunt.

1. Install Ruby

    Vist the [Ruby Installer download page](http://rubyinstaller.org/downloads/){:target="_blank"} and install the appropriate version. Presumably this will be the latest stable 32-bit release (v2.3.0 at the time of writing). Because the 64-bit version is still relatively new on Windows and possibly not fully Stable I'd give it a miss.

2. Install node.js & npm

    Visit the [node.js site](https://nodejs.org/en/){:target="_blank"} and and install the "Mature and Dependable version" which was v4.2.2 LTS at time of writing. The good news is that you have also installed npm - which is what you use to install the modules that Grunt will run for you.

3. Install Grunt CLI

    Using Git Bash cd to the root of your project folder and run

    `npm install -g grunt-cli`

    What this does is install the Grunt command line interface (cli) globally (hence the -g). Meaning that Grunt can now be run from wherever you want. This s is You run this just the once from and from anywhere.

    If you are not comfortable using the command line (and mayny of us aren't - myself included) then [here](http://leveluptuts.com/tutorials/command-line-basics){:target="_blank"} is a quick tutorial on the basics.  

4. Create your project folder

    A basic example follows below:
<pre>

    assets
        ├── css/
        │   ├── main.css
        ├── sass/
        │   ├── main.scss
        │   ├──
        ├── js/
        │   ├── main.js
        ├── images/
        │   ├── pic.jpg
        ├── Gruntfile.js    
        ├── package.json   

</pre>      

5. Create a file called package.json.

    In this file you identify your project essentials - project name, description, version etc. It also lists your dependencies once you have installed them. These dependencies are the packages that you install via npm. The packages.json file is placed in the root of your project folder - e.g. Desktop/my-super-project/packages.jason

    If you wish to install individual packages then run the following command from the root of your project folder

    `npm install package-a --save-dev`

    Alternatively you can install multiple packages at once

    `npm install package-a package-b package-c --save-dev`

    Grunt does its magic and downloads and installs these packages in a folder called node_modules located in the root. As long as you put `--save-dev` at the end of the command then it also updates your package.json file.


6. Create a file called Gruntfile.js

    This is where you specify what packages are run and how they are configured. Each package has its own options so make sure to visit the relevant npm or github page for each package. Rather than me copying out snippets of code from both files it would be better to link directly to working examples that have some comments.

    Please see [here](https://github.com/LukeMcGurdy/Basic-Grunt-Setup) for a copy of packages.json and Gruntfile.js.

7. Run Grunt

    To do this simply type the following into the command line making sure you are in the root of your project folder when doing so.

    `grunt`

    This will run all tasks that you have defined in the default task list in your Gruntfile. (When I say task list please look out for 'registerTask' in the Gruntfile.)

    `grunt css`

   ```css
    .test{
        background: red
    }
   ```
   Alternatively you can create task lists so only specific tasks are run. See the bottom of Gruntfile.js for more.

Enjoy
