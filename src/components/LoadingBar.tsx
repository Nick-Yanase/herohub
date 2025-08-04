export default function LoadingBar() {
  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-transparent overflow-hidden z-50">
      <div className="h-full w-full bg-primary animate-pulse-loading"></div>
    </div>
  )
}
