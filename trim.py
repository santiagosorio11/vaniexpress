from PIL import Image
import os

filepath = 'public/favicon.png'
if not os.path.exists(filepath):
    print(f"{filepath} not found")
else:
    img = Image.open(filepath)
    bbox = img.getbbox()
    if bbox:
        cropped = img.crop(bbox)
        width, height = cropped.size
        max_dim = max(width, height)
        # We keep 2% padding only, making it as big as possible in the tab
        pad = int(max_dim * 0.02)
        new_size = max_dim + pad * 2
        new_img = Image.new('RGBA', (new_size, new_size), (0, 0, 0, 0))
        x_offset = (new_size - width) // 2
        y_offset = (new_size - height) // 2
        new_img.paste(cropped, (x_offset, y_offset))
        new_img.save('public/favicon.png')
        print("Favicon cropped and padded to be maximally large.")
    else:
        print("Image is entirely empty.")
