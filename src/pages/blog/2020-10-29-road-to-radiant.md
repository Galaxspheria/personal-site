---
templateKey: blog-post
title: Road to Radiant
image: /img/frame-1.jpg
color: '#ff4656'
blurb: Automatic coaching for Valorant using Computer Vision and Dynamic Bayes Nets
date: 2020-10-29T19:04:29.672Z
description: >-
  Quarantine has had an impact on all of us. However, through these trying and
  distant times, video games have been one of the few things to bring us
  together. One of these games that we've been playing with friends is Valorant,
  a tactical FPS based on deep team play, including predicting enemy movements.
  Our team wanted to leverage Computer Vision to make these games even more
  collaborative and engaging!
tags:
  - dynamic-bayes-nets
  - flask
  - opencv
  - particle-filtering
  - scipy
  - seaborn
---
![](/img/screen_shot_2020-10-18_at_5.25.26_am_50.jpg)

## What it does

As Valorant does not support official integrations, we were forced to get creative. This project pulls frames directly from the game in order to determine where players are and what they are doing. In this way, we can begin to predict movements of characters that we cannot see in order to plan our strategies and work together as a team. After analyzing gameplay and making our predictions, we generate a heatmap to allow players to visualize unseen enemies.

## How we built it

We began with a combination of template matching using OpenCV alongside custom pixel matching techniques in order to determine the location, abilities, and movement direction of all players and to construct the best possible model of the game. This information was pulled directly from our own Twitch stream, allowing easy access and analysis of images from the game. From here, we used Dynamic Bayes Nets techniques including particle filtering in order to generate probability distributions for likely player locations. Finally, we visualized these predictions in real-time using Seaborn and Flask, providing a web app for players, coaches, and spectators to gain a deeper understanding of the game.

## Challenges we ran into and what we learned

The primary challenges we faced were in extracting and processing the game data. Valorant is deliberately somewhat locked down, making traditional data extraction approaches quite challenging. Instead, we were forced to learn more unconventional Computer Vision techniques in order to extract meaningful results. We also spent significant time optimizing our code, particularly our analysis algorithms, in order to be able to generate insights in real-time based on a livestream. The combination of these factors drove us to think on our feet and learn a lot over the course of the weekend.

## Accomplishments that we're proud of

This was an ambitious project, and one that we were not at all certain we would be able to complete. We're really excited that we were able to put all the pieces together into a full product within the limited timeframe, and we're really thrilled about the final product. Getting everything working on live gameplay was a super exciting moment.

## What's next for Road to Radiant

We have now laid the foundations for something really exciting here. Unlike most similar games, Valorant does not have a public API for players to be able to access stats about their gameplay and stats about professional matches. This proof of concept reveals the potential for something much larger - a CV-based API that allows easy access to game data for all players. Now that we know that we can extract basic game data in this way, we're really excited at the potential to build something with the ability to empower a far broader developer community going forward.



This project was built as part of HackGT 7! You can view our full DevPost submission [here](https://devpost.com/software/iron-2-radiant).
