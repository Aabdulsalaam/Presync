
type UserAvatarProps = {
  initials: string;
  large?: boolean;
};

export default function UserAvatar({
  initials,
  large = false,
}: UserAvatarProps) {
  return (
    <div
      className={`flex shrink-0 items-center justify-center rounded-full bg-indigo-100 font-semibold text-slate-700 ${
        large
          ? "h-11 w-11 text-sm"
          : "h-7 w-7 text-[10px]"
      }`}
    >
      {initials}
    </div>
  );
}
