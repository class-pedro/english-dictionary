import { Meaning } from "../../types/types";

type Props = {
    meaning: Meaning;
    isLight: boolean;
}

export function MeaningCard({ meaning, isLight }: Props) {

    const theme = isLight ?
        {
            main_bg: 'bg-gray-50',
            sec_bg: 'bg-gray-200',
            text_sec: 'text-gray-300',
            text_terc: 'text-gray-500',
            text_bw: 'text-black',
            meaning_text: 'text-gray-600',
            hover_play_btn: 'hover:shadow-blue-200 hover:border-solid hover:border-1 hover:border-blue-100'
        } :
        {
            main_bg: 'bg-gray-900',
            sec_bg: 'bg-gray-800',
            text_sec: 'text-gray-700',
            text_terc: 'text-gray-400',
            text_bw: 'text-gray-300',
            hover_play_btn: 'hover:shadow-gray-800 hover:border-solid hover:border-1 hover:border-blue-900',
            meaning_text: 'text-gray-100',
        }

    return (
        <section>
            <div className={`flex flex-row justify-between items-center gap-6`}>
                <span className={`text-lg font-bold ${theme.text_bw}`}>{`${meaning.partOfSpeech}`}</span>
                <div className={`w-full h-[1px] bg-gray-300`} />
            </div>

            <p className={`text-lg font-extralight mt-5 mb-3 ${theme.meaning_text}`}>Meaning</p>

            <ul className={`ps-5 list-disc mb-5 marker:text-blue-500`}>
                {meaning.definitions.map((definition, index) => (
                    <li key={index} className={`${theme.meaning_text} my-3`}>{definition.definition}</li>
                ))}
            </ul>

            {meaning.synonyms.length > 0 &&
                (
                    <div className={`flex flex-row items-center gap-3 mb-5`}>
                        <h5 className={`text-lg font-extralight text-gray-400`}>Synonyms</h5>
                        <span className={`text-lg text-blue-500`}>{meaning.synonyms.join(", ")}.</span>
                    </div>
                )}
        </section>
    )
}