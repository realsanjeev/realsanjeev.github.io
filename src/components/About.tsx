
import React from 'react';

const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About Me</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                I am a machine learning engineer with a deep passion for advancing the field of artificial intelligence. 
                My work focuses on developing innovative ML solutions that bridge the gap between cutting-edge research 
                and real-world applications.
              </p>
              <p>
                With a background in both theoretical foundations and practical implementation, I enjoy tackling 
                complex challenges in computer vision, natural language processing, and deep learning. I believe 
                that AI has the potential to transform industries and improve lives worldwide.
              </p>
              <p>
                When I'm not coding or training models, you'll find me writing technical articles on Medium, diving into the latest research papers, experimenting with low-level programming, and continuously exploring new technologies.
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Research Interests</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  'Natural Language Processing', 'Computer Vision', 'Large Language Models', 
                  'PEFT Techniques', 'AI Safety', 'Deep Learning'
                ].map((interest) => (
                  <span 
                    key={interest}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Technical Skills</h3>
              <div className="grid grid-cols-1 gap-4 text-gray-700">
                <div>
                  <h4 className="font-medium mb-2">Programming Languages</h4>
                  <p className="text-sm">Python (Proficient), Java, C, C++, JavaScript</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">AI/ML Libraries</h4>
                  <p className="text-sm">PyTorch, HuggingFace, LangChain, TensorFlow/Keras, Scikit-learn</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Web Frameworks</h4>
                  <p className="text-sm">FastAPI, Django, Streamlit, Flask</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Developer Tools</h4>
                  <p className="text-sm">Git, Docker, Jenkins, Linux/Unix</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
