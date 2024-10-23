export interface DictionaryDataRes {
    word: string;
    phonetic: string;
    meanings: Meaning[];
    sourceUrls: string[];
};

export interface Meaning {
    partOfSpeech: string;
    definitions: Definition[];
    synonyms: string[];
    antonyms: string[];
}

export interface Definition {
    definition: string;
    synonyms: string[];
    antonyms: string[];
}

export interface IThemeContext {
    isLight: boolean;
    toggleTheme: () => void;
    theme: Theme;
}

export type FontFamily = 'font-sans' | 'font-serif' | 'font-mono';

export interface IFontContext {
    fontFamily: FontFamily;
    toggleFontFamily: (value: FontFamily) => void;
}

interface Theme {
    main_bg: string;
    sec_bg: string;
    text_sec: string;
    text_terc: string;
    text_bw: string;
    hover_play_btn: string;
    meaning_text: string;
}

export interface DropdownOption {
    label: string;
    value: string;
}
