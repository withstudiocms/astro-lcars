import type { LcarsColors } from "./colors";
import { selectRandom } from "./random";
import type { NavData } from "./types";

export const SOURCE_URL = "https://github.com/withstudiocms/astro-lcars";

/**
 * Navigation data for the LCARS-themed website, defined as an array of NavData objects that represent the different navigation items, including their text labels, hyperlink references, unique keys for identification, and optional colors from the LCARS color palette to provide visual distinction and thematic consistency throughout the design.
 */
export const NAV: NavData[] = [
    { text: "Home", href: "/", key: "home" },
    { text: "Layouts", href: "/layouts", key: "layouts", color: "pale-canary" },
    { text: "Colors", href: "/colors", key: "colors" },
    { text: "Text Box", href: "/text-box", key: "text-box" },
    { text: "Element", href: "/element", key: "element", color: "pale-canary" },
    { text: "Inputs", href: "/inputs", key: "inputs" },
    { text: "Data Tables", href: "/data-tables", key: "data-tables", color: "pale-canary" },
    { text: "Custom SVGs", href: "/svgs", key: "svgs" },
    { text: "Audio", href: "/audio", key: "audio", color: "pale-canary" },
];

/**
 * A collection of LCARS-themed loading messages that can be randomly selected to provide a dynamic and engaging user experience while the system is initializing or processing data, enhancing the overall immersion and thematic consistency of the LCARS design aesthetic.
 */
export const RANDOM_LCARS_LOADING_MESSAGES = [
    "LOADING SYSTEM...",
    "LOADING INTERFACE...",
    "LOADING DATA STREAMS...",
    "LOADING MODULES...",
    "LOADING COMPONENTS...",
    "LOADING ASSETS...",
    "LOADING USER INTERFACE...",
    "INITIALIZING SYSTEMS...",
    "INITIALIZING INTERFACE...",
    "INITIALIZING DATA STREAMS...",
    "INITIALIZING MODULES...",
    "INITIALIZING COMPONENTS...",
    "INITIALIZING ASSETS...",
    "INITIALIZING USER INTERFACE...",
    "ESTABLISHING CONNECTIONS...",
    "ESTABLISHING DATA STREAMS...",
    "ESTABLISHING MODULES...",
    "ESTABLISHING COMPONENTS...",
    "ESTABLISHING ASSETS...",
    "ESTABLISHING USER INTERFACE...",
    "FINALIZING SETUP...",
    "FINALIZING INTERFACE...",
    "FINALIZING DATA STREAMS...",
    "FINALIZING MODULES...",
    "FINALIZING COMPONENTS...",
    "FINALIZING ASSETS...",
    "FINALIZING USER INTERFACE...",
]

/**
 * The default color used for the LCARS-themed website, set to "lcars-dodger-blue" to provide a vibrant and visually appealing base color that aligns with the iconic LCARS design aesthetic.
 */
export const defaultColor: LcarsColors = "lcars-dodger-blue";

/**
 * The default color used for highlights in the LCARS-themed website, set to "lcars-dodger-blue-alt" to provide a visually distinct accent while maintaining the overall aesthetic of the design.
 */
export const defaultColorHighlight: LcarsColors = "lcars-dodger-blue-alt";

/**
 * Returns a random loading message from the predefined list of LCARS-themed loading messages, providing a dynamic and engaging user experience while the system is initializing or processing data.
 */
export const getRandomLCARSLoadingMessage = (): string => {
    return selectRandom(RANDOM_LCARS_LOADING_MESSAGES);
};