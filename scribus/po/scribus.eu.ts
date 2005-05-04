<!DOCTYPE TS><TS>
<context>
    <name></name>
    <message>
        <source>getFontSize([&quot;name&quot;]) -&gt; float

Returns the font size in points for the text frame &quot;name&quot;. If this text
frame has some text selected the value assigned to the first character of
the selection is returned.
If &quot;name&quot; is not given the currently selected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getColorNames() -&gt; list

Returns a list containing the names of all defined colors in the document.
If no document is open, returns a list of the default document colors.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>newDocDialog() -&gt; bool

Displays the &quot;New Document&quot; dialog box. Creates a new document if the user
accepts the settings. Does not create a document if the user presses cancel.
Returns true if a new document was created.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getFillColor([&quot;name&quot;]) -&gt; string

Returns the name of the fill color of the object &quot;name&quot;.
If &quot;name&quot; is not given the currently selected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>moveObject(dx, dy [, &quot;name&quot;])

Moves the object &quot;name&quot; by dx and dy relative to its current position. The
distances are expressed in the current measurement unit of the document (see
UNIT constants). If &quot;name&quot; is not given the currently selected item is used.
If the object &quot;name&quot; belongs to a group, the whole group is moved.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setRedraw(bool)

Disables page redraw when bool = False, otherwise redrawing is enabled.
This change will persist even after the script exits, so make sure to call
setRedraw(True) in a finally: clause at the top level of your script.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>createRect(x, y, width, height, [&quot;name&quot;]) -&gt; string

Creates a new rectangle on the current page and returns its name. The
coordinates are given in the current measurement units of the document
(see UNIT constants). &quot;name&quot; should be a unique identifier for the object
because you need this name to reference that object in future. If &quot;name&quot;
is not given Scribus will create one for you.

May raise NameExistsError if you explicitly pass a name that&apos;s already used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>newPage(where [,&quot;template&quot;])

Creates a new page. If &quot;where&quot; is -1 the new Page is appended to the
document, otherwise the new page is inserted before &quot;where&quot;. Page numbers are
counted from 1 upwards, no matter what the displayed first page number of your
document is. The optional parameter &quot;template&quot; specifies the name of the
template page for the new page.

May raise IndexError if the page number is out of range
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setGradientFill(type, &quot;color1&quot;, shade1, &quot;color2&quot;, shade2, [&quot;name&quot;])

Sets the gradient fill of the object &quot;name&quot; to type. Color descriptions are
the same as for setFillColor() and setFillShade(). See the constants for
available types (FILL_&lt;type&gt;).
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>messagebarText(&quot;string&quot;)

Writes the &quot;string&quot; into the Scribus message bar (status line). The text
must be UTF8 encoded or &apos;unicode&apos; string(recommended).
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>newDoc(size, margins, orientation, firstPageNumber,
                   unit, facingPages, firstSideLeft) -&gt; bool

Creates a new document and returns true if successful. The parameters have the
following meaning:

    size = A tuple (width, height) describing the size of the document. You can
    use predefined constants named PAPER_&lt;paper_type&gt; e.g. PAPER_A4 etc.

    margins = A tuple (left, right, top, bottom) describing the document
    margins

    orientation = the page orientation - constants PORTRAIT, LANDSCAPE

    firstPageNumber = is the number of the first page in the document used for
    pagenumbering. While you&apos;ll usually want 1, it&apos;s useful to have higher
    numbers if you&apos;re creating a document in several parts.

    unit: this value sets the measurement units used by the document. Use a
    predefined constant for this, one of: UNIT_INCHES, UNIT_MILLIMETERS,
    UNIT_PICAS, UNIT_POINTS.

    facingPages = FACINGPAGES, NOFACINGPAGES

    firstSideLeft = FIRSTPAGELEFT, FIRSTPAGERIGHT

The values for width, height and the margins are expressed in the given unit
for the document. PAPER_* constants are expressed in points. If your document
is not in points, make sure to account for this.

example: newDoc(PAPER_A4, (10, 10, 20, 20), LANDSCAPE, 1, UNIT_POINTS,
                FACINGPAGES, FIRSTPAGERIGHT)
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>register_macro_callable(name, callable, accel=&apos;&apos;)

Create a macro called &quot;name&quot; with the existing callable object &quot;callable&quot;.
The passed callable must not require any arguments when called (it may take
optional arguments, but will not be given any).
If provided, the string &quot;accel&quot; will be used to set a keyboard shortcut
for the macro.
If the passed callable is a class, it will be rejected. Functions and bound
methods are quite acceptable, as are instances of classes that provide a
__call__ method with no arguments. There is no problem with registering
a callable more than once, nor with registering multiple bound methods
of a single instance.
</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>@default</name>
    <message>
        <source></source>
        <translation></translation>
    </message>
    <message>
        <source>getFont([&quot;name&quot;]) -&gt; string

Returns the font name for the text frame &quot;name&quot;. If this text frame
has some text selected the value assigned to the first character
of the selection is returned. If &quot;name&quot; is not given the currently
selected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getTextLength([&quot;name&quot;]) -&gt; integer

Returns the length of the text in the text frame &quot;name&quot;.
If &quot;name&quot; is not given the currently selected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getText([&quot;name&quot;]) -&gt; string

Returns the text of the text frame &quot;name&quot;. If this text frame has some text
selected, the selected text is returned. All text in the frame, not just
currently visible text, is returned. If &quot;name&quot; is not given the currently
selected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getAllText([&quot;name&quot;]) -&gt; string

Returns the text of the text frame &quot;name&quot; and of all text frames which are
linked with this frame. If this textframe has some text selected, the selected
text is returned. If &quot;name&quot; is not given the currently selected item is
used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getLineSpacing([&quot;name&quot;]) -&gt; float

Returns the line spacing (&quot;leading&quot;) of the text frame &quot;name&quot; expressed in
points. If &quot;name&quot; is not given the currently selected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getColumnGap([&quot;name&quot;]) -&gt; float

Returns the column gap size of the text frame &quot;name&quot; expressed in points. If
&quot;name&quot; is not given the currently selected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getColumns([&quot;name&quot;]) -&gt; integer

Gets the number of columns of the text frame &quot;name&quot;. If &quot;name&quot; is not
given the currently selected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setText(&quot;text&quot;, [&quot;name&quot;])

Sets the text of the text frame &quot;name&quot; to the text of the string &quot;text&quot;.
Text must be UTF8 encoded - use e.g. unicode(text, &apos;iso-8859-2&apos;). See the FAQ
for more details. If &quot;name&quot; is not given the currently selected item is
used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setFont(&quot;font&quot;, [&quot;name&quot;])

Sets the font of the text frame &quot;name&quot; to &quot;font&quot;. If there is some text
selected only the selected text is changed.  If &quot;name&quot; is not given the
currently selected item is used.

May throw ValueError if the font cannot be found.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setFontSize(size, [&quot;name&quot;])

Sets the font size of the text frame &quot;name&quot; to &quot;size&quot;. &quot;size&quot; is treated
as a value in points. If there is some text selected only the selected text is
changed. &quot;size&quot; must be in the range 1 to 512. If &quot;name&quot; is not given the
currently selected item is used.

May throw ValueError for a font size that&apos;s out of bounds.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setLineSpacing(size, [&quot;name&quot;])

Sets the line spacing (&quot;leading&quot;) of the text frame &quot;name&quot; to &quot;size&quot;.
&quot;size&quot; is a value in points. If &quot;name&quot; is not given the currently selected
item is used.

May throw ValueError if the line spacing is out of bounds.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setColumnGap(size, [&quot;name&quot;])

Sets the column gap of the text frame &quot;name&quot; to the value &quot;size&quot;. If
&quot;name&quot; is not given the currently selected item is used.

May throw ValueError if the column gap is out of bounds (must be positive).
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setColumns(nr, [&quot;name&quot;])

Sets the number of columns of the text frame &quot;name&quot; to the integer &quot;nr&quot;.
If &quot;name&quot; is not given the currently selected item is used.

May throw ValueError if number of columns is not at least one.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setTextAlignment(align, [&quot;name&quot;])

Sets the text alignment of the text frame &quot;name&quot; to the specified alignment.
If &quot;name&quot; is not given the currently selected item is used. &quot;align&quot; should
be one of the ALIGN_ constants defined in this module - see dir(scribus).

May throw ValueError for an invalid alignment constant.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>deleteText([&quot;name&quot;])

Deletes any text in the text frame &quot;name&quot;. If there is some text selected,
only the selected text will be deleted. If &quot;name&quot; is not given the currently
selected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setTextColor(&quot;color&quot;, [&quot;name&quot;])

Sets the text color of the text frame &quot;name&quot; to the color &quot;color&quot;. If there
is some text selected only the selected text is changed. If &quot;name&quot; is not
given the currently selected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setTextStroke(&quot;color&quot;, [&quot;name&quot;])

Set &quot;color&quot; of the text stroke. If &quot;name&quot; is not given the currently
selected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setTextShade(shade, [&quot;name&quot;])

Sets the shading of the text color of the object &quot;name&quot; to &quot;shade&quot;. If
there is some text selected only the selected text is changed. &quot;shade&quot; must
be an integer value in the range from 0 (lightest) to 100 (full color
intensity). If &quot;name&quot; is not given the currently selected item is
used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>linkTextFrames(&quot;fromname&quot;, &quot;toname&quot;)

Link two text frames. The frame named &quot;fromname&quot; is linked to the
frame named &quot;toname&quot;. The target frame must be an empty text frame
and must not link to or be linked from any other frames already.

May throw ScribusException if linking rules are violated.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>unlinkTextFrames(&quot;name&quot;)

Remove the specified (named) object from the text frame flow/linkage. If the
frame was in the middle of a chain, the previous and next frames will be
connected, eg &apos;a-&gt;b-&gt;c&apos; becomes &apos;a-&gt;c&apos; when you unlinkTextFrames(b)&apos;

May throw ScribusException if linking rules are violated.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>traceText([&quot;name&quot;])

Convert the text frame &quot;name&quot; to outlines. If &quot;name&quot; is not given the
currently selected item is used.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getColor(&quot;name&quot;) -&gt; tuple

Returns a tuple (C, M, Y, K) containing the four color components of the
color &quot;name&quot; from the current document. If no document is open, returns
the value of the named color from the default document colors.

May raise NotFoundError if the named color wasn&apos;t found.
May raise ValueError if an invalid color name is specified.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>changeColor(&quot;name&quot;, c, m, y, k)

Changes the color &quot;name&quot; to the specified CMYK value. The color value is
defined via four components c = Cyan, m = Magenta, y = Yellow and k = Black.
Color components should be in the range from 0 to 255.

May raise NotFoundError if the named color wasn&apos;t found.
May raise ValueError if an invalid color name is specified.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>deleteColor(&quot;name&quot;, &quot;replace&quot;)

Deletes the color &quot;name&quot;. Every occurence of that color is replaced by the
color &quot;replace&quot;. If not specified, &quot;replace&quot; defaults to the color
&quot;None&quot; - transparent.

deleteColor works on the default document colors if there is no document open.
In that case, &quot;replace&quot;, if specified, has no effect.

May raise NotFoundError if a named color wasn&apos;t found.
May raise ValueError if an invalid color name is specified.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>replaceColor(&quot;name&quot;, &quot;replace&quot;)

Every occurence of the color &quot;name&quot; is replaced by the color &quot;replace&quot;.

May raise NotFoundError if a named color wasn&apos;t found.
May raise ValueError if an invalid color name is specified.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>fileDialog(&quot;caption&quot;, [&quot;filter&quot;, &quot;defaultname&quot; ,haspreview, issave]) -&gt; string with filename

Shows a File Open dialog box with the caption &quot;caption&quot;. Files are filtered
with the filter string &quot;filter&quot;. A default filename or file path can also
supplied, leave this string empty when you don&apos;t want to use it.  A value of
True for haspreview enables a small preview widget in the FileSelect box.  When
the issave parameter is set to True the dialog acts like a &quot;Save As&quot; dialog
otherwise it acts like a &quot;File Open Dialog&quot;. The default for both of the
opional parameters is False.

The filter, if specified, takes the form &apos;comment (*.type *.type2 ...)&apos;.
For example &apos;Images (*.png *.xpm *.jpg)&apos;.

Refer to the Qt-Documentation for QFileDialog for details on filters.

Example: fileDialog(&apos;Open input&apos;, &apos;CSV files (*.csv)&apos;)
Example: fileDialog(&apos;Save report&apos;, defaultname=&apos;report.txt&apos;, issave=True)
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>messageBox(&quot;caption&quot;, &quot;message&quot;,
    icon=ICON_NONE, button1=BUTTON_OK|BUTTONOPT_DEFAULT,
    button2=BUTTON_NONE, button3=BUTTON_NONE) -&gt; integer

Displays a message box with the title &quot;caption&quot;, the message &quot;message&quot;, and
an icon &quot;icon&quot; and up to 3 buttons. By default no icon is used and a single
button, OK, is displayed. Only the caption and message arguments are required,
though setting an icon and appropriate button(s) is strongly
recommended. The message text may contain simple HTML-like markup.

Returns the number of the button the user pressed. Button numbers start
at 1.

For the icon and the button parameters there are predefined constants available
with the same names as in the Qt Documentation. These are the BUTTON_* and
ICON_* constants defined in the module. There are also two extra constants that
can be binary-ORed with button constants:
    BUTTONOPT_DEFAULT   Pressing enter presses this button.
    BUTTONOPT_ESCAPE    Pressing escape presses this button.

Usage examples:
result = messageBox(&apos;Script failed&apos;,
                    &apos;This script only works when you have a text frame selected.&apos;,
                    ICON_ERROR)
result = messageBox(&apos;Monkeys!&apos;, &apos;Something went ook! &lt;i&gt;Was it a monkey?&lt;/i&gt;&apos;,
                    ICON_WARNING, BUTTON_YES|BUTTONOPT_DEFAULT,
                    BUTTON_NO, BUTTON_IGNORE|BUTTONOPT_ESCAPE)

Defined button and icon constants:
BUTTON_NONE, BUTTON_ABORT, BUTTON_CANCEL, BUTTON_IGNORE, BUTTON_NO,
BUTTON_NOALL, BUTTON_OK, BUTTON_RETRY, BUTTON_YES, BUTTON_YESALL,
ICON_NONE, ICON_INFORMATION, ICON_WARNING, ICON_CRITICAL.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>valueDialog(caption, message [,defaultvalue]) -&gt; string

Shows the common &apos;Ask for string&apos; dialog and returns its value as a string
Parameters: window title, text in the window and optional &apos;default&apos; value.

Example: valueDialog(&apos;title&apos;, &apos;text in the window&apos;, &apos;optional&apos;)
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>closeDoc()

Closes the current document without prompting to save.

May throw NoDocOpenError if there is no document to close
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>haveDoc() -&gt; bool

Returns true if there is a document open.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>openDoc(&quot;name&quot;)

Opens the document &quot;name&quot;.

May raise ScribusError if the document could not be opened.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>saveDoc()

Saves the current document with its current name, returns true if successful.
If the document has not already been saved, this may bring up an interactive
save file dialog.

If the save fails, there is currently no way to tell.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>saveDocAs(&quot;name&quot;)

Saves the current document under the new name &quot;name&quot; (which may be a full or
relative path).

May raise ScribusError if the save fails.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>saveDocAs(&quot;author&quot;, &quot;info&quot;, &quot;description&quot;) -&gt; bool

Sets the document information. &quot;Author&quot;, &quot;Info&quot;, &quot;Description&quot; are
strings.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setMargins(lr, rr, tr, br)

Sets the margins of the document, Left(lr), Right(rr), Top(tr) and Bottom(br)
margins are given in the measurement units of the document - see UNIT_&lt;type&gt;
constants.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setUnit(type)

Changes the measurement unit of the document. Possible values for &quot;unit&quot; are
defined as constants UNIT_&lt;type&gt;.

May raise ValueError if an invalid unit is passed.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getUnit() -&gt; integer (Scribus unit constant)

Returns the measurement units of the document. The returned value will be one
of the UNIT_* constants:
UNIT_INCHES, UNIT_MILLIMETERS, UNIT_PICAS, UNIT_POINTS.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>loadStylesFromFile(&quot;filename&quot;)

Loads paragraph styles from the Scribus document at &quot;filename&quot; into the
current document.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setDocType(facingPages, firstPageLeft)

Sets the document type. To get facing pages set the first parameter to
FACINGPAGES, to switch facingPages off use NOFACINGPAGES instead.  If you want
to be the first page a left side set the second parameter to FIRSTPAGELEFT, for
a right page use FIRSTPAGERIGHT.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getLineColor([&quot;name&quot;]) -&gt; string

Returns the name of the line color of the object &quot;name&quot;.
If &quot;name&quot; is not given the currently selected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getLineWidth([&quot;name&quot;]) -&gt; integer

Returns the line width of the object &quot;name&quot;. If &quot;name&quot;
is not given the currently selected Item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getLineShade([&quot;name&quot;]) -&gt; integer

Returns the shading value of the line color of the object &quot;name&quot;.
If &quot;name&quot; is not given the currently selected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getLineJoin([&quot;name&quot;]) -&gt; integer (see contants)

Returns the line join style of the object &quot;name&quot;. If &quot;name&quot; is not given
the currently selected item is used.  The join types are:
JOIN_BEVEL, JOIN_MITTER, JOIN_ROUND
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getLineEnd([&quot;name&quot;]) -&gt; integer (see constants)

Returns the line cap style of the object &quot;name&quot;. If &quot;name&quot; is not given the
currently selected item is used. The cap types are:
CAP_FLAT, CAP_ROUND, CAP_SQUARE
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getLineStyle([&quot;name&quot;]) -&gt; integer (see constants)

Returns the line style of the object &quot;name&quot;. If &quot;name&quot; is not given the
currently selected item is used. Line style constants are:
LINE_DASH, LINE_DASHDOT, LINE_DASHDOTDOT, LINE_DOT, LINE_SOLID
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getFillShade([&quot;name&quot;]) -&gt; integer

Returns the shading value of the fill color of the object &quot;name&quot;.
If &quot;name&quot; is not given the currently selected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getImageScale([&quot;name&quot;]) -&gt; (x,y)

Returns a (x, y) tuple containing the scaling values of the image frame
&quot;name&quot;.  If &quot;name&quot; is not given the currently selected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getImageName([&quot;name&quot;]) -&gt; string

Returns the filename for the image in the image frame. If &quot;name&quot; is not
given the currently selected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getSize([&quot;name&quot;]) -&gt; (width,height)

Returns a (width, height) tuple with the size of the object &quot;name&quot;.
If &quot;name&quot; is not given the currently selected item is used. The size is
expressed in the current measurement unit of the document - see UNIT_&lt;type&gt;
for reference.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getRotation([&quot;name&quot;]) -&gt; integer

Returns the rotation of the object &quot;name&quot;. The value is expressed in degrees,
and clockwise is positive. If &quot;name&quot; is not given the currently selected item
is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getAllObjects() -&gt; list

Returns a list containing the names of all objects on the current page.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>moveObjectAbs(x, y [, &quot;name&quot;])

Moves the object &quot;name&quot; to a new location. The coordinates are expressed in
the current measurement unit of the document (see UNIT constants).  If &quot;name&quot;
is not given the currently selected item is used.  If the object &quot;name&quot;
belongs to a group, the whole group is moved.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>rotateObject(rot [, &quot;name&quot;])

Rotates the object &quot;name&quot; by &quot;rot&quot; degrees relatively. The object is
rotated by the vertex that is currently selected as the rotation point - by
default, the top left vertext at zero rotation. Positive values mean counter
clockwise rotation when the default rotation point is used. If &quot;name&quot; is not
given the currently selected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>sizeObject(width, height [, &quot;name&quot;])

Resizes the object &quot;name&quot; to the given width and height. If &quot;name&quot;
is not given the currently selected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getSelectedObject([nr]) -&gt; string

Returns the name of the selected object. &quot;nr&quot; if given indicates the number
of the selected object, e.g. 0 means the first selected object, 1 means the
second selected Object and so on.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>selectionCount() -&gt; integer

Returns the number of selected objects.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>selectObject(&quot;name&quot;)

Selects the object with the given &quot;name&quot;.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>deselectAll()

Deselects all objects in the whole document.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>groupObjects(list)

Groups the objects named in &quot;list&quot; together. &quot;list&quot; must contain the names
of the objects to be grouped. If &quot;list&quot; is not given the currently selected
items are used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>unGroupObjects(&quot;name&quot;)

Destructs the group the object &quot;name&quot; belongs to.If &quot;name&quot; is not given the currently selected item is used.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>scaleGroup(factor [,&quot;name&quot;])

Scales the group the object &quot;name&quot; belongs to. Values greater than 1 enlarge
the group, values smaller than 1 make the group smaller e.g a value of 0.5
scales the group to 50 % of its original size, a value of 1.5 scales the group
to 150 % of its original size.  The value for &quot;factor&quot; must be greater than
0. If &quot;name&quot; is not given the currently selected item is used.

May raise ValueError if an invalid scale factor is passed.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>loadImage(&quot;filename&quot; [, &quot;name&quot;])

Loads the picture &quot;picture&quot; into the image frame &quot;name&quot;. If &quot;name&quot; is
not given the currently selected item is used.

May raise WrongFrameTypeError if the target frame is not an image frame
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>scaleImage(x, y [, &quot;name&quot;])

Sets the scaling factors of the picture in the image frame &quot;name&quot;.
If &quot;name&quot; is not given the currently selected item is used. A number of 1
means 100 %.

May raise WrongFrameTypeError if the target frame is not an image frame
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>lockObject([&quot;name&quot;]) -&gt; bool

Locks the object &quot;name&quot; if it&apos;s unlocked or unlock it if it&apos;s locked.
If &quot;name&quot; is not given the currently selected item is used. Returns true
if locked.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>isLocked([&quot;name&quot;]) -&gt; bool

Returns true if is the object &quot;name&quot; locked.  If &quot;name&quot; is not given the
currently selected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getFontNames() -&gt; list

Returns a list with the names of all available fonts.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getXFontNames() -&gt; list of tuples

Returns a larger font info. It&apos;s a list of the tuples with:
[ (Scribus name, Family, Real name, subset (1|0), embed PS (1|0), font file), (...), ... ]
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getLayers() -&gt; list

Returns a list with the names of all defined layers.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setActiveLayer(&quot;name&quot;)

Sets the active layer to the layer named &quot;name&quot;.

May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getActiveLayer() -&gt; string

Returns the name of the current active layer.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>sentToLayer(&quot;layer&quot; [, &quot;name&quot;])

Sends the object &quot;name&quot; to the layer &quot;layer&quot;. The layer must exist.
If &quot;name&quot; is not given the currently selected item is used.

May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setLayerVisible(&quot;layer&quot;, visible)

Sets the layer &quot;layer&quot; to be visible or not. If is the visible set to false
the layer is invisible.

May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setLayerPrintable(&quot;layer&quot;, printable)

Sets the layer &quot;layer&quot; to be printable or not. If is the printable set to
false the layer won&apos;t be printed.

May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>deleteLayer(&quot;layer&quot;)

Deletes the layer with the name &quot;layer&quot;. Nothing happens if the layer doesn&apos;t
exists or if it&apos;s the only layer in the document.

May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>createLayer(layer)

Creates a new layer with the name &quot;name&quot;.

May raise ValueError if the layer name isn&apos;t acceptable.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getGuiLanguage() -&gt; string

Returns a string with the -lang value.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>createEllipse(x, y, width, height, [&quot;name&quot;]) -&gt; string

Creates a new ellipse on the current page and returns its name.
The coordinates are given in the current measurement units of the document
(see UNIT constants). &quot;name&quot; should be a unique identifier for the object
because you need this name for further referencing of that object. If &quot;name&quot;
is not given Scribus will create one for you.

May raise NameExistsError if you explicitly pass a name that&apos;s already used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>createImage(x, y, width, height, [&quot;name&quot;]) -&gt; string

Creates a new picture frame on the current page and returns its name. The
coordinates are given in the current measurement units of the document.
&quot;name&quot; should be a unique identifier for the object because you need this
name for further access to that object. If &quot;name&quot; is not given Scribus will
create one for you.

May raise NameExistsError if you explicitly pass a name that&apos;s already used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>createText(x, y, width, height, [&quot;name&quot;]) -&gt; string

Creates a new text frame on the actual page and returns its name.
The coordinates are given in the actual measurement unit of the document (see
UNIT constants). &quot;name&quot; should be a unique identifier for the object because
you need this name for further referencing of that object. If &quot;name&quot; is not
given Scribus will create one for you.

May raise NameExistsError if you explicitly pass a name that&apos;s already used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>createLine(x1, y1, x2, y2, [&quot;name&quot;]) -&gt; string

Creates a new line from the point(x1, y1) to the point(x2, y2) and returns
its name. The coordinates are given in the current measurement unit of the
document (see UNIT constants). &quot;name&quot; should be a unique identifier for the
object because you need this name for further access to that object. If
&quot;name&quot; is not given Scribus will create one for you.

May raise NameExistsError if you explicitly pass a name that&apos;s already used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>createPolyLine(list, [&quot;name&quot;]) -&gt; string

Creates a new polyline and returns its name. The points for the polyline are
stored in the list &quot;list&quot; in the following order: [x1, y1, x2, y2...xn. yn].
The coordinates are given in the current measurement units of the document (see
UNIT constants). &quot;name&quot; should be a unique identifier for the object because
you need this name for further access to that object. If &quot;name&quot; is not given
Scribus will create one for you.

