import { serveTls } from "https://deno.land/std@0.140.0/http/server.ts";
import { serveFile } from "https://deno.land/std@0.140.0/http/file_server.ts";

const PORT = Deno.env.get("PORT") || 7300;
console.log(`Server will run on port: ${PORT}`);

// const PORT = 7300;
const CERT_FILE = "./certs/server.crt";
const KEY_FILE = "./certs/server.key";

const handler = async (req: Request): Promise<Response> => {
  const url = new URL(req.url);
  if (url.pathname === "/") {
    return new Response("Hello, HTTPS World!", {
      headers: { "content-type": "text/plain" },
    });
  } else {
    return await serveFile(req, url.pathname);
  }
};

const options = { port: PORT, certFile: CERT_FILE, keyFile: KEY_FILE };

console.log(`HTTPS web server running. Access it at: https://localhost:${PORT}/`);

await serveTls(handler, options);
