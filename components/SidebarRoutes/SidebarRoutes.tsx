import {dataGeneralSidebar, dataSupportSidebar, dataToolsSidebar} from "./SidebarRoutes.data"

export function SidebarRoutes() {
    return (
        <div className="felx flex-col justify-content h-full">
            <div>
                <div className="p-2 md:p-6">
                    <p>GENERAL</p>
                    {dataGeneralSidebar.map((item => (
                        <p> key={item.label}>{item.label}</p>
                    )))}
                </div>
            </div>
        </div>
    )
}
