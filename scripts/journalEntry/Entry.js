export const journalEntry = journalEntry => {
  return `
        <section class="journalEntry" id="entry--${journalEntry.id}">
            <div class="journalEntry__date">${journalEntry.date}</div>
            <div class="journalEntry__topic">${journalEntry.topic}</div>
            <div class="journalEntry__entry">${journalEntry.entry}</div>
            <div class="journalEntry__mood">${journalEntry.mood}</div>
        </section>
    `;
};
