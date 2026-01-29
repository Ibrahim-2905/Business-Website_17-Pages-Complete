import { DataVirtualAssistanceDynamicHero } from "../DynamicHero/DataDynamicHero/DataVirtualAssistanceDynamicHero";
import DynamicHero from "../DynamicHero/DynamicHero";

export default function VirtualAssistancePage(){
    return(
        <div>
            <div>
                <DynamicHero data={DataVirtualAssistanceDynamicHero} />
            </div>
        </div>
    )
}