"use server";
import "server-only";

import { auth, db, type PresentationDocument } from "@/mock";

const ITEMS_PER_PAGE = 10;

export async function fetchPresentations(page = 0) {
  const session = await auth();
  const userId = session?.user.id;

  if (!userId) {
    return {
      items: [],
      hasMore: false,
    };
  }

  const items = await db.baseDocument.findMany();

  const hasMore = items.length === ITEMS_PER_PAGE;

  return {
    items,
    hasMore,
  };
}

export async function fetchPublicPresentations(page = 0) {
  const items = await db.baseDocument.findMany();
  const total = items.length;

  const hasMore = false;

  return {
    items,
    hasMore,
  };
}

export async function fetchUserPresentations(userId: string, page = 0) {
  const session = await auth();
  const currentUserId = session?.user.id;

  const items = await db.baseDocument.findMany();
  const total = items.length;

  const hasMore = false;

  return {
    items,
    hasMore,
  };
}
