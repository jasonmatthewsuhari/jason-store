export default function Success() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-center px-4"
      style={{
        background: "linear-gradient(180deg, #00ff00, #ffff00)",
        fontFamily: "'Comic Sans MS', cursive",
      }}
    >
      <h1
        className="text-6xl font-bold mb-6"
        style={{ color: "#ff0000", textShadow: "3px 3px #000" }}
      >
        ORDER CONFIRMED
      </h1>
      <p className="text-3xl mb-4" style={{ color: "#000" }}>
        You actually bought it.
      </p>
      <p className="text-xl mb-2" style={{ color: "#333" }}>
        A Jason Mouse is being hand-sculpted for you as we speak.
      </p>
      <p className="text-lg mb-8" style={{ color: "#555" }}>
        Expected delivery: whenever Jason finishes making it in his dorm room.
      </p>
      <div
        className="p-6 rounded-lg mb-6"
        style={{ background: "#fff", border: "4px dashed #ff00ff", maxWidth: 500 }}
      >
        <p className="text-sm" style={{ color: "#666" }}>
          A confirmation email has been sent to your inbox. If you don&apos;t see it, check spam.
          If it&apos;s not in spam, it&apos;s probably still loading. The email server runs on a
          Raspberry Pi under Jason&apos;s bed.
        </p>
      </div>
      <a
        href="/"
        className="text-xl font-bold py-3 px-8 rounded-lg"
        style={{
          background: "linear-gradient(180deg, #ff4500, #ff0000)",
          color: "#fff",
          border: "3px outset #ff6347",
          textDecoration: "none",
          textShadow: "2px 2px #000",
        }}
      >
        BUY ANOTHER ONE (you know you want to)
      </a>
    </div>
  );
}
