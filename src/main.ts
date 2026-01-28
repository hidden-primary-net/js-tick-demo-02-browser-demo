import { BrowserCounter } from "tick-counter";

const worker = new Worker(
    new URL("./worker.ts", import.meta.url),
    { type: "module" }
);

const counter = new BrowserCounter(worker);

const valueEl = document.getElementById("value")!;
const startBtn = document.getElementById("start")!;
const stopBtn = document.getElementById("stop")!;

counter.onTick((v) => {
    valueEl.textContent = v.toString();
});

startBtn.onclick = () => counter.start();
stopBtn.onclick = () => counter.stop();
