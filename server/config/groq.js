import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export async function groqDietGenerator(userInput) {

  const userData = `USER PROFILE:
  Height: ${userInput.height}
  Weight: ${userInput.weight}
  Age: ${userInput.age}
  Gender: ${userInput.gender}
  Activity Level: ${userInput.activityLevel}
  Dietary Restrictions: ${userInput.foodRestrictions}
  Goals: ${userInput.fitnessGoal}
  Diet Type: ${userInput.dietType}
  Health Conditions: ${userInput.healthConditions}`

  const systemPrompt = `You are a professional nutritionist with expertise in precision nutrition planning. Create a personalized diet plan based on the following user data and focus more on indian food:
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
  1. Total calories from all meals should match dailyOverview calories
  2. Protein should be 1.6-2.2g per kg of bodyweight for muscle gain, 1.2-1.6g for maintenance
  3. Each meal should have 2-4 items
  4. Include 4-6 meals/snacks per day
  5. All numerical values must be realistic and properly calculated
  6. All portions must be specific (e.g., "1 cup (240ml)" not just "1 serving")
  7. Each guideline must be actionable and specific
  8. Supplements should be basic and safe (e.g., whey protein, creatine, vitamins)
  
  CRUCIAL: Return ONLY the JSON object with no additional text or explanations. The response must be valid JSON that can be parsed without modification.`

  return groq.chat.completions.create({
    messages: [
      {
        role: 'system',
        content: systemPrompt,
      },
      {
        role: 'user',
        content: userData,
      }
    ],
    temperature: 0.5,
    "max_tokens": 8192,
    model: 'llama3-8b-8192',
    "response_format": {
      "type": "json_object"
    },
    "stop": null
  });

}


export async function groqWorkoutGenerator(userInput) {

  const userData = `USER PROFILE:
  Preferred Training Style: ${userInput.workoutType}
  Available Time: ${userInput.workoutDuration}
  Weekly Frequency: ${userInput.workoutFrequency}
  Preferred Time of workout: ${userInput.workoutTimePreference}
  Age: ${userInput.age}
  Gender: ${userInput.gender}
  Height: ${userInput.height}
  Weight: ${userInput.weight}
  Injuries/Limitations: ${userInput.injuries}
  Fitness Goals: ${userInput.fitnessGoals}`

  const systemPrompt = `You are a certified fitness trainer with expertise in exercise programming and strength & conditioning. Create a personalized workout plan based on the following user data:

  VALIDATION RULES:
  1. Always generate works for the number of days user has asked
  2. Progressive overload must be clearly defined
  3. Alternative exercises must be provided for each movement
  4. Form cues must be specific and actionable
  5. RPE values must be appropriate for experience level
  6. If the time is 
  - 30-Minute Workout
    Warm-Up: 5 minutes
    Main Workout: 20 minutes
    Number of Exercises: 2-4 exercises
  - 60-Minute Workout
    Warm-Up: 5-10 minutes
    Main Workout: 45-50 minutes
    Number of Exercises: 6-7 exercises
  - 90-Minute Workout
    Warm-Up: 10 minutes
    Main Workout: 70-75 minutes
    Number of Exercises: 8-10 exercises
  
  Example exercise entry:
  {
  "programOverview": {
    "primaryFocus": "string",
    "sessionsPerWeek": "number",
    "totalDuration": "number", // in minutes
    "intensityLevel": "string",
    "weeklyFrequency": "number"
  },
  "workoutSessions": [
    {
      "day": "string",
      "focus": "string",
      "duration": "number", // in minutes
      "warmup": {
        "duration": "number", // in minutes
        "exercises": [
          {
            "name": "string",
            "sets": "number",
            "reps": "string"
          }
        ]
      },
      "mainWorkout": [
        {
          "exerciseName": "string",
          "sets": "number",
          "reps": "string",
          "rpe": "string",
          "rest": "string",
          "tempoNotes": "string",
          "formCues": [
            "string"
          ],
          "alternatives": [
            "string"
          ]
        }
      ],
      "cooldown": {
        "duration": "number", // in minutes
        "exercises": [
          {
            "name": "string",
            "duration": "string"
          }
        ]
      }
    }
  ]
}

  
  CRUCIAL: Return ONLY the JSON object with no additional text or explanations. The response must be valid JSON that can be parsed without modification.`

  return groq.chat.completions.create({
    messages: [
      {
        role: 'system',
        content: systemPrompt,
      },
      {
        role: 'user',
        content: userData,
      }
    ],
    temperature: 0.5,
    "max_tokens": 8192,
    model: 'llama3-8b-8192',
    "response_format": {
      "type": "json_object"
    },
    "stop": null
  });

}