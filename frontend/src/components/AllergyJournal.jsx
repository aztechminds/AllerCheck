import { useState } from "react";

export default function AllergyJournal() {
  const [medications, setMedications] = useState([]);
  const [journalEntries, setJournalEntries] = useState([]);
  const [severity, setSeverity] = useState({
    nase: "",
    augen: "",
    lunge: "",
    haut: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEntry = {
      medications,
      date: new Date().toLocaleString(),
      severity,
    };

    setJournalEntries([newEntry, ...journalEntries]);

    setMedications([]);
    setSeverity({ nase: "", augen: "", lunge: "", haut: "" });
  };

  const handleMedicationChange = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions, (option) => option.value);
    setMedications(selectedOptions);
  };

  const calculateSummary = () => {
    if (journalEntries.length === 0) return null;

    let totalSeverity = { nase: 0, augen: 0, lunge: 0, haut: 0 };
    let count = 0;

    journalEntries.forEach((entry) => {
      Object.keys(entry.severity).forEach((key) => {
        totalSeverity[key] += Number(entry.severity[key]);
      });
      count++;
    });

    return {
      nase: (totalSeverity.nase / count).toFixed(1),
      augen: (totalSeverity.augen / count).toFixed(1),
      lunge: (totalSeverity.lunge / count).toFixed(1),
      haut: (totalSeverity.haut / count).toFixed(1),
    };
  };

  const summary = calculateSummary();

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-6 text-center">Allergy Journal</h2>

      <form onSubmit={handleSubmit} className="space-y-4 mb-6">
        <div className="mb-6">
          {["nase", "augen", "lunge", "haut"].map((key) => (
            <div key={key} className="mb-2">
              <label className="block capitalize">{key} (0-3):</label>
              <select
                value={severity[key]}
                onChange={(e) =>
                  setSeverity({ ...severity, [key]: e.target.value })
                }
                className="p-2 border rounded w-full"
              >
                <option value="">Select</option>
                <option value="0">0 - None</option>
                <option value="1">1 - Mild</option>
                <option value="2">2 - Moderate</option>
                <option value="3">3 - Severe</option>
              </select>
            </div>
          ))}
        </div>

        <div>
          <label className="block font-semibold">Medications Taken:</label>
          <select
            multiple
            value={medications}
            onChange={handleMedicationChange}
            className="p-2 border rounded w-full"
          >
            <option value="Antihistamine">Antihistamine</option>
            <option value="Nasal Spray">Nasal Spray</option>
            <option value="Inhaler">Inhaler</option>
            <option value="Eye Drops">Eye Drops</option>
          </select>
          <p className="text-sm text-gray-500">Hold Ctrl (Windows) or Command (Mac) to select multiple.</p>
        </div>

        <button
          type="submit"
          className="p-2 bg-blue-500 text-white rounded w-full"
        >
          Save Entry
        </button>
      </form>

      <table className="table-auto border-collapse border border-gray-300 w-full">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2">Datum</th>
            <th className="border border-gray-300 p-2">Medikamente</th>
            <th className="border border-gray-300 p-2">Nase</th>
            <th className="border border-gray-300 p-2">Augen</th>
            <th className="border border-gray-300 p-2">Lunge</th>
            <th className="border border-gray-300 p-2">Haut</th>
          </tr>
        </thead>
        <tbody>
          {journalEntries.map((entry, index) => (
            <tr key={index}>
              <td className="border border-gray-300 p-2">{entry.date}</td>
              <td className="border border-gray-300 p-2">{entry.medications.join(", ")}</td>
              <td className="border border-gray-300 p-2">{entry.severity.nase}</td>
              <td className="border border-gray-300 p-2">{entry.severity.augen}</td>
              <td className="border border-gray-300 p-2">{entry.severity.lunge}</td>
              <td className="border border-gray-300 p-2">{entry.severity.haut}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {summary && (
        <div className="mt-6 p-4 bg-gray-100 rounded-md">
          <h3 className="text-lg font-bold mb-2">Analysis Summary</h3>
          <p><strong>Average Severity:</strong></p>
          <ul>
            <li>Nase: {summary.nase}</li>
            <li>Augen: {summary.augen}</li>
            <li>Lunge: {summary.lunge}</li>
            <li>Haut: {summary.haut}</li>
          </ul>
        </div>
      )}
    </div>
  );
}
