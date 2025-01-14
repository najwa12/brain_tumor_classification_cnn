# 🧠 AI-Powered Brain Tumor Classification: Advanced MRI Analysis with CNNs

The early and accurate diagnosis of brain tumors is one of the most critical challenges in modern medicine. This project leverages the transformative potential of **Artificial Intelligence (AI)** and **Deep Learning (DL)** to develop a powerful, automated system for classifying brain tumors from MRI scans. By utilizing state-of-the-art **Convolutional Neural Networks (CNNs)** and **Transfer Learning (TL)** techniques, this solution is designed to assist healthcare professionals in making faster and more accurate diagnoses, ultimately improving patient outcomes.  

The approach is built upon the **EfficientNetB0** model, a cutting-edge architecture pre-trained on the **ImageNet** dataset. By fine-tuning this model for the specific task of brain tumor classification, we effectively combine the power of large-scale learning with the flexibility needed for specialized medical applications.  

This project not only exemplifies the potential of AI in healthcare but also showcases how innovative technology can address pressing global challenges, offering solutions that are efficient, reliable, and scalable. Whether you're a researcher, a healthcare professional, or an AI enthusiast, this initiative highlights the incredible possibilities of applying deep learning to save lives and advance medical science.

<p align="center">
   <img src="https://img.shields.io/badge/pypi-3775A9?style=for-the-badge&logo=pypi&logoColor=white" />
   <img src="https://img.shields.io/badge/Python-FFD43B?style=for-the-badge&logo=python&logoColor=blue" />
   <img src="https://img.shields.io/badge/Keras-FF0000?style=for-the-badge&logo=keras&logoColor=white" />
   <img src="https://img.shields.io/badge/TensorFlow-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white" />
   <img src="https://img.shields.io/badge/Jupyter-F37626.svg?&style=for-the-badge&logo=Jupyter&logoColor=white" />
   <img src="https://img.shields.io/badge/Pandas-2C2D72?style=for-the-badge&logo=pandas&logoColor=white" />
   <img src="https://img.shields.io/badge/Numpy-777BB4?style=for-the-badge&logo=numpy&logoColor=white" />
</p>

