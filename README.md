# Tài liệu API Presentation AI

## Tổng quan

Tài liệu này mô tả cấu trúc dữ liệu và các endpoint API cho hệ thống Presentation AI. Hệ thống sử dụng cách tiếp cận có cấu trúc để biểu diễn nội dung presentation với các slide, phần tử và metadata.

## Cấu trúc dữ liệu cốt lõi

### 1. Đối tượng Presentation

Đối tượng presentation chính chứa metadata và cấu trúc nội dung.

```typescript
interface Presentation {
  id: string; // Định danh duy nhất của presentation
  title: string; // Tiêu đề presentation
  presentation: {
    content: {
      slides: PlateSlide[]; // Mảng các slide
    };
    outline: string[]; // Mảng các chủ đề dàn ý
    theme: string; // Định danh theme
    imageModel: string; // Mô hình tạo hình ảnh AI
    presentationStyle: string; // Giọng điệu/phong cách presentation
    language: string; // Mã ngôn ngữ (ví dụ: "en-US")
  };
}
```

### 2. Interface PlateSlide

Mỗi slide được biểu diễn như một đối tượng có cấu trúc với nội dung và thuộc tính bố cục.

```typescript
interface PlateSlide {
  id: string; // Định danh duy nhất của slide
  content: PlateNode[]; // Mảng các phần tử nội dung
  rootImage?: {
    // Hình ảnh nền tùy chọn
    query: string; // Gợi ý tạo hình ảnh
    url?: string; // URL hình ảnh đã tạo
  };
  layoutType?: "left" | "right" | "vertical"; // Hướng bố cục
  alignment?: "start" | "center" | "end"; // Căn chỉnh nội dung
  bgColor?: string; // Màu nền
  width?: "L" | "M"; // Chiều rộng slide
}
```

## Các phần tử nội dung (Các loại PlateNode)

### Phần tử văn bản

#### HeadingElement

```typescript
interface HeadingElement {
  type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: TDescendant[]; // Nội dung văn bản với định dạng
}
```

#### ParagraphElement

```typescript
interface ParagraphElement {
  type: "p";
  children: TDescendant[]; // Nội dung văn bản với định dạng
}
```

### Phần tử media

#### ImageElement

```typescript
interface ImageElement {
  type: "img";
  url: string; // URL hình ảnh
  query: string; // Gợi ý tạo hình ảnh
  children: TDescendant[]; // Thường là node văn bản rỗng
}
```

### Phần tử bố cục

#### ColumnsElement

```typescript
interface ColumnsElement {
  type: "columns"; // Sử dụng ColumnPlugin.key
  children: ColumnItemElement[]; // Các mục cột
}
```

#### ColumnItemElement

```typescript
interface ColumnItemElement {
  type: "column-item"; // Sử dụng ColumnItemPlugin.key
  children: TDescendant[]; // Nội dung trong cột
}
```

### Phần tử danh sách

#### BulletsElement

```typescript
interface BulletsElement {
  type: "bullets";
  children: BulletElement[]; // Các mục bullet point
}
```

#### BulletElement

```typescript
interface BulletElement {
  type: "bullet";
  children: TDescendant[]; // Nội dung trong bullet point
}
```

### Phần tử biểu tượng

#### IconsElement

```typescript
interface IconsElement {
  type: "icons";
  children: IconItemElement[]; // Các mục biểu tượng
}
```

#### IconItemElement

```typescript
interface IconItemElement {
  type: "icon-item";
  children: TDescendant[]; // Nội dung bao gồm biểu tượng
}
```

#### IconElement

```typescript
interface IconElement {
  type: "icon";
  query: string; // Gợi ý tạo biểu tượng
  name: string; // Tên biểu tượng (thường rỗng)
  children: TDescendant[]; // Thường là node văn bản rỗng
}
```

### Phần tử quy trình

#### CycleElement

```typescript
interface CycleElement {
  type: "cycle";
  children: CycleItemElement[]; // Các mục chu trình
}
```

#### CycleItemElement

```typescript
interface CycleItemElement {
  type: "cycle-item";
  children: TDescendant[]; // Nội dung trong bước chu trình
}
```

#### StaircaseElement

```typescript
interface StaircaseElement {
  type: "staircase";
  children: StairItemElement[]; // Các mục cầu thang
}
```

#### StairItemElement