May raise NameExistsError if you explicitly pass a name that&apos;s already used.
May raise ValueError if an insufficient number of points is passed or if
the number of values passed don&apos;t group into points without leftovers.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>createPolygon(list, [&quot;name&quot;]) -&gt; string

Creates a new polygon and returns its name. The points for the polygon are
stored in the list &quot;list&quot; in the following order: [x1, y1, x2, y2...xn. yn].
At least three points are required. There is no need to repeat the first point
to close the polygon. The polygon is automatically closed by connecting the
first and the last point.  The coordinates are given in the current measurement
units of the document (see UNIT constants).  &quot;name&quot; should be a unique
identifier for the object because you need this name for further access to that
object. If &quot;name&quot; is not given Scribus will create one for you.

May raise NameExistsError if you explicitly pass a name that&apos;s already used.
May raise ValueError if an insufficient number of points is passed or if
the number of values passed don&apos;t group into points without leftovers.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>createBezierLine(list, [&quot;name&quot;]) -&gt; string

Creates a new bezier curve and returns its name. The points for the bezier
curve are stored in the list &quot;list&quot; in the following order:
[x1, y1, kx1, ky1, x2, y2, kx2, ky2...xn. yn, kxn. kyn]
In the points list, x and y mean the x and y coordinates of the point and kx
and ky meaning the control point for the curve.  The coordinates are given in
the current measurement units of the document (see UNIT constants). &quot;name&quot;
should be a unique identifier for the object because you need this name for
further access to that object. If &quot;name&quot; is not given Scribus will create one
for you.

May raise NameExistsError if you explicitly pass a name that&apos;s already used.
May raise ValueError if an insufficient number of points is passed or if
the number of values passed don&apos;t group into points without leftovers.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>createPathText(x, y, &quot;textbox&quot;, &quot;beziercurve&quot;, [&quot;name&quot;]) -&gt; string

Creates a new pathText by merging the two objects &quot;textbox&quot; and
&quot;beziercurve&quot; and returns its name. The coordinates are given in the current
measurement unit of the document (see UNIT constants). &quot;name&quot; should be a
unique identifier for the object because you need this name for further access
to that object. If &quot;name&quot; is not given Scribus will create one for you.

May raise NameExistsError if you explicitly pass a name that&apos;s already used.
May raise NotFoundError if one or both of the named base object don&apos;t exist.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>deleteObject([&quot;name&quot;])

Deletes the item with the name &quot;name&quot;. If &quot;name&quot; is not given the currently
selected item is deleted.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>textFlowsAroundFrame(&quot;name&quot; [, state])

Enables/disables &quot;Text Flows Around Frame&quot; feature for object &quot;name&quot;.
Called with parameters string name and optional boolean &quot;state&quot;. If &quot;state&quot;
is not passed, text flow is toggled.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>objectExists([&quot;name&quot;]) -&gt; bool

Test if an object with specified name really exists in the document.
The optional parameter is the object name. When no object name is given,
returns True if there is something selected.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setStyle(&quot;style&quot; [, &quot;name&quot;])

Apply the named &quot;style&quot; to the object named &quot;name&quot;. If is no object name
given, it&apos;s applied on the selected object.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getAllStyles() -&gt; list

Return a list of the names of all paragraph styles in the current document.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>currentPage() -&gt; integer

Returns the number of the current working page. Page numbers are counted from 1
upwards, no matter what the displayed first page number of your document is.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>redrawAll()

Redraws all pages.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>savePageAsEPS(&quot;name&quot;)

Saves the current page as an EPS to the file &quot;name&quot;.

May raise ScribusError if the save failed.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>deletePage(nr)

Deletes the given page. Does nothing if the document contains only one page.
Page numbers are counted from 1 upwards, no matter what the displayed first
page number is.

May raise IndexError if the page number is out of range
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>gotoPage(nr)

Moves to the page &quot;nr&quot; (that is, makes the current page &quot;nr&quot;). Note that
gotoPage doesn&apos;t (curently) change the page the user&apos;s view is displaying, it
just sets the page that script commands will operates on.

May raise IndexError if the page number is out of range.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>pageCount() -&gt; integer

Returns the number of pages in the document.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getHGuides() -&gt; list

Returns a list containing positions of the horizontal guides. Values are in the
document&apos;s current units - see UNIT_&lt;type&gt; constants.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setHGuides(list)

Sets horizontal guides. Input parameter must be a list of guide positions
measured in the current document units - see UNIT_&lt;type&gt; constants.

