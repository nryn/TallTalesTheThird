# TallTales

A JavaScript-based collaborative story game.

Collaborators: @nryn, @AliceArmstrong, @allthatilk, @ClemCB
Time taken: Four days

Technologies used:
  * nodeJS
  * Jasmine
  * Jasmine-node
  * Express
  * Socket.io
  * Trello

## User stories:

### Implemented

```
As a user
To make my experience more seamless
I want to not have to refresh the page with every round
```
```
As a user
To enjoy by contributions
I want to see the whole story at the end of the game
```
```
As a user
So that I can play with my friends
I want to have multiplayer functionality
```
```
As a player,
So that I can contribute to the turn-based story-writing game,
I want to be post text to the story.
```
```
As a user,
So that my story has an ending
I want a round limit set for the game
```
```
As a user
To create a more enjoyable experience
I want to be able to pick story themes for words
```
```
As a user
To enhance my experience
I want the game to look nice
```
```
As a player,
So that there is a challenge in the story-writing game,
I want to be able to choose from a set group of words
```

### TBC
```
As a user
To increase fun and intrigue
I want to only show the more recent messages
```
```
As a player,
So that I have an identity on the turn-based story-writing game,
I want to be able to sign up
```

## Successes
* Using new technologies for the functionality we needed including Socket.io, nodeJS, Jasmine-node, and Express.
* Implementing nearly all of our nice to haves as well as MVP.
* An end product that doesn't spell fantasy as 'fantasty'.
* Maintaining effective pairing throughout the week.
* Sticking with TDD even when things looked bleak.
* All tests passing!

## Struggles
* Trying to find the right technologies. We started off with Meteor but it was too opinionated and TDD wasn't very happily integrated with it so we cut our losses and switched to using nodeJS and Express in order to use our current knowledge of vanilla JS.
* Implementing Jasmine-node instead of Jasmine standalone. We started off with standalone Jasmine for our testing as we'd used it before. However, we found we needed to change this once we brought our code server-side. We switched standalone out for Jasmine-node and figured out how to require it and restructure our directory to accommodate our new testing framework.
* Time. We only had 3.5 days to do this!!
