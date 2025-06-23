export default async function handler(req, res) {
  const { origin = "TLV", destination = "LON", depart = "" } = req.query;

  // תאריך ברירת מחדל ל-7 ימים קדימה
  let depart_date = depart;
  if (!depart_date) {
    const d = new Date();
    d.setDate(d.getDate() + 7);
    depart_date = d.toISOString().split("T")[0];
  }

  const url = `https://api.travelpayouts.com/aviasales/v3/prices_for_dates?origin=${origin}&destination=${destination}&departure_at=${depart_date}&unique=false&sorting=price&direct=false&currency=usd&limit=8&token=8349af28ce9d95c3ee1635cc7729cc09`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "שגיאה בקבלת תוצאות מה-API" });
  }
}
