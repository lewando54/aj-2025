import { HTMLAttributes, ReactNode } from "react";

export default function Heading({ children }: { children: ReactNode}) { 
    return <div className="heading-with-trinkets"><h3 className="text-5xl font-bold text-[#b39727] text-center">{children}</h3></div>;
}