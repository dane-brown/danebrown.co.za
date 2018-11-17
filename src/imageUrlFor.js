import sanityClient from './sanity';
import imageUrlBuilder from '@sanity/image-url';

// Image Url
const imageBuilder = imageUrlBuilder(sanityClient);
function imageUrlFor(source) {
    return imageBuilder.image(source)
};

export default imageUrlFor;