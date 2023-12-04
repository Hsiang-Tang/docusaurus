# Screenshot to Code

```txt title="Screenshot-to-Code"
Overview/
├── Introduction
│   ├── Overview of the App
│   └── Technology Used (GPT-4 Vision and DALL-E 3)
├── Generated Languages
│   └── Support for HTML, Tailwind CSS, React, Vue, Bootstrap
└── CLI Installation
```


## 1. Introduction
 **Overview of the App:** 
  - The "screenshot-to-code" application is designed to convert screenshots into clean, usable code.
  - It uses advanced AI technologies, specifically OpenAI's GPT-4 Vision for code generation and DALL-E 3 for image creation.
- **Technology Used:** 
  - GPT-4 Vision: For generating the code structure from screenshots.
  - DALL-E 3: For creating similar-looking images when required.

## 2. Generated Languages

  - The application supports converting screenshots into HTML, Tailwind CSS, React, Vue, and Bootstrap.


## 3. CLI Installation



**1. create a clean environment with conda**
```
$ conda create --name screenshot python=3.12
$ conda activate screenshot
```

**2. clone the repository**
```
$ git clone https://github.com/abi/screenshot-to-code.git
```

**3. install the pacakge management**
```
$ pip install poetry
```

**4. run the backend**
```
$ cd backend
$ echo "OPENAI_API_KEY=sk-your-key" > .env
$ poetry install
$ poetry shell
$ poetry run uvicorn main:app --reload --port 7001
```

**5. run the frontend**
```
$ cd frontend
$ yarn
$ yarn dev
```

View the WebUI in your local server 

Local:   http://localhost:5173/

![1](/screenshot/1.png)


Setup your OpenAI API KEY

![2](/screenshot/2.png)

Drag Your File 

<video width="800" height="600" controls>
  <source src="/screenshot/4.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
