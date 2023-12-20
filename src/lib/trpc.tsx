import { createTRPCReact, httpBatchLink } from "@trpc/react-query";
import type { AppRouter } from "@/server/trpc";
import { createTRPCNext } from "@trpc/next";

export const trpc = createTRPCReact<AppRouter>();

export const api = createTRPCNext<AppRouter>({
  config() {
    return {
      links: [
        httpBatchLink({
          url: "http://localhost:3000/api/trpc",
        }),
      ],
    };
  },
  ssr: false,
});
