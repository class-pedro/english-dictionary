export function Loader() {
  return (
    <div className="h-52 w-full flex justify-center items-center">
      <div
        className="w-14 h-14 border-[11px] border-double border-[#3b82f6] border-l-solid rounded-full animate-spinner"
        style={{ borderLeftStyle: 'solid' }}
      />
    </div>
  )
}