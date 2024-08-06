import { Button } from "@/components/ui/button";
import { ChevronRight, Loader2, Mail } from "lucide-react";

export default function ButtonPage() {
  return (
    <div className="grid grid-cols-4 gap-2">
      <Button>default</Button>
      <Button variant={"destructive"}>destructive</Button>
      <Button variant={"ghost"}>ghost</Button>
      <Button variant={"link"}>link</Button>
      <Button variant={"outline"}>outline</Button>
      <Button variant={"secondary"}>secondary</Button>
      <Button variant={"success"}>secondary</Button>
      <Button capitalize variant={"secondary"}>
        capitalize
      </Button>
      <Button disabled>disabled</Button>

      <Button variant="outline" size="icon">
        <ChevronRight className="h-4 w-4" />
      </Button>

      <Button variant={"destructive"}>
        <Mail className="mr-2 h-4 w-4" />
        <p>login with icon</p>
      </Button>

      <Button disabled variant={"success"}>
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        Please wait
      </Button>
    </div>
  );
}
