import figlet from "figlet";

console.log("I restarted at:", Date.now());
const textASCI = (text: string) => figlet.textSync(text);

Bun.serve({
  port: 5000,

  fetch(req) {
    const url = new URL(req.url);
    if (url.pathname === "/") {
      return new Response(textASCI("H0M3"));
    }
    if (url.pathname === "/blog") {
      return new Response(textASCI("BL0G"));
    }
    return new Response(textASCI("404"));
  },
});