```typescript
interface StairItemElement {
  type: "stair-item";
  children: TDescendant[]; // Nội dung trong bước cầu thang
}
```

### Phần tử biểu đồ

#### ChartElement

```typescript
interface ChartElement {
  type: "chart";
  chartType: string; // Loại biểu đồ (ví dụ: "horizontal-bar")
  data: Array<{
    // Dữ liệu biểu đồ
    label: string; // Nhãn dữ liệu
    value: number; // Giá trị dữ liệu
  }>;
  children: TDescendant[]; // Thường là node văn bản rỗng
}
```

### Phần tử trực quan hóa

#### VisualizationListElement

```typescript
interface VisualizationListElement {
  type: "visualization-list";
  visualizationType: "pyramid" | "arrow" | "timeline";
  children: VisualizationItemElement[] | TDescendant[];
}
```

#### VisualizationItemElement

```typescript
interface VisualizationItemElement {
  type: "visualization-item";
  children: TDescendant[]; // Nội dung trong mục trực quan hóa
}
```

## Định dạng văn bản (TDescendant)

Nội dung văn bản có thể bao gồm các thuộc tính định dạng khác nhau:

```typescript
interface TText {
  text: string; // Nội dung văn bản thực tế
  generating?: boolean; // Cho biết văn bản đang được tạo
  bold?: boolean; // Định dạng đậm
  italic?: boolean; // Định dạng nghiêng
  underline?: boolean; // Định dạng gạch chân
  strikethrough?: boolean; // Định dạng gạch ngang
}
```

## Các endpoint API

### 1. Tạo presentation

**POST** `/api/presentation`

Tạo một presentation mới với promt ban đầu.

**Request Body:**

```typescript
{
  title: string;
  theme?: string;
  outline?: string[];
  imageModel?: string;
  presentationStyle?: string;
  language?: string;
}
```

**Response:**

```typescript
{
  success: boolean;
  message: string;
  presentation?: {
    id: string;
    title: string;
    // ... các trường presentation khác
  };
}
```

### 2. Lấy presentation

**GET** `/api/presentation/{id}`

Lấy một presentation hoàn chỉnh theo ID.

**Response:**

```typescript
{
  success: boolean;
  presentation?: Presentation;
  message?: string;
}
```

### 3. Cập nhật presentation

**PUT** `/api/presentation/{id}/`

Cập nhật của một presentation hiện có.

**Request Body:**

```typescript
{
  success: boolean;
  presentation?: Presentation;
  message?: string;
}
```

### 4. Export presentation ra pptx

**POST** `/api/presentation/{id}/`

Trả về link pptx để người dùng tải về

**Request Body:**

```typescript
{
  success: boolean;
  url: string;
  message?: string;
}
```

## Luồng dữ liệu

1. **Tạo**: Người dùng tạo presentation với promt và metadata cơ bản
2. **Tạo nội dung**: Hệ thống tạo slide dựa trên dàn ý FE sử dụng thư viện https://platejs.org/
3. **Phân tích**: Nội dung presentation được phân tích thành các đối tượng PlateSlide có cấu trúc
4. **Lưu trữ**: presentation hoàn chỉnh được lưu trong cơ sở dữ liệu
5. **Truy xuất**: presentation có thể được truy xuất và chỉnh sửa

## Cấu trúc 1 presentation ví dụ

Hệ thống tạo presentation được phân tích thành định dạng có cấu trúc:

```typescript
const mockPresentationData = {
  id: "cmcsqfcvq0003flznwfz0clyu",
  title: "hướng dẫn cách làm bánh trưng",
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
};
```

## từ data trên có thể hiển thị ra ảnh:

![Screenshot_2](https://storage.googleapis.com/mfc-pub-bucket/lms/25-07-09/create-next-app-07-09-2025-03-21-pm-9feswbr.png)

## Tính năng chính

- **Hỗ trợ Streaming**: Nội dung được tạo và phân tích theo thời gian thực
- **Linh hoạt bố cục**: Nhiều loại bố cục (trái, phải, dọc)
- **Nội dung phong phú**: Hỗ trợ văn bản, hình ảnh, biểu đồ và trực quan hóa
- **Hệ thống theme**: Theme và styling có thể tùy chỉnh
- **Cập nhật thời gian thực**: Nội dung cập nhật khi đang được tạo
