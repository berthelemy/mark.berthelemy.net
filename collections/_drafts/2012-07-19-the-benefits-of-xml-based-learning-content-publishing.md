---
title: The benefits of XML-based learning content publishing
author: Wyver Solutions Admin
excerpt: Following a question on a learning technology mailing list, we discuss the merits of preparing resources in XML compared to other formats (eg. PDF or HTML5).
layout: post
permalink: /2012/07/19/the-benefits-of-xml-based-learning-content-publishing/
categories:
  - Analysis and design
  - Content Management
---
<img class="alignright size-full wp-image-397" title="xml_logo" src="http://www.wyversolutions.co.uk/cms/wp-content/uploads/2012/07/xml_logo.gif" alt="XML logo" width="140" height="120" />A recent question on the <a href="http://www.alt.ac.uk/" target="_blank">ALT</a> mailing list asked:

> What are the merits of preparing resources in XML, compared with other formats? What would be the merits of XML compared with, say, uploaded PDF versions of Word documents, or HTML 5?

The key benefit of XML-based publishing can be summed up in one word: **reuse**

You can see it, in a basic way, in the open-source elearning development tool <a href="http://exelearning.org/wiki" target="_blank">Exe</a>. There you have a single XML source, which is then used to create a variety of output types just by changing the XSLT stylesheet in use.

Moving on to a different level of sophistication brings in standards like <a href="http://www.docbook.org/" target="_blank">DocBook</a>, which have pre-written XSLT&#8217;s which allow a single XML file to create HTML (of various layouts), Javahelp, XSL-FO (for processing into print), ePub and others.

That&#8217;s reuse in one sense, but there&#8217;s also reuse in that XML allows you to break the content up into chunks which can then be reused in different ways for different scenarios.

So you could have some content that is tagged for just students, some that is tagged for just lecturers, and some that is both. Using XSLT, you could then create a lecturer guide and a student guide from a single source.

Similarly, you could have a unit that gave a great explanation of a particular topic. That unit may be needed across multiple courses. There&#8217;s no point re-writing it. This is a major component of Learning Object theory as described by <a href="http://davidwiley.org/" target="_blank">David Wiley</a> in <a href="http://www.reusability.org/read/" target="_blank">The Instructional Use of Learning Objects</a>. See also: <a href="http://www.jot.fm/issues/issue_2010_11/article3.pdf" target="_blank">Improving Learning Object Reuse Through Object Oriented Design: A Theory of Learning Objects</a> (pdf).

Learning Object Theory has some critics, mainly around the Reusability Paradox:

> *The paradox claims that the more context laden a given educational resource is, the more effectively it teaches but the more difficult it is to reuse in a novel context. Conversely, the less context laden a given educational resource is, the less effectively it teaches but the easier it is to reuse in novel contexts. So with learning objects, you had a choice &#8211; a great resource that is essentially impossible to reuse, or a really poor resource that you can easily reuse.*
> 
> <p style="text-align: right;">
>   <a href="http://change.mooc.ca/post/237" target="_blank">Wiley on Learning Objects in Change MOOC</a>
> </p>

<p style="text-align: left;">
  But this doesn&#8217;t mean that we shouldn&#8217;t try to reuse where possible. It&#8217;s just that there will need to be compromises made along the way.
</p>

<p style="text-align: left;">
  A sophisticated XML content management system will be able to reuse chunks of content in multiple places by just creating a &#8220;link&#8221; to it.
</p>

You can create the XML in a standalone editor like <a href="http://www.syntext.com/products/serna-free/" target="_blank">Serna</a> (free), which is fine if there&#8217;s just one person creating and publishing. It would be a similar scenario to someone creating content in Exe.

But, if you&#8217;re wanting to put in a publishing workflow, which allows for a modular reuse of content, multiple authors and editors, and multiple output types, then think about having a learning content management system. <a href="http://www.nottingham.ac.uk/xerte/toolkits.htm" target="_blank">Xerte Toolkits</a> is an open-source example.

To get a picture of what&#8217;s possible, take a look at this video interview, where <a href="http://jaycross.com/" target="_blank">Jay Cross</a> talks to Mark Hellinger, CEO of one of the leaders in the LCMS market, <a href="http://www.xyleme.com/" target="_blank">Xyleme</a>:

http://www.youtube.com/watch?v=DEjFtJ_AmUg