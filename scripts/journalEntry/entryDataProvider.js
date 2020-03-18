const journalEntries = [
    {
        id: 1,
        date: "2/18/2020",
        topic: "flexbox",
        entry: "you're going to want to use flexbox froggy...trust me.",
        mood: "meh",
    },
    {
        id: 2,
        date: "3/18/2020",
        topic: "api calls",
        entry: "in order to understand the api, you must become the api.",
        mood: "ecstatic",
    },
    

];

export const useJournalEntries = () => {
    const sortedByDate = journalEntries.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate.slice()
}
