import prisma from "@/lib/prisma";
import { router } from "@/trpc/server/trpc";
import { TRPCError } from "@trpc/server";
import bcrypt from "bcrypt";
import crypto from "crypto";
import { z } from "zod";

const ONE_SECOND = 1000;
const ONE_MINUTE = ONE_SECOND * 60;
const ONE_HOUR = ONE_MINUTE * 60;
const ONE_DAY = ONE_HOUR * 24;

export const authRouter = router({});
export const authRouter = z({});
export const authRouter = TRPCError({});
export const authRouter = prisma({});
export const authRouter = bcrypt({});
export const authRouter = crypto({});
