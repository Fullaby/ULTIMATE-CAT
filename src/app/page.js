"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [cats, setCats] = useState([]);
  const [index, setIndex] = useState(0);
  const [stage, setStage] = useState("cats");

  const audioRef = useRef(null);
  useEffect(() => {
    async function fetchCats() {
      const res = await fetch(
        "https://api.thecatapi.com/v1/images/search?limit=10"
      );
      const data = await res.json();
      setCats(data);
    }
    fetchCats();
  }, []);

  useEffect(() => {
    if (index === cats.length && cats.length > 0) {
      setStage("bounce");

      if (audioRef.current) {
        audioRef.current.volume = 0.2;
        audioRef.current.play().catch(() => {});
      }

      setTimeout(() => {
        setStage("fullscreen");
        fadeMusicIn();
      }, 18000);
    }
  }, [index, cats.length]);

  function fadeMusicIn() {
    if (!audioRef.current) return;
    let v = 0.2;
    const i = setInterval(() => {
      v += 0.05;
      audioRef.current.volume = Math.min(v, 1);
      if (v >= 1) clearInterval(i);
    }, 200);
  }

  function nextCat() {
    setIndex((p) => p + 1);
  }

const bounceAnimation = {
  x: [0, -400, 400, -300, 300, 0],
  y: [0, -200, -200, 200, 200, 0],
  transition: {
    duration: 1.2,    
    ease: "linear",
    repeat: 15,      
    repeatType: "loop",
  },
};

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center overflow-hidden relative">
      <audio ref={audioRef} src="/music/cat-theme.mp3" loop />

      {stage === "cats" && cats.length > 0 && index < cats.length && (
        <div className="z-10 flex flex-col items-center gap-4">
          <img
            src={cats[index]?.url}
            className="h-64 w-64 rounded object-cover"
          />

          <button
            onClick={nextCat}
            className="bg-white text-black px-4 py-2 rounded"
          >
            Next Cat 🐱
          </button>

          <p className="text-sm text-zinc-400">
            {index + 1} / {cats.length}
          </p>
        </div>
      )}

      <AnimatePresence>
        {stage !== "cats" && (
          <>
            {stage !== "fullscreen" && (
              <h1 className="absolute top-10 text-4xl font-extrabold z-40">
                THE ULTIMATE CAT
              </h1>
            )}

            <motion.div
              className="fixed z-30 w-[900px] aspect-video"
              initial={{ scale: 1 }}
              animate={
                stage === "bounce"
                  ? bounceAnimation
                  : stage === "fullscreen"
                  ? { scale: 3 }
                  : {}
              }
              transition={{ duration: 3 }}
              style={{
                top: "50%",
                left: "50%",
                translateX: "-50%",
                translateY: "-50%",
              }}
            >
              <iframe
                className="w-full h-full pointer-events-none"
                src="https://www.youtube.com/embed/IxX_QHay02M?autoplay=1&mute=1&controls=0&rel=0"
                allow="autoplay"
              />

              <div className="absolute inset-0 bg-black/10" />
            </motion.div>
          </>
        )}
      </AnimatePresence>
      <footer className="absolute bottom-4 text-xs text-zinc-500">
        © {new Date().getFullYear()} Steven Leonardo · Built with Next.js
      </footer>
    </div>
  );
}
