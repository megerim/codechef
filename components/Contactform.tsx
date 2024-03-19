"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Textarea } from "@/components/ui/textarea"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
    name: z.string().min(2, {
      message: 'Name must be at least 2 characters.'
    }),
    email: z.string().email({ message: 'Invalid email address.' }),
    message: z.string().min(10, {
      message: 'Message must be at least 10 characters.'
    })
  });

export default function ContactForm() {
  const form = useForm({
    resolver: zodResolver(formSchema)
  });

  const onSubmit = (data: any) => {
    console.log(data);
    // Handle form submission here
  };

  return (
    <Form {...form} >
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 text-left  ">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">İsim</FormLabel>
              <FormControl>
                <Input className="text-white" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">E-Mail</FormLabel>
              <FormControl>
                <Input className="text-white" type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Mesajınız</FormLabel>
              <FormControl>
                <Textarea className="text-white" {...field} />
              </FormControl>
                <FormDescription className="text-white">Mesaj bölümünü sağ alttan büyütebilirsiniz.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="flex px-36 w-50 mx-auto bg-white text-black hover:bg-orange-400">Gönder</Button>
      </form>
    </Form>
  );
}