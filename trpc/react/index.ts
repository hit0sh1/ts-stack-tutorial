"use client";

import { type AppRouter } from "@/trpc/server";
import { createTRPCReact } from "@trpc/react-query";

// フロントエンドtRPCクライアント
export const trpc = createTRPCReact < AppRouter({});
