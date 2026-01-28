let value = 0;
let interval: number | undefined;

self.onmessage = (e: any) => {
    if (e.data === "start") {
        if (interval) return;

        interval = setInterval(() => {
            value++;
            self.postMessage(value);
        }, 1000);
    }

    if (e.data === "stop") {
        if (interval) {
            clearInterval(interval);
            interval = undefined;
        }
    }

    if (e.data === "reset") {
        value = 0;
        self.postMessage(value);
    }
};
