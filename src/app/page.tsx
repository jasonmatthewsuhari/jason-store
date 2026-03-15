"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [qty, setQty] = useState(1);

  const handleCheckout = async () => {
    setLoading(true);
    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ quantity: qty }),
    });
    const data = await res.json();
    if (data.url) {
      window.location.href = data.url;
    } else {
      alert("checkout broke lol. did you set your stripe keys?");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(180deg, #ff6b00, #ff00ff, #00ff00, #0000ff)" }}>
      {/* marquee banner */}
      <div style={{ background: "#ff0000", color: "#ffff00", fontSize: 20, fontWeight: "bold", overflow: "hidden", whiteSpace: "nowrap" }}>
        <div className="marquee-scroll">
          🔥🔥🔥 HOT NEW PRODUCT 🔥🔥🔥 LIMITED EDITION 🔥🔥🔥 BUY NOW BEFORE ITS GONE 🔥🔥🔥 FREE SHIPPING WORLDWIDE 🔥🔥🔥 SATISFACTION GUARANTEED (no refunds) 🔥🔥🔥
        </div>
      </div>

      {/* hit counter */}
      <div className="text-center py-1" style={{ background: "#000080", color: "#00ff00", fontSize: 12 }}>
        You are visitor #<span style={{ color: "#ff0" }}>4,208,331</span> | Last updated: March 15, 2026 | Best viewed in Internet Explorer 6
      </div>

      {/* header */}
      <div className="text-center py-6">
        <h1
          className="text-6xl font-bold mb-2"
          style={{
            color: "#ffff00",
            textShadow: "3px 3px 0px #ff0000, -3px -3px 0px #0000ff, 6px 6px 0px #000",
            WebkitTextStroke: "1px black",
          }}
        >
          JASON MOUSE
        </h1>
        <p className="text-2xl" style={{ color: "#fff", textShadow: "2px 2px #000" }}>
          The Mouse That Stares Back
        </p>
      </div>

      {/* product section */}
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-6 items-center">
          {/* image */}
          <div className="flex-1">
            <div
              className="p-4 rounded-lg"
              style={{
                border: "5px dashed #ff00ff",
                background: "repeating-linear-gradient(45deg, #fff, #fff 10px, #ffe0f0 10px, #ffe0f0 20px)",
                boxShadow: "10px 10px 0px #000",
                transform: "rotate(-2deg)",
              }}
            >
              <Image
                src="/jason-mouse.jpg"
                alt="The Jason Mouse"
                width={500}
                height={500}
                className="w-full"
                style={{ borderRadius: 8 }}
                priority
              />
              <p className="text-center mt-2" style={{ color: "#ff0000", fontSize: 11 }}>
                * actual product may or may not look exactly like this. we dont know either
              </p>
            </div>
          </div>

          {/* details */}
          <div className="flex-1">
            <div
              className="p-6 rounded-lg"
              style={{
                background: "#fffacd",
                border: "4px solid #ff4500",
                boxShadow: "8px 8px 0px #8b0000",
              }}
            >
              <h2 className="text-3xl font-bold mb-3" style={{ color: "#8b0000" }}>
                Jason Mouse&trade;
              </h2>
              <p className="mb-3" style={{ color: "#333", fontSize: 14 }}>
                Hyper-realistic face sculpt wireless mouse. It&apos;s a mouse. With a face. Jason&apos;s face.
                You scroll with his hair. You click his ears. It&apos;s bluetooth. What more do you want.
              </p>

              <ul className="mb-4 text-sm" style={{ color: "#555" }}>
                <li>&#10004; Bluetooth 5.3 (he connects to you wirelessly)</li>
                <li>&#10004; USB-C charging (feed him)</li>
                <li>&#10004; 16,000 DPI (he sees everything)</li>
                <li>&#10004; Ergonomic (cradling a face is surprisingly comfy)</li>
                <li>&#10004; Forward &amp; Back buttons (on his neck)</li>
                <li>&#10004; Scroll wheel (in his hair)</li>
                <li>&#10004; Silicone skin overlay (yes, really)</li>
              </ul>

              {/* price */}
              <div className="mb-4">
                <span className="line-through text-xl" style={{ color: "#999" }}>$999.99</span>
                <span className="text-xl" style={{ color: "#999" }}> </span>
                <span className="line-through text-xl" style={{ color: "#999" }}>$499.99</span>
                <span className="text-xl" style={{ color: "#999" }}> </span>
                <span className="line-through text-xl" style={{ color: "#999" }}>$199.99</span>
                <br />
                <span className="text-5xl font-bold" style={{ color: "#ff0000" }}>
                  $88.88
                </span>
                <span className="text-lg ml-2" style={{ color: "#ff4500" }}>
                  (nice)
                </span>
              </div>

              <div
                className="p-2 mb-4 text-center text-sm"
                style={{ background: "#ff0", border: "2px dashed #f00", color: "#000" }}
              >
                &#9888; Only <b>3</b> left in stock!! (we&apos;ve been saying this for 6 months)
              </div>

              {/* quantity */}
              <div className="flex items-center gap-3 mb-4">
                <label className="font-bold" style={{ color: "#333" }}>Qty:</label>
                <select
                  value={qty}
                  onChange={(e) => setQty(Number(e.target.value))}
                  className="border-2 border-black p-1 text-lg"
                  style={{ fontFamily: "'Comic Sans MS', cursive", cursor: "pointer" }}
                >
                  {[1, 2, 3, 4, 5, 69].map((n) => (
                    <option key={n} value={n}>
                      {n} {n === 69 ? "(nice)" : ""}
                    </option>
                  ))}
                </select>
              </div>

              {/* buy button */}
              <button
                onClick={handleCheckout}
                disabled={loading}
                className="w-full py-4 text-2xl font-bold rounded-lg transition-all"
                style={{
                  background: loading ? "#999" : "linear-gradient(180deg, #ff4500, #ff0000)",
                  color: "#fff",
                  border: "3px outset #ff6347",
                  textShadow: "2px 2px #000",
                  cursor: loading ? "wait" : "pointer",
                  animation: loading ? "none" : "pulse 1s infinite",
                }}
              >
                {loading ? "PROCESSING..." : "BUY NOW 💳"}
              </button>

              <p className="text-center mt-2" style={{ color: "#888", fontSize: 11 }}>
                Powered by Stripe. Your money is safe. Your dignity is not.
              </p>
            </div>
          </div>
        </div>

        {/* testimonials */}
        <div className="mt-10 mb-10">
          <h3
            className="text-3xl font-bold text-center mb-4"
            style={{ color: "#fff", textShadow: "2px 2px #000" }}
          >
            &#11088; REAL REVIEWS FROM REAL PEOPLE &#11088;
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "Sarah K.", stars: 5, text: "I bought this as a joke for my boyfriend. He won't use any other mouse now. It's been 4 months. I'm concerned." },
              { name: "Mike T.", stars: 5, text: "My coworkers keep asking why my mouse has a face. I keep asking why theirs doesn't. We are not the same." },
              { name: "Jason S.", stars: 5, text: "I made this. I'm leaving a 5-star review on my own product. Is that allowed? Too late." },
            ].map((r, i) => (
              <div
                key={i}
                className="p-4 rounded"
                style={{
                  background: "#fff",
                  border: "3px solid #ffd700",
                  boxShadow: "5px 5px 0px #b8860b",
                  transform: `rotate(${i === 0 ? -1 : i === 2 ? 1 : 0}deg)`,
                }}
              >
                <div style={{ color: "#ffd700", fontSize: 20 }}>
                  {"★".repeat(r.stars)}
                </div>
                <p className="text-sm my-2" style={{ color: "#333" }}>&ldquo;{r.text}&rdquo;</p>
                <p className="text-xs font-bold" style={{ color: "#888" }}>- {r.name} | Verified Purchaser (trust us)</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div
          className="mb-10 p-6 rounded-lg"
          style={{ background: "rgba(0,0,0,0.7)", border: "2px solid #0f0" }}
        >
          <h3 className="text-2xl font-bold mb-4" style={{ color: "#0f0" }}>
            FREQUENTLY ASKED QUESTIONS
          </h3>
          {[
            ["Is this real?", "Yes. Unfortunately."],
            ["Does it actually work as a mouse?", "Surprisingly, yes. Bluetooth 5.3, 16K DPI, the whole deal."],
            ["Why does it have a face?", "Why doesn't YOUR mouse have a face?"],
            ["Can I return it?", "You can try. But it'll stare at you from the return box and you'll feel too guilty."],
            ["Is this a joke?", "The only joke is every other mouse you've been using until now."],
          ].map(([q, a], i) => (
            <div key={i} className="mb-3">
              <p className="font-bold" style={{ color: "#ff0" }}>Q: {q}</p>
              <p style={{ color: "#ccc", fontSize: 14 }}>A: {a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* footer */}
      <div className="text-center py-6" style={{ background: "#000080", color: "#00ff00", fontSize: 12 }}>
        <p>&copy; 2026 FaceTech Peripherals | 21 Prince George Park, Singapore 118420</p>
        <p>Contact: jasonmatthewsuhari@gmail.com | +65 8267 1155</p>
        <p className="mt-2" style={{ color: "#888", fontSize: 10 }}>
          This website was made intentionally terrible. The product however is unironically real.
        </p>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.03); }
        }
        .marquee-scroll {
          display: inline-block;
          animation: marquee 12s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </div>
  );
}
