import matplotlib.pyplot as plt
import numpy as np
import requests
import sys

from io import StringIO, BytesIO
from IPython.display import display
from PIL import Image
from serpapi import GoogleSearch
from urllib.request import urlopen


serp_key = 'b288660434d384763ed0a5a09a41a267b5621f67b633f439b117f545886a307d'
headers = {'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6)' +
           'AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36'}

def get_images(upc, num_results, size):
  """Returns tuple of UPC, IMAGES, LINKS, TITLES."""

  params = {
      "q": upc,
      "engine": "google",
      "google_domain": "google.com",
      "hl": "en",
      "gl": "us",
      "location_requested": "United States",
      "location_used": "United States",
      "api_key": serp_key,
      "num" : num_results,
      "device": "desktop",
      "tbm": "isch"
      }

  try:
    results = GoogleSearch(params).get_dict()['images_results']
    # results = GoogleSearch(params).get_dict()['shopping_results'][:num_results]
  except KeyError as e:
    return None
  if len(results) == 0:
    return None
  images = []
  links = []
  img_links = []
  titles = []
  for result in results:
    if len(images) == num_results:
      break
    try:
      request = requests.get(result['original'], headers=headers, timeout=5)
    except Exception as e:
      continue
    link = requests.get(result['link'])
    title = result['title']
    if request.ok:
      try:
        img = Image.open(BytesIO(request.content)).resize(size)
      except Exception as e:
        continue
      if img.mode == 'RGB':
        if len(images) == 0:
          images.append(img)
        else:
          duplicate = False
          for prev_img in images:
            prev_norm = np.asarray(prev_img) / np.linalg.norm(np.asarray(prev_img))
            img_norm = np.asarray(img) / np.linalg.norm(np.asarray(img))
            # ignore duplicates
            if np.sum(prev_norm * img_norm) > 0.99:
              duplicate = True
              break
          if not duplicate:
            images.append(img)
            links.append(link)
            titles.append(title)
            img_links.append(result['original'])
  if len(images) % 2 == 0:
    return upc, images[:-1], links[:-1], titles[:-1]
  else:
    return upc, images, links, img_links, titles

def view_images(data, verbose=False):
  upc, images, links, img_links, titles = data
  print('###### Found {}'.format(len(images))
        + ' valid results for UPC Code {} ######'.format(upc))
  fig = plt.figure(figsize=(12, 12))
  fig.subplots_adjust(hspace=0.1, wspace=0.1)
  for i in range(len(images)):
    if verbose:
      print('Title: {}'.format(titles[i]))
      print('Page Url: {}'.format(links[i]))
      print('Image Url: {}'.format(links[i]))
    plt.subplot(len(images), len(images), i + 1)
    plt.imshow(images[i])
    plt.axis('off')
  plt.show()

def main():
    upc, num, size, view = sys.argv[1:]
    images = get_images(upc, int(num), [int(size)] * 2)
    if images and view == 'view':
        view_images(images)

if __name__ == '__main__':
    main()
