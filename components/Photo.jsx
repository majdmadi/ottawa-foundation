import Image from 'next/image';
import ImagePlaceholder from './ImagePlaceholder';
import { getPhoto } from '@/lib/photo-files';

/**
 * A site photo from lib/photos.mjs, or — if the file is not in /public/photos
 * yet — the labelled placeholder describing the shot needed.
 */
export default function Photo({
  photo,
  label,
  ratio = 'aspect-[4/3]',
  tone = 'dark',
  className = '',
  priority = false,
  sizes = '(min-width: 1024px) 50vw, 100vw',
  note,
}) {
  const p = getPhoto(photo);
  if (!p) return <ImagePlaceholder label={label} ratio={ratio} tone={tone} className={className} />;
  return (
    <div className={`${ratio} ${className} relative overflow-hidden rounded-lg bg-ink-800`}>
      <Image src={p.file} alt={p.alt} fill sizes={sizes} priority={priority} className="object-cover" />
      {note && (
        <span className="absolute bottom-2 right-2 rounded bg-ink-950/75 px-2 py-0.5 text-[10.5px] font-medium uppercase tracking-[0.1em] text-concrete-300">
          {note}
        </span>
      )}
    </div>
  );
}
