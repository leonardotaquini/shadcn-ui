'use client';

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
  
} from "@/components/ui/command";
import { FaceIcon } from "@radix-ui/react-icons";
import { CalendarIcon, CalculatorIcon, PersonStandingIcon, Settings2Icon } from "lucide-react";
import { useEffect, useState } from "react";

export default function CommandPage() {

  const options = [
    { name: "Calendar", icon: <CalendarIcon /> },
    { name: "Search Emoji", icon: <FaceIcon /> },
    { name: "Calculator", icon: <CalculatorIcon /> },
    { name: "Profile" , icon: <PersonStandingIcon /> },
    { name: "Settings", icon: <Settings2Icon /> },
  ];

  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
 
    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [])

  return (
    <div>
      <CommandDialog open={open} onOpenChange={ setOpen }>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {
            options.map( option => (
              <CommandGroup>
                <CommandItem className="space-x-2">
                  {option.icon}
                  <span>{option.name}</span>
                </CommandItem>
              </CommandGroup>
            ))
          }
        </CommandList>
      </CommandDialog>

      <div className=" h-[400px] flex justify-center items-center">
      <p className="text-sm text-muted-foreground">
        Press{" "}
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">⌘</span>J
        </kbd>
        {" "}or{" "}
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">CTRL</span> + J
        </kbd>
      </p>
      </div>
    </div>
  );
}
