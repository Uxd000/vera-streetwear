export default function SkeletonCard() {
  return (
    <div className="animate-pulse">
      
      <div className="h-[500px] w-full bg-[#f1f1f1]" />

      <div className="mt-4 space-y-3">
        <div className="h-3 w-20 bg-[#f1f1f1]" />

        <div className="h-8 w-48 bg-[#f1f1f1]" />

        <div className="h-4 w-24 bg-[#f1f1f1]" />
      </div>

    </div>
  );
}