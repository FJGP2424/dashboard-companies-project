import { Building } from "lucide-react";
import { CustomIcon } from "@/components/CustomIcon";
import { CustomersTable } from "../CustomersTable";

export function LastCustomers() {
    return (
        <div className="shadow-sm bg-background rounded-lg p-5  ">
            <div className="flex gap-x-2 items-center">
                <CustomIcon icon={Building} />
                <p className="text-xl">Last customers</p>
            </div>
            <div>
                <CustomersTable />
            </div>
         </div>
    )
}
/*
import React from 'react';
import { Building } from "lucide-react";
import { CustomIcon } from "@/components/CustomIcon";
import { CustomersTable } from "../CustomersTable";

export function LastCustomers() {
    return (
        <div className="p-5 rounded-lg shadow-sm bg-background">
            <div className="flex items-center mb-4">
                <div className="w-12 h-12 mr-4 flex items-center justify-center rounded-lg bg-blue-500 text-white">
                    <CustomIcon icon={Building} />
                </div>
                <p className="text-xl font-bold">LAST CUSTOMER</p>
            </div>
            <div>
                <CustomersTable />
            </div>
        </div>
    );
}*/


