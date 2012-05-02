
/* gettext library */

var catalog = new Array();

function pluralidx(n) {
  var v=(n != 1);
  if (typeof(v) == 'boolean') {
    return v ? 1 : 0;
  } else {
    return v;
  }
}
catalog[' seconds'] = ' seconds';
catalog['%s%'] = '%s%';
catalog['1m'] = '1m';
catalog['1y'] = '1y';
catalog['3m'] = '3m';
catalog['6m'] = '6m';
catalog['A document with this slug already exists in this locale.'] = 'A document with this slug already exists in this locale.';
catalog['A document with this title already exists in this locale.'] = 'A document with this title already exists in this locale.';
catalog['Add Rule'] = 'Add Rule';
catalog['All'] = 'All';
catalog['Answer Votes: % Helpful'] = 'Answer Votes: % Helpful';
catalog['April'] = 'April';
catalog['Article Votes: % Helpful'] = 'Article Votes: % Helpful';
catalog['August'] = 'August';
catalog['Bold'] = 'Bold';
catalog['Bulleted List'] = 'Bulleted List';
catalog['Bulleted list item'] = 'Bulleted list item';
catalog['Cancel'] = 'Cancel';
catalog['Choose revisions to compare'] = 'Choose revisions to compare';
catalog['Could not upload file. Please try again later.'] = 'Could not upload file. Please try again later.';
catalog['Current Percent of Helpfulness'] = 'Current Percent of Helpfulness';
catalog['Daily Unique Visitors'] = 'Daily Unique Visitors';
catalog['Dec'] = 'Dec';
catalog['December'] = 'December';
catalog['Delete this image'] = 'Delete this image';
catalog['Documents'] = 'Documents';
catalog['Enter the URL of the external link'] = 'Enter the URL of the external link';
catalog['Enter the name of the article'] = 'Enter the name of the article';
catalog['Error deleting image'] = 'Error deleting image';
catalog['Error uploading image'] = 'Error uploading image';
catalog['Estimated wait: '] = 'Estimated wait: ';
catalog['External link:'] = 'External link:';
catalog['Feb'] = 'Feb';
catalog['February'] = 'February';
catalog['Friday'] = 'Friday';
catalog['From'] = 'From';
catalog['Heading 1'] = 'Heading 1';
catalog['Heading 2'] = 'Heading 2';
catalog['Heading 3'] = 'Heading 3';
catalog['Helpers online: '] = 'Helpers online: ';
catalog['Helpfulness Votes'] = 'Helpfulness Votes';
catalog['Image Attachment'] = 'Image Attachment';
catalog['Images'] = 'Images';
catalog['Insert Link'] = 'Insert Link';
catalog['Insert Media'] = 'Insert Media';
catalog['Insert a link...'] = 'Insert a link...';
catalog['Insert media...'] = 'Insert media...';
catalog['Invalid image. Please select a valid image file.'] = 'Invalid image. Please select a valid image file.';
catalog['Invalid tag entered: %s'] = 'Invalid tag entered: %s';
catalog['Italic'] = 'Italic';
catalog['January'] = 'January';
catalog['July'] = 'July';
catalog['June'] = 'June';
catalog['Knowledge Base Article'] = 'Knowledge Base Article';
catalog['L10n Coverage'] = 'L10n Coverage';
catalog['Less than 2 minutes.'] = 'Less than 2 minutes.';
catalog['Link target:'] = 'Link target:';
catalog['Link text:'] = 'Link text:';
catalog['Live Chat is currently closed.'] = 'Live Chat is currently closed.';
catalog['March'] = 'March';
catalog['May'] = 'May';
catalog['Monday'] = 'Monday';
catalog['More than 20 minutes.'] = 'More than 20 minutes.';
catalog['No sections found'] = 'No sections found';
catalog['No tags entered.'] = 'No tags entered.';
catalog['No votes data'] = 'No votes data';
catalog['No'] = 'No';
catalog['November'] = 'November';
catalog['Numbered List'] = 'Numbered List';
catalog['Numbered list item'] = 'Numbered list item';
catalog['October'] = 'October';
catalog['Oops, there was an error.'] = 'Oops, there was an error.';
catalog['Our volunteers are busy helping other users.'] = 'Our volunteers are busy helping other users.';
catalog['Our volunteers are ready to help.'] = 'Our volunteers are ready to help.';
catalog['Percent Change in Helpfulness'] = 'Percent Change in Helpfulness';
catalog['Percent'] = 'Percent';
catalog['Please check you are logged in, and try again.'] = 'Please check you are logged in, and try again.';
catalog['Please select an image or video to insert.'] = 'Please select an image or video to insert.';
catalog['Query took: '] = 'Query took: ';
catalog['Reply...'] = 'Reply...';
catalog['Report this post'] = 'Report this post';
catalog['Reset zoom level 1:1'] = 'Reset zoom level 1:1';
catalog['Reset zoom'] = 'Reset zoom';
catalog['Saturday'] = 'Saturday';
catalog['Search Clickthrough Rate'] = 'Search Clickthrough Rate';
catalog['Search Gallery'] = 'Search Gallery';
catalog['Search for a user...'] = 'Search for a user...';
catalog['Sep'] = 'Sep';
catalog['September'] = 'September';
catalog['Show content only for specific versions of Firefox or operating systems.'] = 'Show content only for specific versions of Firefox or operating systems.';
catalog['Show for...'] = 'Show for...';
catalog['Show:'] = 'Show:';
catalog['Solved'] = 'Solved';
catalog['Start your Live Chat session.'] = 'Start your Live Chat session.';
catalog['Sunday'] = 'Sunday';
catalog['Support article:'] = 'Support article:';
catalog['Table of Contents'] = 'Table of Contents';
catalog['The queue is full.'] = 'The queue is full.';
catalog['There was an error checking the queue.'] = 'There was an error checking the queue.';
catalog['There was an error generating the preview.'] = 'There was an error generating the preview.';
catalog['Thursday'] = 'Thursday';
catalog['To'] = 'To';
catalog['Toggle Diff'] = 'Toggle Diff';
catalog['Tuesday'] = 'Tuesday';
catalog['Upload Media'] = 'Upload Media';
catalog['Upload cancelled. Please select an image file.'] = 'Upload cancelled. Please select an image file.';
catalog['Uploading "%s"...'] = 'Uploading "%s"...';
catalog['Users waiting: '] = 'Users waiting: ';
catalog['Videos'] = 'Videos';
catalog['Visitors'] = 'Visitors';
catalog['We\'re closed.'] = 'We\'re closed.';
catalog['We\'re open!'] = 'We\'re open!';
catalog['Wednesday'] = 'Wednesday';
catalog['YTD'] = 'YTD';
catalog['Yes'] = 'Yes';
catalog['You and 1 other replied'] = 'You and 1 other replied';
catalog['You are not watching this thread'] = 'You are not watching this thread';
catalog['You are watching this thread'] = 'You are watching this thread';
catalog['You can try starting a chat session.'] = 'You can try starting a chat session.';
catalog['You replied'] = 'You replied';
catalog['Zoom'] = 'Zoom';
catalog['[missing header]'] = '[missing header]';
catalog['bold text'] = 'bold text';
catalog['en-US KB'] = 'en-US KB';
catalog['italic text'] = 'italic text';
catalog['link text'] = 'link text';
catalog['media'] = 'media';
catalog['non en-US KB'] = 'non en-US KB';


