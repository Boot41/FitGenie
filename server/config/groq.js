import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export async function getGroqChatCompletion(userInput) {

    const userInputString = JSON.stringify(userInput, null, 2);

    const systemPrompt = ` You are a dietitian with 20 years of experience. Create a detailed and easy-to-follow diet plan for a person Details = ${userInputString} . The diet should be realistic, fulfilling all requirements for protein, carbohydrates, and fats. Focus on simple Indian meals that include greens, vegetables, and protein while considering her preferences for homemade food. Ensure that the diet is well-structured with options for each meal, categorized by breakfast, lunch, snacks, and dinner. Return the diet in a well-formatted Javascript OBJECT  without any additional commentary.

    `;


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
        model: 'llama3-8b-8192',
    });
}


