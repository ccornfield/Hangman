# Hangman - A portfolio project.

Welcome to my Code Institute milestone project. This is my second of such projects. For this milestone project, I was tasked with creating a webpage that was not only interactive but also offered some form of service, most often in the form of a game. In order to meet this goal, I decided to create a simple game of hangman featuring a robot rather than the typical figure. I chose to do this due to its simplicity and the potential for imagery unique to my site.

![My site in a range of different responsive layouts](assets/readme/responsive.png)

[Click here to access the live website](https://ccornfield.github.io/Hangman/)

## Table of Contents

1. [Planning & Development](#planning--development)
2. [Features](#features)
3. [Testing](#testing)
4. [Deployment](#deployment)
5. [Languages](#languages)
6. [Media Queries](#media-queries)
7. [Software](#software)
8. [Code](#code)
9. [Credits](#credits)

# Planning & Development #

### Business Strategy

When deciding on the game I was going to make I had already decided on making a word game. This was due to my relative confidence in working with arrays and their lasting popularity combined with the relative ease that they can be put together allowing for a reasonably quick completion time. It was also chosen due to it's prevalence in many major demographics.

### Target Audience

Like in my previous project I was not originally going into this with a market to aim for, not because it was a mock for anything; It was a serious project for showcasing my design and coding ability. It was moreso due to the knowledge that a game such as this did not need extensive marketing since it was a self-contained effort that served more like a sandbox than anything else. That being said it's important to understand it's potential reach in the event that such a concept needs be executed again in a more professional environment.

My research shows that 79% of people that search for hangman on facebook while the most popular age group featured on the website were those aged 65+ which accounted for 29% of all searches showing that the main market for hangman is older women, possibly retired.

![Using AdTargeting, these were the top results in google keywords](assets/readme/hangman_google_marketing.png)

![Using AdTargeting, this was the only result in facebook keywords](assets/readme/hangman_facebook_marketing.png)

### Hangman Keyword Search

* 29% Female demographic
* 65+ age range

Considering these parameters, while mobile will of course need to be considered and ensured that it is responsive in its design, due to the age range present a heavy focus on effective desktop design will also be a nessecity. Clear and simple controls with an uncluttered UI and a large, readable font will be essential in making the website as easy to use for older persons as possible.

### User Needs

#### User Stories
1. Be able to enter their username
2. Capeable of suggesting letters to the submission box
3. Easily understanding when they lose and win

### Site Objectives

* To make sure that site elements are easy to understand.
* Ensure that the web page is responsive and easy to interact with.
* To display a new image for every incorrect guess the player makes.
* To update HTML elements for every correct guess the player makes.
* Clearly denote where plays can submit letters and usernames.
* Allow the user to suggest a unique username for win and loss messages.
* Possess a color palette that is easy on the eyes.

### Research

While working on this site I did not do much research, this was because the design of my site was very laser focused into being a simple hangman game. Therefore in terms of site research, I refered to the portfolios of other code institute students as can be seen below.

[Yagavi1994](https://github.com/Yagavi1994/Wordle)
[kateuj](https://github.com/kateuj/coffee_cram)

I took notice of their design and incorporated elements of them into my own work.

### Wireframe

When putting together my website, my first port of call was to use balsamiq to create the wireframes that would allow me to plan out the look of my website and the respective elements that I wanted to be included. These designs were not final and they do look markedly different to the final project. This was due to worries about time constraints from struggles during the study period of the project. By simplifying certain elements and just keeping the wholly nessecary design elements I was able to ensure the project was done in a timely nature.

![The username submission page](assets/readme/name_input.png)

![The game screen where users would submit letters for the hangman game](assets/readme/hangman_game.png)

![The game screen as it was intended to look on phones](assets/readme/hangman_game_mobile.png)

![The game's win screen](assets/readme/win_screen.png)

![The game's loss screen](assets/readme/loss_screen.png)

### Color Scheme

There wasn't a target market in mind at the time of the sites creation and since the site would only have a few distinct elements to ensure stood out, I used a palette with more muted colors while reserving the stronger colors for the more important elements that I wanted to ensure the player saw e.g. the header where the score would go and the hover highlight on the submit button to show they were about to click it. 

Yellow Green was not used on the site due to it's high saturation that would have clashed with the weaker colors on the sight and how it would blend into the background if used for the header and footer elements.

![The Websites color scheme](assets/readme/palette.png)

### Typography

For this project, due to it being a word game, I wanted to select a font that had very little embellishment and could be read clearly on both small phone screens and large desktop monitors. To this end I chose to use the Inter font due to it's clean appearance and ease of readability, as it was clearly readable even when the font was shrunk down to a smaller size for the purposes of reponsive design.

![The font used for the entireity of the site](assets/readme/chosen_font.png)

# Features #

### General

I have in large part been able to successfully make the site responsive by ensuring the text and images are at the appropriate time according to the size of the screen using google dev tools. 

### Username Screen

![The screen where users can submit their username for unique Win/Loss alerts](assets/readme/username_screen.png)

The above screen was created because it was suggested to me by my tutor that I should have an interactive element on the site that was not related to the game. Therefore I decided that it would be wise to allow the user to submit their own usernames so they could get personalized update on whether or not they won the game or did not guess the word in time.

### Header

![The header before the game starts](assets/readme/header.png)

The header for the site is very barebones, simply displaying a logo in the form of the name of the project. This was done in order to keep the CSS as simple and as functional as possible as too many elements may have disrupted the readability of other elements that require precise js to function.

### Updated Header

![The header after the game starts](assets/readme/updated_header.png)

This is how the header looks when the user submits their username into the submission box, which then launches the game. The score box ticks up by one whenever the user correctly guesses the hangman word.

### Footer

![The footer present on both the username screen and game screen](assets/readme/footer.png)

This footer was implemented simply to state the name of the creator of the site and the year in which it was created in the form of a mock copyright, as if to suggest this project was a professional product with legal protections.

### Game Screen

![The screen in which the hangman game takes place.](assets/readme/game_screen.png)

The game screen is where the hangman game operates, with the majority of the js script present targeting id's only present on this screen. This is not a seperate html page and is instead the same page that the username page takes place on. JS is used so that once the username is submitted, the html on the page changes. The text input and submit box remain the same however the above paragraph and header instead change to an image and a div tag as to facilitate the games mechanics which will be explained going forwards.

### Game Interface

![How the user is able to play the game of hangman](assets/readme/game_interface.png)

![What happens when the player makes a correct guess](assets/readme/correct_guess.png)

![What happens when the player makes a incorrect guess](assets/readme/incorrect_guess.png)

The white box in this image is the submission box, here players insert a lower case letter into the console and then click on the submit button which then triggers a function that uses the submitted letter as a variable to compare to every letter in the word being used for the current game of hangman. If any of them are right the underscore div will update with the letter in the correct place to show a correct guess. If all the letters in the current word do not match the suggested letter, then a function will trigger to update the hangman image and add 1 to a tally of guesses. After 6 incorrect guesses, the hangman completes and the player loses the game. After each correct guess, a function runs to detect if the player has won the game or not, upon a victory the player recieves an alert congratulating them while also incrementing the score by one via a function. The player also recieves an alert upon a loss telling them they ran out of guesses and also revealing what the word was.

# Testing #

Testing for this project was very extensive and varied compared to my previous milestone effort. Unlike HTML and CSS where issues can typically be targeted quicky and resolved with the change of a line of text with procedures for certain effects like keeping a footer at the bottom of the page widely documented and easy to check. Javascript differs in that while the use of individual methods can be understood and so can the general construction of objects and functions, due to the malleability of these elements, making sure they function as intended is a much more involved and difficult process. The process for testing both pages with be detailed below.

### Username Page Testing

This was the easier page to test of the two due to the it's simpler construction without as many javascript elements to troubleshoot. However there was still testing to be done to ensure it worked accordingly. First of all was the CSS of the header/footer. They had a width and display so that it went wider than the viewport of every device it was tested on, resulting in a scroll bar along the bottom of the page. This was resolved by attacking the 100% width to the body of the page and changing the position of the footer from an absolute to a fixed position, then giving it a seperate width. This ensured all elements were snugly fit inside the browser viewport.

For testing javascript, the main concern was making sure that a user couldn't just skip the process of having a username as this would be essential for later functions such as win and loss alerts. This was resolved by having a check for if the value of the username input box was less than 1. This resulted in the the desired effect. Another issue with the username page was that for a time it was unable to detect the value of the text input box by not being able to use the .value method as a function. By removing the variable from the game object and making it it's own seperate variable, it was able to find the data it needed to complete the collectUsername function.

### Game Page Testing

The heavy majority of the testing for this project took place in the game page, this is the page that is created upon the user submitting their username by triggering the runGame and changeHTMLForGameplay functions. The first thing that needed testing was making sure that the current word could actually be searched through. I initially tried to do this by using the split method however at first this did not work as it was not considered a valid function, however this was solved by using a more specific way to call the variable I needed which resulted in it working. 

After this, it was important to make sure that the dotted lines below the hangman image worked as intended, which at first was not the case. The variable involved with remembering the correct guesses of the player was not being stored between calls of the function which lead to each submitted word being added to the dotted line but removed every other guess the player had made, making a win state impossible. This was resolved by making the dotted line automating with the fill method, making it so the string was malleable and able to store the correct guesses easier than if a new static string had to be made each pass of the function.

One of the scariest hurdles that was faced during the testing process of the game page was an issue where upon the player losing or winning the game, certain elements would either not load or disappear completly. These were bad issues because they impeded the polish and playability of the game, making the player feel like that had either cheated the game or lost unfairly, not realizing their loss state. For repairing the issue with the win state not working, the final letter suggested would not be submitted to the dotted line, resulting in it appearing incomplete. This was resolved by timeout function to delay the code so that the original function could complete before any more code could run. A similar solution was used to fix the loss function however not only was the delay longer (60 milliseconds), the method of detecting the game loss was moved from being inside of the updateHangmanImage as a natural part of it's code but instead to a seperate, checkIfPlayerHasLost, function. This allowed for the image to render as the runGame trigger is called but interrupted by the alert so that the code inside of runGame does not actually trigger and wipe the image back to it's default blank state. This fix currently only works on VS Code live server and directly opening the html file on my computer. For the live site on github it remains unsolved.



### W3C Validator

![The validator results for the HTML of my Userpage](assets/readme/w3c_html_validator.png)

My HTML was very simple and as such I was not expecting to get many, if any, standout errors in the code since it was intended to hold the nessecary ID's for the hangman game to function. As such the only changed I had to make to my userpage was to change a h1 into a h2 as to ensure a proper hierarchy of headers that the validator would approve of.

![The validator results for the HTML of my Game Page](assets/readme/w3c_html_game_validator.png)

For the sake of clarity, I edited the userpage with the html code added to it by the javascript included within and ran that through the validator. As expected, I recieved no concrete errors in the code. Just the warning that it would be for the best changing the section tag to a div tag. However considering that this was not considered an error or warning on the userpage, I have decided to live with it for now. However this may change going forwards.

![The validator results for the CSS of my Website](assets/readme/w3c_css_validator.png)

Same case as with my HTML validator, I was not expecting any major errors in my code. The only issue was that I had incorrectly given display a fake value in absolute. Therefore the best way to fix it was to simply remove the offending code.

### jshint Validator

![jshint warnings](assets/readme/jshint_warnings.png)

![jshint undefined variables](assets/readme/jshint_undefined_variables.png)

jshint is a validator designed for testing best practises in developing applications using javascripy similar to that used by the world wide web consortium. Using it I was able to detect errors in my code that arn't a case of clarity but a case of not being professional. As can be seen above, where code was not borrowed and sited from other projects done with code institute, many of the issues present were things like improper notation for variable locations, a lack of semicolons and not declaring vital variables to the program. It had warned me about using functions in loops and had also showed concern that I had not cited words as a variable however the code involving the function was sourced from the code institute project Love Maths and the word variable was cited in a seperate file called dictionary.js so those warnings were ignored.

# Deployment #

In order to deploy my website, I used github pages. In order to use this service I had to do the following:

1. Go into my project repository
2. Click on the settings icon
3. Click on the source drop down and select the option "Deploy from branch"
4. In the branch drop down, select the option "main", this can be found in the root folder.
5. Select the folder dropdown a
6. Press the save button.
7. After reloading you should see that the site is live.
8. Click the visit site button or use the link provided to access the site at any time.

# Languages #

For this website I used HTML, CSS and Javascript.

# Media Queries #

Media Queries were used exclusively in the role of increasing the responsiveness of web pages by shrinking the font size on the h2 elements and the size of the hangman image depending on the size of the screen.

# Software #

VS Code was used to create the website. It was the tool for typing out HTML and CSS code along with pushing site updates to the Github repository. Github and by extension Git was used to edit the website once it had been pushed to the repository while also being used to host the website and make it live.

Balsamiq was used to create the wireframes saw earlier in this readme.

The microsoft snipping tool was used to take the relevant screenshots.

# Code #

For my hangman I took advice from [this forum post](https://stackoverflow.com/questions/18149043/how-to-check-img-src-is-true-using-javascript) in order to design a better way to check the loss state in my website.

For the favicon I used [a generator](https://favicon.io/) in order to generate the files and code that was used to apply it to my entire site.

# Credits #

Code Institute for the opportunity to learn and hone the craft of developing websites.

My loving and supportive family for supporting me in this endeavor.