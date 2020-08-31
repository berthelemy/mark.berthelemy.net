---
title: Mobile content delivery
author: Wyver Solutions Admin
excerpt: 'In this Five Minute Briefing, we explore the world of mobile content delivery, and assess a number of options including: mobile websites, PDF, eBooks and native apps.'
layout: post
permalink: /2013/01/02/mobile-content-delivery/
categories:
  - Content Management
  - Five minute briefing
  - Mobile
---
You&#8217;ve decided that there&#8217;s a valid business case for getting your organisation&#8217;s training content onto your employees&#8217; or customers&#8217; mobile devices &#8211; whether tablets or smaller.

There are a number of ways you could approach this:

  1. via a website, formatted for mobile viewing
  2. as a downloadable pdf
  3. as an ebook
  4. as a native app

Much depends on where you&#8217;re starting from (eg. do you have existing materials you want to push out), what your plans are (eg. will you be wanting to keep these materials up-to-date), and how much you will be deploying (eg. will this be a one-off, or part of a major publishing operation).

## Via a website

<div id="attachment_534" style="width: 210px" class="wp-caption alignleft">
  <img class="size-full wp-image-534" alt="Aside magazine cover" src="http://www.wyversolutions.co.uk/cms/wp-content/uploads/2013/01/01-web-screens.jpg" width="200" height="261" />
  
  <p class="wp-caption-text">
    Aside HTML5 magazine
  </p>
</div>

These days, it&#8217;s common for websites to be designed so that they adapt automatically for various sized devices and screen formats. The key phrase to look out for is &#8220;[Responsive Web Design][1]&#8221; which includes a range of design and programming techniques that allow one website to be used on multiple devices.

The key thing to remember, is that, unless the site has been programmed to save all the content to the device, your users will need to be online to view the content.

The other thing to think about is whether you want payment for access to the content. If you do, then you&#8217;ll need to build some sort of back-end system that has a user management and authentication process. That&#8217;s not at all trivial.

If you don&#8217;t want payment, then you can put web-apps on the open internet. For a great example of what&#8217;s possible, see: <http://www.asidemag.com/> &#8211; best viewed on an iPad.

### Advantages

  * Able to be easily updated
  * Can be built on a normal content management system (eg. WordPress), or hand-coded
  * Built on HTML5, CSS and Javascript &#8211; so there are lots of people with the required skills
  * Using &#8220;responsive design&#8221; principles you will have a site that will work across multiple devices types and screen sizes
  * One central copy of the content that&#8217;s always up-to-date for all users
  * Able to use multi-media and collaborative features of the web
  * Searchable &#8211; if a search engine is built into the website

### Disadvantages

  * Very difficult to make the content available offline
  * Requires an internet connection to be used
  * Requires an authentication and user management layer if access needs to be controlled
  * Styling can become complex if multiple device types require access
  * Users cannot annotate content

## As a downloadable pdf

PDF files are probably the easiest way to distribute content that is purely static (ie. no animations) text and graphics. On an iPad you can save them into your iBooks collection. They can be read offline; are searchable; easy to browse and can contain internal and external hyperlinks.

They&#8217;re also really easy to deploy; either as a download, or attached to an email.

Creating them can be as simple, or as complex as you wish. At its simplest, you can print to a pdf from any application that allows printing, including Word, Powerpoint, Keynote etc. Or you can do high-end work using desktop-publishing software in combination with tools like [Adobe Acrobat][2].

The downside with a pdf, at least with the default iPad reader, is that you can&#8217;t use any of iBook&#8217;s note-taking, highlighting or dictionary functions. Also, the only way to enlarge text is to zoom in on the pages &#8211; as opposed to eBooks which reflow text when you enlarge it.

### Advantages

  * Access easily controllable
  * Easy to create and deploy &#8211; ubiquitous format
  * Users may be able to annotate documents (depending on their software)
  * Able to embed links, table of contents etc
  * Simple search interface
  * Easy to deploy existing materials

### Disadvantages

  * Does not reformat well for different sized devices
  * Difficult to embed multimedia
  * Impossible to update automatically with new versions

