export default function Button({ children, Icon, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-fit group flex gap-2 items-center px-2.5 border py-1.5 text-sm font-medium truncate hover:text-sky-400 active:text-sky-400 outline-none border-white hover:border-sky-400 active:border-sky-400 outline-1 outline-transparent outline rounded outline-offset-0 focus-visible:outline-white transition ease-linear active:scale-95 cursor-pointer"
    >
      {children}
      {Icon && (
        <Icon className="transition-colors ease-linear size-3.5 group-hover:text-sky-400 group-active:text-sky-400" />
      )}
    </button>
  );
}
