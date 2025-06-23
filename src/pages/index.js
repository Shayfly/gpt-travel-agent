import { useState } from "react";

export default function Home() {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [depart, setDepart] = useState("");
  const [adults, setAdults] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    // אפשרות: נשלח את הנתונים ל-API או לעמוד תוצאות בעתיד
    alert(`חיפוש: ${origin} -> ${destination} בתאריך ${depart} לנוסע ${adults}`);
  };

  return (
    <div style={{ textAlign: "center", marginTop: 60 }}>
      <img src="/images/logo.png" alt="GPT Travel Agent" style={{ height: 80 }} />
      <h1>חיפוש טיסות</h1>
      <form onSubmit={handleSubmit} style={{ display: "inline-block", marginTop: 40, textAlign: "right" }}>
        <div>
          <label>מוצא:</label>
          <input type="text" value={origin} onChange={e => setOrigin(e.target.value)} placeholder="תל אביב" style={{ marginRight: 8 }} required />
        </div>
        <div style={{ marginTop: 12 }}>
          <label>יעד:</label>
          <input type="text" value={destination} onChange={e => setDestination(e.target.value)} placeholder="פריז" style={{ marginRight: 8 }} required />
        </div>
        <div style={{ marginTop: 12 }}>
          <label>תאריך יציאה:</label>
          <input type="date" value={depart} onChange={e => setDepart(e.target.value)} style={{ marginRight: 8 }} required />
        </div>
        <div style={{ marginTop: 12 }}>
          <label>מבוגרים:</label>
          <input type="number" min="1" value={adults} onChange={e => setAdults(e.target.value)} style={{ width: 60, marginRight: 8 }} />
        </div>
        <button type="submit" style={{ marginTop: 24, background: "#0070f3", color: "#fff", padding: "8px 22px", border: 0, borderRadius: 6, fontSize: 18 }}>
          חפש טיסות
        </button>
      </form>
    </div>
  );
}
