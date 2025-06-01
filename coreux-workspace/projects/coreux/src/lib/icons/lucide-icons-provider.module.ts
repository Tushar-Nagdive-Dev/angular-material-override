import { NgModule } from "@angular/core";
import { Check, Eye, EyeOff, LucideAngularModule, Search, User, X } from "lucide-angular";

@NgModule({
    imports: [LucideAngularModule.pick({User, Check, Search, X, Eye, EyeOff})],
    exports: [LucideAngularModule]
})
export class LucideIconsProviderModule {}