---
title: "Red, Green, Remember: A TDD Approach to Agent Evolution"
date: 2026-04-12T11:39:13+01:00
tags: [ "AI Agents"]
---
When you're setting up a new project and want to use a coding agent, it can be tempting to try and craft the ultimate agent file or system prompt. You might try to think through every edge case, including everything you want it to do and everything you don't, in an attempt to make it work perfectly the first time.

<!--more-->

However, in reality, once you start using the agent, you may find that things don't quite work as expected, requiring you to step in and correct it. If you follow this process without a strategy, you may end up with a bloated prompt containing redundant instructions that unnecessarily fill up your context window.

What I prefer to do instead is start with a very minimal prompt and simply use the agent as you normally would day-to-day. Let the agent fail. When it does fail, correct it based on the specific outcome you need. Once you achieve the result you expect, you can then ask the agent to "remember this for next time" or simply update its prompt accordingly. This allows the agent to learn over time, evolving alongside your natural workflow and your codebase.

I see this as being very similar to Test-Driven Development (TDD). In TDD, you start with a test, you expect it to fail, and you let that failing test drive the direction of the software. You don't start by deciding exactly how the software should work; the test drives the development. In this case, the cycle of failure and correction drives the evolution of the agent. This allows the prompt to become more robust because the instructions are derived from actual failures and real-world usage, rather than just theoretical use cases.

Taking this further with organizational agents, using tools such as Dust for example, you can leverage the feedback loops built into these platforms. When you publish these agents, they often allow you to collect feedback. It is incredibly valuable to encourage people to provide that feedback and then use it to improve the agent over time. Again, rather than trying to come up with the perfect agent on day one, get people actually using it, as you don't know how they'll use it until they do. By addressing their specific use cases, you ensure the agent is never truly "finished" and is instead constantly evolving.

The best approach is to abandon the idea of the perfect agent prompt and instead embrace the fact that the agent isn't going to operate exactly the way you want at the start, guiding and training it over time until you realise that useful agents aren't really built, they are grown.