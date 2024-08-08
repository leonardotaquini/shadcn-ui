"use client";

import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export default function CheckboxPage() {
  const [terms, setTerms] = useState<boolean>(false);

  return (
    <div>
      <div className="items-top flex space-x-2">
        <Checkbox
          id="terms1"
          checked={terms}
          onCheckedChange={(value: boolean) => setTerms(value)}
        />
        <div className="grid gap-1.5 leading-none">
          <Label htmlFor="terms1">I agree to the terms and conditions</Label>
          <p className="text-sm text-muted-foreground">
            You agree to our Terms of Service and Privacy Policy.
          </p>
          {terms ? (
            <Badge variant="success">Accepted</Badge>
          ) : (
            <Badge variant="destructive">Not accepted</Badge>
          )}
        </div>
      </div>
    </div>
  );
}
