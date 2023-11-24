# ChatGPT 3.5 FineTine + LineBot


```txt title="流程目錄結構圖"
LineBot+gpt-3.5_fine tuning/
├── OpenAI GPT-3.5 官方文件參考
├── 收集訓練數據
│   ├── 介紹Claude
│   └── 準備訓練數據集
├── 建立資料集
│   ├── 訪問OpenAI Fine-tuning頁面
│   └── 準備JSON格式數據
├── 編寫Fine Tuning程式碼
│   ├── 設置程式環境
│   ├── 程式碼編寫
│   └── YouTube教學影片參考
├── 開發LineBot應用
│   ├── 程式碼撰寫與調整
│   └── 遇到的問題和解決方案
├── 部署應用
│   ├── 在Render上部署LineBot
│   └── Cronjob設定
├── 微調前後差異比較
└── Debug思路
    ├── 針對問題的除錯
    └── 解決方案及思路
```

##  1.收集訓練數據
### 生成問答集

介紹一款名為Claude的人工智慧，由Anthropic開發。Claude具備ChatGPT 3.5所不具備的檔案上傳功能，能從PDF提取資訊或生成摘要。目前，Claude僅在歐美國家提供服務。為使用Claude，透過Opera瀏覽器變更IP至美洲，並購買簡訊服務完成註冊。註冊後，即可像使用ChatGPT一樣向Claude提問。(2023/10/18開放台灣用戶，無須跳轉VPN)

![1](/gpt3.5/1.png)

接著，準備訓練資料集製作聊天機器人，這裡我隨意訂題目，目的是協助民眾解決不確定該看哪一科的問題。
首先，上傳PDF文件，然後請求Claude從中整理出30個常見問題。

![2](/gpt3.5/2.png)
### 特定格式轉換

前往OpenAI的Fine-tuning頁面，確認需要將文字內容轉換成的特定格式。文字格式整理如下：

![3](/gpt3.5/3.png)

範例顯示資料需以JSON（JavaScript Object Notation）格式整理，方便交換、儲存及閱讀簡單資料。若不熟悉JSON，可由Claude處理格式問題。只需複製範例格式，修改成期望的ChatGPT角色，Claude便會自動生成相關內容。

![4](/gpt3.5/4.png)

至此，訓練資料集準備完成。接下來，將此檔案上傳至個人的Github，第一步驟便告一段落。

![5](/gpt3.5/5.png)

## **2. 編寫Fine Tuning程式碼**

首先開啟編譯器，這次選擇使用vscode。然後建立一個新檔案，命名為 **`fine_tune.py`**。

```py title="gpt-3.5_fine_tune.py"showLineNumbers
# gpt-3.5_fine_tune

#!/usr/bin/env python
# coding: utf-8

from flask import Flask, render_template, request, abort
from linebot import LineBotApi, WebhookHandler
from linebot.exceptions import InvalidSignatureError
from linebot.models import TextMessage, MessageEvent, TextSendMessage
import os
import openai
import tempfile
import datetime
import time
import string

import os

# 升級 openai 庫
os.system('pip install openai --upgrade')

# 使用 curl 下載 clinic_qa.json 文件
os.system('curl -o clinic_qa.json -L https://github.com/Hsiang-Tang/gpt-3.5_fine_tune/raw/main/clinic_qa.json')

import openai

# 設置您的 OpenAI API 金鑰
openai.api_key = os.getenv("OPENAI_API_KEY")

# 創建 fine-tune 文件
openai.File.create(
  file=open("clinic_qa.json", "rb"),
  purpose='fine-tune'
)

# 列出文件
openai.File.list()

# 創建 fine-tuning 作業
openai.FineTuningJob.create(training_file="file-BhA5o5gmQRCx15KsK4zq97WI", model="gpt-3.5-turbo")

# 列出 fine-tuning 作業
openai.FineTuningJob.list(limit=10)

# 檢索 fine-tuning 作業事件
openai.FineTuningJob.retrieve("ftjob-x9NGckMPlxEXEXGSDtjy4Uc0")

# 列出 fine-tuning 作業事件
openai.FineTuningJob.list_events(id="ftjob-x9NGckMPlxEXEXGSDtjy4Uc0", limit=10)

# 創建聊天完成
completion = openai.ChatCompletion.create(
  model="gpt-3.5-turbo",
  messages=[
    {"role": "system", "content": "您現在扮演一個專業的醫生"},
    {"role": "user", "content": "我感覺動一動就很累，老是很疲倦"}
  ]
)

print(completion.choices[0].message.content)

# 創建帶有 fine-tuned 模型的聊天完成
completion2 = openai.ChatCompletion.create(
  model="ft:gpt-3.5-turbo-0613:personal::7wllb3DZ",
  messages=[
    {"role": "system", "content": "您現在扮演一個專業的醫生"},
    {"role": "user", "content": "我感覺動一動就很累，老是很疲倦"}
  ]
)

print(completion2.choices[0].message.content)

def GPT_response(text):
    response = openai.ChatCompletion.create(
        model="ft:gpt-3.5-turbo-0613:personal::7wllb3DZ",
        messages=[
            {"role": "system", "content": "您現在扮演一個專業的醫生"},
            {"role": "user", "content": text}
        ]
    )

    answer = response.choices[0].message.content

    # 去除回覆文本中的標點符號
    answer = answer.translate(str.maketrans('', '', string.punctuation))

    return answer
```


