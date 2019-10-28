---
templateKey: blog-post
title: Chaos Colleagues
image: /img/chaoscolleagues1.png
color: '#131027'
blurb: VR party games without the controller hassle
date: 2019-10-28T15:49:19.036Z
description: >-
  We like friends. We like games. We like games with friends. For years we've
  enjoyed games like Jackbox Party Pack that allow us to easily play with
  friends without the overhead of owning, connecting, and setting up
  controllers, allowing party games of 4-10 people playing on their phones and
  laptops that wouldn't otherwise be possible. We've wanted to do the same for
  virtual reality for a while; few people own more than one headset and those
  who do can rarely fit multiple at once, so playing together usually involves
  watching and/or taking turns. Some real multiplayer games do exist with
  controllers, but those are expensive and annoying to set up. We want to play
  with our friends quickly and easily, from devices they already own. Today,
  we're bringing that flexibility to VR.
tags:
  - 'c#'
  - oculus
  - teleportal
  - unity
  - vrtk
---
![](/img/chaoscolleagues1.png)

## What it does

Chaos Colleagues is a platform for playing a boundless number of asymmetric VR party games. We've established the technical foundations to easily build games where a large player in virtual reality interacts with numerous tiny players in the same party. The VR player can grab, move, and interact with other players to help or hurt or hinder them depending on the game mode. After starting a room, players can easily connect using their laptops (now) and phones (soon) by simply inputting a room code. After that, the only limits are your imagination!

Here are some early game modes we've been experimenting with and planning:

1. Sharks and Minnows - Party players race back and forth across dangerous territories, doing their best to avoid the looming threat during their crossing. The VR player does their best to pick off tiny prey, snatching them straight off of the racecourse. With each crossing, the pack thins and the course grows.
2. Art Heist - This is it: the big job. The Museum of Mediocre Art is hosting the grand opening of its new exhibit tomorrow, and their guard is down in the chaos of their preparations. Party players must slip in through the hustle and bustle and each steal their own randomly-assigned art piece, all while evading the watchful eye of the night guard. The giant VR player watches the museum from above, doing their best to keep track of all of its treasures.
3. Prop Hunt - The classic. Party players must disguise themselves as furniture and everyday objects, doing their best to blend into their surroundings and fool the VR player. Periodically these players must scramble, being forced to change objects or randomly assigned new ones that they must attempt to blend in with. Upon discovering a rogue object, the VR player can scan and dispose of party players to win, or lose if they can't find them all in time.

...and so much more! The above games are mostly designed to be played on a table or in a dollhouse-style room, where the massive VR player can easily interact with rooms full of much smaller partygoers. There are many other models that would work well for this format - they're just waiting to be discovered!

![](/img/chaoscolleagues2.png)

## How we built it

We built this in Unity, using Teleportal for multiplayer connectivity and VRTK for interactions between virtual reality and the non-VR players. All custom scripting is in C#, and most assets are free from the Unity Asset Store. We used an Oculus Rift during the development, but the final product runs on all SteamVR-supported devices.

## Challenges we ran into

This was our first time using Unity, and we didn't exactly start simple. Integrating both multiplayer connectivity and virtual reality take significant effort, but we did our research and were lucky to find the frameworks we needed to far exceed our incoming expectations (including a HackGT sponsor, Teleportal!). The biggest problems we faced came at the intersection of the two: after much effort we had multiplayer working and VR working independently, and we had to troubleshoot many of the same problems again as soon as we put them together. We tackled this by splitting up - by the end, each of us had chosen a topic to focus our effort towards, and each of us knew the full path to debugging our own subset of the core services we rely on. Put together, we could progress efficiently and effectively throughout.

## Accomplishments that we're proud of

We knew this project would not be without challenges, but we ended up achieving significantly more than we set out to accomplish. Our first goal for this project, which we thought might be ambitious, was a tech demo where party players could run around in a world overseen by a player in VR. We achieved this within the first 12 hours, with newfound time to start building out interaction mechanics and game modes. We even fit in time to sleep in the middle! We're really proud of the progress we made during these 36 hours, and we hope you're as excited to see what we've made as we are.

## What we learned

We learned a ton over the course of this hackathon, going from Unity basics to combining multiplayer and VR within a day. Beyond technical lessons, we gained insight into the broader field of game development, pulling back the curtain to see what the inside of a game really looks like. We also learned a lot about collaboration - though we knew Git coming in, using it with Unity presents far greater challenges than with normal code. As a result, we built out a cleaner codebase and effectively collaborated and delegated to avoid significant conflicts.

## What's next for Chaos Colleagues

The future is bright for Chaos Colleagues! We came into HackGT with the goal of building a foundation that we could continue to expand on into the future, and we think that we came away with that and more. We're planning on elaborating on what we've made today with full, playable game modes that can be joined from players on both laptops and mobile. We see ourselves bundling these games a la Jackbox for a bundled release on Steam, or even potentially releasing and building out this platform for all to use in the open-source community. We're not totally sure about this future yet, so, unfortunately, we're leaving the repository private for now. That being said, we're happy to keep you updated on our future progress!

This project was built as part of HackGT 6! You can view our full DevPost submission [here](https://devpost.com/software/chaos-colleagues).
