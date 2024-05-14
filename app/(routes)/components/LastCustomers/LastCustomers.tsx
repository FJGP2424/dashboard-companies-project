import { Building } from "lucide-react";
import { CustomIcon } from "@/components/CustomIcon";
import { CustomersTable } from "../CustomersTable";

export function LastCustomers() {
    return (
        <div className="p-5 rounded-lg shadow-sm bg-background">
            <div>
                <CustomIcon icon={Building} />
                <p className="text-xl">Last customers</p>
            </div>
            <div>
                <CustomersTable />
            </div>
         </div>
    )
}

