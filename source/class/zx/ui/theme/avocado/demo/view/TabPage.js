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

/* ************************************************************************


************************************************************************ */

/**
 *
 * @asset(qxl/widgetbrowser/loading66.gif)
 * @use(zx.ui.theme.avocado.demo.pages.Tree)
 * @use(zx.ui.theme.avocado.demo.pages.List)
 * @use(zx.ui.theme.avocado.demo.pages.Table)
 * @use(zx.ui.theme.avocado.demo.pages.Form)
 * @use(zx.ui.theme.avocado.demo.pages.ToolBar)
 * @use(zx.ui.theme.avocado.demo.pages.Window)
 * @use(zx.ui.theme.avocado.demo.pages.Tab)
 * @use(zx.ui.theme.avocado.demo.pages.Control)
 * @use(zx.ui.theme.avocado.demo.pages.Embed)
 * @use(zx.ui.theme.avocado.demo.pages.EmbedFrame)
 * @use(zx.ui.theme.avocado.demo.pages.Basic)
 * @use(zx.ui.theme.avocado.demo.pages.Misc)
 */

qx.Class.define("zx.ui.theme.avocado.demo.view.TabPage", {
  extend: qx.ui.tabview.Page,

  include: zx.ui.theme.avocado.demo.MControls,

  construct(label, classname, controls) {
    super();

    this.setLabel(label);
    this.setLayout(new qx.ui.layout.Canvas());

    // Load content of tab on "appear"
    this.addListenerOnce(
      "appear",
      function () {
        var clazz = qx.Class.getByName(classname);
        /* eslint-disable-next-line new-cap */
        var pageContent = new clazz();
        // Add to page
        this.add(pageContent, { top: 40, edge: 0 });
        // Init controls for widgets of page
        this.initControls(pageContent.getWidgets(), controls);
        // Exclude loading indicator
        loading.setVisibility("excluded");
      },
      this
    );

    // Show centered loading indicator
    var loading = new qx.ui.basic.Image("qxl/widgetbrowser/loading66.gif");
    loading.setMarginTop(-33);
    loading.setMarginLeft(-33);
    this.add(loading, { left: "50%", top: "50%" });
  },

  members: {}
});
