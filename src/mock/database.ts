// Mock database service cho dự án presentation

// Mock các loại dữ liệu
export const mockPresentations = [
  {
    id: "cmcsqfcvq0003flznwfz0clyu",
    title: "hướng dẫn cách làm bánh trưng",
    userId: "mock-user-id",
    updatedAt: new Date().toISOString(),
    isPublic: true,
    presentation: {
      content: {
        slides: [
          {
            id: "7aNnhbxnIyaYr9aWfxbnw",
            content: [
              {
                type: "h2",
                id: "wgjxiDCdsD",
                children: [{ text: "Introduction to Bánh Chưng" }],
              },
              {
                type: "bullets",
                id: "l3C0VISoXn",
                children: [
                  {
                    type: "bullet",
                    id: "blWhoyIiVn",
                    children: [
                      {
                        type: "h3",
                        id: "oKvNljQ75b",
                        children: [{ text: "Cultural Significance" }],
                      },
                      {
                        type: "p",
                        id: "9QdkUhYx1W",
                        children: [
                          {
                            text: "Bánh Chưng, a traditional Vietnamese dish, embodies the spirit of family reunions and respect for ancestors during the Lunar New Year celebrations. Its square shape symbolizes the Earth, reflecting the Vietnamese belief in harmony with nature.",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    type: "bullet",
                    id: "Jlfd0VqybF",
                    children: [
                      {
                        type: "h3",
                        id: "xUQkBL7MxI",
                        children: [{ text: "Historical Origins" }],
                      },
                      {
                        type: "p",
                        id: "DSd4I4zmyQ",
                        children: [
                          {
                            text: "The origins of Bánh Chưng date back to the sixth king of the Hùng dynasty, who created it to honor his father. This dish has evolved into a symbol of Vietnamese identity and heritage.",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
            alignment: "center",
            rootImage: {
              url: "https://xa04jy0po7.ufs.sh/f/4JNbUUlJMd6iaFPMj9YlPfbZD3zctBQ5nEFHSMAmxXpdGoTk",
              query:
                "festive Vietnamese Lunar New Year celebration with families gathered around traditional food including Bánh Chưng",
            },
            layoutType: "left",
          },
          {
            id: "6QVbdZMHNuy9v8BNP3-Sd",
            content: [
              {
                type: "h2",
                id: "QOS3Kswfvs",
                children: [{ text: "Ingredients and Preparation" }],
              },
              {
                type: "columns",
                id: "cCHvHjUix7",
                children: [
                  {
                    type: "column-item",
                    id: "Nc98wjsB17",
                    children: [
                      {
                        type: "h3",
                        id: "g81vJsPhwe",
                        children: [{ text: "Essential Ingredients" }],
                      },
                      {
                        type: "p",
                        id: "PT4eC8uIdt",
                        children: [
                          {
                            text: "Key ingredients include glutinous rice, mung beans, pork, and dong leaves. Each ingredient plays a vital role in flavor and cultural significance.",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    type: "column-item",
                    id: "BFuXekKXci",
                    children: [
                      {
                        type: "h3",
                        id: "gNZAQALT3K",
                        children: [{ text: "Preparation Process" }],
                      },
                      {
                        type: "p",
                        id: "iiYoyrhw80",
                        children: [
                          {
                            text: "Each ingredient requires careful preparation; glutinous rice must be soaked overnight, while mung beans need to be cooked until soft, ensuring a creamy fillin.",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
            alignment: "center",
            rootImage: {
              url: "https://xa04jy0po7.ufs.sh/f/4JNbUUlJMd6iQFmxNBpPNFlWIjxpeAyw4B0DMqma5dUrbozh",
              query:
                "various ingredients for making Bánh Chưng laid out on a wooden kitchen table, including rice, pork, and green leaves",
            },
            layoutType: "vertical",
          },
          {
            id: "2cmcdEZrt_wXlSP_ZS6vl",
            content: [
              {
                type: "h2",
                id: "Ac01c8ni_N",
                children: [{ text: "Step-by-Step Cooking Process" }],
              },
              {
                type: "cycle",
                id: "x5wvjfxTBJ",
                children: [
                  {
                    type: "cycle-item",
                    id: "zzqGqR5n7C",
                    children: [
                      {
                        type: "h3",
                        id: "fMyPqgz5q7",
                        children: [{ text: "Assembling the Cake" }],
                      },
                      {
                        type: "p",
                        id: "shB2F9L1xe",
                        children: [
                          {
                            text: "Layer glutinous rice, mung bean paste, and pork in a square mold, ensuring even distribution for consistent flavor.",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    type: "cycle-item",
                    id: "S2PPwzkl7_",
                    children: [
                      {
                        type: "h3",
                        id: "BKGUpsqmmy",
                        children: [{ text: "Wrapping the Cake" }],
                      },
                      {
                        type: "p",
                        id: "vYf37nyhaO",
                        children: [
                          {
                            text: "Carefully wrap the cake in dong leaves, securing it with twine to maintain its shape during cooking.",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    type: "cycle-item",
                    id: "vtz9QZ-TRm",
                    children: [
                      {
                        type: "h3",
                        id: "OdAjP_xnhr",
                        children: [{ text: "Cooking the Cake" }],
                      },
                      {
                        type: "p",
                        id: "8N-rIiUW2v",
                        children: [
                          {
                            text: "Boil the wrapped cakes for about 8-10 hours, keeping an eye on water levels to prevent burning.",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
            alignment: "center",
            rootImage: {
              url: "https://xa04jy0po7.ufs.sh/f/4JNbUUlJMd6iRJ5UF0wC6DNwkG5IREjgJW8cHeyTpFia2PhM",
              query:
                "step-by-step images of making Bánh Chưng, including wrapping and boiling process in a traditional kitchen",
            },
            layoutType: "right",
          },
          {
            id: "hFrJ_CH_XzZ-Ba5_a4fUa",
            content: [
              {
                type: "h2",
                id: "k5Y3HbaVWk",
                children: [{ text: "Serving and Enjoying Bánh Chưng" }],
              },
              {
                type: "bullets",
                id: "s5R60Swm7a",
                children: [
                  {
                    type: "bullet",
                    id: "fC3-SLcbTh",
                    children: [
                      {
                        type: "h3",
                        id: "Iyd9y_X4bi",
                        children: [{ text: "Traditional Serving" }],
                      },
                      {
                        type: "p",
                        id: "iWybq11oIW",
                        children: [
                          {
                            text: "During Tet, Bánh Chưng is often sliced and served with pickled vegetables, symbolizing prosperity and good luck.",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    type: "bullet",
                    id: "TedevR40Eq",
                    children: [
                      {
                        type: "h3",
                        id: "mO14kLoghe",
                        children: [{ text: "Cultural Significance" }],
                      },
                      {
                        type: "p",
                        id: "pBd8eCU0SP",
                        children: [
                          {
                            text: "Sharing Bánh Chưng among family and friends fosters connection and reinforces cultural traditions.",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
            alignment: "center",
            rootImage: {
              url: "https://xa04jy0po7.ufs.sh/f/4JNbUUlJMd6i0xoMf5j6af97ex5LySG4AdJKgn1rOhMBDsZI",
              query:
                "beautifully arranged slices of Bánh Chưng on a traditional Vietnamese table with side dishes and festive decorations",
            },
            layoutType: "vertical",
          },
          {
            id: "7aNnhbxnIyaYr9aWfxbnw",
            content: [
              {
                type: "h2",
                id: "hPls0v98Rd",
                children: [{ text: "Conclusion and Cultural Reflection" }],
              },
              {
                type: "bullets",
                id: "skDGzkkKTh",
                children: [
                  {
                    type: "bullet",
                    id: "KeGrHZ3K_e",
                    children: [
                      {
                        type: "h3",
                        id: "2k2-7U3ZWf",
                        children: [{ text: "Heritage Connection" }],
                      },
                      {
                        type: "p",
                        id: "wQkcRO-mpa",
                        children: [
                          {
                            text: "Making Bánh Chưng is not just about cooking; it's a journey into Vietnamese culture and heritage.",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    type: "bullet",
                    id: "CD2cuAPHkA",
                    children: [
                      {
                        type: "h3",
                        id: "RbvUsWbOYn",
                        children: [{ text: "Encouragement to Engage" }],
                      },
                      {
                        type: "p",
                        id: "GFcWu3POKJ",
                        children: [
                          {
                            text: "We invite you to try making Bánh Chưng and share your experiences—how does it connect you to your roots?",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
            alignment: "center",
            rootImage: {
              url: "https://xa04jy0po7.ufs.sh/f/4JNbUUlJMd6i9QwgG3m4XVmDhkciyZ3LnrOBdKREbetgJNlQ",
              query:
                "a family cooking together, making Bánh Chưng in a cozy kitchen, showcasing the bond and cultural exchange",
            },
            layoutType: "left",
          },
        ],
      },
      outline: [
        "# Introduction to Bánh Chưng\n- Overview of the significance of Bánh Chưng in Vietnamese culture and tradition.\n- Brief history and origins of the dish, particularly in relation to the Lunar New Year.\n- Importance of the ingredients used in creating Bánh Chưng.",
        "# Ingredients and Preparation\n- List of essential ingredients required for making Bánh Chưng.\n- Explanation of the preparation process for each ingredient.\n- Tips on sourcing authentic ingredients for the best results.",
        "# Step-by-Step Cooking Process\n- Detailed steps on how to assemble and wrap Bánh Chưng.\n- Guidelines for cooking and boiling the wrapped cakes.\n- Suggestions for timing and monitoring the cooking process for optimal results.",
        "# Serving and Enjoying Bánh Chưng\n- Traditional ways to serve Bánh Chưng during celebrations.\n- Pairing suggestions with complementary dishes or condiments.\n- Cultural significance of sharing Bánh Chưng with family and friends.",
        "# Conclusion and Cultural Reflection\n- Recap of the importance of Bánh Chưng in Vietnamese heritage.\n- Encouragement to try making Bánh Chưng as a way to connect with culture.\n- Invitation for audience interaction, sharing their experiences or questions about the",
      ],
      theme: "mystique",
      imageModel: "black-forest-labs/FLUX.1-schnell-Free",
      presentationStyle: "professional",
      language: "en-US",
    },
  },
];

export const mockFavorites = [
  { documentId: "1", userId: "mock-user-id" },
];

export const mockThemes = [
  { id: "theme-1", userId: "mock-user-id", name: "Theme 1" },
];

export const mockGeneratedImages = [
  { id: "img-1", url: "https://via.placeholder.com/300", prompt: "test", userId: "mock-user-id" },
];

// Mock các hàm thao tác dữ liệu
export const db = {
  baseDocument: {
    findMany: async () => mockPresentations,
    findFirst: async () => mockPresentations[0] ?? null,
    create: async (data: { data: Record<string, unknown> }) => ({ 
      ...data.data, 
      id: Date.now().toString(), 
      presentation: data.data.presentation 
    }),
    update: async (data: { data: Record<string, unknown>; where: { id: string } }) => ({ 
      ...data.data, 
      id: data.where.id, 
      presentation: data.data.presentation 
    }),
    deleteMany: async () => ({ count: 1 }),
    count: async () => mockPresentations.length,
  },
  favoriteDocument: {
    findFirst: async () => mockFavorites[0] ?? null,
    create: async (data: { data: Record<string, unknown> }) => data.data,
    deleteMany: async () => ({ count: 1 }),
  },
  generatedImage: {
    create: async (data: { data: Record<string, unknown> }) => ({ 
      ...data.data, 
      id: Date.now().toString() 
    }),
  },
  theme: {
    findFirst: async () => mockThemes[0] ?? null,
    create: async (data: { data: Record<string, unknown> }) => ({ 
      ...data.data, 
      id: Date.now().toString() 
    }),
    update: async (data: { data: Record<string, unknown>; where: { id: string } }) => ({ 
      ...data.data, 
      id: data.where.id 
    }),
    delete: async (data: { where: { id: string } }) => ({ id: data.where.id }),
  },
}; 