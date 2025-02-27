const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};


 export const GenerateCourseLayout_AI = model.startChat({
    generationConfig,
    history: [
      {
        role: "user",
        parts: [
          {
            text: "Generate a course tutorial on the following detail with field as Course Name, about, Duration, Category: Programming, Topic: Python, Level: Basic, Duration: 1 hours, No of Chapters: 5, in JSON format",
          },
        ],
      },
      {
        role: "model",
        parts: [
          {
            text: '```json\n{\n"course": {\n  "name": "Introduction to Python Programming",\n  "description": "This one-hour introductory course provides a foundational understanding of Python programming.  We will cover basic syntax, data types, and control flow, enabling you to write simple Python programs.",\n  "Chapters": [\n    {\n      "name": "Introduction to Python",\n      "about": "This chapter introduces the Python programming language, its history, features, and why it is a popular choice for beginners and experienced programmers alike.",\n"duration": "15 minutes"\n    },\n    {\n        "name": "Setting Up Your Python Environment",\n        "about": "This chapter guides learners through installing Python, setting up a development environment, and writing their first Python script.",\n"duration": "10 minutes"\n    },\n    {\n        "name": "Python Basics: Variables and Data Types",\n        "about": "This chapter covers fundamental concepts such as variables, data types, and basic operations in Python.",\n"duration": "15 minutes"\n    },\n    {\n        "name": "Control Flow: Conditional Statements and Loops",\n        "about": "This chapter explores decision-making in Python using if-else statements and loops, including for and while loops.",\n"duration": "10 minutes"\n    },\n    {\n        "name": "Functions and Modules",\n        "about": "This chapter introduces the concept of functions, their importance in code reusability, and how to organize code using modules.",\n"duration": "10 minutes"\n    }\n  ]\n}\n}\n```\n',
          },
        ],
      },
    ],
  });

//   const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
//   console.log(result.response.text());
