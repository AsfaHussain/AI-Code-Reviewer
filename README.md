
# ⚡ AI Code Reviewer

An intelligent, lightweight, and interactive code reviewer powered by **Gemini 2.0 Flash**. This web-based tool allows you to write or paste code in various programming languages and receive instant improvement suggestions and reviews using AI.

## 🚀 Features

- 🧠 AI-powered code reviews using Gemini 2.0 Flash
- 🌐 Support for multiple languages: `Java`, `C`, `C++`, `Rust`, `Go`, `HTML`, and `CSS`
- ✨ Syntax highlighting using PrismJS
- 📝 Real-time feedback and suggestions
- 🌙 Dark theme for a pleasant coding experience
- 🔄 Editable and readable output with Markdown formatting


## 🧩 Tech Stack

- React
- PrismJS
- React Simple Code Editor
- Gemini Flash API (via Google Generative AI SDK)
- Axios
- React Markdown + Rehype Highlight

## 🛠 Setup Instructions

1. **Clone the repository**
   ```
   git clone https://github.com/yourusername/ai-code-reviewer.git
   cd ai-code-reviewer
````

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Create a `.env` file** with your Gemini API key:

   ```env
   VITE_GEMINI_API_KEY=your_api_key_here
   ```

4. **Run the development server**

   ```bash
   npm run dev
   ```

5. **Build for production**

   ```bash
   npm run build
   ```



## 💡 How It Works

* User selects or writes code.
* AI is prompted with structured system instructions per language.
* Gemini Flash API processes the input and returns reviews.
* Output is rendered using Markdown with syntax highlighting.

## 📄 License

This project is licensed under the MIT License.


