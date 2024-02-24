import { EvervaultCard, Icon } from "./ui/evervault-card";

export function EvervaultCardDemo() {
  return (
    <div className="border rounded-lg shadow-[0_8px_16px_rgb(0_0_0/0.4)]  border-white/[0.2] shadow-gray-500/50  flex flex-col items-start max-w-sm mx-auto p-4 relative h-[24rem]">
      <Icon className="absolute h-6 w-6 top-0 left-0 text-gray-500" />
      <Icon className="absolute h-6 w-6 top-0 right-0 text-white" />
      <Icon className="absolute h-6 w-6 bottom-0 left-0 text-white" />
      <Icon className="absolute h-6 w-6 bottom-0 right-0 text-gray-500" />

      <EvervaultCard />

    </div>
  );
}
