# TutorME

### Tools for this Project
1. [Github Desktop](https://desktop.github.com/) (Allows you to pull your code from GitHub)
1. [NodeJS](https://nodejs.org/dist/v6.9.2/node-v6.9.2-x64.msi) (Allows you to run your code locally)
1. [Sublime Text](https://www.sublimetext.com/) (Allows you to edit your code)

### Getting your Code from Github
1. 

### Running your code locally
1. Open up the __NodeJS command prompt__
1. Using the __`dir`__ command will list out folders (so you know your options).
1. Using the __`cd`__  command will help you navigate (Examples: `cd ..` goes up a folder, `cd Desktop` goes into the 'Desktop' folder)
1. Use the `cd` command to find the project folder (the folder containing __index.js__)
1. When you are in the correct folder, run `node index.js`

At this point, you should see __`TutorMe is ready at http://localhost:1234`__ print out in the command line.

If not, please follow steps 1-5 before continuing

1. Go to [http://localhost:1234](http://localhost:1234) to see your site!
1. Use __Sublime Text__ to edit your `.html` and `.css` files.

### How to add links:

Instead of saying the filename, your `<a href="...">...</a>` should use the URL.

For example:

__OLD__: 
```html
<!-- WRONG - Link to Homepage -->
<a href="../home.html">Home</a>

<!-- WRONG - Link to 'Math' Subject -->
<a href="subjects/math.html">Math</a>

<!-- WRONG - Link to 'Addition' Subject -->
<a href="subjects/math/addition.html">Addition</a>
```

__NEW__:
```html
<!-- Link to Homepage -->
<a href="/">Home</a>

<!-- Link to 'Math' Subject -->
<a href="/math">Math</a>

<!-- Link to 'Addition' Subject -->
<a href="/math/addition">Addition</a>
```

### How to add images and .css files

All `.css` files and images belong in the __`static`__ folder. 

This helps Node figure out when to load a webpage (.html) or an asset (style or image)

__OLD__:
```html

<!-- Link to .css file -->
<link rel="stylesheet" type="text/css" href="../topic.css">

<!-- Link to image -->
<img src="../../tutor-me-logo.png" />

```

__NEW__:
```html

<!-- Link to .css file -->
<link rel="stylesheet" type="text/css" href="/static/topic.css">

<!-- Link to image -->
<img src="/static/tutor-me-logo.png" />

```

__Important: Make sure to use `/static` instead of `static`__


### Ready to push your code?

When you are ready to update [http://tutorme.online](http://tutorme.online), just use __Github Desktop__ to add, 
commit, and push your changes to the __`master`__ branch.