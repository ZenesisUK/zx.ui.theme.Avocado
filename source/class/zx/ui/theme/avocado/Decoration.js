/* ************************************************************************
 *
 *  Zen [and the art of] CMS
 *
 *  https://zenesis.com
 *
 *  Copyright:
 *    2019-2022 Zenesis Ltd, https://www.zenesis.com
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
/*
 * @asset(qx/decoration/Simple/*)
 */
const SCROLLBAR_RADIUS = 1e5;
const RADIUS = 10;
const GROUP_ROUNDED_EDGES = 3;
const WIDGET_ROUNDED_EDGES = 5;
const TAB_BORDER_WIDTH = 1;
const WIDGET_ROUNDED_EDGES_TIGHT = 5;

const HELPER = {
  scrollBarButton(where, state) {
    let style = {
      width: 1,
      radius: where == "begin" ? [0, 0, SCROLLBAR_RADIUS, SCROLLBAR_RADIUS] : [SCROLLBAR_RADIUS, SCROLLBAR_RADIUS, 0, 0]
    };
    if (state == "disabled") style.backgroundColor = "primary-disabled";
    else if (state == "pressed") style.backgroundColor = "primary-selected";
    else style.backgroundColor = "primary";
    return { style: style };
  },

  scrollKnob(state, hovered) {
    let style = {
      width: 1,
      color: "white",
      radius: SCROLLBAR_RADIUS
    };
    if (state == "disabled") {
      style.backgroundColor = "primary-disabled";
      style.color = "primary-disabled";
    } else if (state == "pressed") {
      style.backgroundColor = "primary-selected";
    } else {
      style.backgroundColor = "primary";
    }
    return { style };
  },

  slider(state) {
    let style = {
      width: 2,
      color: "transparent",
      radius: RADIUS,
      backgroundColor: "primary"
    };
    if (state == "disabled") style.backgroundColor = "text-disabled-on-surface";
    else if (state == "invalid") style.color = "error";
    else if (state == "focused") style.backgroundColor = style.color = "primary-focused";
    return { style };
  },

  sliderKnob(state) {
    let style = {
      width: 1,
      radius: SCROLLBAR_RADIUS,
      color: "text-on-primary",
      backgroundColor: "primary"
    };
    if (state == "disabled") {
      style.backgroundColor = style.color = "text-disabled-on-surface";
    }
    return { style };
  },

  tabPageButton(where) {
    let style = {
      width: TAB_BORDER_WIDTH,
      backgroundColor: "surface",
      color: "border-tab"
    };
    const RADIUS = 3;
    const STYLES = {
      top: {
        colorBottom: "surface",
        radius: [RADIUS, RADIUS, 0, 0]
      },
      bottom: {
        colorTop: "surface",
        radius: [0, 0, RADIUS, RADIUS]
      },
      left: {
        colorRight: "surface",
        radius: [RADIUS, 0, 0, RADIUS]
      },
      right: {
        colorLeft: "surface",
        radius: [0, RADIUS, RADIUS, 0]
      }
    };
    qx.lang.Object.mergeWith(style, STYLES[where]);
    return { style };
  },

  toolbarButton(states) {
    let { disabled, pressed, invalid, where } = states || {};
    let result = {
      style: {
        radius: 3,
        width: 1,
        color: "button-border",
        backgroundColor: "primary"
      }
    };
    if (disabled) {
      result.style.backgroundColor = "primary-disabled";
    } else if (pressed) {
      result.style.backgroundColor = "primary-hovered";
    }
    if (invalid) {
      result.color = "error";
    }
    if (where == "right") {
      result.style.radius = [0, 3, 3, 0];
    } else if (where == "middle") {
      result.style.radius = 0;
      result.style.width = [1, 0, 1, 1];
    } else if (where == "left") {
      result.style.radius = [3, 0, 0, 3];
      result.style.width = [1, 0, 1, 1];
    }
    return result;
  }
};

