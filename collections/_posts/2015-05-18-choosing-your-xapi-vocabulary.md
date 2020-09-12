---
title: Choosing your xAPI vocabulary
author: Wyver Solutions Admin
excerpt: At first glance, the xAPI specification is deceptively simple. But the vocabulary you choose to use within your statements will have a massive impact on the useful information you can pull out of your Learning Record Store reports.
layout: post
tags:
  - Technology
  - xAPI
thumb: /assets/xapi-logo.png
banner: /assets/xapi-bgd.png
alt: xAPI logo
img-credit: Wyver Solutions, ADL
---
At first glance, the <a href="https://github.com/adlnet/xAPI-Spec/blob/master/xAPI.md" target="_blank">xAPI specification</a> is deceptively simple. It allows your systems (the Activity Providers) to send data (the Statement) to a central repository (the Learning Record Store) as a simple sentence:

<p class="panel">
  Someone Did Something of a certain Type
</p>

Or, in xAPI terms:

<p class="panel">
  {<a href="https://github.com/adlnet/xAPI-Spec/blob/master/xAPI.md#actor" target="_blank">Actor</a>} {<a href="https://github.com/adlnet/xAPI-Spec/blob/master/xAPI.md#verb" target="_blank">Verb</a>} {<a href="https://github.com/adlnet/xAPI-Spec/blob/master/xAPI.md#object" target="_blank">Object</a>, Type}
</p>

Sounds easy?

It is, until you start to think how and where this data is going to be used.

The main reason for collecting data in this way is to be able to analyse it for trends, and to transfer learner records between systems.

Both purposes require data that means the same all the time and often in a variety of contexts.

Therein lies the problem.

xAPI comes with no predefined data. It’s just a structure that you can put your own data into. It’s like having a new kitchen with cupboards, drawers and compartments. What you put in them is up to you. That’s fine as long as you’re only working in your own kitchen. Move to someone else’s kitchen and you’ll often struggle at first to find things, even if it’s the same layout. And woe betide anyone who tries to analyse kitchen usage based on multiple kitchens. It’ll be hard to get any meaningful information from the data.

Even if you are not going to be sharing data, you’ll still need to retain some level of internal consistency, so that multiple activity providers use the same vocabulary to mean the same thing.

As an example of where things might go wrong, let’s consider two content management systems (CMS) which send xAPI statements when someone accesses a content item.

CMS 1 sends the statement:

<p class="panel">
  {Actor} {experienced} {content item, Type = article}
</p>

CMS 2 sends the statement:

<p class="panel">
  {Actor} {read} {content item, Type = webpage}
</p>

Any analysis of the data will need to remember that the verbs {experienced} and {read} from these two systems mean the same thing, as do the activity types {article} and {webpage}.

Or another example:

A CPD management system has a function where CPD awards are made following an audit process. So it might send the statement:

<p class="panel">
  {Actor} {audited} {CPD record}
</p>

But let’s put that system in an accountancy context, where they might well use the same process for collecting CPD awards. But, in accountancy, the verb {audited} means something subtly different. Again, any analysis of the data will need to take into account the context where the verb was used – possibly an unnecessary complication?

It’s not unusual for specifications like xAPI to be designed so that they are totally independent of any context. In these cases, it is up to the user communities to create domain-specific ways of using the specification; keeping the domains (the areas of use) as broad as possible so to retain as much interoperability as possible.

The xAPI community recognised these issues very early on and started to collect together sets of reusable vocabulary – particularly <a href="https://registry.tincanapi.com/#home/verbs" target="_blank">verbs</a>, <a href="https://registry.tincanapi.com/#home/activityTypes" target="_blank">activity types</a> and <a href="https://registry.tincanapi.com/#home/extensions" target="_blank">extensions</a> (data structures that don’t have any existing location in the xAPI spec)

These live in a repository called the <a href="https://registry.tincanapi.com" target="_blank">Registry</a>, currently hosted and maintained by <a href="http://rusticisoftware.com/" target="_blank">Rustici</a>.

However, you’ll still need to be careful. We’re in the early stages of xAPI, so the Registry is a little like an early edition of the Oxford English Dictionary. Many of the terms entered there in the early days need some refinement so I can be certain what they mean and how they are to be used. Some definitions even refer to data structures that don’t exist in xAPI because they’ve been ported over wholesale from other projects (particularly those from the <a href="http://activitystrea.ms/" target="_blank">ActivityStream</a> project).

Even so, whenever you’re starting out on a new xAPI implementation, especially one where you control the vocabulary, I would advise that you use the Registry as your initial source for terms, subject to the warning above. This will help to ensure reusability of your data. Only start to define your own verbs, activity types and extensions when you really have to move beyond those already defined. As soon you define something new and different, then your data, by definition will not be reusable outside of your own systems.

If you do define new vocabulary, and it may apply to others outside your organisation, then submit it to the Registry. To get maximum reuse you’ll need to be really clear and unambiguous on the definition, and ideally have a unique URL for each term that you can point people to for more information.

One other consideration to make when deciding on your vocabulary is your required level of “granularity”. This is the amount by which your data can be split up into segments.

For example, do your analytics focus on just the actors and the objects? If so, you might be happy to just use the verb {experienced} for the majority of your statements about what a person did. But you might want more detail about their activity, in which case perhaps you’d use the verbs {watched}, {read}, {listened}, {attended} etc.

Or, perhaps you’re doing an analysis of activity on Twitter. In this case, you’d probably want more than just the standard verb {tweeted}. You might want to use {retweeted}, {replied}, {mentioned} etc. This would give you much more detailed information about the activities.

As always, when designing your xAPI statements, I would advise to:

  1. Understand what types of decisions you will want to make based on the data (eg. To further develop or promote particular types of activity, or to target particular geographical regions).
  2. Understand what information you will need in order to make those decisions (eg. Which activities appear to result in increased performance, or which regions are performing less well).
  3. Understand what data will be needed to generate that information. Note that you may require some knowledge of statistics to know whether the data is actually saying what you think it is!
  4. Decide on the vocabulary you will use to generate that data from across your activity providers.
