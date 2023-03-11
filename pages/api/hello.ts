// pages/api/hello.js
import type { NextApiRequest, NextApiResponse } from "next";
import { createRouter, expressWrapper } from "next-connect";
import cors from "cors";

// Default Req and Res are IncomingMessage and ServerResponse
// You may want to pass in NextApiRequest and NextApiResponse
const router = createRouter<NextApiRequest, NextApiResponse>();

const getDurationInMilliseconds = (start: [number, number]) => {
  console.log(start);
  const NS_PER_SEC = 1e9;
  const NS_TO_MS = 1e6;
  const diff = process.hrtime(start);

  return (diff[0] * NS_PER_SEC + diff[1]) / NS_TO_MS;
};

router
  .use(expressWrapper(cors())) // express middleware are supported if you wrap it with expressWrapper
  .use((req, res, next) => {
    console.log(`${req.method} ${req.url} [STARTED]`);
    const start = process.hrtime();

    res.on("finish", () => {
      const durationInMilliseconds = getDurationInMilliseconds(start);
      console.log(
        `${req.method} ${
          req.url
        } [FINISHED] ${durationInMilliseconds.toLocaleString()} ms`
      );
    });

    res.on("close", () => {
      const durationInMilliseconds = getDurationInMilliseconds(start);
      console.log(
        `${req.method} ${
          req.url
        }  [CLOSED] ${durationInMilliseconds.toLocaleString()} ms`
      );
    });

    next();
  })
  .get((req, res) => {
    fetch("http://localhost:4000/template")
      .then((response) => response.json())
      .then((data) => res.send(data));
  });
// create a handler from router with custom
// onError and onNoMatch
export default router.handler({
  onError: (err, req, res) => {
    if (err instanceof Error) {
      // ✅ TypeScript knows err is Error
      console.log(err.message);
      console.error(err.stack);
    } else {
      console.log("Unexpected error", err);
    }

    res.status(500).end("Something broke!");
  },
  onNoMatch: (req, res) => {
    res.status(404).end("Page is not found");
  }
});
