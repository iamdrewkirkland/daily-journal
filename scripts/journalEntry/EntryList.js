import { useJournalEntries } from "./entryDataProvider.js";
import { journalEntry } from "./Entry.js";


const contentTarget = document.querySelector(".journalEntries");

export const JournalEntryList = () => {
  const journalEntries = useJournalEntries();
  for (const singleEntry of journalEntries) {
    contentTarget.innerHTML += journalEntry(singleEntry);
  }
};
