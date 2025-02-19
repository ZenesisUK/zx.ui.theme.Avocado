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

/**
 * The simple qooxdoo font theme.
 *
 * @usefont(Avenir)
 * @usefont(AvenirLight)
 * @usefont(AvenirMedium)
 * @usefont(AvenirBlack)
 */
qx.Theme.define("zx.ui.theme.avocado.Font", {
  fonts: {
    heavy: {
      size: 13,
      family: ["AvenirBlack"],
      fontName: "AvenirBlack"
    },
    headline: {
      size: 24,
      family: ["AvenirLight"],
      fontName: "AvenirLight"
    },
    micro: {
      size: 4,
      lineHeight: 1,
      family: ["AvenirLight"]
    },
    tiny: {
      size: 9,
      lineHeight: 1,
      family: ["AvenirLight"]
    },
    heading1: {
      size: 24,
      family: ["AvenirBlack"]
    },
    heading2: {
      size: 21,
      family: ["AvenirBlack"]
    },
    heading3: {
      size: 18,
      family: ["AvenirBlack"]
    },
    default: {
      size: 13,
      family: ["AvenirLight"],
      fontName: "AvenirLight"
    },

    italic: {
      size: 13,
      italic: true,
      family: ["AvenirLight"],
      fontName: "AvenirLight"
    },

    bold: {
      size: 13,
      family: ["AvenirMedium"],
      fontName: "AvenirMedium"
    },

    small: {
      size: 11,
      family: ["AvenirLight"],
      fontName: "AvenirLight"
    },

    medium: {
      size: 13,
      family: ["AvenirLight"],
      fontName: "AvenirLight"
    },

    large: {
      size: 16,
      family: ["AvenirLight"],
      fontName: "Avenir"
    },

    strikeout: {
      size: 13,
      lineHeight: 1.4,
      family: ["AvenirLight"],
      fontName: "AvenirLight",
      decoration: "line-through"
    },

    monospace: {
      size: 14,
      family: ["monospace"],
      color: "text-primary-on-surface",
      fontName: "Avenir"
    }
  }
});
