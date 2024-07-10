/* ************************************************************************
 *
 *  Zen [and the art of] CMS
 *
 *  https://zenesis.com
 *
 *  Copyright:
 *    2023 Zenesis Ltd, https://www.zenesis.com
 *
 *  License:
 *    MIT (see LICENSE in project root)
 *
 *  Authors:
 *    John Spackman (john.spackman@zenesis.com, @johnspackman)
 *    Patryk Malinowski (@p9malino26)
 *    Will Johnson (@WillsterJohnsonAtZenesis)
 *
 * ************************************************************************ */

/**
 * @usefont(MaterialIcons)
 */
const COMBOBOX_BUTTON_WIDTH = 35;
const SLIDER_THICKNESS = 15;
const SCROLLBAR_THICKNESS = 25;
const TABLE_COL_BTN_WIDTH = 24;
const VERT_TABARROW_PADDING = 17;
const SCROLLBAR_TRACK_THICKNESS = 20;
const SCROLLBAR_THUMB_THICKNESS = 14;
const SCROLLBAR_THUMB_PADDING =
  (SCROLLBAR_TRACK_THICKNESS - SCROLLBAR_THUMB_THICKNESS) / 2;
const TITLEBAR_HEIGHT = 25;
const scrollBarButton = {
  style(states) {
    let horizontal = states.left || states.right;
    return {
      height: horizontal ? undefined : TITLEBAR_HEIGHT,
      width: horizontal ? TITLEBAR_HEIGHT : undefined,
      padding: 0
    };
  }
};
const HELPER = {
  pickDecorator(name, states) {
    if (states.readonly) {
      name += "-readonly";
    } else if (states.disabled) {
      name += "-disabled";
    } else if (states.focused) {
      name += "-focused";
      if (states.invalid) {
        name += "-invalid";
      }
    } else if (states.invalid) {
      name += "-invalid";
    }
    return name;
  },

  getTextPadding(states) {
    var padding = [3, 0, 4, 0];
    if (states.readonly) {
      padding = [3, 0, 5, 0];
    } else if (states.focused) {
      padding = [3, 0, 3, 0];
    }
    return padding;
  }
};

