import { TrpcProvider } from "@/providers/trpc";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <TrpcProvider>{children}</TrpcProvider>;
};

export default Providers;
