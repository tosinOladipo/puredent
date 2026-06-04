"use client";
import { store } from "@/app/store/store";
import { Provider } from "react-redux";
import { Toaster } from "@/components/ui/sonner"

const Providers = ({ children }: { children: React.ReactNode }) => {
 
  return (
    <Provider store={store}>
      <Toaster />
        {children}
    </Provider>
  );
};
export default Providers;
