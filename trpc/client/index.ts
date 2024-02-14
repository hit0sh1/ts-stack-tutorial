import { appRouter } from "@/trpc/server";
import { httpBatchLink } from "@trpc/client";

// バックエンドtRPCクライアント
export const trpc = appRouter.createCaller({
  links: [
    httpBatchLink({
      url: `{$process.env.NEXT_PUBLIC_APP_URL}/api/trpc`,
    }),
  ],
});
