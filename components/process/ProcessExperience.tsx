"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const COLORS = ["#7C98FF", "#A98BFF", "#FF91D4", "#65DDB5", "#FFD66B", "#FF8B68"];
const STAGES = [
  { number: "01", title: "UNDERSTAND", copy: "We figure out what actually needs solving." },
  { number: "02", title: "SHAPE", copy: "We turn ambiguity into a clear product direction." },
  { number: "03", title: "DESIGN", copy: "We give the idea an experience people understand." },
  { number: "04", title: "BUILD", copy: "We turn the system into reliable software." },
  { number: "05", title: "RELEASE", copy: "We put the product into the real world." },
];

type Point = { x: number; y: number };
type Particle = Point & { size: number; alpha: number; color: string; velocity: number };

function seededRandom(seed: number) {
  const value = Math.sin(seed * 12.9898) * 43758.5453;
  return value - Math.floor(value);
}

function makeParticles(count: number): Particle[] {
  return Array.from({ length: count }, (_, index) => ({
    x: seededRandom(index + 1),
    y: seededRandom(index + 101),
    size: 1.2 + seededRandom(index + 201) * 2.4,
    alpha: 0.35 + seededRandom(index + 301) * 0.5,
    color: COLORS[index % COLORS.length],
    velocity: 0.2 + seededRandom(index + 401) * 0.8,
  }));
}

function drawProduct(ctx: CanvasRenderingContext2D, width: number, height: number, amount: number) {
  const left = width * 0.13;
  const top = height * 0.16;
  const productWidth = width * 0.74;
  const productHeight = height * 0.67;
  ctx.save();
  ctx.globalAlpha = amount;
  ctx.strokeStyle = "rgba(17,17,17,.22)";
  ctx.lineWidth = 1;
  ctx.strokeRect(left, top, productWidth, productHeight);
  ctx.beginPath();
  ctx.moveTo(left, top + 34);
  ctx.lineTo(left + productWidth, top + 34);
  ctx.stroke();
  ctx.fillStyle = "#111111";
  ctx.font = "600 10px ui-monospace, monospace";
  ctx.fillText("SOLUBLE / PRODUCT", left + 18, top + 22);
  ctx.fillStyle = "#7C98FF";
  ctx.fillRect(left + productWidth * 0.12, top + 84, productWidth * 0.46, 12);
  ctx.fillStyle = "#111111";
  ctx.font = "700 25px Manrope, sans-serif";
  ctx.fillText("Make the complex", left + productWidth * 0.12, top + 130);
  ctx.fillText("feel simple.", left + productWidth * 0.12, top + 160);
  ctx.fillStyle = "#65DDB5";
  ctx.fillRect(left + productWidth * 0.12, top + 190, productWidth * 0.22, 44);
  ctx.fillStyle = "#FF91D4";
  ctx.fillRect(left + productWidth * 0.39, top + 190, productWidth * 0.22, 44);
  ctx.fillStyle = "#A98BFF";
  ctx.fillRect(left + productWidth * 0.66, top + 190, productWidth * 0.22, 44);
  ctx.restore();
}