qx.Theme.define("zx.ui.theme.avocado.Appearance", {
  appearances: {
    "table-filter-header-cell": {
      style(states) {
        return {
          minWidth: 13,
          minHeight: 33,
          padding: states.hovered ? [3, 6, 2, 6] : [3, 6],
          decorator: states.hovered
            ? "table-header-cell-hovered"
            : "table-header-cell"
        };
      }
    },

    "table-filter-header-cell/filter-icon": {
      style(states) {
        return {
          padding: 0,
          margin: 0,
          decorator:
            states.pressed ||
            (states.checked && !states.hovered) ||
            (states.checked && states.disabled)
              ? "table-filter-button-checked"
              : states.hovered && !states.disabled
              ? "table-filter-button-hovered"
              : undefined
        };
      }
    },
    "tabview/system-button/icon": "atom",
    // "searchfield/btnSearch/icon": "atom",

    "text-shadow-label": {
      style(states) {
        return {
          decorator: "text-shadow",
          textColor: states.disabled ? "text-disabled" : undefined
        };
      }
    },

    "app-navitem-row": "gtree-row",
    "app-navitem-row/content/arrow": {
      style(states) {
        return {
          padding: 0,
          source: undefined, //states.hovered ? "grasshopper/decoration/app/smart/navitem-arrow.png" : undefined,
          minHeight: 18,
          maxHeight: 18
        };
      }
    },

    "toolbar-slim-button": {
      style(states) {
        return {
          marginTop: 1,
          marginBottom: 1,
          padding: 0,
          decorator:
            states.pressed ||
            (states.checked && !states.hovered) ||
            (states.checked && states.disabled)
              ? "toolbar-button-checked"
              : states.hovered && !states.disabled
              ? "toolbar-button-hovered"
              : "toolbar-button"
        };
      }
    },

    skinnybutton: {
      include: "button-frame",

      style(states) {
        return {
          padding: [0, 6],
          center: true
        };
      }
    },

    "checked-item": {
      style(states) {
        return {
          padding: states.dragover ? [2, 2, 1, 2] : 2,
          textColor: states.selected ? "half-selected" : "text-on-surface"
          // decorator: states.selected ? "selected" : undefined
        };
      }
    },

    "checked-item/label": {
      include: "atom",
      style(states) {
        return {
          padding: [2, 0, 0, 0]
        };
      }
    },

    "table-zoomedout": {
      include: "table",

      style(states, style) {
        style = qx.lang.Object.clone(style || {});
        style.font = "tiny";
        return style;
      }
    },

    pane: {
      style(states) {
        return {
          decorator: "groupbox",
          backgroundColor: "box",
          margin: 2
        };
      }
    },

    "button/icon": {
      style(states) {
        return {
          minWidth: 16,
          minHeight: 16,
          textColor: states.disabled
            ? "text-disabled-on-primary"
            : "text-on-primary"
        };
      }
    },

    "widget/buttonShrink": "button",
    "widget/labelShrink": "label",

    "tabview-button": "tabview-page/button",

    progress: {
      style(states) {
        return {
          backgroundColor: "box",
          padding: 20,
          decorator: "progress"
        };
      }
    },

    /*
    ---------------------------------------------------------------------------
      CORE
    ---------------------------------------------------------------------------
    */

    // WIDGET
    widget: {
      style(states) {
        return {
          textColor: "text-on-widget"
        };
      }
    },

    label: {
      style(states) {
        return {
          textColor: states.disabled
            ? "text-disabled-on-surface"
            : "text-on-surface",
          height: null,
          paddingBottom: 4
        };
      }
    },

    //IMAGE
    image: {
      style(states) {
        return {
          textColor: states.disabled
            ? "text-disabled-on-surface"
            : "text-on-surface",
          opacity: !states.replacement && states.disabled ? 0.3 : undefined
        };
      }
    },

    atom: {},
    "atom/label": "label",
    "atom/icon": "image",

    root: {
      style(states) {
        return {
          backgroundColor: "surface",
          textColor: "text-primary-on-surface",
          font: "default",
          blockerColor: "black",
          blockerOpacity: 0.2
        };
      }
    },

    popup: {
      style(states) {
        return {
          decorator: "popup",
          backgroundColor: "surface"
        };
      }
    },

    tooltip: {
      include: "popup",

      style(states) {
        return {
          backgroundColor: "widget",
          textColor: "text-on-widget",
          decorator: "tooltip",
          padding: [1, 3, 2, 3],
          offset: [10, 5, 5, 5]
        };
      }
    },

    "tooltip/atom": "atom",

    "tooltip/atom/label": {
      style(states) {
        return {
          textColor: "text-on-widget"
        };
      }
    },

    "tooltip-error": {
      include: "tooltip",

      style(states) {
        return {
          textColor: "text-on-error",
          showTimeout: 100,
          hideTimeout: 10000,
          decorator: "tooltip-error",
          font: "bold",
          backgroundColor: undefined
        };
      }
    },

    "tooltip-error/atom": "atom",

    iframe: {
      style(states) {
        return {
          backgroundColor: "surface",
          decorator: "main"
        };
      }
    },

    "move-frame": {
      style(states) {
        return { decorator: "main" };
      }
    },

    "resize-frame": "move-frame",

    "dragdrop-cursor": {
      style(states) {
        var icon = "nodrop";

        if (states.copy) {
          icon = "copy";
        } else if (states.move) {
          icon = "move";
        } else if (states.alias) {
          icon = "alias";
        }

        return {
          source: zx.ui.theme.avocado.Image.URLS["cursor-" + icon],
          position: "right-top",
          offset: [2, 16, 2, 6]
        };
      }
    },

    // MATERIAL-BUTTON
    "material-button": {
      style(states) {
        var decorator = "material-button";

        if (!states.disabled) {
          if (states.pressed || states.checked) {
            decorator += "-pressed";
          } else if (states.hovered || states.focused) {
            decorator += "-hovered";
          }
        } else {
          decorator += "-disabled";
        }

        return {
          decorator: decorator,
          padding: [4, 8],
          margin: [2, 4],
          cursor: states.disabled ? undefined : "pointer",
          minWidth: 5,
          minHeight: 5
        };
      }
    },

    "material-button/label": {
      style(states) {
        return {
          textColor: states.disabled
            ? "text-disabled-on-primary"
            : "text-on-primary"
        };
      }
    },

    "material-button/icon": {
      style(states) {
        return {
          textColor: states.disabled
            ? "text-disabled-on-primary"
            : "text-on-primary"
        };
      }
    },
    /*
    ---------------------------------------------------------------------------
      BUTTON
    ---------------------------------------------------------------------------
    */

    button: {
      /* qx.ui.form.Button */

      include: "material-button",
      style(states) {
        return { center: true };
      }
    },

    "button/label": {
      include: "material-button/label",
      style(states) {
        return {
          textColor: states.disabled
            ? "text-disabled-on-primary"
            : "text-on-primary"
        };
      }
    },

    "toggle-button": {
      include: "button",
      style(states) {
        return {
          decorator:
            "toggle-button" +
            (states.checked ? "-checked" : "") +
            (states.disabled ? "-disabled" : "") +
            (!states.disabled && states.hovered ? "-hovered" : ""),
          textColor: states.disabled
            ? "text-disabled-on-primary"
            : "text-on-primary"
        };
      }
    },

    "toggle-button/label": {
      include: "button/label",
      style(states) {
        if (states.checked) {
          return {
            textColor: undefined
          };
        }
        return {
          textColor: undefined
        };
      }
    },

    "hover-button": {
      include: "button",

      style(states) {
        return {
          decorator: states.hovered ? "button-hover" : undefined
        };
      }
    },

    menubutton: {
      include: "button",
      style(states) {
        return {
          icon: zx.ui.theme.avocado.Image.URLS["arrow-down"],
          iconPosition: "right"
        };
      }
    },

    "menubutton/label": "button/label",
    "menubutton/icon": "button/icon",

    /*
    ---------------------------------------------------------------------------
      TEXT FIELD
    ---------------------------------------------------------------------------
    */

    textfield: {
      style(states) {
        var decorator;
        decorator = "material-textfield";
        if (states.readonly) {
          decorator += "-readonly";
        }
        if (states.disabled) {
          decorator += "-disabled";
        }
        if (states.focused) {
          decorator += "-focused";
        }
        if (states.invalid) {
          decorator += "-invalid";
        }

        return {
          decorator: decorator,
          padding: [2, 7],
          textColor: states.showingPlaceholder
            ? undefined
            : "text-on-widget" +
              (states.disabled || states.readonly ? "-disabled" : ""),
          backgroundColor: "textbox-background"
        };
      }
    },
    textarea: "textfield",

    // FRAMEBOX
    framebox: {
      style(states) {
        var decorator;
        var padding = [1, 2];

        return {
          padding: padding,
          backgroundColor: "widget",
          textColor: states.disabled
            ? "text-on-widget-disabled"
            : states.showingPlaceholder
            ? "text-hint-on-surface"
            : undefined,
          decorator: "framebox"
        };
      }
    },
    //COMPLEX WIDGET
    "complex-widget": {
      style(states) {
        return {
          backgroundColor: "widget",
          padding: 10
        };
      }
    },

    /*
    ---------------------------------------------------------------------------
      SPLIT BUTTON
    ---------------------------------------------------------------------------
    */
    splitbutton: {},

    "splitbutton/button": {
      style(states) {
        var decorator = "material-button";

        if (!states.disabled) {
          if (states.pressed || states.checked) {
            decorator += "-pressed";
          } else if (states.hovered) {
            decorator += "-hovered";
          } else if (states.focused) {
            decorator += "-focused";
          }
        } else {
          decorator += "-disabled";
        }

        decorator += "-left";

        return {
          decorator: decorator,
          padding: [4, 8, 4, 8],
          margin: [2, 0, 2, 4],
          cursor: states.disabled ? undefined : "pointer",
          textColor: "text-primary-on-surface"
        };
      }
    },
    "splitbutton/button/label": "button/label",

    "splitbutton/arrow": {
      style(states) {
        var decorator = "material-button";

        if (!states.disabled) {
          if (states.pressed || states.checked) {
            decorator += "-pressed";
          } else if (states.focused) {
            decorator += "-focused";
          } else if (states.hovered) {
            decorator += "-hovered";
          }
        } else {
          decorator += "-disabled";
        }

        decorator += "-right";

        return {
          icon: zx.ui.theme.avocado.Image.URLS["arrow-down"],
          decorator: decorator,
          cursor: states.disabled ? undefined : "pointer",
          padding: [4, 10, 4, 4],
          margin: [2, 4, 2, 0],
          textColor: "text-on-primary",
          maxWidth: 25,
          backgroundColor: "primary"
        };
      }
    },

    "splitbutton/arrow/icon": {
      style(states) {
        return {
          textColor: "text-icon-on-primary"
        };
      }
    },

    /*
    ---------------------------------------------------------------------------
      SLIDEBAR
    ---------------------------------------------------------------------------
    */

    slidebar: {},
    "slidebar/scrollpane": {},
    "slidebar/content": {},

    "slidebar/button": {
      include: "button",
      style(states) {
        return {
          decorator: "slidebar-button",
          backgroundColor: "primary",
          width: 20,
          paddingLeft: 0
        };
      }
    },

    "slidebar/button-forward": {
      include: "slidebar/button",
      style(states) {
        return {
          icon: zx.ui.theme.avocado.Image.URLS[
            "arrow-" + (states.vertical ? "down" : "right")
          ]
        };
      }
    },

    "slidebar/button-backward": {
      include: "slidebar/button",

      style(states) {
        return {
          icon: zx.ui.theme.avocado.Image.URLS[
            "arrow-" + (states.vertical ? "up" : "left")
          ]
        };
      }
    },
    /*
    ---------------------------------------------------------------------------
      COMBO BOX
    ---------------------------------------------------------------------------
    */

    combobox: {
      style(states) {
        return {
          decorator: states.invalid
            ? "combobox-invalid"
            : states.focused
            ? "combobox-focused"
            : "combobox",
          backgroundColor: "widget"
        };
      }
    },

    "combobox/button": {
      include: "button",

      style(states) {
        var decorator = "combobox-button";
        if (states.disabled) decorator += "-disabled";
        else if (states.pressed) decorator += "-pressed";
        else if (states.hovered) decorator += "-hovered";
        return {
          icon: zx.ui.theme.avocado.Image.URLS["arrow-down"],
          padding: [0, 0, 0, 0],
          margin: 0,
          width: COMBOBOX_BUTTON_WIDTH,
          decorator: decorator
        };
      }
    },
    "combobox/button/icon": {
      style(states) {
        return {
          padding: [0, 2, 0, 0]
        };
      }
    },

    "combobox/popup": "popup",
    "combobox/list": {
      include: "list",
      style(states) {
        return {
          paddingRight: 2
        };
      }
    },

    "combobox/textfield": {
      include: "textfield",
      style(states) {
        return {
          decorator: "combobox-textfield"
        };
      }
    },

    "combobox/list/scrollbar-y": "scrollbar",
    "combobox/list/scrollbar-x": "scrollbar",

    /*
    ---------------------------------------------------------------------------
      SELECTBOX
    ---------------------------------------------------------------------------
    */

    selectbox: "combobox",

    "selectbox/atom": {
      style(states) {
        return {
          paddingLeft: 10
        };
      }
    },
    "selectbox/atom/label": {
      style(states) {
        return {
          textColor: states.disabled
            ? "text-on-widget-disabled"
            : "text-on-widget"
        };
      }
    },
    "selectbox/atom/icon": "selectbox/atom/label",
    "selectbox/popup": "popup",
    "selectbox/list": {
      include: "list",

      style() {
        return { decorator: undefined };
      }
    },
    "selectbox/list/scrollbar-x": "scrollbar",
    "selectbox/list/scrollbar-y": "scrollbar",

    "selectbox/arrow": {
      include: "image",

      style(states) {
        return {
          source: zx.ui.theme.avocado.Image.URLS["arrow-down"],
          alignY: "middle",
          width: COMBOBOX_BUTTON_WIDTH,
          padding: 0,
          decorator: "combobox-button",
          backgroundColor: "primary",
          textColor: "text-on-primary"
        };
      }
    },

    "selectbox-arrow-button": {
      include: "widget",
      style(states) {
        return {
          backgroundColor: "primary"
        };
      }
    },

    /*
    ---------------------------------------------------------------------------
      CHECKED SELECT BOX
    ---------------------------------------------------------------------------
    */
    "checked-selectbox": "selectbox",
    "checked-selectbox/allNone": {
      include: "button",
      style(states) {
        return {
          padding: [2, 10],
          textColor: "text-on-primary"
        };
      }
    },

    "checked-selectbox/tag": "tag",
    tag: {
      include: "button",
      style(states) {
        return {
          padding: [1, 7],
          margin: 0,
          decorator: "tag"
        };
      }
    },

    /*
    ---------------------------------------------------------------------------
      TABLE
    ---------------------------------------------------------------------------
    */

    table: {
      style(states) {
        return {
          decorator: "table",
          rowHeight: 30
        };
      }
    },

    "table/statusbar": {
      style(states) {
        return {
          decorator: "table-statusbar",
          padding: [2, 5],
          textColor: "text-on-table-header"
        };
      }
    },

    "table/column-button": {
      style(states) {
        return {
          // decorator: "table-header-column-button",
          textColor: "text-primary-on-surface",
          backgroundColor: "table-header",
          padding: 3,
          icon: zx.ui.theme.avocado.Image.URLS["select-column-order"],
          width: TABLE_COL_BTN_WIDTH
        };
      }
    },

    "table-column-reset-button": {
      include: "menu-button",
      style() {
        return {
          decorator: "table-header-column-button",
          icon: "icon/16/actions/view-refresh.png"
        };
      }
    },

    "table-scroller": {
      style(states) {
        return {
          backgroundColor: "widget"
        };
      }
    },

    "table-scroller/scrollbar-x": "scrollbar",
    "table-scroller/scrollbar-y": "scrollbar",

    "table-scroller/header": {
      style() {
        return {
          decorator: "table-header"
        };
      }
    },

    "table-scroller/pane": {
      style(states) {
        return {};
      }
    },

    "table-scroller/focus-indicator": {
      style(states) {
        return {
          // attention hackerery in the qx.ui.table.pane.Scroller
          // decorator: "table-scroller-focus-indicator"
          // gets applied hardcoded! So do not try to change its
          // name here!
        };
      }
    },

    "table-scroller/resize-line": {
      style(states) {
        return {
          backgroundColor: "text-hint-on-surface",
          width: 3
        };
      }
    },

    "table-header-cell": {
      style(states) {
        return {
          decorator: states.first
            ? "table-header-cell-first"
            : "table-header-cell",
          minWidth: 13,
          font: "bold",
          paddingTop: 3,
          paddingLeft: 5,
          paddingBottom: 4,
          cursor: states.disabled ? undefined : "pointer",
          sortIcon: states.sorted
            ? zx.ui.theme.avocado.Image.URLS[
                "table-" + (states.sortedAscending ? "ascending" : "descending")
              ]
            : undefined
        };
      }
    },

    "table-header-cell/label": {
      include: "atom/label",

      style(states) {
        return {
          textColor: "text-on-table-header"
        };
      }
    },
    "table-header-cell/icon": {
      include: "atom/icon",

      style(states) {
        return {
          paddingRight: 5,
          textColor: "text-on-table-header"
        };
      }
    },

    "table-header-cell/sort-icon": {
      style(states) {
        return {
          alignY: "middle",
          alignX: "right",
          paddingRight: 5
        };
      }
    },

    "table-editor-textfield": {
      include: "framebox",

      style(states) {
        return {
          decorator: undefined,
          padding: [2, 2],
          backgroundColor: "widget"
        };
      }
    },

    "table-editor-selectbox": {
      include: "selectbox",

      style(states) {
        return {
          padding: [0, 2],
          backgroundColor: "surface"
        };
      }
    },

    "table-editor-combobox": {
      include: "combobox",

      style(states) {
        return {
          decorator: undefined,
          backgroundColor: "surface"
        };
      }
    },

    "progressive-table-header": {
      style(states) {
        return { decorator: "progressive-table-header" };
      }
    },

    "progressive-table-header-cell": {
      style(states) {
        return {
          decorator: "progressive-table-header-cell",
          padding: [5, 6, 5, 6]
        };
      }
    },

    /*
    ---------------------------------------------------------------------------
      TREEVIRTUAL
    ---------------------------------------------------------------------------
    */

    treevirtual: {
      style(states) {
        return {
          padding: [1, 2],
          backgroundColor: "box",
          decorator: "tree"
        };
      }
    },

    "treevirtual-folder": {
      style(states) {
        return {
          icon: states.opened
            ? zx.ui.theme.avocado.Image.URLS["folder-open"]
            : zx.ui.theme.avocado.Image.URLS["folder"],
          opacity: states.drag ? 0.5 : undefined
        };
      }
    },

    "treevirtual-file": {
      include: "treevirtual-folder",

      style(states) {
        return {
          icon: zx.ui.theme.avocado.Image.URLS["file"],
          opacity: states.drag ? 0.5 : undefined
        };
      }
    },

    "treevirtual-blank": {
      style(states) {
        return { icon: zx.ui.theme.avocado.Image.URLS["blank"] };
      }
    },

    "treevirtual-contract": {
      style(states) {
        return { icon: zx.ui.theme.avocado.Image.URLS["tree-minus"] };
      }
    },

    "treevirtual-expand": {
      style(states) {
        return { icon: zx.ui.theme.avocado.Image.URLS["tree-plus"] };
      }
    },

    "treevirtual-only-contract": "treevirtual-contract",
    "treevirtual-only-expand": "treevirtual-expand",
    "treevirtual-start-contract": "treevirtual-contract",
    "treevirtual-start-expand": "treevirtual-expand",
    "treevirtual-end-contract": "treevirtual-contract",
    "treevirtual-end-expand": "treevirtual-expand",
    "treevirtual-cross-contract": "treevirtual-contract",
    "treevirtual-cross-expand": "treevirtual-expand",
    "treevirtual-line": "treevirtual-blank",
    "treevirtual-end": "treevirtual-blank",
    "treevirtual-cross": "treevirtual-blank",

    /*
    ---------------------------------------------------------------------------
      RESIZER
    ---------------------------------------------------------------------------
    */

    resizer: {
      style(states) {
        return { decorator: "main" };
      }
    },

    /*
    ---------------------------------------------------------------------------
      SPLITPANE
    ---------------------------------------------------------------------------
    */

    splitpane: {},

    "splitpane/splitter": {
      style(states) {
        return { backgroundColor: "text-hint-on-surface" };
      }
    },

    "splitpane/splitter/knob": {
      style(states) {
        return {
          source:
            zx.ui.theme.avocado.Image.URLS[
              "knob-" + (states.horizontal ? "horizontal" : "vertical")
            ],

          padding: 0
        };
      }
    },

    "splitpane/slider": {
      style(states) {
        return {
          backgroundColor: "text-hint-on-surface",
          opacity: 0.3
        };
      }
    },

    /*
    ---------------------------------------------------------------------------
      MENU
    ---------------------------------------------------------------------------
    */

    menu: {
      style(states) {
        var result = {
          backgroundColor: "menu",
          decorator: "menu",
          spacingX: 6,
          spacingY: 1,
          iconColumnWidth: 16,
          arrowColumnWidth: 4,
          padding: 1,
          placementModeY:
            states.submenu || states.contextmenu ? "best-fit" : "keep-align"
        };

        if (states.submenu) {
          result.position = "right-top";
          result.offset = [-2, -3];
        }

        if (states.contextmenu) {
          result.offset = 4;
        }

        return result;
      }
    },

    "menu/slidebar": "menu-slidebar",

    "menu-slidebar": {
      include: "widget",
      style(states) {
        return {};
      }
    },

    "menu-slidebar-button": {
      style(states) {
        return {
          backgroundColor: states.hovered ? "primary-hovered" : undefined,
          padding: 6,
          center: true
        };
      }
    },

    "menu-slidebar/button-backward": {
      include: "menu-slidebar-button",

      style(states) {
        return {
          icon: zx.ui.theme.avocado.Image.URLS[
            "arrow-up" + (states.hovered ? "-invert" : "")
          ]
        };
      }
    },

    "menu-slidebar/button-forward": {
      include: "menu-slidebar-button",

      style(states) {
        return {
          icon: zx.ui.theme.avocado.Image.URLS[
            "arrow-down" + (states.hovered ? "-invert" : "")
          ]
        };
      }
    },
    "menu-slidebar/content": {
      style(states) {
        return {};
      }
    },

    "menu-separator": {
      style(states) {
        return {
          height: 0,
          decorator: "menu-separator",
          marginTop: 4,
          marginBottom: 4,
          marginLeft: 2,
          marginRight: 2
        };
      }
    },

    "menu-button": {
      style(states) {
        return {
          backgroundColor: states.selected ? "primary-selected" : undefined,
          padding: [2, 6]
        };
      }
    },

    "menu-button/icon": {
      include: "image",

      style(states) {
        return {
          alignY: "middle",
          textColor: states.selected
            ? "text-icon-on-primary"
            : "text-icon-on-surface"
        };
      }
    },

    "menu-button/label": {
      // include: "button/label",

      style(states) {
        return {
          alignY: "middle",
          padding: 1,
          textColor: states.selected ? "text-on-primary" : "text-on-surface"
        };
      }
    },

    "menu-button/shortcut": {
      include: "label",

      style(states) {
        return {
          alignY: "middle",
          marginLeft: 14,
          padding: 1
        };
      }
    },

    "menu-button/arrow": {
      include: "image",

      style(states) {
        return {
          source:
            zx.ui.theme.avocado.Image.URLS[
              "arrow-right" + (states.selected ? "-invert" : "")
            ],

          alignY: "middle"
        };
      }
    },

    "menu-checkbox": {
      include: "menu-button",

      style(states) {
        var icon = "menu-checkbox";
        if (states.checked) {
          icon += "-checked";
        }
        return { icon: zx.ui.theme.avocado.Image.URLS[icon] };
      }
    },

    "menu-radiobutton": {
      include: "menu-button",

      style(states) {
        var icon = "menu-radiobutton";
        if (states.checked) {
          icon += "-checked";
        }
        return { icon: zx.ui.theme.avocado.Image.URLS[icon] };
      }
    },

    /*
    ---------------------------------------------------------------------------
      MENU BAR
    ---------------------------------------------------------------------------
    */

    menubar: {
      style(states) {
        return {
          backgroundColor: "surface",
          padding: [4, 2]
        };
      }
    },

    "menubar-button": {
      style(states) {
        var decorator = "button-box";
        var padding = [2, 6];
        if (states.disabled) decorator += "-disabled";
        else if (states.pressed) decorator += "-pressed";

        return {
          padding: padding,
          cursor: states.disabled ? undefined : "pointer",
          decorator: decorator
        };
      }
    },

    "menubar-button/icon": {
      style(states) {
        return {
          textColor: states.disabled
            ? "text-disabled-on-surface"
            : states.pressed || states.hovered
            ? "text-on-primary"
            : "text-on-surface"
        };
      }
    },
    "menubar-button/label": {
      style(states) {
        return {
          textColor: states.disabled
            ? "text-disabled-on-primary"
            : "text-on-primary"
        };
      }
    },

    /*
    ---------------------------------------------------------------------------
      VIRTUAL WIDGETS
    ---------------------------------------------------------------------------
    */
    "virtual-list": {
      include: "list",
      style(states) {
        return {
          backgroundColor: "transparent"
        };
      }
    },

    "virtual-list/scrollbar-x": "scrollbar",
    "virtual-list/scrollbar-y": "scrollbar",
    "virtual-list/row-layer": "row-layer",

    "row-layer": {
      style() {
        return {
          backgroundColor: "widget",
          textColor: "text-on-widget"
        };
      }
    },
    "column-layer": {},

    "virtual-background-span": {
      style(states) {
        var style = {
          decorator: "virtual-background-span"
        };

        if (states.header) {
          style.decorator = "virtual-background-header";
          style.backgroundColor = "table-header-cell";
        } else if (states.selected) {
          style.backgroundColor = "table-row-background-selected";
        } else if (states.odd) {
          style.backgroundColor = "table-row-background-odd";
        } else {
          style.backgroundColor = "table-row-background-even";
        }

        return style;
      }
    },

    "virtual-list-header-cell": {
      style(states) {
        return {
          font: "bold",
          paddingTop: 3,
          paddingLeft: 5,
          backgroundColor: "table-header"
        };
      }
    },
    "virtual-list-header-cell-label": {
      style(states) {
        return {
          textColor: "text-on-table-header"
        };
      }
    },

    "group-item": {
      include: "label",

      style(states) {
        return {
          padding: 4,
          backgroundColor: "primary",
          textColor: "text-on-primary",
          font: "bold"
        };
      }
    },

    "virtual-selectbox": "selectbox",
    "virtual-selectbox/dropdown": "popup",
    "virtual-selectbox/dropdown/list": {},

    "virtual-combobox": "combobox",
    "virtual-combobox/dropdown": "popup",
    "virtual-combobox/dropdown/list": {},

    "virtual-tree": {
      include: "tree",

      style(states) {
        return { itemHeight: 21 };
      }
    },

    "virtual-tree-folder": "tree-folder",
    "virtual-tree-file": "tree-file",

    cell: {
      style(states) {
        return {
          textColor: states.selected
            ? "text-on-primary"
            : "text-primary-on-surface",
          padding: [3, 6],
          decorator: "cell"
        };
      }
    },

    "cell-string": "cell",
    "cell-number": {
      include: "cell",
      style(states) {
        return { textAlign: "right" };
      }
    },

    "cell-image": "cell",
    "cell-boolean": "cell",
    "cell-atom": "cell",
    "cell-date": "cell",
    "cell-html": "cell",

    /*
    ---------------------------------------------------------------------------
      SCROLLBAR
    ---------------------------------------------------------------------------
    */

    scrollbar: {
      style(states) {
        return {
          decorator: "scrollbar",
          backgroundColor: "white",
          width: states.horizontal ? undefined : SCROLLBAR_TRACK_THICKNESS,
          height: states.horizontal ? SCROLLBAR_TRACK_THICKNESS : undefined,
          padding: 2
        };
      }
    },
    "scrollbar/slider": {
      style(states) {
        return {
          decorator: "scroll-slider",
          backgroundColor: "box",
          width: states.horizontal ? undefined : SCROLLBAR_TRACK_THICKNESS,
          height: states.horizontal ? SCROLLBAR_TRACK_THICKNESS : undefined,
          padding: SCROLLBAR_THUMB_PADDING
        };
      }
    },

    "scrollbar/slider/knob": {
      style(states) {
        let decorator = "scroll-knob";
        if (!states.disabled) {
          if (states.hovered && !states.pressed && !states.checked) {
            decorator = "scroll-knob-hovered";
          } else if (states.hovered && (states.pressed || states.checked)) {
            decorator = "scroll-knob-pressed-hovered";
          } else if (states.pressed || states.checked) {
            decorator = "scroll-knob-pressed";
          }
        } else decorator = "scroll-knob-disabled";

        return {
          marginTop: states.horizontal ? 0 : 3,
          cursor: states.disabled ? undefined : "pointer",
          decorator,
          backgroundColor: "widget",
          minHeight: states.horizontal ? undefined : SCROLLBAR_THUMB_THICKNESS,
          minWidth: states.horizontal ? SCROLLBAR_THUMB_THICKNESS : undefined,
          maxWidth: states.horizontal ? undefined : SCROLLBAR_THUMB_THICKNESS,
          maxHeight: states.horizontal ? SCROLLBAR_THUMB_THICKNESS : undefined
        };
      }
    },

    "scroll-button-none": {
      style() {
        return {
          height: 0,
          width: 0,
          maxHeight: 0,
          maxWidth: 0,
          backgroundColor: "transparent",
          textColor: "transparent",
          decorator: undefined
        };
      }
    },
    "scrollbar/button-begin": "scroll-button-none",
    "scrollbar/button-end": "scroll-button-none",

    /*
    ---------------------------------------------------------------------------
      SCROLLAREA
    ---------------------------------------------------------------------------
    */

    "scrollarea/corner": {
      style(states) {
        return { backgroundColor: "surface" };
      }
    },

    scrollarea: "widget",
    "scrollarea/pane": "widget",
    "scrollarea/scrollbar-x": "scrollbar",
    "scrollarea/scrollbar-y": "scrollbar",

    /*
    ---------------------------------------------------------------------------
      RADIO BUTTON
    ---------------------------------------------------------------------------
    */

    radiobutton: {
      style(states) {
        return {
          icon: zx.ui.theme.avocado.Image.URLS[
            states.checked ? "radiobutton-checked" : "radiobutton-unchecked"
          ],

          paddingTop: 2,
          textColor: states.disabled
            ? "text-disabled-on-surface"
            : states.invalid
            ? "error"
            : states.checked
            ? "primary"
            : "text-primary-on-surface",
          gap: 6
        };
      }
    },

    "radiobutton/label": {
      style(states) {
        return {
          textColor: states.disabled
            ? "text-disabled-on-surface"
            : "text-on-surface"
        };
      }
    },
    "radiobutton/icon": {
      style(states) {
        return {
          decorator: "radiobutton",
          padding: [2, 0, 0, 0]
        };
      }
    },

    /*
    ---------------------------------------------------------------------------
      FORM
    ---------------------------------------------------------------------------
    */
    "form-renderer-label": {
      include: "label",
      style() {
        return { paddingTop: 3 };
      }
    },

    /*
    ---------------------------------------------------------------------------
      CHECK BOX
    ---------------------------------------------------------------------------
    */
    checkbox: {
      style(states) {
        return {
          icon: zx.ui.theme.avocado.Image.URLS[
            states.checked
              ? "checkbox-checked"
              : states.undetermined
              ? "checkbox-undetermined"
              : "checkbox-blank"
          ],

          textColor: states.disabled
            ? "text-disabled-on-surface"
            : states.invalid
            ? "error"
            : states.checked
            ? "primary"
            : "text-primary-on-surface",
          gap: 6
        };
      }
    },

    "checkbox/icon": {
      style(states) {
        return {
          decorator: "checkbox",
          padding: 0,
          textColor: states.disabled
            ? "text-disabled-on-surface"
            : states.invalid
            ? "error"
            : states.checked
            ? "primary"
            : "text-primary-on-surface"
        };
      }
    },

    "checkbox/label": "radiobutton/label",

    checkedlistitem: "checkedlist-checkbox",

    /*
    ---------------------------------------------------------------------------
      SPINNER
    ---------------------------------------------------------------------------
    */

    spinner: {
      include: "combobox",
      style(states) {
        return {
          textColor: states.disabled ? "text-disabled-on-surface" : undefined
          // decorator: "rounded-edges"
        };
      }
    },

    "spinner/textfield": {
      include: "textfield",
      style(states) {
        return {
          decorator: undefined,
          height: undefined
        };
      }
    },
    "spinner/button": {
      include: "combobox/button",
      style(states) {
        return {
          width: COMBOBOX_BUTTON_WIDTH,
          height: 6,
          padding: [-1, 0, 0, 0]
          // decorator: "spinner-button",
        };
      }
    },
    "spinner/button/icon": {
      style(states) {
        return {
          textColor: "text-on-primary"
        };
      }
    },

    "spinner/upbutton": {
      include: "spinner/button",
      style(states) {
        return {
          icon: zx.ui.theme.avocado.Image.URLS["arrow-up-small"],
          paddingTop: 0
          // decorator: "spinner-upbutton"
        };
      }
    },
    "spinner/upbutton/icon": "spinner/button/icon",

    "spinner/downbutton": {
      include: "spinner/button",
      style(states) {
        return {
          icon: zx.ui.theme.avocado.Image.URLS["arrow-down-small"],
          marginBottom: 0,
          paddingBottom: 2
          // decorator: "spinner-downbutton"
        };
      }
    },
    "spinner/downbutton/icon": "spinner/button/icon",

    /*
    ---------------------------------------------------------------------------
      DATEFIELD
    ---------------------------------------------------------------------------
    */

    datefield: {
      include: "combobox",
      alias: "combobox",
      style(states) {
        return {
          padding: 0,
          minWidth: 120
        };
      }
    },

    "datefield/button": {
      alias: "combobox/button",
      include: "combobox/button",

      style(states) {
        return {
          icon: zx.ui.theme.avocado.Image.URLS["calendar"],
          padding: [2, 0],
          margin: 0
        };
      }
    },

    "datefield/textfield": {
      include: "combobox/textfield"
    },
    "datefield/list": "datechooser",

    "datefield/popup": {
      style(states) {
        return {
          backgroundColor: "widget",
          decorator: "framebox"
        };
      }
    },

    /*
    ---------------------------------------------------------------------------
      SLIDER
    ---------------------------------------------------------------------------
    */

    slider: {
      style(states) {
        var decorator = "slider";
        if (states.disabled) decorator += "-disabled";
        else if (states.invalid) decorator += "-invalid";
        else if (states.focused) decorator += "-focused";

        return {
          padding: [1, 2],
          height: 25,
          backgroundColor: "widget",
          decorator: decorator
        };
      }
    },

    "slider/knob": {
      style(states) {
        var decorator = "slider-knob";
        if (states.disabled) decorator += "-disabled";
        return {
          cursor: states.disabled ? undefined : "pointer",
          backgroundColor: states.disabled ? "primary-disabled" : "primary",
          decorator,
          margin: 2,
          height: SLIDER_THICKNESS,
          minHeight: SLIDER_THICKNESS,
          maxHeight: SLIDER_THICKNESS,
          width: SLIDER_THICKNESS,
          minWidth: SLIDER_THICKNESS,
          maxWidth: SLIDER_THICKNESS
        };
      }
    },

    /*
    ---------------------------------------------------------------------------
      GROUP BOX
    ---------------------------------------------------------------------------
    */

    groupbox: {
      style(states) {
        return {
          decorator: "groupbox"
        };
      }
    },

    "groupbox/legend": {
      style(states) {
        return {
          textColor: states.invalid ? "error" : undefined,
          padding: [6, 0, 0, 6],
          margin: 0
        };
      }
    },

    "groupbox/frame": {
      style(states) {
        return {
          padding: [6, 9],
          margin: [14, 0, 0, 0],
          decorator: "groupbox-frame"
        };
      }
    },

    "check-groupbox": "groupbox",

    "check-groupbox/legend": {
      include: "checkbox",

      style(states) {
        return {
          textColor: states.invalid ? "error" : undefined,
          padding: 5,
          margin: 4,
          font: "bold"
        };
      }
    },

    "radio-groupbox": "groupbox",

    "radio-groupbox/legend": {
      include: "radiobutton",

      style(states) {
        return {
          textColor: states.invalid ? "error" : undefined,
          padding: 5,
          margin: 4,
          font: "bold"
        };
      }
    },
    /*
    ---------------------------------------------------------------------------
      LIST
    ---------------------------------------------------------------------------
    */

    list: {
      include: "framebox",
      style(states) {
        return {
          decorator: states.invalid
            ? "list-invalid"
            : states.focused
            ? "list-focused"
            : "list",
          padding: 0
        };
      }
    },

    "list/scrollbar-x": "scrollbar",
    "list/scrollbar-y": "scrollbar",

    listitem: {
      style(states) {
        var padding = [1, 5, 1, 5];
        if (states.lead) {
          padding = [2, 4, 1, 4];
        }
        if (states.dragover) {
          padding[2] -= 2;
        }

        let backgroundColor = "widget";
        if (states.selected) {
          backgroundColor += "-selected";
        } else if (states.disabled || states.readonly) {
          backgroundColor += "-disabled";
        }  

        return {
          padding: padding,
          backgroundColor,
          textColor: "text-on-" + backgroundColor,
          opacity: states.drag ? 0.5 : undefined,
          opacity: states.drag ? 0.5 : undefined
        };
      }
    },
    "listitem/label": {
      style(states) {
        let backgroundColor = "widget";
        if (states.disabled || states.readonly) {
          backgroundColor += "-disabled";
        } else if (states.selected) {
          backgroundColor += "-selected";
        }

        let style = {
          textColor: "text-on-" + backgroundColor
        };
        if (states.readonly || states.disabled) {
          style.font = "italic";
        }
        return style;
      }
    },
    "listitem/icon": "listitem/label",

    boldlistitem: "listitem",
    "boldlistitem/label": {
      style(states) {
        return {
          textColor: states.selected
            ? states.disabled
              ? "text-disabled-on-primary"
              : "text-on-widget"
            : "text-on-widget",
          font: "heavy"
        };
      }
    },

    /*
    ---------------------------------------------------------------------------
      TREE
    ---------------------------------------------------------------------------
    */

    tree: {
      style(states) {
        return {
          backgroundColor: "box",
          decorator: "tree"
        };
      }
    },

    "tree/scrollbar-x": "scrollbar",
    "tree/scrollbar-y": "scrollbar",

    "tree-folder/open": {
      include: "image",
      style(states) {
        return {
          source: states.opened
            ? zx.ui.theme.avocado.Image.URLS["tree-minus"]
            : zx.ui.theme.avocado.Image.URLS["tree-plus"],
          textColor: states.disabled
            ? "text-disabled-on-surface"
            : "text-on-surface"
        };
      }
    },

    "tree-folder": {
      style(states) {
        return {
          padding: [2, 8, 2, 5],
          icon: states.opened
            ? zx.ui.theme.avocado.Image.URLS["folder-open"]
            : zx.ui.theme.avocado.Image.URLS["folder"],
          textColor: states.disabled
            ? "text-disabled-on-surface"
            : "text-on-surface",
          iconOpened: zx.ui.theme.avocado.Image.URLS["folder-open"],
          opacity: states.drag ? 0.5 : undefined
        };
      }
    },

    "tree-folder/icon": {
      include: "image",
      style(states) {
        return {
          textColor: states.disabled
            ? "text-disabled-on-surface"
            : "text-on-surface",
          padding: [0, 4, 0, 0]
        };
      }
    },

    "tree-folder/label": {
      style(states) {
        return {
          textColor: states.disabled
            ? "text-disabled-on-surface"
            : "text-on-surface",
          padding: [1, 2]
        };
      }
    },

    "tree-file": {
      include: "tree-folder",

      style(states) {
        return { icon: zx.ui.theme.avocado.Image.URLS["file"] };
      }
    },

    /*
    ---------------------------------------------------------------------------
      WINDOW
    ---------------------------------------------------------------------------
    */

    window: {
      style(states) {
        return {
          contentPadding: [10, 10, 10, 10],
          backgroundColor: "surface",
          decorator: states.maximized
            ? undefined
            : states.active
            ? "window-active"
            : "window"
        };
      }
    },

    "window-resize-frame": "resize-frame",

    "window/pane": {
      style(states) {
        return { padding: 10 };
      }
    },

    "window/captionbar": {
      style(states) {
        return {
          backgroundColor: states.active ? "primary-focused" : "primary",
          margin: 0,
          padding: 8,
          decorator: "window-caption"
        };
      }
    },

    "window/icon": {
      style(states) {
        return {
          marginRight: 4,
          marginTop: 2
        };
      }
    },

    "window/title": {
      style(states) {
        return {
          cursor: "default",
          font: states.active ? "bold" : "default",
          textColor: states.active ? "text-on-primary" : "text-on-primary",
          marginRight: 20,
          marginLeft: 4,
          alignY: "middle"
        };
      }
    },

    "window/minimize-button": {
      style(states) {
        return {
          icon: zx.ui.theme.avocado.Image.URLS["window-minimize"] + "/18",
          padding: 0,
          cursor: states.disabled ? undefined : "pointer",
          textColor: "text-on-primary"
        };
      }
    },

    "window/restore-button": {
      style(states) {
        return {
          icon: zx.ui.theme.avocado.Image.URLS["window-restore"] + "/18",
          padding: 0,
          cursor: states.disabled ? undefined : "pointer",
          textColor: "text-on-primary"
        };
      }
    },

    "window/maximize-button": {
      style(states) {
        return {
          icon: zx.ui.theme.avocado.Image.URLS["window-maximize"] + "/18",
          padding: 0,
          cursor: states.disabled ? undefined : "pointer",
          textColor: "text-on-primary"
        };
      }
    },

    "window/close-button": {
      style(states) {
        return {
          icon: zx.ui.theme.avocado.Image.URLS["window-close"] + "/18",
          padding: 0,
          cursor: states.disabled ? undefined : "pointer",
          textColor: "text-on-primary"
        };
      }
    },

    "window/statusbar": {
      style(states) {
        return {
          decorator: "statusbar",
          padding: [2, 6]
        };
      }
    },

    "window/statusbar-text": "label",

    /*
    ---------------------------------------------------------------------------
      DATE CHOOSER
    ---------------------------------------------------------------------------
    */
    datechooser: {
      style(states) {
        return {
          decorator: "datechooser",
          minWidth: undefined,
          maxWidth: undefined,
          width: 250
        };
      }
    },

    "datechooser/navigation-bar": {
      style(states) {
        return {
          backgroundColor: "primary",
          // textColor: states.disabled ? "text-disabled-on-surface" : states.invalid ? "error" : "text-on-primary",
          padding: [2, 10],
          textColor: "#FF0000"
        };
      }
    },

    "datechooser/last-year-button-tooltip": "tooltip",
    "datechooser/last-month-button-tooltip": "tooltip",
    "datechooser/next-year-button-tooltip": "tooltip",
    "datechooser/next-month-button-tooltip": "tooltip",

    "datechooser/last-year-button": "datechooser/button",
    "datechooser/last-month-button": "datechooser/button",
    "datechooser/next-year-button": "datechooser/button",
    "datechooser/next-month-button": "datechooser/button",
    "datechooser/button/icon": {},

    "datechooser/button": {
      style(states) {
        var result = {
          width: 17,
          show: "icon",
          cursor: states.disabled ? undefined : "pointer",
          textColor: "text-on-widget"
        };

        if (states.lastYear) {
          result.icon = zx.ui.theme.avocado.Image.URLS["arrow-rewind"];
        } else if (states.lastMonth) {
          result.icon = zx.ui.theme.avocado.Image.URLS["arrow-left"];
        } else if (states.nextYear) {
          result.icon = zx.ui.theme.avocado.Image.URLS["arrow-forward"];
        } else if (states.nextMonth) {
          result.icon = zx.ui.theme.avocado.Image.URLS["arrow-right"];
        }

        return result;
      }
    },

    "datechooser/month-year-label": {
      style(states) {
        return {
          font: "bold",
          textAlign: "center",
          textColor: "text-on-widget"
        };
      }
    },

    "datechooser/date-pane": {
      //top line after month year
      style(states) {
        return {
          backgroundColor: "widget",
          textColor: "text-on-widget"
        };
      }
    },

    "datechooser/weekday": {
      style(states) {
        return {
          font: "bold",
          textAlign: "center",
          textColor: states.disabled
            ? "text-disabled-on-widget"
            : states.weekend
            ? "text-on-widget-selected"
            : "text-on-widget",
          paddingTop: 2,
          decorator: "datechooser-weekday"

          // width: 60,
        };
      }
    },

    "datechooser/day": {
      style(states) {
        let backgroundColor;

        if (states.selected && !(states.otherMonth || states.disabled)) {
          backgroundColor = "#FFFFFF44";
        } else if (states.today) {
          backgroundColor = "primary";
        } else backgroundColor = "transparent";

        return {
          textAlign: "center",
          backgroundColor,
          textColor:
            states.otherMonth || states.disabled
              ? "text-disabled-on-widget"
              : states.selected
              ? "text-on-widget-selected"
              : "text-on-widget",
          padding: states.today ? [1, 3] : [2, 4]
        };
      }
    },

    "datechooser/week": {
      style(states) {
        var decorator = "datechooser-week";
        if (states.header) decorator += "-header";
        return {
          textAlign: "center",
          textColor: "text-on-widget",
          padding: [2, 4],
          decorator: decorator
        };
      }
    },

    /*
    ---------------------------------------------------------------------------
      PROGRESSBAR
    ---------------------------------------------------------------------------
    */
    progressbar: {
      include: "complex-widget",
      style(states) {
        return {
          backgroundColor: "box",
          decorator: "progressbar",
          padding: 3,
          width: 200,
          height: 25
        };
      }
    },

    "progressbar/progress": {
      style(states) {
        return {
          backgroundColor: states.disabled ? "primary-disabled" : "primary",
          decorator: "progressbar-progress"
        };
      }
    },

    /*
    ---------------------------------------------------------------------------
      TOOLBAR
    ---------------------------------------------------------------------------
    */

    toolbar: {
      style(states) {
        return {
          padding: [0, 6],
          decorator: "toolbar"
        };
      }
    },

    "toolbar/part": {
      style(states) {
        return {
          margin: [0, 15, 0, 0]
        };
      }
    },

    "toolbar/part/container": {},
    "toolbar/part/handle": {},

    "toolbar-separator": {
      style(states) {
        return {
          decorator: "toolbar-separator",
          margin: [7, 0],
          width: 4
        };
      }
    },

    "toolbar-button": {
      style(states) {
        var decorator = "button-box";

        if (states.disabled) {
          decorator = "button-box-disabled";
        } else if (states.pressed || states.checked) {
          decorator = "button-box-pressed";
        }

        // set the right left and right decorator
        if (states.left) {
          decorator += "-left";
        } else if (states.right) {
          decorator += "-right";
        } else if (states.middle) {
          decorator += "-middle";
        }

        // set the margin
        var margin = [7, 10, 7, 0];
        if (states.left || states.middle || states.right) {
          margin = [7, 0];
        }

        return {
          cursor: states.disabled ? undefined : "pointer",
          decorator: decorator,
          margin: margin,
          padding: [3, 5]
        };
      }
    },

    "toolbar-selectbox": {
      alias: "selectbox",
      style(states) {
        var decorator = "button-box";

        // set the margin
        var margin = [7, 10, 7, 0];
        if (states.left || states.middle || states.right) {
          margin = [7, 0];
        }

        return {
          margin: margin,
          decorator: states.invalid
            ? "combobox-invalid"
            : states.focused
            ? "combobox-focused"
            : "combobox",
          backgroundColor: "widget"
        };
      }
    },

    // "toolbar-button/arrow": {
    //   include: "atom/icon",
    //   style(states) {
    //     return {
    //       textColor: "text-on-primary"
    //     };
    //   }
    // },
    "toolbar-button/icon": "button/icon",
    "toolbar-button/label": {
      style(states) {
        return {
          textColor: states.disabled
            ? "text-disabled-on-primary"
            : "text-on-primary"
        };
      }
    },

    "toolbar-menubutton": {
      include: "toolbar-button",

      style(states) {
        return {
          showArrow: true
        };
      }
    },

    "toolbar-menubutton/label": "toolbar-button/label",

    "toolbar-menubutton/icon": "button/icon",

    "toolbar-menubutton/arrow": {
      include: "atom/icon",

      style(states) {
        return {
          source: zx.ui.theme.avocado.Image.URLS["arrow-down-small"],
          cursor: states.disabled ? undefined : "pointer",
          textColor: "text-on-primary",
          padding: [0, 5],
          marginLeft: 2
        };
      }
    },

    "toolbar-splitbutton": {},
    "toolbar-splitbutton/button": {
      include: "toolbar-button",

      style(states) {
        var decorator = "button-box";

        if (states.disabled) {
          decorator = "button-box-disabled";
        } else if (states.pressed || states.checked) {
          decorator = "button-box-pressed";
        }

        // default margin, when the button is alone
        var margin = [7, 0, 7, 10];
        if (states.left || states.middle || states.right) {
          margin = [7, 0, 7, 0];
        }

        // set the right left and right decorator
        if (states.left) {
          decorator += "-left";
        } else if (states.right) {
          decorator += "-middle";
        } else if (states.middle) {
          decorator += "-middle";
        } else {
          decorator += "-left";
        }

        return {
          icon: zx.ui.theme.avocado.Image.URLS["arrow-down"],
          decorator: decorator,
          margin: margin
        };
      }
    },
    "toolbar-splitbutton/button/label": "button/label",
    "toolbar-splitbutton/button/icon": "button/icon",

    "toolbar-splitbutton/arrow": {
      include: "toolbar-button",

      style(states) {
        var decorator = "button-box";

        if (states.disabled) {
          decorator = "button-box-disabled";
        } else if (states.pressed || states.checked) {
          decorator = "button-box-pressed";
        }

        // default margin, when the button is alone
        var margin = [7, 10, 7, 0];
        if (states.left || states.middle || states.right) {
          margin = [7, 0, 7, 0];
        }

        // set the right left and right decorator
        if (states.left) {
          decorator += "-middle";
        } else if (states.right) {
          decorator += "-right";
        } else if (states.middle) {
          decorator += "-middle";
        } else {
          decorator += "-right";
        }

        return {
          icon: zx.ui.theme.avocado.Image.URLS["arrow-down"],
          decorator: decorator,
          margin: margin,
          textColor: "text-on-primary"
        };
      }
    },

    "toolbar-splitbutton/arrow/icon": "button/icon",

    /*
    ---------------------------------------------------------------------------
      TABVIEW
    ---------------------------------------------------------------------------
    */

    tabview: {},

    "tabview/bar": {
      style(states) {
        var marginTop = 0,
          marginRight = 0,
          marginBottom = 0,
          marginLeft = 0;

        if (states.barTop) {
          marginBottom -= 1;
        } else if (states.barBottom) {
          marginTop -= 1;
        } else if (states.barRight) {
          marginLeft -= 1;
        } else {
          marginRight -= 1;
        }

        return {
          marginBottom: marginBottom,
          marginTop: marginTop,
          marginLeft: marginLeft,
          marginRight: marginRight
        };
      }
    },

    "tabview/bar/button-forward": {
      include: "slidebar/button-forward",

      style(states) {
        if (states.barTop) {
          return {
            marginTop: 4,
            marginBottom: 2,
            decorator: "tabview-arrow"
          };
        } else if (states.barBottom) {
          return {
            marginTop: 2,
            marginBottom: 4,
            decorator: "tabview-arrow"
          };
        } else if (states.barLeft) {
          return {
            paddingLeft: VERT_TABARROW_PADDING,
            marginLeft: 4,
            marginRight: 2,
            decorator: "tabview-arrow"
          };
        } else {
          return {
            paddingLeft: VERT_TABARROW_PADDING,
            marginLeft: 2,
            marginRight: 4,
            decorator: "tabview-arrow"
          };
        }
      }
    },

    "tabview/bar/button-backward": {
      include: "slidebar/button-backward",

      style(states) {
        if (states.barTop) {
          return {
            marginTop: 4,
            marginBottom: 2,
            decorator: "tabview-arrow"
          };
        } else if (states.barBottom) {
          return {
            marginTop: 2,
            marginBottom: 4,
            decorator: "tabview-arrow"
          };
        } else if (states.barLeft) {
          return {
            paddingLeft: VERT_TABARROW_PADDING,
            marginLeft: 4,
            marginRight: 2,
            decorator: "tabview-arrow"
          };
        } else {
          return {
            paddingLeft: VERT_TABARROW_PADDING,
            marginLeft: 2,
            marginRight: 4,
            decorator: "tabview-arrow"
          };
        }
      }
    },
    "tabview/bar/button-backward/icon": {
      style(states) {
        return {};
      }
    },

    "tabview/pane": {
      style(states) {
        return {
          // backgroundColor: "surface",
          decorator: "tabview-pane",
          padding: 10
        };
      }
    },

    "tabview-page": "widget",

    "tabview-page/button": {
      style(states) {
        var decorator;

        // default padding
        if (states.barTop || states.barBottom) {
          var padding = [6, 10, 6, 7];
        } else {
          var padding = [6, 4, 6, 4];
        }

        // decorator
        if (states.checked) {
          if (states.barTop) {
            decorator = "tabview-page-button-top";
          } else if (states.barBottom) {
            decorator = "tabview-page-button-bottom";
          } else if (states.barRight) {
            decorator = "tabview-page-button-right";
          } else if (states.barLeft) {
            decorator = "tabview-page-button-left";
          }
        } else {
          for (var i = 0; i < padding.length; i++) {
            padding[i] += 1;
          }
          // reduce the size by 1 because we have different decorator border width
          if (states.barTop) {
            padding[2] -= 1;
          } else if (states.barBottom) {
            padding[0] -= 1;
          } else if (states.barRight) {
            padding[3] -= 1;
          } else if (states.barLeft) {
            padding[1] -= 1;
          }
        }

        let margin = [0, 0, 0, 0];
        if ((states.barTop || states.barBottom) && !states.lastTab) {
          margin = [0, -1, 0, 0];
        }

        if ((states.barLeft || states.barRight) && !states.lastTab) {
          margin = [0, 0, -1, 0];
        }

        return {
          zIndex: states.checked ? 10 : 5,
          decorator: decorator,
          textColor: states.disabled
            ? "text-disabled"
            : states.checked
            ? "primary"
            : "black",
          padding: padding,
          cursor: "pointer",
          margin
        };
      }
    },

    "tabview-page/button/label": {
      style(states) {
        return {
          font: "bold",
          padding: [0, 1, 0, 1]
        };
      }
    },

    "tabview-page/button/icon": "image",
    "tabview-page/button/close-button": {
      style(states) {
        return {
          cursor: states.disabled ? undefined : "pointer",
          icon: zx.ui.theme.avocado.Image.URLS["window-close"]
        };
      }
    },

    /*
    ---------------------------------------------------------------------------
      SKELETON TEXT
    ---------------------------------------------------------------------------
    */

    "skeleton-text": {
      style(states, styles) {
        styles = qx.lang.Object.clone(styles ?? {}, true);
        return styles;
      }
    },

    "skeleton-text-line": {
      style(states, styles) {
        styles = qx.lang.Object.clone(styles ?? {}, true);
        styles.backgroundColor = "text-on-surface";
        return styles;
      }
    },

    /*
    ---------------------------------------------------------------------------
      COLOR POPUP
    ---------------------------------------------------------------------------
    */

    colorpopup: {
      include: "popup",

      style(states) {
        return {
          padding: 5,
          backgroundColor: "surface",
          decorator: "main"
        };
      }
    },

    "colorpopup/field": {
      style(states) {
        return {
          margin: 2,
          width: 14,
          height: 14,
          backgroundColor: "surface",
          decorator: "main"
        };
      }
    },

    "colorpopup/selector-button": "button",
    "colorpopup/auto-button": "button",

    "colorpopup/preview-pane": "groupbox",

    "colorpopup/current-preview": {
      style(state) {
        return {
          height: 20,
          padding: 4,
          marginLeft: 4,
          decorator: "main",
          allowGrowX: true
        };
      }
    },

    "colorpopup/selected-preview": {
      style(state) {
        return {
          height: 20,
          padding: 4,
          marginRight: 4,
          decorator: "main",
          allowGrowX: true
        };
      }
    },

    "colorpopup/colorselector-okbutton": {
      include: "button",

      style(states) {
        return { icon: "icon/16/actions/dialog-ok.png" };
      }
    },

    "colorpopup/colorselector-cancelbutton": {
      include: "button",

      style(states) {
        return { icon: "icon/16/actions/dialog-cancel.png" };
      }
    },

    /*
    ---------------------------------------------------------------------------
      COLOR SELECTOR
    ---------------------------------------------------------------------------
    */

    colorselector: "widget",
    "colorselector/control-bar": "widget",
    "colorselector/visual-pane": "groupbox",
    "colorselector/control-pane": "widget",
    "colorselector/preset-grid": "widget",

    "colorselector/colorbucket": {
      style(states) {
        return {
          decorator: "main",
          width: 16,
          height: 16
        };
      }
    },

    "colorselector/preset-field-set": "groupbox",
    "colorselector/input-field-set": "groupbox",
    "colorselector/preview-field-set": "groupbox",

    "colorselector/hex-field-composite": "widget",
    "colorselector/hex-field": "textfield",

    "colorselector/spinner": "spinner",

    "colorselector/spinner/textfield": {
      include: "spinner/textfield",

      style(states) {
        return {
          minWidth: 40
        };
      }
    },

    "colorselector/spinner/upbutton": {
      include: "spinner/upbutton",
      alias: "spinner/upbutton",

      style(states) {
        return {
          width: 20
        };
      }
    },
    "colorselector/spinner/downbutton": {
      include: "spinner/downbutton",
      alias: "spinner/downbutton",

      style(states) {
        return {
          width: 20
        };
      }
    },

    "colorselector/rgb-spinner-composite": "widget",
    "colorselector/rgb-spinner-red": "colorselector/spinner",
    "colorselector/rgb-spinner-green": "colorselector/spinner",
    "colorselector/rgb-spinner-blue": "colorselector/spinner",

    "colorselector/hsb-spinner-composite": "widget",
    "colorselector/hsb-spinner-hue": "colorselector/spinner",
    "colorselector/hsb-spinner-saturation": "colorselector/spinner",
    "colorselector/hsb-spinner-brightness": "colorselector/spinner",

    "colorselector/preview-content-old": {
      style(states) {
        return {
          decorator: "main",
          width: 50,
          height: 25
        };
      }
    },

    "colorselector/preview-content-new": {
      style(states) {
        return {
          decorator: "main",
          backgroundColor: "surface",
          width: 50,
          height: 25
        };
      }
    },

    "colorselector/hue-saturation-field": {
      style(states) {
        return {
          decorator: "main",
          margin: 5
        };
      }
    },

    "colorselector/brightness-field": {
      style(states) {
        return {
          decorator: "main",
          margin: [5, 7]
        };
      }
    },

    "colorselector/hue-saturation-pane": "widget",
    "colorselector/hue-saturation-handle": "widget",
    "colorselector/brightness-pane": "widget",
    "colorselector/brightness-handle": "widget",

    /*
    ---------------------------------------------------------------------------
      APPLICATION
    ---------------------------------------------------------------------------
    */
    "app-header": {
      style(states) {
        return {
          font: "headline",
          textColor: "text-on-primary",
          backgroundColor: "primary",
          padding: [8, 12]
        };
      }
    },

    "app-header-label": {
      style(states) {
        return { paddingTop: 5 };
      }
    },

    "app-splitpane": {
      style(states) {
        return {
          padding: [0, 10, 10, 10]
        };
      }
    },

    /*
      --------------------
      VIRTUAL SELECTBOX
      --------------------
    */
    checkedlist: {
      include: "list",
      style(states) {
        return {
          padding: 7,
          margin: 4
        };
      }
    },

    "list-search-highlight": {
      style(states) {
        return {
          backgroundColor: "rgba(255, 251, 0, 0.53)",
          textDecorationStyle: "dotted",
          textDecorationLine: "underline"
        };
      }
    },

    "checkedlist-checkbox": {
      alias: "checkbox",
      include: "checkbox",
      style(states) {
        return {
          margin: [2, 4]
        };
      }
    },

    "checkedlist-checkbox/icon": {
      include: "checkbox/icon",
      style(states) {
        let textColor = "text-on-widget";
        if (states.disabled) {
          textColor = "text-on-widget-disabled";
        } else if (states.selected) {
          textColor = "text-on-widget-selected";
        } else if (states.checked || states.undetermined) {
          textColor = "primary";
        }

        return {
          textColor,
          backgroundColor:
            states.checked || states.undetermined ? "text-on-widget" : "widget"
        };
      }
    },
    "checkedlist-checkbox/label": {
      include: "checkbox/label",
      style(states) {
        return {
          textColor: states.disabled
            ? "text-on-widget-disabled"
            : states.selected
            ? "text-on-widget-selected"
            : "text-on-widget"
        };
      }
    }
  }
});
