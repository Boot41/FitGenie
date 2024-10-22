// import { GoogleGenerativeAI } from "@google/generative-ai";

// const apiKey = process.env.GEMINI_API_KEY;
// const genAI = new GoogleGenerativeAI(apiKey);

// export const geminiFixDiet = async (userInput) => {
//     try {
//         const model = genAI.getGenerativeModel({ model: "gemini-pro" })

//         const prompt = `Please review the following meal plan and ensure that the total protein, carbs, and fats for each meal match the daily overview totals. If there are any discrepancies, please adjust the nutrient values for individual food items to maintain consistency.

//         Diet-  ${userInput} 
        
//         NOTE - In end just return the json with updated values of protein, carbs, and fats that can be parsed an used`;
        
//         const result = await model.generateContent(prompt)
//         const response =  result.response;
        
//         const output =  response.text();

//         console.log("GOGGLE __  ",output);
        

//         return output;
//     } catch (error) {

//         console.error("Error generating diet plan:", error);
//         return { error: "Failed to generate diet plan." };

//     }
// };