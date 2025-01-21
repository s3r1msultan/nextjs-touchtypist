export default function Stats() {
  const stats = {
    wpm: 45,
    accuracy: 92,
  };

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Your Statistics</h1>
      <p>Words Per Minute: {stats.wpm}</p>
      <p>Accuracy: {stats.accuracy}%</p>
    </main>
  );
}
