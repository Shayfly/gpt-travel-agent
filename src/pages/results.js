import { useEffect, useState } from "react";

export default function Results() {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // דוגמה לחיפוש טיסות תל אביב (TLV) ללונדון (LON) ל-7 ימים קדימה
    const origin = "TLV";
    const destination = "LON";

    fetch(`/api/flights?origin=${origin}&destination=${destination}`)
      .then((res) => res.json())
      .then((data) => {
        setFlights(data.data || []);
        setLoading(false);
      })
      .catch((err) => {
        setError("שגיאה בחיפוש טיסות");
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ maxWidth: 800, margin: "60px auto", textAlign: "center" }}>
      <h2>תוצאות חיפוש טיסות אמיתיות (Travelpayouts)</h2>
      {loading && <p>טוען נתונים...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {flights.length > 0 ? (
        <div>
          {flights.map((flight, i) => (
            <div key={i} style={{ border: "1px solid #eee", borderRadius: 10, padding: 22, margin: 22, textAlign: "right" }}>
              <p>יציאה: <b>{flight.origin}</b> &rarr; <b>{flight.destination}</b></p>
              <p>תאריך: {flight.departure_at?.slice(0, 10) || "-"}</p>
              <p>מחיר: <b>{flight.value}$</b></p>
              <a href={flight.link || "#"} target="_blank" rel="noopener noreferrer" style={{ color: "#0070f3", textDecoration: "underline", fontWeight: "bold" }}>
                הזמן עכשיו (דרך Affiliate)
              </a>
            </div>
          ))}
        </div>
      ) : (
        !loading && <p>לא נמצאו טיסות בתאריכים המבוקשים.</p>
      )}
    </div>
  );
}
