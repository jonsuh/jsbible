/*!
 * JS Bible v1.0
 * A jQuery Bible widget for your website
 * http://www.jonsuh.com/jsbible
 * 
 * Copyright (c) 2013 Jonathan Suh
 * Free to use under the MIT license.
 * http://opensource.org/licenses/MIT
 */
(function($) {

  $.jsbible = function(element, options) {

      var defaults = {
          api: "",
          version: "kjv",
          red_letter: true,
          persistent_chapter: false,
          scrolltop: true,
          scrolltop_text: "Back to Top",
          scrolltop_speed: 250
        },
        jsbible = this;

      jsbible.settings = {}

      var $el = $(element),
          el = element,
          bible_books = [
            { name: "Genesis",
              chapters: 50,
              testament: "old" },
            { name: "Exodus",
              chapters: 50,
              testament: "old" },
            { name: "Leviticus",
              chapters: 27,
              testament: "old" },
            { name: "Numbers",
              chapters: 36,
              testament: "old" },
            { name: "Deuteronomy",
              chapters: 34,
              testament: "old" },
            { name: "Joshua",
              chapters: 24,
              testament: "old" },
            { name: "Judges",
              chapters: 21,
              testament: "old" },
            { name: "Ruth",
              chapters: 4,
              testament: "old" } ,
            { name: "1 Samuel",
              chapters: 31,
              testament: "old" },
            { name: "2 Samuel",
              chapters: 24,
              testament: "old" },
            { name: "1 Kings",
              chapters: 22,
              testament: "old" },
            { name: "2 Kings",
              chapters: 25,
              testament: "old" },
            { name: "1 Chronicles",
              chapters: 29,
              testament: "old" },
            { name: "2 Chronicles",
              chapters: 36,
              testament: "old" },
            { name: "Ezra",
              chapters: 10,
              testament: "old" },
            { name: "Nehemiah",
              chapters: 13,
              testament: "old" },
            { name: "Esther",
              chapters: 10,
              testament: "old" },
            { name: "Job",
              chapters: 42,
              testament: "old" },
            { name: "Psalms",
              chapters: 150,
              testament: "old" },
            { name: "Proverbs",
              chapters: 31,
              testament: "old" },
            { name: "Ecclesiastes",
              chapters: 12,
              testament: "old" },
            { name: "Song of Solomon",
              chapters: 8,
              testament: "old" },
            { name: "Isaiah",
              chapters: 66,
              testament: "old" },
            { name: "Jeremiah",
              chapters: 52,
              testament: "old" },
            { name: "Lamentations",
              chapters: 5,
              testament: "old" },
            { name: "Ezekiel",
              chapters: 48,
              testament: "old" },
            { name: "Daniel",
              chapters: 12,
              testament: "old" },
            { name: "Hosea",
              chapters: 14,
              testament: "old" },
            { name: "Joel",
              chapters: 3,
              testament: "old" },
            { name: "Amos",
              chapters: 9,
              testament: "old" },
            { name: "Obadiah",
              chapters: 1,
              testament: "old" },
            { name: "Jonah",
              chapters: 4,
              testament: "old" },
            { name: "Micah",
              chapters: 7,
              testament: "old" },
            { name: "Nahum",
              chapters: 3,
              testament: "old" },
            { name: "Habakkuk",
              chapters: 3,
              testament: "old" },
            { name: "Zephaniah",
              chapters: 3,
              testament: "old" },
            { name: "Haggai",
              chapters: 2,
              testament: "old" },
            { name: "Zechariah",
              chapters: 14,
              testament: "old" },
            { name: "Malachi",
              chapters: 4,
              testament: "old" },
            { name: "Matthew",
              chapters: 28,
              testament: "new" },
            { name: "Mark",
              chapters: 16,
              testament: "new" },
            { name: "Luke",
              chapters: 24,
              testament: "new" },
            { name: "John",
              chapters: 21,
              testament: "new" },
            { name: "Acts",
              chapters: 28,
              testament: "new" },
            { name: "Romans",
              chapters: 16,
              testament: "new" },
            { name: "1 Corinthians",
              chapters: 16,
              testament: "new" },
            { name: "2 Corinthians",
              chapters: 13,
              testament: "new" },
            { name: "Galatians",
              chapters: 6,
              testament: "new" },
            { name: "Ephesians",
              chapters: 6,
              testament: "new" },
            { name: "Philippians",
              chapters: 4,
              testament: "new" },
            { name: "Colossians",
              chapters: 4,
              testament: "new" },
            { name: "1 Thessalonians",
              chapters: 5,
              testament: "new" },
            { name: "2 Thessalonians",
              chapters: 3,
              testament: "new" },
            { name: "1 Timothy",
              chapters: 6,
              testament: "new" },
            { name: "2 Timothy",
              chapters: 4,
              testament: "new" },
            { name: "Titus",
              chapters: 3,
              testament: "new" },
            { name: "Philemon",
              chapters: 1,
              testament: "new" },
            { name: "Hebrews",
              chapters: 13,
              testament: "new" },
            { name: "James",
              chapters: 5,
              testament: "new" },
            { name: "1 Peter",
              chapters: 5,
              testament: "new" },
            { name: "2 Peter",
              chapters: 3,
              testament: "new" },
            { name: "1 John",
              chapters: 5,
              testament: "new" },
            { name: "2 John",
              chapters: 1,
              testament: "new" },
            { name: "3 John",
              chapters: 1,
              testament: "new" },
            { name: "Jude",
              chapters: 1,
              testament: "new" },
            { name: "Revelation",
              chapters: 22,
              testament: "new" }
          ],
          entry;

      bible_books.by_name = {};
      for (var i = 0; i < bible_books.length; ++i) {
        entry = bible_books[i];
        bible_books.by_name[entry.name] = entry;
      };

      jsbible.init = function() {
        jsbible.settings = $.extend({}, defaults, options);

        if (jsbible.settings.api == "") {
          $el.html("API key is required.");
          exit;
        }

        var bible_construct,
            select_tmp,
            options_tmp,
            bible_copyright,
            i;

        bible_construct = $("<div/>", {
          class: "jsbible-select"
        });
        select_tmp = $("<select/>", {
          class: "jsbible-books"
        });
        options_tmp = "";
        for (i = 0; i < bible_books.length; ++i) {
          options_tmp += "<option value=\"" + bible_books[i].name + "\">" + bible_books[i].name + "</option>";
        }
        select_tmp.append(options_tmp);
        select_tmp.bind("change", function(){
          jsbible_get_it(jsbible.settings, $(this));
        });
        bible_construct.append(select_tmp);

        select_tmp = $("<select/>", {
          class: "jsbible-chapters"
        });
        select_tmp.bind("change", function(){
          jsbible_get_it(jsbible.settings, $(this));
        });
        bible_construct.append(select_tmp);

        bible_construct.after($("<div/>", {
          class: "jsbible-text"
        }));

        $el.html(bible_construct);
        jsbible_get_it(jsbible.settings, $el.find(".jsbible-books"));

        if (jsbible.settings.scrolltop == true) {
          var scrolltop = $("<a/>", {
            href: "#jsbible-scrolltop",
            html: jsbible.settings.scrolltop_text,
            class: "jsbible-scrolltop"
          });
          scrolltop.on("click", function(e){
            $("html, body").animate({
              scrollTop: $el.offset().top
            }, jsbible.settings.scrolltop_speed);
            return false;
          });
          $el.append(scrolltop);
        }
        bible_copyright = $("<div/>", {
          class: "jsbible-copyright",
          html: "<a href=\"http://biblia.com/\"><img src=\"http://api.biblia.com/docs/media/PoweredByBiblia.png\" alt=\"Powered by Biblia\" /></a> This site uses the <a href=\"http://biblia.com/\">Biblia</a> web services from <a href=\"http://www.logos.com/\">Logos Bible Software</a>."
        });
        $el.append(bible_copyright);
      }

      var jsbible_get_it = function(settings, obj) {
        if (obj.hasClass("jsbible-books")) {
          var jsbible_book = $el.find(".jsbible-books").val(),
              jsbible_chapters = bible_books.by_name[jsbible_book].chapters,
              jsbible_select = "";
          for (var x = 1; x <= jsbible_chapters; x++) {
            jsbible_select += "<option value=\"" + x + "\"";
            if (settings.persistent_chapter == true) {
              if (x == $el.find(".jsbible-chapters").val()) {
                jsbible_select += " selected=\"selected\"";
              }
            }
            jsbible_select += ">" + x + "</option>";
          }
          $el.find(".jsbible-chapters").html("").append(jsbible_select);
        }

        var jsbible = $el,
            jsbible_book = jsbible.find(".jsbible-books").val(),
            jsbible_chapter = jsbible.find(".jsbible-chapters").val(),
            jsbible_chapters = "",
            jsbible_text = "";
        if (jsbible.find(".jsbible-chapters option").length == 1) {
          jsbible_chapter = "";
        }
        var jsbible_data = {
              "passage": jsbible_book + " " + jsbible_chapter,
              "header": "[FullPassageRef]",
              "eachVerse": "<p><sup>[VerseNum]</sup>[VerseText]</p>",
              "paragraphs": "false",
              "redLetter": settings.red_letter,
              "key": settings.api,
            };
        jsbible_data = $.param(jsbible_data);

        $.ajax({
          url: "http://api.biblia.com/v1/bible/content/" + settings.version + ".html.json?",
          data: jsbible_data,
          cache: true,
          dataType: "jsonp",
          success: function(data){
            $.each(data, function(){
              jsbible_text += data.text;
            });
            jsbible.find(".jsbible-text").html(jsbible_text);
          },
          error: function(e, xhr){
            jsbible.find(".jsbible-text").html("<p>An error occured.</p>");
          }
        });
      }

      jsbible.init();
  }

  $.fn.jsbible = function(options) {
    return this.each(function() {
      if (undefined == $(this).data('jsbible')) {
        var jsbible = new $.jsbible(this, options);
        $(this).data('jsbible', jsbible);
      }
    });
  }

})(jQuery);