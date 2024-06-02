export default function Logo() {
  const src = "/logo.png";
  return (
    <div className=" flex justify-center">
      <img className="h-[5rem] lg:h-[8rem] w-auto" src={src} alt="logo" />
    </div>
  );
}
