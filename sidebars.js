
// @ts-check

const sidebars = {
  tutorialSidebar: [

    'Intro',

    {
      type: 'category',
      label: 'Artificial Intelligence',
      items: [
        'Artificial Intelligence/LineBot+gpt-3.5_fine tuning',
        'Artificial Intelligence/Screenshot-to-code',],
    },

    {
      type: 'category',
      label: 'Machine Learning',
      items: [
        {
          type: 'category',
          label: 'Yolo_v8', 
          items: [
            'Yolo_v8/Installation',
            'Yolo_v8/Predicting&Training',
            'Yolo_v8/Labeling',
          ], 
        },
      ], 
    },

    {
      type: 'category',
      label: 'Data Analysis',
      items: [
        'Data Analysis/Grafana',
      ],
    },

    {
      "type": "category",
      "label": "DevOps",
      "items": [
        {
          "type": "category",
          "label": "Linux",
          "items": [
            "DevOps/WSL",
          ]
        },
        "DevOps/Docker" 
      ]
    }
    




    /* 註釋開始
    {
      type: 'category',
      label: 'About Me',
      items: ['About Me/about'], // 確保這裡是正確的相對路徑
    },
    註釋結束 */
    
  ],
};

export default sidebars;


    /* 註釋開始

Frontend Technologies: 
HTML, CSS, JavaScript, frameworks like Vue, React, Angular etc.

Backend Technologies: 
Python, Java, PHP, C#, Ruby and related frameworks like Django, Spring, Laravel.

Mobile Development: 
Android, iOS, React Native, Flutter etc.

Artificial Intelligence/Machine Learning: 
Deep Learning, Computer Vision, Natural Language Processing.

Cloud Computing and Big Data: 
Cloud platforms, container technologies, big data processing.

Databases: 
MySQL, MongoDB, Redis and related database technologies.

Network Security: 
Network attack/defense, security tools, vulnerability discovery.

DevOps Technologies: 
Linux, Nginx, Docker, Kubernetes and other popular ops tools.

    註釋結束 */