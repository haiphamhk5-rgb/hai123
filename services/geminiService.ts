
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getDailyMotivation = async () => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: "Hãy tạo một câu nói truyền cảm hứng ngắn gọn theo phong cách của Hải Phạm Master (quyết liệt, đầy năng lượng, tập trung vào hành động) bằng tiếng Việt cho ngày hôm nay.",
      config: {
        temperature: 0.9,
      }
    });
    return response.text || "Hành động ngay bây giờ để tạo ra tương lai bạn mong muốn!";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Hành trình vạn dặm luôn bắt đầu từ bước chân đầu tiên.";
  }
};

export const generateBioPortrait = async (): Promise<string | null> => {
  try {
    const prompt = `Create a high-quality abstract portrait image to represent a personal brand. 
    IMPORTANT: - Do NOT use any real human face. - Do NOT generate a recognizable face. 
    - The person must be faceless, shadowed, or shown from behind, or with the face abstracted using light, blur, geometry, or silhouette. 
    STYLE: Cinematic, premium, dark background, Black, deep grey, gold accents, Strong contrast lighting, Minimalist but powerful. 
    CONCEPT: A faceless human figure representing a MASTER / LEADER, Symbolizes intelligence, system thinking, AI, control, clarity. 
    Feeling: calm authority, depth, trust, strategic mind. 
    DETAILS: Suit or minimalist modern outfit, Face hidden by shadow, light beam, blur, or abstract geometric shapes. 
    Subtle AI elements: lines, grids, light patterns, data glow. Professional website hero image.`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [{ text: prompt }],
      },
      config: {
        imageConfig: {
          aspectRatio: "3:4"
        },
      },
    });

    for (const part of response.candidates[0].content.parts) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
    return null;
  } catch (error) {
    console.error("Image Generation Error:", error);
    return null;
  }
};

export const generateHeroImage = async (): Promise<string | null> => {
  try {
    const prompt = `Create a cinematic, symbolic hero image for a personal brand website.
    Subject: A lone male traveler, seen from behind, standing still on a long road. Wearing a dark, minimalist outfit. Face is NOT visible. Represents a thinker, guide, system-builder.
    Mood: Calm, powerful, contemplative. "Người Lữ Hành" vibe.
    Environment: Subtle light from horizon (sunrise/soft golden light). Abstract elements in background suggesting systems, paths, networks, structured lines (subtle). Dark background with warm highlights (black, deep gray, gold accents).
    Style: Cinematic photography, minimalist, high contrast, premium aesthetic.
    Composition: Subject slightly off-center, plenty of negative space for text overlay. Horizontal layout.`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [{ text: prompt }],
      },
      config: {
        imageConfig: {
          aspectRatio: "16:9"
        },
      },
    });

    for (const part of response.candidates[0].content.parts) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
    return null;
  } catch (error) {
    console.error("Hero Image Generation Error:", error);
    return null;
  }
};
