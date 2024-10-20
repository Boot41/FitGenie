import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export async function getGroqChatCompletion(userInput) {








  const systemPrompt = `You are a professional nutritionist with expertise in precision nutrition planning. Create a personalized diet plan based on the following user data:

USER PROFILE:
Height: ${userInput.height}
Weight: ${userInput.weight}
Age: ${userInput.age}
Gender: ${userInput.gender}
Activity Level: ${userInput.activityLevel}
Dietary Restrictions: ${userInput.foodRestrictions}
Goals: ${userInput.fitnessGoal}
Diet Type: ${userInput.dietType}
Health Conditions: ${userInput.healthConditions}

CALCULATION REQUIREMENTS:
1. Adjust calories based on goals:
   - Weight loss: -20% deficit
   - Maintenance: maintain TDEE
   - Muscle gain: +10% surplus
2. Calculate precise macro distributions:
   - Protein: 1.6-2.2g per kg of body weight
   - Fats: 20-35% of total calories
   - Carbs: Remaining calories

   MEAL PLAN REQUIREMENTS:
  1. Each meal MUST include:
     - Precise weight in grams
     - Exact macro breakdown (protein, carbs, fats)
     - Accurate calorie count that matches macros (P*4 + C*4 + F*9)
  2. Daily totals MUST match calculated targets ±5g
  3. Respect dietary restrictions strictly
  4. Include only common, accessible foods
  5. Provide realistic portion sizes
  6. Distribute protein evenly across meals
  7. Time meals according to activity level
  8. Account for health conditions in food choices
  
  REQUIRED JSON STRUCTURE:
  {
    "dailyOverview": {
      "calories": number,
      "macros": {
        "protein": number,
        "carbs": number,
        "fats": number
      },
      "waterIntake": number
    },
    "meals": [
      {
        "name": string (Breakfast/Lunch/Dinner/Snack),
        "time": string (e.g., "8:00 AM"),
        "calories": number,
        "items": [
          {
            "food": string,
            "portion": string (be specific with measurements),
            "calories": number,
            "protein": number,
            "carbs": number,
            "fats": number
          }
        ]
      }
    ],
    "guidelines": [
      string (5-7 specific dietary guidelines)
    ],
    "supplements": [
      {
        "name": string,
        "timing": string,
        "dosage": string,
        "note": string
      }
    ],
    "mealPrepTips": [
      string (3-4 practical meal prep tips)
    ]
  }
  
  VALIDATION RULES:
  1. Total calories from all meals should match dailyOverview.calories
  2. Protein should be 1.6-2.2g per kg of bodyweight for muscle gain, 1.2-1.6g for maintenance
  3. Each meal should have 2-4 items
  4. Include 4-6 meals/snacks per day
  5. All numerical values must be realistic and properly calculated
  6. All portions must be specific (e.g., "1 cup (240ml)" not just "1 serving")
  7. Each guideline must be actionable and specific
  8. Supplements should be basic and safe (e.g., whey protein, creatine, vitamins)
  
  Example meal item:
  {
    "food": "Greek Yogurt with Honey",
    "portion": "1 cup (245g) yogurt + 1 tbsp (21g) honey",
    "calories": 200,
    "protein": 20,
    "carbs": 25,
    "fats": 0.5
  }
  
  CRUCIAL: Return ONLY the JSON object with no additional text or explanations. The response must be valid JSON that can be parsed without modification.`


  console.log(systemPrompt);

  return groq.chat.completions.create({
    messages: [
      {
        role: 'system',
        content: systemPrompt,
      },
      {
        role: 'user',
        content: '',
      }
    ],
    temperature: 0.5,
    model: 'llama3-8b-8192',
  });
}


