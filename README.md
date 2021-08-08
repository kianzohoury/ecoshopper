# ecoshopper

[Frontend guide](ecoShopperReact/README.md)

This is our final project documentation. Feel free to add more tasks or TODOs as we continue working. I've added the notebook that runs the model that we'll use for the object detection task. 

## Dataset

The current image classifier is trained on images from [TrashNet](https://github.com/garythung/trashnet#trashnet). This dataset contains 2527 images — 501 glass, 594 paper, 403 cardboard, 482 plastic, 410 metal, 137 trash. The classifier achieves somewhere between 70-74.7% test accuracy compared to the 75% reached by the original team at Stanford.

The issue with this dataset is that it's relatively small, lacks diversity of objects, and does not have bounding box labels. Therefore, we need another dataset. [TACO](https://github.com/pedropro/TACO) has many more classes and bounding box labels, so we can train our model to perform semantic segmentation instead of vanilla image classifcation with the current dataset.

## Tasks

##### Object Detection

Take an image containing a waste object (recyclable or not) and classify each pixel according to the classifier's waste class prediction for each pixel. For example, each pixel of an image containing a paper cup with a plastic straw and lid will be classified as either beloning to paper or plastic by the classifier. 

##### Barcode Scanning

This task involves scanning a barcode, which will get information about the item (i.e. product name, brand, etc), which can then be used as input into another classifier. Based on the information extracted from the barcode, we might need to be creative in order to match the item with its recycling/reusabiliity protocol. For example, scanning the barcode of an item reveals it to be a coke can; however, we need to parse that information — possibly as a word embedding — to be classified into its material and therefore waste protocol. 

1. Scan barcode 
2. Identify item name, brand, etc.
3. Classify item by its material

## TODOs

- Transform the current model into an object detector (semantic segmentation)

- Investigate barcode API's

  
