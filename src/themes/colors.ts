const colors = {
    //Purple shades
    purple500: '#7F77DD',
    purple400: '#a78bfa',
    purple300: '#c4b5fd',
    purple100: '#ede9fe',

    //Dark backgrounds for dark mode
    dark900: '#0d0814',//status bar area
    dark800: '#1a1020',//main screen bg
    dark700: '#241830',//cardbg
    dark600: '#2d1f4a',//elevated stuff(card, modal dialog)
    dark500: '#3d2060',//borders and dividers

    //Light background colors for light mode
    light100: '#ffffff',
    light200: '#f5f3ff',//main light bg
    light300: '#ede9fe',//card bg
    light400: '#ddd6fe',//borders

    //Different texts for dark and light theme
    textWhite: '#ffffff',//text on colored buttons
    textLight: '#e0d4f7',//primary text on dark bg
    textMuted: '#a090c0',//secondary text on dark bg
    textFaint: '#5a4a7a',//placeholders on dark bg

    textDark: '#1a1020',//primary text on white bg
    textDarkMuted: '#4a3a6a',//secondary text on light bg

    //not decor, for some info(semantic colors)

    success: '#22c55e',
    successBg: '#dcfce7',

    warning: '#f59e0b',
    warningBg: '#fef3c7',

    error: '#ef4444',
    errorBg: '#fee2e2',

    info: '#3b82f6',
    infoBg: '#dbeafe',

    //mood colors
    mood1: '#ef4444',//worst
    mood2: '#f97316',//bad
    mood3: '#f59e0b',//okok
    mood4: '#84cc16',//gud
    mood5: '#22c55e',//best

    transparent: 'transparent',
} as const;
export default colors;