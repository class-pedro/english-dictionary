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