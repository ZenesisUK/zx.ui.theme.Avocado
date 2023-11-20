/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2004-2010 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
 * Martin Wittemann (martinwittemann)

 ************************************************************************ */
/**
 * Mixin for the box shadow CSS property. This mixin is usually used by
 * {@link qx.ui.decoration.Decorator}.
 *
 * Keep in mind that this is not supported by all browsers:
 *  * Firefox 3,5+ * IE9+ * Safari 3.0+ * Opera 10.5+ * Chrome 4.0+
 */
qx.Mixin.define("zx.ui.theme.avocado.MCssBoxShadow", {
  properties: {
    /** The shadow, CSS3 spec */
    cssShadow: {
      nullable: true
    }
  },

  members: {
    /**
     * Takes a styles map and adds the box shadow styles in place to the given
     * map. This is the needed behavior for {@link qx.ui.decoration.Decorator}.
     *
     * @param styles
     *          {Map} A map to add the styles.
     */
    _styleCssBoxShadow(styles) {
      var shadow = this.getCssShadow();
      var propName = qx.core.Environment.get("css.boxshadow");
      if (!propName || shadow == null || !qx.lang.Type.isArray(shadow) || shadow.length == 0) return;

      var Color = qx.theme.manager.Color.getInstance();
      var value = "";

      function process(shadow) {
        shadow = shadow.slice(0);
        var hLength = shadow.shift() || 0;
        var vLength = shadow.shift() || 0;
        var blur = 0;
        var spread = 0;
        var color = null;
        var inset = false;
        if (shadow.length && shadow[shadow.length - 1] == "inset") {
          inset = true;
          shadow.pop();
        }
        if (shadow.length) color = shadow.pop();
        if (shadow.length) blur = shadow.shift();
        if (shadow.length) spread = shadow.shift();

        if (qx.core.Environment.get("qx.theme")) color = Color.resolve(color);

        if (color != null) {
          if (value.length) value += ", ";
          value += hLength + "px " + vLength + "px " + blur + "px " + spread + "px " + color + (inset ? " inset" : "");
        }
      }

      if (qx.lang.Type.isArray(shadow[0])) shadow.forEach(process);
      else process(shadow);

      // apply or append the box shadow styles
      propName = qx.bom.Style.getCssName(propName);
      if (!styles[propName]) {
        styles[propName] = value;
      } else {
        styles[propName] += "," + value;
      }
    },

    // property apply
    _applyShadow() {
      if (qx.core.Environment.get("qx.debug")) {
        if (this._isInitialized()) {
          throw new Error("This decorator is already in-use. Modification is not possible anymore!");
        }
      }
    }
  }
});


