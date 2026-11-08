import { useEffect, useState } from 'react';

export default function DailyHadith() {
  const [hadith, setHadith] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Notice the URL is just /api/daily-hadith now
    fetch('/api/daily-hadith')
      .then(res => res.json())
      .then(data => {
        setHadith(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch hadith", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center p-4">Loading daily insight...</div>;
  if (!hadith) return null;

  return (
    <div className="bg-amber-50 border-l-4 border-amber-600 p-6 shadow-md my-8 mx-auto max-w-4xl rounded-r">
      <h3 className="text-amber-800 font-bold text-lg mb-2">Tibb-e-Nabawi (Daily Insight)</h3>
      <p className="text-gray-800 text-lg italic mb-2">"{hadith.text}"</p>
      <p className="text-gray-500 text-sm text-right">— {hadith.reference}</p>
    </div>
  );
}
