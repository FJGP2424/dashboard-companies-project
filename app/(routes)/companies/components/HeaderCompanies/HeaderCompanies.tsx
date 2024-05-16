"use client"

import { Button } from "@/components/ui/button"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  import { CirclePlus } from "lucide-react"
  import { useState } from "react"
import { FormCreateCustomer } from "../FormCreateCustomer"
    

export function HeaderCompanies() {
    const [openModalCreate, setOpenModalCreate] = useState(false)

    return (
        <div className="flex justify-between items-center">
            <h2 className="text-2xl">List of companies </h2>

            <AlertDialog open = {openModalCreate} onOpenChange=
            {setOpenModalCreate}>
                <AlertDialogTrigger asChild>
                    <Button>Create Company</Button>
                </AlertDialogTrigger>
                <AlertDialogContent className="sm:max-w-[625px]">
                    <AlertDialogHeader>
                        <AlertDialogTitle>Create Customer</AlertDialogTitle>
                        <AlertDialogDescription>
                            Create and configure your customer
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    
                    <FormCreateCustomer setOpenModalCreate={setOpenModalCreate} />
                </AlertDialogContent>
            </AlertDialog>
        </div>
    )
}


