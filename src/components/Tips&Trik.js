import React from 'react';
import '../styles/Tips.css'; 
const TipsTrik= () => {
  const tips = [
    {
      title: "1. Learning English Vocabulary",
      emoji: "📖",
      background: "#FFD700",
      description:
        "The first way you can do to learn English is to learn English vocabulary. This is because English vocabulary has an important role in every sentence, if you do not know English vocabulary then you will have difficulty understanding the meaning of the sentences. Various ways to learn vocabulary: reading books, listening to podcasts, watching movies, or checking EF Blog. Don't forget to write down the vocabulary in a notebook!",
    },
    {
      title: "2. Listen to English Podcasts",
      emoji: "🎧",
      background: "#90EE90",
      description:
        "By listening to podcasts you can practice your listening skills in English. Your ears will get used to hearing English if you keep practicing. You can also find out how to pronounce each word and get new vocabulary. Don't forget to write down the new vocabulary and learn its meaning!",
    },
    {
      title: "3. Reading English Books",
      emoji: "📚",
      background: "#ADD8E6",
      description:
        "By reading English books you can practice your reading skills. You'll discover lots of new vocabulary and gain new insights. Additionally, you can learn grammar and get used to seeing English sentences, which will make them less intimidating.",
    },
    {
      title: "4. Writing Sentences in English",
      emoji: "✍️",
      background: "#FFB6C1",
      description:
        "Use the vocabulary you've learned to write simple sentences. For example, if you know the words 'read' and 'book', you can write 'I read a book'. Start small and grow as your vocabulary expands.",
    },
    {
      title: "5. Start Speaking Using English",
      emoji: "🗣️",
      background: "#FFA07A",
      description:
        "Practice your speaking skills by talking to yourself in front of a mirror. If you're confident, invite others to converse in English. Don't be shy; speaking regularly will improve your skills.",
    },
  ];

  return (
    <div>
      <h1>Ways to Learn English for Beginners</h1>
      {tips.map((tip, index) => (
        <div
          key={index}
          style={{
            backgroundColor: tip.background,
            padding: '20px',
            borderRadius: '10px',
            marginBottom: '20px',
          }}
        >
          <h2>
            {tip.emoji} {tip.title}
          </h2>
          <p>{tip.description}</p>
        </div>
      ))}
      <footer>
        <p>
          Join JOUEnglish Free Demo Class for guided lessons with professional teachers! 🚀
        </p>
      </footer>
    </div>
  );
};

export default TipsTrik;
