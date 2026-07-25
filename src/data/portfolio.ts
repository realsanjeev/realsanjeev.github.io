export interface SkillItem {
    name: string;
    value: string;
}

export interface SkillCategory {
    category: string;
    items: string[] | SkillItem[];
}
export interface Experience {
    title: string;
    company: string;
    period: string;
    description: string;
    achievements: string[];
    techStack?: string[];
    logo?: string;
}

export interface Project {
    name: string;
    description: string;
    url: string;
    tags?: string[];
    type?: 'major' | 'minor' | 'internship' | 'github';
    downloadUrl?: string;
    detailedDescription?: string;
    image?: string;
    alt?: string;
}


export interface BlogPost {
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    tags: string[];
    url: string;
    image?: string;
}

export interface Publication {
    title: string;
    authors: string;
    venue: string;
    type: string;
    abstract: string;
    links: {
        paper?: string;
        code?: string;
        demo?: string;
        supplement?: string;
    };
}

export const EXPERIENCES: Experience[] = [
    {
        title: "Machine Learning Engineer",
        company: "TAI Inc.",
        period: "May 2024 – Present",
        description: "Responsible for the development and deployment of machine learning models, with a focus on computer vision and large language model (LLM)-based systems. Collaborate with international teams to deliver scalable and efficient AI-driven solutions.",
        achievements: [
            "Designed and integrated computer vision models for a Document Verification System utilized in visa processing workflows",
            "Contributed to the development of a Retrieval-Augmented Generation (RAG) application, Sensei GPT, for educational content generation using LLMs",
            "Developed a FastAPI-based service for deploying a facial recognition system",
            "Worked closely with global stakeholders and senior engineers to engineer production-ready ML solutions"
        ],
        techStack: ["PyTorch", "OpenCV", "FastAPI", "Docker", "RAG", "LLM"],
        logo: "/tai-logo.jpg"
    },
    {
        title: "Machine Learning Trainee – R&D Focus",
        company: "TAI Inc.",
        period: "Feb 2024 – May 2024",
        description: "Engaged in applied research in the domains of LLM fine-tuning and retrieval-augmented generation. Investigated and implemented advanced techniques to enhance model efficiency and adaptability.",
        achievements: [
            "Implemented cutting-edge RAG techniques, including Graph RAG architectures",
            "Explored and applied parameter-efficient fine-tuning methods such as LoRA and QLoRA",
            "Researched and tested model merging methodologies for optimized performance",
            "Investigated methods for extending context length in pre-trained language models"
        ],
        techStack: ["LoRA", "QLoRA", "HuggingFace", "LangChain", "Neo4j", "Graph RAG"],
        logo: "/tai-logo.jpg"
    },
    {
        title: "Python Intern",
        company: "TAI Inc.",
        period: "Nov 2023 – Feb 2024",
        description: "Supported natural language processing model development while gaining hands-on experience with modern ML tools in a production-oriented environment.",
        achievements: [
            "Initiated development of a Nepali text summarization model using BART, including dataset curation and training",
            "Applied LoRA for fine-tuning, acquiring practical understanding of parameter-efficient fine-tuning techniques",
            "Gained experience with tools such as Docker, Jenkins, and the Neo4j graph database"
        ],
        techStack: ["Python", "BART", "Transformers", "Docker", "Jenkins", "NLP"],
        logo: "/tai-logo.jpg"
    }
];

export const MAJOR_PROJECTS: Project[] = [
    {
        name: "Automatic Music Generation",
        type: 'major',
        description: "Bachelor's Degree Final Year",
        detailedDescription: "Developed a system capable of generating novel musical compositions with multiple instrument tracks. Investigated various neural network architectures for sequential data generation, implementing an LSTM-based model for music creation. Tracked experiments and model training runs using Weights & Biases. Explored hybrid approaches combining algorithmic composition (tone-matrix derived from image data) with deep learning model outputs.",
        downloadUrl: "https://drive.google.com/drive/folders/1ZsLWk0B2BmMbE0fqo6sSO5H2HlNNxwGY",
        url: '#',
        image: "https://images.unsplash.com/photo-1717699841849-98dcc1c6184a?q=400&w=600&auto=format&fit=crop",
        alt: "Automatic Music Generation system displaying neural networks and digital keyboard interface - Bachelor's Degree Final Year project by Sanjeev Bhandari",
        tags: ["LSTM", "Deep Learning", "Python", "Music AI", "W&B"]
    },
    {
        name: "Music Genre Recognition using Deep Learning",
        type: 'minor',
        description: "Bachelor's Degree Third Year",
        detailedDescription: "Applied Convolutional Neural Networks (CNNs) within the PyTorch framework for classifying music genres from audio features. Experimented with different CNN architectures and hyperparameters to optimize genre recognition accuracy on the GTZAN dataset.",
        url: "https://github.com/realsanjeev/Music-genre-classification-using-deep-learning",
        image: "https://images.unsplash.com/photo-1768033402852-dbafede8eae6?q=400&w=600&auto=format&fit=crop",
        alt: "Music genre recognition CNN PyTorch model classifying GTZAN audio spectrum dataset - Sanjeev Bhandari Bachelor's Degree Third Year project",
        tags: ["CNN", "PyTorch", "Audio Processing", "GTZAN"]
    },
    {
        name: "Abstractive Text Summarization in Nepali using BART",
        type: 'internship',
        description: "ML Internship",
        detailedDescription: "Developed and fine-tuned a BART-based model for abstractive summarization of Nepali news articles. Implemented and evaluated the Low-Rank Adaptation (LoRA) technique for parameter-efficient fine-tuning (PEFT) in a resource-constrained setting.",
        url: "https://medium.com/@realsanjeev/nepali-text-summarization-2df72a8a3080",
        image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&h=400&fit=crop",
        alt: "Abstractive text summarization in Nepali using BART and LoRA parameter-efficient fine-tuning - Sanjeev Bhandari ML Internship project at TAI Inc.",
        tags: ["NLP", "BART", "LoRA", "Nepali", "Transformers"]
    }
];

