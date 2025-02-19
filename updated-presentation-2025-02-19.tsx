import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Cpu, Calendar, Wrench, Users, Lightbulb, BookOpen, BarChart, Sparkles } from 'lucide-react';

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Välkommen till CrewAI Hackathon! 🤖",
      content: (
        <div className="flex flex-col items-center justify-center space-y-8 animate-fade-in">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-75 blur-lg"></div>
            <Cpu size={96} className="relative text-white transform hover:scale-110 transition-transform duration-200" />
          </div>
          <p className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Skapa ditt eget AI-studieteam!
          </p>
          <div className="text-lg text-gray-600 text-center">
            Hackaton-crew:<br/>
            <span className="font-semibold">Lotta • Christian • Rafael • Sunny</span>
          </div>
          <Sparkles className="text-yellow-400 animate-pulse" size={32} />
        </div>
      )
    },
    {
      title: "Dagens Schema 📅",
      content: (
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <Calendar className="text-blue-500 animate-bounce" size={48} />
            <ul className="space-y-4 text-lg">
              {[
                ["09:00-09:30", "Kickoff", "bg-blue-100"],
                ["09:30-10:00", "Installation & gruppplanering", "bg-purple-100"],
                ["10:00-15:00", "HACKA PÅ!", "bg-green-100"],
                ["15:00-16:00", "Presentationer", "bg-yellow-100"],
                ["16:30", "Afterwork på Hirschen/Älgen! 🎉", "bg-pink-100"]
              ].map(([time, activity, bgColor], index) => (
                <li key={index} className={`${bgColor} p-3 rounded-lg shadow-sm transform hover:scale-105 transition-transform duration-200`}>
                  <span className="font-bold">{time}:</span> {activity}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Vad är en AI-agent? 🤖",
      content: (
        <div className="space-y-8">
          <p className="text-2xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            En AI-agent är ett program som:
          </p>
          <div className="grid grid-cols-2 gap-6">
            {[
              ["🎯", "Har ett specifikt syfte och mål", "bg-blue-100"],
              ["🧠", "Kan fatta egna beslut", "bg-purple-100"],
              ["🔄", "Interagerar med sin omgivning", "bg-green-100"],
              ["📝", "Följer givna instruktioner", "bg-yellow-100"]
            ].map(([emoji, text, bgColor], index) => (
              <div key={index} className={`${bgColor} p-6 rounded-xl shadow-md transform hover:scale-105 transition-transform duration-200`}>
                <div className="text-4xl mb-2">{emoji}</div>
                <p className="text-lg">{text}</p>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      title: "Vad är INTE en AI-agent? 🚫",
      content: (
        <div className="space-y-8">
          <div className="grid grid-cols-1 gap-4">
            {[
              ["❌", "En magisk lösning som fixar allt", "bg-red-50"],
              ["❌", "Ett fullständigt autonomt system", "bg-orange-50"],
              ["❌", "En ersättning för mänskligt tänkande", "bg-yellow-50"],
              ["❌", "Ett system som kan allt", "bg-pink-50"]
            ].map(([emoji, text, bgColor], index) => (
              <div key={index} 
                   className={`${bgColor} p-4 rounded-xl shadow-md transform hover:translate-x-2 transition-all duration-200 flex items-center space-x-4`}>
                <span className="text-2xl">{emoji}</span>
                <span className="text-lg font-medium">{text}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 italic mt-4">
            AI-agenter är verktyg som hjälper oss - inte ersätter oss!
          </p>
        </div>
      )
    },
    {
      title: "Vad är CrewAI?",
      content: (
        <div className="space-y-8">
          <p className="text-2xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Tänk dig ett team av AI-assistenter:
          </p>
          <div className="grid grid-cols-2 gap-6">
            {[
              ["🤖", "Varje agent har en specifik roll", "bg-blue-100"],
              ["🤝", "De samarbetar för att hjälpa DIG", "bg-purple-100"],
              ["📚", "De kan researcha & organisera", "bg-green-100"],
              ["👑", "DU bestämmer vad de ska göra!", "bg-yellow-100"]
            ].map(([emoji, text, bgColor], index) => (
              <div key={index} className={`${bgColor} p-6 rounded-xl shadow-md transform hover:scale-105 transition-transform duration-200`}>
                <div className="text-4xl mb-2">{emoji}</div>
                <p className="text-lg">{text}</p>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      title: "Utmaningen 🎯",
      content: (
        <div className="space-y-8">
          <p className="text-2xl font-bold text-center">Skapa AI-agenter som:</p>
          <div className="grid grid-cols-2 gap-6">
            {[
              ["📚", "Förenklar dina studier", "bg-blue-50"],
              ["⏰", "Sparar tid", "bg-purple-50"],
              ["🧠", "Hjälper dig lära bättre", "bg-green-50"],
              ["🤝", "Samarbetar som ett team", "bg-yellow-50"]
            ].map(([emoji, text, bgColor], index) => (
              <div key={index} 
                   className={`${bgColor} p-6 rounded-xl shadow-md transform hover:scale-105 transition-all duration-200 border-2 border-transparent hover:border-blue-300`}>
                <div className="text-4xl mb-4">{emoji}</div>
                <p className="text-lg font-medium">{text}</p>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      title: "Tekniska Krav 🛠️",
      content: (
        <div className="space-y-8">
          <div className="flex justify-center">
            <Wrench size={48} className="text-blue-500 animate-spin-slow" />
          </div>
          <div className="grid grid-cols-1 gap-4">
            {[
              ["Python 3.10-3.12", "bg-blue-50"],
              ["OpenAI/Anthropic API-nyckel", "bg-purple-50"],
              ["Virtuell miljö rekommenderas", "bg-green-50"],
              ["Grundkod finns", "bg-yellow-50"],
              ["VI FINNS HÄR FÖR ATT HJÄLPA!", "bg-pink-50 font-bold"]
            ].map(([text, bgColor], index) => (
              <div key={index} className={`${bgColor} p-4 rounded-lg shadow-sm transform hover:translate-x-2 transition-transform duration-200`}>
                {text}
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      title: "Tips för en Awesome Hackathon! 💡",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-4">
            {[
              ["🎯", "Använd gärna AI i alla steg för att undvika att fastna", "bg-blue-50"],
              ["💻", "Bygg helst på en dedikerad dator", "bg-purple-50"],
              ["🤝", "Gå gärna runt till andra grupper och utbyt lärdomar", "bg-green-50"],
              ["📤", "Dela gärna koden med varandra vid dagens slut", "bg-yellow-50"],
              ["✨", "Det spelar ingen roll om man blir klar eller inte!", "bg-pink-50"]
            ].map(([emoji, text, bgColor], index) => (
              <div key={index} 
                   className={`${bgColor} p-4 rounded-xl shadow-md transform hover:translate-x-2 transition-all duration-200 flex items-center space-x-4`}>
                <span className="text-2xl">{emoji}</span>
                <span className="text-lg">{text}</span>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      title: "Grupp 1 👥",
      content: (
        <div className="flex flex-col items-center justify-center space-y-8">
          <p className="text-xl text-center text-gray-600 mb-4">Första uppgift: Spåna fram ett coolt gruppnamn! 🎨</p>
          <div className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200 border-2 border-transparent hover:border-blue-300 w-full max-w-md">
            <h3 className="font-bold text-2xl text-blue-600 mb-6 text-center">Grupp 1</h3>
            <ul className="space-y-3">
              {["Max Ekberg", "Astrid Rodin", "Jonathan Boetsch", "Asmaa Abdirizak"].map((member, idx) => (
                <li key={idx} className="text-lg text-gray-700 text-center">{member}</li>
              ))}
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Grupp 2 👥",
      content: (
        <div className="flex flex-col items-center justify-center space-y-8">
          <p className="text-xl text-center text-gray-600 mb-4">Första uppgift: Spåna fram ett coolt gruppnamn! 🎨</p>
          <div className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200 border-2 border-transparent hover:border-blue-300 w-full max-w-md">
            <h3 className="font-bold text-2xl text-blue-600 mb-6 text-center">Grupp 2</h3>
            <ul className="space-y-3">
              {["Isak Forsberg", "Lucas Lindgren", "Viktoria Wisenfelt", "Arezo Hazara jafari"].map((member, idx) => (
                <li key={idx} className="text-lg text-gray-700 text-center">{member}</li>
              ))}
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Grupp 3 👥",
      content: (
        <div className="flex flex-col items-center justify-center space-y-8">
          <p className="text-xl text-center text-gray-600 mb-4">Första uppgift: Spåna fram ett coolt gruppnamn! 🎨</p>
          <div className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200 border-2 border-transparent hover:border-blue-300 w-full max-w-md">
            <h3 className="font-bold text-2xl text-blue-600 mb-6 text-center">Grupp 3</h3>
            <ul className="space-y-3">
              {["Bagher Hassani", "Zainab Adnan", "David Rydman", "Alexander Suleymanov"].map((member, idx) => (
                <li key={idx} className="text-lg text-gray-700 text-center">{member}</li>
              ))}
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Grupp 4 👥",
      content: (
        <div className="flex flex-col items-center justify-center space-y-8">
          <p className="text-xl text-center text-gray-600 mb-4">Första uppgift: Spåna fram ett coolt gruppnamn! 🎨</p>
          <div className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200 border-2 border-transparent hover:border-blue-300 w-full max-w-md">
            <h3 className="font-bold text-2xl text-blue-600 mb-6 text-center">Grupp 4</h3>
            <ul className="space-y-3">
              {["Ludvig Haglund", "Arvid Johansson", "Belle Sangthong", "Lukas Bråkenhielm"].map((member, idx) => (
                <li key={idx} className="text-lg text-gray-700 text-center">{member}</li>
              ))}
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Grupp 5 👥",
      content: (
        <div className="flex flex-col items-center justify-center space-y-8">
          <p className="text-xl text-center text-gray-600 mb-4">Första uppgift: Spåna fram ett coolt gruppnamn! 🎨</p>
          <div className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200 border-2 border-transparent hover:border-blue-300 w-full max-w-md">
            <h3 className="font-bold text-2xl text-blue-600 mb-6 text-center">Grupp 5</h3>
            <ul className="space-y-3">
              {["Mikael Anttila-Eriksson", "John Kinell", "Joel Söderberg", "Ellen Grefberg"].map((member, idx) => (
                <li key={idx} className="text-lg text-gray-700 text-center">{member}</li>
              ))}
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Grupp 6 👥",
      content: (
        <div className="flex flex-col items-center justify-center space-y-8">
          <p className="text-xl text-center text-gray-600 mb-4">Första uppgift: Spåna fram ett coolt gruppnamn! 🎨</p>
          <div className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200 border-2 border-transparent hover:border-blue-300 w-full max-w-md">
            <h3 className="font-bold text-2xl text-blue-600 mb-6 text-center">Grupp 6</h3>
            <ul className="space-y-3">
              {["Jonas Johnsson", "Diana Molinsky", "Johan Enstam", "Carl Daag"].map((member, idx) => (
                <li key={idx} className="text-lg text-gray-700 text-center">{member}</li>
              ))}
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Grupp 7 👥",
      content: (
        <div className="flex flex-col items-center justify-center space-y-8">
          <p className="text-xl text-center text-gray-600 mb-4">Första uppgift: Spåna fram ett coolt gruppnamn! 🎨</p>
          <div className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200 border-2 border-transparent hover:border-blue-300 w-full max-w-md">
            <h3 className="font-bold text-2xl text-blue-600 mb-6 text-center">Grupp 7</h3>
            <ul className="space-y-3">
              {["Olof Olsson", "Pontus Grähs", "Olivia Reponen", "David Izquierdo Puentes", "Sofia Wiktorsson"].map((member, idx) => (
                <li key={idx} className="text-lg text-gray-700 text-center">{member}</li>
              ))}
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Dags att börja! 🚀",
      content: (
        <div className="flex flex-col items-center justify-center space-y-8">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-75 blur-lg animate-pulse"></div>
            <Cpu size={96} className="relative text-white transform hover:scale-110 transition-transform duration-200" />
          </div>
          <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Lycka till!
          </p>
          <p className="text-xl">Frågor? Kör på!</p>
          <Sparkles className="text-yellow-400 animate-bounce" size={32} />
        </div>
      )
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-white">
      <div className="max-w-4xl mx-auto p-8">
        <div className="bg-white rounded-2xl shadow-2xl p-8 min-h-96 transform hover:shadow-3xl transition-all duration-300">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {slides[currentSlide].title}
            </h1>
            <div className="text-gray-500 font-mono">
              {currentSlide + 1} / {slides.length}
            </div>
          </div>
          
          <div className="min-h-64 flex items-center justify-center p-4">
            {slides[currentSlide].content}
          </div>
          
          <div className="flex justify-between mt-8">
            <button 
              onClick={prevSlide}
              className="p-4 rounded-full hover:bg-blue-50 transition-colors duration-200"
              disabled={currentSlide === 0}
            >
              <ChevronLeft size={32} className="text-blue-500" />
            </button>
            <button 
              onClick={nextSlide}
              className="p-4 rounded-full hover:bg-blue-50 transition-colors duration-200"
              disabled={currentSlide === slides.length - 1}
            >
              <ChevronRight size={32} className="text-blue-500" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presentation;