## As an ebook

eBooks are as simple as PDF&#8217;s to deploy. They have a couple of advantages over pdf&#8217;s though:

  * Ability to [incorporate DRM][3]
  * Able to use a wider range of functions than is available in the PDF reader &#8211; eg. notes, copy, highlighting, change text size, change font.

On the DRM front, it&#8217;s worth noting that O&#8217;Reilly (one of the world&#8217;s largest technical publishers) does not use DRM on its eBooks, yet has still seen [massive growth on sales of eBooks][4].

eBooks are not as easy to create as PDF&#8217;s. However they are not difficult, if you have a reasonable understanding of HTML and CSS.

eBooks have a standard format, known as [ePub][5]. An ePub file is basically a zip file but with a .epub extension to the filename. If you rename the file so it has a .zip extension, you&#8217;ll be able to unzip it and take a look inside, where you&#8217;ll find:

  * A set of html or xhtml pages &#8211; these are the pages of your book. Each page is completely separate, although you can have links between them. The eBook software will handle creating the table of contents
  * Any associated CSS files and images, often inside sub-folders
  * A couple of XML files that contain: 1) A list of all the files in the eBook, and 2) the table of contents

You can be quite creative with eBooks, as shown by the [ePub Zen Garden][6] site, but you don&#8217;t have total control of the layout, particularly where images are concerned, as the eBook software will shift things around to get the best fit on the page.

There are four main (free) tools around to help you create ePub files:

  * [OpenOffice Writer][7], with the [Writer2epub][8] extension, is a perfect starting point
  * [Calibre][9] &#8211; which is an eBook management programme, can also create eBooks from other formats
  * [Sigil][10] &#8211; which describes itself as a WYSIWYG eBook editor
  * If you&#8217;re only authoring for iPad, then look at [iBooks Author][11] &#8211; which can produce beautiful ebooks which take full advantage of the iPad&#8217;s capabilities.

If your starting point is a Word doc or similar, and the pages are quite simple, then look at OpenOffice Writer. As long as your doc is nicely formatted (using styles) then the Writer2epub extension should have no problem turning it into an ePub file which can go straight into your eBook reader.

You&#8217;ll have limited control over the output, but it&#8217;s a simple process.

Once you&#8217;ve got the basic set of files, then Sigil can help you edit them, and tweak a lot of the formatting.

It&#8217;s best to keep eBooks as simple as possible, because not all eBook readers will support every HTML and CSS element. The more complex you make it, eg. with embedded media and imported CSS, the more testing you&#8217;re going to have to do on your target devices and reader applications.

### Advantages

  * Easy to deploy to multiple device platforms
  * Automatic reformatting to fit different sized devices
  * Possible to embed multimedia (for certain devices)
  * Possible to update with new versions
  * Takes advantages of eBook functionality on the device &#8211; eg. font-resizing, notes, bookmarks, search
  * Access easily controllable

### Disadvantages

  * Requires new production processes to be adopted
  * Requires designers to use semantic styles (in Word or HTML) rigorously
  * Difficult to convert existing materials if they are not already well structured (with semantic tags or styles)
  * Varying levels of support for multi-media on different devices

## As a native app

By pure native application, I mean one that is crafted using the native coding system required by the device. You have a number of ways to build the app:

  1. Handcode using Apple&#8217;s Xcode or a similar development environment for Android, Blackberry or Windows 8 &#8211; but this is not for the faint-hearted!
  2. Use an online tool like [Buzztouch][12] or MIT&#8217;s [App Inventor][13] &#8211; which provide a building-block approach to app building. Buzztouch is multi-platform, whilst App Inventor is Android only. They help you to create the code, and then allow you to download it to tweak offline and then deploy.
  3. Use a high end toolset like the [Adobe Digital Publishing Suite][14] to build highly interactive, content-based apps, like the [Guardian iPad Edition][15] &#8211; which certainly is extremely good-looking, and highly usable &#8211; but very expensive to produce unless that&#8217;s all you do&#8230;

The alternative to learning native code is to build your content using HTML, CSS &amp;Javascript &#8211; just like a website &#8211; and then package it in such a way so it can be deployed as an app.

