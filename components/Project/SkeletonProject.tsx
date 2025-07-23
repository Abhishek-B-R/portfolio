export default function SkeletonProject() {
  return (
    <div className="col-span-2 2xl:col-span-1 mx-10 sm:w-[570px] w-[85vw] animate-pulse">
      <div className="rounded-lg overflow-hidden bg-muted h-[12rem] 2xl:h-[15rem] w-full" />
      <div className="mt-6 space-y-3">
        <div className="h-5 w-3/4 bg-muted rounded" />
        <div className="h-4 w-full bg-muted rounded" />
        <div className="h-4 w-5/6 bg-muted rounded" />
        <div className="h-8 w-32 bg-muted rounded mt-2" />
      </div>
    </div>
  )
}
