import { cn } from "@/lib/utils";

interface SectionImageProps {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
}

const SectionImage = ({ src, alt, className, imageClassName }: SectionImageProps) => {
  return (
    <div
      className={cn(
        "relative aspect-square rounded-2xl bg-muted/50 border-2 border-muted-foreground/20 overflow-hidden group hover:border-primary/30 smooth-transition",
        className
      )}
    >
      <img
        src={src}
        alt={alt}
        className={cn("w-full h-full object-cover", imageClassName)}
      />
    </div>
  );
};

export default SectionImage;
