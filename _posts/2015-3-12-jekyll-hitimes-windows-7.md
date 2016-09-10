---
layout: basic
title: Development Woes - A short tail of running Jekyll in Windows 7
subtitle: After a lot of teething problems with tech I don't understand - namely Ruby and something called Hitimes - I was finally able to get Sass, Compass and Jekyll running together locally on Windows 7. Apparently Ruby had very recently updated to version 2.2 and the maintainers of Hitimes (whatever that is) had not released a corresponding fat-binary gem update (again, whatever that is). So it was this that was causing me trouble.
category: posts
published: true
---
# Development Woes - A short tail of running Jekyll in Windows 7

After a lot of teething problems with tech I don't understand - namely Ruby and something called Hitimes - I was finally able to get Sass, Compass and Jekyll running together locally on Windows 7. Apparently Ruby had very recently updated to version 2.2 and the maintainers of Hitimes (whatever that is) had not released a corresponding fat-binary gem update (again, whatever that is). So it was this that was causing me trouble

The fix was to run the following command from within Git Bash: `gem install hitimes -v 1.2.1 --platform ruby`. My assumption is that something equivalent to this command would have been automatically run during my initial setup of Ruby etc: `gem install hitimes -v 1.2.2 --platform ruby`. I'm also assuming that at some point down the line I should replace hitime -v 1.2.1 with the latest version. It's probably quite apparent that I'm completely out of my depth here. Nevertheless, I'm happy that I had the knowledge and skill to do a Google search and then copy and paste the solution from <a href="http://stackoverflow.com/questions/28985481/hitimes-require-error-when-running-jekyll-serve-on-windows-8-1/">this</a> post.

For those who are interested in getting Jekyll up and running then I would recommend <a href="http://www.smashingmagazine.com/2014/08/01/build-blog-jekyll-github-pages/">this</a> post as essential reading.

Ok, that's it for now.
