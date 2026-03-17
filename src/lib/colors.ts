
export type LcarsColorway = "gray" | "white" | "black" | "pale-canary" | "golden-tanoi" | "neon-carrot" | "eggplant" | "lilac" | "anakiwa" | "mariner" | "bahama-blue" | "red-alert" | "blue-bell" | "melrose" | "hopbush" | "chestnut-rose" | "orange-peel" | "atomic-tangerine" | "danub" | "indigo" | "lavender-purple" | "cosmic" | "red-damask" | "medium-carmine" | "bourbon" | "sandy-brown" | "periwinkle" | "dodger-blue" | "dodger-blue-alt" | "blue" | "navy-blue" | "husk" | "rust" | "tamarillo";

export type LcarsColors = `lcars-${LcarsColorway}`;

export type LcarsBackgroundColors = `${LcarsColors}-bg`;
export type LcarsBorderColors = `${LcarsColors}-border`;
export type LcarsTextColors = `${LcarsColors}-color`;

export const defaultColor: LcarsColors = "lcars-golden-tanoi";
export const defaultColorHighlight: LcarsColors = "lcars-hopbush";