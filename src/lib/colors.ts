/**
 * Defines the color types and constants for the LCARS-themed website, including a comprehensive list of color names that align with the iconic LCARS design aesthetic, as well as template literal types for standardized color class naming conventions used throughout the design for consistent styling.
 */
export type LcarsColorway = "gray" | "white" | "black" | "pale-canary" | "golden-tanoi" | "neon-carrot" | "eggplant" | "lilac" | "anakiwa" | "mariner" | "bahama-blue" | "red-alert" | "blue-bell" | "melrose" | "hopbush" | "chestnut-rose" | "orange-peel" | "atomic-tangerine" | "danub" | "indigo" | "lavender-purple" | "cosmic" | "red-damask" | "medium-carmine" | "bourbon" | "sandy-brown" | "periwinkle" | "dodger-blue" | "dodger-blue-alt" | "blue" | "navy-blue" | "husk" | "rust" | "tamarillo";

/**
 * Represents the base LCARS colors in the LCARS-themed website, defined as a template literal type that combines the "lcars-" prefix with the specific color names from the LcarsColorway type to create a standardized set of color classes that can be used throughout the design for consistent styling.
 */
export type LcarsColors = `lcars-${LcarsColorway}`;

/**
 * Represents the background colors in the LCARS-themed website, defined as a template literal type that combines the base LCARS colors with a "-bg" suffix to create specific background color classes that can be used throughout the design for consistent styling.
 */
export type LcarsBackgroundColors = `${LcarsColors}-bg`;

/**
 * Represents the border colors in the LCARS-themed website, defined as a template literal type that combines the base LCARS colors with a "-border" suffix to create specific border color classes that can be used throughout the design for consistent styling.
 */
export type LcarsBorderColors = `${LcarsColors}-border`;

/**
 * Represents the text colors in the LCARS-themed website, defined as a template literal type that combines the base LCARS colors with a "-color" suffix to create specific text color classes that can be used throughout the design for consistent styling.
 */
export type LcarsTextColors = `${LcarsColors}-color`;

/**
 * The default color used for the LCARS-themed website, set to "lcars-dodger-blue" to provide a vibrant and visually appealing base color that aligns with the iconic LCARS design aesthetic.
 */
export const defaultColor: LcarsColors = "lcars-dodger-blue";

/**
 * The default color used for highlights in the LCARS-themed website, set to "lcars-dodger-blue-alt" to provide a visually distinct accent while maintaining the overall aesthetic of the design.
 */
export const defaultColorHighlight: LcarsColors = "lcars-dodger-blue-alt";