import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
export default function CardPage() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
      {"123".split("").map((_, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
          <div className="flex items-center justify-around my-2">
            <Button capitalize variant={"ghost"}>
              info
            </Button>
            <Button capitalize variant={"default"}>
              mas
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
}
