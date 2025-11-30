# AI-Powered Brain Tumor Classification With Noisy Data: Advanced MRI Analysis with CNNs

This repository was forked from an earlier project that trained a classifier on the **Brain Tumor Classification (MRI) Dataset** created by **sartajbhuvaji**, which can be found on [Kaggle](https://www.kaggle.com/datasets/sartajbhuvaji/brain-tumor-classification-mri). Building on that foundation, this fork expands the work by:

- Augmenting the existing dataset with an **additional brain MRI dataset** from [Kaggle](https://www.kaggle.com/datasets/masoudnickparvar/brain-tumor-mri-dataset), which contains the same tumor categories.  
- **Adding artificial noise** to the new dataset before augmentation, making the model robust to both noisy and clean MRI data.

The original authors of this project used **Convolutional Neural Networks (CNNs)** and **Transfer Learning (TL)** to explore how modern AI techniques can support medical diagnosis and improve patient care. Their approach is based on **EfficientNetB0**, a state-of-the-art model pre-trained on the **ImageNet** dataset. The original authors fine-tuned the model specifically for brain tumor classification.

The purpose of this expansion is to train a classifier that better reflects **real-world MRI conditions**, where images are often noisy and preprocessing can be costly in terms of time and resources. The model will be **re-trained on the combined dataset** and evaluated using the same metrics, while **tuning hyperparameters** for optimal performance.

## Relevance

Brain tumors represent a critical medical challenge due to their complex nature and the difficulty in accurate, early detection. Key challenges include:
- **Complex Tumor Characteristics**: Tumor sizes, shapes, and locations vary widely across patients, making it hard for traditional diagnostic methods to consistently deliver accurate results.
- **Time-Intensive Diagnosis**: Manual review of MRI scans by radiologists is slow, prone to human error, and highly dependent on expertise.
- **Access to Skilled Radiologists**: In many regions, there is limited access to healthcare professionals skilled in interpreting medical imaging, delaying diagnoses and treatments.
- **Noisy Imaging**: MRI scans may contain noise or blurriness due to patient movement, resulting in unclear MRI scans that are difficult to review.

The expansion of this project will focus on addressing the last key challenge, through classifying brain tumors in noisy brain MRI images.

## Objectives

The primary objectives of this expansion include:
- **Brain Tumor Classification**: Using deep learning techniques, the model will classify brain tumors into four categories: Glioma Tumor, Meningioma Tumor, Pituitary Tumor, and No Tumor.
- **Improving Diagnostic Accuracy With Noisy Images**: By augmenting the dataset with artificially noisy MRI scans, the model is trained to recognize tumors even in imperfect conditions, improving robustness and real-world applicability.
- **Dataset Expansion and Diversity**: Incorporate a second publicly available brain MRI dataset to increase the size, variety, and representativeness of training data.
- **Hyperparameter Tuning**: Re-train and fine-tune the model with the expanded dataset, adjusting learning rate, dropout, batch size, and other hyperparameters to optimize accuracy.
- **Generalization and Reliability**: Evaluate model performance across both noisy and clean datasets to ensure consistent diagnostic capability.

## Dataset

The datasets used in this project consist of labeled MRI images for brain tumor detection and classification. The data is sourced from reputable open-source contributions:
- [figshare](https://figshare.com/articles/dataset/brain_tumor_dataset/1512427)
- [SARTAJ dataset](https://www.kaggle.com/sartajbhuvaji/brain-tumor-classification-mri)
- [Br35H](https://www.kaggle.com/datasets/ahmedhamada0/brain-tumor-detection?select=no)

These datasets are well-suited for training deep learning models, containing multiple categories of brain tumor images along with non-tumor images.

## Model Architecture

The model is currently built upon **EfficientNetB0**, a state-of-the-art Convolutional Neural Network (CNN) known for its efficiency and performance. The original authors utilized **Transfer Learning (TL)** to fine-tune the pre-trained EfficientNetB0 model on the brain tumor dataset, allowing them to leverage features learned from the ImageNet dataset and apply them to the specialized task of brain tumor classification. The architecture includes:

1. **EfficientNetB0 Backbone**:
   - **Pretrained on ImageNet**: The pre-trained weights from ImageNet are used to benefit from powerful feature extraction capabilities.
   - **No Fully Connected Layers**: The fully connected layers are excluded to allow flexibility in model output based on the specific task (image classification).
  
2. **Global Average Pooling**:
   - This layer reduces the spatial dimensions of the feature maps, converting them into a single vector, which is easier to classify and prevents overfitting.

3. **Dropout Layer**:
   - To improve generalization and avoid overfitting, a dropout layer is added with a 50% dropout rate.

4. **Dense Layer with Softmax Activation**:
   - The final output layer uses softmax activation to classify the input into one of four classes: Glioma Tumor, No Tumor, Meningioma Tumor, and Pituitary Tumor.

5. **Optimizer and Loss Function**:
   - The **Adam optimizer** is used for efficient weight updates.
   - The loss function is **categorical crossentropy**, suitable for multi-class classification.

## Techniques and Methodology

### 1. **Transfer Learning (TL)**
   - **Transfer Learning** allows leveraging pre-trained models on large datasets like ImageNet, significantly reducing training time and improving accuracy, even with smaller datasets.
   - This project uses **EfficientNetB0**, a highly optimized CNN model pre-trained on ImageNet.
   - The pre-trained weights are loaded (`weights='imagenet'`) and the final output layer is excluded (`include_top=False`) to tailor the model for brain tumor classification.
   - Custom layers are added:
     - **GlobalAveragePooling2D**: Reduces dimensionality while retaining important features.
     - **Dropout**: Prevents overfitting by omitting neurons during training.
     - **Dense Layer**: Final output layer with Softmax activation to classify images into tumor categories (glioma, no tumor, meningioma, pituitary).

### 2. **Adding Noise to the Training Images**
   - Three types of noise were added to the training images only: **Gaussian noise**, **salt-and-pepper noise**, and **speckle noise**. These types of noise were added randomly at varying intensities. Noise was only added to the training images to prevent data leakage and to ensure that the model generalizes to both noisy and non-noisy brain MRI images.

### 3. **Data Augmentation**
   - The types of data augmentation used include **rotations**, **width shifts**, **height shifts**, and **horizontal flips**. **ImageDataGenerator** is used to create these augmented images.

### 4. **De-Duplication**
   - **Perceptual hashing** was used to remove near-duplicate images, since perceptual hashing assesses the similarity of images.

### 5. **Hyperparameter Tuning**
   - The hyperparameter that was tuned is the **number of epochs**. Increasing the number of epochs from 12 to 20 improved the generalization of the model by allowing it to train for longer.

## Results and Performance

The results in the .ipynb file indicate that removing duplicates, adding noise to the training images only, using data augmentation and increasing the number of epochs improved the generalization of the model by reducing data leakage and forcing the model to generalize to noisy and non-noisy data rather than memorize patterns in clean data. Overfitting has been reduced, which can be seen by how the validation curves increase/decrease relative to the training curves, and how precision, recall, and F1-score dropped to more realistic values.

## Disclaimer  

This project has been developed **exclusively for research and educational purposes** to explore the potential of AI in medical image analysis. While the **AI-powered brain tumor classification system** demonstrates promising results, it is an **experimental prototype** and **not intended for clinical or diagnostic use**.

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
