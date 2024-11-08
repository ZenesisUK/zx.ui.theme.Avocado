/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2004-2010 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     MIT: https://opensource.org/licenses/MIT
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Tristan Koch (tristankoch)

************************************************************************ */

/**
 * Demonstrates qx.ui.control(...):
 *
 * ColorSelector
 * ColorPopup
 * DateChooser
 *
 */

qx.Class.define("zx.ui.theme.avocado.demo.pages.Control", {
  extend: zx.ui.theme.avocado.demo.pages.AbstractPage,

  construct() {
    super();

    this.__vbox = new qx.ui.container.Composite(new qx.ui.layout.VBox(20));
    this.add(this.__vbox, { top: 0 });

    this.initWidgets();
  },

  members: {
    __vbox: null,

    initWidgets() {
      var widgets = (this._widgets = new qx.type.Array());
      var label;

      // ColorSelector
      label = new qx.ui.basic.Label("ColorSelector");
      var colorSelector = new qx.ui.control.ColorSelector();
      widgets.push(colorSelector);
      this.__vbox.add(label);
      this.__vbox.add(colorSelector);

      // ColorPopup
      label = new qx.ui.basic.Label("ColorPopup");
      var colorPopup = new qx.ui.control.ColorPopup();
      colorPopup.exclude();

      var openColorPopup = new qx.ui.form.Button("Open Color Popup").set({
        maxWidth: 150
      });
      widgets.push(openColorPopup);
      this.__vbox.add(label);
      this.__vbox.add(openColorPopup);
      openColorPopup.addListener("execute", function () {
        colorPopup.placeToWidget(openColorPopup, true);
        colorPopup.show();
      });

      // DateChooser
      var dateChooser = new qx.ui.control.DateChooser().set({ maxWidth: 240 });
      label = new qx.ui.basic.Label("DateChooser");
      widgets.push(dateChooser);
      this.__vbox.add(label);
      this.__vbox.add(dateChooser);
    }
  }
});
