# JS Bible

JS Bible is a jQuery Bible plugin built by [http://www.jonsuh.com](Jonathan Suh).

Homepage: [http://www.jonsuh.com/jsbible](www.jonsuh.com/jsbible)

## Getting started

This widget uses [Logos Bible Software](http://www.logos.com)'s [Biblia.com Bible API](http://api.biblia.com) service, which requires a unique API for your website, to get the Bible text. You'll need to [register for a free Logos account](https://www.logos.com/register) if you don't have one already. Because this plugin uses Biblia's API service, by using this plugin you are agreeing to [Biblia API's Terms of Service](http://api.biblia.com/docs/Terms_of_Use).

1.  Sign in at [api.biblia.com](http://api.biblia.com/v1/Users/SignIn) with your Logos account.
2.  Register a new application (in this case, your website).
3.  Keep record of your API key.

Don't forget that this plugin requires jQuery.

## Usage

Usage is easy and straight forward.

<pre>$(document).ready(function(){
  $(".jsbible").jsbible({
    api: "your-unique-api-key"
  });
});</pre>

Customizable options are also available.

<pre>$(".jsbible").jsbible({
  api: "apikey",                   // Your unique API key from api.biblia.com
  version: "kjv",                  // Bible versions. Supports: KJV, ASV, AV
  red_letter: true,                // Red letter text
  persistent_chapter: false,       // Chapter number reset on book change
  scrolltop: true,                 // Scroll-to-top button
  scrolltop_text: "Back to Top",   // Text for scroll-to-top button
  scrolltop_speed: 250             // Speed of scroll-to-top animation in milliseconds
});</pre>

## MIT License

Copyright © 2013 Jonathan Suh

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.