"use server";

import { auth, db } from "@/mock";
import { z } from "zod";

const themeSchema = z.object({
  name: z.string().min(1, "Theme name is required"),
  primaryColor: z.string().min(1, "Primary color is required"),
  secondaryColor: z.string().min(1, "Secondary color is required"),
  backgroundColor: z.string().min(1, "Background color is required"),
  textColor: z.string().min(1, "Text color is required"),
  fontFamily: z.string().min(1, "Font family is required"),
  logoUrl: z.string().optional(),
});

export async function createTheme(themeData: z.infer<typeof themeSchema>) {
  try {
    const session = await auth();
    if (!session?.user) {
      return { success: false, message: "Not authenticated" };
    }

    const validatedData = themeSchema.parse(themeData);

    const theme = await db.theme.create({
      data: {
        ...validatedData,
        userId: session.user.id,
      },
    });

    return { success: true, theme };
  } catch (error) {
    console.error("Error creating theme:", error);
    return { success: false, message: "Failed to create theme" };
  }
}

export async function updateTheme(themeId: string, themeData: Partial<z.infer<typeof themeSchema>>) {
  try {
    const session = await auth();
    if (!session?.user) {
      return { success: false, message: "Not authenticated" };
    }

    const existingTheme = await db.theme.findFirst();
    if (!existingTheme) {
      return { success: false, message: "Theme not found" };
    }

    if (existingTheme.userId !== session.user.id) {
      return { success: false, message: "Not authorized to update this theme" };
    }

    const validatedData = themeSchema.partial().parse(themeData);

    const theme = await db.theme.update({
      where: { id: themeId },
      data: validatedData,
    });

    return { success: true, theme };
  } catch (error) {
    console.error("Error updating theme:", error);
    return { success: false, message: "Failed to update theme" };
  }
}

export async function deleteTheme(themeId: string) {
  try {
    const session = await auth();
    if (!session?.user) {
      return { success: false, message: "Not authenticated" };
    }

    const existingTheme = await db.theme.findFirst();
    if (!existingTheme) {
      return { success: false, message: "Theme not found" };
    }

    if (existingTheme.userId !== session.user.id) {
      return { success: false, message: "Not authorized to delete this theme" };
    }

    // Delete logo if exists (mock - no actual deletion)
    console.log("Mock: Would delete logo if exists");

    await db.theme.delete({ where: { id: themeId } });

    return { success: true };
  } catch (error) {
    console.error("Error deleting theme:", error);
    return { success: false, message: "Failed to delete theme" };
  }
}

export async function getUserThemes() {
  try {
    const session = await auth();
    if (!session?.user) {
      return { success: false, message: "Not authenticated" };
    }

    const themes = await db.theme.findFirst();
    return { success: true, themes: themes ? [themes] : [] };
  } catch (error) {
    console.error("Error fetching themes:", error);
    return { success: false, message: "Failed to fetch themes" };
  }
}
