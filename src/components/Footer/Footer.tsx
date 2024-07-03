"use client";

import Image from "next/image";
import Instagram from "./socials/Instagram";
import Discord from "./socials/Discord";
import Tiktok from "./socials/Tiktok";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
    email: z
        .string()
        .min(1, { message: "This field has to be filled." })
        .email("This is not a valid email."),
});

const Footer = () => {
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
        },
    });

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values);
    }

    return (
        <footer className="h-96">
            <div className="flex flex-col sm:flex-row justify-around sm:justify-between items-center px-10 sm:px-20 md:px-40 h-60 mt-4 border-y-2">
                <div>
                <Image
                    src="/sora_logo.webp"
                    alt="Sora Logo"
                    width={1755 * 0.07}
                    height={586 * 0.07}
                />
                </div>
                <div>
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="space-y-8"
                        >
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>
                                            Subscribe to Email List
                                        </FormLabel>
                                        <div className="flex gap-2">
                                        <FormControl>
                                            <Input
                                                placeholder="example@gmail.com"
                                                {...field}
                                            />
                                        </FormControl>
                                        <Button type="submit">Submit</Button>
                                        </div>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </form>
                    </Form>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-around sm:justify-between px-10 sm:px-20 md:px-40 items-center h-32 text-center">
                <p className="text-neutral-500 text-sm">
                    Copyright © 2024 DormDojo. Powered by DormDojo.
                </p>
                <div className="flex gap-5">
                    <Instagram />
                    <Tiktok />
                    <Discord />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
