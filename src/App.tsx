import { useEffect, useState } from "react";
import { fetchDictionaryData } from "./api";
import { FaBook } from "react-icons/fa6";
import { IoSunnyOutline } from "react-icons/io5";
import { FiMoon } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
import { FaPlay } from "react-icons/fa";
import { DictionaryDataRes } from "./types/types";
import { MeaningCard } from "./components/MeaningCard";
import { FaExternalLinkAlt } from "react-icons/fa";


function App() {

  const [isLight, setIsLight] = useState<boolean>(true);
  const [word, setWord] = useState<string>("")
  const [dictionaryData, setDictionaryData] = useState<DictionaryDataRes[]>([]);

  function toggleTheme() {
    setIsLight(prev => !prev);
  }

  const handleFetch = async (word: string) => {
    try {
      const res = await fetchDictionaryData(word);

      if (res) {
        setDictionaryData(res);
        setWord("");
      }

    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    handleFetch("welcome");
  }, [])

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
      meaning_text: 'text-gray-300',
    }

  return (
    <main className={`${theme.main_bg} min-h-[100vh] flex flex-col items-center font-serif`}>
      <nav className={`flex flex-row justify-between items-center py-6 w-[75%] max-w-[700px]`}>
        <FaBook
          size={32}
          className={`${theme.text_sec}`}
        />

        <div>
          <button onClick={() => setIsLight(prev => !prev)}>
            {
              isLight ? (
                <FiMoon
                  size={36}
                  className={`${theme.text_sec} animate-fadeInOut hover:opacity-[80%]`}
                />
              ) : (
                <IoSunnyOutline
                  size={36}
                  className={`${theme.text_sec} animate-fadeInOut hover:opacity-[80%]`}
                />
              )
            }
          </button>
        </div>
      </nav>

      <section className={`flex flex-col gap-4 w-[75%] max-w-[700px]`}>
        <div className={`w-full ${theme.sec_bg} h-[60px] px-5 py-2 mb-4 rounded-md flex flex-row gap-2`}>
          <input
            className={`${theme.sec_bg} ${theme.text_terc} font-medium text-xl w-full h-full outline-none placeholder:opacity-50`}
            type="text"
            placeholder="Type a word"
            onChange={(e) => setWord(e.target.value)}
            value={word}
          />
          <button onClick={() => handleFetch(word)}>
            <IoSearch
              size={24}
              className={`text-blue-500 hover:text-blue-400 animate-pulse`}
            />
          </button>
        </div>
        <div className="w-full flex flex-row justify-between items-center">
          <div className="flex flex-col">
            <h2 className={`${theme.text_bw} sm:text-[5rem] text-5xl font-medium mt-[-15px] mb-[-5px]`}>{dictionaryData[0]?.word}</h2>
            <span className="text-blue-500 text-2xl font-medium">{dictionaryData[0]?.phonetic}</span>
          </div>
          <button className={`bg-blue-300 max-[500px]:w-[60px] max-[500px]:h-[60px] w-[80px] h-[80px] rounded-[50%] flex justify-center items-center hover:shadow-lg ${theme.hover_play_btn}`}>
            <FaPlay
              size={32}
              className={`text-blue-500 ms-1`}
            />
          </button>
        </div>
      </section>
      <section className={`w-[75%] max-w-[700px] mt-5 mb-5 pb-3 border-solid border-b-[1px]`}>
        {dictionaryData.length > 0 && dictionaryData[0].meanings.map((meaning, index) => (
          <MeaningCard
            key={index}
            meaning={meaning}
            isLight={isLight}
          />)
        )}
      </section>
      {dictionaryData.length > 0 && dictionaryData[0].sourceUrls.length > 0 && (
        <section className={`w-[75%] max-w-[700px] pb-20 flex flex-row items-center gap-3`}>
          <span className={`text-lg font-extralight ${theme.meaning_text}`}>
            Source
          </span>
          <a
            className={`underline flex items-center gap-2 ${theme.text_bw}`}
            href={`${dictionaryData[0].sourceUrls[0]}`}
            target="_blank"
          >
            {`${dictionaryData[0].sourceUrls[0]}`}
            <FaExternalLinkAlt
              size={12}
              className={`${theme.text_terc}`} />
          </a>
        </section>
      )}


    </main>
  )
}

export default App;
