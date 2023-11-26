Continuing from the previous article on model training, today we will focus on labeling images. For this task, we will use a package called labelImg as our image labeling tool.

Click the following GitHub project link and then download it: [HumanSignal/labelImg](https://github.com/HumanSignal/labelImg)

![1](/yolov8/labeling/1.png)

Due to potential package version conflicts with the package used here, we need to create a new, clean environment through Anaconda for the installation (it is strongly recommended not to install under the Yolo environment, as it will lead to numerous errors).

In this case, we will create a new environment named 'label'. The creation of a new environment can be referenced in Yolo v8–Installation.

![2](/yolov8/labeling/2.png)

Open the terminal:

```
1. conda activate label
2. cd labelIMG 
3. pip3 install pipenv
4. pipenv run pip install pyqt5==5.15.2 lxml
```

If you encounter an error after entering the above, it may appear as shown in the following image:

![3](/yolov8/labeling/3.png)

```
pip install --upgrade pyqt5
```

At this point, the environment and packages are fully installed! Next, we will enter the following in the terminaland you will see the user interface for the labeling package.

```
python labelImg.py
```

![4](/yolov8/labeling/4.png)

Next, click 'Open' and open the image file you want to label.

![5](/yolov8/labeling/5.png)

Here, we use dollars as our labeling target and click 'Create RectBox'.

![6](/yolov8/labeling/6.png)

Use the mouse to label. After framing the target, a category for labeling will appear. We will label this category as banknotes (dollars). However, since there is no banknote option in the dropdown menu, we need to add a new category for banknotes.

We go to the LabelImg folder, find the 'data' folder, and open the 'predefined_classes.txt' text file inside.

![7](/yolov8/labeling/7.png)

After opening it, we can add the new category 'dollar' at the bottom (it's recommended to add at the bottom to avoid messing up the default values).

![8](/yolov8/labeling/8.png)

After adding, we can see the newly added 'dollar' category in the menu.

![9](/yolov8/labeling/9.png)

Click 'save'.

![10](/yolov8/labeling/10.png)

Go to the directory where you just saved the labeled file, and you will see the labeled photo. The text file represents the labeling format.

![11](/yolov8/labeling/11.png)

And with that, our labeling task is successfully completed!