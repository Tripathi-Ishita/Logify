import colors from "./colors";
export const darkTheme = {
    //background-layers from bottom to top
    background: colors.dark800,//main screen floor
    backgroundCard: colors.dark700,//cards sitting on floor
    backgroundElevated: colors.dark600,//modals, dropdown above cards
    backgroundInput: colors.dark700,//text ip fill color
    //Texxt- most prominent to least prominent
    textPrimary: colors.textLight,//main readable text
    textSecondary: colors.textMuted,//subtitle,date,secondary info
    textPlaceholder: colors.textFaint,
    textOnPrimary: colors.textWhite,//color on purple button
    textFaint: colors.textFaint,
    primary: colors.purple500,//buttonns.active tab,highlights
    primaryLight: colors.purple300,//lighter ,selected State bg

    //borders
    border: colors.dark500,
    //semantic
    success: colors.success,
    successBackground: colors.successBg,
    warning: colors.warning,
    warningBackground: colors.warningBg,
    error: colors.error,
    errorBackground: colors.errorBg,
    info: colors.info,
    infoBackground: colors.infoBg,
    moods: [
        colors.mood1,
        colors.mood2,
        colors.mood3,
        colors.mood4,
        colors.mood5,
    ],

    // Meta — useful for conditional logic
    isDark: true as const,

} as const;


export const lightTheme = {
    background: colors.light200,
    backgroundCard: colors.light300,
    backgroundElevated: colors.light100,
    backgroundInput: colors.light100,

    textPrimary: colors.textDark,
    textSecondary: colors.textDarkMuted,
    textPlaceholder: colors.textDarkMuted,
    textOnPrimary: colors.textWhite,

    primary: colors.purple500,
    primaryLight: colors.purple100,
    border: colors.light400,
    //semantic
    success: colors.success,
    successBackground: colors.successBg,
    warning: colors.warning,
    warningBackground: colors.warningBg,
    error: colors.error,
    errorBackground: colors.errorBg,
    info: colors.info,
    infoBackground: colors.infoBg,
    moods: [
        colors.mood1,
        colors.mood2,
        colors.mood3,
        colors.mood4,
        colors.mood5,
    ],

    // Meta — useful for conditional logic
    isDark: false as const,

} as const;

export type Theme = typeof darkTheme;