qx.Theme.define("zx.ui.theme.avocado.Decoration", {
  aliases: {
    decoration: "qx/decoration/Simple"
  },
  decorations: {
    "table-filter-button-hovered": {
      decorator: [qx.ui.decoration.MSingleBorder],

      style: {
        backgroundImage: "grasshopper/decoration/form/button-disabled-c.png",
        backgroundRepeat: "scale",
        width: 1,
        color: "#b1b1b1"
      }
    },

    "table-filter-button-checked": {
      decorator: [qx.ui.decoration.MSingleBorder],
      style: {
        backgroundImage: "grasshopper/decoration/form/button-checked-c.png",
        backgroundRepeat: "scale",
        width: 1,
        color: "#b1b1b1"
      }
    },
    "no-such-decoration": {
      style: {
        width: 1,
        color: "black"
      }
    },

    "virtual-list": {
      decorator: [qx.ui.decoration.MSingleBorder],

      style: {
        width: 1,
        color: "table-column-line"
      }
    },

    "virtual-list-header-cell": {
      decorator: [qx.ui.decoration.MSingleBorder],

      style: {
        width: [0, 1],
        color: "table-column-line",
        gradientStart: "button-gradient-start",
        gradientEnd: "button-gradient-end",
        backgroundColor: "button-gradient-start"
      }
    },

    /**
     * Qooxdoo Styles
     */
    /*
      ---------------------------------------------------------------------------
        MATERIAL TEXT FIELD
      ---------------------------------------------------------------------------
      */
    "standalone-textfield": {
      include: "material-textfield",
      style: {}
    },
    "material-textfield": {
      style: {
        radius: WIDGET_ROUNDED_EDGES,
        width: 2,
        color: "transparent"
        //styleBottom: "solid",
      }
    },

    "material-textfield-focused": {
      include: "material-textfield",
      style: {
        color: "primary-focused"
      }
    },

    "material-textfield-invalid": {
      include: "material-textfield",
      style: {
        color: "error"
      }
    },

    "material-textfield-focused-invalid": {
      include: "material-textfield",
      style: {
        color: "error-focused"
      }
    },

    "material-textfield-disabled": {
      include: "material-textfield"
    },

    "material-textfield-readonly": {
      include: "material-textfield"
    },
    "material-textfield-readonly-invalid": {
      include: "material-textfield-invalid"
    },
    "material-textfield-readonly-focused": {
      include: "material-textfield-readonly"
    },
    "material-textfield-readonly-disabled": {
      include: "material-textfield-disabled"
    },

    /*
      ---------------------------------------------------------------------------
        BUTTON
      ---------------------------------------------------------------------------
      */

    "material-button": {
      style: {
        radius: WIDGET_ROUNDED_EDGES,
        shadowHorizontalLength: 0,
        shadowVerticalLength: [3, 2, 1],
        shadowBlurRadius: [1, 2, 5],
        shadowSpreadRadius: [-2, 0, 0],
        shadowColor: ["rgba(0, 0, 0, 0.2)", "rgba(0, 0, 0, 0.14)", "rgba(0, 0, 0, 0.12)"],

        transitionProperty: ["all"],
        transitionDuration: "0s",
        backgroundColor: "primary"
      }
    },

    "material-button-hovered": {
      include: "material-button",
      style: {
        backgroundColor: "primary-hovered",
        shadowVerticalLength: [2, 4, 1],
        shadowBlurRadius: [4, 5, 10],
        shadowSpreadRadius: [-1, 0, 0],
        transitionDuration: "0.1s"
      }
    },

    "material-button-hovered-invalid": {
      include: "material-button-hovered",
      style: {
        color: "error"
      }
    },

    "material-button-pressed": {
      include: "material-button",
      style: {
        backgroundColor: "primary-hovered",
        shadowVerticalLength: [5, 8, 3],
        shadowBlurRadius: [5, 10, 14],
        shadowSpreadRadius: [-3, 1, 2],
        transitionDuration: "0.1s"
      }
    },

    "material-button-disabled": {
      include: "material-button",
      style: {
        shadowVerticalLength: 0,
        shadowBlurRadius: 0,
        shadowSpreadRadius: 0,
        backgroundColor: "primary-disabled"
      }
    },

    "material-button-left": {
      include: "material-button",
      style: { radius: [WIDGET_ROUNDED_EDGES, 0, 0, WIDGET_ROUNDED_EDGES] }
    },

    "material-button-right": {
      include: "material-button",
      style: { radius: [0, WIDGET_ROUNDED_EDGES, WIDGET_ROUNDED_EDGES, 0] }
    },

    "material-button-hovered-left": {
      include: "material-button-hovered",
      style: { radius: [WIDGET_ROUNDED_EDGES, 0, 0, WIDGET_ROUNDED_EDGES] }
    },

    "material-button-focused-left": {
      include: "material-button-hovered",
      style: { radius: [WIDGET_ROUNDED_EDGES, 0, 0, WIDGET_ROUNDED_EDGES] }
    },

    "material-button-hovered-right": {
      include: "material-button-hovered",
      style: { radius: [0, WIDGET_ROUNDED_EDGES, WIDGET_ROUNDED_EDGES, 0] }
    },

    "material-button-focused-right": {
      include: "material-button-hovered",
      style: { radius: [0, WIDGET_ROUNDED_EDGES, WIDGET_ROUNDED_EDGES, 0] }
    },

    "material-button-pressed-left": {
      include: "material-button-pressed",
      style: { radius: [WIDGET_ROUNDED_EDGES, 0, 0, WIDGET_ROUNDED_EDGES] }
    },

    "material-button-pressed-right": {
      include: "material-button-pressed",
      style: { radius: [0, WIDGET_ROUNDED_EDGES, WIDGET_ROUNDED_EDGES, 0] }
    },

    "material-button-disabled-left": {
      include: "material-button-disabled",
      style: { radius: [WIDGET_ROUNDED_EDGES, 0, 0, WIDGET_ROUNDED_EDGES] }
    },

    "material-button-disabled-right": {
      include: "material-button-disabled",
      style: { radius: [0, WIDGET_ROUNDED_EDGES, WIDGET_ROUNDED_EDGES, 0] }
    },

    "toggle-button": {
      include: "material-button"
    },

    "toggle-button-hovered": {
      include: "material-button-hovered"
    },

    "toggle-button-checked": {
      include: "toggle-button",
      style: {
        backgroundColor: "primary-selected"
      }
    },

    "toggle-button-checked-hovered": {
      include: "toggle-button-hovered",
      style: {
        backgroundColor: "primary-selected"
      }
    },

    "toggle-button-disabled": {
      include: "material-button-disabled"
    },

    "toggle-button-checked-disabled": {
      include: "toggle-button-checked",
      style: {
        backgroundColor: "primary-selected_disabled"
      }
    },

    /*
      ---------------------------------------------------------------------------
        CORE
      ---------------------------------------------------------------------------
      */
    "border-blue": {
      style: {
        width: 4,
        color: "surface"
      }
    },

    main: {
      style: {
        width: 1,
        color: "primary"
      }
    },

    "main-top": {
      include: "main",
      style: { width: [1, 0, 0, 0] }
    },

    "main-right": {
      include: "main",
      style: { width: [0, 1, 0, 0] }
    },

    // eslint-disable-next-line no-dupe-keys
    "main-bottom": {
      include: "main",
      style: { width: [0, 0, 1, 0] }
    },

    "main-left": {
      include: "main",
      style: { width: [0, 0, 0, 1] }
    },

    //defn popup
    popup: {
      style: {
        color: "text-hint-on-surface",
        radius: GROUP_ROUNDED_EDGES,
        shadowLength: 2,
        shadowBlurRadius: 5,
        shadowColor: "shadow"
      }
    },

    dragover: { style: { bottom: [2, "solid", "dark-blue"] } },
    widget: {
      style: {
        width: WIDGET_ROUNDED_EDGES
      }
    },

    /*
      ---------------------------------------------------------------------------
        BUTTON
      ---------------------------------------------------------------------------
      */

    "button-box": HELPER.toolbarButton(),
    "button-box-disabled": HELPER.toolbarButton({ disabled: true }),
    "button-box-disabled-left": HELPER.toolbarButton({
      disabled: true,
      where: "left"
    }),
    "button-box-disabled-middle": HELPER.toolbarButton({
      disabled: true,
      where: "middle"
    }),
    "button-box-disabled-right": HELPER.toolbarButton({
      disabled: true,
      where: "right"
    }),
    "button-box-pressed": HELPER.toolbarButton({ pressed: true }),
    "button-box-invalid": HELPER.toolbarButton({ invalid: true }),
    "button-box-pressed-invalid": HELPER.toolbarButton({
      pressed: true,
      invalid: true
    }),
    "button-box-right": HELPER.toolbarButton({ where: "right" }),
    "button-box-pressed-right": HELPER.toolbarButton({
      where: "right",
      pressed: true
    }),
    "button-box-middle": HELPER.toolbarButton({ where: "middle" }),
    "button-box-pressed-middle": HELPER.toolbarButton({
      where: "middle",
      pressed: true
    }),
    "button-box-left": HELPER.toolbarButton({ where: "left" }),
    "button-box-pressed-left": HELPER.toolbarButton({
      where: "left",
      pressed: true
    }),

    /*
      ---------------------------------------------------------------------------
        SEPARATOR
      ---------------------------------------------------------------------------
      */

    "separator-horizontal": {
      style: {
        widthLeft: 1,
        colorLeft: "text-hint-on-surface"
      }
    },

    "separator-vertical": {
      style: {
        widthTop: 1,
        colorTop: "text-hint-on-surface"
      }
    },
    /*
      ---------------------------------------------------------------------------
        SCROLL BAR
      ---------------------------------------------------------------------------
      */
    scrollbar: {
      style: {
        width: 1,
        radius: 10,
        color: "transparent"
      }
    },

    /*
      ---------------------------------------------------------------------------
        SCROLL KNOB
      ---------------------------------------------------------------------------
      */
    "scroll-knob": HELPER.scrollKnob(),
    "scroll-knob-disabled": HELPER.scrollKnob("disabled"),
    "scroll-knob-pressed": HELPER.scrollKnob("pressed"),
    "scroll-knob-hovered": HELPER.scrollKnob(null, true),
    "scroll-knob-pressed-hovered": HELPER.scrollKnob("pressed", true),

    "scroll-slider": {
      style: {
        radius: SCROLLBAR_RADIUS
      }
    },

    /*
      ---------------------------------------------------------------------------
        HOVER BUTTON
      ---------------------------------------------------------------------------
      */
    "menu-scrollbutton": {
      style: {
        backgroundColor: "primary",
        radius: 1
      }
    },
    "menu-scrollbutton-hover": {
      style: {
        backgroundColor: "red",
        // backgroundColor: "primary-hovered",
        radius: 1
      }
    },

    /*
      ---------------------------------------------------------------------------
        WINDOW
      ---------------------------------------------------------------------------
      */
    window: {
      style: {
        width: 1,
        radius: GROUP_ROUNDED_EDGES,
        color: "text-hint-on-surface",
        shadowLength: 1,
        shadowBlurRadius: 3,
        shadowColor: "rgba(0,0,0,0.2)"
      }
    },

    "window-active": {
      include: "window",

      style: {
        shadowLength: 2,
        shadowBlurRadius: 5
      }
    },

    "window-caption": {
      style: {
        width: [0, 0, 1, 0],
        color: "text-hint-on-surface"
      }
    },

    /*
      ---------------------------------------------------------------------------
        GROUP BOX
      ---------------------------------------------------------------------------
      */

    groupbox: {
      style: {
        color: "text-hint-on-surface",
        width: 1
      }
    },

    "groupbox-frame": {
      style: {
        backgroundColor: "box"
      }
    },

    /*
      ---------------------------------------------------------------------------
        FRAME BOX
      ---------------------------------------------------------------------------
      */
    border: {
      style: {
        width: 1,
        color: "text-hint-on-surface",
        radius: WIDGET_ROUNDED_EDGES
      }
    },

    "border-disabled": {
      style: {
        width: 1,
        color: "text-disabled-on-surface"
      }
    },

    "border-focused": {
      style: {
        width: 1,
        color: "primary"
      }
    },

    "border-invalid": {
      style: {
        width: 1,
        color: "error"
      }
    },
    list: {
      style: {
        radius: WIDGET_ROUNDED_EDGES,
        width: 2,
        color: "transparent"
      }
    },
    "list-focused": {
      include: "list",
      style: {
        color: "primary-focused"
      }
    },
    "list-invalid": {
      include: "list",
      style: {
        color: "error"
      }
    },

    /*
      ---------------------------------------------------------------------------
        LIST ITEM
      ---------------------------------------------------------------------------
      */

    "lead-item": {
      style: {
        width: 1,
        backgroundColor: "purple",
        //width: [2,2,2,2],
        style: "dotted",
        color: "text-disabled-on-surface"
      }
    },

    /*
      ---------------------------------------------------------------------------
        TAG
      ---------------------------------------------------------------------------
      */
    tag: {
      style: {
        width: 1,
        color: "button-border",
        backgroundColor: "widget",
        style: "solid",
        radius: WIDGET_ROUNDED_EDGES
      }
    },

    /*
      ---------------------------------------------------------------------------
        TOOL TIP
      ---------------------------------------------------------------------------
      */

    tooltip: {
      style: {
        width: 1,
        color: "text-on-secondary",
        shadowLength: 1,
        shadowBlurRadius: 2,
        shadowColor: "rgba(0,0,0,0.2)"
      }
    },

    "tooltip-error": {
      style: {
        radius: 5,
        backgroundColor: "error"
      }
    },

    /*
      ---------------------------------------------------------------------------
        TOOLBAR
      ---------------------------------------------------------------------------
      */
    toolbar: {
      style: {
        backgroundColor: "box"
      }
    },
    "toolbar-separator": {
      style: {
        widthLeft: 1,
        colorLeft: "text-hint-on-surface"
      }
    },

    "toolbar-button": {
      include: "material-button",
      style: {
        shadowHorizontalLength: 0,
        shadowVerticalLength: 0,
        shadowBlurRadius: 0,
        shadowSpreadRadius: 0
      }
    },

    "toolbar-button-hovered": { include: "material-button-hovered" },

    "toolbar-button-left": {
      include: "material-button-left",
      style: {
        shadowHorizontalLength: 0,
        shadowVerticalLength: 0,
        shadowBlurRadius: 0,
        shadowSpreadRadius: 0
      }
    },

    "toolbar-button-hovered-left": { include: "material-button-hovered-left" },
    "toolbar-button-right": {
      include: "material-button-right",
      style: {
        shadowHorizontalLength: 0,
        shadowVerticalLength: 0,
        shadowBlurRadius: 0,
        shadowSpreadRadius: 0
      }
    },

    "toolbar-button-hovered-right": {
      include: "material-button-hovered-right"
    },

    /*
      ---------------------------------------------------------------------------
        MENU
      ---------------------------------------------------------------------------
      */
    menu: {
      style: {
        width: 1,
        color: "black",
        radius: 2
      }
    },
    "menu-separator": {
      style: {
        widthTop: 1,
        colorTop: "text-hint-on-surface"
      }
    },

    /*
      ---------------------------------------------------------------------------
        MENU BAR
      ---------------------------------------------------------------------------
      */
    "menubar-button-hovered": {
      style: { backgroundColor: "primary-hovered" }
    },

    "menubar-button-pressed": {
      include: "menubar-button-hovered",

      style: { backgroundColor: "primary-selected" }
    },

    /*
      ---------------------------------------------------------------------------
        DATE CHOOSER
      ---------------------------------------------------------------------------
      */

    datechooser: {
      style: {
        radius: WIDGET_ROUNDED_EDGES,
        width: 2,
        color: "transparent"
      }
    },

    "datechooser-date-pane": {
      style: {
        widthTop: 1,
        colorTop: "text-hint-on-surface",
        style: "solid"
      }
    },

    "datechooser-weekday": {
      style: {
        widthBottom: 1,
        colorBottom: "text-hint-on-surface",
        style: "solid"
      }
    },

    "datechooser-week": {
      style: {
        widthRight: 1,
        colorRight: "text-hint-on-surface",
        style: "solid"
      }
    },

    "datechooser-week-header": {
      style: {
        widthBottom: 1,
        colorBottom: "text-hint-on-surface",
        widthRight: 1,
        colorRight: "text-hint-on-surface",
        widthLeft: 1,
        colorLeft: "text-hint-on-surface",
        style: "solid"
      }
    },

    /*
      ---------------------------------------------------------------------------
        TAB VIEW
      ---------------------------------------------------------------------------
      */

    tabview: {
      style: {
        width: 0,
        color: "text-hint-on-surface",
        radius: GROUP_ROUNDED_EDGES
      }
    },
    "tabview-page-button-top": HELPER.tabPageButton("top"),
    "tabview-page-button-bottom": HELPER.tabPageButton("bottom"),
    "tabview-page-button-left": HELPER.tabPageButton("left"),
    "tabview-page-button-right": HELPER.tabPageButton("right"),

    "tabview-pane": {
      style: {
        width: TAB_BORDER_WIDTH,
        color: "border-tab"
      }
    },
    "tabview-arrow": {
      style: {
        backgroundColor: "primary",
        width: 1,
        radius: WIDGET_ROUNDED_EDGES_TIGHT
      }
    },

    /*
      ---------------------------------------------------------------------------
        TABLE
      ---------------------------------------------------------------------------
      */
    table: {
      style: {
        radius: WIDGET_ROUNDED_EDGES,
        width: 1,
        color: "widget"
      }
    },

    statusbar: {
      style: {
        widthTop: 1,
        colorTop: "text-hint-on-surface",
        styleTop: "solid"
      }
    },

    // attention hackerery in the qx.ui.table.pane.Scroller
    // decorator: "table-scroller-focus-indicator"
    // gets applied hardcoded! So do not try to change its
    // name here!
    "table-scroller-focus-indicator": {
      style: {
        width: 2,
        color: "primary"
      }
    },
    "table-scrollbar": {
      style: {
        backgroundColor: "widget",
        width: 0
      }
    },

    "table-statusbar": {
      style: {
        backgroundColor: "table-header",
        color: "text-on-table-header"
      }
    },

    "table-header": {
      style: {
        radius: 0,
        backgroundColor: "table-header",
        color: "text-on-table-header",
        width: [0, 1, 1, 0]
      }
    },

    "table-header-cell-hovered": "table-header",

    "table-header-column-button": {
      include: "table-header"
    },

    "table-header-cell": {
      style: {
        // widthRight: 1,
        // color: "text-on-table-header",
        // backgroundColor: "table-header"
      }
    },

    cell: {
      width: 1,
      color: "black"
    },

    "table-header-cell-first": { include: "table-header-cell" },

    "virtual-background-header": {
      include: "table-header-cell"
    },

    "virtual-background-span": {
      include: "table-header-cell",
      style: {
        color: "table-row-line",
        width: [0, 0, 1, 0]
      }
    },

    "progressive-table-header": {
      style: {
        color: "button-border",
        backgroundColor: "widget",
        radius: 0,
        width: [1, 0, 1, 1]
      }
    },

    "progressive-table-header-cell": {
      style: {
        widthRight: 1,
        color: "text-hint-on-surface"
      }
    },

    /*
      ---------------------------------------------------------------------------
        PROGRESSBAR
      ---------------------------------------------------------------------------
      */

    "progressbar-progress": {
      style: {
        width: 0,
        radius: WIDGET_ROUNDED_EDGES_TIGHT
      }
    },
    progressbar: {
      style: {
        width: 1,
        radius: WIDGET_ROUNDED_EDGES_TIGHT,
        color: "text-hint-on-surface"
      }
    },
    /*
    SLIDE BAR
    */
    "slidebar-button": {
      style: {
        radius: WIDGET_ROUNDED_EDGES_TIGHT,
        width: 1
      }
    },

    /*
      ---------------------------------------------------------------------------
        RADIO BUTTON
      ---------------------------------------------------------------------------
      */
    radiobutton: {
      style: { color: "text-primary-on-surface" }
    },

    /*
      ---------------------------------------------------------------------------
        CHECK BOX
      ---------------------------------------------------------------------------
      */

    checkbox: {
      style: { color: "text-primary-on-surface" }
    },

    combobox: {
      include: "material-textfield",
      style: {
        backgroundColor: "textbox-background"
      }
    },
    "combobox-textfield": {
      include: "material-textfield",
      style: {
        radius: 0,
        width: 0
      }
    },
    "combobox-invalid": {
      include: "material-textfield-invalid"
    },
    "combobox-focused": {
      include: "material-textfield-focused"
    },
    "combobox-button": {
      style: {
        backgroundColor: "primary"
      }
    },
    "combobox-button-disabled": {
      include: "combobox-button",
      style: {
        backgroundColor: "primary-disabled"
      }
    },
    "combobox-button-hovered": {
      include: "combobox-button",
      style: {
        backgroundColor: "primary-hovered"
      }
    },
    "combobox-button-pressed": {
      include: "combobox-button",
      style: {
        backgroundColor: "primary-selected"
      }
    },
    framebox: {
      style: {
        width: 1,
        color: "black"
      }
    },
    "framebox-invalid": {
      include: "framebox",
      style: {
        color: "error"
      }
    },

    tree: {
      style: {
        radius: GROUP_ROUNDED_EDGES,
        width: 2,
        color: "transparent"
      }
    },

    "rounded-edges": {
      style: {
        radius: WIDGET_ROUNDED_EDGES
      }
    },
    "rounded-edges-left": {
      style: {
        radius: [10, 0, 0, 10]
      }
    },

    "rounded-edges-top": {
      style: {
        radius: [10, 10, 0, 0]
      }
    },
    "rounded-edges-bottom": {
      style: {
        radius: [0, 0, 10, 10]
      }
    },
    "rounded-edges-right": {
      style: {
        radius: [0, 10, 10, 0]
      }
    },
    slider: HELPER.slider(),
    "slider-disabled": HELPER.slider("disabled"),
    "slider-focused": HELPER.slider("focused"),
    "slider-invalid": HELPER.slider("invalid"),
    "slider-knob": HELPER.sliderKnob(),
    "slider-knob-disabled": HELPER.sliderKnob("disabled")
  }
});
