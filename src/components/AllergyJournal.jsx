import { useState } from "react";
import JournalForm from "./JournalForm";

export default function AllergyJournal() {
  const [journalEntries, setJournalEntries] = useState([]);

  const handleAddEntry = (entry) => {
    setJournalEntries([...journalEntries, entry]);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold">My Allergy Journal</h1>
      <JournalForm onSubmit={handleAddEntry} />

      <div className="mt-6">
        <h2 className="text-xl font-semibold">Previous Entries</h2>
        {journalEntries.length === 0 ? (
          <p>No entries yet.</p>
        ) : (
          <ul>
            {journalEntries.map((entry, index) => (
              <li key={index} className="border p-4 mt-4 rounded">
                <p><strong>Symptoms:</strong> {entry.symptoms}</p>
                <p><strong>Intensity:</strong> {entry.intensity}</p>
                <p><strong>Duration:</strong> {entry.duration} hours</p>
                <p><strong>Medications:</strong> {entry.medications}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
