export default function ResponsiveImage({
  src,
  srcSet,
  sizes = "100vw",
  alt,
  width,
  height,
  className = "",
  imgClassName = "",
  eager = false,
  caption,
}) {
  return (
    <div className={className}>
      <div className="relative h-full overflow-hidden rounded-2xl bg-forest-100">
        <img
          src={src}
          srcSet={srcSet}
          sizes={sizes}
          alt={alt}
          width={width}
          height={height}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          className={`h-full w-full object-cover ${imgClassName}`}
        />
      </div>
      {caption ? (
        <p className="mt-2 text-[0.6875rem] leading-relaxed text-muted">{caption}</p>
      ) : null}
    </div>
  );
}
