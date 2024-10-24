import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Input/>
      <Select/>
      <Button>Primary</Button>
      <Button variant="secondary" size="lg" >Secondary</Button>
      <Button variant="destructive" >Destrcutive</Button>
      <Button variant="ghost" >Ghost</Button>
      <Button variant="muted" >Muted</Button>
      <Button variant="outline" >outline</Button>
      <Button variant="teritary" size="lg" >teritary</Button>
    </div>
  );
}
