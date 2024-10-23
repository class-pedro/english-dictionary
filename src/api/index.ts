export const fetchDictionaryData = async (word: string) => {
    try {
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);

        if (!response.ok) {
            throw new Error('Erro na requisição');
        }
        const result = await response.json();
        
        return result;
    } catch (err) {
        if (err instanceof Error) throw new Error(err.message);
    }
};