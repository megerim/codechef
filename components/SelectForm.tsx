"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";

const FormSchema = z.object({
  email: z.string({
    required_error: "Email gereklidir",
  }).email({ message: "Geçersiz email adresi" }),
  hizmet: z.string({
    required_error: "Lütfen bir hizmet seçiniz.",
  })
});

export default function SelectForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "Başarılı ✔️ En kısa sürede size ulaşacağız ⏰" ,
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-700 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col space-y-6 md:flex-row md:items-end md:space-x-4 md:space-y-0 bg-black/75 border-2 border-gray-600 drop-shadow-2xl py-5 px-12  rounded-md">
        <FormField
          control={form.control}
          name="hizmet"
          render={({ field }) => (
            <FormItem className="text-white flex-1">
              <FormLabel>Sizin için ne yapabiliriz?</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Hizmetlerimiz" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Web Site Tasarım & Kodlama">Web Site Tasarım & Kodlama</SelectItem>
                  <SelectItem value="Sosyal Medya İçerik Üretimi & Yönetimi">Sosyal Medya İçerik Üretimi & Yönetimi</SelectItem>
                  <SelectItem value="Reklam Hesabı Yönetimi">Reklam Hesabı Yönetimi</SelectItem>
                  <SelectItem value="Arama Motoru Optimizasyonu">Arama Motoru Optimizasyonu</SelectItem>
                </SelectContent>
              </Select>
              
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="text-white flex-1">
              <FormLabel>Size nereden ulaşalım?</FormLabel>
              <Input {...field} className="lg:min-w-72" type="email" placeholder="E-Mail Adresiniz" />
              
              <FormMessage />
            </FormItem>
          )}
        />
        <Button variant={"secondary"} type="submit" className="mt-4 md:mt-0">Gönder</Button>
      </form>
    </Form>
  );
}
