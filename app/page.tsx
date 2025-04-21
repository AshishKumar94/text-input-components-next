import { QuestionIcon } from "@/app/QuestionIcon";
import { MailIcon } from "@/app/MailIcon";
import { type ReactElement } from "react";

const InputField = ({
  showMailIcon,
  enabled,
  error,
  subText,
  value,
}: {
  showMailIcon?: boolean;
  enabled?: boolean;
  error?: string;
  subText?: string;
  value?: string;
}): ReactElement => {
  return (
    <div className="flex flex-col gap-[8px]">
      <label htmlFor="email">Email</label>
      <div className="relative">
        <input
          type="email"
          placeholder="name@example.com"
          id="email"
          className={`h-10 border-1 ${showMailIcon ? "px-8" : "px-3"} border-neutral-200 rounded-sm bg-neutral-50 w-[340px]`}
          disabled={!enabled}
          value={value}
        />
        <QuestionIcon
          className={`absolute top-3 right-2 h-4 w-4 ${error ? "fill-red-600" : "fill-neutral-400"}`}
        />
        {showMailIcon ? (
          <MailIcon className="absolute top-2.5 left-2 h-5 w-5 fill-neutral-400" />
        ) : null}
      </div>

      <label
        htmlFor="email"
        className={`${error ? "text-red-600" : "text-neutral-500"}`}
      >
        {error ?? subText}
      </label>
    </div>
  );
};

const inputConfig = [
  {
    key: 1,
    showMailIcon: false,
    enabled: true,
    subText: "This is a hint text.",
    error: undefined,
  },
  {
    key: 1,
    showMailIcon: true,
    enabled: true,
    subText: "This is a hint text.",
    error: undefined,
  },
  {
    key: 1,
    showMailIcon: false,
    enabled: false,
    subText: "This is a hint text.",
    error: undefined,
  },
  {
    key: 1,
    showMailIcon: false,
    enabled: true,
    subText: "This is a hint text.",
    error: "This is an error message.",
    value: "name@example.com",
  },
];

export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] mt-[32px]">
      <main className="flex flex-col gap-[48px] row-start-0 items-center sm:items-start">
        {inputConfig.map(({ key, ...restConfig }) => (
          <InputField key={key} {...restConfig} />
        ))}
      </main>
    </div>
  );
}
