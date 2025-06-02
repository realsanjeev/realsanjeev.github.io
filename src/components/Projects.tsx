import React from "react";
import { Button } from "@/components/ui/button";
import { FiFileText, FiGithub } from "react-icons/fi";

const GITHUB_PROJECTS = [
  {
    name: "Essay Writer Using Agent",
    description:
      "A blog-writing app that uses an autonomous agent to search the web and generate content, built with LangGraph.",
    url: "https://github.com/realsanjeev/Essay-writer-using-Agent",
  },
  {
    name: "OpenCV Object Detection",
    description:
      "Object detection using the Mediapipe library, along with a prototype app that enables drawing through hand gestures.",
    url: "https://github.com/realsanjeev/Object-Detection-using-OpenCV",
  },
  {
    name: "Real-Time Whisper Transcription",
    description:
      "A real-time transcription app powered by Whisper, useful for generating subtitles for live video content.",
    url: "https://github.com/realsanjeev/whisper-realtime-transcriber",
  },
  {
    name: "Reinforcement Learning in Python Game",
    description:
      "An implementation of reinforcement learning applied to the classic Snake game, demonstrating AI gameplay.",
    url: "https://github.com/defyingdemonprogram/Reinforcement-Learning-in-Python-Game",
  },
];

const Projects = () => {
  return (
    <section className="py-20 bg-white" id="projects">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Projects</h2>
        <div className="space-y-8">
          {/* Major Project */}
          <div className="border-l-4 border-blue-500 pl-8 pb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Major Project: Automatic Music Generation
            </h3>
            <p className="text-gray-600 mb-1">Bachelor's Degree Final Year</p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Developed a system capable of generating novel musical compositions with multiple instrument tracks.
              Investigated various neural network architectures for sequential data generation, implementing an LSTM-based model
              for music creation. Explored hybrid approaches combining algorithmic composition (tone-matrix derived from image data)
              with deep learning model outputs.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://drive.google.com/drive/folders/1ZsLWk0B2BmMbE0fqo6sSO5H2HlNNxwGY"
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="sm">
                  <FiFileText className="mr-2 h-4 w-4" />
                  Download PDF
                </Button>
              </a>
            </div>
          </div>

          {/* Minor Project */}
          <div className="border-l-4 border-green-500 pl-8 pb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Minor Project: Music Genre Recognition using Deep Learning
            </h3>
            <p className="text-gray-600 mb-1">Bachelor's Degree Third Year</p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Applied Convolutional Neural Networks (CNNs) within the PyTorch framework for classifying music genres from audio features.
              Experimented with different CNN architectures and hyperparameters to optimize genre recognition accuracy on the GTZAN dataset.
              Analyzed model performance, documented findings, and discussed limitations in a comprehensive project report.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://github.com/realsanjeev/Music-genre-classification-using-deep-learning"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="sm">
                  <FiGithub className="mr-2 h-4 w-4" />
                  View on GitHub
                </Button>
              </a>
            </div>
          </div>

          {/* Internship Project */}
          <div className="border-l-4 border-purple-500 pl-8 pb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Internship Project: Abstractive Text Summarization in Nepali using BART
            </h3>
            <p className="text-gray-600 mb-1">ML Internship</p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Developed and fine-tuned a BART-based model for abstractive summarization of Nepali news articles.
              Implemented and evaluated the Low-Rank Adaptation (LoRA) technique for parameter-efficient fine-tuning (PEFT) in a
              resource-constrained setting.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://medium.com/@sanjeev-bhandari/nepali-text-summarization-2df72a8a3080"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="sm">
                  <FiGithub className="mr-2 h-4 w-4" />
                  Read on Medium
                </Button>
              </a>
            </div>
          </div>


          {/* Other GitHub Projects */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Other Projects on GitHub</h4>
            <ul className="space-y-4">
              {GITHUB_PROJECTS.map((project, idx) => (
                <li key={project.url} className="border rounded-lg p-6 flex flex-col md:flex-row md:items-center justify-between bg-gray-50">
                  <div>
                    <div className="font-semibold text-gray-900">{project.name}</div>
                    <div className="text-gray-700 mb-2">{project.description}</div>
                  </div>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 md:mt-0"
                  >
                    <Button variant="outline" size="sm">
                      <FiGithub className="mr-2 h-4 w-4" />
                      View on GitHub
                    </Button>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
