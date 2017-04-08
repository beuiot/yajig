# yajig
Yet Another JavaScript Image Gallery

- Only handles the logic. Theming, etc, up to you
- Thumbs list to fullscreen slideshow
- Fallback for browsers without javascript
- Vanilla javascript

## Why another freaking javascript image gallery?

I searched for the bazillionest time this type of gallery (thumbs + fullscreen slideshow) and could not find something small/flexible enough for my use cases. So there it is.

## How to

Options:

- **thumnailContainerClassName**: tells the library what css class are the thumnails in. In the children elements, there must be a link to the full size image and an img tag with the thumbnail; everything will be generated from those informations.
- **fullscreenContainerClassName**: the fullscreen element is up to you, as long as it has an img tag somewhere.


[Demo here](https://beuiot.github.io/yajig/)

## TODO

- Have required CSS be injected via javascript?
- Auto-hide full screen buttons
- Have fullscreen as an option