Building the content then becomes the easy bit (as long as you follow good design practice, often using grid-based CSS which can adapt to the available screen size, eg. [Less Framework][16], [Frameless Grid][17], or [Magazine Grid][18]). You can even add a lot of interactivity using Javascript such as the [Sencha Touch framework][19] or [JQuery mobile][20].

You then need to wrap it in some code which the mobile device will recognise as pure app code.

This has already been done for you.

[PhoneGap][21] lets you deploy to multiple platforms, and lets developers make use of the specific features of those platforms, eg. accelerometers or GPS. You will need to know a little bit about your target platform&#8217;s native code to get the best out of PhoneGap.

Alternatively, if you&#8217;re using iOS, and you&#8217;re just deploying content, then look at the [Baker eBook Framework][22]. It&#8217;s similar to ePub, in that you create all your content using multiple html files in a single folder. But the Baker Framework then provides the Objective-C code which transforms the pages into apps that can be sold through the App Store, with built-in navigation and page turn effects.

The [Laker Compendium][23] takes things to the next stage, by combing the Less Framework (for design), the Baker Framework V2 (for deployment), [JQuery][20] (for interactions like double-taps and swipes), and [JPlayer][24] (for playing rich media). It really is very simple to use, and quite beautiful to work with. It&#8217;s a great way of creating magazine-type apps. But it does rely on you having an Apple Developer Account if you want to actually have people using it.

### Advantages

  * Can take full advantage of the mobile device&#8217;s capabilities
  * Able to take advantage of deployment options offered by device OS &#8211; especially with regard to automatic updates
  * Easy to control access

### Disadvantages

  * Difficult to create &#8211; requires specialist knowledge
  * Difficult to deploy across multiple platforms

## Content creation services

The final option for creating content, particularly when it&#8217;s geared around learning, is to use an existing service that already has an approved app in the App Store. Examples include [Xyleme&#8217;s Pastiche][25], [Epic&#8217;s GoMo][26], and [Upside Learning&#8217;s Upside2Go][27].

All of these offer tools to help you create content, quizzes and other interactions, and then to deploy them through an existing app.

Although these services provide a lot of capability, they do also limit what you can do. You&#8217;ll end up with quite a templated approach, which may become frustrating if your target audience develops faster than the service provider &#8211; a situation that is increasingly common with the rapid pace of technology adoption.

## Additional resources

For a really good introduction to ePub files, and how to build them by hand, look at <http://www.jedisaber.com/eBooks/>

 [1]: http://en.wikipedia.org/wiki/Responsive_web_design
 [2]: http://www.adobe.com/products/acrobat.html
 [3]: http://en.wikipedia.org/wiki/Digital_rights_management#E-books
 [4]: http://radar.oreilly.com/2010/01/2009-oreilly-ebook-revenue-up-104-percent.html
 [5]: http://en.wikipedia.org/wiki/EPUB
 [6]: http://epubzengarden.com/
 [7]: http://www.openoffice.org/
 [8]: http://extensions.openoffice.org/en/project/Writer2ePub
 [9]: http://calibre-ebook.com/
 [10]: http://code.google.com/p/sigil/
 [11]: http://www.apple.com/ibooks-author/
 [12]: http://www.buzztouch.com/
 [13]: http://appinventor.mit.edu/
 [14]: http://www.adobe.com/products/digitalpublishingsuite/
 [15]: http://www.guardian.co.uk/mobile/ipad/guardian-ipad-edition
 [16]: http://lessframework.com/
 [17]: http://framelessgrid.com/
 [18]: http://www.asidemag.com/grid/
 [19]: http://www.sencha.com/products/touch/
 [20]: http://jquerymobile.com/
 [21]: http://phonegap.com/
 [22]: http://bakerframework.com/
 [23]: http://www.lakercompendium.com/
 [24]: http://jplayer.org/
 [25]: http://www.xyleme.com/product/pastiche
 [26]: http://www.gomolearning.com/site/
 [27]: http://www.upsidelearning.com/mobile-learning-solution-upside2go.asp