### 環境變數設置
考慮到雲端部署的需求，避免將包含openai.api_key的程式碼公開，因OpenAI若偵測到會立即刪除key。因此，將openai.api_key修改為 **`os.getenv("OPENAI_API_KEY")`**，使程式碼從雲端平台抓取環境變數。同時，新增了 **`Def GPT_response`** 的程式碼，把 **`fine_tune.py`** 封裝成函式供 **`app.py`** 呼叫。至此，步驟二完成。

## **3. 開發LineBot應用**

### 創建app.py檔
```py title="app.py"showLineNumbers
from flask import Flask, render_template, request, abort
from linebot import LineBotApi, WebhookHandler
from linebot.exceptions import InvalidSignatureError
from linebot.models import TextMessage, MessageEvent, TextSendMessage
import os
import openai
import tempfile
import datetime
import time
import string
from fine_tune import GPT_response

app = Flask(__name__, template_folder='templates')
static_tmp_path = os.path.join(os.path.dirname(__file__), 'static', 'tmp')

# Channel Access Token
line_bot_api = LineBotApi(os.getenv('CHANNEL_ACCESS_TOKEN'))

# Channel Secret
handler = WebhookHandler(os.getenv('CHANNEL_SECRET'))

# OPENAI API Key初始化設定
openai.api_key = os.getenv('OPENAI_API_KEY')

@app.route("/")
def index():
    return render_template("./index.html")

@app.route("/heroku_wake_up")
def heroku_wake_up():
    return "Hey!Wake Up!!"

# 監聽所有來自 /callback 的 Post Request
@app.route("/callback", methods=['POST'])
def callback():
    # get X-Line-Signature header value
    signature = request.headers['X-Line-Signature']
    # get request body as text
    body = request.get_data(as_text=True)
    app.logger.info("Request body: " + body)
    # handle webhook body
    try:
        handler.handle(body, signature)
    except InvalidSignatureError:
        abort(400)
    return 'OK'

# 處理訊息
@handler.add(MessageEvent, message=TextMessage)
def handle_message(event):
    msg = event.message.text
    GPT_answer = GPT_response(msg)  # 在這裡呼叫 GPT_response 函數處理用戶的訊息
    print(GPT_answer)
    line_bot_api.reply_message(event.reply_token, TextSendMessage(GPT_answer))

if __name__ == "__main__":
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)
```

## **4. 部署應用**

開始在Render部署LineBot的步驟如下：

1. 登入Render，透過Web Service連結到GitHub的Repository。
2. 在**`app.py`**中，將**`@handle.add`**和**`from fine_tune import GPT_response`**註解掉。
3. 先將**`app.py`**上傳到GitHub，進行部署。
    - 注意：若先上傳**`fine_tune.py`**可能導致因找不到app模組而部署失敗。
4. **`app.py`**部署成功後，再上傳**`fine_tune.py`**到GitHub，讓Render部署新的commit。
5. 完成上述步驟後，取消**`app.py`**中**`@handle.add`**和**`from fine_tune import GPT_response`**的註解。
6. 待**`fine_tune.py`**部署完畢，確認在Render log中顯示**`fine_tune.py`**開始執行。
    - 注意：確保步驟順序正確，以避免錯誤。
7. 讓整個系統運行完畢，確保微調後的聊天機器人可以正常使用。
8. 在Cronjob ([https://console.cron-job.org/jobs](https://console.cron-job.org/jobs)) 設定每5分鐘對Render進行一次呼叫，避免Render因閒置超過15分鐘而休眠，確保聊天機器人持續回應問題。

來看看微調前後的差異：

![6](/gpt3.5/6.png)

### 微調前後比較
    - 微調前：GPT回答較無組織，常亂回答。
    - 微調後：回答有顯著改善，更加精確。
### 訓練成本
    - 一次訓練（30個對話）大約需0.04美元，約合1.28新台幣。
    - OpenAI早期註冊提供18美元配額，新帳號目前配額約5美元，通常足夠使用。
### 部署過程中的錯誤
    - 部署時遇到多個錯誤。
    - 提供錯誤及除錯過程的紀錄，供參考。
    
    1. **pip套件問題**
        - 檢查render log，確認pip版本已是最新。
        - 在代碼中加上 **`os.system('pip install openai — upgrade')`**。
    2. **GPT API金鑰問題**
        - 因Render連接GitHub公開專案，若API金鑰公開，將被OpenAI刪除。
        - 在Render後台設置環境變數，代碼中使用 **`os.getenv("OPENAI_API_KEY")`**。
    3. **app.py和fine_tune.py代碼結構問題**
        - 分離 **`app.py`** 和 **`fine_tune.py`** 檔案。
        - 在 **`app.py`** 中import並呼叫 **`fine_tune.py`** 中的函式 **`Def GPT_response(text)`**。
    4. **部署順序問題**
        - 先上傳 **`app.py`**，待成功部署後再上傳 **`fine_tune.py`** 到GitHub。
    5. **代碼自動執行問題**
        - 由於代碼中新增 **`from fine_tune import GPT_response`**，Render找不到模塊而失敗。
        - 先註解該行並重新上傳到GitHub。
    6. **Render log出現RateLimitError**
        - 將 **`handle_message`** 和 **`from fine_tune import GPT_response`** 註解掉。
        - 讓應用先處理接收請求，再逐步導入 **`GPT_response`**。
    7. **Render log顯示404 Not Found**
        - 在代碼中定義匹配 **`/callback`** 路徑的路由，處理Line Bot的Webhook請求。
    8. **設置Cronjob**
        - 透過 [Cronjob](https://console.cron-job.org/jobs) 設定每5分鐘對Render進行呼叫，避免Render休眠。