function gettext(msgid) {
  var value = catalog[msgid];
  if (typeof(value) == 'undefined') {
    return msgid;
  } else {
    return (typeof(value) == 'string') ? value : value[0];
  }
}

function ngettext(singular, plural, count) {
  value = catalog[singular];
  if (typeof(value) == 'undefined') {
    return (count == 1) ? singular : plural;
  } else {
    return value[pluralidx(count)];
  }
}

function gettext_noop(msgid) { return msgid; }

function pgettext(context, msgid) {
  var value = gettext(context + '' + msgid);
  if (value.indexOf('') != -1) {
    value = msgid;
  }
  return value;
}

function npgettext(context, singular, plural, count) {
  var value = ngettext(context + '' + singular, context + '' + plural, count);
  if (value.indexOf('') != -1) {
    value = ngettext(singular, plural, count);
  }
  return value;
}

function interpolate(fmt, obj, named) {
  if (named) {
    return fmt.replace(/%\(\w+\)s/g, function(match){return String(obj[match.slice(2,-2)])});
  } else {
    return fmt.replace(/%s/g, function(match){return String(obj.shift())});
  }
}

/* formatting library */

var formats = new Array();

formats['DATETIME_FORMAT'] = 'N j, Y, P';
formats['DATE_FORMAT'] = 'N j, Y';
formats['DECIMAL_SEPARATOR'] = '.';
formats['MONTH_DAY_FORMAT'] = 'F j';
formats['NUMBER_GROUPING'] = '3';
formats['TIME_FORMAT'] = 'P';
formats['FIRST_DAY_OF_WEEK'] = '0';
formats['TIME_INPUT_FORMATS'] = ['%H:%M:%S', '%H:%M'];
formats['THOUSAND_SEPARATOR'] = ',';
formats['DATE_INPUT_FORMATS'] = ['%Y-%m-%d', '%m/%d/%Y', '%m/%d/%y'];
formats['YEAR_MONTH_FORMAT'] = 'F Y';
formats['SHORT_DATE_FORMAT'] = 'm/d/Y';
formats['SHORT_DATETIME_FORMAT'] = 'm/d/Y P';
formats['DATETIME_INPUT_FORMATS'] = ['%Y-%m-%d %H:%M:%S', '%Y-%m-%d %H:%M', '%Y-%m-%d', '%m/%d/%Y %H:%M:%S', '%m/%d/%Y %H:%M', '%m/%d/%Y', '%m/%d/%y %H:%M:%S', '%m/%d/%y %H:%M', '%m/%d/%y'];

function get_format(format_type) {
    var value = formats[format_type];
    if (typeof(value) == 'undefined') {
      return msgid;
    } else {
      return value;
    }
}