export const GITHUB_PROJECTS: Project[] = [
    {
        name: "SAM2-GUI",
        description: "Video object segmentation and tracking using the SAM2.1 model.",
        url: "https://github.com/realsanjeev/sam2-gui",
        tags: ["SAM", "Computer Vision", "Video Segmentation"]
    },
    {
        name: "Essay Writer Using Agent",
        description: "A blog-writing app that uses an autonomous agent to search the web and generate content, built with LangGraph.",
        url: "https://github.com/realsanjeev/Essay-writer-using-Agent",
        tags: ["Writer", "LangGraph", "AI Agent", "Web Search"]
    },
    {
        name: "OpenCV Object Detection",
        description: "Object detection using the Mediapipe library, along with a prototype app that enables drawing through hand gestures.",
        url: "https://github.com/realsanjeev/Object-Detection-using-OpenCV",
        tags: ["Computer Vision", "OpenCV", "Mediapipe"]
    },
    {
        name: "Real-Time Whisper Transcription",
        description: "A real-time transcription app powered by Whisper, useful for generating subtitles for live video content.",
        url: "https://github.com/realsanjeev/whisper-realtime-transcriber",
        tags: ["Whisper", "Speech-to-Text", "Real-time"]
    },
    {
        name: "read-aloud-extension",
        description: "A Browser Extension (Chrome & Firefox) that reads web page content aloud using Text-to-Speech (TTS), helping with accessibility and multitasking.",
        url: "https://github.com/realsanjeev/read-aloud-extension",
        tags: ["Browser Extension", "TTS", "Accessibility", "Productivity"]
    },
    {
        name: "nepali_unicoder",
        description: "A python library for converting Nepali Preeti text to Unicode and translating Roman text into Nepali.",
        url: "https://bhandarisanjeev.com.np/nepali_unicoder/",
        tags: ["Translation", "Nepali", "Unicode", "Text Conversion"]
    },
];

export const BLOG_POSTS: BlogPost[] = [
    {
        title: "Nepali Text Summarization",
        excerpt: "This project addresses the challenges of Nepali text summarization using transformer models like mBART, focusing on fine-tuning for linguistic accuracy and data scarcity.",
        date: "Feb 26, 2024",
        readTime: "7 min read",
        tags: ["Nepali NLP", "Transformer Models", "mBART", "Text Summarization", "Multilingual AI"],
        url: "https://medium.com/@realsanjeev/nepali-text-summarization-2df72a8a3080",
        image: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=600&h=400&fit=crop"
    },
    {
        title: "Model Merging: A new way of creating model",
        excerpt: "Explore innovative techniques like SLERP, TIES, and DARE to merge multiple language models into a single, efficient model without extensive retraining.",
        date: "Jul 6, 2024",
        readTime: "4 min read",
        tags: ["Model Merging", "SLERP", "TIES", "DARE", "Language Models", "AI Efficiency"],
        url: "https://medium.com/@realsanjeev/model-merging-a-new-way-of-creating-model-e62e6d14ef97",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&h=400&fit=crop"
    },
    {
        title: "🦀 Supercharge Python with Rust: Building Fast Python Extensions with PyO3 and Maturin",
        excerpt: "Learn how to enhance Python performance by building native extensions using Rust, PyO3, and Maturin, including benchmarking for performance gains.",
        date: "May 23, 2025",
        readTime: "3 min read",
        tags: ["Python", "Rust", "PyO3", "Maturin", "Performance Optimization", "Machine Learning"],
        url: "https://medium.com/@realsanjeev/supercharge-python-with-rust-building-fast-python-extensions-with-pyo3-and-maturin-da09306d97a8",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop"
    },
    {
        title: "Creating the SnowFlake In C using recursive method with raylib",
        excerpt: "A step-by-step guide to drawing a recursive snowflake fractal in C using Raylib, covering setup, code implementation, and build automation.",
        date: "Nov 27, 2024",
        readTime: "4 min read",
        tags: ["C Programming", "Raylib", "Graphics Programming", "Fractals", "Recursive Algorithms"],
        url: "https://medium.com/@realsanjeev/creating-the-snowflake-in-c-using-raylib-07a0c4fa5e17",
        image: "https://images.unsplash.com/photo-1485594050903-8e8ee7b071a8?w=600&h=400&fit=crop"
    }
];

export const PUBLICATIONS: Publication[] = [];

export const SKILLS: SkillCategory[] = [
    {
        category: "Research Interests",
        items: ['Natural Language Processing', 'Computer Vision', 'Large Language Models', 'PEFT Techniques', 'AI Safety', 'Deep Learning']
    },
    {
        category: "Technical Skills",
        items: [
            { name: "Programming Languages", value: "Python (Proficient), C, C++, JavaScript, Java" },
            { name: "AI/ML Libraries", value: "PyTorch, HuggingFace, LangChain, TensorFlow/Keras, Scikit-learn" },
            { name: "Web Frameworks", value: "FastAPI, Django, Streamlit, Flask" },
            { name: "Developer Tools", value: "Git, Docker, Jenkins, Linux/Unix" }
        ]
    }
];
