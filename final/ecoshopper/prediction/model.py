import torch
import torch.nn as nn
import torchvision

import ssl
ssl._create_default_https_context = ssl._create_unverified_context

class WasteNet(nn.Module):
    def __init__(self, num_classes=2):
        super(WasteNet, self).__init__()
        pretrained = torchvision.models.vgg16_bn(pretrained=True)
        for layer in list(pretrained.children()):
            layer.requires_grad = False
        self.model = nn.Sequential(*list(pretrained.children())[:-1])
        self.classifier = nn.Sequential(nn.LazyLinear(4096, bias=True),
                                        nn.ReLU(),
                                        nn.Dropout(0.5),
                                        nn.Linear(4096, 4096),
                                        nn.ReLU(),
                                        nn.Dropout(0.5),
                                        nn.Linear(4096, num_classes))
        self.classifier.requires_grad = True

    def forward(self, x):
        x = self.model(x)
        x = self.classifier(x.flatten(1, -1))
        return x
