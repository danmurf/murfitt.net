---
title: "The Pessimistic Software Engineer"
date: 2025-12-23T12:03:02Z
tags: [ "Software Engineering" ]
---
Usually, when we set out to build software, we work from a specification or Product Requirements Document (PRD), which outlines how the software should function from a user's perspective. This focuses us on the horizon of end-user functionality, and from there, we start working backward, filling in the gaps and building a model of how all of the pieces fit together to deliver this functionality. This might involve database reads, writes, API calls, validation, etc. If all of these steps go well, the user gets what they want, and the application meets its goal. But how many opportunities are there for failure along the way? How many known failures could there be, and perhaps more scarily, how many unknown failures could there be waiting to trip us up? The Pessimistic Software Engineer doesn’t just assume things will probably be okay, but actively assumes things will break, in every way possible, at some point in the future.

<!--more-->

The Pessimistic Software Engineer isn’t so much concerned with the badge of honour of having 100% code coverage (although they probably do have a very high level of coverage nonetheless). They instead aim to test and break their software in every way imaginable, to either confirm it works as expected, or fails gracefully while trying. Working on high throughput systems exposes us to the reality that even bugs with a reasonably low probability will likely happen at some point in the not-too-distant future, as the high load forces the system to roll the dice millions of times per day.

Being the Pessimistic Software Engineer doesn’t mean being grumpy and pessimistic about the product. It’s borne from working on software for long enough to know that anything that can go wrong, will eventually go wrong, and designing software to weather the storm and get the best possible outcome even when things don’t follow the happy path.

{{< tweetreply 2003457185712382237 >}}