Example: setHGuides(getHGuides() + [200.0, 210.0] # add new guides without any lost
         setHGuides([90,250]) # replace current guides entirely
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getVGuides()

See getHGuides.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setVGuides()

See setHGuides.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getPageSize() -&gt; tuple

Returns a tuple with page dimensions measured in the document&apos;s current units.
See UNIT_&lt;type&gt; constants and getPageMargins()
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getPageItems() -&gt; list

Returns a list of tuples with items on the current page. The tuple is:
(name, objectType, order) E.g. [(&apos;Text1&apos;, 4, 0), (&apos;Image1&apos;, 2, 1)]
means that object named &apos;Text1&apos; is a text frame (type 4) and is the first at
the page...
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setFillColor(&quot;color&quot;, [&quot;name&quot;])

Sets the fill color of the object &quot;name&quot; to the color &quot;color&quot;. &quot;color&quot;
is the name of one of the defined colors. If &quot;name&quot; is not given the
currently selected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setLineColor(&quot;color&quot;, [&quot;name&quot;])

Sets the line color of the object &quot;name&quot; to the color &quot;color&quot;. If &quot;name&quot;
is not given the currently selected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setLineWidth(width, [&quot;name&quot;])

Sets line width of the object &quot;name&quot; to &quot;width&quot;. &quot;width&quot; must be in the
range from 0.0 to 12.0 inclusive, and is measured in points. If &quot;name&quot; is not
given the currently selected item is used.

May raise ValueError if the line width is out of bounds.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setLineShade(shade, [&quot;name&quot;])

Sets the shading of the line color of the object &quot;name&quot; to &quot;shade&quot;.
&quot;shade&quot; must be an integer value in the range from 0 (lightest) to 100
(full color intensity). If &quot;name&quot; is not given the currently selected item
is used.

May raise ValueError if the line shade is out of bounds.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setLineJoin(join, [&quot;name&quot;])

Sets the line join style of the object &quot;name&quot; to the style &quot;join&quot;.
If &quot;name&quot; is not given the currently selected item is used. There are
predefined constants for join - JOIN_&lt;type&gt;.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setLineEnd(endtype, [&quot;name&quot;])

Sets the line cap style of the object &quot;name&quot; to the style &quot;cap&quot;.
If &quot;name&quot; is not given the currently selected item is used. There are
predefined constants for &quot;cap&quot; - CAP_&lt;type&gt;.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setLineStyle(style, [&quot;name&quot;])

Sets the line style of the object &quot;name&quot; to the style &quot;style&quot;. If &quot;name&quot;
is not given the currently selected item is used. There are predefined
constants for &quot;style&quot; - LINE_&lt;style&gt;.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setFillShade(shade, [&quot;name&quot;])

Sets the shading of the fill color of the object &quot;name&quot; to &quot;shade&quot;.
&quot;shade&quot; must be an integer value in the range from 0 (lightest) to 100
(full Color intensity). If &quot;name&quot; is not given the currently selected
Item is used.

May raise ValueError if the fill shade is out of bounds.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setCornerRadius(radius, [&quot;name&quot;])

Sets the corner radius of the object &quot;name&quot;. The radius is expressed
in points. If &quot;name&quot; is not given the currently selected item is used.

May raise ValueError if the corner radius is negative.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setMultiLine(&quot;namedStyle&quot;, [&quot;name&quot;])

Sets the line style of the object &quot;name&quot; to the named style &quot;namedStyle&quot;.
If &quot;name&quot; is not given the currently selected item is used.

May raise NotFoundError if the line style doesn&apos;t exist.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>progressReset()

Cleans up the Scribus progress bar previous settings. It is called before the
new progress bar use. See progressSet.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>progressTotal(max)

Sets the progress bar&apos;s maximum steps value to the specified number.
See progressSet.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>progressSet(nr)

Set the progress bar position to &quot;nr&quot;, a value relative to the previously set
progressTotal. The progress bar uses the concept of steps; you give it the
total number of steps and the number of steps completed so far and it will
display the percentage of steps that have been completed. You can specify the
total number of steps with progressTotal(). The current number of steps is set
with progressSet(). The progress bar can be rewound to the beginning with
progressReset(). [based on info taken from Trolltech&apos;s Qt docs]
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setCursor()

[UNSUPPORTED!] This might break things, so steer clear for now.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>docChanged(bool)

Enable/disable save icon in the Scribus icon bar and the Save menu item. It&apos;s
useful to call this procedure when you&apos;re changing the document, because Scribus
won&apos;t automatically notice when you change the document using a script.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>defineColor(&quot;name&quot;, c, m, y, k)

Defines a new color &quot;name&quot;. The color Value is defined via four components:
c = Cyan, m = Magenta, y = Yellow and k = Black. Color components should be in
the range from 0 to 255.

May raise ValueError if an invalid color name is specified.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getCornerRadius([&quot;name&quot;]) -&gt; integer

Returns the corner radius of the object &quot;name&quot;. The radius is
expressed in points. If &quot;name&quot; is not given the currently
selected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getPosition([&quot;name&quot;]) -&gt; (x,y)

Returns a (x, y) tuple with the position of the object &quot;name&quot;.
If &quot;name&quot; is not given the currently selected item is used.
The position is expressed in the actual measurement unit of the document
- see UNIT_&lt;type&gt; for reference.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>rotateObjectAbs(rot [, &quot;name&quot;])

Sets the rotation of the object &quot;name&quot; to &quot;rot&quot;. Positive values
mean counter clockwise rotation. If &quot;name&quot; is not given the currently
selected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setScaleImageToFrame(scaletoframe, proportional=None, name=&lt;selection&gt;)

Sets the scale to frame on the selected or specified image frame to `scaletoframe&apos;.
If `proportional&apos; is specified, set fixed aspect ratio scaling to `proportional&apos;.
Both `scaletoframe&apos; and `proportional&apos; are boolean.

May raise WrongFrameTypeError.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>selectText(start, count, [&quot;name&quot;])

Selects &quot;count&quot; characters of text in the text frame &quot;name&quot; starting from the
character &quot;start&quot;. Character counting starts at 0. If &quot;count&quot; is zero, any
text selection will be cleared. If &quot;count&quot; is -1, all text in the frame will
be selected. If &quot;name&quot; is not given the currently selected item is used.

May throw IndexError if the selection is outside the bounds of the text.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>register_macro_code(name, sourcetext, accel=&apos;&apos;)

Create a macro named &quot;name&quot; by evaluating the the source code &quot;sourcetext&quot;.
&quot;sourcetext&quot; must follow the same rules as macros created in the GUI.
If provided, the string &quot;accel&quot; will be used to set a keyboard shortcut
for the macro.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>isLayerPrintable(&quot;layer&quot;) -&gt; bool

Returns whether the layer &quot;layer&quot; is printable or not, a value of True means
that the layer &quot;layer&quot; can be printed, a value of False means that printing
the layer &quot;layer&quot; is disabled.

May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getColorAsRGB(&quot;name&quot;) -&gt; tuple

Returns a tuple (R,G,B) containing the three color components of the
color &quot;name&quot; from the current document, converted to the RGB colour
space. If no document is open, returns the value of the named color
from the default document colors.

May raise NotFoundError if the named color wasn&apos;t found.
May raise ValueError if an invalid color name is specified.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>renderFont(&quot;name&quot;, &quot;filename&quot;, &quot;sample&quot;, size, format=&quot;PPM&quot;) -&gt; bool

Creates an image preview of font &quot;name&quot; with given text &quot;sample&quot; and size.
If &quot;filename&quot; is not &quot;&quot;, image is saved into &quot;filename&quot;. Otherwise
image data is returned as a string. The optional &quot;format&quot; argument
specifies the image format to generate, and supports any format allowed
by QPixmap.save(). Common formats are PPM, JPEG, PNG and XPM.

May raise NotFoundError if the specified font can&apos;t be found.
May raise ValueError if an empty sample or filename is passed.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>isLayerVisible(&quot;layer&quot;) -&gt; bool

Returns whether the layer &quot;layer&quot; is visible or not, a value of True means
that the layer &quot;layer&quot; is visible, a value of False means that the layer
&quot;layer&quot; is invisible.

May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setPDFBookmark(&quot;toggle&quot;, [&quot;name&quot;])

Sets wether (toggle = 1) the text frame &quot;name&quot; is a bookmark nor not.
If &quot;name&quot; is not given the currently selected item is used.

May raise WrongFrameTypeError if the target frame is not a text frame
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>isPDFBookmark([&quot;name&quot;]) -&gt; bool

Returns true if the text frame &quot;name&quot; is a PDF bookmark.
If &quot;name&quot; is not given the currently selected item is used.

May raise WrongFrameTypeError if the target frame is not a text frame
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getPageMargins()

Returns the page margins as a (top, left, right, bottom) tuple in the current
units. See UNIT_&lt;type&gt; constants and getPageSize().
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>insertText(&quot;text&quot;, pos, [&quot;name&quot;])

Inserts the text &quot;text&quot; at the position &quot;pos&quot; into the text frame &quot;name&quot;.
Text must be UTF encoded (see setText() as reference). The first character has
an index of 0. Inserting at position -1 appends text to the frame. If &quot;name&quot;
is not given the currently selected Item is used.

May throw IndexError for an insertion out of bounds.
</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>About</name>
    <message>
        <source>Scribus Version %1
%2 %3</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Build-ID:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;About</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Contributions from:</source>
        <translation type="unfinished">Kolaboratzaileak:</translation>
    </message>
    <message>
        <source>Windows port:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>A&amp;uthors</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>German:</source>
        <translation type="unfinished">Alemana:</translation>
    </message>
    <message>
        <source>French:</source>
        <translation type="unfinished">Frantsesa:</translation>
    </message>
    <message>
        <source>Italian:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Hungarian:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Ukrainian:</source>
        <translation type="unfinished">Ukrainera:</translation>
    </message>
    <message>
        <source>Bulgarian:</source>
        <translation type="unfinished">Bulgariera:</translation>
    </message>
    <message>
        <source>Galician:</source>
        <translation type="unfinished">Galiziera:</translation>
    </message>
    <message>
        <source>Turkish:</source>
        <translation type="unfinished">Turkiera:</translation>
    </message>
    <message>
        <source>Lithuanian:</source>
        <translation type="unfinished">Lituaniera:</translation>
    </message>
    <message>
        <source>Polish:</source>
        <translation type="unfinished">Poloniera:</translation>
    </message>
    <message>
        <source>Czech:</source>
        <translation type="unfinished">Txekera:</translation>
    </message>
    <message>
        <source>Slovak:</source>
        <translation type="unfinished">Eslovakiera:</translation>
    </message>
    <message>
        <source>Danish:</source>
        <translation type="unfinished">Daniera:</translation>
    </message>
    <message>
        <source>Norwegian:</source>
        <translation type="unfinished">Norvegiera:</translation>
    </message>
    <message>
        <source>Welsh:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Russian:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Brazilian:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Finnish:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Slovenian:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Basque:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Swedish:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Translations</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Online</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Development Team:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Official Documentation:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Other Documentation:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>English (British):</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Homepage</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Online Reference</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Bugs and Feature Requests</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Mailing List</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Official Translations and Translators:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Esperanto:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Korean:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Serbian:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Spanish:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Previous Translation Contributors:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Catalan:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>About Scribus %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>This panel shows the version, build date and
 compiled in library support in Scribus
The C-C-T equates to C=littlecms C=CUPS T=TIFF support.
Missing library support is indicated by a *</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>%1 %2 %3 </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Afrikaans:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Portuguese (Brazilian):</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>AdvOptions</name>
    <message>
        <source>Advanced Options</source>
        <translation type="unfinished">Aukera aurreratuak</translation>
    </message>
    <message>
        <source>Mirror Page(s) &amp;Horizontal</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Mirror Page(s) &amp;Vertical</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Apply Under Color &amp;Removal</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Apply &amp;ICC Profiles</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>PostScript Level &amp;1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>PostScript Level &amp;2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>PostScript Level &amp;3</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Creates PostScript Level 3</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Creates PostScript Level 2 only, beware,
this can create huge files</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Creates PostScript Level 1 only, beware,
this can create huge files</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>A way of switching off some of the gray shades which are composed
of cyan, yellow and magenta and using black instead.
UCR most affects parts of images which are neutral and/or dark tones
which are close to the gray. Use of this may improve printing some images
and some experimentation and testing is need on a case by case basis.
UCR reduces the possibility of over saturation with CMY inks.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Set Media Size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>This enables you to explicitely set,
the media size of the postscript file.
Not recommended unless
 requested by your printer.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>Align</name>
    <message>
        <source>Distribute/Align</source>
        <translation type="unfinished">Banatu/Lerrokatu</translation>
    </message>
    <message>
        <source>Align</source>
        <translation type="unfinished">Lerrokatu</translation>
    </message>
    <message>
        <source>Horizontal</source>
        <translation type="unfinished">Horizontala</translation>
    </message>
    <message>
        <source>Left Sides</source>
        <translation type="unfinished">Ezkerreko aldeak</translation>
    </message>
    <message>
        <source>Middles</source>
        <translation type="unfinished">Erdikoak</translation>
    </message>
    <message>
        <source>Right Sides</source>
        <translation type="unfinished">Eskuineko aldeak</translation>
    </message>
    <message>
        <source>&amp;Between:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Do Not Change</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>A&amp;lign</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Di&amp;splacement</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Distribute &amp;Evenly</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Vertical</source>
        <translation type="unfinished">Bertikala</translation>
    </message>
    <message>
        <source>Top Sides</source>
        <translation type="unfinished">Goikoak</translation>
    </message>
    <message>
        <source>Bottom Sides</source>
        <translation type="unfinished">Behekoak</translation>
    </message>
    <message>
        <source>Bet&amp;ween:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Do &amp;Not Change</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Al&amp;ign</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Dis&amp;placement</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> pt</source>
        <translation type="unfinished"> pt</translation>
    </message>
    <message>
        <source> mm</source>
        <translation type="unfinished"> mm</translation>
    </message>
    <message>
        <source> in</source>
        <translation type="unfinished"> in</translation>
    </message>
    <message>
        <source> p</source>
        <translation type="unfinished"> p</translation>
    </message>
    <message>
        <source>Distribute E&amp;venly</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Apply</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>AlignSelect</name>
    <message>
        <source>Align Text Left</source>
        <translation type="unfinished">Lerrokatu testua ezkerrean</translation>
    </message>
    <message>
        <source>Align Text Right</source>
        <translation type="unfinished">Lerrokatu testua eskuinean</translation>
    </message>
    <message>
        <source>Align Text Center</source>
        <translation type="unfinished">Lerrokatu testua erdian</translation>
    </message>
    <message>
        <source>Align Text Justified</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Align Text Forced Justified</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>Annot</name>
    <message>
        <source>Field Properties</source>
        <translation type="unfinished">Eremu-propietateak</translation>
    </message>
    <message>
        <source>Type:</source>
        <translation type="unfinished">Mota:</translation>
    </message>
    <message>
        <source>Button</source>
        <translation type="unfinished">Botoia</translation>
    </message>
    <message>
        <source>Text Field</source>
        <translation type="unfinished">Testu-eremua</translation>
    </message>
    <message>
        <source>Check Box</source>
        <translation type="unfinished">Kontrol-laukia</translation>
    </message>
    <message>
        <source>Combo Box</source>
        <translation type="unfinished">Konbinazio-koadroa</translation>
    </message>
    <message>
        <source>List Box</source>
        <translation type="unfinished">Zerrenda-koadroa</translation>
    </message>
    <message>
        <source>Properties</source>
        <translation type="unfinished">Propietateak</translation>
    </message>
    <message>
        <source>Name:</source>
        <translation type="unfinished">Izena:</translation>
    </message>
    <message>
        <source>Tool-Tip:</source>
        <translation type="unfinished">Argibidea:</translation>
    </message>
    <message>
        <source>Text</source>
        <translation type="unfinished">Testua</translation>
    </message>
    <message>
        <source>Font for use with PDF 1.3:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Border</source>
        <translation type="unfinished">Ertza</translation>
    </message>
    <message>
        <source>Color:</source>
        <translation type="unfinished">Kolorea:</translation>
    </message>
    <message>
        <source>None</source>
        <translation type="unfinished">Bat ere ez</translation>
    </message>
    <message>
        <source>Width:</source>
        <translation type="unfinished">Zabalera:</translation>
    </message>
    <message>
        <source>Thin</source>
        <translation type="unfinished">Mehea</translation>
    </message>
    <message>
        <source>Normal</source>
        <translation type="unfinished">Normala</translation>
    </message>
    <message>
        <source>Wide</source>
        <translation type="unfinished">Zabala</translation>
    </message>
    <message>
        <source>Style:</source>
        <translation type="unfinished">Estiloa:</translation>
    </message>
    <message>
        <source>Solid</source>
        <translation type="unfinished">Lisoa</translation>
    </message>
    <message>
        <source>Dashed</source>
        <translation type="unfinished">Marratxoduna</translation>
    </message>
    <message>
        <source>Underline</source>
        <translation type="unfinished">Azpimarra</translation>
    </message>
    <message>
        <source>Beveled</source>
        <translation type="unfinished">Alakatua</translation>
    </message>
    <message>
        <source>Inset</source>
        <translation type="unfinished">Barnekoa</translation>
    </message>
    <message>
        <source>Other</source>
        <translation type="unfinished">Bestelakoak</translation>
    </message>
    <message>
        <source>Read Only</source>
        <translation type="unfinished">Irakurtzeko soilik</translation>
    </message>
    <message>
        <source>Required</source>
        <translation type="unfinished">Beharrezkoa</translation>
    </message>
    <message>
        <source>Don&apos;t Export Value</source>
        <translation type="unfinished">Ez esportatu balioa</translation>
    </message>
    <message>
        <source>Visibility:</source>
        <translation type="unfinished">Ikusgaitasuna:</translation>
    </message>
    <message>
        <source>Visible</source>
        <translation type="unfinished">Ikusgai</translation>
    </message>
    <message>
        <source>Hidden</source>
        <translation type="unfinished">Ezkutatuta</translation>
    </message>
    <message>
        <source>No Print</source>
        <translation type="unfinished">Inprimatzerik ez</translation>
    </message>
    <message>
        <source>No View</source>
        <translation type="unfinished">Ikuspegirik ez</translation>
    </message>
    <message>
        <source>Appearance</source>
        <translation type="unfinished">Itxura</translation>
    </message>
    <message>
        <source>Text for Button Down</source>
        <translation type="unfinished">Behera joateko botoiaren testua</translation>
    </message>
    <message>
        <source>Text for Roll Over</source>
        <translation type="unfinished">Buelta emateko testua</translation>
    </message>
    <message>
        <source>Icons</source>
        <translation type="unfinished">Ikonoak</translation>
    </message>
    <message>
        <source>Use Icons</source>
        <translation type="unfinished">Erabili ikonoak</translation>
    </message>
    <message>
        <source>Remove</source>
        <translation type="unfinished">Kendu</translation>
    </message>
    <message>
        <source>Pressed</source>
        <translation type="unfinished">Sakatuta</translation>
    </message>
    <message>
        <source>Roll Over</source>
        <translation type="unfinished">Eman buelta</translation>
    </message>
    <message>
        <source>Icon Placement...</source>
        <translation type="unfinished">Ikonoaren kokalekua...</translation>
    </message>
    <message>
        <source>Highlight</source>
        <translation type="unfinished">Nabarmendu</translation>
    </message>
    <message>
        <source>Invert</source>
        <translation type="unfinished">Alderantzikatu</translation>
    </message>
    <message>
        <source>Outlined</source>
        <translation type="unfinished">Kanpoko ertza</translation>
    </message>
    <message>
        <source>Push</source>
        <translation type="unfinished">Bultza</translation>
    </message>
    <message>
        <source>Multi-Line</source>
        <translation type="unfinished">Marra anizkoitza</translation>
    </message>
    <message>
        <source>Password</source>
        <translation type="unfinished">Pasahitza</translation>
    </message>
    <message>
        <source>Limit of</source>
        <translation type="unfinished">Muga:</translation>
    </message>
    <message>
        <source>Characters</source>
        <translation type="unfinished">Karaktere</translation>
    </message>
    <message>
        <source>Do Not Scroll</source>
        <translation type="unfinished">Ez korritu</translation>
    </message>
    <message>
        <source>Do Not Spell Check</source>
        <translation type="unfinished">Ez egiaztatu ortografia</translation>
    </message>
    <message>
        <source>Check Style:</source>
        <translation type="unfinished">Egiaztatu estiloa:</translation>
    </message>
    <message>
        <source>Check</source>
        <translation type="unfinished">Egiaztatu</translation>
    </message>
    <message>
        <source>Cross</source>
        <translation type="unfinished">Gurutzea</translation>
    </message>
    <message>
        <source>Diamond</source>
        <translation type="unfinished">Diamantea</translation>
    </message>
    <message>
        <source>Circle</source>
        <translation type="unfinished">Zirkulua</translation>
    </message>
    <message>
        <source>Star</source>
        <translation type="unfinished">Izarra</translation>
    </message>
    <message>
        <source>Square</source>
        <translation type="unfinished">Karratua</translation>
    </message>
    <message>
        <source>Default is Checked</source>
        <translation type="unfinished">Lehenetsia egiaztatuta dago</translation>
    </message>
    <message>
        <source>Editable</source>
        <translation type="unfinished">Editagarria</translation>
    </message>
    <message>
        <source>Options</source>
        <translation type="unfinished">Aukerak</translation>
    </message>
    <message>
        <source>Java Script</source>
        <translation type="unfinished">Java Script</translation>
    </message>
    <message>
        <source>Go To</source>
        <translation type="unfinished">Joan</translation>
    </message>
    <message>
        <source>Submit Form</source>
        <translation type="unfinished">Bidali inprimakia</translation>
    </message>
    <message>
        <source>Reset Form</source>
        <translation type="unfinished">Berrezarri forma</translation>
    </message>
    <message>
        <source>Import Data</source>
        <translation type="unfinished">Inportatu datuak</translation>
    </message>
    <message>
        <source>Event:</source>
        <translation type="unfinished">Gertaera:</translation>
    </message>
    <message>
        <source>Mouse Up</source>
        <translation type="unfinished">Sagua gora</translation>
    </message>
    <message>
        <source>Mouse Down</source>
        <translation type="unfinished">Sagua behera</translation>
    </message>
    <message>
        <source>Mouse Enter</source>
        <translation type="unfinished">Sagua sartu</translation>
    </message>
    <message>
        <source>Mouse Exit</source>
        <translation type="unfinished">Sagua irten</translation>
    </message>
    <message>
        <source>On Focus</source>
        <translation type="unfinished">Enfokatuta:</translation>
    </message>
    <message>
        <source>On Blur</source>
        <translation type="unfinished">Lausotuta</translation>
    </message>
    <message>
        <source>Script:</source>
        <translation type="unfinished">Script-a:</translation>
    </message>
    <message>
        <source>Edit...</source>
        <translation type="unfinished">Editatu...</translation>
    </message>
    <message>
        <source>Submit to URL:</source>
        <translation type="unfinished">Bidali URL honetara:</translation>
    </message>
    <message>
        <source>Submit Data as HTML</source>
        <translation type="unfinished">Bidali datuak HTML gisa</translation>
    </message>
    <message>
        <source>Import Data from:</source>
        <translation type="unfinished">Inportatu datuak hemendik:</translation>
    </message>
    <message>
        <source>Destination</source>
        <translation type="unfinished">Helburua</translation>
    </message>
    <message>
        <source>To File:</source>
        <translation type="unfinished">Fitxategira:</translation>
    </message>
    <message>
        <source>Change...</source>
        <translation type="unfinished">Aldatu...</translation>
    </message>
    <message>
        <source>Page:</source>
        <translation type="unfinished">Orrialdea:</translation>
    </message>
    <message>
        <source>X-Pos:</source>
        <translation type="unfinished">X posizioa:</translation>
    </message>
    <message>
        <source> pt</source>
        <translation type="unfinished"> pt</translation>
    </message>
    <message>
        <source>Y-Pos:</source>
        <translation type="unfinished">Y posizioa:</translation>
    </message>
    <message>
        <source>Action</source>
        <translation type="unfinished">Ekintza</translation>
    </message>
    <message>
        <source>Field is formatted as:</source>
        <translation type="unfinished">Eremuak formatu hau du:</translation>
    </message>
    <message>
        <source>Plain</source>
        <translation type="unfinished">Soila</translation>
    </message>
    <message>
        <source>Number</source>
        <translation type="unfinished">Zenbakia</translation>
    </message>
    <message>
        <source>Percentage</source>
        <translation type="unfinished">Ehunekoa</translation>
    </message>
    <message>
        <source>Date</source>
        <translation type="unfinished">Data</translation>
    </message>
    <message>
        <source>Time</source>
        <translation type="unfinished">Ordua</translation>
    </message>
    <message>
        <source>Custom</source>
        <translation type="unfinished">Pertsonalizatua</translation>
    </message>
    <message>
        <source>Number Format</source>
        <translation type="unfinished">Zenbaki-formatua</translation>
    </message>
    <message>
        <source>Decimals:</source>
        <translation type="unfinished">Hamartarrak:</translation>
    </message>
    <message>
        <source>Use Currency Symbol</source>
        <translation type="unfinished">Erabili moneta-ikurra</translation>
    </message>
    <message>
        <source>Prepend Currency Symbol</source>
        <translation type="unfinished">Erantsi moneta-ikurra</translation>
    </message>
    <message>
        <source>Formatting</source>
        <translation type="unfinished">Formatua</translation>
    </message>
    <message>
        <source>Percent Format</source>
        <translation type="unfinished">Ehuneko-formatua</translation>
    </message>
    <message>
        <source>Date Format</source>
        <translation type="unfinished">Data-formatua</translation>
    </message>
    <message>
        <source>Time Format</source>
        <translation type="unfinished">Ordu-formatua</translation>
    </message>
    <message>
        <source>Custom Scripts</source>
        <translation type="unfinished">Script pertsonalizatuak</translation>
    </message>
    <message>
        <source>Format:</source>
        <translation type="unfinished">Formatua:</translation>
    </message>
    <message>
        <source>Keystroke:</source>
        <translation type="unfinished">Tekla-sakatzea:</translation>
    </message>
    <message>
        <source>Format</source>
        <translation type="unfinished">Formatua</translation>
    </message>
    <message>
        <source>Value is not validated</source>
        <translation type="unfinished">Balioa balidatu gabe dago</translation>
    </message>
    <message>
        <source>Value must be greater than or equal to:</source>
        <translation type="unfinished">Balioak honen berdina edo handiagoa izan behar du:</translation>
    </message>
    <message>
        <source>and less or equal to:</source>
        <translation type="unfinished">edo honen berdina edo txikiagoa:</translation>
    </message>
    <message>
        <source>Custom validate script:</source>
        <translation type="unfinished">Script-aren balidazio pertsonalizatua:</translation>
    </message>
    <message>
        <source>Validate</source>
        <translation type="unfinished">Balidatu</translation>
    </message>
    <message>
        <source>Value is not calculated</source>
        <translation type="unfinished">Balioa kalkulatu gabe dago</translation>
    </message>
    <message>
        <source>Value is the</source>
        <translation type="unfinished">Balioa hau da:</translation>
    </message>
    <message>
        <source>sum</source>
        <translation type="unfinished">batuketa</translation>
    </message>
    <message>
        <source>product</source>
        <translation type="unfinished">produktua</translation>
    </message>
    <message>
        <source>average</source>
        <translation type="unfinished">batez bestekoa</translation>
    </message>
    <message>
        <source>minimum</source>
        <translation type="unfinished">gutxienekoa</translation>
    </message>
    <message>
        <source>maximum</source>
        <translation type="unfinished">gehienezkoa</translation>
    </message>
    <message>
        <source>of the following fields:</source>
        <translation type="unfinished">eremu hauena:</translation>
    </message>
    <message>
        <source>Pick...</source>
        <translation type="unfinished">Aukeratu...</translation>
    </message>
    <message>
        <source>Custom calculation script:</source>
        <translation type="unfinished">Script-aren kalkulu pertsonalizatua:</translation>
    </message>
    <message>
        <source>Calculate</source>
        <translation type="unfinished">Kalkulatu</translation>
    </message>
    <message>
        <source>OK</source>
        <translation type="unfinished">Ados</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation type="unfinished">Utzi</translation>
    </message>
    <message>
        <source>Flag is ignored for PDF 1.3</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Enter a comma separated list of fields here</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>You need at least the Icon for Normal to use Icons for Buttons</source>
        <translation type="unfinished">Gutxienez normalaren ikonoa behar duzu botoien ikonoak erabiltzeko</translation>
    </message>
    <message>
        <source>Open</source>
        <translation type="unfinished">Ireki</translation>
    </message>
    <message>
        <source>Images (*.tif *.png *.jpg *.xpm);;Postscript (*.eps);;All Files (*)</source>
        <translation type="unfinished">Irudiak (*.tif *.png *.jpg *.xpm);;Postscript (*.eps);;Fitxategi guztiak (*)</translation>
    </message>
    <message>
        <source>Example:</source>
        <translation type="unfinished">Adibidea:</translation>
    </message>
    <message>
        <source>Selection Change</source>
        <translation type="unfinished">Hautapen-aldaketa</translation>
    </message>
    <message>
        <source>PDF Files (*.pdf);;All Files (*)</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>Annota</name>
    <message>
        <source>Annotation Properties</source>
        <translation type="unfinished">Oharpen-propietateak</translation>
    </message>
    <message>
        <source>Text</source>
        <translation type="unfinished">Testua</translation>
    </message>
    <message>
        <source>Link</source>
        <translation type="unfinished">Esteka</translation>
    </message>
    <message>
        <source>External Link</source>
        <translation type="unfinished">Kanpoko esteka</translation>
    </message>
    <message>
        <source>External Web-Link</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Destination</source>
        <translation type="unfinished">Helburua</translation>
    </message>
    <message>
        <source> pt</source>
        <translation type="unfinished"> pt</translation>
    </message>
    <message>
        <source>Open</source>
        <translation type="unfinished">Ireki</translation>
    </message>
    <message>
        <source>PDF-Documents (*.pdf);;All Files (*)</source>
        <translation type="unfinished">Dokumentuak (*.pdf);; Fitxategi guztiak (*)</translation>
    </message>
    <message>
        <source>&amp;Type:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>C&amp;hange...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Page:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;X-Pos</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Y-Pos:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ApplyT</name>
    <message>
        <source>Apply Template</source>
        <translation type="unfinished">Aplikatu txantiloia</translation>
    </message>
    <message>
        <source>&amp;Template:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Normal</source>
        <translation type="unfinished">Normala</translation>
    </message>
    <message>
        <source>Apply to &amp;Current Page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Apply to all &amp;even Pages</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Apply to all &amp;odd Pages</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Apply from &amp;Page:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>To:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>Biblio</name>
    <message>
        <source>Scrapbook</source>
        <translation type="unfinished">Berri laburren albuma</translation>
    </message>
    <message>
        <source>&amp;New</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Load...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Save</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Save &amp;As...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Small</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Medium</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Large</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;File</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Preview</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Scrapbooks (*.scs);;All Files (*)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Rename</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Delete</source>
        <translation type="unfinished">Ezabatu</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation type="unfinished">Abisua</translation>
    </message>
    <message>
        <source>Name &quot;%1&quot; isn&apos;t unique.
Please choose another.</source>
        <translation type="unfinished">&quot;%1&quot; izena badago lehendik ere.
Aukeratu beste bat.</translation>
    </message>
    <message>
        <source>OK</source>
        <translation type="unfinished">Ados</translation>
    </message>
    <message>
        <source>Object</source>
        <translation type="unfinished">Objektua</translation>
    </message>
    <message>
        <source>&amp;Name:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>New Entry</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>BookMView</name>
    <message>
        <source>Bookmarks</source>
        <translation type="unfinished">Laster-markak</translation>
    </message>
    <message>
        <source>Move Bookmark</source>
        <translation type="unfinished">Lekuz aldatu laster-marka</translation>
    </message>
    <message>
        <source>Insert Bookmark</source>
        <translation type="unfinished">Txertatu laster-marka</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation type="unfinished">Utzi</translation>
    </message>
</context>
<context>
    <name>BookPalette</name>
    <message>
        <source>Bookmarks</source>
        <translation type="unfinished">Laster-markak</translation>
    </message>
</context>
<context>
    <name>ButtonIcon</name>
    <message>
        <source>Icon Placement</source>
        <translation type="unfinished">Ikonoaren kokalekua</translation>
    </message>
    <message>
        <source>Layout:</source>
        <translation type="unfinished">Diseinua:</translation>
    </message>
    <message>
        <source>Caption only</source>
        <translation type="unfinished">Epigrafea bakarrik</translation>
    </message>
    <message>
        <source>Icon only</source>
        <translation type="unfinished">Ikonoa bakarrik</translation>
    </message>
    <message>
        <source>Caption below Icon</source>
        <translation type="unfinished">Ikonoaren azpiko epigrafea</translation>
    </message>
    <message>
        <source>Caption above Icon</source>
        <translation type="unfinished">Ikonoaren gaineko epigrafea</translation>
    </message>
    <message>
        <source>Caption right to Icon</source>
        <translation type="unfinished">Ikonoaren eskuineko epigrafea</translation>
    </message>
    <message>
        <source>Caption left to Icon</source>
        <translation type="unfinished">Ikonoaren ezkerreko epigrafea</translation>
    </message>
    <message>
        <source>Caption overlays Icon</source>
        <translation type="unfinished">Epigrafeak ikonoa gainjartzen du</translation>
    </message>
    <message>
        <source>Scale:</source>
        <translation type="unfinished">Eskalatu:</translation>
    </message>
    <message>
        <source>Always</source>
        <translation type="unfinished">Beti</translation>
    </message>
    <message>
        <source>When Icon is too small</source>
        <translation type="unfinished">Ikonoa txikiegia denean</translation>
    </message>
    <message>
        <source>When Icon is too big</source>
        <translation type="unfinished">Ikonoa handiegia denean</translation>
    </message>
    <message>
        <source>Never</source>
        <translation type="unfinished">Inoiz ez</translation>
    </message>
    <message>
        <source>Scale How:</source>
        <translation type="unfinished">Eskalatu horrela:</translation>
    </message>
    <message>
        <source>Proportional</source>
        <translation type="unfinished">proportzionalki</translation>
    </message>
    <message>
        <source>Non Proportional</source>
        <translation type="unfinished">ez-proportzionalki</translation>
    </message>
    <message>
        <source>Icon</source>
        <translation type="unfinished">Ikonoa</translation>
    </message>
    <message>
        <source>OK</source>
        <translation type="unfinished">Ados</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation type="unfinished">Utzi</translation>
    </message>
    <message>
        <source>Reset</source>
        <translation type="unfinished">Berrezarri</translation>
    </message>
</context>
<context>
    <name>CMSPrefs</name>
    <message>
        <source>Color Management Settings</source>
        <translation type="unfinished">Koloreak kudeatzeko ezarpenak</translation>
    </message>
    <message>
        <source>&amp;Activate Color Management</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>System Profiles</source>
        <translation type="unfinished">Sistemaren profilak</translation>
    </message>
    <message>
        <source>&amp;Pictures:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Solid Colors:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Monitor:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>P&amp;rinter:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Rendering Intents</source>
        <translation type="unfinished">Errendatze-modua</translation>
    </message>
    <message>
        <source>Perceptual</source>
        <translation type="unfinished">Pertzepziokoa</translation>
    </message>
    <message>
        <source>Relative Colorimetric</source>
        <translation type="unfinished">Koloremetria erlatiboa</translation>
    </message>
    <message>
        <source>Saturation</source>
        <translation type="unfinished">Saturazioa</translation>
    </message>
    <message>
        <source>Absolute Colorimetric</source>
        <translation type="unfinished">Koloremetria absolutua</translation>
    </message>
    <message>
        <source>M&amp;onitor:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Pr&amp;inter:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Sim&amp;ulate Printer on the Screen</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Mark Colors out of &amp;Gamut</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Use &amp;Blackpoint Compensation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Default color profile for imported images</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Default color profile for solid colors on the page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color profile that you have generated or received from the manufacturer.
This profile should be specific to your monitor and not a generic profile (i.e. sRGB).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color profile for your printer model from the manufacturer.
This profile should be specific to your printer and not a generic profile (i.e. sRGB).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Default rendering intent for your monitor. Unless you know why to change it,
Relative Colorimetric or Perceptual should be chosen.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Default rendering intent for your printer. Unless you know why to change it,
Relative Colorimetric or Perceptual should be chosen.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Enable &apos;soft proofing&apos; of how your document colors will print,
based on the chosen printer profile.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Method of showing colors on the screen which may not print properly.
This requires very accurate profiles and serves only as a warning.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Black Point Compensation is a method of improving contrast in photos.
It is recommended that you enable this if you have photos in your document.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>CMYKChoose</name>
    <message>
        <source>Edit Color</source>
        <translation type="unfinished">Editatu kolorea</translation>
    </message>
    <message>
        <source>&amp;Name:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color &amp;Model</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>CMYK</source>
        <translation type="unfinished">CMYK</translation>
    </message>
    <message>
        <source>RGB</source>
        <translation type="unfinished">RVB</translation>
    </message>
    <message>
        <source>Web Safe RGB</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>New</source>
        <translation type="unfinished">Berria</translation>
    </message>
    <message>
        <source>Old</source>
        <translation type="unfinished">Zaharra</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>HSV-Colormap</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>C:</source>
        <translation type="unfinished">C:</translation>
    </message>
    <message>
        <source> %</source>
        <translation type="unfinished"> %</translation>
    </message>
    <message>
        <source>M:</source>
        <translation type="unfinished">M:</translation>
    </message>
    <message>
        <source>Y:</source>
        <translation type="unfinished">Y:</translation>
    </message>
    <message>
        <source>K:</source>
        <translation type="unfinished">K:</translation>
    </message>
    <message>
        <source>Dynamic Color Bars</source>
        <translation type="unfinished">Kolore-barra dinamikoak</translation>
    </message>
    <message>
        <source>Static Color Bars</source>
        <translation type="unfinished">Kolore-barra estatikoak</translation>
    </message>
    <message>
        <source>R:</source>
        <translation type="unfinished">G:</translation>
    </message>
    <message>
        <source>G:</source>
        <translation type="unfinished">B:</translation>
    </message>
    <message>
        <source>B:</source>
        <translation type="unfinished">U:</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation type="unfinished">Abisua</translation>
    </message>
    <message>
        <source>Name of the Color is not unique</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>OK</source>
        <translation type="unfinished">Ados</translation>
    </message>
    <message>
        <source>None</source>
        <translation type="unfinished">Bat ere ez</translation>
    </message>
    <message>
        <source>You cannot create a color named &quot;%1&quot;.
It&apos;s a reserved name for transparent color</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ChooseStyles</name>
    <message>
        <source>Choose Styles</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Available Styles</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>OK</source>
        <translation type="unfinished">Ados</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation type="unfinished">Utzi</translation>
    </message>
</context>
<context>
    <name>Cpalette</name>
    <message>
        <source>Shade:</source>
        <translation type="unfinished">Itzala:</translation>
    </message>
    <message>
        <source> %</source>
        <translation type="unfinished"> %</translation>
    </message>
    <message>
        <source>Opacity:</source>
        <translation type="unfinished">Opakutasuna</translation>
    </message>
    <message>
        <source>Normal</source>
        <translation type="unfinished">Normala</translation>
    </message>
    <message>
        <source>Horizontal Gradient</source>
        <translation type="unfinished">Gradiente horizontala</translation>
    </message>
    <message>
        <source>Vertical Gradient</source>
        <translation type="unfinished">Gradiente bertikala</translation>
    </message>
    <message>
        <source>Diagonal Gradient</source>
        <translation type="unfinished">Gradiente diagonala</translation>
    </message>
    <message>
        <source>Cross Diagonal Gradient</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Radial Gradient</source>
        <translation type="unfinished">Gradiente biribila</translation>
    </message>
    <message>
        <source>Free linear Gradient</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Free radial Gradient</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>X1:</source>
        <translation type="unfinished">X1 :</translation>
    </message>
    <message>
        <source>Y1:</source>
        <translation type="unfinished">Y1 :</translation>
    </message>
    <message>
        <source> pt</source>
        <translation type="unfinished"> pt</translation>
    </message>
    <message>
        <source>X2:</source>
        <translation type="unfinished">X2 :</translation>
    </message>
    <message>
        <source>Y2:</source>
        <translation type="unfinished">Y2 :</translation>
    </message>
    <message>
        <source>Edit Line Color Properties</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Edit Fill Color Properties</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Saturation of color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Normal or gradient fill method</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Set the transparency for the color selected</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color of selected object</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>None</source>
        <translation type="unfinished">Bat ere ez</translation>
    </message>
    <message>
        <source> mm</source>
        <translation type="unfinished"> mm</translation>
    </message>
    <message>
        <source> in</source>
        <translation type="unfinished"> in</translation>
    </message>
    <message>
        <source> p</source>
        <translation type="unfinished"> p</translation>
    </message>
</context>
<context>
    <name>CsvDialog</name>
    <message>
        <source>CSV Importer Options</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Field delimiter:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>(TAB)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Value delimiter:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>None</source>
        <translation type="unfinished">Bat ere ez</translation>
    </message>
    <message>
        <source>First row is a header</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>OK</source>
        <translation type="unfinished">Ados</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation type="unfinished">Utzi</translation>
    </message>
</context>
<context>
    <name>CupsOptions</name>
    <message>
        <source>Printer Options</source>
        <translation type="unfinished">Inprimagailuaren aukerak</translation>
    </message>
    <message>
        <source>Page Set</source>
        <translation type="unfinished">Orrialde-ezarpena</translation>
    </message>
    <message>
        <source>All Pages</source>
        <translation type="unfinished">Orrialde guztiak</translation>
    </message>
    <message>
        <source>Even Pages only</source>
        <translation type="unfinished">Orrialde bikoitiak soilik</translation>
    </message>
    <message>
        <source>Odd Pages only</source>
        <translation type="unfinished">Orrialde bakoitiak soilik</translation>
    </message>
    <message>
        <source>Mirror</source>
        <translation type="unfinished">Ispilua</translation>
    </message>
    <message>
        <source>No</source>
        <translation type="unfinished">Ez</translation>
    </message>
    <message>
        <source>Yes</source>
        <translation type="unfinished">Bai</translation>
    </message>
    <message>
        <source>Orientation</source>
        <translation type="unfinished">Orientazioa</translation>
    </message>
    <message>
        <source>Portrait</source>
        <translation type="unfinished">Bertikala</translation>
    </message>
    <message>
        <source>Landscape</source>
        <translation type="unfinished">Horizontala</translation>
    </message>
    <message>
        <source>N-Up Printing</source>
        <translation type="unfinished">N-Up inprimatzea</translation>
    </message>
    <message>
        <source>Page per Sheet</source>
        <translation type="unfinished">Orrialde orriko</translation>
    </message>
    <message>
        <source>Pages per Sheet</source>
        <translation type="unfinished">Orrialde orriko</translation>
    </message>
    <message>
        <source>Option</source>
        <translation type="unfinished">Aukerak</translation>
    </message>
    <message>
        <source>Value</source>
        <translation type="unfinished">Balioa</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>This panel displays various CUPS options when printing. 
The exact parameters available will depend on your printer driver.
You can confirm CUPS support by selecting Help &gt; About.
Look for the listings: C-C-T These equate to C=CUPS C=littlecms T=TIFF support.
Missing library support is indicated by a *</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>CustomFDialog</name>
    <message>
        <source>&amp;Compress File</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Include Fonts</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Encoding:</source>
        <translation type="unfinished">Kodeketa:</translation>
    </message>
    <message>
        <source>Moves to your Document Directory.
This can be set in the Preferences.</source>
        <translation type="unfinished">Zure dokumentuaren historiara joaten da.
Hau hobespenetan ezar dezakezu.</translation>
    </message>
</context>
<context>
    <name>DelColor</name>
    <message>
        <source>Delete Color</source>
        <translation type="unfinished">Ezabatu kolorea</translation>
    </message>
    <message>
        <source>Delete color:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>?</source>
        <translation type="unfinished">?</translation>
    </message>
    <message>
        <source>Replace it with:</source>
        <translation type="unfinished">Ordeztu honekin:</translation>
    </message>
    <message>
        <source>OK</source>
        <translation type="obsolete">Ados</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation type="obsolete">Utzi</translation>
    </message>
    <message>
        <source>None</source>
        <translation type="unfinished">Bat ere ez</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>DelPages</name>
    <message>
        <source>Delete Pages</source>
        <translation type="unfinished">Ezabatu orrialdeak</translation>
    </message>
    <message>
        <source>Delete from:</source>
        <translation type="unfinished">Ezabatu hemendik:</translation>
    </message>
    <message>
        <source>to:</source>
        <translation type="unfinished">hona:</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>DmF</name>
    <message>
        <source>Missing Font</source>
        <translation type="unfinished">Letra-tipoa falta da</translation>
    </message>
    <message>
        <source>The Font %1 is not installed.</source>
        <translation type="unfinished">%1 letra-tipoa ez dago instalatuta.</translation>
    </message>
    <message>
        <source>Use</source>
        <translation type="unfinished">Erabili</translation>
    </message>
    <message>
        <source>instead</source>
        <translation type="unfinished">horren ordez</translation>
    </message>
    <message>
        <source>OK</source>
        <translation type="unfinished">Ados</translation>
    </message>
</context>
<context>
    <name>DocInfos</name>
    <message>
        <source>Document Information</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Title:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Author:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Keywords:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Descri&amp;ption:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>P&amp;ublisher:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Contributors:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Dat&amp;e:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>T&amp;ype:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>F&amp;ormat:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Identi&amp;fier:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Source:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Language:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Relation:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Co&amp;verage:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Ri&amp;ghts:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Document</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Further &amp;Information</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The person or organisation primarily responsible for making the content of the document.
This field can be embedded in the Scribus document for reference, as well as in the metadata of a PDF</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>A name given to the document.
This field can be embedded in the Scribus document for reference, as well as in the metadata of a PDF</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>An account of the content of the document.
This field is for a brief description or abstract of the document. It is embedded in the PDF on export</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The topic of the content of the document.
This field is for document keywords you wish to embed in a PDF, to assist searches and indexing of PDF files</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>A person or organisation responsible for making the document available</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>A person or organisation responsible for making contributions to the content of the document</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>A date associated with an event in the life cycle of the document, in YYYY-MM-DD format, as per ISO 8601</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The nature or genre of the content of the document, eg. categories, functions, genres, etc</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The physical or digital manifestation of the document. Media type and dimensions would be worth noting.
RFC2045,RFC2046 for MIME types are also useful here</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>An unambiguous reference to the document within a given context such as ISBN or URI</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>A reference to a document from which the present document is derived, eg. ISBN or URI</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The language in which the content of the document is written, usually a ISO-639 language code
optionally suffixed with a hypen and an ISO-3166 country code, eg. en-GB, fr-CH</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>A reference to a related document, possibly using a formal identifier such as a ISBN or URI</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The extent or scope of the content of the document, possibly including location, time and jurisdiction ranges</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Information about rights held in and over the document, eg. copyright, patent or trademark</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>Druck</name>
    <message>
        <source>Setup Printer</source>
        <translation type="unfinished">Konfiguratu inprimagailua</translation>
    </message>
    <message>
        <source>Print Destination</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>File</source>
        <translation type="unfinished">Fitxategia</translation>
    </message>
    <message>
        <source>&amp;Options...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;File:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>C&amp;hange...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>A&amp;lternative Printer Command</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Use an alternative print manager, such as kprinter or gtklp,
to utilize additional printing options</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Co&amp;mmand:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Range</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Print &amp;All</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Print Current Pa&amp;ge</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Print &amp;Range</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Insert a comma separated list of tokens where
a token can be * for all the pages, 1-5 for
a range of pages or a single page number.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>N&amp;umber of Copies:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Options</source>
        <translation type="unfinished">Aukerak</translation>
    </message>
    <message>
        <source>Print &amp;Normal</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Print &amp;Separations</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>All</source>
        <translation type="unfinished">Denak</translation>
    </message>
    <message>
        <source>Cyan</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Magenta</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Yellow</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Black</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Pr&amp;int In Color If Available</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Print In Gra&amp;yscale</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Ad&amp;vanced Options...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Print</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Save as</source>
        <translation type="unfinished">Gorde honela</translation>
    </message>
    <message>
        <source>Postscript-Files (*.ps);;All Files (*)</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>EPSPlug</name>
    <message>
        <source>Importing File:
%1
failed!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Fatal Error</source>
        <translation type="unfinished">Errore larria</translation>
    </message>
</context>
<context>
    <name>EditMacroDialog</name>
    <message>
        <source>Editing Macro: &lt;b&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Scribus - Macro Manager</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The file &apos;%1&apos; already exists.
Are you sure you want to overwrite it?
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>You have already edited this macro.
Are you sure you want to discard all your changes?
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>A full traceback follows:

%1
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Compilation of the macro failed, so it can not 
be saved in its current form. The error was:
%1
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Scribus - New Macro</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;qt&gt;This is the Edit Macro / New Macro dialog box. Here you can change the source code to macros. Edit the source code to the macro in the text editing area below the &quot;Source Code&quot; label and click OK to save your changes to the macro.&lt;/qt&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Source Code:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Editing Macro:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The name of the macro being edited.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;/qt&gt;This item displays the name of the macro you are currently editing.&lt;qt&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt+C</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;qt&gt;Discard all changes and exit.&lt;/qt&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;qt&gt;Exit the editing dialog, discarding all changes you have made. If you want to exit without saving the macro but don&apos;t want to lose your changes, save your changes with &quot;Save Source As...&quot;.&lt;/qt&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Ok</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt+O</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;qt&gt;Save changes and exit.&lt;/qt&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;qt&gt;Save changes to the macro and exit. If there is a problem with the macro, a message will be displayed and the editing dialog will not close.&lt;/qt&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;qt&gt;This text area contains the source code of the macro. If you&apos;re creating a new macro there won&apos;t be anything in it, and if you&apos;re editing an existing macro the source code the macro was defined with will be shown here.&lt;/qt&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Load Source ...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt+L</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;qt&gt;Replace the current source code with code from a file.&lt;/qt&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;qt&gt;Load new source code into the editing area from &quot;file&quot;. Any source code in the editing area is replaced. The loaded source must be a Scribus macro function. If you load any other script, you&apos;ll need to edit it so that it&apos;ll work as a scripter macro before saving it.&lt;/qt&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Save Source As...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt+S</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;qt&gt;Save the source code being edited to a file.&lt;/qt&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Save the source code - the text - of the macro to a file. You can edit the saved source and load it again with &quot;Load Source...&quot;.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Python source files (.py)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Save File Dialog</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Save macro source</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Open File Dialog</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Select the source file to load</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>EditStyle</name>
    <message>
        <source>Edit Style</source>
        <translation type="unfinished">Editatu estiloa</translation>
    </message>
    <message>
        <source>&amp;Name:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Character</source>
        <translation type="unfinished">Karakterea</translation>
    </message>
    <message>
        <source>&amp;Font:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> pt</source>
        <translation type="unfinished"> pt</translation>
    </message>
    <message>
        <source>Si&amp;ze:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Effect:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Alignment:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Drop Caps</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Lines:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>F&amp;ill Color:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>St&amp;roke Color:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>None</source>
        <translation type="unfinished">Bat ere ez</translation>
    </message>
    <message>
        <source>Vertical Spaces</source>
        <translation type="unfinished">Tarte bertikalak</translation>
    </message>
    <message>
        <source>Adjust to Baseline &amp;Grid</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Line &amp;Spacing:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Abo&amp;ve:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Below:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Tabulators and Indentation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Name of your paragraph style</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Font of selected text or object</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Font Size</source>
        <translation type="unfinished">Letra-tamaina</translation>
    </message>
    <message>
        <source>Color of text fill</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color of text stroke</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Provides an oversized first letter for a paragraph. Used for stylistic effect</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Determines the overall height, in line numbers, of the Drop Caps</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Align text to baseline grid</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Spacing above the paragraph</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Spacing below the paragraph</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Line Spacing</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> mm</source>
        <translation type="unfinished"> mm</translation>
    </message>
    <message>
        <source> in</source>
        <translation type="unfinished"> in</translation>
    </message>
    <message>
        <source> p</source>
        <translation type="unfinished"> p</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation type="unfinished">Abisua</translation>
    </message>
    <message>
        <source>Name of the Style is not unique</source>
        <translation type="unfinished">Estiloaren izena ez da bakarra</translation>
    </message>
    <message>
        <source>OK</source>
        <translation type="unfinished">Ados</translation>
    </message>
</context>
<context>
    <name>Editor</name>
    <message>
        <source>Editor</source>
        <translation type="unfinished">Editorea</translation>
    </message>
    <message>
        <source>&amp;New</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Open...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Save &amp;As...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Save and Exit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Exit without Saving</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Undo</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Redo</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cu&amp;t</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Copy</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Paste</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>C&amp;lear</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Get Field Names</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;File</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Edit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Javascripts (*.js);;All Files (*)</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ExportForm</name>
    <message>
        <source>Choose a Export Directory</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Export as Image(s)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Export to Directory:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>C&amp;hange...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Options</source>
        <translation type="unfinished">Aukerak</translation>
    </message>
    <message>
        <source>Image &amp;Type:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Quality:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Resolution:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> %</source>
        <translation type="unfinished"> %</translation>
    </message>
    <message>
        <source> dpi</source>
        <translation type="unfinished"> dpi</translation>
    </message>
    <message>
        <source>Range</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Current page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;All pages</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Range</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>C</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Export a range of pages</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Insert a comma separated list of tokens where
a token can be * for all the pages, 1-5 for
a range of pages or a single page number.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Export all pages</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Export only the current page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Resolution of the Images
Use 72 dpi for Images intended for the Screen</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The quality of your images - 100% is the best, 1% the lowest quality</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Available export formats</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The output directory - the place to store your images.
Name of the export file will be &apos;documentname-pagenumber.filetype&apos;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Change the output directory</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Size:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Size of the images. 100% for no changes, 200% for two times larger etc.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>FDialogPreview</name>
    <message>
        <source>Size:</source>
        <translation type="unfinished">Tamaina:</translation>
    </message>
    <message>
        <source>Title:</source>
        <translation type="unfinished">Izenburua:</translation>
    </message>
    <message>
        <source>No Title</source>
        <translation type="unfinished">Izenbururik ez</translation>
    </message>
    <message>
        <source>Author:</source>
        <translation type="unfinished">Egilea:</translation>
    </message>
    <message>
        <source>Unknown</source>
        <translation type="unfinished">Ezezaguna</translation>
    </message>
    <message>
        <source>Scribus Document</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>Farbmanager</name>
    <message>
        <source>Colors</source>
        <translation type="unfinished">Koloreak</translation>
    </message>
    <message>
        <source>&amp;Append</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;New</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Edit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>D&amp;uplicate</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Remove Unused</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color Sets</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Current Color Set:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Save Color Set</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Choose a color set to load</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Save the current color set</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Remove unused colors from current document&apos;s color set</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Append colors to the current set from an existing document</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Create a new color within the current set</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Edit the currently selected color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Make a copy of the currently selected color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Delete the currently selected color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Make the current colorset the default color set</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Name:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Choose a Name</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Open</source>
        <translation type="unfinished">Ireki</translation>
    </message>
    <message>
        <source>Documents (*.sla *.sla.gz *.scd *.scd.gz);;All Files (*)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Documents (*.sla *.scd);;All Files (*)</source>
        <translation type="unfinished">Dokumentuak (*.sla *.scd);; Fitxategi guztiak (*)</translation>
    </message>
    <message>
        <source>Copy of %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>New Color</source>
        <translation type="unfinished">Kolore berria</translation>
    </message>
    <message>
        <source>None</source>
        <translation type="unfinished">Bat ere ez</translation>
    </message>
</context>
<context>
    <name>FontPrefs</name>
    <message>
        <source>Global Font Settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Available Fonts</source>
        <translation type="unfinished">Erabilgarri dauden letra-tipoak:</translation>
    </message>
    <message>
        <source>Font Substitutions</source>
        <translation type="unfinished">Letra-tipoen ordezteak</translation>
    </message>
    <message>
        <source>Additional Paths</source>
        <translation type="unfinished">Bide-izen gehigarriak</translation>
    </message>
    <message>
        <source>Postscript</source>
        <translation type="unfinished">Postscript</translation>
    </message>
    <message>
        <source>Yes</source>
        <translation type="unfinished">Bai</translation>
    </message>
    <message>
        <source>Font Name</source>
        <translation type="unfinished">Letra-tipoaren izena</translation>
    </message>
    <message>
        <source>Use Font</source>
        <translation type="unfinished">Erabili letra-tipoa</translation>
    </message>
    <message>
        <source>Embed in:</source>
        <translation type="unfinished">Hemen kapsulatua:</translation>
    </message>
    <message>
        <source>Subset</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Type</source>
        <translation type="unfinished">Mota</translation>
    </message>
    <message>
        <source>Path to Font File</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Available Fonts</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Replacement</source>
        <translation type="unfinished">Ordeztea</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Font &amp;Substitutions</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>C&amp;hange...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>A&amp;dd...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Remove</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Additional &amp;Paths</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Choose a Directory</source>
        <translation type="unfinished">Aukeratu direktorioa</translation>
    </message>
</context>
<context>
    <name>FontPreview</name>
    <message>
        <source>Fonts Preview</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt+O</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt+C</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Woven silk pyjamas exchanged for blue quartz</source>
        <translation type="unfinished">Laino guztien azpitik eta sasi guztien gainetik</translation>
    </message>
    <message>
        <source>Append selected font into Style, Font menu</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Leave preview</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Size of the Font</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>GradientEditor</name>
    <message>
        <source>Position:</source>
        <translation type="unfinished">Kokalekua:</translation>
    </message>
    <message>
        <source> %</source>
        <translation type="unfinished"> %</translation>
    </message>
    <message>
        <source>Here you can add, change or remove Color-Stops.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>GuideManager</name>
    <message>
        <source>Manage Guides</source>
        <translation type="unfinished">Kudeatu gidak</translation>
    </message>
    <message>
        <source> pt</source>
        <translation type="unfinished"> pt</translation>
    </message>
    <message>
        <source> mm</source>
        <translation type="unfinished"> mm</translation>
    </message>
    <message>
        <source> in</source>
        <translation type="unfinished"> in</translation>
    </message>
    <message>
        <source> p</source>
        <translation type="unfinished"> p</translation>
    </message>
    <message>
        <source>Horizontal Guides</source>
        <translation type="unfinished">Gida horizontalak</translation>
    </message>
    <message>
        <source>&amp;Y-Pos:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Add</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>D&amp;elete</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Vertical Guides</source>
        <translation type="unfinished">Gida bertikalak</translation>
    </message>
    <message>
        <source>&amp;X-Pos:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>A&amp;dd</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>De&amp;lete</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Lock Guides</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>HelpBrowser</name>
    <message>
        <source>Sorry, no manual available! Please see: http://docs.scribus.net for updated docs
and www.scribus.net for downloads.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Contents</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Link</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Scribus Online Help</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Contents</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Search</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>S&amp;earch</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Ctrl+F</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>F3</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>unknown</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Find</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Search Term:</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>HyAsk</name>
    <message>
        <source>Possible Hyphenation</source>
        <translation type="unfinished">Hitz-zatiketa egin daiteke</translation>
    </message>
    <message>
        <source>Accept</source>
        <translation type="unfinished">Onartu</translation>
    </message>
    <message>
        <source>Skip</source>
        <translation type="unfinished">Saltatu</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation type="unfinished">Utzi</translation>
    </message>
</context>
<context>
    <name>HySettings</name>
    <message>
        <source>Hyphenator Settings</source>
        <translation type="unfinished">Hitz-zatitzailearen ezarpenak</translation>
    </message>
    <message>
        <source>&amp;Language:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Smallest Word:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Length of the smallest word to be hyphenated.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Maximum number of Hyphenations following each other.
A value of 0 means unlimited hyphenations.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Hyphenation Suggestions</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Hyphenate Text Automatically &amp;During Typing</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>A dialog box showing all possible hyphens for each word will show up when you use the Extras, Hyphenate Text option.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Enables automatic hyphenation of your text while typing.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Consecutive Hyphenations &amp;Allowed:</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>InsPage</name>
    <message>
        <source>Insert Page</source>
        <translation type="unfinished">Txertatu orrialdea</translation>
    </message>
    <message>
        <source>&amp;Inserting</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Page(s)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>before Page</source>
        <translation type="unfinished">orrialde hau baino lehen:</translation>
    </message>
    <message>
        <source>after Page</source>
        <translation type="unfinished">orrialde honen ondoren:</translation>
    </message>
    <message>
        <source>at End</source>
        <translation type="unfinished">Amaieran</translation>
    </message>
    <message>
        <source>Inserting</source>
        <translation type="unfinished">Txertatzen</translation>
    </message>
    <message>
        <source>&amp;Template (Left Page):</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Template:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Normal</source>
        <translation type="unfinished">Normala</translation>
    </message>
    <message>
        <source>Template (Right Page):</source>
        <translation type="unfinished">Txantiloia (eskuin-orrialdea):</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>InsertTable</name>
    <message>
        <source>Insert Table</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Number of Rows:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Number of Columns:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>OK</source>
        <translation type="unfinished">Ados</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation type="unfinished">Utzi</translation>
    </message>
</context>
<context>
    <name>JavaDocs</name>
    <message>
        <source>Edit JavaScripts</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Edit...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Add...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;New Script:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>New Script</source>
        <translation type="unfinished">Script berria</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation type="unfinished">Abisua</translation>
    </message>
    <message>
        <source>&amp;No</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Yes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Do you really want to delete this Script?</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>KeyManager</name>
    <message>
        <source>Manage Keyboard Shortcuts</source>
        <translation type="unfinished">Kudeatu laster-teklak</translation>
    </message>
    <message>
        <source>Action</source>
        <translation type="unfinished">Ekintza</translation>
    </message>
    <message>
        <source>Current Key</source>
        <translation type="unfinished">Uneko tekla</translation>
    </message>
    <message>
        <source>Select a Key for this Action</source>
        <translation type="unfinished">Hautatu tekla bat ekintza honetarako</translation>
    </message>
    <message>
        <source>&amp;No Key</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;User Defined Key</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>ALT+SHIFT+T</source>
        <translation type="unfinished">Alt+Shift+T</translation>
    </message>
    <message>
        <source>Set &amp;Key</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt</source>
        <translation type="unfinished">Alt</translation>
    </message>
    <message>
        <source>Ctrl</source>
        <translation type="unfinished">Ktrl</translation>
    </message>
    <message>
        <source>Shift</source>
        <translation type="unfinished">Shift</translation>
    </message>
    <message>
        <source>Shift+</source>
        <translation type="unfinished">Shift+</translation>
    </message>
    <message>
        <source>Alt+</source>
        <translation type="unfinished">Alt+</translation>
    </message>
    <message>
        <source>Ctrl+</source>
        <translation type="unfinished">Ctrl+</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation type="unfinished">Abisua</translation>
    </message>
    <message>
        <source>This Key Sequence is already in use</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>LayerPalette</name>
    <message>
        <source>Layers</source>
        <translation type="unfinished">Geruzak</translation>
    </message>
    <message>
        <source>Add a new Layer</source>
        <translation type="unfinished">Erantsi geruza berria</translation>
    </message>
    <message>
        <source>Delete Layer</source>
        <translation type="unfinished">Ezabatu geruza</translation>
    </message>
    <message>
        <source>Raise Layer</source>
        <translation type="unfinished">Igo geruza</translation>
    </message>
    <message>
        <source>Lower Layer</source>
        <translation type="unfinished">Jaitsi geruza</translation>
    </message>
    <message>
        <source>New Layer</source>
        <translation type="unfinished">Geruza berria</translation>
    </message>
    <message>
        <source>Do you want to delete all Objects on this Layer too?</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>LineFormate</name>
    <message>
        <source>Edit Line Styles</source>
        <translation type="unfinished">Editatu marra-estiloak</translation>
    </message>
    <message>
        <source>&amp;Append</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;New</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Edit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>D&amp;uplicate</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Save</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Copy of %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>New Style</source>
        <translation type="unfinished">Estilo berria</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation type="unfinished">Abisua</translation>
    </message>
    <message>
        <source>&amp;No</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Yes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Open</source>
        <translation type="unfinished">Ireki</translation>
    </message>
    <message>
        <source>Documents (*.sla *.sla.gz *.scd *.scd.gz);;All Files (*)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Documents (*.sla *.scd);;All Files (*)</source>
        <translation type="unfinished">Dokumentuak (*.sla *.scd);; Fitxategi guztiak (*)</translation>
    </message>
    <message>
        <source>Do you really want to delete this Style?</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>MSpinBox</name>
    <message>
        <source> pt</source>
        <translation type="unfinished"> pt</translation>
    </message>
    <message>
        <source>pt</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>mm</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>in</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>p</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> mm</source>
        <translation type="unfinished"> mm</translation>
    </message>
    <message>
        <source> in</source>
        <translation type="unfinished"> in</translation>
    </message>
    <message>
        <source> p</source>
        <translation type="unfinished"> p</translation>
    </message>
</context>
<context>
    <name>Macro</name>
    <message>
        <source>Passed object is not callable</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>MacroManager</name>
    <message>
        <source>Manage Macros</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Brings up a graphical window for creating, deleting, editing, saving and loading macros.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Create, edit and delete macros</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Macro</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Scribus - Macro Manager</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Unable to open the requested file: %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Scribus - Edit Macro</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;qt&gt;The macro name you requested is already taken  by another macro.&lt;/qt&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;qt&gt;Macro creation failed. The macro manager was unable to set up the macro.&lt;/qt&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The macro &apos;%1&apos; has reported a minor error.
The error is: %2
A full traceback follows:

%3
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The macro &apos;%1&apos; failed to execute correctly.
The error is: %2
A full traceback follows:

%3
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Scribus - New Macro</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Enter name for new macro: </source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ManageMacrosDialog</name>
    <message>
        <source>Scribus - Macro Manager</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Renaming the macro failed because the name is already in use.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Scribus - Manage Macros</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;qt&gt;&lt;p&gt;This window is the Scribus Macro Manager. Here you can create macros, edit macros, etc. All changes are made using the buttons on the right hand side of the window.&lt;/p&gt;
&lt;p&gt;All changes made in this dialog take effect instantly - you cannot cancel the actions you make here.
The table in the center of the dialog lists what macros are currently loaded and some information about them. Use &quot;What&apos;s this&quot; on the table for more information.&lt;/p&gt;&lt;/qt&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;New</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt+N</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;qt&gt;Create a new macro.&lt;/qt&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;qt&gt;Create a new macro by prompting for the macro name then bringing up the edit macro dialog box.&lt;/qt&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Ok</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt+O</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Macro</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Edit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Accel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Description</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;p&gt;This table lists the macros that are currently defined.&lt;/p&gt;

&lt;p&gt;&lt;b&gt;Name:&lt;/b&gt; The name of the macro, as shown in the menu bar and in other places around Scribus.&lt;/p&gt;
&lt;p&gt;&lt;b&gt;Edit:&lt;/b&gt; If the macro can be edited, &quot;Yes&quot; appears in this column. Usually if a macro cannot be edited it was created using the register_macro command in a script.&lt;/p&gt;
&lt;p&gt;&lt;b&gt;Accel:&lt;/b&gt; The menu shortcut key sequence, if any, associated with the macro. For example, CTRL-F8 means that you can press Control-F8 when in Scribus to run the macro.&lt;/p&gt;
&lt;p&gt;&lt;b&gt;Description:&lt;/b&gt; If the macro contains a &quot;docstring&quot;, a special string at the start of its definition that describes it, that is shown here. If the docstring is long, only the beginning is shown - use &quot;What&apos;s This&quot; on the macro&apos;s entry in the Macro menu to see the full description.&lt;/p&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Rena&amp;me</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt+M</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Rename the selected macro.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;qt&gt;Rename the selected macro. You will be prompted for the new name.&lt;/qt&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Edit...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt+E</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;qt&gt;Edit the source of the selected macro, if the source is availible.&lt;/qt&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt+D</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;qt&gt;Delete the currently selected macro.&lt;/qt&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;p&gt;Delete the selected macro. This is instant, and there is no way to recover the macro once deleted. If the macro is created by a start-up script, it will reappear next time you load Scribus.&lt;/p&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Set Accel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt+S</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;qt&gt;Set the keyboard shortcut for the selected macro.&lt;/qt&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;p&gt;Set the keyboard shortcut (accelerator) key of the selected macro. You will be prompted for the new shortcut in a dialog box.&lt;/p&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>E&amp;xport</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt+X</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Export macros to a file.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;p&gt;Export macros to an external file. The file will be a Python script containing the scripter commands to re-create the macros. It can be run using &lt;tt&gt;Load extension script&lt;/tt&gt; from the &lt;tt&gt;Script&lt;/tt&gt; menu, or the import button in the macro manager.&lt;/p&gt;
&lt;p&gt;If you want a nice, human readable version of your macros, select the macro you want, press the &lt;tt&gt;Edit&lt;/tt&gt;  button, and use the &lt;tt&gt;Save source&lt;/tt&gt; button in the &lt;tt&gt;Edit Macro&lt;/tt&gt; dialog. You won&apos;t be able to load that version with &lt;tt&gt;Load extension script&lt;/tt&gt; - instead, create a new macro with the&lt;tt&gt; New&lt;/tt&gt; button and use &lt;tt&gt;Load source&lt;/tt&gt;.&lt;/p&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Delete &amp;All</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt+A</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Delete all macros.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;p&gt;Delete all registered macros. This is instant, and there is no way to recover the deleted macros. Any macros created by your start-up script will reappear next time you load Scribus.&lt;/p&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Import</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt+I</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Import macros from a file.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;p&gt;Loads macros from an external file.&lt;/p&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Close this dialog</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Return to Scribus</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;p&gt;Edit the selected macro. &lt;/p&gt;
&lt;p&gt;If this button is greyed out, either there is no selected macro or the macro manager does not have the source code for the macro you have selected (in which case &lt;tt&gt;No&lt;/tt&gt; will be shown in the &lt;tt&gt;Edit &lt;/tt&gt;column of the macro).&lt;/p&gt;
&lt;p&gt;If Scribus doesn&apos;t have the source, the macro was probably created by a script.&lt;/p&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Scribus Macro Files (*.pymacro)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Open File Dialog</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Select the macro file to load.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Save File Dialog</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Save all macros</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Scribus - Rename Macro</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Enter new name: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Scribus - Set Macro Shortcut</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Enter new shortcut: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Yes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>No</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>Mdup</name>
    <message>
        <source>Multiple Duplicate</source>
        <translation type="unfinished">Kopia bat baino gehiago</translation>
    </message>
    <message>
        <source> pt</source>
        <translation type="unfinished"> pt</translation>
    </message>
    <message>
        <source> mm</source>
        <translation type="unfinished"> mm</translation>
    </message>
    <message>
        <source> in</source>
        <translation type="unfinished"> in</translation>
    </message>
    <message>
        <source> p</source>
        <translation type="unfinished"> p</translation>
    </message>
    <message>
        <source>&amp;Number of Copies:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Horizontal Shift:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Vertical Shift:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>Measurements</name>
    <message>
        <source>Distances</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>X1:</source>
        <translation type="unfinished">X1 :</translation>
    </message>
    <message>
        <source>Y1:</source>
        <translation type="unfinished">Y1 :</translation>
    </message>
    <message>
        <source>X2:</source>
        <translation type="unfinished">X2 :</translation>
    </message>
    <message>
        <source>Y2:</source>
        <translation type="unfinished">Y2 :</translation>
    </message>
    <message>
        <source>DX:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>DY:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Angle:</source>
        <translation type="unfinished">Angelua:</translation>
    </message>
    <message>
        <source>Length:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> pt</source>
        <translation type="unfinished"> pt</translation>
    </message>
    <message>
        <source> mm</source>
        <translation type="unfinished"> mm</translation>
    </message>
    <message>
        <source> in</source>
        <translation type="unfinished"> in</translation>
    </message>
    <message>
        <source> p</source>
        <translation type="unfinished"> p</translation>
    </message>
</context>
<context>
    <name>MergeDoc</name>
    <message>
        <source>Import Template</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Import Page(s)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>From Document:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Change...</source>
        <translation type="unfinished">Aldatu...</translation>
    </message>
    <message>
        <source>Import Page(s):</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Insert a comma separated list of tokens where
a token can be * for all the pages, 1-5 for
a range of pages or a single page number.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> from 0</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Create Page(s)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>before Page</source>
        <translation type="unfinished">orrialde hau baino lehen:</translation>
    </message>
    <message>
        <source>after Page</source>
        <translation type="unfinished">orrialde honen ondoren:</translation>
    </message>
    <message>
        <source>at End</source>
        <translation type="unfinished">Amaieran</translation>
    </message>
    <message>
        <source>Import</source>
        <translation type="unfinished">Inportatu</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation type="unfinished">Utzi</translation>
    </message>
    <message>
        <source>Open</source>
        <translation type="unfinished">Ireki</translation>
    </message>
    <message>
        <source>Documents (*.sla *.sla.gz *.scd *.scd.gz);;All Files (*)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Documents (*.sla *.scd);;All Files (*)</source>
        <translation type="unfinished">Dokumentuak (*.sla *.scd);; Fitxategi guztiak (*)</translation>
    </message>
    <message>
        <source> from %1</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>MovePages</name>
    <message>
        <source>Move Pages</source>
        <translation type="unfinished">Lekuz aldatu orrialdeak</translation>
    </message>
    <message>
        <source>Copy Page</source>
        <translation type="unfinished">Kopiatu orria</translation>
    </message>
    <message>
        <source>Move Page(s):</source>
        <translation type="unfinished">Lekuz aldatu orrialdea(k):</translation>
    </message>
    <message>
        <source>to:</source>
        <translation type="unfinished">hona:</translation>
    </message>
    <message>
        <source>before Page</source>
        <translation type="unfinished">orrialde hau baino lehen:</translation>
    </message>
    <message>
        <source>after Page</source>
        <translation type="unfinished">orrialde honen ondoren:</translation>
    </message>
    <message>
        <source>at End</source>
        <translation type="unfinished">Amaieran</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>Mpalette</name>
    <message>
        <source>Properties</source>
        <translation type="unfinished">Propietateak</translation>
    </message>
    <message>
        <source>X, Y, &amp;Z</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Shape</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Text</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Image</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Line</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Colors</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Name</source>
        <translation type="unfinished">Izena:</translation>
    </message>
    <message>
        <source>Geometry</source>
        <translation type="unfinished">Geometria</translation>
    </message>
    <message>
        <source> pt</source>
        <translation type="unfinished"> pt</translation>
    </message>
    <message>
        <source>&amp;X-Pos:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Y-Pos:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Width:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Height:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Rotation:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Basepoint:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Level</source>
        <translation type="unfinished">Maila</translation>
    </message>
    <message>
        <source>Shape:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Edit Shape...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>R&amp;ound
Corners:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Distance of Text</source>
        <translation type="unfinished">Distantzia testutik</translation>
    </message>
    <message>
        <source>Colu&amp;mns:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Gap:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>To&amp;p:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Bottom:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Left:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Right:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>T&amp;abulators...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Path Text Properties</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Show Curve</source>
        <translation type="unfinished">Erakutsi kurba</translation>
    </message>
    <message>
        <source>Start Offset:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Distance from Curve:</source>
        <translation type="unfinished">Distantzia kurbatik:</translation>
    </message>
    <message>
        <source>Text &amp;Flows Around Frame</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Use &amp;Bounding Box</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Use Contour Line</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Font Size:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> %</source>
        <translation type="unfinished"> %</translation>
    </message>
    <message>
        <source>Shade:</source>
        <translation type="unfinished">Itzala:</translation>
    </message>
    <message>
        <source>Custom Spacing</source>
        <translation type="unfinished">Script pertsonalizatuak</translation>
    </message>
    <message>
        <source>L&amp;ine Spacing:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>St&amp;yle:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Lan&amp;guage:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Free Scaling</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>X-Sc&amp;ale:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Y-Scal&amp;e:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Scale &amp;To Frame Size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>P&amp;roportional</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Input Profile:</source>
        <translation type="unfinished">Sarrera-profila:</translation>
    </message>
    <message>
        <source>Rendering Intent:</source>
        <translation type="unfinished">Errendatze-modua:</translation>
    </message>
    <message>
        <source>Perceptual</source>
        <translation type="unfinished">Pertzepziokoa</translation>
    </message>
    <message>
        <source>Relative Colorimetric</source>
        <translation type="unfinished">Koloremetria erlatiboa</translation>
    </message>
    <message>
        <source>Saturation</source>
        <translation type="unfinished">Saturazioa</translation>
    </message>
    <message>
        <source>Absolute Colorimetric</source>
        <translation type="unfinished">Koloremetria absolutua</translation>
    </message>
    <message>
        <source>Left Point</source>
        <translation type="unfinished">Ezkerreko puntua</translation>
    </message>
    <message>
        <source>End Points</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Basepoint:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>T&amp;ype of Line:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Line &amp;Width:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Miter Join</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Bevel Join</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Round Join</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Ed&amp;ges:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Flat Cap</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Square Cap</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Round Cap</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Endings:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>No Style</source>
        <translation type="unfinished">Estilorik ez</translation>
    </message>
    <message>
        <source>Cell Lines</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Line at Top</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Line at the Left</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Line at the Right </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Line at Bottom</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Name of selected object</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Horizontal position of current basepoint</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Vertical position of current basepoint</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Width</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Height</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Rotation of object at current basepoint</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Point from which measurements or rotation angles are referenced</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Select top left for basepoint</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Select top right for basepoint</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Select bottom left for basepoint</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Select bottom right for basepoint</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Select center for basepoint</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Flip Horizontal</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Flip Vertical</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Move one level up</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Move one level down</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Move to front</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Move to back</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Indicates the level the object is on, 0 means the object is at the bottom</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Lock or unlock the object</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Lock or unlock the size of the object</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Enable or disable printing of the object</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Make text in lower frames flow around the object shape</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Use a surrounding box instead of the frame&apos;s shape for text flow</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Use a second line originally based on the frame&apos;s shape for text flow</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Font of selected text or object</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Font Size</source>
        <translation type="unfinished">Letra-tamaina</translation>
    </message>
    <message>
        <source>Scaling width of characters</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color of text stroke</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color of text fill</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Saturation of color of text stroke</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Saturation of color of text fill</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Manual Kerning</source>
        <translation type="obsolete">Doitu karaktere arteko tartea eskuz</translation>
    </message>
    <message>
        <source>Line Spacing</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Style of current paragraph</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Hyphenation language of frame</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Change settings for left or end points</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Pattern of line</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Thickness of line</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Type of line joins</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Type of line end</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Line style of current object</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Choose the shape of frame...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Edit shape of the frame...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Set radius of corner rounding</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Number of columns in text frame</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Switches between Gap or Column width</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Distance between columns</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Distance of text from top of frame</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Distance of text from bottom of frame</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Distance of text from left of frame</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Distance of text from right of frame</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Edit tab settings of text frame...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Allow the image to be a different size to the frame</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Horizontal offset of image within frame</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Vertical offset of image within frame</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Resize the image horizontally</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Resize the image vertically</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Keep the X and Y scaling the same</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Keep the aspect ratio</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Make the image fit within the size of the frame</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Use image proportions rather than those of the frame</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Source profile of the image</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Rendering intent for the image</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;X1:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>X&amp;2:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Y&amp;1:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Y2:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> mm</source>
        <translation type="unfinished"> mm</translation>
    </message>
    <message>
        <source> in</source>
        <translation type="unfinished"> in</translation>
    </message>
    <message>
        <source> p</source>
        <translation type="unfinished"> p</translation>
    </message>
    <message>
        <source>Column width</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>None</source>
        <translation type="unfinished">Bat ere ez</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation type="unfinished">Abisua</translation>
    </message>
    <message>
        <source>Name &quot;%1&quot; isn&apos;t unique.
Please choose another.</source>
        <translation type="unfinished">&quot;%1&quot; izena badago lehendik ere.
Aukeratu beste bat.</translation>
    </message>
    <message>
        <source>OK</source>
        <translation type="unfinished">Ados</translation>
    </message>
    <message>
        <source>Right to Left Writing</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Trac&amp;king:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Manual Tracking</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>MultiLine</name>
    <message>
        <source>Edit Style</source>
        <translation type="unfinished">Editatu estiloa</translation>
    </message>
    <message>
        <source>Flat Cap</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Square Cap</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Round Cap</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Miter Join</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Bevel Join</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Round Join</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Line Width:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> pt</source>
        <translation type="unfinished"> pt</translation>
    </message>
    <message>
        <source> %</source>
        <translation type="unfinished"> %</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> pt </source>
        <translation type="unfinished"> pt </translation>
    </message>
    <message>
        <source>Solid Line</source>
        <translation type="unfinished">Marra jarraitua</translation>
    </message>
    <message>
        <source>Dashed Line</source>
        <translation type="unfinished">Marratxoduna</translation>
    </message>
    <message>
        <source>Dotted Line</source>
        <translation type="unfinished">Puntukatua</translation>
    </message>
    <message>
        <source>Dash Dot Line</source>
        <translation type="unfinished">Marratxoak eta puntuak</translation>
    </message>
    <message>
        <source>Dash Dot Dot Line</source>
        <translation type="unfinished">Marra puntua puntua</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation type="unfinished">Abisua</translation>
    </message>
    <message>
        <source>Name &quot;%1&quot; isn&apos;t unique.
Please choose another.</source>
        <translation type="unfinished">&quot;%1&quot; izena badago lehendik ere.
Aukeratu beste bat.</translation>
    </message>
    <message>
        <source>OK</source>
        <translation type="unfinished">Ados</translation>
    </message>
</context>
<context>
    <name>MusterSeiten</name>
    <message>
        <source>Edit Templates</source>
        <translation type="unfinished">Editatu txantiloiak</translation>
    </message>
    <message>
        <source>&amp;Append</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;New</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>D&amp;uplicate</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Warning</source>
        <translation type="unfinished">Abisua</translation>
    </message>
    <message>
        <source>&amp;No</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Yes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Name:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>New Template</source>
        <translation type="unfinished">Txantiloi berria</translation>
    </message>
    <message>
        <source>Copy of %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Name:</source>
        <translation type="unfinished">Izena:</translation>
    </message>
    <message>
        <source>Copy #%1 of </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Normal</source>
        <translation type="unfinished">Normala</translation>
    </message>
    <message>
        <source>Do you really want to delete this Template?</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>NewDoc</name>
    <message>
        <source> pt</source>
        <translation type="unfinished"> pt</translation>
    </message>
    <message>
        <source> mm</source>
        <translation type="unfinished"> mm</translation>
    </message>
    <message>
        <source> in</source>
        <translation type="unfinished"> in</translation>
    </message>
    <message>
        <source> p</source>
        <translation type="unfinished"> p</translation>
    </message>
    <message>
        <source>New Document</source>
        <translation type="unfinished">Dokumentu berria</translation>
    </message>
    <message>
        <source>Page Size</source>
        <translation type="unfinished">Orrialde-tamaina</translation>
    </message>
    <message>
        <source>&amp;Size:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Legal</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Letter</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Tabloid</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Custom</source>
        <translation type="unfinished">Pertsonalizatua</translation>
    </message>
    <message>
        <source>Orie&amp;ntation:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Portrait</source>
        <translation type="unfinished">Bertikala</translation>
    </message>
    <message>
        <source>Landscape</source>
        <translation type="unfinished">Horizontala</translation>
    </message>
    <message>
        <source>&amp;Width:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Height:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Facing Pages</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Left &amp;Page First</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Margin Guides</source>
        <translation type="unfinished">Marjinen gidak</translation>
    </message>
    <message>
        <source>&amp;Left:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Right:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Top:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Bottom:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Options</source>
        <translation type="unfinished">Aukerak</translation>
    </message>
    <message>
        <source>F&amp;irst Page Number:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Default Unit:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Points (pts)</source>
        <translation type="unfinished">Puntuak (pts)</translation>
    </message>
    <message>
        <source>Millimetres (mm)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Inches (in)</source>
        <translation type="unfinished">Hazbete (in)</translation>
    </message>
    <message>
        <source>Picas (p)</source>
        <translation type="unfinished">Pika (p)</translation>
    </message>
    <message>
        <source>&amp;Automatic Text Frames</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Column Guides</source>
        <translation type="unfinished">Zutabeen gidak</translation>
    </message>
    <message>
        <source>&amp;Gap:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Colu&amp;mns:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Document page size, either a standard size or a custom size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Orientation of the document&apos;s pages</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Width of the document&apos;s pages, editable if you have chosen a custom page size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Height of the document&apos;s pages, editable if you have chosen a custom page size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Enable single or spread based layout</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Make the first page the left page of the document</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Distance between the top margin guide and the edge of the page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Distance between the bottom margin guide and the edge of the page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Distance between the left margin guide and the edge of the page.
If Facing Pages is selected, this margin space can be used to achieve the correct margins for binding</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Distance between the right margin guide and the edge of the page.
If Facing Pages is selected, this margin space can be used to achieve the correct margins for binding</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>First page number of the document</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Default unit of measurement for document editing</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Create text frames automatically when new pages are added</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Number of columns to create in automatically created text frames</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Distance between automatically created columns</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Inside:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>O&amp;utside:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Executive</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Folio</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Ledger</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>NewTm</name>
    <message>
        <source>Left Page</source>
        <translation type="unfinished">Ezkerreko orrialdea</translation>
    </message>
    <message>
        <source>Right Page</source>
        <translation type="unfinished">Eskuineko orrialdea</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>NodePalette</name>
    <message>
        <source>Nodes</source>
        <translation type="unfinished">Nodoak</translation>
    </message>
    <message>
        <source>&amp;Absolute Coordinates</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;X-Pos:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Y-Pos:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Edit &amp;Contour Line</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Reset Contour Line</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;End Editing</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Move Nodes</source>
        <translation type="unfinished">Lekuz aldatu nodoak</translation>
    </message>
    <message>
        <source>Move Control Points</source>
        <translation type="unfinished">Lekuz aldatu kontrol-puntuak</translation>
    </message>
    <message>
        <source>Add Nodes</source>
        <translation type="unfinished">Gehitu nodoak</translation>
    </message>
    <message>
        <source>Delete Nodes</source>
        <translation type="unfinished">Ezabatu nodoak</translation>
    </message>
    <message>
        <source>Move Control Points Independently</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Move Control Points Symmetrical</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Reset Control Points</source>
        <translation type="unfinished">Berrezarri kontrol-puntuak</translation>
    </message>
    <message>
        <source>Reset this Control Point</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Open a Polygon or Cuts a Bezier Curve</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Close this Bezier Curve</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Mirror the Path Horizontally</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Mirror the Path Vertically</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Shear the Path Horizontally to the Right</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Shear the Path Horizontally to the Left</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Shear the Path Vertically Up</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Shear the Path Vertically Down</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Rotate the Path Counter-Clockwise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Rotate the Path Clockwise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Reduce the Size of the Path by shown %</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Enlarge the Size of the Path by shown %</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Angle of Rotation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>% to Enlarge or Reduce By</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Activate Contour Line Editing Mode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Reset the Contour Line to the Original Shape of the Frame</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>When checked use Coordinates relative to the Page,
otherwise Coordinates are relative to the Object.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>OdtDialog</name>
    <message>
        <source>Use document name as a prefix for paragraph styles</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Do not ask again</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>OK</source>
        <translation type="unfinished">Ados</translation>
    </message>
    <message>
        <source>OpenDocument Importer Options</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Update paragraph Styles</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Enabling this will overwrite existing stlyes in the current Scribus document</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Merge Paragraph Styles</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Merge paragraph styles by attributes. This will result in fewer similar paragraph styles, will retain style attributes, even if the original document&apos;s styles are named differently.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Prepend the document name to the paragraph style name in Scribus.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Make these settings the default and do not prompt again when importing an OASIS OpenDocument.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>PConsole</name>
    <message>
        <source>Script Console</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>PDF_Opts</name>
    <message>
        <source>O&amp;utput to File:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cha&amp;nge...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Export Range</source>
        <translation type="unfinished">Esportatu barrutia</translation>
    </message>
    <message>
        <source>&amp;All Pages</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>C&amp;hoose Pages</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>File Options</source>
        <translation type="unfinished">Fitxategi-aukerak</translation>
    </message>
    <message>
        <source>Compatibilit&amp;y:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Binding:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Left Margin</source>
        <translation type="unfinished">Ezkerreko marjina</translation>
    </message>
    <message>
        <source>Right Margin</source>
        <translation type="unfinished">Eskuineko marjina</translation>
    </message>
    <message>
        <source>Generate &amp;Thumbnails</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Save &amp;Linked Text Frames as PDF Articles</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Include Bookmarks</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> dpi</source>
        <translation type="unfinished"> dpi</translation>
    </message>
    <message>
        <source>&amp;Resolution:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Image Settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Automatic</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>JPEG</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Zip</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>None</source>
        <translation type="unfinished">Bat ere ez</translation>
    </message>
    <message>
        <source>&amp;Method:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Quality:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Maximum</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>High</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Medium</source>
        <translation type="unfinished">Tartekoa</translation>
    </message>
    <message>
        <source>Low</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Minimum</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Downsample Images to:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;General</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Embed all Fonts</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Embedding</source>
        <translation type="unfinished">Kapsulatzen</translation>
    </message>
    <message>
        <source>Available Fonts:</source>
        <translation type="unfinished">Erabilgarri dauden letra-tipoak:</translation>
    </message>
    <message>
        <source>&amp;&gt;&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;&lt;&lt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Fonts to embed:</source>
        <translation type="unfinished">Kapsulatzeko letra-tipoak:</translation>
    </message>
    <message>
        <source>&amp;Fonts</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Page</source>
        <translation type="unfinished">Orrialdea</translation>
    </message>
    <message>
        <source>Show Page Pre&amp;views</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Effects</source>
        <translation type="unfinished">Efektuak</translation>
    </message>
    <message>
        <source>&amp;Display Duration:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Effec&amp;t Duration:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Effect T&amp;ype:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Moving Lines:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>F&amp;rom the:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>D&amp;irection:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> sec</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>No Effect</source>
        <translation type="unfinished">Efekturik ez</translation>
    </message>
    <message>
        <source>Blinds</source>
        <translation type="unfinished">Pertsianak</translation>
    </message>
    <message>
        <source>Box</source>
        <translation type="unfinished">Kutxa</translation>
    </message>
    <message>
        <source>Dissolve</source>
        <translation type="unfinished">Disolbatu</translation>
    </message>
    <message>
        <source>Glitter</source>
        <translation type="unfinished">Distira</translation>
    </message>
    <message>
        <source>Split</source>
        <translation type="unfinished">Zatitu</translation>
    </message>
    <message>
        <source>Wipe</source>
        <translation type="unfinished">Ezabatu</translation>
    </message>
    <message>
        <source>Horizontal</source>
        <translation type="unfinished">Horizontala</translation>
    </message>
    <message>
        <source>Vertical</source>
        <translation type="unfinished">Bertikala</translation>
    </message>
    <message>
        <source>Inside</source>
        <translation type="unfinished">Barruan</translation>
    </message>
    <message>
        <source>Outside</source>
        <translation type="unfinished">Kanpoan</translation>
    </message>
    <message>
        <source>Left to Right</source>
        <translation type="unfinished">Ezkerretik eskuinera</translation>
    </message>
    <message>
        <source>Top to Bottom</source>
        <translation type="unfinished">Goitik behera</translation>
    </message>
    <message>
        <source>Bottom to Top</source>
        <translation type="unfinished">Behetik gora</translation>
    </message>
    <message>
        <source>Right to Left</source>
        <translation type="unfinished">Eskuinetik ezkerrera</translation>
    </message>
    <message>
        <source>Top-left to Bottom-Right</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Apply Effect on all Pages</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Use Encryption</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Passwords</source>
        <translation type="unfinished">Pasahitzak</translation>
    </message>
    <message>
        <source>&amp;User:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Owner:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Settings</source>
        <translation type="unfinished">Ezarpenak</translation>
    </message>
    <message>
        <source>Allow &amp;Printing the Document</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Allow &amp;Changing the Document</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Allow Cop&amp;ying Text and Graphics</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Allow Adding &amp;Annotations and Fields</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>S&amp;ecurity</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>General</source>
        <translation type="unfinished">Orokorra</translation>
    </message>
    <message>
        <source>Output &amp;Intended For:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Screen / Web</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Printer</source>
        <translation type="unfinished">Inprimagailua</translation>
    </message>
    <message>
        <source>&amp;Use Custom Rendering Settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Rendering Settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Fre&amp;quency:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Angle:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>S&amp;pot Function:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Simple Dot</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Line</source>
        <translation type="unfinished">Lerroa</translation>
    </message>
    <message>
        <source>Round</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Ellipse</source>
        <translation type="unfinished">Elipsea</translation>
    </message>
    <message>
        <source>Solid Colors:</source>
        <translation type="unfinished">Kolore lisoak:</translation>
    </message>
    <message>
        <source>Use ICC Profile</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Profile:</source>
        <translation type="unfinished">Profila:</translation>
    </message>
    <message>
        <source>Rendering-Intent:</source>
        <translation type="unfinished">Asmoa errendatzen:</translation>
    </message>
    <message>
        <source>Perceptual</source>
        <translation type="unfinished">Pertzepziokoa</translation>
    </message>
    <message>
        <source>Relative Colorimetric</source>
        <translation type="unfinished">Koloremetria erlatiboa</translation>
    </message>
    <message>
        <source>Saturation</source>
        <translation type="unfinished">Saturazioa</translation>
    </message>
    <message>
        <source>Absolute Colorimetric</source>
        <translation type="unfinished">Koloremetria absolutua</translation>
    </message>
    <message>
        <source>Images:</source>
        <translation type="unfinished">Irudiak:</translation>
    </message>
    <message>
        <source>Don&apos;t use embedded ICC profiles</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>C&amp;olor</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>PDF/X-3 Output Intent</source>
        <translation type="unfinished">PDF/X-3 irteera</translation>
    </message>
    <message>
        <source>&amp;Info String:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Output &amp;Profile:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Trim Box</source>
        <translation type="unfinished">Mozte-koadroa</translation>
    </message>
    <message>
        <source>PDF/X-&amp;3</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> pt</source>
        <translation type="unfinished"> pt</translation>
    </message>
    <message>
        <source> mm</source>
        <translation type="unfinished"> mm</translation>
    </message>
    <message>
        <source> in</source>
        <translation type="unfinished"> in</translation>
    </message>
    <message>
        <source> p</source>
        <translation type="unfinished"> p</translation>
    </message>
    <message>
        <source>&amp;Save</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Export all pages to PDF</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Export a range of pages to PDF</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Insert a comma separated list of tokens where
a token can be * for all the pages, 1-5 for
a range of pages or a single page number.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Determines the PDF compatibility. The default is Acrobat 4.0 which gives the widest compatibility.
Choose Acrobat 5.0 if your file has PDF 1.4 features such as transparency or you require 128 bit encryption.
PDF/X-3 is for exporting the PDF for commercial printing and is selectable when you have activated color management.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Determines the binding of pages in the PDF. Unless you know
you need to change it leave the default choice - Left.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Generates thumbnails of each page in the PDF.
Some viewers can use the thumbnails for navigation.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Generate PDF Articles, which is useful for navigating linked articles in a PDF.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Embed the bookmarks you created in your document.
These are useful for navigating long PDF documents.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Export resolution of text and vector graphics.
This does not affect the resolution of bitmap images like photos.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Compression of text and graphics.
Unless you have a reason, leave this checked. This reduces PDF size.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Version of compression for images.
Automatic allows Scribus to choose the best method.
ZIP is good for images with solid colors.
JPEG is better at creating smaller PDF files which have many photos (with slight image loss possible).
Leave it set to automatic, unless you have a need for special compression options.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Compression levels: Minimum (25%), Low (50%), Medium (75%), High (85%), Maximum (95%)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Downsample your bitmap images to the selected DPI.
Leaving this unchecked will render them at their native resolution.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>DPI (Dots Per Inch) for image export.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Embed fonts into the PDF. Embedding the fonts
will preserve the layout and appearance of your document.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Enables presentation effects when using Acrobat Reader in full screen mode.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Show page previews of each page listed above.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Length of time the page is shown before the presentation starts on the selected page.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Length of time the effect runs.
A shorter time will speed up the effect, a longer one will slow it down.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Type of the display effect.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Direction of the effect of moving lines for the split and blind effects.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Starting position for the box and split effects.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Direction of the glitter or wipe effects.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Apply the selected effect to all pages.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Enable the security features in your exported PDF.
If you selected Acrobat 4.0, the PDF will be protected by 40 bit encryption.
If you selected Acrobat 5.0, the PDF will be protected by 128 bit encryption.
Disclaimer: PDF encryption is not as reliable as GPG or PGP encryption and does have some limitations.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Choose a master password which enables or disables all the
security features in your exported PDF</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Choose a password for users to be able to read your PDF.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Allow printing of the PDF. If un-checked, printing is prevented. </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Allow modifying of the PDF. If un-checked, modifying the PDF is prevented.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Allow copying of text or graphics from the PDF. 
If un-checked, text and graphics cannot be copied.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color model for the output of your PDF.
Choose Screen/Web for PDFs which are used for screen display and for printing on typical inkjets.
Choose Printer when printing to a true 4 color CMYK printer.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>This is an advanced setting which is not enabled by default. This should only be enabled
when specifically requested by your printer and they have given you the exact details needed.
Otherwise, your exported PDF may not print properly and is truly not portable across systems.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Embed a color profile for solid colors</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color profile for solid colors</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Rendering intent for solid colors</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Embed a color profile for images</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Do not use color profiles that are embedded in source images</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color profile for images</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Rendering intent for images</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Output profile for printing. If possible, get some guidance from your printer on profile selection.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Mandatory string for PDF/X-3 or the PDF will fail
PDF/X-3 conformance. We recommend you use the title of the document.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Distance for bleed from the top of the physical page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Distance for bleed from the bottom of the physical page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Distance for bleed from the left of the physical page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Distance for bleed from the right of the physical page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Save as</source>
        <translation type="unfinished">Gorde honela</translation>
    </message>
    <message>
        <source>PDF Files (*.pdf);;All Files (*)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Compress Text and &amp;Vector Graphics</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>En&amp;able Presentation Effects</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Presentation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Rotation:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Subset all Fonts</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Fonts to subset:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Mirror Page(s) horizontally</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Mirror Page(s) vertically</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Save as PDF</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;qt&gt;Color management must be enabled to use PDF/X-3. You can enable color management from the Settings menu.&lt;/qt&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;qt&gt;PDF/X-3 is supported and enabled, but can not be used for the selected PDF version. If you want to use PDF/X-3, you need to set PDF/X-3 as your PDF version (compatibility level).&lt;/qt&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;qt&gt;PDF/X-3 is not supported by this Scribus build (CMS support not present).&lt;/qt&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Allow adding annotations and fields to the PDF. 
If un-checked, editing annotations and fields is prevented.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>PDF security settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>PDF/X-3 settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;qt&gt;PDF security can not be used with PDF/X-3. If you want to turn on security, change your PDF version (compatibility level) to something other than PDF/X-3.&lt;/qt&gt;</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>PPreview</name>
    <message>
        <source>Print Preview</source>
        <translation type="unfinished">Inprimatzeko aurrebista</translation>
    </message>
    <message>
        <source>Anti-alias &amp;Text</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Anti-alias &amp;Graphics</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Display Trans&amp;parency</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Under Color Removal</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Display CMYK</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;C</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;M</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Y</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;K</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Provides a more pleasant view of text items in the viewer, at the expense
of a slight slowdown in previewing. This only affects Type 1 fonts</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Shows transparency and transparent items in your document. Requires Ghostscript 7.07 or later</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Gives a print preview using simulations of generic CMYK inks, instead of RGB colors</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Enable/disable the C (Cyan) ink plate</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Enable/disable the M (Magenta) ink plate</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Enable/disable the Y (Yellow) ink plate</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Enable/disable the K (Black) ink plate</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>All</source>
        <translation type="unfinished">Denak</translation>
    </message>
    <message>
        <source>A way of switching off some of the gray shades which are composed
of cyan, yellow and magenta and using black instead.
UCR most affects parts of images which are neutral and/or dark tones
which are close to the gray. Use of this may improve printing some images
and some experimentation and testing is need on a case by case basis.
UCR reduces the possibility of over saturation with CMY inks.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Provides a more pleasant view of TrueType Fonts, OpenType Fonts, EPS, PDF and
vector graphics in the preview, at the expense of a slight slowdown in previewing</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>Page</name>
    <message>
        <source>Copy Here</source>
        <translation type="unfinished">Kopiatu hemen</translation>
    </message>
    <message>
        <source>Move Here</source>
        <translation type="unfinished">Ekarri hona</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation type="unfinished">Utzi</translation>
    </message>
    <message>
        <source>&amp;Paste</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Show &amp;Margins</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Show &amp;Frames</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Show &amp;Images</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Show &amp;Grid</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Show G&amp;uides</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Show &amp;Baseline Grid</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Sn&amp;ap to Grid</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Sna&amp;p to Guides</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Picture</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>File: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Original PPI: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Actual PPI: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Linked Text</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Text Frame</source>
        <translation type="unfinished">Testuaren markoa</translation>
    </message>
    <message>
        <source>Text on a Path</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Paragraphs: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Words: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Chars: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Print: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Enabled</source>
        <translation type="unfinished">Gaituta</translation>
    </message>
    <message>
        <source>Disabled</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>In&amp;fo</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Get Picture...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>I&amp;mage Visible</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Update Picture</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Edit Picture</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Adjust Frame to Picture</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Get Text...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Append Text...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Edit Text...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Is PDF &amp;Bookmark</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Is PDF A&amp;nnotation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Annotation P&amp;roperties</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Field P&amp;roperties</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;PDF Options</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Edit Text...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Lock</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Un&amp;lock</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Lock Object &amp;Size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Unlock Object &amp;Size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Send to S&amp;crapbook</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Send to La&amp;yer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Insert Sample Text</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Group</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Un&amp;group</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Le&amp;vel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Send to &amp;Back</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Bring to &amp;Front</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Lower</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Raise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Picture Frame</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Pol&amp;ygon</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Outlines</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Text Frame</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Bezier Curve</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Conve&amp;rt to</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cu&amp;t</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Copy</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>C&amp;lear Contents</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Show P&amp;roperties...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Hide P&amp;roperties...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>None</source>
        <translation type="unfinished">Bat ere ez</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation type="unfinished">Abisua</translation>
    </message>
    <message>
        <source>Do you really want to clear all your Text?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The Program</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>is missing!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Copy of</source>
        <translation type="obsolete">Honen kopia</translation>
    </message>
</context>
<context>
    <name>PageItem</name>
    <message>
        <source>Image</source>
        <translation type="unfinished">Irudia</translation>
    </message>
    <message>
        <source>Text</source>
        <translation type="unfinished">Testua</translation>
    </message>
    <message>
        <source>Line</source>
        <translation type="unfinished">Lerroa</translation>
    </message>
    <message>
        <source>Polygon</source>
        <translation type="unfinished">Poligonoa</translation>
    </message>
    <message>
        <source>Polyline</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>PathText</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>PageSelector</name>
    <message>
        <source>Page </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> of %1</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>PicSearch</name>
    <message>
        <source>Result</source>
        <translation type="unfinished">Emaitza</translation>
    </message>
    <message>
        <source>Search Results for: </source>
        <translation type="unfinished">Bilaketaren emaitzak: </translation>
    </message>
    <message>
        <source>Preview</source>
        <translation type="unfinished">Aurrebista</translation>
    </message>
    <message>
        <source>Select</source>
        <translation type="unfinished">Hautatu</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation type="unfinished">Utzi</translation>
    </message>
</context>
<context>
    <name>PicStatus</name>
    <message>
        <source>Pictures</source>
        <translation type="unfinished">Irudiak</translation>
    </message>
    <message>
        <source>Name</source>
        <translation type="unfinished">Izena:</translation>
    </message>
    <message>
        <source>Path</source>
        <translation type="unfinished">Bide-izena</translation>
    </message>
    <message>
        <source>Page</source>
        <translation type="unfinished">Orrialdea</translation>
    </message>
    <message>
        <source>Print</source>
        <translation type="unfinished">Inprimatu</translation>
    </message>
    <message>
        <source>Status</source>
        <translation type="unfinished">Egoera</translation>
    </message>
    <message>
        <source>Goto</source>
        <translation type="unfinished">Joan</translation>
    </message>
    <message>
        <source>Yes</source>
        <translation type="unfinished">Bai</translation>
    </message>
    <message>
        <source>OK</source>
        <translation type="unfinished">Ados</translation>
    </message>
    <message>
        <source>Missing</source>
        <translation type="unfinished">Falta da</translation>
    </message>
    <message>
        <source>Search</source>
        <translation type="unfinished">Bilatu</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>PolygonProps</name>
    <message>
        <source>Polygon Properties</source>
        <translation type="unfinished">Poligonoaren propietateak</translation>
    </message>
    <message>
        <source>Corn&amp;ers:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Rotation:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> %</source>
        <translation type="unfinished"> %</translation>
    </message>
    <message>
        <source>&amp;Factor:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Number of corners for polygons</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Degrees of rotation for polygons</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Sample Polygon</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Apply &amp;Factor</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Apply Convex/Concave Factor to change shape of Polygons</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>A negative value will make the polygon concave (or star shaped),
 a positive value will make it convex</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>Preferences</name>
    <message>
        <source>Preferences</source>
        <translation type="unfinished">Hobespenak</translation>
    </message>
    <message>
        <source>General</source>
        <translation type="unfinished">Orokorra</translation>
    </message>
    <message>
        <source>Document</source>
        <translation type="unfinished">Dokumentua</translation>
    </message>
    <message>
        <source>Guides</source>
        <translation type="unfinished">Gidak</translation>
    </message>
    <message>
        <source>Typography</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Tools</source>
        <translation type="unfinished">Tresnak</translation>
    </message>
    <message>
        <source>Scrapbook</source>
        <translation type="unfinished">Berri laburren albuma</translation>
    </message>
    <message>
        <source>Display</source>
        <translation type="unfinished">Bistaratu</translation>
    </message>
    <message>
        <source>External Tools</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Misc.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>GUI</source>
        <translation type="unfinished">GUI</translation>
    </message>
    <message>
        <source>&amp;Theme:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> pt</source>
        <translation type="unfinished"> pt</translation>
    </message>
    <message>
        <source>&amp;Font Size:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Units</source>
        <translation type="unfinished">Unitateak</translation>
    </message>
    <message>
        <source>Points (pt)</source>
        <translation type="unfinished">Puntuak (ptu)</translation>
    </message>
    <message>
        <source>Millimetres (mm)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Inches (in)</source>
        <translation type="unfinished">Hazbete (in)</translation>
    </message>
    <message>
        <source>Picas (p)</source>
        <translation type="unfinished">Pika (p)</translation>
    </message>
    <message>
        <source>Mouse Settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Wheel Jump:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> px</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Grab Radius:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Menus</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Recent Documents:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Paths</source>
        <translation type="unfinished">Bide-izenak</translation>
    </message>
    <message>
        <source>&amp;Documents:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Change...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;ICC Profiles:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>C&amp;hange...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Scripts:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Ch&amp;ange...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Page Size</source>
        <translation type="unfinished">Orrialde-tamaina</translation>
    </message>
    <message>
        <source>Custom</source>
        <translation type="unfinished">Pertsonalizatua</translation>
    </message>
    <message>
        <source>&amp;Size:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Portrait</source>
        <translation type="unfinished">Bertikala</translation>
    </message>
    <message>
        <source>Landscape</source>
        <translation type="unfinished">Horizontala</translation>
    </message>
    <message>
        <source>Orie&amp;ntation:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Width:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Height:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Facing Pages</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Left &amp;Page First</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Margin Guides</source>
        <translation type="unfinished">Marjinen gidak</translation>
    </message>
    <message>
        <source>&amp;Bottom:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Top:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Right:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Left:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Autosave</source>
        <translation type="unfinished">Gorde automatikoki</translation>
    </message>
    <message>
        <source>&amp;Enabled</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>min</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Interval:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Grid Layout</source>
        <translation type="unfinished">Saretaren diseinua</translation>
    </message>
    <message>
        <source>M&amp;inor Grid Spacing:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Ma&amp;jor Grid Spacing:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Guide &amp;Snap Distance:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Grid Colors</source>
        <translation type="unfinished">Sareta-koloreak</translation>
    </message>
    <message>
        <source>Min&amp;or Grid Color:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Majo&amp;r Grid Color:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;User Guides Color:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Base&amp;line Grid Color:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Placing</source>
        <translation type="unfinished">Kokalekua</translation>
    </message>
    <message>
        <source>In the &amp;Background</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>In the Fore&amp;ground</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Baseline Grid</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>O&amp;n</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>O&amp;ff</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Subscript</source>
        <translation type="unfinished">Azpindizea</translation>
    </message>
    <message>
        <source> %</source>
        <translation type="unfinished"> %</translation>
    </message>
    <message>
        <source>&amp;Displacement:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Scaling:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Superscript</source>
        <translation type="unfinished">Goi-indizea</translation>
    </message>
    <message>
        <source>D&amp;isplacement:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>S&amp;caling:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Small Caps</source>
        <translation type="unfinished">Maiuskula txikiak</translation>
    </message>
    <message>
        <source>Sc&amp;aling:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Other</source>
        <translation type="unfinished">Bestelakoak</translation>
    </message>
    <message>
        <source>Baseline &amp;Grid:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Baseline &amp;Offset:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Automatic &amp;Line Spacing:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Default &amp;Font:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Default &amp;Size:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Text Color:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Colu&amp;mns:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Gap:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Woven silk pyjamas exchanged for blue quartz</source>
        <translation type="unfinished">Laino guztien azpitik eta sasi guztien gainetik</translation>
    </message>
    <message>
        <source>None</source>
        <translation type="unfinished">Bat ere ez</translation>
    </message>
    <message>
        <source>&amp;Line Color:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Shading:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Fill Color:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>S&amp;hading:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Type of Line:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Line &amp;Width:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Mi&amp;nimum:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Ma&amp;ximum:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Stepping:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Free Scaling</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Horizontal Scaling:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Vertical Scaling:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Scale Picture to Frame Size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Keep Aspect &amp;Ratio</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>F&amp;ill Color:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Corn&amp;ers:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Rotation:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Factor:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Other Options</source>
        <translation type="unfinished">Bestelako aukerak</translation>
    </message>
    <message>
        <source>Sa&amp;ve Contents on Changes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Preview</source>
        <translation type="unfinished">Aurrebista</translation>
    </message>
    <message>
        <source>Small</source>
        <translation type="unfinished">Txikia</translation>
    </message>
    <message>
        <source>Medium</source>
        <translation type="unfinished">Tartekoa</translation>
    </message>
    <message>
        <source>Large</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Display Pages &amp;Side by Side</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Page Colors</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Background:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Margins:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Display &amp;Unprintable Area in Margin Color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Use PDF 1.4 &amp;Transparency Features</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Adjust Display Size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>To adjust the display drag the ruler below with the Slider.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Postscript Interpreter</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Name of Executable:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Antialias &amp;Text</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Antialias &amp;Graphics</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Image Processing Tool</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Name of &amp;Executable:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Printing</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Clip to Page &amp;Margins</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Apply &amp;Under Color Removal</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Choose the default window decoration and looks.
Scribus inherits any available KDE or Qt themes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Default font size for the menus and windows</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Default unit of measurement for document editing</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Number of lines Scribus will scroll for each move of the mouse wheel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Radius of the area where Scribus will allow you to grab an objects handles</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Number of recently edited documents to show in the File menu</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Default documents directory</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Default Scripter scripts directory</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Default page size, either a standard size or a custom size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Default orientation of document pages</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Width of document pages, editable if you have chosen a custom page size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Height of document pages, editable if you have chosen a custom page size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Enable single or spread based layout</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Make the first page the left page of a document</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Distance between the top margin guide and the edge of the page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Distance between the bottom margin guide and the edge of the page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Distance between the left margin guide and the edge of the page.
If Facing Pages is selected, this margin space can be used to achieve the correct margins for binding</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Distance between the right margin guide and the edge of the page.
If Facing Pages is selected, this margin space can be used to achieve the correct margins for binding</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>When enabled, Scribus saves a backup copy of your file with the .bak extension
each time the time period elapses</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Time period between saving automatically</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Distance between the minor grid lines</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Distance between the major grid lines</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Distance within which an object will snap to your placed guides</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color of the minor grid lines</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color of the major grid lines</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color of the guide lines you insert</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Place the grid behind your page objects</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Place the grid in front of your page objects</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Displacement above the baseline of the font on a line</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Relative size of the superscript compared to the normal font</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Displacement below the baseline of the normal font on a line</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Relative size of the subscript compared to the normal font</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Relative size of the small caps font compared to the normal font</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Percentage increase over the font size for the line spacing</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Text Frame Properties</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Picture Frame Properties</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Shape Drawing Properties</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Magnification Level Defaults</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Line Drawing Properties</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Polygon Drawing Properties</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Font for new text frames</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Size of font for new text frames</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color of font</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Number of columns in a text frame</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Gap between text frame columns</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Sample of your font</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Picture frames allow pictures to scale to any size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Horizontal scaling of images</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Vertical scaling of images</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Keep horizontal and vertical scaling the same</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Pictures in picture frames are scaled to the size of the frame</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Automatically scaled pictures keep their original proportions</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Fill color of picture frames</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Saturation of color of fill</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Line color of shapes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Saturation of color of lines</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Fill color of shapes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Line style of shapes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Line width of shapes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Minimum magnification allowed</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Maximum magnification allowed</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Change in magnification for each zoom operation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color of lines</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Saturation of color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Style of lines</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Width of lines</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Number of corners for polygons</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Degrees of rotation for polygons</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Sample Polygon</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Choose the size of the preview in the scrapbook palette</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Save the scrapbook contents everytime after a change</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>When using facing pages, show the two pages side by side</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color for paper</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color for the margin lines</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Mask the area outside the margins in the margin color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Enable transparency features within PDF 1.4 export</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Set the default zoom level</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Antialias text for EPS and PDF onscreen rendering</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Antialias graphics for EPS and PDF onscreen rendering</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Do not show objects outside the margins on the printed page or exported file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Choose a Directory</source>
        <translation type="unfinished">Aukeratu direktorioa</translation>
    </message>
    <message>
        <source>&amp;Inside:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>O&amp;utside:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> mm</source>
        <translation type="unfinished"> mm</translation>
    </message>
    <message>
        <source> in</source>
        <translation type="unfinished"> in</translation>
    </message>
    <message>
        <source> p</source>
        <translation type="unfinished"> p</translation>
    </message>
    <message>
        <source>T&amp;emplates:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cha&amp;nge...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Apply &amp;Factor</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Additional Directory for Document Templates</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Apply Convex/Concave Factor to change shape of Polygons</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>A negative value will make the polygon concave (or star shaped),
 a positive value will make it convex</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>A way of switching off some of the gray shades which are composed
of cyan, yellow and magenta and using black instead.
UCR most affects parts of images which are neutral and/or dark tones
which are close to the gray. Use of this may improve printing some images
and some experimentation and testing is need on a case by case basis.
UCR reduces the possibility of over saturation with CMY inks.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Executive</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Folio</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Ledger</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Legal</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Letter</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Tabloid</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Default ICC profiles directory. This cannot
be changed with documents open.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Turns on the base grid</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Turns off the base grid</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>File system location for the Ghostscript interpreter</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>File system location for graphics editor. If you use gimp
and your distro includes it, we recommend &apos;gimp-remote&apos;,
as it allows you to edit the image in an already running
instance of gimp.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QColorDialog</name>
    <message>
        <source>Hu&amp;e:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Sat:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Val:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Red:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Green:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Bl&amp;ue:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>A&amp;lpha channel:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Basic colors</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Custom colors</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Define Custom Colors &gt;&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>OK</source>
        <translation type="unfinished">Ados</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation type="unfinished">Utzi</translation>
    </message>
    <message>
        <source>&amp;Add to Custom Colors</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Select color</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QFileDialog</name>
    <message>
        <source>Copy or Move a File</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Read: %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Write: %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>File &amp;name:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>File &amp;type:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>One directory up</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation type="unfinished">Utzi</translation>
    </message>
    <message>
        <source>All Files (*)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Name</source>
        <translation type="unfinished">Izena:</translation>
    </message>
    <message>
        <source>Size</source>
        <translation type="unfinished">Tamaina</translation>
    </message>
    <message>
        <source>Type</source>
        <translation type="unfinished">Mota</translation>
    </message>
    <message>
        <source>Date</source>
        <translation type="unfinished">Data</translation>
    </message>
    <message>
        <source>Attributes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>OK</source>
        <translation type="unfinished">Ados</translation>
    </message>
    <message>
        <source>Look &amp;in:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Back</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Create New Folder</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>List View</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Detail View</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Preview File Info</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Preview File Contents</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Read-write</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Read-only</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Write-only</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Inaccessible</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Symlink to File</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Symlink to Directory</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Symlink to Special</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>File</source>
        <translation type="unfinished">Fitxategia</translation>
    </message>
    <message>
        <source>Dir</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Special</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Open</source>
        <translation type="unfinished">Ireki</translation>
    </message>
    <message>
        <source>Save As</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Open</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Save</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Rename</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>R&amp;eload</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Sort by &amp;Name</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Sort by &amp;Size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Sort by &amp;Date</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Unsorted</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Sort</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Show &amp;hidden files</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>the file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>the directory</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>the symlink</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Delete %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;qt&gt;Are you sure you wish to delete %1 &quot;%2&quot;?&lt;/qt&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Yes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;No</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>New Folder 1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>New Folder</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>New Folder %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Find Directory</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Directories</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Save</source>
        <translation type="unfinished">Gorde</translation>
    </message>
    <message>
        <source>Error</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>%1
File not found.
Check path and filename.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>All Files (*.*)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Select a Directory</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Directory:</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QFontDialog</name>
    <message>
        <source>&amp;Font</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Font st&amp;yle</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Effects</source>
        <translation type="unfinished">Efektuak</translation>
    </message>
    <message>
        <source>Stri&amp;keout</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Underline</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Sample</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Scr&amp;ipt</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>OK</source>
        <translation type="unfinished">Ados</translation>
    </message>
    <message>
        <source>Apply</source>
        <translation type="unfinished">Aplikatu</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation type="unfinished">Utzi</translation>
    </message>
    <message>
        <source>Close</source>
        <translation type="unfinished">Itxi</translation>
    </message>
    <message>
        <source>Select Font</source>
        <translation type="unfinished">Hautatu letra-tipoa</translation>
    </message>
</context>
<context>
    <name>QLineEdit</name>
    <message>
        <source>Clear</source>
        <translation type="unfinished">Garbitu</translation>
    </message>
    <message>
        <source>Select All</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Undo</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Redo</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cu&amp;t</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Copy</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Paste</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QMainWindow</name>
    <message>
        <source>Line up</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Customize...</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QMessageBox</name>
    <message>
        <source>&lt;h3&gt;About Qt&lt;/h3&gt;&lt;p&gt;This program uses Qt version %1.&lt;/p&gt;&lt;p&gt;Qt is a C++ toolkit for multiplatform GUI &amp;amp; application development.&lt;/p&gt;&lt;p&gt;Qt provides single-source portability across MS&amp;nbsp;Windows, Mac&amp;nbsp;OS&amp;nbsp;X, Linux, and all major commercial Unix variants.&lt;br&gt;Qt is also available for embedded devices.&lt;/p&gt;&lt;p&gt;Qt is a Trolltech product. See &lt;tt&gt;http://www.trolltech.com/qt/&lt;/tt&gt; for more information.&lt;/p&gt;</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QObject</name>
    <message>
        <source>Importing text</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>All Supported Formats</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>All Files (*)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Initializing...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Document</source>
        <translation type="unfinished">Dokumentua</translation>
    </message>
    <message>
        <source>Background</source>
        <translation type="unfinished">Atzeko planoa</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation type="unfinished">Abisua</translation>
    </message>
    <message>
        <source>Do you really want to overwrite the File:
%1 ?</source>
        <translation type="unfinished">Benetan gainidatzi nahi duzu fitxategia:
%1?</translation>
    </message>
    <message>
        <source>&amp;Fonts Preview</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Insert Special</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>New &amp;from Template...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Template: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Newsletters</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Brochures</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Catalogs</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Flyers</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Signs</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cards</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Letterheads</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Envelopes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Business Cards</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Calendars</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Advertisements</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Labels</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Menus</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Programs</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>PDF Forms</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>PDF Presentations</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Magazines</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Posters</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Announcements</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Text Documents</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Folds</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Own Templates</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Save as &amp;Image...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Save as Image</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Error writting the output file(s).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Error writing the output file(s).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Export successful.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>File exists. Overwrite?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>exists already. Overwrite?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>No</source>
        <translation type="unfinished">Ez</translation>
    </message>
    <message>
        <source>Yes</source>
        <translation type="unfinished">Bai</translation>
    </message>
    <message>
        <source>Yes all</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Print Preview</source>
        <translation type="unfinished">Inprimatzeko aurrebista</translation>
    </message>
    <message>
        <source>Print Previe&amp;w</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Import &amp;EPS/PS...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>All Supported Formats (*.eps *.EPS *.ps *.PS);;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Open</source>
        <translation type="unfinished">Ireki</translation>
    </message>
    <message>
        <source>Save as &amp;Template...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>S&amp;cripter Manual...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Online Reference</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Save Page as &amp;SVG...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Save as</source>
        <translation type="unfinished">Gorde honela</translation>
    </message>
    <message>
        <source>SVG-Images (*.svg *.svgz);;All Files (*)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>SVG-Images (*.svg);;All Files (*)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Import &amp;SVG...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Comma Separated Value Files</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>CSV_data</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>CSV_header</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>HTML Files</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>html</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>
External Links
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Text Files</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Font %1 is broken, discarding it</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Text Filters</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Media Cases</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Albanian</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Basque</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Bulgarian</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Brazilian</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Catalan</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Chinese</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Czech</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Danish</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Dutch</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>English</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>English (British)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Esperanto</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>German</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Finnish</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>French</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Galician</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Greek</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Hungarian</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Indonesian</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Italian</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Korean</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Lithuanian</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Norwegian (Bokmaal)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Norwegian (Nnyorsk)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Norwegian</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Polish</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Russian</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Swedish</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Spanish</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Spanish (Latin)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Slovak</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Slovenian</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Serbian</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Tried to set progress &gt; maximum progress</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot get font size of non-text frame.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot get font of non-text frame.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot get text size of non-text frame.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot get column count of non-text frame.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot get line space of non-text frame.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot get column gap of non-text frame.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot get text of non-text frame.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot set text of non-text frame.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot insert text into non-text frame.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alignment out of range. Use one of the scribus.ALIGN* constants.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Selection index out of bounds</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Failed to open document</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Failed to save document</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Unit out of range. Use one of the scribus.UNIT_* constants.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Target is not an image frame.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>An object with the requested name already exists</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Point list must contain at least two points (four values)</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Point list must contain an even number of values</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Point list must contain at least three points (six values)</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Point list must contain at least four points (eight values)</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Point list must have a multiple of six values</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Object not found</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Style not found</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Can&apos;t set style on a non-text frame</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Failed to save EPS</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Page number out of range</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>argument is not list: must be list of float values</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>argument contains non-numeric values: must be list of float values</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Line width out of bounds, must be 0 &lt;= line_width &lt;= 12</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Line shade out of bounds, must be 0 &lt;= shade &lt;= 100</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Fill shade out of bounds, must be 0 &lt;= shade &lt;= 100</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Corner radius must be a positive number.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Line style not found</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot get a color with an empty name.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot change a color with an empty name.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot create a color with an empty name.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot delete a color with an empty name.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot replace a color with an empty name.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Import &amp;OpenOffice.org Draw...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>OpenOffice.org Draw (*.sxd);;All Files (*)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>OpenOffice.org Writer Documents</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color not found - python error</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Scribus Python interface module

This module is the Python interface for Scribus. It provides functions
to control scribus and to manipulate objects on the canvas. Each
function is documented individually below.

A few things are common across most of the interface.

Most functions operate on frames. Frames are identified by their name,
a string - they are not real Python objects. Many functions take an
optional (non-keyword) parameter, a frame name.
Many exceptions are also common across most functions. These are
not currently documented in the docstring for each function.
- Many functions will raise a NoDocOpenError if you try to use themwithout a document to operate on.
- If you do not pass a frame name to a function that requires one,the function will use the currently selected frame, if any, orraise a NoValidObjectError if it can&apos;t find anything to operateon.
- Many functions will raise WrongFrameTypeError if you try to use them
on a frame type that they do not make sense with. For example, setting
the text colour on a graphics frame doesn&apos;t make sense, and will result
in this exception being raised.
- Errors resulting from calls to the underlying Python API will be
passed through unaltered. As such, the list of exceptions thrown by
any function as provided here and in its docstring is incomplete.

Details of what exceptions each function may throw are provided on the
function&apos;s documentation.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Custom (optional) configuration: </source>
        <comment>short words plugin</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Standard configuration: </source>
        <comment>short words plugin</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Short &amp;Words...</source>
        <comment>short words plugin</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Short Words processing. Wait please...</source>
        <comment>short words plugin</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Short Words processing. Done.</source>
        <comment>short words plugin</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Afrikaans</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Turkish</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Ukranian</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Welsh</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The filename must be a string.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot delete image type settings.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The image type must be a string.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&apos;allTypes&apos; attribute is READ-ONLY</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Failed to export image</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color not found.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color not found in document.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color not found in default colors.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot scale by 0%.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Specified item not an image frame.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Font not found.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot render an empty sample.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot have an empty layer name.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Layer not found.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot remove the last layer.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot create layer without a name.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Insert index out of bounds.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot set text alignment on a non-text frame.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Font size out of bounds - must be 1 &lt;= size &lt;= 512.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot set font size on a non-text frame.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot set font on a non-text frame.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Line space out of bounds, must be &gt;= 0.1.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot set line spacing on a non-text frame.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Column gap out of bounds, must be positive.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot set column gap on a non-text frame.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Column count out of bounds, must be &gt; 1.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot set number of columns on a non-text frame.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot select text in a non-text frame</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot delete text from a non-text frame.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot set text fill on a non-text frame.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot set text stroke on a non-text frame.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot set text shade on a non-text frame.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Can only link text frames.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Target frame must be empty.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Target frame links to another frame.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Target frame is linked to by another frame.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Source and target are the same object.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot unlink a non-text frame.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Object is not a linked text frame, cannot unlink.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Object the last frame in a series, cannot unlink. Unlink the previous frame instead.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot convert a non-text frame to outlines.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Portuguese (Brazilian)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot get a colour with an empty name.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Unable to save pixmap.</source>
        <comment>scripter error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Can&apos;t set bookmark on a non-text frame</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Can&apos;t get info from a non-text frame</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>OpenDocument Text Documents</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Croatian</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color not found</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QTextEdit</name>
    <message>
        <source>Clear</source>
        <translation type="unfinished">Garbitu</translation>
    </message>
    <message>
        <source>Select All</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Undo</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Redo</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cu&amp;t</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Copy</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Paste</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QTitleBar</name>
    <message>
        <source>System Menu</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Shade</source>
        <translation type="unfinished">Itzala</translation>
    </message>
    <message>
        <source>Unshade</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Normalize</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Minimize</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Maximize</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Close</source>
        <translation type="unfinished">Itxi</translation>
    </message>
</context>
<context>
    <name>QWorkspace</name>
    <message>
        <source>&amp;Restore</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Move</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Mi&amp;nimize</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Ma&amp;ximize</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Stay on &amp;Top</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Minimize</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Restore Down</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Close</source>
        <translation type="unfinished">Itxi</translation>
    </message>
    <message>
        <source>Sh&amp;ade</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>%1 - [%2]</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Unshade</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>Query</name>
    <message>
        <source>&amp;OK</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ReformDoc</name>
    <message>
        <source> pt</source>
        <translation type="unfinished"> pt</translation>
    </message>
    <message>
        <source> mm</source>
        <translation type="unfinished"> mm</translation>
    </message>
    <message>
        <source> in</source>
        <translation type="unfinished"> in</translation>
    </message>
    <message>
        <source> p</source>
        <translation type="unfinished"> p</translation>
    </message>
    <message>
        <source>Document Setup</source>
        <translation type="unfinished">Dokumentuaren konfigurazioa</translation>
    </message>
    <message>
        <source>Margin Guides</source>
        <translation type="unfinished">Marjinen gidak</translation>
    </message>
    <message>
        <source>&amp;Top:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Left:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Bottom:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Right:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Facing Pages</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Left &amp;Page First</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Enable single or spread based layout</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Make the first page the left page of the document</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Distance between the top margin guide and the edge of the page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Distance between the bottom margin guide and the edge of the page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Distance between the left margin guide and the edge of the page.
If Facing Pages is selected, this margin space can be used to achieve the correct margins for binding</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Distance between the right margin guide and the edge of the page.
If Facing Pages is selected, this margin space can be used to achieve the correct margins for binding</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Inside:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Outside:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Page Size</source>
        <translation type="unfinished">Orrialde-tamaina</translation>
    </message>
    <message>
        <source>Size:</source>
        <translation type="unfinished">Tamaina:</translation>
    </message>
    <message>
        <source>Custom</source>
        <translation type="unfinished">Pertsonalizatua</translation>
    </message>
    <message>
        <source>Orientation:</source>
        <translation type="unfinished">Orientazioa:</translation>
    </message>
    <message>
        <source>Portrait</source>
        <translation type="unfinished">Bertikala</translation>
    </message>
    <message>
        <source>Landscape</source>
        <translation type="unfinished">Horizontala</translation>
    </message>
    <message>
        <source>Width:</source>
        <translation type="unfinished">Zabalera:</translation>
    </message>
    <message>
        <source>Height:</source>
        <translation type="unfinished">Altuera:</translation>
    </message>
    <message>
        <source>F&amp;irst Page Number:</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>SToolBAlign</name>
    <message>
        <source>Style Settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Style of current paragraph</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>SToolBColorF</name>
    <message>
        <source>Fill Color Settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>None</source>
        <translation type="unfinished">Bat ere ez</translation>
    </message>
    <message>
        <source>Color of text fill</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Saturation of color of text fill</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>SToolBColorS</name>
    <message>
        <source>Stroke Color Settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>None</source>
        <translation type="unfinished">Bat ere ez</translation>
    </message>
    <message>
        <source>Color of text stroke</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Saturation of color of text stroke</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>SToolBFont</name>
    <message>
        <source>Font Settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> pt</source>
        <translation type="unfinished"> pt</translation>
    </message>
    <message>
        <source> %</source>
        <translation type="unfinished"> %</translation>
    </message>
    <message>
        <source>Font of selected text</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Font Size</source>
        <translation type="unfinished">Letra-tamaina</translation>
    </message>
    <message>
        <source>Scaling width of characters</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>SToolBStyle</name>
    <message>
        <source>Character Settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Kerning:</source>
        <translation type="obsolete">Karaktere arteko tartea:</translation>
    </message>
    <message>
        <source> pt</source>
        <translation type="unfinished"> pt</translation>
    </message>
    <message>
        <source>Manual Kerning</source>
        <translation type="obsolete">Doitu karaktere arteko tartea eskuz</translation>
    </message>
    <message>
        <source>Tracking:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Manual Tracking</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ScriXmlDoc</name>
    <message>
        <source>Copy #%1 of </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Background</source>
        <translation type="unfinished">Atzeko planoa</translation>
    </message>
</context>
<context>
    <name>ScribusApp</name>
    <message>
        <source>Normal</source>
        <translation type="unfinished">Normala</translation>
    </message>
    <message>
        <source>File</source>
        <translation type="unfinished">Fitxategia</translation>
    </message>
    <message>
        <source>Create a new Document</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Open a Document</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Save the current Document</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Close the current Document</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Print the current Document</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Save the current Document as PDF</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Searching for Fonts</source>
        <translation type="unfinished">Letra-tipoak bilatzen</translation>
    </message>
    <message>
        <source>There are no Postscript-Fonts on your System</source>
        <translation type="obsolete">Ez dago Postscript-en letra-tiporik zure sisteman</translation>
    </message>
    <message>
        <source>Exiting now</source>
        <translation type="unfinished">Irteten</translation>
    </message>
    <message>
        <source>Fatal Error</source>
        <translation type="unfinished">Errore larria</translation>
    </message>
    <message>
        <source>Smart Hyphen</source>
        <translation type="unfinished">Marratxo dotorea</translation>
    </message>
    <message>
        <source>Align Left</source>
        <translation type="unfinished">Lerrokatu ezkerrean</translation>
    </message>
    <message>
        <source>Align Right</source>
        <translation type="unfinished">Lerrokatu eskuinean</translation>
    </message>
    <message>
        <source>Align Center</source>
        <translation type="unfinished">Lerrokatu erdian</translation>
    </message>
    <message>
        <source>Insert Page Number</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Attach Text to Path</source>
        <translation type="unfinished">Lotu testua bide-izenari</translation>
    </message>
    <message>
        <source>Show Layers</source>
        <translation type="unfinished">Erakutsi geruzak</translation>
    </message>
    <message>
        <source>Javascripts...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Undo</source>
        <translation type="unfinished">Desegin</translation>
    </message>
    <message>
        <source>Show Page Palette</source>
        <translation type="unfinished">Erakutsi orrialdearen paleta</translation>
    </message>
    <message>
        <source>Lock/Unlock</source>
        <translation type="unfinished">Blokeatu/desblokeatu</translation>
    </message>
    <message>
        <source>Non Breaking Space</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Reading Preferences</source>
        <translation type="unfinished">Hobespenak irakurtzen</translation>
    </message>
    <message>
        <source>Getting ICC Profiles</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Init Hyphenator</source>
        <translation type="unfinished">Abiarazi hitz-zatitzailea</translation>
    </message>
    <message>
        <source>Setting up Shortcuts</source>
        <translation type="unfinished">Laster-bideak ezartzen</translation>
    </message>
    <message>
        <source>&amp;Color Management...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Reading Scrapbook</source>
        <translation type="unfinished">Berri laburren albuma irakurtzen</translation>
    </message>
    <message>
        <source>Initializing Plugins</source>
        <translation type="unfinished">Plugin-ak hasieratzen</translation>
    </message>
    <message>
        <source>&amp;New</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Open...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Open &amp;Recent</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>New</source>
        <translation type="unfinished">Berria</translation>
    </message>
    <message>
        <source>Open...</source>
        <translation type="unfinished">Ireki...</translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Close</source>
        <translation type="unfinished">Itxi</translation>
    </message>
    <message>
        <source>&amp;Save</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Save</source>
        <translation type="unfinished">Gorde</translation>
    </message>
    <message>
        <source>Save &amp;As...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Save as...</source>
        <translation type="unfinished">Gorde honela...</translation>
    </message>
    <message>
        <source>Re&amp;vert to Saved</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Collect for O&amp;utput...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Get Text/Picture...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Append &amp;Text...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Import &amp;Page(s)...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Import</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Save &amp;Text...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Save Page as &amp;EPS...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Save as P&amp;DF...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Export</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Document &amp;Information...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Document Info...</source>
        <translation type="unfinished">Dokumentuaren informazioa...</translation>
    </message>
    <message>
        <source>Document &amp;Setup...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Document Setup...</source>
        <translation type="unfinished">Dokumentuaren konfigurazioa...</translation>
    </message>
    <message>
        <source>&amp;Print...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Print...</source>
        <translation type="unfinished">Inprimatu...</translation>
    </message>
    <message>
        <source>&amp;Quit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Quit</source>
        <translation type="unfinished">Irten</translation>
    </message>
    <message>
        <source>&amp;Undo</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cu&amp;t</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Copy</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Paste</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>C&amp;lear</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Select &amp;All</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cut</source>
        <translation type="unfinished">Ebaki</translation>
    </message>
    <message>
        <source>Copy</source>
        <translation type="unfinished">Kopiatu</translation>
    </message>
    <message>
        <source>Paste</source>
        <translation type="unfinished">Itsatsi</translation>
    </message>
    <message>
        <source>Clear</source>
        <translation type="unfinished">Garbitu</translation>
    </message>
    <message>
        <source>Select all</source>
        <translation type="unfinished">Hautatu dena</translation>
    </message>
    <message>
        <source>&amp;Search/Replace...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>C&amp;olors...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Colors...</source>
        <translation type="unfinished">Koloreak...</translation>
    </message>
    <message>
        <source>&amp;Paragraph Styles...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Line Styles...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Styles...</source>
        <translation type="unfinished">Estiloak...</translation>
    </message>
    <message>
        <source>&amp;Templates...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Templates...</source>
        <translation type="unfinished">Txantiloiak...</translation>
    </message>
    <message>
        <source>&amp;Javascripts...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Select New Font</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>D&amp;uplicate</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Duplicate</source>
        <translation type="unfinished">Bikoiztu</translation>
    </message>
    <message>
        <source>&amp;Multiple Duplicate</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Multiple Duplicate</source>
        <translation type="unfinished">Kopia bat baino gehiago</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Delete</source>
        <translation type="unfinished">Ezabatu</translation>
    </message>
    <message>
        <source>&amp;Group</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Group</source>
        <translation type="unfinished">Elkartu</translation>
    </message>
    <message>
        <source>&amp;Ungroup</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Un-group</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Lock</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Send to &amp;Back</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Send to Back</source>
        <translation type="unfinished">Bidali atzera</translation>
    </message>
    <message>
        <source>Bring to &amp;Front</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Bring to Front</source>
        <translation type="unfinished">Ekarri aurrera</translation>
    </message>
    <message>
        <source>&amp;Lower</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Lower</source>
        <translation type="unfinished">Beheratu</translation>
    </message>
    <message>
        <source>&amp;Raise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Raise</source>
        <translation type="unfinished">Goratu</translation>
    </message>
    <message>
        <source>Distribute/&amp;Align...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Distribute/Align...</source>
        <translation type="unfinished">Banatu/Lerrokatu...</translation>
    </message>
    <message>
        <source>&amp;Edit Shape</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Shape</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Attach Text to Path</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Detach Text from Path</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Combine Polygons</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Split &amp;Polygons</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>C&amp;onvert to Outlines</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Insert...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Insert...</source>
        <translation type="unfinished">Txertatu...</translation>
    </message>
    <message>
        <source>&amp;Delete...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Delete...</source>
        <translation type="unfinished">Ezabatu...</translation>
    </message>
    <message>
        <source>&amp;Move...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Move...</source>
        <translation type="unfinished">Lekuz aldatu...</translation>
    </message>
    <message>
        <source>&amp;Apply Template...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Apply Template...</source>
        <translation type="unfinished">Aplikatu txantiloia...</translation>
    </message>
    <message>
        <source>Manage &amp;Guides...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Manage Guides...</source>
        <translation type="unfinished">Kudeatu gidak...</translation>
    </message>
    <message>
        <source>&amp;Fit in Window</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Fit in Window</source>
        <translation type="unfinished">Doitu leihora</translation>
    </message>
    <message>
        <source>50%</source>
        <translation type="unfinished">% 50</translation>
    </message>
    <message>
        <source>75%</source>
        <translation type="unfinished">% 75</translation>
    </message>
    <message>
        <source>&amp;100%</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>100%</source>
        <translation type="unfinished">% 100</translation>
    </message>
    <message>
        <source>200%</source>
        <translation type="unfinished">% 200</translation>
    </message>
    <message>
        <source>&amp;Thumbnails</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Thumbnails</source>
        <translation type="unfinished">Koadro txikiak</translation>
    </message>
    <message>
        <source>Show &amp;Margins</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Hide Margins</source>
        <translation type="unfinished">Ezkutatu marjinak</translation>
    </message>
    <message>
        <source>Show &amp;Frames</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Hide Frames</source>
        <translation type="unfinished">Ezkutatu markoak</translation>
    </message>
    <message>
        <source>Show &amp;Images</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Hide Images</source>
        <translation type="unfinished">Ezkutatu irudiak</translation>
    </message>
    <message>
        <source>Show &amp;Grid</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Show Grid</source>
        <translation type="unfinished">Erakutsi sareta</translation>
    </message>
    <message>
        <source>Show G&amp;uides</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Show &amp;Baseline Grid</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Sn&amp;ap to Grid</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Snap to Grid</source>
        <translation type="unfinished">Atxiki saretari</translation>
    </message>
    <message>
        <source>Sna&amp;p to Guides</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Properties</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Properties</source>
        <translation type="unfinished">Propietateak</translation>
    </message>
    <message>
        <source>&amp;Outline</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Outline</source>
        <translation type="unfinished">Eskema</translation>
    </message>
    <message>
        <source>&amp;Scrapbook</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Scrapbook</source>
        <translation type="unfinished">Berri laburren albuma</translation>
    </message>
    <message>
        <source>&amp;Layers</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>P&amp;age Palette</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Bookmarks</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Manage Pictures</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Manage Pictures</source>
        <translation type="unfinished">Kudeatu irudiak</translation>
    </message>
    <message>
        <source>&amp;Hyphenate Text</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Hyphenate Text</source>
        <translation type="unfinished">Zatitu testua</translation>
    </message>
    <message>
        <source>Toolti&amp;ps</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Tools</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>P&amp;DF Tools</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Tools</source>
        <translation type="unfinished">Tresnak</translation>
    </message>
    <message>
        <source>Tooltips</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>P&amp;references...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Fonts...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Fonts...</source>
        <translation type="unfinished">Letra-tipoak...</translation>
    </message>
    <message>
        <source>&amp;Hyphenator...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Keyboard Shortcuts...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;About Scribus</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>About Scribus</source>
        <translation type="unfinished">Scribus-i buruz</translation>
    </message>
    <message>
        <source>About &amp;Qt</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>About Qt</source>
        <translation type="unfinished">Qt-i buruz</translation>
    </message>
    <message>
        <source>Scribus &amp;Manual...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Online-Help...</source>
        <translation type="unfinished">On line laguntza...</translation>
    </message>
    <message>
        <source>&amp;File</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Edit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>St&amp;yle</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Item</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;View</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>E&amp;xtras</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Windows</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Help</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Left</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Center</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Right</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Block</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Forced</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Other...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> pt</source>
        <translation type="unfinished"> pt</translation>
    </message>
    <message>
        <source>Underline</source>
        <translation type="unfinished">Azpimarra</translation>
    </message>
    <message>
        <source>Strikethru</source>
        <translation type="unfinished">Marratua</translation>
    </message>
    <message>
        <source>Small Caps</source>
        <translation type="unfinished">Maiuskula txikiak</translation>
    </message>
    <message>
        <source>Superscript</source>
        <translation type="unfinished">Goi-indizea</translation>
    </message>
    <message>
        <source>Subscript</source>
        <translation type="unfinished">Azpindizea</translation>
    </message>
    <message>
        <source>Outlined</source>
        <translation type="unfinished">Kanpoko ertza</translation>
    </message>
    <message>
        <source>X-Pos:</source>
        <translation type="unfinished">X posizioa:</translation>
    </message>
    <message>
        <source>Y-Pos:</source>
        <translation type="unfinished">Y posizioa:</translation>
    </message>
    <message>
        <source> mm</source>
        <translation type="unfinished"> mm</translation>
    </message>
    <message>
        <source> in</source>
        <translation type="unfinished"> in</translation>
    </message>
    <message>
        <source> p</source>
        <translation type="unfinished"> p</translation>
    </message>
    <message>
        <source>Ready</source>
        <translation type="unfinished">Prest</translation>
    </message>
    <message>
        <source>&amp;Cascade</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Tile</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>None</source>
        <translation type="unfinished">Bat ere ez</translation>
    </message>
    <message>
        <source>Get Text/Picture...</source>
        <translation type="unfinished">Eskuratu testua/irudia...</translation>
    </message>
    <message>
        <source>Get Picture...</source>
        <translation type="unfinished">Eskuratu irudia...</translation>
    </message>
    <message>
        <source>&amp;Color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Invert</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Get Text...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Font</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Effects</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Alignment</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Shade</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Tabulators...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Get Text...</source>
        <translation type="unfinished">Eskuratu testua...</translation>
    </message>
    <message>
        <source>Font</source>
        <translation type="unfinished">Letra-tipoa</translation>
    </message>
    <message>
        <source>Size</source>
        <translation type="unfinished">Tamaina</translation>
    </message>
    <message>
        <source>Style</source>
        <translation type="unfinished">Estiloa</translation>
    </message>
    <message>
        <source>Color</source>
        <translation type="unfinished">Kolorea</translation>
    </message>
    <message>
        <source>Shade</source>
        <translation type="unfinished">Itzala</translation>
    </message>
    <message>
        <source>Un&amp;lock</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Open</source>
        <translation type="unfinished">Ireki</translation>
    </message>
    <message>
        <source>Documents (*.sla *.sla.gz *.scd *.scd.gz);;All Files (*)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Documents (*.sla *.scd);;All Files (*)</source>
        <translation type="unfinished">Dokumentuak (*.sla *.scd);; Fitxategi guztiak (*)</translation>
    </message>
    <message>
        <source>Importing Pages...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Import Page(s)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;p&gt;You are trying to import more pages than there are available in the current document counting from the active page.&lt;/p&gt;Choose one of the following:&lt;br&gt;&lt;ul&gt;&lt;li&gt;&lt;b&gt;Create&lt;/b&gt; missing pages&lt;/li&gt;&lt;li&gt;&lt;b&gt;Import&lt;/b&gt; pages until the last page&lt;/li&gt;&lt;li&gt;&lt;b&gt;Cancel&lt;/b&gt;&lt;/li&gt;&lt;/ul&gt;&lt;br&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Create</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Import</source>
        <translation type="unfinished">Inportatu</translation>
    </message>
    <message>
        <source>Import done</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Found nothing to import</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Warning</source>
        <translation type="unfinished">Abisua</translation>
    </message>
    <message>
        <source>File %1 is not in Scribus format</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>OK</source>
        <translation type="unfinished">Ados</translation>
    </message>
    <message>
        <source>Loading...</source>
        <translation type="unfinished">Kargatzen...</translation>
    </message>
    <message>
        <source>All Supported Formats</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>All Files (*)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Can&apos;t write the File: 
%1</source>
        <translation type="unfinished">Ezin da fitxategi hau idatzi:
%1</translation>
    </message>
    <message>
        <source>Save as</source>
        <translation type="unfinished">Gorde honela</translation>
    </message>
    <message>
        <source>Documents (*.sla *.sla.gz *.scd *scd.gz);;All Files (*)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Saving...</source>
        <translation type="unfinished">Gordetzen...</translation>
    </message>
    <message>
        <source>Printing...</source>
        <translation type="unfinished">Inprimatzen...</translation>
    </message>
    <message>
        <source>Document</source>
        <translation type="unfinished">Dokumentua</translation>
    </message>
    <message>
        <source>Printing failed!</source>
        <translation type="unfinished">Inprimatzeak huts egin du!</translation>
    </message>
    <message>
        <source>Scribus Manual</source>
        <translation type="unfinished">Scribus-en eskuliburua</translation>
    </message>
    <message>
        <source>Text Files (*.txt);;All Files(*)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Size:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Shade:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Hide Baseline Grid</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Show Baseline Grid</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The following Programs are missing:</source>
        <translation type="unfinished">Programa hauek falta dira:</translation>
    </message>
    <message>
        <source>Ghostscript : You cannot use EPS Images</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>All</source>
        <translation type="unfinished">Denak</translation>
    </message>
    <message>
        <source>EPS-Files (*.eps);;All Files (*)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>pt</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>mm</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>in</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>p</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Some Objects are locked.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation type="unfinished">Utzi</translation>
    </message>
    <message>
        <source>Lock all</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Unlock all</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Unlock</source>
        <translation type="unfinished">Desblokeatu</translation>
    </message>
    <message>
        <source>Lock</source>
        <translation type="unfinished">Blokeatu</translation>
    </message>
    <message>
        <source>Loading:</source>
        <translation type="unfinished">Kargatzen:</translation>
    </message>
    <message>
        <source>Adjusting Colors</source>
        <translation type="unfinished">Koloreak doitzen</translation>
    </message>
    <message>
        <source>&amp;Undo Delete Object</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Undo Object Move</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Undo Object Change</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>German</source>
        <translation type="unfinished">Alemana</translation>
    </message>
    <message>
        <source>Polish</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>English</source>
        <translation type="unfinished">Ingelesa</translation>
    </message>
    <message>
        <source>Spanish</source>
        <translation type="unfinished">Gaztelera</translation>
    </message>
    <message>
        <source>Italian</source>
        <translation type="unfinished">Italiera</translation>
    </message>
    <message>
        <source>French</source>
        <translation type="unfinished">Frantsesa</translation>
    </message>
    <message>
        <source>Russian</source>
        <translation type="unfinished">Errusiera</translation>
    </message>
    <message>
        <source>Danish</source>
        <translation type="unfinished">Daniera</translation>
    </message>
    <message>
        <source>Slovak</source>
        <translation type="unfinished">Eslovakiera</translation>
    </message>
    <message>
        <source>Hungarian</source>
        <translation type="unfinished">Hungariera</translation>
    </message>
    <message>
        <source>Czech</source>
        <translation type="unfinished">Txekiera</translation>
    </message>
    <message>
        <source>Dutch</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Portuguese</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Ukrainian</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Greek</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Catalan</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Finnish</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Irish</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Lithuanian</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Swedish</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Slovenian</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Afrikaans</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Choose a Directory</source>
        <translation type="unfinished">Aukeratu direktorioa</translation>
    </message>
    <message>
        <source>Invert</source>
        <translation type="unfinished">Alderantzikatu</translation>
    </message>
    <message>
        <source>Scribus Crash</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Scribus crashes due to Signal #%1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Font System Initialized</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Portuguese (BR)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>There are no suitable Fonts on your System</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;qt&gt;Color management is supported but can not currently be enabled. Make sure you have ICC color profiles installed and that the profile path in the preferences points to where they&apos;re installed.&lt;/qt&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;qt&gt;Color management is not supported by this Scribus build (not compiled in).&lt;/qt&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Croatian</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ScribusView</name>
    <message>
        <source> %</source>
        <translation type="unfinished"> %</translation>
    </message>
    <message>
        <source>Layer</source>
        <translation type="unfinished">Geruza</translation>
    </message>
    <message>
        <source>pt</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>mm</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>in</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>p</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>All</source>
        <translation type="unfinished">Denak</translation>
    </message>
    <message>
        <source>Copy of</source>
        <translation type="unfinished">Honen kopia</translation>
    </message>
</context>
<context>
    <name>ScribusWin</name>
    <message>
        <source>&amp;Leave Anyway</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>C&amp;lose Anyway</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Warning</source>
        <translation type="unfinished">Abisua</translation>
    </message>
    <message>
        <source>Document:</source>
        <translation type="unfinished">Dokumentua:</translation>
    </message>
    <message>
        <source>has been changed since the last save.</source>
        <translation type="unfinished">aldatu egin da azken aldiz gorde zenetik.</translation>
    </message>
    <message>
        <source>&amp;Save Now</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ScripterCore</name>
    <message>
        <source>&amp;Scribus Scripts</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Execute Script...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Run a Python script from a file.</source>
        <comment>scripter</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Load Extension Script...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Load a Python script as an extension. Used for loading macros and for advanced Python scripts that extend the Scribus user interface.</source>
        <comment>scripter</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Recent Scripts</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Show &amp;Console</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Display an interactive Python console where you can write and run Python programs that use the Scripter tools.</source>
        <comment>scripter</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;About Script...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>S&amp;cript</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Scripter &amp;Settings</source>
        <comment>script menu</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Open</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Python Scripts (*.py);; All Files (*)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Script error</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>If you are running an official script report it at &lt;a href=&quot;http://bugs.scribus.net&quot;&gt;bugs.scribus.net&lt;/a&gt; please.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>This message is in your clipboard too. Use Ctrl+V to paste it into bug tracker.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Scribus - Script Plugin</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The &apos;Load Script&apos; function of the script plugin is currently disabled.
If you just want to run a normal script, you probably want to use
&apos;Execute Script...&apos; instead.

If you do actually want to load a Python extension script or macro, you
need to go into the Scripter Settings in the Script menu and enable
scripter extensions there.

Please read the documentation on extension scripts first.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Hide &amp;Console</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>About Script</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ScripterPreferences</name>
    <message>
        <source>Scribus - Scripter Preferences</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Enable Scripter Extensions</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Turn on extension scripts and macros</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;qt&gt;&lt;p&gt;Enabling scripter extensions turns on additional scripter functionality including Python macros and the option of loading a Python script at start-up. Turning on this option unlocks the &lt;tt&gt;Load Extension Script&lt;/tt&gt; item in the Script menu.&lt;/p&gt;
&lt;p&gt;
Only scripts written to be run as extension scripts should be used with &lt;tt&gt;Load Extension Script&lt;/tt&gt; or as start-up scripts. See the scripter documentation for more details.&lt;/p&gt;&lt;/qt&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Use a Startup Script</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;qt&gt;&lt;p&gt;If &lt;tt&gt;Use a Startup Script&lt;/tt&gt; is checked, Scribus will load the script file specified here as an extension script at start-up. It is important that the script be written as an extension script, as if not written carefully it can potentially cause problems.&lt;/p&gt;
&lt;p&gt;&lt;tt&gt;Use a Startup Script&lt;/tt&gt; will be disabled if scripter extensions are off, as extension scripts cannot be loaded without scripter extensions enabled.&lt;/p&gt;&lt;/qt&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Browse...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Browse for a new script file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;qt&gt;Browse for a new script file&lt;/qt&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>What script file to load at start-up</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;qt&gt;&lt;p&gt;The file containing the Python script to run as an extension script at start-up.&lt;/p&gt;
&lt;p&gt;Note that when this script is run, Scribus has not completely started up and the workspace does not yet exist.&lt;/p&gt;&lt;/qt&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Script File:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt+C</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Close without saving changes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Ok</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt+O</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Save changes and close</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Advanced Options</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Import All Names at Startup</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Run &apos;from scribus import *&apos; in the script console at start-up</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;qt&gt;&lt;p&gt;&lt;tt&gt;Import All Names at Startup&lt;/tt&gt; is an advanced option. You should probably leave it checked unless you have read the documentation and know what you are doing.&lt;/p&gt;
&lt;p&gt;Unchecking this option will prevent the scripter from running its usual &lt;tt&gt;from scribus import *&lt;/tt&gt; command when it initializes the main interpreter (used for the script console and extension scripts) at start-up.&lt;/p&gt;
&lt;p&gt;This option does not take effect until Scribus is restarted.&lt;/p&gt;&lt;/qt&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Enable Legacy Name Aliases</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;qt&gt;Enable the use of OldStyle function names&lt;/qt&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;qt&gt;&lt;p&gt;&lt;tt&gt;Enable Legacy Aliases&lt;/tt&gt; is an advanced option. You should probably leave it how it is.&lt;/p&gt;
&lt;p&gt;If checked, this option will cause the scripter to create a large number of function and constant name aliases for 1.2.0 script compatibility. It defaults to checked.&lt;/p&gt;
&lt;p&gt;This option does not take effect until Scribus is restarted.&lt;/p&gt;&lt;/qt&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Use Fake Stdin</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;qt&gt;Replace sys.stdin with a fake file to prevent Scribus hanging when a script tries to read from stdin.&lt;/qt&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;qt&gt;&lt;p&gt;&lt;tt&gt;Use Fake Stdin&lt;/tt&gt; is an advanced option. You should probably leave it how it is.&lt;/p&gt;
&lt;p&gt;Normally, scribus will provide Python with a fake file object for &lt;tt&gt;sys.stdin&lt;/tt&gt;, so that reads from stdin always return an empty string. If the real &lt;tt&gt;sys.stdin&lt;/tt&gt; is left in place, scripts that try to read from it will block - and in turn block scribus&apos;s execution, making the app appear to hang - until input arrives on stdin. It&apos;s unusual for GUI apps to expect anything on stdin, so mostly users will think scribus has crashed.&lt;/p&gt;
&lt;p&gt;You can disable this option if you want to accept input on stdin. Generally you should use &lt;tt&gt;os.popen&lt;/tt&gt; to make a pipe instead, or use some other input mechanism, but this option is here just in case.&lt;/p&gt;&lt;/qt&gt;</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>SeList</name>
    <message>
        <source>Show Page Previews</source>
        <translation type="unfinished">Erakutsi orrialdeen aurrebistak</translation>
    </message>
</context>
<context>
    <name>SeView</name>
    <message>
        <source>Show Template Names</source>
        <translation type="unfinished">Erakutsi txantiloi-izenak</translation>
    </message>
</context>
<context>
    <name>SearchReplace</name>
    <message>
        <source>Search/Replace</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Search for:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Text</source>
        <translation type="unfinished">Testua</translation>
    </message>
    <message>
        <source>Paragraph Style</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Font</source>
        <translation type="unfinished">Letra-tipoa</translation>
    </message>
    <message>
        <source>Font Size</source>
        <translation type="unfinished">Letra-tamaina</translation>
    </message>
    <message>
        <source>Font Effects</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Fill Color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Fill Shade</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Stroke Color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Stroke Shade</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Left</source>
        <translation type="unfinished">Ezkerrean</translation>
    </message>
    <message>
        <source>Center</source>
        <translation type="unfinished">Erdian</translation>
    </message>
    <message>
        <source>Right</source>
        <translation type="unfinished">Eskuinean</translation>
    </message>
    <message>
        <source>Block</source>
        <translation type="unfinished">Blokeatu</translation>
    </message>
    <message>
        <source>Forced</source>
        <translation type="unfinished">Behartuta</translation>
    </message>
    <message>
        <source> pt</source>
        <translation type="unfinished"> pt</translation>
    </message>
    <message>
        <source>None</source>
        <translation type="unfinished">Bat ere ez</translation>
    </message>
    <message>
        <source>Replace with:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Whole Word</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Ignore Case</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Search</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Replace</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Replace &amp;All</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Search finished</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>OK</source>
        <translation type="unfinished">Ados</translation>
    </message>
    <message>
        <source>C&amp;lear</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>SeitenPal</name>
    <message>
        <source>Arrange Pages</source>
        <translation type="unfinished">Antolatu orrialdeak</translation>
    </message>
    <message>
        <source>Available Templates:</source>
        <translation type="unfinished">Erabilgarri dauden txantiloiak:</translation>
    </message>
    <message>
        <source>Document Pages:</source>
        <translation type="unfinished">Dokumentuaren orrialdeak:</translation>
    </message>
    <message>
        <source>Facing Pages</source>
        <translation type="unfinished">Aurrez aurre dauden orrialdeak</translation>
    </message>
    <message>
        <source>Left Page first</source>
        <translation type="unfinished">Ezkerreko orrialdea lehenbizi</translation>
    </message>
    <message>
        <source>Drag Pages or Template Pages onto the Trashbin to delete them.</source>
        <translation type="unfinished">Arrastatu orrialdeak edo txantiloi-orrialdeak zakarrontzira ezabatzeko.</translation>
    </message>
    <message>
        <source>Previews all the pages of your document.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Here are all your Templates, to create a new Page
drag a Template to the Pageview below.</source>
        <translation type="unfinished">Hemen daude zure txantiloi guztiak; orrialde berria sortzeko, arrastatu
txantiloia beheko orrialde-ikuspegira.</translation>
    </message>
    <message>
        <source>Normal</source>
        <translation type="unfinished">Normala</translation>
    </message>
</context>
<context>
    <name>SelectFields</name>
    <message>
        <source>Select Fields</source>
        <translation type="unfinished">Hautatu eremuak</translation>
    </message>
    <message>
        <source>Available Fields</source>
        <translation type="unfinished">Erabilgarri dauden eremuak</translation>
    </message>
    <message>
        <source>&amp;&gt;&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;&lt;&lt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Selected Fields</source>
        <translation type="unfinished">Hautatutako eremuak</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ShadeButton</name>
    <message>
        <source>Other...</source>
        <translation type="unfinished">Bestelakoak...</translation>
    </message>
    <message>
        <source>&amp;Shade:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Shade</source>
        <translation type="unfinished">Itzala</translation>
    </message>
</context>
<context>
    <name>SideBar</name>
    <message>
        <source>No Style</source>
        <translation type="unfinished">Estilorik ez</translation>
    </message>
</context>
<context>
    <name>Spalette</name>
    <message>
        <source>No Style</source>
        <translation type="unfinished">Estilorik ez</translation>
    </message>
</context>
<context>
    <name>StilFormate</name>
    <message>
        <source>Edit Styles</source>
        <translation type="unfinished">Editatu estiloak</translation>
    </message>
    <message>
        <source>&amp;Append</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;New</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Edit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>D&amp;uplicate</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Save</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Copy of %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>New Style</source>
        <translation type="unfinished">Estilo berria</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation type="unfinished">Abisua</translation>
    </message>
    <message>
        <source>No</source>
        <translation type="unfinished">Ez</translation>
    </message>
    <message>
        <source>Yes</source>
        <translation type="unfinished">Bai</translation>
    </message>
    <message>
        <source>Open</source>
        <translation type="unfinished">Ireki</translation>
    </message>
    <message>
        <source>Documents (*.sla *.sla.gz *.scd *.scd.gz);;All Files (*)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Documents (*.sla *.scd);;All Files (*)</source>
        <translation type="unfinished">Dokumentuak (*.sla *.scd);; Fitxategi guztiak (*)</translation>
    </message>
    <message>
        <source>Do you really want to delete this Style?</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>StoryEditor</name>
    <message>
        <source>Story Editor</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;New</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Reload Text from Frame</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Save to File...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Load from File...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Save &amp;Document</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Update Text Frame and Exit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Exit Without Updating Text Frame</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Select &amp;All</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cu&amp;t</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Copy</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Paste</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>C&amp;lear</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Search/Replace...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Insert Special...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Edit Styles...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Fonts Preview...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Update Text Frame</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Background...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Display Font...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;File</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Edit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>File</source>
        <translation type="unfinished">Fitxategia</translation>
    </message>
    <message>
        <source>Clear all Text</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Load Text from File</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Save Text to File</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Update Text Frame and Exit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Exit Without Updating Text Frame</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Reload Text from Frame</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Update Text Frame</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Search/Replace</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Current Paragraph:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Words: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Chars: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Totals:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Paragraphs: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Warning</source>
        <translation type="unfinished">Abisua</translation>
    </message>
    <message>
        <source>Do you want to save your changes?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Do you really want to lose all your Changes?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Do you really want to clear all your Text?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Open</source>
        <translation type="unfinished">Ireki</translation>
    </message>
    <message>
        <source>Text Files (*.txt);;All Files(*)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Save as</source>
        <translation type="unfinished">Gorde honela</translation>
    </message>
    <message>
        <source>&amp;Smart text selection</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>StyleSelect</name>
    <message>
        <source>Underline</source>
        <translation type="unfinished">Azpimarra</translation>
    </message>
    <message>
        <source>Small Caps</source>
        <translation type="unfinished">Maiuskula txikiak</translation>
    </message>
    <message>
        <source>Subscript</source>
        <translation type="unfinished">Azpindizea</translation>
    </message>
    <message>
        <source>Superscript</source>
        <translation type="unfinished">Goi-indizea</translation>
    </message>
    <message>
        <source>Strike Out</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Outline Text</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>SxwDialog</name>
    <message>
        <source>Use document name as a prefix for paragraph styles</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Do not ask again</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>OK</source>
        <translation type="unfinished">Ados</translation>
    </message>
    <message>
        <source>OpenOffice.org Writer Importer Options</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Update Paragraph Styles</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Enabling this will overwrite existing stlyes in the current Scribus document</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Merge Paragraph Styles</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Merge paragraph styles by attributes. This will result in fewer similar paragraph styles, will retain style attributes, even if the original document&apos;s styles are named differently.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Prepend the document name to the paragraph style name in Scribus.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Make these settings the default and do not prompt again when importing an OpenOffice.org 1.x document.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>TabManager</name>
    <message>
        <source>Manage Tabulators</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>Tabruler</name>
    <message>
        <source>Left</source>
        <translation type="unfinished">Ezkerrean</translation>
    </message>
    <message>
        <source>Right</source>
        <translation type="unfinished">Eskuinean</translation>
    </message>
    <message>
        <source>Full Stop</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Comma</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Center</source>
        <translation type="unfinished">Erdian</translation>
    </message>
    <message>
        <source>&amp;Position:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>First &amp;Line:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Delete All</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Indentation for first line of the paragraph</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Indentation from the left for the whole paragraph</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Delete all Tabulators</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> pt</source>
        <translation type="unfinished"> pt</translation>
    </message>
    <message>
        <source> mm</source>
        <translation type="unfinished"> mm</translation>
    </message>
    <message>
        <source> in</source>
        <translation type="unfinished"> in</translation>
    </message>
    <message>
        <source> p</source>
        <translation type="unfinished"> p</translation>
    </message>
    <message>
        <source>Left Ind&amp;ent:</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>Tree</name>
    <message>
        <source>Outline</source>
        <translation type="unfinished">Eskema</translation>
    </message>
    <message>
        <source>Element</source>
        <translation type="unfinished">Elementua</translation>
    </message>
    <message>
        <source>Type</source>
        <translation type="unfinished">Mota</translation>
    </message>
    <message>
        <source>Information</source>
        <translation type="unfinished">Informazioa</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation type="unfinished">Abisua</translation>
    </message>
    <message>
        <source>Name &quot;%1&quot; isn&apos;t unique.
Please choose another.</source>
        <translation type="unfinished">&quot;%1&quot; izena badago lehendik ere.
Aukeratu beste bat.</translation>
    </message>
    <message>
        <source>OK</source>
        <translation type="unfinished">Ados</translation>
    </message>
    <message>
        <source>X:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Y:</source>
        <translation type="unfinished">Y:</translation>
    </message>
    <message>
        <source>Font:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Group </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Image</source>
        <translation type="unfinished">Irudia</translation>
    </message>
    <message>
        <source>Text</source>
        <translation type="unfinished">Testua</translation>
    </message>
    <message>
        <source>Line</source>
        <translation type="unfinished">Lerroa</translation>
    </message>
    <message>
        <source>Polygon</source>
        <translation type="unfinished">Poligonoa</translation>
    </message>
    <message>
        <source>Polyline</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>PathText</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Page</source>
        <translation type="unfinished">Orrialdea</translation>
    </message>
</context>
<context>
    <name>ValueDialog</name>
    <message>
        <source>Insert value</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Enter a value then press OK.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Enter a value then press OK</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt+O</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Send your value to the script</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>VlnaDialog</name>
    <message>
        <source>Short Words</source>
        <comment>short words plugin</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Apply unbreakable space on:</source>
        <comment>short words plugin</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Selected frames</source>
        <comment>short words plugin</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Active &amp;page</source>
        <comment>short words plugin</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;All items</source>
        <comment>short words plugin</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <comment>short words plugin</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <comment>short words plugin</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Info and
Languages</source>
        <comment>short words plugin</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Replace defaults by user config</source>
        <comment>short words plugin</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>When the user config file exists 
(%1)
you can choose if you want to append your config
to the global configuration by unchecked button.

You can replace predefined values by yours
with checked button too.</source>
        <comment>short words plugin</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Only selected frames processed.</source>
        <comment>short words plugin</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Only actual page processed.</source>
        <comment>short words plugin</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>All items in document processed.</source>
        <comment>short words plugin</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Short Words for Scribus</source>
        <comment>short words plugin</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Available in the following languages</source>
        <comment>short words plugin</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>About Short Words</source>
        <comment>short words plugin</comment>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>WerkToolB</name>
    <message>
        <source>Tools</source>
        <translation type="unfinished">Tresnak</translation>
    </message>
    <message>
        <source>Select Items</source>
        <translation type="unfinished">Hautatu elementuak</translation>
    </message>
    <message>
        <source>Insert Text Frame</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Insert Picture</source>
        <translation type="unfinished">Txertatu irudia</translation>
    </message>
    <message>
        <source>Insert Table</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Properties...</source>
        <translation type="unfinished">Propietateak...</translation>
    </message>
    <message>
        <source>Insert Polygons</source>
        <translation type="unfinished">Txertatu poligonoak</translation>
    </message>
    <message>
        <source>Insert Lines</source>
        <translation type="unfinished">Txertatu marrak</translation>
    </message>
    <message>
        <source>Insert Bezier Curves</source>
        <translation type="unfinished">Txertatu Bezier kurbak</translation>
    </message>
    <message>
        <source>Insert Freehand Line</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Rotate Item</source>
        <translation type="unfinished">Biratu elementua</translation>
    </message>
    <message>
        <source>Zoom in or out</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Edit Contents of Frame</source>
        <translation type="unfinished">Editatu markoaren edukia</translation>
    </message>
    <message>
        <source>Edit the text with the Story Editor</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Link Text Frames</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Unlink Text Frames</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Do measurements</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Draw various Shapes</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>WerkToolBP</name>
    <message>
        <source>PDF Tools</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Button</source>
        <translation type="unfinished">Botoia</translation>
    </message>
    <message>
        <source>Text Field</source>
        <translation type="unfinished">Testu-eremua</translation>
    </message>
    <message>
        <source>Check Box</source>
        <translation type="unfinished">Kontrol-laukia</translation>
    </message>
    <message>
        <source>Combo Box</source>
        <translation type="unfinished">Konbinazio-koadroa</translation>
    </message>
    <message>
        <source>List Box</source>
        <translation type="unfinished">Zerrenda-koadroa</translation>
    </message>
    <message>
        <source>Insert PDF Fields</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Text</source>
        <translation type="unfinished">Testua</translation>
    </message>
    <message>
        <source>Link</source>
        <translation type="unfinished">Esteka</translation>
    </message>
    <message>
        <source>Insert PDF Annotations</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ZAuswahl</name>
    <message>
        <source>Select Character:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Insert</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>C&amp;lear</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Insert the characters at the cursor in the text</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Delete the current selection(s).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Close this dialog and return to text editing.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>gtFileDialog</name>
    <message>
        <source>Choose the importer to use</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Automatic</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Import text without any formatting</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Importer:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Encoding:</source>
        <translation type="unfinished">Kodeketa:</translation>
    </message>
    <message>
        <source>Import Text Only</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>gtImporterDialog</name>
    <message>
        <source>Choose the importer to use</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source></source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Remember association</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Remember the file extension - importer association
and do not ask again to select an importer for
files of this type.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>OK</source>
        <translation type="unfinished">Ados</translation>
    </message>
</context>
<context>
    <name>nftdialog</name>
    <message>
        <source>New From Template</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Remove</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Open</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>All</source>
        <translation type="unfinished">Denak</translation>
    </message>
    <message>
        <source>Name</source>
        <translation type="unfinished">Izena:</translation>
    </message>
    <message>
        <source>Page Size</source>
        <translation type="unfinished">Orrialde-tamaina</translation>
    </message>
    <message>
        <source>Colors</source>
        <translation type="unfinished">Koloreak</translation>
    </message>
    <message>
        <source>Description</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Usage</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Created with</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Date</source>
        <translation type="unfinished">Data</translation>
    </message>
    <message>
        <source>Author</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Downloading Templates</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Document templates can be found at http://www.scribus.net/ in the Downloads section.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Installing Templates</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Extract the package to the template directory ~/.scribus/templates for the current user or PREFIX/share/scribus/templates for all users in the system.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Preparing a template</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Make sure images and fonts you use can be used freely. If fonts cannot be shared do not collect them when saving as a template.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The template creator should also make sure that the Installing Templates section above applies to their templates as well. This means a user should be able to download a template package and be able to extract them to the template directory and start using them.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Removing a template</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Removing a template from the New From Template dialog will only remove the entry from the template.xml, it will not delete the document files. A popup menu with remove is only shown if you have write access to the template.xml file.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Translating template.xml</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Copy an existing template.xml to a file called template.lang_COUNTRY.xml (use the same lang code that is present in the qm file for your language), for example template.fi.xml for Finnish language template.xml. The copy must be located in the same directory as the original template.xml so Scribus can load it.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>satdialog</name>
    <message>
        <source>Save as Template</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Name</source>
        <translation type="unfinished">Izena:</translation>
    </message>
    <message>
        <source>Category</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Page Size</source>
        <translation type="unfinished">Orrialde-tamaina</translation>
    </message>
    <message>
        <source>Colors</source>
        <translation type="unfinished">Koloreak</translation>
    </message>
    <message>
        <source>Description</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Usage</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Author</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Email</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>More Details</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>OK</source>
        <translation type="unfinished">Ados</translation>
    </message>
    <message>
        <source>Less Details</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Legal</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Letter</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Tabloid</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>landscape</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>portrait</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>custom</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>tfDia</name>
    <message>
        <source>Create filter</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>C&amp;lear</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Choose a previously saved filter</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Give a name to this filter for saving</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Give a name for saving</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>tfFilter</name>
    <message>
        <source>Disable or enable this filter row</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Remove this filter row</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Add a new filter row</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>to</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>and</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>remove match</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>do not remove match</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>words</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Remove</source>
        <translation type="unfinished">Kendu</translation>
    </message>
    <message>
        <source>Replace</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Apply</source>
        <translation type="unfinished">Aplikatu</translation>
    </message>
    <message>
        <source>Value at the left is a regular expression</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>with</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>paragraph style</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>all instances of</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>all paragraphs</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>paragraphs starting with</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>paragraphs with less than</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>paragraphs with more than</source>
        <translation type="unfinished"></translation>
    </message>
</context>
</TS>