We would like to extend our deepest gratitude to **[Santiago Hernández](https://www.udemy.com/user/shramos/)**, a renowned expert in Cybersecurity and Artificial Intelligence. His comprehensive **Deep Learning** course on Udemy was instrumental in shaping the development of this project. The knowledge gained from his course greatly influenced the design and architecture of the neural network used for this classifier.

Special thanks to **sartajbhuvaji** for creating and sharing the **Brain Tumor Classification (MRI) Dataset** on Kaggle. This invaluable dataset, which contains MRI scans with labeled tumor types, has been fundamental in building and training the machine learning model. It has played a crucial role in the successful implementation of this brain tumor classifier.

🌟 You can explore and access the dataset on [Kaggle](https://www.kaggle.com/datasets/sartajbhuvaji/brain-tumor-classification-mri). Your contribution to the AI and data science community is highly appreciated! 🙌

## 🌟 Explore My Other Deep Learning Projects! 🌟  

If you found this project intriguing, I invite you to check out my other cutting-edge deep learning initiatives:  

### [🌍 Advanced Classification of Disaster-Related Tweets Using Deep Learning 🚨](https://github.com/sergio11/disasters_prediction)  
How does social media respond to crises in real time? This project focuses on **classifying tweets** to determine if they’re related to disasters or not. Using **deep learning** and enriched datasets, I uncover insights into how people discuss disasters on platforms like Twitter.  

### [📰 Fighting Misinformation: Source-Based Fake News Classification 🕵️‍♂️](https://github.com/sergio11/fake_news_classifier)  
In a world plagued by fake news, this project tackles the challenge of **authenticity in journalism**. Using **source-based analysis** and **machine learning**, I aim to classify news articles as real or fake, promoting a more informed and responsible media ecosystem.

### [🛡️ IoT Network Malware Classifier with Deep Learning Neural Network Architecture 🚀](https://github.com/sergio11/iot_network_malware_classifier)  
The Internet of Things (IoT) is transforming the world, but it also introduces new security challenges. This project leverages **Deep Learning Neural Networks** to classify and detect malware in IoT network traffic. By analyzing patterns with AI, it provides **proactive cybersecurity solutions** to safeguard interconnected devices. Explore the intricate process of model design and training with the **Keras framework**, detailed in the accompanying Jupyter Notebook.

### [Spam Email Classification using LSTM 📧🤖](https://github.com/sergio11/spam_email_classifier_lstm)
This project uses a Bi-directional LSTM model 📧🤖 to classify emails as spam or legitimate, utilizing NLP techniques like tokenization, padding, and stopword removal. It aims to create an effective email classifier 💻📊 while addressing overfitting with strategies like early stopping 🚫.

### [💳 Fraud Detection Model with Deep Neural Networks (DNN)](https://github.com/sergio11?tab=repositories)  
Fraudulent transactions can cause immense financial losses. This project leverages **Deep Neural Networks** to detect fraud in financial data, even in highly imbalanced datasets. Learn about my process, from **Exploratory Data Analysis (EDA)** to building a **scalable and efficient solution** for fraud detection. 

Take a dive into these projects to see how **deep learning** is solving real-world problems and shaping the future of AI applications. Let's innovate together! 🚀

## 🩺 Why It Matters

Brain tumors represent a critical medical challenge due to their complex nature and the difficulty in accurate, early detection. Key challenges include:
- 🔍 **Complex Tumor Characteristics**: Tumor sizes, shapes, and locations vary widely across patients, making it hard for traditional diagnostic methods to consistently deliver accurate results.
- ⏳ **Time-Intensive Diagnosis**: Manual review of MRI scans by radiologists is slow, prone to human error, and highly dependent on expertise.
- 🌍 **Access to Skilled Radiologists**: In many regions, there is limited access to healthcare professionals skilled in interpreting medical imaging, delaying diagnoses and treatments.

This project offers a **fast**, **reliable**, and **automated** solution for detecting and classifying brain tumors, thereby assisting medical professionals in reducing diagnostic time and errors.

## 🎯 Objectives

The primary objectives of this project include:
- 📊 **Brain Tumor Classification**: Using deep learning techniques, we classify brain tumors into four categories: Glioma Tumor, Meningioma Tumor, Pituitary Tumor, and No Tumor.
- 🌐 **Scalable Diagnostic Framework**: Developing a framework for deploying the model as a cloud-based diagnostic tool to enable worldwide use.
- ⚡ **Optimized Diagnostic Accuracy**: By leveraging **Transfer Learning**, we improve the model’s performance even with relatively small datasets.

## 📁 Dataset

The dataset used in this project consists of labeled MRI images for brain tumor detection and classification. The data is sourced from reputable open-source contributions by:
- **Navoneel Chakrabarty**  
- **Swati Kanchan**

The dataset is well-suited for training deep learning models, containing multiple categories of brain tumor images along with non-tumor images.

## 🧠 Model Architecture

The model is built upon **EfficientNetB0**, a state-of-the-art Convolutional Neural Network (CNN) known for its efficiency and performance. We utilize **Transfer Learning (TL)** to fine-tune the pre-trained EfficientNetB0 model on our brain tumor dataset, allowing us to leverage features learned from the ImageNet dataset and apply them to the specialized task of brain tumor classification. The architecture includes:

1. **EfficientNetB0 Backbone**:
   - **Pretrained on ImageNet**: We start by using the pre-trained weights from ImageNet to benefit from powerful feature extraction capabilities.
   - **No Fully Connected Layers**: The fully connected layers are excluded to allow flexibility in model output based on our specific task (image classification).
  
2. **Global Average Pooling**:
   - This layer reduces the spatial dimensions of the feature maps, converting them into a single vector, which is easier to classify and prevents overfitting.

3. **Dropout Layer**:
   - To improve generalization and avoid overfitting, a dropout layer is added with a 50% dropout rate.

4. **Dense Layer with Softmax Activation**:
   - The final output layer uses softmax activation to classify the input into one of four classes: Glioma Tumor, No Tumor, Meningioma Tumor, and Pituitary Tumor.

5. **Optimizer and Loss Function**:
   - **Adam optimizer** is used for efficient weight updates.
   - The loss function is **categorical crossentropy**, suitable for multi-class classification.

## 🛠️ Techniques and Methodology

### 1. **Transfer Learning (TL)**
   - **Transfer Learning** allows leveraging pre-trained models on large datasets like ImageNet, significantly reducing training time and improving accuracy, even with smaller datasets.
   - In this project, we use **EfficientNetB0**, a highly optimized CNN model pre-trained on ImageNet.
   - We load the pre-trained weights (`weights='imagenet'`) and exclude the final output layer (`include_top=False`) to tailor the model for brain tumor classification.
   - Custom layers are added:
     - **GlobalAveragePooling2D**: Reduces dimensionality while retaining important features.
     - **Dropout**: Prevents overfitting by omitting neurons during training.
     - **Dense Layer**: Final output layer with Softmax activation to classify images into tumor categories (glioma, no tumor, meningioma, pituitary).

### 2. **Data Augmentation**
   - To artificially increase the size of the training dataset, we applied data augmentation techniques, including rotations, flips, zooms, and translations. This helps the model generalize better and reduces overfitting.

### 3. **Model Optimization**
   - To improve performance, **learning rate reduction** and **early stopping** were used to adjust the model's learning rate and prevent overfitting, allowing the model to converge more efficiently.
   - We used **TensorBoard** for monitoring training progress, providing insights into accuracy and loss metrics over time.

### 4. **Hyperparameter Tuning**
   - Various hyperparameters were fine-tuned, including the **dropout rate**, **learning rate**, and **batch size** to ensure the model achieved optimal results.

## 📊 Results and Performance

The model achieved **high accuracy** and consistent performance across all classes. Here are some of the key metrics:

### **Model Performance Metrics:**

- **Overall Accuracy**: 98% on the test dataset, showcasing the model's ability to correctly classify the majority of test cases.
- **Precision, Recall, and F1-Score**: Each class (Glioma Tumor, No Tumor, Meningioma Tumor, Pituitary Tumor) performed well, with the model achieving F1-scores near 1.00 for most categories.
  
#### **Confusion Matrix**:
- The confusion matrix shows that the model can reliably differentiate between the four classes, with minimal misclassification between tumor types.

### **Training & Validation Accuracy**:
- The model was trained for **12 epochs**. During training, the validation accuracy steadily improved, reaching up to **99.23%** by the final epoch.

### **Example Outputs**:
- For **Class 0 (Glioma Tumor)**, the model had a precision of **0.99** and recall of **0.97**, indicating high accuracy in identifying glioma tumors.
- For **Class 1 (No Tumor)**, the model had a perfect precision and recall of **1.00**, reflecting its reliability in identifying images with no tumor.

## 🚀 Key Features

- 🤖 **Deep Learning Architecture**: The model leverages **Convolutional Neural Networks (CNNs)** and **Transfer Learning** with **EfficientNetB0**, known for its high efficiency and scalability.
- 🏥 **Medical Impact**: Aimed at assisting radiologists and healthcare professionals in diagnosing brain tumors more accurately and quickly.
- ⚙️ **Cloud-Ready**: Designed to be integrated into a cloud-based diagnostic system for real-time processing of MRI images.
- 🔍 **High Accuracy**: With careful tuning and data augmentation, the model achieves near-perfect accuracy and generalization.

#### **Model Summary**:
After configuring the model, the summary is displayed to visualize the architecture, layers, and parameters.


## **📚 References**
- [Keras Documentation](https://keras.io/)
- [TensorFlow Documentation](https://www.tensorflow.org/)
- [https://www.kaggle.com/datasets/sartajbhuvaji/brain-tumor-classification-mri](https://www.kaggle.com/datasets/sartajbhuvaji/brain-tumor-classification-mri)
- [https://www.kaggle.com/code/jaykumar1607/brain-tumor-mri-classification-tensorflow-cnn](https://www.kaggle.com/code/jaykumar1607/brain-tumor-mri-classification-tensorflow-cnn)

## **🙏 Acknowledgments**

This project is inspired by the work of several talented individuals and the open-source community. Special thanks to:
- **Sartaj Bhuvaji**
- **Ankita Kadam**
- **Prajakta Bhumkar**
- **Sameer Dedge**

Also, a big thank you to the open-source community for providing valuable datasets, pre-trained models, and other resources that made this project possible.

A huge **thank you** to **jaykumar1607** for his amazing notebook on [Brain Tumor MRI Classification using TensorFlow & CNN](https://www.kaggle.com/code/jaykumar1607/brain-tumor-mri-classification-tensorflow-cnn) on Kaggle. His work served as a great source of inspiration and learning for the development of this project. The techniques and ideas shared in his notebook were highly beneficial and contributed significantly to shaping the architecture and methodology used here. 🙌

Also, a heartfelt **thank you** to **sartajbhuvaji** for providing the dataset that made this project possible! 🌟 The dataset can be found on [Kaggle](https://www.kaggle.com/datasets/sartajbhuvaji/brain-tumor-classification-mri). Your contribution is greatly appreciated! 🙏

🙏 I would like to extend my gratitude to [Santiago Hernández, an expert in Cybersecurity and Artificial Intelligence](https://www.udemy.com/user/shramos/). His incredible course on Deep Learning, available at Udemy, was instrumental in shaping the development of this project. The insights and techniques learned from his course were crucial in crafting the neural network architecture used in this classifier.

## Visitors Count

<img width="auto" src="https://profile-counter.glitch.me/brain_tumor_classification_cnn/count.svg" />

## Please Share & Star the repository to keep me motivated.
<a href = "https://github.com/sergio11/brain_tumor_classification_cnn/stargazers">
   <img src = "https://img.shields.io/github/stars/sergio11/brain_tumor_classification_cnn" />
</a>

## License ⚖️

This project is licensed under the MIT License, an open-source software license that allows developers to freely use, copy, modify, and distribute the software. 🛠️ This includes use in both personal and commercial projects, with the only requirement being that the original copyright notice is retained. 📄

Please note the following limitations:

- The software is provided "as is", without any warranties, express or implied. 🚫🛡️
- If you distribute the software, whether in original or modified form, you must include the original copyright notice and license. 📑
- The license allows for commercial use, but you cannot claim ownership over the software itself. 🏷️

The goal of this license is to maximize freedom for developers while maintaining recognition for the original creators.

```
MIT License

Copyright (c) 2024 Dream software - Sergio Sánchez 

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```




https://www.kaggle.com/datasets/sartajbhuvaji/brain-tumor-classification-mri/data
