import { cn } from "@/utils/classname";

const RenderInnerHtml = ({
  html,
  className,
}: {
  html: string;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "prose prose-slate prose-p:leading-tight prose-sm max-w-none",
        className
      )}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export default RenderInnerHtml;
