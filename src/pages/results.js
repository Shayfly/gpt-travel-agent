export default function Results() {
  return (
    <div style={{ maxWidth: 700, margin: "60px auto", textAlign: "center" }}>
      <h2>דוגמת תוצאות חיפוש</h2>
      <div style={{ padding: 32, border: "1px solid #e0e0e0", borderRadius: 12, marginTop: 32 }}>
        <p>✈️ טיסה: תל אביב &rarr; לונדון</p>
        <p>תאריך: 01/09/2025</p>
        <p>מחיר: 400$</p>
        <button style={{ padding: "8px 24px", background: "#0070f3", color: "#fff", border: 0, borderRadius: 6, marginTop: 16 }}>
          הזמן עכשיו
        </button>
      </div>
    </div>
  );
}