export default function ProcessExperience() {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const progressRef = useRef(0);
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const section = sectionRef.current;
    const canvas = canvasRef.current;
    const stage = stageRef.current;
    if (!section || !canvas || !stage) return;

    const context = canvas.getContext("2d");
    if (!context) return;
    const particles = makeParticles(220);
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const render = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      const width = rect.width;
      const height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      context.clearRect(0, 0, width, height);
      const progress = progressRef.current;
      const stageIndex = Math.min(4, Math.floor(progress * 5));
      const local = (progress * 5) % 1;
      const easing = local * local * (3 - 2 * local);
      const points = particles.map((particle, index) => {
        const drift = reducedMotion ? 0 : Math.sin(performance.now() / 2800 + index) * 0.008 * particle.velocity;
        const chaos = { x: particle.x * width, y: particle.y * height };
        const cluster = {
          x: (0.25 + (index % 5) * 0.12 + Math.sin(index) * 0.025) * width,
          y: (0.27 + Math.floor(index / 5 % 5) * 0.12 + Math.cos(index * 0.7) * 0.03) * height,
        };
        const structure = {
          x: (0.2 + (index % 8) * 0.085) * width,
          y: (0.2 + Math.floor(index / 8 % 7) * 0.1) * height,
        };
        const design = {
          x: (0.16 + (index % 6) * 0.135) * width,
          y: (0.2 + Math.floor(index / 6 % 5) * 0.14) * height,
        };
        const build = {
          x: (0.2 + (index % 7) * 0.1) * width,
          y: (0.22 + Math.floor(index / 7 % 5) * 0.13) * height,
        };
        const release = {
          x: (0.13 + (index % 9) * 0.09) * width,
          y: (0.16 + Math.floor(index / 9 % 7) * 0.11) * height,
        };
        const destinations = [cluster, structure, design, build, release];
        const from = stageIndex === 0 ? chaos : destinations[stageIndex - 1];
        const to = destinations[stageIndex];
        return {
          x: from.x + (to.x - from.x) * easing,
          y: from.y + (to.y - from.y) * easing + drift * height,
        };
      });

      if (progress > 0.18) {
        context.strokeStyle = `rgba(17,17,17,${Math.min(0.18, (progress - 0.18) * 0.35)})`;
        context.lineWidth = 1;
        for (let index = 0; index < points.length - 1; index += 7) {
          context.beginPath();
          context.moveTo(points[index].x, points[index].y);
          context.quadraticCurveTo(width * 0.5, height * 0.5, points[index + 1].x, points[index + 1].y);
          context.stroke();
        }
      }

      points.forEach((point, index) => {
        const particle = particles[index];
        const radius = particle.size + Math.min(4, progress * 4) * (index % 5 === 0 ? 1 : 0);
        context.globalAlpha = particle.alpha;
        context.fillStyle = particle.color;
        context.beginPath();
        context.arc(point.x, point.y, radius, 0, Math.PI * 2);
        context.fill();
      });
      drawProduct(context, width, height, Math.max(0, (progress - 0.78) / 0.22));
      context.globalAlpha = 1;
      requestAnimationFrame(render);
    };
    render();

    const updateStage = (progress: number) => {
      progressRef.current = progress;
      const index = Math.min(4, Math.floor(progress * 5));
      const stageProgress = (progress * 5) % 1;
      stage?.style.setProperty("--stage-progress", String(stageProgress));
      stage?.querySelectorAll<HTMLElement>("[data-stage]").forEach((element, elementIndex) => {
        element.style.opacity = elementIndex === index ? "1" : "0";
        element.style.transform = elementIndex === index ? "translateY(0)" : "translateY(8px)";
      });
    };

    const trigger = ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: "+=5000",
      pin: true,
      scrub: true,
      onUpdate: (self) => updateStage(self.progress),
    });
    updateStage(0);
    const onResize = () => trigger.refresh();
    window.addEventListener("resize", onResize);
    return () => {
      trigger.kill();
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative h-[100svh] min-h-[620px] overflow-hidden border-y border-[#111111]/10">
      <div className="container-soluble flex h-full items-center">
        <div className="grid w-full gap-10 md:grid-cols-[0.4fr_0.6fr] md:items-center">
          <div ref={stageRef} className="relative z-10 min-h-44">
            {STAGES.map((stage) => (
              <div key={stage.number} data-stage className="absolute left-0 top-0 max-w-xs transition-all duration-300">
                <p className="font-mono text-[10px] tracking-[0.2em] text-[#111111]/45">{stage.number}</p>
                <h2 className="mt-3 text-5xl font-bold tracking-[-0.08em] md:text-7xl">{stage.title}</h2>
                <p className="mt-5 max-w-[220px] text-sm leading-6">{stage.copy}</p>
              </div>
            ))}
          </div>
          <div className="relative h-[58vh] min-h-[380px] w-full">
            <canvas ref={canvasRef} className="h-full w-full" aria-label="Particles transforming from an idea into a digital product" />
            <p className="absolute bottom-0 left-0 font-mono text-[10px] uppercase tracking-[0.18em] text-[#111111]/45">
              One system / many states
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
