export default function Button({ children, icon, onClick }) {
  return (
    <button
      onClick={onClick}
      class="w-fit group flex gap-1 items-center px-2.5 border py-1.5 text-sm font-medium truncate hover:text-blue-400 active:text-blue-400 outline-none border-white hover:border-blue-400 active:border-blue-400 outline-1 outline-transparent outline rounded outline-offset-0 focus-visible:outline-white transition ease active:scale-95 cursor-pointer"
    >
      {children}
      {icon && (
        <ion-icon
          name={icon}
          class=" transition-colors ease size-3.5 group-hover:text-blue-400 group-active:text-blue-400"
        />
      )}
    </button>
  );
}
