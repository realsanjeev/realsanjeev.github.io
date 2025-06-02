const Experience = () => {
  const experiences = [
    {
      title: "Machine Learning Engineer",
      company: "TAI Inc.",
      period: "May 2024 – Present",
      description:
        "Responsible for the development and deployment of machine learning models, with a focus on computer vision and large language model (LLM)-based systems. Collaborate with international teams to deliver scalable and efficient AI-driven solutions.",
      achievements: [
        "Designed and integrated computer vision models for a Document Verification System utilized in visa processing workflows",
        "Contributed to the development of a Retrieval-Augmented Generation (RAG) application, Sensei GPT, for educational content generation using LLMs",
        "Developed a FastAPI-based service for deploying a facial recognition system",
        "Worked closely with global stakeholders and senior engineers to engineer production-ready ML solutions"
      ]
    },
    {
      title: "Machine Learning Trainee – R&D Focus",
      company: "TAI Inc.",
      period: "Feb 2024 – May 2024",
      description:
        "Engaged in applied research in the domains of LLM fine-tuning and retrieval-augmented generation. Investigated and implemented advanced techniques to enhance model efficiency and adaptability.",
      achievements: [
        "Implemented cutting-edge RAG techniques, including Graph RAG architectures",
        "Explored and applied parameter-efficient fine-tuning methods such as LoRA and QLoRA",
        "Researched and tested model merging methodologies for optimized performance",
        "Investigated methods for extending context length in pre-trained language models"
      ]
    },
    {
      title: "Python Intern",
      company: "TAI Inc.",
      period: "Nov 2023 – Feb 2024",
      description:
        "Supported natural language processing model development while gaining hands-on experience with modern ML tools in a production-oriented environment.",
      achievements: [
        "Initiated development of a Nepali text summarization model using BART, including dataset curation and training",
        "Applied LoRA for fine-tuning, acquiring practical understanding of parameter-efficient fine-tuning techniques",
        "Gained experience with tools such as Docker, Jenkins, and the Neo4j graph database"
      ]
    }
  ];


  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Experience</h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{exp.title}</h3>
                  <p className="text-lg text-blue-600 font-medium">{exp.company}</p>
                </div>
                <span className="text-gray-500 font-medium">{exp.period}</span>
              </div>
              
              <p className="text-gray-700 mb-4 leading-relaxed">{exp.description}</p>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Key Achievements:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
