import { useRouter } from "next/router";

export default function Results() {
  const router = useRouter();
  const { origin, destination, depart, adults } = router.query;

  return (
    <div style={{ maxWidth: 700, margin: "60px auto", textAlign: "center" }}>
      <h2>תוצאות חיפוש טיסות</h2>
      <div style={{ padding: 32, border: "1px solid #e0e0e0", borderRadius: 12, marginTop: 32 }}>
        <p>מוצא: <b>{origin}</b></p>
        <p>יעד: <b>{destination}</b></p>
        <p>תאריך יציאה: <b>{depart}</b></p>
        <p>מספר מבוגרים: <b>{adults}</b></p>
        {/* בהמשך נוסיף כאן תוצאות API אמיתיות */}
        <div style={{ marginTop: 40, color: "#aaa" }}>
          <b>כאן יופיעו תוצאות חיפוש חיות ברגע שנחבר API!</b>
        </div>
      </div>
    </div>
  );
}
