import sys
import torch
import warnings

from .imagefinder import get_images, view_images
from scipy.stats import mode
from torchvision import transforms

device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')

class_label = {0: "ORGANIC", 1 : "RECYCLABLE"}

transform = transforms.Compose([transforms.Lambda(lambda x: x.convert('RGB')),
                                transforms.Resize(225),
                                transforms.CenterCrop(224),
                                transforms.ToTensor()])

warnings.filterwarnings('ignore')
def get_prediction(model, upc, num_results=5, size=(300, 300), view=""):
    results = get_images(upc, num_results, size)
    images, links, img_links, titles = results[1:]
    if not images:
        return
    image_tensor = torch.stack([transform(img) for img in images], dim=0).to(device)
    output = model(image_tensor)
    preds = output.argmax(dim=1).cpu().numpy()
    pred = mode(preds)[0][0]
    if view:
        view_images(results)
        print([class_label[p] for p in preds])
        print('Overall Prediction: {}\n'.format(class_label[pred]))
    return images[0], titles[0], links[0], img_links[0], class_label[pred]

def main():
    upc, num, size, view = sys.argv[1:]
    get_prediction(upc, int(num), [int(size)] * 2, view)

if __name__ == '__main__':
    main()
