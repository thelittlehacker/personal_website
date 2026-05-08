"use client";
import { motion } from "framer-motion";
export default function AnimatedGradient() { return (<motion.div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-100 via-white to-teal-100" animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }} style={{ backgroundSize: "200% 200%" }} />); }
