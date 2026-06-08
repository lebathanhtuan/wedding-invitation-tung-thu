import Lightbox from 'yet-another-react-lightbox'
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen'
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow'
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails'
import Zoom from 'yet-another-react-lightbox/plugins/zoom'
import 'yet-another-react-lightbox/plugins/thumbnails.css'

function PhotoLightbox({ photos, activeIndex, onClose }) {
  return (
    <Lightbox
      slides={photos.map((src) => ({ src }))}
      open={activeIndex >= 0}
      index={activeIndex}
      close={onClose}
      plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
    />
  )
}

export default PhotoLightbox
