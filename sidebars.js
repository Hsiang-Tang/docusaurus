// @ts-check

const sidebars = {
  tutorialSidebar: [
    'Intro',
    {
      type: 'category',
      label: 'AI',
      items: ['AI/LineBot+gpt-3.5_fine tuning',],
    },
    {
      type: 'category',
      label: 'Yolo_v8',
      items: ['Yolo_v8/Installation','Yolo_v8/Predicting&Training','Yolo_v8/Labeling',],
    },
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
